angular.module('routerApp').controller('mainCtrl',function($scope,$stateParams, mainService){

  var id = $stateParams;
  if($stateParams){
    mainService.getRecentProject(id);
  }

    // $scope.test = 'Hello From Home Page';




});
