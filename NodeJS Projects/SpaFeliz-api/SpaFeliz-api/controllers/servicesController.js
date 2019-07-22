var serviceModel = require('./../models/serviceModel');

exports.services_all_get = function (req, res){
    serviceModel.findAll({
        attributes:['id', 'name', 'image', 'happy']
    })
    .then(data => res.json(data))
    .catch (err => res.status(500).send(err))
    
}

exports.services_detail_get = function (req, res){
    res.send ('devolver todos los servicios del con id ' + req.params.id);
}

