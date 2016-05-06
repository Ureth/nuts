angular
    .module('nutsApp')
    .directive('footerRu', footerRu);

function footerRu(){
    return {
        restrict: 'EA',
        templateUrl: '/common/directives/footerRu/footerRu.template.html'
    };
}