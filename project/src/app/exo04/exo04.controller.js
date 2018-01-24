(function() {
  'use strict';

  function Exo04Ctrl($location, settingService, meteoService) {
    var vm = this;


    vm.settingService = settingService;
    vm.fctValeur= fctValeur;
    vm.valeur = '';
    vm.meteoService = meteoService;
  

  function fctValeur(){
    vm.settingService.city = vm.valeur;
    meteoService.getMeteo();
    console.log(settingService.city);
    }

}

  Exo04Ctrl.$inject = ['$location', 'settingService', 'meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
