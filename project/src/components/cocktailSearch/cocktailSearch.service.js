(function() {
    'use strict';
  
    function cocktailSearch($http) {
      var cocktail = {};
      cocktail.cocktailListe = [];
      cocktail.getCocktails = getCocktails;
      

      function getCocktails() {
        return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchConfig.ingredient )
        .then(function(response){
                console.log('Success: %o', response);
                searchConfig.cocktailList = response.drinks;
            })
            .catch(function(error){
                console.log('Error: %o', error);
                searchConfig.cocktailList = []
            });
      }

      return cocktail;
    }

    cocktailSearch.$inject = ['$http'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();