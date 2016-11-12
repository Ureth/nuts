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
    .when('/cashew', {
      templateUrl: 'products/cashew.view.html'
    })
    .when('/pistachios', {
      templateUrl: 'products/pistachios.view.html'
    })
    .when('/ukrainian-goods', {
      templateUrl: 'products/ukrainian-goods.view.html'
    })
      .when('/en', {
        templateUrl: 'homeEn/homeEn.view.html'
      })
      .when('/en/delivery', {
        templateUrl: 'deliveryEn/deliveryEn.view.html'
      })
      .when('/en/reviews', {
        templateUrl: 'reviewsEn/reviewsEn.view.html'
      })
      .when('/en/walnut', {
        templateUrl: 'productsEn/walnutEn.view.html'
      })
      .when('/en/hazelnut', {
        templateUrl: 'productsEn/hazelnutEn.view.html'
      })
      .when('/en/almond', {
        templateUrl: 'productsEn/almondEn.view.html'
      })
      .when('/en/honey', {
        templateUrl: 'productsEn/honeyEn.view.html'
      })


    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
}

angular
  .module('nutsApp')
  .config(['$routeProvider', '$locationProvider', config]);