(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('htSquareImage', htSquareImage);

    //htSquareImage.$inject = [];
    /* @ngInject */
    function htSquareImage() {
        //Usage:
        //<ht-square-image
        //    result-image="resultImage"
        //    change-on-fly="true"
        //    area-type="square"
        //    result-image-size="300"
        //    result-image-format="image/png"></ht-square-image>
        var directive = {
            link: link,
            templateUrl: 'app/widgets/square-image.html',
            restrict: 'EA',
            scope: {
                resultImage: '=',
                changeOnFly: '=',
                areaType: '@',
                areaMinSize: '=',
                resultImageSize: '=',
                resultImageFormat: '@',
                resultImageQuality: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            scope.myImage = '';
            scope.resultImage = '';
            scope.isEditing = false;

            element.find('.file-input').bind('change', handleFileSelect);

            function handleFileSelect(evt) {
                var file = evt.currentTarget.files[0];
                var reader = new FileReader();
                reader.onload = function (evt) {
                    scope.$apply(function (scope) {
                        scope.isEditing = true;
                        scope.myImage = evt.target.result;
                    });
                };
                reader.readAsDataURL(file);
            }

            element.find('.fake-btn').bind('click', function () {
                element.find('.file-input').click();
            });

            element.find('.confirm-btn').bind('click', function () {
                scope.$apply(function(scope) {
                    scope.isEditing = false;
                })
            })
        }
    }
})();
