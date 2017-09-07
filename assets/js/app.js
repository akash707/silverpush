var app=angular.module('myApp',[]);

app.controller('myCtrl',function($http,$scope,$timeout,$interval)
{

$scope.getData=function(id){
  {
$scope.a=id.name;
$http({url:'http://localhost:3000/data/'+$scope.a,
method:'GET'
}).then(function(response)
{
  
$scope.firstName=response.data.api1.data.first_name;
$scope.firstName1=response.data.api2.data.name;
$scope.image=response.data.api1.data.avatar;
$scope.lastName=response.data.api1.data.last_name;
$scope.color=response.data.api2.data.color;
$scope.year=response.data.api2.data.year;

})
  }

}

$scope.Start = function () {
       $scope.time = 0;
                 $scope.Timer = $interval(function () {
                     $scope.time = $scope.time+1;
                 }, 1000);
             };

$scope.clickHandler = function() {
$scope.Start();
   $timeout($scope.wait,0);
}

});
