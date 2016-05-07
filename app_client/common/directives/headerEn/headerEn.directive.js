angular
    .module('nutsApp')
    .directive('headerEn', headerEn);

function headerEn(){
    return {
        restrict: 'EA',
        templateUrl: '/common/directives/headerEn/headerEn.template.html'
    };
}