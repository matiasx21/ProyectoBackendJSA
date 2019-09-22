var express = require("express");
var router = express.Router();
var tipoObjeto = require("../models/tipoObjeto");
router
    .route("/tipoObjeto")
    .get((req,res) => {
        TipoObjeto.find((err, tipos) => {
            if(err) throw err;
            res.json(tipos);
        })
    })
    .get((req,res) => {
        const {id} = req.body;
        tipoObjeto.findById(id,function(err,tipoObjeto){
           if (err)
               throw err;
            res.json(tipoObjeto);
    })
    .put((req,res) => {
        const { nombre,codigo,id } = req.body;
         tipoObjeto.findById(id,function(err,tipoObjeto){
            if (err)
                throw err;
            tipoObjeto.nombre = nombre;
            tipoObjeto.codigo = codigo;
            tipoObjeto.save((err) => {
                if(err) throw err;
                res.json({message: "SE MODIFICO"});
            });
        })
    })
    .delete((req,res) => {
        const {id} = req.body;
         tipoObjeto.findById(id,function(err,tipoObjeto){
            if (err)
                throw err;
            tipoObjeto.remove((err) => {
                if(err) throw err;
                res.json({message: "SE ELIMINO"});
            });
        })
    })
    .post((req,res) => {
        const { nombre,codigo } = req.body;
        var tipoObjeto = new TipoObjeto();
        tipoObjeto.nombre = nombre;
        tipoObjeto.codigo = codigo;
        tipoObjeto.save((err) => {
            if(err) throw err;
            res.json({message: "SE AGREGO"});
        });

    });

module.exports = router;