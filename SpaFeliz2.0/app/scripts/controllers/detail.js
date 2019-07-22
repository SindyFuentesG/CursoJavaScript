'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('DetailCtrl', detailCtrl); 

mainCtrl.$inject = ['spaServices'];

function detailCtrl(spaServices) {

  var vm = this;
  vm.$onInit = onInit;
  vm.idServicio = '1';
  vm.loadSpaServices = loadSpaServices;

  function onInit(){
    vm.loadSpaServices();
    
  }

  function loadSpaServices(){
    vm.service = spaServices.getServiceById(vm.idServicio);
    //console.log(vm.serviceList);
  }

};
