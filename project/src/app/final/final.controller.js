(function() {
  'use strict';

  function finallCtrl($location, searchConfig, cocktailSearch) {
    var vm = this;


    vm.searchConfig = searchConfig;
    vm.fctFinall = fctFinall;
    vm.valeur2 = '';
    vm.cocktailSearch = cocktailSearch;
  

  function fctFinall(){
    vm.searchConfig.ingredient = vm.valeur2;
    cocktailSearch.getCocktails();
    console.log(searchConfig.ingredient);
    }

}

  finallCtrl.$inject = ['$location', 'searchConfig', 'cocktailSearch'];

  angular.module('daproject')
    .controller('finallCtrl', finallCtrl);

})();