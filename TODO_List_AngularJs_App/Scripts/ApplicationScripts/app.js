/// <reference path="../angular.min.js" />
/// <reference path="../jquery-1.9.1.min.js" />
var app = angular.module("TodoApp", []);


app.controller("TodoController", function ($scope) {
    $scope.todoList = [];
    $scope.todoCompletedTaskList = [];
    $scope.showError = false;
    $scope.taskCompletedPercentage=0;
    $scope.incompleted=0;
    $scope.completed=0;

    $scope.addTask = function (newTask) {
        if (newTask) {
            var todoItem = { name: newTask, status: 'I' };
            $scope.todoList.push(todoItem);
            $scope.showError = false;
        } else {
            $scope.showError = true;
        }
        $scope.newTask = "";

        $scope.incompleted = $scope.todoList.filter(function (task) { return task.status === 'I' }).length;
        $scope.completed = ($scope.todoList.length - $scope.incompleted) + $scope.todoCompletedTaskList.length;
        $scope.taskCompletedPercentage = ($scope.completed * 100 / ($scope.incompleted + $scope.completed)).toFixed(2);

        return false;
    };

    $scope.completeTask = function (task) {
        task.status = 'C';
        statusClass = "fa fa-check-circle-o";

        $scope.incompleted = $scope.todoList.filter(function (task) { return task.status === 'I' }).length;
        $scope.completed = ($scope.todoList.length - $scope.incompleted) + $scope.todoCompletedTaskList.length;
        $scope.taskCompletedPercentage = ($scope.completed * 100 / ($scope.incompleted + $scope.completed)).toFixed(2);

        return false;
    };

    $scope.clearCompletedTask = function () {

        //angular.forEach($scope.todoList, function (task) {
        //    if (task.status === 'C') {
        //        this.push(task);
        //    }

        //}, $scope.todoCompletedTaskList);

        $scope.todoCompletedTaskList.push(...$scope.todoList.filter(function (item) {
            return (item.status === 'C');
        }));

        $scope.todoList = $scope.todoList.filter(function (item) {
            return (item.status === 'I');
        });

        return false;
    };
});