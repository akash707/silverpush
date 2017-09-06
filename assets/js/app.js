var app=angular.module('myApp',[]);

app.controller('myCtrl',function(fetchDataService,$timeout,$scope,$interval)
{

  $scope.wait=function(){
  fetchDataService.fetchData(function(r)
  {
$scope.firstName=r.api1.first_name;
$scope.lastName=r.api1.last_name;
$scope.contact=r.api1.contact;
$scope.email=r.api1.email;

$scope.firstName1=r.api2.first_name;
$scope.lastName1=r.api2.last_name;
$scope.contact1=r.api2.contact;
$scope.email1=r.api2.email;
  }
  )
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




app.service('fetchDataService',function($http)
{
this.fetchData=function(cb)
{
$http({
  url:'http://localhost:3000/data',
  method:'GET'
}).then(function(response)
{
cb(response.data);
}
)
}
});
