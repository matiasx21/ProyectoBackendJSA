var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TipoObjetoSchema = new Schema({
    codigo: String,
    nombre: String,
});

module.exports = mongoose.model("tipoObjeto", TipoObjetoSchema);