probnsApp.controller('propertyStepFiveController', function($scope,$http,$location,
											   	     $window,propertyService,
											   	     ShareData,blockUI,Notification){

	var service = propertyService;
	var factory = ShareData;
	var userId = 1;
	$scope._newInmueble = {
		descripcion: "",
		precioPropiedad: 0,
		direccionCorta: "",
		direccion: "",
		latitud: "",
		longitud: "",
		extensionPropiedad: null,
		areaConstruccion: null,
		anioConstruccion: null,
		observaciones: "",
		totalComision: 0,
		comisionCompartida: 0,
		DepartamentoId: 0,
		estadoInmuebleId: 1,
		tipoInmuebleId: 0,
		operacionInmuebleId: 0,
		PaiId: 0,
		MunicipioId: 0,
		userId: 0,
		imagenesInmueble: [],
		amenitiesInmueble: [],
	};

	$scope.$on('setInmueblePreview', function (event, data){
		$scope._newInmueble = data;
	})
})