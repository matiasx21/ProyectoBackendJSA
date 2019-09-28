var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ObjetoSchema = new Schema({
    numeroOrden: String,
    estado: String,
    tipoObjeto: String, 
    descripcion: String,
    precio: String
});

module.exports = mongoose.model("Objeto", ObjetoSchema);