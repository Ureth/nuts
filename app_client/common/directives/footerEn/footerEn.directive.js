angular
    .module('nutsApp')
    .directive('footerEn', footerEn);

function footerEn(){
    return {
        restrict: 'EA',
        templateUrl: '/common/directives/footerEn/footerEn.template.html'
    };
}