'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('DetailCtrl', detailCtrl); 

detailCtrl.$inject = ['$state', 'spaServicesHttp'];

function detailCtrl($state, spaServicesHttp) {

  var vm = this;
  vm.$onInit = onInit;
  vm.idServicio = '1';
  vm.loadSpaServicesHttp = loadSpaServicesHttp;

  function onInit(){
    vm.loadSpaServicesHttp();
    
  }

  function loadSpaServicesHttp(){
    console.log('Start loadSpaServicesHttp');
    spaServicesHttp.getById($state.params.id)
    .then(function(result){
      vm.serviceList = result.data
    })
    .catch(function(err){
      console.log(err)
    })
    console.log('End loadSpaServicesHttp');
  }

};
