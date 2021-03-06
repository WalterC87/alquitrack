var models = require('../../models');
var service = require('../services/service');

exports.getMonedasPais = function(req, res){
	models.monedaPais.findAll({
		where: {
			status: 1
		},
		include:[
			{
				model: models.Pais,
				attributes: ['descripcion', 'id'],
				where:{
					status: 1
				}
			}
		]
	}).then(function (registros){
		if(!registros){
			service.sendJSONresponse(res, 500, {"type":false, "message": "error al obtener los registros", "data":registros});
		}else{
			service.sendJSONresponse(res,200, {"type":true, "data": registros});
		}
	})
};

exports.getMonedaPais = function(req, res){
	models.monedaPais.findOne({
		where: {
			id: req.params.id,
			status: 1
		},
		include:[
			{
				model: models.Pais,
				attributes: ['descripcion', 'id'],
				where:{
					status: 1
				}
			}
		]
	}).then(function (registro){
		if(!registro){
			service.sendJSONresponse(res,500, {"type":false, "message": "registro no encontrado", "data": registro});
		}else{
			service.sendJSONresponse(res,200, {"type":true, "data":registro});
		}
	})
};

exports.postMonedaPais = function(req, res){
	models.monedaPais.create({
		descripcion: req.body.descripcion,
		simbolo: req.body.simbolo,
		PaiId: req.body.paisId
	}).then(function (registro){
		if(!registro){
			service.sendJSONresponse(res, 500, {"type":false, "message": "Error al crear el regstro"});
		}else{
			service.sendJSONresponse(res, 200, {"type":true, "message": "Registro creado exitosamente"});
		}
	})
}

exports.putMonedaPais = function(req, res){
	models.monedaPais.update({
		descripcion: req.body.descripcion,
		simbolo: req.body.simbolo
	},{
		where: {
			id: req.params.id
		}
	}).then(function (registro){
		if(!registro){
			service.sendJSONresponse(res, 500, {"type":false, "message": "Error al actualziar el registro"});
		}else{
			service.sendJSONresponse(res, 200, {"type":true, "message": "Registro Actualizado exitosamente", "data": registro});
		}
	})
}

exports.deleteMonedaPais = function(req, res){
	models.monedaPais.update({
		status: 0
	},{
		where: {
			id: req.params.id,
		}
	}).then(function (registro){
		if(!registro){
			service.sendJSONresponse(res, 500, {"type": false, "message": "Error al eliminar el registro"});
		}else{
			service.sendJSONresponse(res, 200, {"type": true, "message": "Registro Eliminado exitosamente"});
		}
	})
}