(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var meteoServicee = {};
      meteoServicee.meteoListe = [];
      meteoServicee.getMeteo = getMeteo;
      

      function getMeteo() {
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + settingService.city + '&APPID=59e72bad5e4d9de7bfb624311eee9611&units=metric')
        .then(function(response){
                console.log('Success: %o', response);
                meteoServicee.meteoListe = response.data.list;
                console.log(meteoServicee.meteoListe);
            })
            .catch(function(error){
                console.log('Error: %o', error);
                meteoServicee.meteoListe = [];
            });
      }

      return meteoServicee;
    }

    meteoService.$inject = ['$http', 'settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();