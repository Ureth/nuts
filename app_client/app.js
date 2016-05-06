angular.module('nutsApp', ['ngRoute']);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/delivery', {
      templateUrl: 'delivery/delivery.view.html',
      controller: 'deliveryCtrl',
      controllerAs: 'vm'
    })
    .when('/reviews', {
      templateUrl: 'reviews/reviews.view.html',
      controller: 'reviewsCtrl',
      controllerAs: 'vm'
    })
    .when('/walnut', {
      templateUrl: 'products/walnut.view.html'
    })
    .when('/hazelnut', {
      templateUrl: 'products/hazelnut.view.html'
    })
    .when('/almond', {
      templateUrl: 'products/almond.view.html'
    })
    .when('/honey', {
      templateUrl: 'products/honey.view.html'
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
}

angular
  .module('nutsApp')
  .config(['$routeProvider', '$locationProvider', config]);