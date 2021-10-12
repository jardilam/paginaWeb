<template>
  <div>
<!-- Contacto-->
    <section class="page-section">
      <hr class="divider" id="contact2" />
      <h2 class="text-center mt-0">Contáctanos</h2>
      <hr class="divider" />
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 col-xl-6 text-center">
            <p class="text-muted mb-5">
              ¿Tienes alguna inquietud o sugerencia? ¿Necesitas más información
              acerca de nuestros productos y/o procesos? Envíanos un mensaje y
              nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div class="col-lg-6">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label for="name">Nombre completo</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Se requiere un nombre.
                </div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                />
                <label for="email">Dirección de e-mail</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  Se requiere una dirección de e-mail.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  E-mail inválido.
                </div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label for="phone">Teléfono de contacto</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  Se requiere un número de teléfono móvil o fijo en Colombia.
                </div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label for="message">Mensaje</label>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  Se requiere un mensaje.
                </div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">
                    Envío de formulario exitoso. Una confirmación ha sido
                    enviada al correo registrado. Muy pronto le contestaremos.
                  </div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms"
                    >https://startbootstrap.com/solution/contact-forms</a
                  >
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error al enviar el mensaje! Intente de nuevo.
                </div>
              </div>
              <!-- Submit Button-->
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-xl disabled"
                  id="submitButton"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-4 text-center mb-5 mb-lg-0">
            <i class="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+57 (315) 546-0477</div>
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
            //Data del formulario de contacto
            tituloContacto: "Contáctanos",
            descripcionContacto: "¿Tienes alguna inquietud o sugerencia? ¿Necesitas más información acerca \
            de nuestros productos y/o procesos? Envíanos un mensaje y nos pondremos en contacto contigo.",   
            nombreContactoReq: "Nombre Completo",
            nombreContactoInv: "Se requiere ingresar un nombre.",
            emailContactoReq: "E-mail",
            emailContactoInv1: "Se requiere una dirección de e-mail.",            
            emailContactoInv2: "Dirección de e-mail inválida.",
            telefonoContactoReq: "Teléfono",
            telefonoContactoInv: "Se requiere ingresar un número de teléfono móvil o fijo en Colombia.",
            mensajeContactoReq: "Mensaje",
            mensajeContactoInv: "Se requiere ingresar un mensaje",
            formContactoSucess: "Envío de formulario exitoso. Una confirmación ha sido enviada al correo \
            registrado. Muy pronto le contestaremos.",
            formContactoError: "!Error al enviar el formulario! Por favor, intente de nuevo.",
            botonContactoEnv: "Enviar",
            phoneContactoInfo: "Haz tus pedidos: +57 (315) 546-0477"
            // additional properties later
        }
    },
}
</script>