<template>
  <div class="container-fluid">
    <hr class="divider" id="product" />
    <h2 class="text-center mt-0">Productos</h2>
    <hr class="divider" />
    <section class="page-section bg-light">
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
              <a
                type="button"
                class="btn btn-primary"
                role="button"
                data-bs-toggle="collapse"
                href="#menu" 
                aria-expanded="false" 
                aria-controls="menu"
                @click="imprimir('Res')"
              >
                ¡Ir a los productos!
              </a>
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
              <a
                type="button"
                class="btn btn-primary"
                role="button"
                data-bs-toggle="collapse"
                href="#menu" 
                aria-expanded="false" 
                aria-controls="menu"
                @click="imprimir('Cerdo')"
              >
                ¡Ir a los productos!
              </a>
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
              <a
                type="button"
                class="btn btn-primary"
                role="button"
                data-bs-toggle="collapse"
                href="#menu" 
                aria-expanded="false" 
                aria-controls="menu"
                @click="imprimir('Pollo')"
              >
                ¡Ir a los productos!
              </a>
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
          <span class="sr-only">Siguiente</span>
        </a>
      </div>
    </section>
    <section id="menu" class="collapse show">
      <hr class="divider" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4 text-center">
            <div class="row">
                <div class="col p-1">
                <a
                  type="button"
                  class="btn btn-danger"
                  href="#menu"
                  @click="imprimir('Pollo')"
                >
                  Pollo
                </a>
              </div>
              <div class="col p-1">
                <a
                  type="button"
                  class="btn btn-danger"
                  href="#menu"
                  @click="imprimir('Res')"
                >
                  Res
                </a>
              </div>
              <div class="col p-1">
                <a
                  type="button"
                  class="btn btn-danger"
                  href="#menu"
                  @click="imprimir('Cerdo')"
                >
                  Cerdo
                </a>
              </div>

            </div>
          </div>

          <div class="col-4"></div>
        </div>
        <div class="row justify-content-center">
          <div v-for="(item, index) in productos.slice(0, 6)" :key="index" class="col-sm-6">

            <div v-if="item.tipoCarne == tipoCarne">
                <div class="card text-white bg-dark border-danger m-1 text-center">
                  <div class="card-header">
                    <div v-if="item.tipoCarne=='Pollo'">
                      <img src="../assets/img/carnes/pollo.jpg" alt="Pollo" class="card-img-top img-thumbnail img-size-product">
                    </div>
                    <div v-else-if="item.tipoCarne=='Res'">
                      <img src="../assets/img/carnes/res2.jpg"  alt="Res" class="card-img-top img-thumbnail img-size-product">
                    </div>
                    <div v-else-if="item.tipoCarne=='Cerdo'">
                      <img src="../assets/img/carnes/cerdo.jpg" alt="Cerdo" class="card-img-top img-thumbnail img-size-product">
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{{ item.nombre }}</h5>
                    <p class="card-text">{{ item.descripcion }}</p>
                  </div>
                  <div class="card-footer">Valor por Kg - ${{item.precio}}</div>
                </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tipoCarne: "",
      productos: [],
      producto: {
        nombre: "",
        descripcion: "",
        precio: "",
        tipoCarne: "",
      },
    };
  },
  methods: {
    listarProductos() {
      this.axios
        .get("/producto/producto")
        .then((res) => {
          console.log(res.data);
          this.productos = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    imprimir(tipoCarne) {
      this.tipoCarne = tipoCarne;
    },
  },
  created() {
    this.listarProductos();
    this.imprimir();
  },
};
</script>