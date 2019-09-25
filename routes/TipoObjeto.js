var express = require("express");
var router = express.Router();
var TipoObjeto = require("../models/tipoObjeto");
router
    .route("/tipoObjeto")
    .get((req,res) => {
        TipoObjeto.find((err, tipos) => {
            if(err) throw err;
            res.json(tipos);
        })
    }).put((req,res) => {
   
        const { nombre,codigo,id } = req.body;
        TipoObjeto.findById(id,function(err,TipoObjeto){
            if (err)
                throw err;
                TipoObjeto.nombre = nombre;
                TipoObjeto.codigo = codigo;
            TipoObjeto.save((err) => {
                if(err) throw err;
                res.json({message: "SE MODIFICO"});
            });
        })
    })
    .delete((req,res) => {
        const {id} = req.body;
        TipoObjeto.findById(id,function(err,TipoObjeto){
            if (err)
                throw err;
                TipoObjeto.remove((err) => {
                if(err) throw err;
                res.json({message: "SE ELIMINO"});
            });
        })
    })
    .post((req,res) => {
        const { nombre,codigo } = req.body;
        var elObjeto = new TipoObjeto();
        elObjeto.nombre = nombre;
        elObjeto.codigo = codigo;
        elObjeto.save((err) => {
            if(err) throw err;
            res.json({message: "SE AGREGO"});
        });


    });


    
    module.exports = router;
    
    /*
    .get((req,res) => {
        const {id} = req.body;
        TipoObjeto.findById(id,function(err,TipoObjeto){
           if (err)
               throw err;
            res.json(TipoObjeto);
        })
    }) */
    