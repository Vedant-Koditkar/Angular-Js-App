/// <reference path="../angular.min.js" />
/// <reference path="../jquery-1.9.1.min.js" />
var app = angular.module("TodoApp", []);


app.controller("TodoController", function ($scope) {
    $scope.todoList = [];
    $scope.todoCompletedTaskList=[];
    $scope.addTask = function (newTask) {
        var todoItem = { name: newTask, status: 'I' };
        $scope.todoList.push(todoItem);
    };

    $scope.completeTask = function (task) {
        task.status = 'C';
        statusClass = "fa fa-check-circle-o";
    };

    $scope.clearCompletedTask = function () {

        angular.forEach($scope.todoList, function (task) {
            var data = task;
            this.push(data);

            $scope.todoList.splice($scope.todoList.indexOf(task), 1);

        }, $scope.todoCompletedTaskList);
    };
});