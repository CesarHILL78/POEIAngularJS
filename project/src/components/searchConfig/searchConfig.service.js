(function() {
    'use strict';
  
    function searchConfig() {
      var config = {};
      config.ingredient = '';
    

      return config;
    }

    searchConfig.$inject = [];
    
    angular.module('daproject')
        .factory('searchConfig', searchConfig);
  
})();