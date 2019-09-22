var mongoose = require("mongoose");
var Schema = mongoose.Schema;
import { TipoObjeto } from "models";

var ObjetoSchema = new Schema({
    numeroOrden: Int32Array,
    estado: String,
    descripcion: String,
    precio: Int32Array,
    tipoObjeto: TipoObjeto

});

module.exports = mongoose.model("Objeto", ObjetoSchema);