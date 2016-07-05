(function(window){

	window.angular.module('TodoApp',[]);
	window.angular.module('TodoApp').controller('MainController',['$scope',function($scope){
		$scope.text='';

		$scope.todoList=[
		// {text:'learn',done:false},
		// {text:'sing',done:false}
		];

		$scope.add=function(){
			var text = $scope.text.trim();
			if(text){
				$scope.todoList.push({
					text:text,
					done:false
				})
				$scope.text='';
			}

		}

		$scope.delete=function(todo){
			var index = $scope.todoList.indexOf(todo);
			$scope.todoList.splice(index,1);
		}

		$scope.doneCount = function(){
			var temp = $scope.todoList.filter(function(item){
				return item.done;
			});
			return temp.length;
		}
	}]);
})(window);