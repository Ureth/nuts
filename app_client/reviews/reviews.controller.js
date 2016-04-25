angular
  .module('nutsApp')
  .controller('reviewsCtrl', reviewsCtrl);

function reviewsCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'nutsApp'
  };
}