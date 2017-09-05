var app=angular.module('myApp',[]);

app.controller('myCtrl',function(fetchDataService,$timeout,$scope,$interval)
{

  $scope.wait=function(){
  fetchDataService.fetchData(function(r)
  {
    $scope.firstName=r.first_name;
    $scope.lastName=r.last_name;
    $scope.email=r.email;
$scope.contact=r.contact;
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
   $timeout($scope.wait, 300000);
}

});




app.service('fetchDataService',function($http)
{
this.fetchData=function(cb)
{
$http({
  url:'https://raw.githubusercontent.com/akash707/Json-Data-API/master/db.json'
}).then(function(response)
{
cb(response.data);
}
)
}
});
