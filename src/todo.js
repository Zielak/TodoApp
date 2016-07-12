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

  $scope.reorderTasks = function(){
    $scope.tasks.sort(compareTasks);
  }

  $scope.taskStatusChange = function(task){
    console.log("Task status change", task);

    $scope.reorderTasks();
  };

});