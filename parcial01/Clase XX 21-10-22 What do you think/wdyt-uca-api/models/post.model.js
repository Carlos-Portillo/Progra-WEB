const Mongoose = require("mongoose");
const Schema = Mongoose.Schema; // Base de mi modelo (objeto para interactuar con la bd)

const PostSchema = new Schema({ 
    title: {
        type: String,
        trim: true, //Elimina los espacios antes y despues en el texto
        required: true 
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        // URL'S
        type: String
    },
    hidden: {
        type: Boolean,
        default: false
    }
}, {  timestamps: true  }); // Marca la hora y día en: la que fue creado y modificado

module.exports = Mongoose.model("Post", PostSchema);