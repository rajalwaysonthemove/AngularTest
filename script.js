	// create the module and name it RajApp
	var RajApp = angular.module('RajApp', ['ngRoute']);

	// configure our routes
	RajApp.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/MyProfile.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/questions', {
				templateUrl : 'pages/questions.html',
				controller  : 'quesController'
			})
			.when('/ques1', {
				templateUrl : 'pages/ques1.html',
				controller  : 'ques1Controller'
			})
			.when('/ques2', {
				templateUrl : 'pages/ques2.html',
				controller  : 'ques2Controller'
			})
			.when('/ques3', {
				templateUrl : 'pages/ques3.html',
				controller  : 'ques3Controller'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	}]);

	// create the controller and inject Angular's $scope
	RajApp.controller('mainController', function($scope) {
	});

	RajApp.controller('quesController', function($scope) {
		$scope.message = 'Enuke Questions';
	});
	
	RajApp.controller('ques1Controller', function($scope) {
		$scope.marcopologame = function ()
			{ 	$scope.output1="";
				for (var i = 1; i <= 100; i++)
				{
				$scope.output1 = $scope.output1 +((i %28==0) ? "MARCOPOLO" : ((i % 7 == 0 && i % 4 != 0) ? "POLO" : ((i % 7 != 0 && i % 4 == 0) ? "MARCO" : i)))+",\n";
                console.log(((i %28==0) ? "MARCOPOLO" : ((i % 7 == 0 && i % 4 != 0) ? "POLO" : ((i % 7 != 0 && i % 4 == 0) ? "MARCO" : i))));
				}
				document.getElementById("ques1")=$scope.output1;
			};
	});
	RajApp.controller('ques2Controller', function($scope) {

		$scope.Readmd_file = function(){
		var fileToLoad = document.getElementById("mdfiletoread").files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent){
		var filemdcontents = fileLoadedEvent.target.result;
	  
                //var filemdcontents=fileReader.result.split(/[\n]+/g);
				$scope.mdtext = marked(filemdcontents);
				};

			fileReader.readAsText(fileToLoad, "UTF-8");
			
		};
	});
	RajApp.controller('ques3Controller', function($scope) {
	});
	RajApp.controller('contactController', function($scope) {
		$scope.message = 'RAJ :- Mob :+919999855268 and Email : raajkverma003@gmail';
	});
	
function ques2()
		{
		console.log("Inside ques2 controller");
		}