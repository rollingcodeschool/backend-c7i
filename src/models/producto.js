import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique:true,
        maxLength: 50,
        minLength: 2
    },
    precio:{
        type: Number,
        required:true
    },
    imagen:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    }    
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;