alquitrackApp.controller('dashboardController', function($scope,$http,$location,
											   	     $window,dashboardService,ShareData,blockUI,
											   	     Notification, authService){

	// var service = dashboardService;
	// var auth = authService;
	// var factory = ShareData;
	// var userId = auth.getUserLogged();

	// $scope.datosGenerales = {};
	// $scope.totalPropiedades = 0;
	// $scope.totalAgentes = 0;
	// $scope.putUserInfo = {};
	// $scope.avatarUsuario = {};
	// $scope.cambiarFoto = false;

	// service.getUserInfoById(userId).then(		
	// 	function (data){
	// 		blockUI.start();
	// 		$scope.datosGenerales = data.data;	
	// 		$scope.putUserInfo = JSON.parse(JSON.stringify(data.data));		
	// 		blockUI.stop();
	// 	}
	// )

	// service.getTotalPropiedadesByUser(userId).then(
	// 	function (data){
	// 		blockUI.start();
	// 		$scope.totalPropiedades = data.data;
	// 		blockUI.stop();			
	// 	}
	// )

	// service.getTotalAgentesByUser(userId).then(
	// 	function (data){
	// 		blockUI.start();
	// 		$scope.totalAgentes = data.data;
	// 		blockUI.stop();
	// 	}
	// )

	// $scope.updateUsuario = function(){
	// 	service.putInfoUsuario(userId,$scope.putUserInfo).then(
	// 		function (data){
	// 			if(data.type == false){
	// 				Notification.error(data.message);
	// 			}else{

	// 				Notification.success(data.message);
	// 				setTimeout(function(){
	// 					$window.location.reload();
	// 				}, 2500);
	// 			}
	// 		}
	// 	)
	// }

	// $scope.updateAvatar = function(avatarUsuario){
	// 	service.putAvatarUsuario(userId, avatarUsuario).then(
	// 		function (data){
	// 			if(data.type == false){
	// 				Notification.error(data.message);
	// 			}else{

	// 				Notification.success(data.message);
	// 				setTimeout(function(){
	// 					$window.location.reload();
	// 				}, 1500);
	// 			}
	// 		}
	// 	)	
	// }

	// $scope.showChange = function(){
	// 	$scope.cambiarFoto = true;
	// }

	// $scope.hideChange = function(){
	// 	$scope.cambiarFoto = false;
	// }

	// $scope.uploadPic = function(file) {
	//     service.uploadAvatar(file).then(
	//     	function (data){
	//     		console.log(data);
	//     		$scope.updateAvatar({"avatar": data.data.data.url});
	//     	}
	//     )
 //    }

})