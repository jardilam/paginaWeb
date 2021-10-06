<template>
  <div>
    <Cabecera/>
    <Producto/>
    <Noticias/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Cabecera from '../components/Cabecera.vue'
import About from '../components/About.vue'
import Producto from '../components/Producto.vue'
import Noticias from '../components/Noticias.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default{
  name: 'Home',
  components:{
    Cabecera, About, Producto, Noticias, Contact, Footer
  }
}
</script>
