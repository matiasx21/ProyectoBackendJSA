var express = require("express");
var router = express.Router();
var TipoObjeto = require("../models/TipoObjeto");
router
    .route("/TipoObjeto")
    .get((req,res) => {
        TipoObjeto.find((err, tipos) => {
            if(err) throw err;
            res.json(tipos);
        })
    })
    .post((req,res) => {
        const { nombre,codigo } = req.body;
        var TipoObjeto = new TipoObjeto();
        TipoObjeto.nombre = nombre;
        TipoObjeto.codigo = codigo;
        TipoObjeto.save((err) => {
            if(err) throw err;
            res.json({message: "SE CARGO"});
        });

    });

module.exports = router;