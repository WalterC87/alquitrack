alquitrackApp.service('cuentaCorrienteService', function ($http, $q, baseService, authService){
	
	var base = baseService;
	var self = this;

	self.getRegistros = function(){
		var data = {
			url: '/cuentaCorriente/get/all'
		}

		var result = base.get(data);
		return result;
	}

	self.getRegistrosBySede = function(sedeId){
		var data = {
			url: '/cuentaCorriente/get/all/' + sedeId
		}

		var result = base.get(data);
		return result;
	}

	self.postRegistro = function(params){
		var data = {
			url: '/factura/post',
			params: params
		}

		var result = base.post(data);

		return result;
	}


	self.deleteRegistro = function(params){
		var data = {
			url: '/factura/delete/' + params.id,
			params: {}
		}

		var result = base.delete(data);

		return result;
	}

	self.getDetalleRegistro = function(facturaId){
		var data = {
			url: '/factura/detalle/' + facturaId
		}

		var result = base.get(data);
		return result;
	}

	self.postAbonoCaja = function(params){
		var data = {
			url: '/caja/post/abono',
			params: params
		}

		var result = base.post(data);
		return result;
	}

	self.getMovimientosCaja = function(FacturaId){
		var data = {
			url: '/caja/get/movimientos/' + FacturaId
		}

		var result = base.get(data);
		return result;
	}

})