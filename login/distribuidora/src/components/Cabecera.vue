<template>
  <div id="page-top">
    <!-- Navigation-->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-3"
      id="mainNav"
    >
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/"
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
              <a class="nav-link" href="#page-top">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#product">Nuestros Productos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#services2">Noticias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Quienes Somos</a>
            </li>
            |
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
              <li class="nav-item">
                <b-link @click="$bvModal.show('modalRegistro')" class="nav-link"
                  >Registrarse</b-link
                >
              </li>
              <li class="nav-item">
                <b-link v-b-modal.modalLogin class="nav-link" v-if="!estaActivo"
                  >Iniciar sesion</b-link
                >
                <b-link
                  @click="cerrarSesion()"
                  class="nav-link"
                  v-if="estaActivo"
                  >Cerrar sesion</b-link
                >
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Registro Modal -->
    <b-modal id="modalRegistro">
      <template #modal-header="{ close }">
        <h5>Registro</h5>
        <b-button size="sm" variant="" @click="close()"> &#10005; </b-button>
      </template>
      <div class="card text-center">
        <div class="card-body">
          <form @submit.prevent="registrar()" method="post">
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
              <label for="apellido" class="form-label">Apellido:</label>
              <input
                type="text"
                class="form-control"
                id="apellidoForm"
                v-model="usuario.apellido"
              />
            </div>
            <div class="mb-3">
              <label for="contrasena" class="form-label">Contraseña:</label>
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
              <label for="correo" class="form-label">Correo electronico:</label>
              <input
                type="email"
                class="form-control"
                id="correoForm"
                v-model="usuario.email"
              />
            </div>
            <button type="submit" class="btn btn-secondary">Registrar</button>
          </form>
        </div>
      </div>
      <template #modal-footer class="text-center">
        <div class="w-100">
          <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            {{ mensaje.texto }}
          </b-alert>
        </div>
      </template>
    </b-modal>

    <!-- login Modal -->
    <b-modal id="modalLogin">
      <template #modal-header="{ close }">
        <h5>Inicio de sesion</h5>
        <b-button size="sm" variant="" @click="close()"> &#10005; </b-button>
      </template>
      <div class="card text-center">
        <div class="card-body">
          <form @submit.prevent="login()">
            <div class="mb-3">
              <label for="correo" class="form-label">Correo electronico:</label>
              <input
                type="email"
                class="form-control"
                id="correoForm"
                v-model="usuario.email"
              />
            </div>
            <div class="mb-3">
              <label for="contrasenaLogin" class="form-label"
                >Contraseña:</label
              >
              <input
                type="password"
                class="form-control"
                id="constrasenaLoginForm"
                v-model="usuario.pass"
              />
            </div>
            <button type="submit" class="btn btn-secondary">Ingresar</button>
          </form>
        </div>
      </div>
      <template #modal-footer class="text-center">
        <div class="w-100">
          <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            {{ mensaje.texto }}
          </b-alert>
        </div>
      </template>
    </b-modal>

    <!-- Masthead-->
    <header class="masthead">
      <div class="container px-4 px-lg-5 h-100">
        <div
          class="
            row
            gx-4 gx-lg-5
            h-100
            align-items-center
            justify-content-center
            text-center
          "
        >
          <div class="col-lg-8 align-self-end">
            <h1 class="text-white font-weight-bold">
              <img
                src="../assets/img/chatas/fraseHeader.png"
                class="img-fluid"
                alt=""
              />
            </h1>
            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <a class="btn btn-primary" href="#about">Conocenos</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      mensaje: { color: "success", texto: "" },
      context: null,
      dismissSecs: 5,
      dismissCountDown: 0,
      usuarios: [],
      usuario: {
        nombre: "",
        apellido: "",
        email: "",
        birth_date: "",
        pass: "",
        role: "",
      },
    };
  },
  methods: {
    ...mapMutations(["obtenerUsuario"]),
    ...mapActions(["guardarUsuario", "leerToken", "cerrarSesion"]),

    login() {
      this.axios.post("/login", this.usuario).then((res) => {
        const token = res.data.token;
        this.guardarUsuario(token);
      });
    },
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
    onContext(ctx) {
      this.context = ctx;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
  computed: {
    ...mapGetters(["estaActivo"]),
  },
  created() {
    this.leerToken();
  },
};
</script>
