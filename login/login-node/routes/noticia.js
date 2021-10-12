import express from 'express';
const router = express.Router();

import Noticia from '../models/noticia'
const { verificarAuth, verificaRol } = require("../middlewares/autenticacion")

//AGREGAR NOTICIA
router.post('/nueva-noticia', [verificarAuth, verificaRol], async (req, res) => {
    const body = req.body;
    try {
        const noticia = await Noticia.create(body);
        res.status(200).json(noticia);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
});

// AGREGAR NOTICIA
router.get('/noticia/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const noticia = await Noticia.findOne({_id});
        res.json(noticia);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            err
        });
    }
});

// OBTENER TODAS LAS NOTICIAS
router.get('/noticia', async(req, res) => {

    try {
        const noticia = await Noticia.find();
        res.json(noticia);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
});

router.delete('/noticia/:id',[verificarAuth, verificaRol], async(req, res) => {
    const _id = req.params.id;
    try {
        const noticia = await Noticia.findByIdAndDelete({_id});
        if(!noticia) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado', error
            })
        } res.json(noticia);
    } catch (error) {
        return res.status(500).json ({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.put('/noticia/:id', async (req, res) => {
    let id = req.params.id;
    let body =req.body;
  
    try {
      // {new:true} nos devuelve el usuario actualizado
      const noticia = await Noticia.findByIdAndUpdate(id, body, {
        new: true,
      });
  
      return res.json(noticia);
    } catch (error) {
      return res.status(400).json({
        mensaje: "Ocurrio un error",
        error,
      });
    }
  });

module.exports = router;