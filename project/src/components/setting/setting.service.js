(function() {
    'use strict';
  
    function settingService() {
      var settingServicee = {};
      settingServicee.city = '';
      settingServicee.isCelsius = true;

      return settingServicee;
    }

    settingService.$inject = [];
    
    angular.module('daproject')
        .factory('settingService', settingService);
  
})();