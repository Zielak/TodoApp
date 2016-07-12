
var todoApp = angular.module('todoApp', []);

todoApp.controller('todoController', function appController($scope){
  "use strict";

  function compareTasks(a,b) {
    if (a.done < b.done)
      return -1;
    if (a.done > b.done)
      return 1;
    return 0;
  }

  $scope.tasks = [
    {title: 'take out trash', done: false},
    {title: 'feed cat', done: false},
    {title: 'clean house', done: false},
    {title: 'get a life', done: false},
    {title: 'go shopping', done: false},
    {title: 'make some dev', done: true},
  ];

  $scope.defaultTasks = $scope.tasks.slice();

  $scope.reorderTasks = function(){
    $scope.tasks.sort(compareTasks);
  };

  $scope.checkForEmptyTask = function(){
    for (var i = $scope.tasks.length - 1; i >= 0; i--) {
      if($scope.tasks[i].title.length <= 0 && !$scope.tasks[i].done){
        return i;
      }
    }
    return -1;
  };

  $scope.addNewTask = function(){

    var empty = $scope.checkForEmptyTask();
    if(empty >= 0){
      document.querySelectorAll(".task .text-input input")[empty].focus();
    }else{
      $scope.tasks.push({title: '', done: false});
      $scope.reorderTasks();
    }

  };

  $scope.removeTask = function(task) {
    var idx = $scope.tasks.indexOf(task);
    if(idx >= 0){
      $scope.tasks.splice(idx, 1);
    }
  };

  $scope.resetTasks = function(){
    $scope.tasks = $scope.defaultTasks.slice();
  };

  $scope.clearTasks = function(){
    $scope.tasks = [];
  };

  $scope.taskStatusChange = function(task){
    console.log("Task status change", task);

    $scope.reorderTasks();
  };

});
