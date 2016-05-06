angular
    .module('nutsApp')
    .directive('headerRu', headerRu);

function headerRu(){
    return {
        restrict: 'EA',
        templateUrl: '/common/directives/headerRu/headerRu.template.html'
    };
}