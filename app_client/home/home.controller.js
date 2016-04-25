angular
  .module('nutsApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'nutsApp',
  };
}