var express = require("express");
var router = express.Router();
var Objeto = require("../models/objeto");

router
    .route("/objeto")
    .get((req,res) => {
        Objeto.find((err, objetos) => {
            res.json(objetos);
        })
    })
    .post((req,res) => {
        const { numeroOrden, estado,tipoObjeto,descripcion,precio } = req.body;
        var elObjeto = new Objeto();
        elObjeto.numeroOrden = numeroOrden;
        elObjeto.estado = estado;
        elObjeto.tipoObjeto = tipoObjeto;
        elObjeto.descripcion = descripcion;
        elObjeto.precio = precio;
        elObjeto.save((err) => {
        res.json({message: "SE AGREGO"});
        });
    });

    router
        .route("/objeto/:id")
        .get((req,res) => {
            Objeto.findById(req.params.id,function(err,Objeto){
                try {
                    res.json(Objeto);
                } catch (err) {
                    res.json({message: "EL ID NO EXISTE"});
                }
            })
        })
        .put((req,res) => {
            const {numeroOrden, estado,tipoObjeto,descripcion, precio } = req.body;
            Objeto.findById(req.params.id,function(err,Objeto){
                try {
                    Objeto.numeroOrden = numeroOrden;
                    Objeto.estado = estado;
                    Objeto.tipoObjeto = tipoObjeto;
                    Objeto.descripcion = descripcion;
                    Objeto.precio = precio;
                    Objeto.id = req.params.id;
                    Objeto.save((err) => {
                    if(err) throw err;
                    res.json({message: "SE MODIFICO"});
                });
                }
                catch (err) {
                    res.json({message: "EL ID NO EXISTE"});
                }
            })
        })
        .delete((req,res) => {
            Objeto.findById(req.params.id,function(err,Objeto){
                try {
                    Objeto.remove((err) => {
                    if(err) throw err;
                    res.json({message: "SE ELIMINO"});
                });
                }
                catch (err) {
                    res.json({message: "EL ID NO EXISTE"});
                }
            })
        });

    router
        .route("/objeto/:estado")
        .get((req,res) => {
            Objeto.findById(req.params.estado,function(err,Objeto){
                try {
                    res.json(Objeto);
                } catch (err) {
                    res.json({message: "NO HAY OBJETOS CON ESE ESTADO"});
                }
            })
        })
    ;
    module.exports = router;
    