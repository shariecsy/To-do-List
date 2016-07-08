(function(window){

	window.angular.module('TodoApp',[]);
	window.angular.module('TodoApp').controller('MainController',['$scope', '$http', function($scope,$http){
		$scope.text='';
        
        // 
        var list = localStorage.getItem('list');
        if(list) {
            $scope.todoList = JSON.parse(list);
        }
        else {
		$scope.todoList=[
		// {text:'learn',done:false},
		// {text:'sing',done:false}
		];            
        }
        $scope.save = function() {
            localStorage.setItem('list', JSON.stringify($scope.todoList));
        }


		$scope.add=function(){
			var text = $scope.text.trim();
			if(text){
				$scope.todoList.push({
					text:text,
					done:false
				})
				$scope.text='';
                $scope.save();
			}

		}

		$scope.delete=function(todo){
			var index = $scope.todoList.indexOf(todo);
			$scope.todoList.splice(index,1);
            $scope.save();
		}

		$scope.doneCount = function(){
			var temp = $scope.todoList.filter(function(item){
				return item.done;
			});
            $scope.save();
			return temp.length;
		}
	}]);
})(window);
