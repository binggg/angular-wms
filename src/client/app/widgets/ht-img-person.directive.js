(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('htImgPerson', htImgPerson);

    htImgPerson.$inject = ['config'];
    /* @ngInject */
    function htImgPerson (config) {
        //Usage:
        //<img ht-img-person="{{person.imageSource}}"/>
        //<img-crop
        //    image="{string}"
        //    result-image="{string}"
        //            [change-on-fly="{boolean}"]
        //            [area-type="{circle|square}"]
        //            [area-min-size="{number}"]
        //            [result-image-size="{number}"]
        //            [result-image-format="{string}"]
        //            [result-image-quality="{number}"]
        //            [on-change="{expression}"]
        //            [on-load-begin="{expression"]
        //            [on-load-done="{expression"]
        //            [on-load-error="{expression"]
        //        ></img-crop>
        var basePath = config.imageBasePath;
        var unknownImage = config.unknownPersonImageSource;
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('htImgPerson', function (value) {
                value = basePath + (value || unknownImage);
                attrs.$set('src', value);
            });
        }
    }
})();
