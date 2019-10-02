var express = require("express");
var router = express.Router();
var TipoObjeto = require("../models/tipoObjeto");



router
    .route("/tipoObjeto")
    .get((req,res) => {
        TipoObjeto.find((err, tipos) => {
            res.json(tipos);
        })
    }).post((req,res) => {
        const { nombre,codigo } = req.body;
        var elObjeto = new TipoObjeto();
        elObjeto.nombre = nombre;
        elObjeto.codigo = codigo;
        elObjeto.save((err) => {
        res.json({message: "SE AGREGO"});
        });
    });

    router
    .route("/tipoObjeto/:id")
    .get((req,res) => {
        TipoObjeto.findById(req.params.id,function(err,TipoObjeto){
            try {
                res.json(TipoObjeto);
            } catch (err) {
                res.json({message: "EL ID NO EXISTE"});
            }
        })
    }).put((req,res) => {   
            const { nombre,codigo } = req.body;
            TipoObjeto.findById(req.params.id,function(err,TipoObjeto){
                try {
                    //console.log(err);
                    TipoObjeto.nombre = nombre;
                    TipoObjeto.codigo = codigo;
                    TipoObjeto.save((err) => {
                    res.json({message: "SE MODIFICO"});
                    }); 
                } catch (err) {
                    res.json({message: "EL ID NO EXISTE"});
                }
                
            })
        }
    )
    .delete((req,res) => {
        //const {id} = req.body;
        TipoObjeto.findById(req.params.id,function(err,TipoObjeto){
            try{
                TipoObjeto.remove((err) => {
                res.json({message: "SE ELIMINO"});
                });
            }
            catch (err) {
                res.json({message: "EL ID NO EXISTE"});
            }
            });
        })
;

module.exports = router;
    

    