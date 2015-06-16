
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider,  $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/',
            templateUrl: 'location.html',
            controller: 'formController'
        })

        .state('createAccount', {
            templateUrl: 'create-account.html',
            url: '/create-account',
            controller: 'formController'
        })

         .state('care', {
            url: '/care',
            templateUrl: 'care.html',
            controller: 'formController'
        })  
        //location page
        .state('location', {
            url: '/location',
            templateUrl: 'location.html',
            controller: 'formController'
        })

         .state('comingSoon', {
            url: '/comingSoon',
            templateUrl: 'comingSoon.html',
            controller: 'formController'
        })
        
        .state('payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
    // catch all route
    // send users to the form page 
    // $urlRouterProvider.otherwise('/form');

})

// our controller for the form
// =============================================================================
.controller('formController', function($scope, $http, $state, $rootScope, $location) {
    // we will store all of our form data in this object
    $scope.formData = {};

    $scope.fetch = function (userInput){
        $http.get("http://jeocoder.herokuapp.com/zips/" + userInput)
        .success(function(response) {
            $scope.formData.data = response.city;
            console.log("logging response", response);
            if ($scope.formData.data === 'NEW YORK'){
                // $state.go('form.createAccount');

                $location.path('/create-account');
                console.log('locat', $location.path());
                console.log('NYYYY');
                $scope.formData.next = 'form.createAccount';
                console.log($scope.formData.next);
            } else {
                // $state.go('form.comingSoon');

                $location.path('/createAccount');
                console.log('loc', $location.path());
                console.log('logging comming soon');
                $scope.next = 'form.comingSoon';
                console.log($scope.next);
             }
        });
    }
    //toggle on the forms on care.html
    $scope.visible = false;
    $scope.toggle = function() {
        $scope.visible = !$scope.visible;
    };
     // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
});

