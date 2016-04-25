angular
  .module('nutsApp')
  .controller('deliveryCtrl', deliveryCtrl);

function deliveryCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'nutsApp'
  };
}