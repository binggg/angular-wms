(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[Jewellery Error] ',
        appTitle: 'Jewellery'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

    core.config(mdThemeConfig);

    mdThemeConfig.$inject = ['$mdThemingProvider'];
    /* @ngInject */
    function mdThemeConfig($mdThemingProvider) {
        $mdThemingProvider.definePalette("docs-blue", $mdThemingProvider.extendPalette("amber", {
            300: 'FF8F00',
            400: 'FF8F00',
            500: 'FF8F00',
            600: 'FF8F00',
            700: 'FF8F00',
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 A100",
            contrastStrongLightColors: "300 400 A200 A400"
        }));
        $mdThemingProvider.definePalette("black", $mdThemingProvider.extendPalette("grey", {
            A200: "303035",
            A100: '000',
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 A100",
            contrastStrongLightColors: "300 400 A200 A400"
        }));
        $mdThemingProvider.theme('default')
            .primaryPalette('docs-blue',{
                default: '500',
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100'
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            .accentPalette('black',{
                default: 'A200'
            })
    }

})();
