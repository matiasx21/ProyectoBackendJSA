var mongoose = require("mongoose");
var Schema = mongoose.Schema;
import { TipoObjeto } from "models";

var ObjetoSchema = new Schema({
    numeroOrden: String,
    estado: String,
    descripcion: String,
    precio: String,
    tipoObjeto: TipoObjeto

});

module.exports = mongoose.model("Objeto", ObjetoSchema);