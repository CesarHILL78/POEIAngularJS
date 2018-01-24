(function() {
  'use strict';

  function moreCtrl($location) {
    var vm = this;    
  }

  moreCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('moreCtrl', moreCtrl);

})();
