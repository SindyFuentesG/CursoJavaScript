'use strict'

angular.module('spafelizApp').service('bookServicesHttp',bookServicesHttp);

bookServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

function bookServicesHttp ($http, $q, httpConfig){
    let services = {
      bookService: bookService, 
    }
    return services;

    function bookService (body){
        var defered = $q.defer();
        var promise = defered.promise;
    
        const url = httpConfig.url +  httpConfig.services.reserva
        $http.post(url, body)
        .then( function(data){
        alert("Su reserva fue registrada con exito. Lo esperamos!!");
          console.log("se guardó con exito");
          defered.resolve(data);
        })
        .catch(function(error){
          console.log(error);
          defered.reject(error);
        });
        return promise;    
      }
}