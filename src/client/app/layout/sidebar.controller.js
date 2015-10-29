(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'dataservice', 'routerHelper', '_'];
    /* @ngInject */
    function SidebarController($state, dataservice, routerHelper, _) {
        var vm = this;
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;
        vm.sections = [];
        vm.isClosed = isClosed;
        vm.toggle = toggle;

        activate();

        function isClosed(section) {
            return !section.open;
        }

        function toggle(section) {
            var openOld = section.open;
            for (var i in vm.sections) {
                if (vm.sections) {
                    var sec = vm.sections[i];
                    if (sec.children) {
                        for (var j in sec.children) {
                            if (sec.children) {
                                var child = sec.children[j];
                                if (child.type === 'toggle' && !openOld) {
                                    child.open = false;
                                }
                            }
                        }
                    }
                }
            }
            section.open = !openOld;
        }

        function activate() {
            getNavRoutes();
        }

        function getNavRoutes() {
            var tmpMenu = {};
            //console.log(states);
            states.filter(function (r) {
                return r.settings;
            }).map(function (state, index) {
                    var parent = state.settings.parent;
                    var group = state.settings.group;
                    var content = {
                        name: state.title,
                        id: state.name,
                        url: state.url,
                        icon: state.settings.icon,
                        type: 'link'
                    };

                    group = group ? group : 'default';

                    if (!tmpMenu[group]) {
                        tmpMenu[group] = {
                            name: group,
                            type: group !== 'default' && 'heading',
                            children: []
                        };
                    }

                    if (parent) {
                        var toggle = _.where(tmpMenu[group].children, {
                            name: parent,
                            type: 'toggle'
                        });

                        if (!toggle.length) {
                            tmpMenu[group].children.push({
                                name: parent,
                                type: 'toggle',
                                pages: []
                            });
                        }

                        var findToggle = _.where(tmpMenu[group].children, {
                            name: parent,
                            type: 'toggle'
                        });

                        findToggle[0].pages.push(content);
                    } else {
                        tmpMenu[group].children.push(content);
                    }
                }
            );

            vm.sections = _.values(tmpMenu);
            //console.log(vm.sections);
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }
})
();
