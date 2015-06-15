
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'location.html',
            controller: 'formController'
        })

        .state('form.createAccount', {
            url: '/createAccount',
            templateUrl: 'create-account.html',
            controller: 'formController'
        })

         .state('form.care', {
            url: '/care',
            templateUrl: 'care.html',
            controller: 'formController'
        })
        
        //location page
        .state('form.location', {
            url: '/location',
            templateUrl: 'location.html',
            controller: 'formController'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
       

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form');


})

.controller('geoCtrl', function($scope, $http) {

    $http.get("http://jeocoder.herokuapp.com/zips/" + formData.postalCode)
    .success(function(response) {$scope.data = response;
        console.log("logging response", response);
    });
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope, $http) {

    // $http.get("http://jeocoder.herokuapp.com/zips/94110")
    // .success(function(response) {$scope.data = response;
    //     console.log("logging response", response);
    //     console.log("logging response", response.city);
    // });

    // we will store all of our form data in this object
    $scope.formData = {};

    $scope.fetch = function (userInput){
        $http.get("http://jeocoder.herokuapp.com/zips/" + userInput)
        .success(function(response) {
            $scope.data = response;
            console.log("logging response", response);
        });
    }
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
   
});

