<template>
  <div class="container-fluid">
    <!-- Novedades Grid-->
    <!-- NUEVA -->
    <!-- JORGE -->
    <!--<section class="page-section mt-0" id="news">-->
    <div class="container-fluid p-0" id="containerNews">
      <hr class="divider" />
      <h2 class="text-center mt-0">Novedades</h2>
      <hr class="divider" />
      <div class="container-fluid p-0">
        <div class="row">
          <!-- Novedades item 1-->
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <a
                class="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal1"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <div class="portfolio-caption-heading text-primary">
                  <!--<h3 class="h4 mb-2">{{ tituloNovedad1 }}</h3>-->
                  <h3 class="h4 mb-2">{{ tituloNovedad1 }}</h3>
                </div>
                <img class="img-fluid" :src="imagenNovedad1" alt="..." />
              </a>
            </div>
            <div class="portfolio-caption">
              <strong>{{ nombreNovedad1 }}</strong>
              <div class="portfolio-caption-subheading text-muted">
                {{ descripcionNovedad1 }}
                <div class="mt-auto">
                  <button
                    type="button"
                    class="btn btn-info"
                    :onclick="linkNovedad1"
                  >
                    Cómo Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Novedades item 2-->
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <a
                class="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal2"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <div class="portfolio-caption-heading text-primary">
                  <h3 class="h4 mb-2">{{ tituloNovedad2 }}</h3>
                </div>
                <img class="img-fluid" :src="imagenNovedad2" alt="..." />
              </a>
              <div class="portfolio-caption">
                <strong>{{ nombreNovedad2 }}</strong>
                <div class="portfolio-caption-subheading text-muted">
                  {{ descripcionNovedad2 }}
                  <div class="mt-auto">
                    <button
                      type="button"
                      class="btn btn-info"
                      :onclick="linkNovedad2"
                    >
                      Cómo Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Novedades item 3-->
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <a
                class="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal3"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <div class="portfolio-caption-heading text-primary">
                  <h3 class="h4 mb-2">{{ tituloNovedad3 }}</h3>
                </div>
                <img class="img-fluid" :src="imagenNovedad3" alt="..." />
              </a>
              <div class="portfolio-caption">
                <strong>{{ nombreNovedad3 }}</strong>
                <div class="portfolio-caption-subheading text-muted">
                  {{ descripcionNovedad3 }}
                  <div class="mt-auto">
                    <button
                      type="button"
                      class="btn btn-info"
                      :onclick="linkNovedad3"
                    >
                      Receta Completa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Novedades item 4-->
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <a
                class="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal4"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <div class="portfolio-caption-heading text-primary">
                  <h3 class="h4 mb-2">{{ tituloNovedad4 }}</h3>
                </div>
                <img class="img-fluid" :src="imagenNovedad4" alt="..." />
              </a>
              <div class="portfolio-caption">
                <strong>{{ nombreNovedad4 }}</strong>
                <div class="portfolio-caption-subheading text-muted">
                  {{ descripcionNovedad4 }}
                  <div class="mt-auto">
                    <button
                      type="button"
                      class="btn btn-info"
                      :onclick="linkNovedad4"
                    >
                      Agenda del Evento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" id="containerBlog">
      <hr class="divider" id="blog" />
      <h2 class="text-center mt-0">{{ descripcionBlog }}</h2>
      <!--<hr class="divider" />-->
      <section class="page-section bg-dark text-white">
        <div class="container px-4 px-lg-5 text-center">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <img class="img-fluid" :src="imagenBlog1" alt="..." />
              </div>
              <div class="col">
                <img class="img-fluid" :src="imagenBlog2" alt="..." />
              </div>
              <div class="col">
                <img class="img-fluid" :src="imagenBlog3" alt="..." />
              </div>
              <div class="col">
                <img class="img-fluid" :src="imagenBlog4" alt="..." />
              </div>
              <div class="col">
                <img class="img-fluid" :src="imagenBlog5" alt="..." />
              </div>
              <div class="col">
                <img class="img-fluid" :src="imagenBlog6" alt="..." />
              </div>
              <div class="col">
                <img class="img-fluid" :src="imagenBlog7" alt="..." />
              </div>
              <div class="col">
                <img class="img-fluid" :src="imagenBlog8" alt="..." />
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <hr class="divider-light" />
            <a class="btn btn-light btn-xl" :href="linkBlog">
              {{ botonBlog }}
            </a>
            <hr class="divider-light" />
          </div>
        </div>
      </section>
    </div>

    <!-- Portfolio Modals | Modales de Novedades | NUEVO -->
    <!-- JORGE -->
    <!-- Portfolio item 1 modal popup-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!--<div class="close-modal" data-bs-dismiss="modal">-->
          <!--<img src="assets/img/close-icon.svg" alt="Cerrar" />-->
          <!--</div>-->
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project details-->
                  <h2 class="h4 mb-2">{{ nombreModal1 }}</h2>
                  <h3 class="h4 mb-2">{{ datosModal1 }}</h3>
                  <p class="item-intro text-muted">{{ introModal1 }}</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    :src="imagenModal1"
                    alt="..."
                  />
                  <h3 class="h4 mb-2">{{ titulo1Modal1 }}</h3>
                  <p>{{ descripcion1Modal1 }}</p>
                  <ul class="list-inline">
                    <li>
                      <strong>{{ titulo2Modal1 }}</strong
                      >{{ descripcion2Modal1 }}
                    </li>
                    <li>
                      <strong>{{ titulo3Modal1 }}</strong
                      >{{ descripcion3Modal1 }}
                    </li>
                  </ul>

                  <div style="text-align: center">
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times me-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio item 2 modal popup-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!--<div class="close-modal" data-bs-dismiss="modal">-->
          <!--<img src="assets/img/close-icon.svg" alt="Cerrar" />-->
          <!--</div>-->
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project details-->
                  <h2 class="h4 mb-2">{{ nombreModal2 }}</h2>
                  <h3 class="h4 mb-2">{{ datosModal2 }}</h3>
                  <p class="item-intro text-muted">{{ introModal2 }}</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    :src="imagenModal2"
                    alt="..."
                  />
                  <h3 class="h4 mb-2">{{ titulo1Modal2 }}</h3>
                  <p>{{ descripcion1Modal2 }}</p>
                  <ul class="list-inline">
                    <li>
                      <strong>{{ titulo2Modal2 }}</strong
                      >{{ descripcion2Modal2 }}
                    </li>
                    <li>
                      <strong>{{ titulo3Modal2 }}</strong
                      >{{ descripcion3Modal2 }}
                    </li>
                  </ul>

                  <div style="text-align: center">
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times me-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio item 3 modal popup-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal3"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!--<div class="close-modal" data-bs-dismiss="modal">-->
          <!--<img src="assets/img/close-icon.svg" alt="Cerrar" />-->
          <!--</div>-->
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project details-->
                  <h2 class="h4 mb-2">{{ nombreModal3 }}</h2>
                  <h3 class="h4 mb-2">{{ datosModal3 }}</h3>
                  <p class="item-intro text-muted">{{ introModal3 }}</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    :src="imagenModal3"
                    alt="..."
                  />
                  <h3 class="h4 mb-2">{{ titulo1Modal3 }}</h3>
                  <p>{{ descripcion1Modal3 }}</p>
                  <ul class="list-inline">
                    <li>
                      <strong>{{ titulo2Modal3 }}</strong
                      >{{ descripcion2Modal3 }}
                    </li>
                    <li>
                      <strong>{{ titulo3Modal3 }}</strong
                      >{{ descripcion3Modal3 }}
                    </li>
                  </ul>

                  <div style="text-align: center">
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times me-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio item 4 modal popup-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal4"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!--<div class="close-modal" data-bs-dismiss="modal">-->
          <!--<img src="assets/img/close-icon.svg" alt="Cerrar" />-->
          <!--</div>-->
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project details-->
                  <h2 class="h4 mb-2">{{ nombreModal4 }}</h2>
                  <h3 class="h4 mb-2">{{ datosModal4 }}</h3>
                  <p class="item-intro text-muted">{{ introModal4 }}</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    :src="imagenModal4"
                    alt="..."
                  />
                  <h3 class="h4 mb-2">{{ titulo1Modal4 }}</h3>
                  <p>{{ descripcion1Modal4 }}</p>
                  <ul class="list-inline">
                    <li>
                      <strong>{{ titulo2Modal4 }}</strong
                      >{{ descripcion2Modal4 }}
                    </li>
                    <li>
                      <strong>{{ titulo3Modal4 }}</strong
                      >{{ descripcion3Modal4 }}
                    </li>
                  </ul>

                  <div style="text-align: center">
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-times me-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //Data de la novedad # 1
      tituloNovedad1: "Promoción del Día",
      imagenNovedad1: require('../assets/img/novedades/31.jpg'),
      nombreNovedad1: "Lomo Fino de Res | 500 g | $ 26.500",
      descripcionNovedad1:
        "Lo mejor de nuestro stock de carnes al más bajo precio para tu negocio, \
            tu placer o tus celebraciones.",
      linkNovedad1: "location.href = '#contact2';",
      //Data de la novedad # 2
      tituloNovedad2: "Novedad de la Semana",
      imagenNovedad2: require('../assets/img/novedades/32.jpg'),
      nombreNovedad2: "Filetes de Salmón | 4x6 oz | $ 139.500",
      descripcionNovedad2:
        "Las entradas más recientes a nuestro catálogo de proveedores nacionales y \
            extranjeros certificados.",
      linkNovedad2: "location.href = '#contact2';",
      //Data de la novedad # 3
      tituloNovedad3: "Receta del Día",
      imagenNovedad3: require('../assets/img/novedades/33.jpg'),
      nombreNovedad3: "Brochetas de Cerdo Caramelizado",
      descripcionNovedad3:
        "Nuestros chefs y maestros parrilleros invitados sorprenden cada día con \
            útiles tips y exquisitas preparaciones.",
      linkNovedad3: "location.href = 'https://bit.ly/3mgtzxq';",
      //Data de la novedad # 4
      tituloNovedad4: "Evento de la Semana",
      imagenNovedad4: require('../assets/img/novedades/34.jpg'),
      nombreNovedad4: "Feria del Atún Rojo «CartagenAsia»",
      descripcionNovedad4:
        "Chata's siempre presente en los pequeños y grandes acontecimientos del \
            mundo de la proteína animal.",
      linkNovedad4: "location.href = 'https://cartagenasia.es/calendario/';",
      // additional properties later
      //Data de la llamada al blog
      imagenBlog1: require('../assets/img/novedades/61.jpg'),
      imagenBlog2: require('../assets/img/novedades/62.jpg'),
      imagenBlog3: require('../assets/img/novedades/63.jpg'),
      imagenBlog4: require('../assets/img/novedades/64.jpg'),
      imagenBlog5: require('../assets/img/novedades/65.jpg'),
      imagenBlog6: require('../assets/img/novedades/66.jpg'),
      imagenBlog7: require('../assets/img/novedades/67.jpg'),
      imagenBlog8: require('../assets/img/novedades/68.jpg'),
      descripcionBlog:
        "Disfruta las mejores preparaciones, recetas y recomendaciones gastronómicas \
            de nuestros maestros parrilleros,chefs, expertos y colaboradores.",
      linkBlog: "https://www.carnevillamaria.com/blog/",
      botonBlog: "Visita nuestro blog invitado",
      // additional properties later
       //Data de los modales de sección Novedades
            nombreModal1: "Lomo Fino de Res",
            datosModal1: "500 g | $26.500 COP",
            introModal1: "Corte madurado y empacado al vacío. Entrega inmediata",
            imagenModal1: require("../assets/img/novedades/31a.jpg"),
            titulo1Modal1: "Información Nutricional",
            descripcion1Modal1: "Cada porción de 100 gramos de este producto proporciona aproximadammente \
            169 calorias, de las cuales el 51% son proteína pura. No contiene carbohidratos.",
            titulo2Modal1: "Antes:",
            descripcion2Modal1: "$33.125 COP | -25%",
            titulo3Modal1: "Válida hasta:",
            descripcion3Modal1: "24/9/2021 | 11:59 PM",
            // additional properties later
             //Data de los modales de sección Novedades
            nombreModal2: "Filetes de Salmón de las Islas Feroe",
            datosModal2: "Paquete de 4 x 6 oz | $139.500 COP",
            introModal2: "Libre de transgénicos y antibióticos. Disponibilidad limitada. Entrega inmediata.",                    
            imagenModal2: require("../assets/img/novedades/32a.jpg"),
            titulo1Modal2: "Información Nutricional",
            descripcion1Modal2: "Cada porción de 100 gramos (3.2 oz) de este producto proporciona \
            aproximadamente 116 calorias, de las cuales el 72% son proteína pura. No contiene carbohidratos.",
            titulo2Modal2: "Proveedor:",
            descripcion2Modal2: "Rastelli Foods DTC (USA)",
            titulo3Modal2: "Importado por:",
            descripcion3Modal2: "Chata's Distribuidores Cárnicos",
            // additional properties later    
             //Data de los modales de sección Novedades
            nombreModal3: "Brochetas de cerdo caramelizado con piña",
            datosModal3: "Receta para 4 personas | Nivel de dificultad: Fácil",
            introModal3: "Tiempo de preparación típico: 19 minutos",                    
            imagenModal3: require("../assets/img/novedades/33a.jpg"),
            titulo1Modal3: "Resumen",
            descripcion1Modal3: "«No os dejéis engañar por la pinta inocente de estas brochetas de carne \
            porque, sí, son caramelizadas, pero tienen un sabor potente y picante gracias a la salsa \
            Sriracha, un aderezo asiático a base de chile fermentado que no deja a nadie indiferente». E. C.",
            titulo2Modal3: "Chef Invitada:",
            descripcion2Modal3: "Ester Clemente (España)",
            titulo3Modal3: "Fecha de Publicación:",
            descripcion3Modal3: "23 de Julio de 2021",
            // additional properties later 
             //Data de los modales de sección Novedades
            nombreModal4: "CartagenAsia 2021",
            datosModal4: "Chata's presente en la feria del atún rojo de acuicultura más importante de Europa.",                    
            introModal4: " Estableciendo alianzas estratégicas en la UE para traer a Colombia uno de los \
            productos más valorados y versátiles del mar.",
            imagenModal4: require("../assets/img/novedades/34a.jpg"),
            titulo1Modal4: "Resumen",
            descripcion1Modal4: "Cartagena, en la región de Murcia (España) es el principal productor de \
            atún rojo de la Unión Europea por la exclusividad de las especies que se pueden encontrar en \
            sus aguas. CartagenAsia es, además de un viaje gastronómico, el hermanamiento entre España y \
            Japón, el país invitado a esta importante feria y al cual se exporta el 70% del atún rojo de \
            Cartagena. Y ahora, gracias a nuestra alianza estrategica con el Grupo Ricardo Fuente e Hijos, \
            los colombianos podremos también disfrutar el sabor y los beneficios de esta famosa proteína \
            que ha conquistado los paladares más exigentes del mundo por su calidad y sabor.",
            titulo2Modal4: "Lugar y Fechas del Evento:",
            descripcion2Modal4: " Batel de Cartagena (Murcia, España), junto al Museo Nacional de \
            Arqueología Subacuática. | 16, 17, 18 y 19 de septiembre de 2021",
            titulo3Modal4: "Organiza:",
            descripcion3Modal4: "Apromar, la Asociación empresarial de Acuicultura de España.",                   
            // additional properties later       
    };
  },
};
</script>