angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SearchCtrl', function($scope, $stateParams){

  $scope.Searchlist = [
      {'id' : 1 , 'name' : 'Vjandep Pastel' , 'price' : '27.0'},
      {'id' : 2 , 'name' : 'Jamon de Cagayan' , 'price' : '12.0'},
      {'id' : 3 , 'name' : 'Slers Chicharon' , 'price' : '25.0'},
      {'id' : 4 , 'name' : 'Cashew Nuts' , 'price' : '25.0'}
  ];
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.admin-dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
});
