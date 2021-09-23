import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 


const usuarioSchema = new Schema({ 
    nombre: {type: String, required: [true, 'El nombre es obligatorio']},
    apellido: {type: String, required: [true, 'El apellido es obligatorio']}, 
    correo: {type: String, required: [true, 'El correo es obligatorio']},  
    date:{type: Date, default: Date.now}, 
    activo: {type: Boolean, default: true}
});

// Convertir a modelo 
const Usuario = mongoose.model('Usuario', usuarioSchema); 
export default Usuario; 