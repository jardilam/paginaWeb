import express from 'express'; 
const router = express.Router(); 

import Usuario from '../models/usuario'; 

// Registro de usuario
router.post('/registro', async(req, res) => { 
    const body = req.body; 
    try { 
        const usuario = await Usuario.create(body); 
        res.status(200).json(usuario); 
    } 
    catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error al crear el usuario', 
            error 
        }); 
    } 
});

// Get con parámetros 
router.get('/usuario/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const usuario = await Usuario.findOne({_id}); 
        res.json(usuario); 
    }
    catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error al encontrar el usuario', 
            error
        })
    }
});

// Obtener todos los usuarios
router.get('/usuario', async(req, res) => { 
    try { 
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } 
    catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error al encontrar todos los usuarios', 
            error }) 
    } 
});

// Eliminar usuario
router.delete('/usuario/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const usuario = await Usuario.findByIdAndDelete({_id}); 
        if(!usuario){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el usuario indicado', 
                error 
            }); 
        } 
        res.json(usuario); 
    } 
    catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error al eliminar este usuario', 
            error }) 
    } 
});

// Actualizar usuario 
router.put('/usuario/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const usuario = await Usuario.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(usuario); 
    } 
    catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error al actualizar al usuario', 
            error }) 
    } 
});

module.exports = router;

