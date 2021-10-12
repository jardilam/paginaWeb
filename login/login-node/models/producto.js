import mongoose from "mongoose";


const Schema = mongoose.Schema;

const prodSchema = new Schema ({
  nombre: {type: String},
  descripcion: String,
  precio: Number,
  tipoCarne: String
});

// Convertir a modelo
const Productos = mongoose.model("Productos", prodSchema);

export default Productos;