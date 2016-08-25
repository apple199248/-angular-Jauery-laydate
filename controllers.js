'use strict';

var app=angular.module('app', [])
.controller('appCtrl',['$scope',function ($scope) {	
        // $scope.test = 'test';
        // console.log($scope.test);
        // console.log($scope.time);
        // alert("yes");
        // $scope.fun=function(){
        // 	console.log($scope.time);
        // }
        $scope.test=function(){
        	alert($scope.startTime);
        	// alert($('#id1').val());
        }
    }])