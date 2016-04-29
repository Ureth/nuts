angular
    .module('nutsApp')
    .directive('fbComments', fbComments);


fbComments.$inject = ['$location'];

function fbComments ($location) {
    return {
        restrict: 'E',
        templateUrl: "/common/directives/fbComments/fbComments.template.html",
        scope:{},
        replace: true,
        link: function( el, attr){
            curPath = $location.absUrl();
        }
    };
}


