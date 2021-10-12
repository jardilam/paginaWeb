<template>
  <div id="page-top">
    <div class="container-fluid">
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-3"
        id="mainNav"
      >
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top"
            ><img
              src="../assets/img/chatas/chatas2.jpeg"
              class="img-fluid rounded logo"
              alt="chatas"
          /></a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#productos"> Productos </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#noticias"> Noticias </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#usuarios"> Usuarios </a>
              </li>
              |
              <li class="nav-item">
                <a class="nav-link" href="#page-top"
                  >Seccion de Administracion</a
                >
              </li>
              |
              <li class="nav-item">
                <b-link
                  @click="cerrarSesion()"
                  class="nav-link"
                  v-if="estaActivo"
                  >Cerrar sesion</b-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <!-- Comienzo Seccion Productos -->
        <div class="container-fluid text-center" id="productos">
          <h2 class="mt-4 center">
            <a
              class="btn btn-outline-warning"
              data-bs-toggle="collapse"
              href="#collapseProductos"
              role="button"
              aria-expanded="false"
              aria-controls="collapseProductos"
            >
              Productos
            </a>
          </h2>
        </div>
        <section class="collapse" id="collapseProductos">
          <div class="container-flui mt-3">
            <div class="row">
              <div class="col">
                <div class="card mx-auto" style="width: 18rem">
                  <img
                    src="../assets/img/chatas/user.jpg"
                    class="card-img-top img-thumbnail img-size"
                    alt="img-res"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">Producto</h5>
                    <div class="collapse" id="collapseTProductos">
                      <!-- Registrar Producto -->
                      <form
                        @submit.prevent="registrarProductos()"
                        method="post"
                        v-if="!editarProducto"
                      >
                        <div class="mb-3">
                          <label for="nombreProducto" class="form-label"
                            >Nombre:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="nombreProducto"
                            v-model="producto.nombre"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="descripcionProducto" class="form-label"
                            >Descripción:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="descripcionProducto"
                            v-model="producto.descripcion"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="precioProducto" class="form-label"
                            >Precio por kilogramo:</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="precioProducto"
                            v-model="producto.precio"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="TipoCarne" class="form-label"
                            >Tipo de proteína:</label
                          >
                          <select
                            name="TipoCarne"
                            id="TipoCarne"
                            v-model="producto.tipoCarne"
                          >
                            <option value="Res">Res</option>
                            <option value="Cerdo">Cerdo</option>
                            <option value="Pollo">Pollo</option>
                          </select>
                        </div>
                        <button type="submit" class="btn btn-secondary">
                          Registrar Producto
                        </button>
                      </form>
                      <!-- Editar -->
                      <form
                        @submit.prevent="editarProductos(productoEditar)"
                        method="post"
                        v-if="editarProducto"
                      >
                        <div class="mb-3">
                          <label for="nombreProducto" class="form-label"
                            >Nombre:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="nombreProducto"
                            v-model="productoEditar.nombre"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="descripcionProducto" class="form-label"
                            >Descripción:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="descripcionProducto"
                            v-model="productoEditar.descripcion"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="precioProducto" class="form-label"
                            >Precio por kilogramo:</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="precioProducto"
                            v-model="productoEditar.precio"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="TipoCarne" class="form-label"
                            >Tipo de proteína:</label
                          >
                          <select
                            name="TipoCarne"
                            id="TipoCarne"
                            v-model="productoEditar.tipoCarne"
                          >
                            <option value="Res">Res</option>
                            <option value="Cerdo">Cerdo</option>
                            <option value="Pollo">Pollo</option>
                          </select>
                        </div>
                        <button type="submit" class="btn btn-secondary">
                          Actualizar Producto
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="card-body bg-primary">
                    <p>
                      <a
                        class="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#collapseTProductos"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseTProductos"
                      >
                        Crear nuevo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table class="table table-striped table-sm">
            <thead class="">
              Productos ingresados
              <b-alert
                dismiss-label
                :show="dismissCountDown"
                dismissible
                :variant="mensaje.color"
                @dismissed="dismissCountDown = 0"
                @dismiss-count-down="countDownChanged"
              >
                {{ mensaje.texto }}
              </b-alert>
            </thead>
            <tbody>
              <tr>
                <th>#</th>
                <th>Nombre producto</th>
                <th>Descripción</th>
                <th>Precio por kg</th>
                <th>Tipo de carne</th>
                <th>Acciones</th>
              </tr>
              <tr v-for="(item, index) in productos" :key="index">
                <td>{{ index }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.descripcion }}</td>
                <td>{{ item.precio }}</td>
                <td>{{ item.tipoCarne }}</td>
                <td>
                  <a
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#collapseTProductos"
                    @click="activarEdicionProducto(item._id)"
                    >Editar</a
                  >|
                  <a
                    type="button"
                    class="btn btn-danger"
                    @click="eliminarProducto(item._id)"
                    >Eliminar</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- Fin Seccion Productos -->

        <!-- Comienzo Seccion Noticias -->
        <div class="container-fluid text-center" id="noticias">
          <h2 class="mt-4 center">
            <a
              class="btn btn-outline-warning"
              data-bs-toggle="collapse"
              href="#collapseNoticias"
              role="button"
              aria-expanded="false"
              aria-controls="collapseNoticias"
            >
              Noticias
            </a>
          </h2>
        </div>
        <section class="collapse" id="collapseNoticias">
          <div class="container-flui mt-3">
            <div class="row">
              <div class="col">
                <div class="card mx-auto" style="width: 18rem">
                  <img
                    src="../assets/img/carnes/res.jpg"
                    class="card-img-top img-thumbnail img-size"
                    alt="img-res"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Res</h5>
                    <div class="collapse" id="collapseCarne">
                      <div class="card card-body">
                        <form action="">
                          <label for="nombre_producto">Nombre producto:</label>
                          <input type="text" name="nombre_producto" />
                          <br /><br />
                          <label for="tipo_corte">Tipo de corte:</label>
                          <select name="tipo_corte" id="cortes">
                            <option value="corte1">Corte1</option>
                            <option value="corte2">Corte2</option>
                            <option value="corte3">Corte3</option>
                          </select>
                          <br /><br />
                          <input
                            type="submit"
                            value="Crear"
                            class="btn btn-warning"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="card-body bg-primary">
                    <p>
                      <a
                        class="card-link"
                        data-bs-toggle="collapse"
                        href="#collapseCarne"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseCarne"
                      >
                        Crear nuevo
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card mx-auto" style="width: 18rem">
                  <img
                    src="../assets/img/carnes/cerdo.jpg"
                    class="card-img-top img-thumbnail img-size"
                    alt="img-cerdo"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Cerdo</h5>
                    <div class="collapse" id="collapseCerdo">
                      <div class="card card-body">
                        <form action="">
                          <label for="nombre_producto">Nombre producto:</label>
                          <input type="text" name="nombre_producto" />
                          <br /><br />
                          <label for="tipo_corte">Tipo de corte:</label>
                          <select name="tipo_corte" id="cortes">
                            <option value="corte1">Corte1</option>
                            <option value="corte2">Corte2</option>
                            <option value="corte3">Corte3</option>
                          </select>
                          <br /><br />
                          <input
                            type="submit"
                            value="Crear"
                            class="btn btn-warning"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="card-body bg-primary">
                    <p>
                      <a
                        class="card-link"
                        data-bs-toggle="collapse"
                        href="#collapseCerdo"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseCerdo"
                      >
                        Crear nuevo
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card mx-auto" style="width: 18rem">
                  <img
                    src="../assets/img/carnes/pollo.jpg"
                    class="card-img-top img-thumbnail img-size"
                    alt="img-pollo"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Pollo</h5>
                    <div class="collapse" id="collapsePollo">
                      <div class="card card-body">
                        <form action="">
                          <label for="nombre_producto">Nombre producto:</label>
                          <input type="text" name="nombre_producto" />
                          <br /><br />
                          <label for="tipo_corte">Tipo de corte:</label>
                          <select name="tipo_corte" id="cortes">
                            <option value="corte1">Corte1</option>
                            <option value="corte2">Corte2</option>
                            <option value="corte3">Corte3</option>
                          </select>
                          <br /><br />
                          <input
                            type="submit"
                            value="Crear"
                            class="btn btn-warning"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="card-body bg-primary">
                    <p>
                      <a
                        class="card-link"
                        data-bs-toggle="collapse"
                        href="#collapsePollo"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapsePollo"
                      >
                        Crear nuevo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table class="table table-striped table-sm">
            <thead class="">
              Productos
            </thead>
            <tbody>
              <tr>
                <th>Nombre producto</th>
                <th>Corte</th>
                <th>Precio por kg</th>
                <th>Tipo de carne</th>
                <th>Acciones</th>
              </tr>
              <tr>
                <td>Pechuga</td>
                <td>Entero</td>
                <td>7500</td>
                <td>Pollo</td>
                <td>
                  <a type="button" class="btn btn-primary" href="">Editar</a>|
                  <a type="button" class="btn btn-danger" href="">Eliminar</a>
                </td>
              </tr>
              <tr>
                <td>Cuadril</td>
                <td>magro</td>
                <td>10500</td>
                <td>Res</td>
                <td>
                  <a type="button" class="btn btn-primary" href="">Editar</a>|
                  <a type="button" class="btn btn-danger" href="">Eliminar</a>
                </td>
              </tr>
              <tr>
                <td>Tocino</td>
                <td>papada</td>
                <td>5600</td>
                <td>Pollo</td>
                <td>
                  <a type="button" class="btn btn-primary" href="">Editar</a>|
                  <a type="button" class="btn btn-danger" href="">Eliminar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- Comienzo Seccion Noticias -->

        <!-- Comienzo Seccion Usuarios -->
        <div class="container-fluid text-center" id="usuarios">
          <h2 class="mt-4 center">
            <a
              class="btn btn-outline-warning"
              data-bs-toggle="collapse"
              href="#collapseUsuarios"
              role="button"
              aria-expanded="false"
              aria-controls="collapseUsuarios"
            >
              Usuarios
            </a>
          </h2>
        </div>
        <section class="collapse" id="collapseUsuarios">
          <div class="container-flui mt-3">
            <div class="row">
              <div class="col">
                <div class="card mx-auto" style="width: 18rem">
                  <img
                    src="../assets/img/chatas/user.jpg"
                    class="card-img-top img-thumbnail img-size"
                    alt="img-res"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">Usuario</h5>
                    <div class="collapse" id="collapseCarne">
                      <!-- Registrar -->
                      <form
                        @submit.prevent="registrar()"
                        method="post"
                        v-if="!editar"
                      >
                        <div class="mb-3">
                          <label for="nombre" class="form-label">Nombre:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="nombreForm"
                            v-model="usuario.nombre"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="apellido" class="form-label"
                            >Apellido:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="apellidoForm"
                            v-model="usuario.apellido"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="contrasena" class="form-label"
                            >Contraseña:</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="constrasenaForm"
                            v-model="usuario.pass"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="fecha" class="form-label"
                            >Fecha de naciemiento:</label
                          >
                          <b-input-group class="mb-3">
                            <b-form-input
                              id="fechaNacimiento"
                              v-model="usuario.birth_date"
                              type="text"
                              placeholder="YYYY-MM-DD"
                              autocomplete="off"
                            ></b-form-input>
                            <b-input-group-append>
                              <b-form-datepicker
                                v-model="usuario.birth_date"
                                button-only
                                right
                                locale="es-CO"
                                aria-controls="fechaNacimiento"
                                @context="onContext"
                              ></b-form-datepicker>
                            </b-input-group-append>
                          </b-input-group>
                        </div>
                        <div class="mb-3">
                          <label for="correo" class="form-label"
                            >Correo electronico:</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="correoForm"
                            v-model="usuario.email"
                          />
                        </div>
                        <button type="submit" class="btn btn-secondary">
                          Registrar
                        </button>
                      </form>
                      <!-- Editar -->
                      <form
                        @submit.prevent="editarUsuario(usuarioEditar)"
                        method="post"
                        v-if="editar"
                      >
                        <div class="mb-3">
                          <label for="nombre" class="form-label">Nombre:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="nombreForm"
                            v-model="usuarioEditar.nombre"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="apellido" class="form-label"
                            >Apellido:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="apellidoForm"
                            v-model="usuarioEditar.apellido"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="contrasena" class="form-label"
                            >Contraseña:</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="constrasenaForm"
                            v-model="usuarioEditar.pass"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="fecha" class="form-label"
                            >Fecha de naciemiento:</label
                          >
                          <b-input-group class="mb-3">
                            <b-form-input
                              id="fechaNacimiento"
                              v-model="usuarioEditar.birth_date"
                              type="text"
                              placeholder="YYYY-MM-DD"
                              autocomplete="off"
                            ></b-form-input>
                            <b-input-group-append>
                              <b-form-datepicker
                                v-model="usuarioEditar.birth_date"
                                button-only
                                right
                                locale="es-CO"
                                aria-controls="fechaNacimiento"
                                @context="onContext"
                              ></b-form-datepicker>
                            </b-input-group-append>
                          </b-input-group>
                        </div>
                        <div class="mb-3">
                          <label for="correo" class="form-label"
                            >Correo electronico:</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="correoForm"
                            v-model="usuarioEditar.email"
                          />
                        </div>
                        <button type="submit" class="btn btn-secondary">
                          Editar
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="card-body bg-primary">
                    <p>
                      <a
                        class="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#collapseCarne"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseCarne"
                      >
                        Crear nuevo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table class="table table-striped table-sm">
            <thead class="bg-primary">
              Usuarios inscritos
              <b-alert
                dismiss-label
                :show="dismissCountDown"
                dismissible
                :variant="mensaje.color"
                @dismissed="dismissCountDown = 0"
                @dismiss-count-down="countDownChanged"
              >
                {{ mensaje.texto }}
              </b-alert>
            </thead>
            <tbody>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Date</th>
                <th>Acciones</th>
              </tr>
              <tr v-for="(item, index) in usuarios" :key="index">
                <td>{{ index }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.date }}</td>
                <td>
                  <a
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#collapseCarne"
                    @click="activarEdicion(item._id)"
                    >Editar</a
                  >|
                  <a
                    type="button"
                    class="btn btn-danger"
                    @click="eliminarUsuario(item._id)"
                    >Eliminar</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- Comienzo Seccion Usuarios -->
      </main>

      <footer></footer>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,
      usuarios: [],
      productos: [],
      usuario: {
        nombre: "",
        apellido: "",
        email: "",
        birth_date: "",
        pass: "",
        role: "",
      },
      producto: {
        nombre: "",
        descripcion: "",
        precio: "",
        tipoCarne: "",
      },
      editar: false,
      editarProducto:false,
      usuarioEditar: {},
      productoEditar: {},
    };
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["estaActivo"]),
  },
  methods: {
    ...mapMutations(["obtenerUsuario"]),
    ...mapActions(["guardarUsuario", "leerToken", "cerrarSesion"]),
    
    /* INICIO --- OBTENER TODOS LOS OBJETOS */
    listarUsuarios() {
      let config = {
        headers: {
          token: this.token,
        },
      };

      this.axios
        .get("/users/usuario", config)
        .then((res) => {
          console.log(res.data);
          this.usuarios = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
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
    /* FIN --- OBTENER TODOS LOS OBJETOS */

    /* INICIO --- REGISTRAR OBJETOS */
    registrar() {
      this.axios
        .post("/users/nuevo-usuario", this.usuario)
        .then((res) => {
          this.usuarios.push(res.data);
          this.usuario.nombre = "";
          this.usuario.apellido = "";
          this.usuario.pass = "";
          this.usuario.birth_date = "";
          this.usuario.email = "";

          this.mensaje.color = "success";
          this.mensaje.texto = "Registro exitoso";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
          if (e.response.data.error.errors.nombre.message) {
            this.mensaje.texto = e.response.data.error.errors.name.message;
          } else {
            this.mensaje.texto = "Error del sistema";
          }
          this.mensaje.color = "danger";
          this.showAlert();
        });
    },
    registrarProductos() {
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.axios
        .post("/producto/nuevo-producto", this.producto, config)
        .then((res) => {
          this.productos.push(res.data);
          this.producto.nombre = "";
          this.producto.descripcion = "";
          this.producto.precio = "";
          this.producto.tipoCarne = "";

          this.mensaje.color = "success";
          this.mensaje.texto = "Registro exitoso";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
          if (e.response.data.error.errors.nombre.message) {
            this.mensaje.texto = e.response.data.error.errors.name.message;
          } else {
            this.mensaje.texto = "Error del sistema";
          }
          this.mensaje.color = "danger";
          this.showAlert();
        });
    },
    /* FIN --- REGISTRAR OBJETOS */

    /* INICIO --- ELIMINAR LOS OBJETOS POR ID */
    eliminarUsuario(id) {
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.axios
        .delete(`users/usuario/${id}`, config)
        .then((res) => {
          const index = this.usuarios.findIndex(
            (item) => item._id === res.data._id
          );
          this.usuarios.splice(index, 1);
          this.mensaje.color = "danger";
          this.mensaje.texto = "Usuario Eliminado!";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    eliminarProducto(id) {
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.axios
        .delete(`producto/producto/${id}`, config)
        .then((res) => {
          const index = this.productos.findIndex(
            (item) => item._id === res.data._id
          );
          this.productos.splice(index, 1);

          this.mensaje.color = "danger";
          this.mensaje.texto = "Producto Eliminado!";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    /* FIN --- ELIMINAR LOS OBJETOS POR ID */

    /* INICIO --- ACTIVAR EDICION FORMS */
    activarEdicion(id) {
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.editar = true;
      this.axios
        .get(`users/usuario/${id}`, config)
        .then((res) => {
          this.usuarioEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    activarEdicionProducto(id) {
      this.editarProducto = true;
      this.axios
        .get(`producto/producto/${id}`)
        .then((res) => {
          this.productoEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    /* FIN --- ACTIVAR EDICION FORMS */

    /* INICIO --- EDITAR LOS OBJETOS POR ID */
    editarUsuario(item) {
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.axios
        .put(`users/usuario/${item._id}`, item, config)
        .then((res) => {
          const index = this.usuarios.findIndex((n) => n._id === res.data._id);
          this.usuarios[index].nombre = res.data.nombre;
          this.usuarios[index].apellido = res.data.apellido;
          this.usuarios[index].pass = res.data.pass;
          this.usuarios[index].birth_date = res.data.birth_date;
          this.usuarios[index].email = res.data.email;

          this.mensaje.color = "success";
          this.mensaje.texto = "Usuario Editado";
          this.showAlert();
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    editarProductos(item) {
      console.log(item);
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.axios
        .put(`producto/producto/${item._id}`, item, config)
        .then((res) => {
          const index = this.productos.findIndex((n) => n._id === res.data._id);
          this.productos[index].nombre = res.data.nombre;
          this.productos[index].descripcion = res.data.descripcion;
          this.productos[index].precio = res.data.precio;
          this.productos[index].tipoCarne = res.data.tipoCarne;

          this.mensaje.color = "success";
          this.mensaje.texto = "Producto Editado";
          this.showAlert();
          this.editarProducto = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    /* FIN --- EDITAR LOS OBJETOS POR ID */

    /* CONTEXTO PARA CALENDARIO */
    onContext(ctx) {
      this.context = ctx;
    },

    /* CONTADOR ALERTAS */
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    /* MOSTRAR ALERTAS */
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
  created() {
    this.leerToken();
    this.listarUsuarios();
    this.listarProductos();
  },
};
</script>