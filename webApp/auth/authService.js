alquitrackApp.service('authService', function ($http, $window){

	var self = this;

	self.saveToken = function(token){
		$window.localStorage['alquitrack-token'] = token;
	};

	self.getToken = function(){
		return $window.localStorage['alquitrack-token'];
	}
	

	self.isLoggedIn = function(){
		var token = self.getToken();

		if(token){
			var payload = JSON.parse($window.atob(token.split('.')[1]));
			return payload.exp > Date.now() / 1000;
		}else{
			return false
		}
	}

	self.getUserLogged = function(){
		var token = self.getToken();
		
		if(token){
			var payload = JSON.parse($window.atob(token.split('.')[1]));
			return payload.sub;
		}else{
			return false;
		}
	}

	self.getEmpleadoLogged = function(){
		var token = self.getToken();

		if(token){
			var payload = JSON.parse($window.atob(token.split('.')[1]));
			return payload.emp;
		}else{
			return false;
		}
	}

	self.logout = function(){
		$window.localStorage.removeItem('alquitrack-token');
	}

	self.setHeaders = function(){
		return { headers: { Authorization: 'Bearer ' + self.getToken() } };
	}

})