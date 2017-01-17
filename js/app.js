
var app = angular.module('myApp', []);

app.controller('timerController', function($scope) {
	
	$scope.tasks = [{'task':'Complete HTML & CSS', 'time':'6600'}, {'task':'Focus on the app development', 'time':'5200'}];

	$scope.btn_start = true;
	$scope.startTimer= function(){
		$("#timer").timer();   
		$scope.btn_pause = $scope.btn_stop = true;
		$scope.btn_start = false;
	}

	$scope.pauseTimer= function(){
		$('#timer').timer('pause');
		$scope.btn_continue = true;
		$scope.btn_pause = false;
	}

	$scope.continueTimer= function(){

		$('#timer').timer('resume');
		$scope.btn_continue = false;
		$scope.btn_pause = true;
	}


	$scope.stopTimer= function(){

		var time = $('#timer').data('seconds');;
		var task = $scope.task;

		var new_task = {'task':task, 'time': time}
		$scope.tasks.unshift(new_task);

		$('#timer').timer('remove');
		$('#timer').text('0 sec');

		$scope.task = '';
		$scope.btn_continue = $scope.btn_pause = $scope.btn_stop = false;
		$scope.btn_start = true;
	}			

	$scope.getTotal = function(){
	    var total = 0;
	    for(var i = 0; i < $scope.tasks.length; i++)
	    {
	        var time = parseInt($scope.tasks[i].time);
	        total += time;
	    }
	    return total;
	}	

})

app.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])