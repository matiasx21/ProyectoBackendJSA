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
    .post((req,res) => {
        const { nombre,codigo } = req.body;
        var tipoObjeto = new TipoObjeto();
        tipoObjeto.nombre = nombre;
        tipoObjeto.codigo = codigo;
        tipoObjeto.save((err) => {
            if(err) throw err;
            res.json({message: "SE CARGO"});
        });

    });

module.exports = router;