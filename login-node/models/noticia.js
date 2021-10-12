import mongoose from "mongoose";


const Schema = mongoose.Schema;

const noticiaSchema = new Schema ({
  tipoNotiPpal: { type: String }, //Tipo Noticia | Pagina Principal | Opciones: <Promoción>, <Novedad>, <Receta>, <Evento>
  linkImgNotiPpal: String, // Link Imagen Noticia | Pagina Principal | Depende de dataNotiPpal
  dataNotiPpal: String, // Datos Noticia | Pagina Principal | Variable. Depende de tipoNotiPppal
  resmNotiPpal: String, // Resumen Noticia | Pagina Principal | Depende de dataNotiPpal
  textBtnNotiPpal: String, // Texto Botón Noticia | Pagina Principal | Depende de dataNotiPpal
  linkBtnNotiPpal: String, // Link Botón Noticia | Pagina Principal | Depende de dataNotiPpal
  tituNotiModal: String, // Titulo Noticia Modal | Pagina Modal | Depende de dataNotiPpal
  dataNotiModal: String, // Datos Noticia Modal | Pagina Modal | Depende de dataNotiPpal
  introNotiModal: String, // Introducción Noticia Modal | Pagina Modal |  Depende de tituNotiModal
  subtNotiModal: String, // Subtitulo Noticia Modal | Pagina Modal | Depende de tituNotiModal
  descrNotiModal: String, // Descripcion Noticia Modal | Pagina Modal | Depende de tituNotiModal
  foot1NotiModal: String, // Footer 1 Noticia Modal | Pagina Modal | Depende de tituNotiModal
  foot2NotiModal: String, // Footer 2 Noticia Modal | Pagina Modal | Depende de tituNotiModal  
  linkImgNotiModal: String //Link Imagen Noticia Modañ | Pagina Modal | Depende de tituNotiPpal
});

// Convertir a modelo
const Noticias = mongoose.model("Noticias", noticiaSchema);

export default Noticias;