<template>
  <div class="container-fluid" >
    <hr class="divider" id="product"/>
    <h2 class="text-center mt-0">Productos</h2>
    <hr class="divider" />
    <section class="page-section bg-light" >
      <!-- Desarrollo Carrusel -->
      <div
        id="carouselExampleIndicators"
        class="carousel carousel-primary slide"
        data-ride="carousel"
      >
        <!-- Indicadores del carrusel -->
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <!-- Imágenes -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- Primera Imagen -->
            <img
              class="img-thumbnail img-product-size"
              src="../assets/img/productos/res.jpeg"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Cortes de Res</h1>
              <p>
                En Chata's tenemos los mejores cortes de res adecuados a tu
                gusto
              </p>
              <button type="button" class="btn btn-primary btn-lg">
                ¡Pide Ahora!
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Segunda Imagen -->
            <img
              class="img-thumbnail img-product-size"
              src="../assets/img/productos/lomo.jpeg"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Cortes de Cerdo</h1>
              <p>
                Nuestros cortes de cerdo tienen una inigualable presentación que
                hace que siempre quieras un poco más
              </p>
              <button type="button" class="btn btn-primary btn-lg">
                ¡Pide Ahora!
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Tercera Imágen -->
            <img
              class="img-thumbnail img-product-size"
              src="../assets/img/productos/pollo.jpeg"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Pollo</h1>
              <p>
                Las mejores partes de pollo y filetes que podrás encontrar en el
                mercado
              </p>
              <button type="button" class="btn btn-primary btn-lg">
                ¡Pide Ahora!
              </button>
            </div>
          </div>
        </div>
        <!-- Controles -->
        <!-- Control "anterior" -->
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="">Anterior</span>
        </a>
        <!-- Control "siguiente" -->
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  </div>
</template>