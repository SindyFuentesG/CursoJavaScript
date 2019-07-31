'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('BookcontrollerCtrl', bookcontrollerCtrl);

  detailCtrl.$inject = ['spaServicesHttp', 'bookServicesHttp'];

  function bookcontrollerCtrl (spaServicesHttp, bookServicesHttp) {
    var vm = this; 
    vm.form = {};
    vm.submitBook = submitBook;
    vm.$onInit = onInit;
    vm.loadSpaServicesHttp = loadSpaServicesHttp;
    vm.submitBook = submitBook

    function onInit(){
      console.log("Inicialización controller");
      vm.loadSpaServicesHttp();
      
    }

    function submitBook(){
      console.log('formulario: ' + vm.form);
      
    }
    function loadSpaServicesHttp(){
      console.log('Start loadSpaServicesHttp');
      spaServicesHttp.getAll()
      .then(function(result){
        vm.serviceList = result.data
      })
      .catch(function(err){
        console.log(err)
      })
      console.log('End loadSpaServicesHttp');
    }

    function submitBook(){
      console.log('Start loadSpaServicesHttp');
      bookServicesHttp.bookService(vm.form)
      .then(function(result){
        console.log("Se guardo  con exito")
      })
      .catch(function(err){
        console.log(err)
      })
      console.log('End loadSpaServicesHttp');
    }
    
  };
