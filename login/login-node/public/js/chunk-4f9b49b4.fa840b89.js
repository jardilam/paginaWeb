(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f9b49b4"],{3530:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"page-top"}},[e("div",{staticClass:"container-fluid"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-3",attrs:{id:"mainNav"}},[e("div",{staticClass:"container px-4 px-lg-5"},[t._m(0),t._m(1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ms-auto my-2 my-lg-0"},[t._m(2),t._m(3),t._m(4),t._v(" | "),t._m(5),t._v(" | "),e("li",{staticClass:"nav-item"},[t.estaActivo?e("b-link",{staticClass:"nav-link",on:{click:function(a){return t.cerrarSesion()}}},[t._v("Cerrar sesion")]):t._e()],1)])])])]),e("main",[t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),e("section",{staticClass:"collapse",attrs:{id:"collapseUsuarios"}},[e("div",{staticClass:"container-flui mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top img-thumbnail img-size",attrs:{src:s("6b28"),alt:"img-res"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title text-center"},[t._v("Usuario")]),e("div",{staticClass:"collapse",attrs:{id:"collapseCarne"}},[t.editar?t._e():e("form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),t.registrar()}}},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"nombre"}},[t._v("Nombre:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.nombre,expression:"usuario.nombre"}],staticClass:"form-control",attrs:{type:"text",id:"nombreForm"},domProps:{value:t.usuario.nombre},on:{input:function(a){a.target.composing||t.$set(t.usuario,"nombre",a.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"apellido"}},[t._v("Apellido:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.apellido,expression:"usuario.apellido"}],staticClass:"form-control",attrs:{type:"text",id:"apellidoForm"},domProps:{value:t.usuario.apellido},on:{input:function(a){a.target.composing||t.$set(t.usuario,"apellido",a.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"contrasena"}},[t._v("Contraseña:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.pass,expression:"usuario.pass"}],staticClass:"form-control",attrs:{type:"password",id:"constrasenaForm"},domProps:{value:t.usuario.pass},on:{input:function(a){a.target.composing||t.$set(t.usuario,"pass",a.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"fecha"}},[t._v("Fecha de naciemiento:")]),e("b-input-group",{staticClass:"mb-3"},[e("b-form-input",{attrs:{id:"fechaNacimiento",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},model:{value:t.usuario.birth_date,callback:function(a){t.$set(t.usuario,"birth_date",a)},expression:"usuario.birth_date"}}),e("b-input-group-append",[e("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"es-CO","aria-controls":"fechaNacimiento"},on:{context:t.onContext},model:{value:t.usuario.birth_date,callback:function(a){t.$set(t.usuario,"birth_date",a)},expression:"usuario.birth_date"}})],1)],1)],1),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"correo"}},[t._v("Correo electronico:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.email,expression:"usuario.email"}],staticClass:"form-control",attrs:{type:"email",id:"correoForm"},domProps:{value:t.usuario.email},on:{input:function(a){a.target.composing||t.$set(t.usuario,"email",a.target.value)}}})]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v(" Registrar ")])]),t.editar?e("form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),t.editarUsuario(t.usuarioEditar)}}},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"nombre"}},[t._v("Nombre:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuarioEditar.nombre,expression:"usuarioEditar.nombre"}],staticClass:"form-control",attrs:{type:"text",id:"nombreForm"},domProps:{value:t.usuarioEditar.nombre},on:{input:function(a){a.target.composing||t.$set(t.usuarioEditar,"nombre",a.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"apellido"}},[t._v("Apellido:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuarioEditar.apellido,expression:"usuarioEditar.apellido"}],staticClass:"form-control",attrs:{type:"text",id:"apellidoForm"},domProps:{value:t.usuarioEditar.apellido},on:{input:function(a){a.target.composing||t.$set(t.usuarioEditar,"apellido",a.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"contrasena"}},[t._v("Contraseña:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuarioEditar.pass,expression:"usuarioEditar.pass"}],staticClass:"form-control",attrs:{type:"password",id:"constrasenaForm"},domProps:{value:t.usuarioEditar.pass},on:{input:function(a){a.target.composing||t.$set(t.usuarioEditar,"pass",a.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"fecha"}},[t._v("Fecha de naciemiento:")]),e("b-input-group",{staticClass:"mb-3"},[e("b-form-input",{attrs:{id:"fechaNacimiento",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},model:{value:t.usuarioEditar.birth_date,callback:function(a){t.$set(t.usuarioEditar,"birth_date",a)},expression:"usuarioEditar.birth_date"}}),e("b-input-group-append",[e("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"es-CO","aria-controls":"fechaNacimiento"},on:{context:t.onContext},model:{value:t.usuarioEditar.birth_date,callback:function(a){t.$set(t.usuarioEditar,"birth_date",a)},expression:"usuarioEditar.birth_date"}})],1)],1)],1),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"correo"}},[t._v("Correo electronico:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usuarioEditar.email,expression:"usuarioEditar.email"}],staticClass:"form-control",attrs:{type:"email",id:"correoForm"},domProps:{value:t.usuarioEditar.email},on:{input:function(a){a.target.composing||t.$set(t.usuarioEditar,"email",a.target.value)}}})]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v(" Editar ")])]):t._e()])]),t._m(11)])])])]),e("table",{staticClass:"table table-striped table-sm"},[e("thead",{},[t._v(" Usuarios inscritos "),e("b-alert",{attrs:{"dismiss-label":"",show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(a){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")])],1),e("tbody",[t._m(12),t._l(t.usuarios,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(s))]),e("td",[t._v(t._s(a.nombre))]),e("td",[t._v(t._s(a.apellido))]),e("td",[t._v(t._s(a.email))]),e("td",[t._v(t._s(a.date))]),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"collapse",href:"#collapseCarne"},on:{click:function(s){return t.activarEdicion(a._id)}}},[t._v("Editar")]),t._v("| "),e("a",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return t.eliminarUsuario(a._id)}}},[t._v("Eliminar")])])])}))],2)])])]),e("footer")])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"navbar-brand",attrs:{href:"#page-top"}},[e("img",{staticClass:"img-fluid rounded logo",attrs:{src:s("6f42"),alt:"chatas"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#productos"}},[t._v(" Productos ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#noticias"}},[t._v(" Noticias ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#usuarios"}},[t._v(" Usuarios ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#page-top"}},[t._v("Seccion de Administracion")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid text-center",attrs:{id:"productos"}},[s("h2",{staticClass:"mt-4 center"},[s("a",{staticClass:"btn btn-outline-warning",attrs:{"data-bs-toggle":"collapse",href:"#collapseProductos",role:"button","aria-expanded":"false","aria-controls":"collapseProductos"}},[t._v(" Productos ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"collapse",attrs:{id:"collapseProductos"}},[e("div",{staticClass:"container-flui mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top img-thumbnail img-size",attrs:{src:s("524d"),alt:"img-res"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Res")]),e("div",{staticClass:"collapse",attrs:{id:"collapseCarne"}},[e("div",{staticClass:"card card-body"},[e("form",{attrs:{action:""}},[e("label",{attrs:{for:"nombre_producto"}},[t._v("Nombre producto:")]),e("input",{attrs:{type:"text",name:"nombre_producto"}}),e("br"),e("br"),e("label",{attrs:{for:"tipo_corte"}},[t._v("Tipo de corte:")]),e("select",{attrs:{name:"tipo_corte",id:"cortes"}},[e("option",{attrs:{value:"corte1"}},[t._v("Corte1")]),e("option",{attrs:{value:"corte2"}},[t._v("Corte2")]),e("option",{attrs:{value:"corte3"}},[t._v("Corte3")])]),e("br"),e("br"),e("input",{staticClass:"btn btn-warning",attrs:{type:"submit",value:"Crear"}})])])])]),e("div",{staticClass:"card-body bg-primary"},[e("p",[e("a",{staticClass:"card-link",attrs:{"data-bs-toggle":"collapse",href:"#collapseCarne",role:"button","aria-expanded":"false","aria-controls":"collapseCarne"}},[t._v(" Crear nuevo ")])])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top img-thumbnail img-size",attrs:{src:s("8672"),alt:"img-cerdo"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Cerdo")]),e("div",{staticClass:"collapse",attrs:{id:"collapseCerdo"}},[e("div",{staticClass:"card card-body"},[e("form",{attrs:{action:""}},[e("label",{attrs:{for:"nombre_producto"}},[t._v("Nombre producto:")]),e("input",{attrs:{type:"text",name:"nombre_producto"}}),e("br"),e("br"),e("label",{attrs:{for:"tipo_corte"}},[t._v("Tipo de corte:")]),e("select",{attrs:{name:"tipo_corte",id:"cortes"}},[e("option",{attrs:{value:"corte1"}},[t._v("Corte1")]),e("option",{attrs:{value:"corte2"}},[t._v("Corte2")]),e("option",{attrs:{value:"corte3"}},[t._v("Corte3")])]),e("br"),e("br"),e("input",{staticClass:"btn btn-warning",attrs:{type:"submit",value:"Crear"}})])])])]),e("div",{staticClass:"card-body bg-primary"},[e("p",[e("a",{staticClass:"card-link",attrs:{"data-bs-toggle":"collapse",href:"#collapseCerdo",role:"button","aria-expanded":"false","aria-controls":"collapseCerdo"}},[t._v(" Crear nuevo ")])])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top img-thumbnail img-size",attrs:{src:s("f357"),alt:"img-pollo"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Pollo")]),e("div",{staticClass:"collapse",attrs:{id:"collapsePollo"}},[e("div",{staticClass:"card card-body"},[e("form",{attrs:{action:""}},[e("label",{attrs:{for:"nombre_producto"}},[t._v("Nombre producto:")]),e("input",{attrs:{type:"text",name:"nombre_producto"}}),e("br"),e("br"),e("label",{attrs:{for:"tipo_corte"}},[t._v("Tipo de corte:")]),e("select",{attrs:{name:"tipo_corte",id:"cortes"}},[e("option",{attrs:{value:"corte1"}},[t._v("Corte1")]),e("option",{attrs:{value:"corte2"}},[t._v("Corte2")]),e("option",{attrs:{value:"corte3"}},[t._v("Corte3")])]),e("br"),e("br"),e("input",{staticClass:"btn btn-warning",attrs:{type:"submit",value:"Crear"}})])])])]),e("div",{staticClass:"card-body bg-primary"},[e("p",[e("a",{staticClass:"card-link",attrs:{"data-bs-toggle":"collapse",href:"#collapsePollo",role:"button","aria-expanded":"false","aria-controls":"collapsePollo"}},[t._v(" Crear nuevo ")])])])])])])]),e("table",{staticClass:"table table-striped table-sm"},[e("thead",{},[t._v(" Productos ")]),e("tbody",[e("tr",[e("th",[t._v("Nombre producto")]),e("th",[t._v("Corte")]),e("th",[t._v("Precio por kg")]),e("th",[t._v("Tipo de carne")]),e("th",[t._v("Acciones")])]),e("tr",[e("td",[t._v("Pechuga")]),e("td",[t._v("Entero")]),e("td",[t._v("7500")]),e("td",[t._v("Pollo")]),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{type:"button",href:""}},[t._v("Editar")]),t._v("| "),e("a",{staticClass:"btn btn-danger",attrs:{type:"button",href:""}},[t._v("Eliminar")])])]),e("tr",[e("td",[t._v("Cuadril")]),e("td",[t._v("magro")]),e("td",[t._v("10500")]),e("td",[t._v("Res")]),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{type:"button",href:""}},[t._v("Editar")]),t._v("| "),e("a",{staticClass:"btn btn-danger",attrs:{type:"button",href:""}},[t._v("Eliminar")])])]),e("tr",[e("td",[t._v("Tocino")]),e("td",[t._v("papada")]),e("td",[t._v("5600")]),e("td",[t._v("Pollo")]),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{type:"button",href:""}},[t._v("Editar")]),t._v("| "),e("a",{staticClass:"btn btn-danger",attrs:{type:"button",href:""}},[t._v("Eliminar")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid text-center",attrs:{id:"noticias"}},[s("h2",{staticClass:"mt-4 center"},[s("a",{staticClass:"btn btn-outline-warning",attrs:{"data-bs-toggle":"collapse",href:"#collapseNoticias",role:"button","aria-expanded":"false","aria-controls":"collapseNoticias"}},[t._v(" Noticias ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"collapse",attrs:{id:"collapseNoticias"}},[e("div",{staticClass:"container-flui mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top img-thumbnail img-size",attrs:{src:s("524d"),alt:"img-res"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Res")]),e("div",{staticClass:"collapse",attrs:{id:"collapseCarne"}},[e("div",{staticClass:"card card-body"},[e("form",{attrs:{action:""}},[e("label",{attrs:{for:"nombre_producto"}},[t._v("Nombre producto:")]),e("input",{attrs:{type:"text",name:"nombre_producto"}}),e("br"),e("br"),e("label",{attrs:{for:"tipo_corte"}},[t._v("Tipo de corte:")]),e("select",{attrs:{name:"tipo_corte",id:"cortes"}},[e("option",{attrs:{value:"corte1"}},[t._v("Corte1")]),e("option",{attrs:{value:"corte2"}},[t._v("Corte2")]),e("option",{attrs:{value:"corte3"}},[t._v("Corte3")])]),e("br"),e("br"),e("input",{staticClass:"btn btn-warning",attrs:{type:"submit",value:"Crear"}})])])])]),e("div",{staticClass:"card-body bg-primary"},[e("p",[e("a",{staticClass:"card-link",attrs:{"data-bs-toggle":"collapse",href:"#collapseCarne",role:"button","aria-expanded":"false","aria-controls":"collapseCarne"}},[t._v(" Crear nuevo ")])])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top img-thumbnail img-size",attrs:{src:s("8672"),alt:"img-cerdo"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Cerdo")]),e("div",{staticClass:"collapse",attrs:{id:"collapseCerdo"}},[e("div",{staticClass:"card card-body"},[e("form",{attrs:{action:""}},[e("label",{attrs:{for:"nombre_producto"}},[t._v("Nombre producto:")]),e("input",{attrs:{type:"text",name:"nombre_producto"}}),e("br"),e("br"),e("label",{attrs:{for:"tipo_corte"}},[t._v("Tipo de corte:")]),e("select",{attrs:{name:"tipo_corte",id:"cortes"}},[e("option",{attrs:{value:"corte1"}},[t._v("Corte1")]),e("option",{attrs:{value:"corte2"}},[t._v("Corte2")]),e("option",{attrs:{value:"corte3"}},[t._v("Corte3")])]),e("br"),e("br"),e("input",{staticClass:"btn btn-warning",attrs:{type:"submit",value:"Crear"}})])])])]),e("div",{staticClass:"card-body bg-primary"},[e("p",[e("a",{staticClass:"card-link",attrs:{"data-bs-toggle":"collapse",href:"#collapseCerdo",role:"button","aria-expanded":"false","aria-controls":"collapseCerdo"}},[t._v(" Crear nuevo ")])])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top img-thumbnail img-size",attrs:{src:s("f357"),alt:"img-pollo"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Pollo")]),e("div",{staticClass:"collapse",attrs:{id:"collapsePollo"}},[e("div",{staticClass:"card card-body"},[e("form",{attrs:{action:""}},[e("label",{attrs:{for:"nombre_producto"}},[t._v("Nombre producto:")]),e("input",{attrs:{type:"text",name:"nombre_producto"}}),e("br"),e("br"),e("label",{attrs:{for:"tipo_corte"}},[t._v("Tipo de corte:")]),e("select",{attrs:{name:"tipo_corte",id:"cortes"}},[e("option",{attrs:{value:"corte1"}},[t._v("Corte1")]),e("option",{attrs:{value:"corte2"}},[t._v("Corte2")]),e("option",{attrs:{value:"corte3"}},[t._v("Corte3")])]),e("br"),e("br"),e("input",{staticClass:"btn btn-warning",attrs:{type:"submit",value:"Crear"}})])])])]),e("div",{staticClass:"card-body bg-primary"},[e("p",[e("a",{staticClass:"card-link",attrs:{"data-bs-toggle":"collapse",href:"#collapsePollo",role:"button","aria-expanded":"false","aria-controls":"collapsePollo"}},[t._v(" Crear nuevo ")])])])])])])]),e("table",{staticClass:"table table-striped table-sm"},[e("thead",{},[t._v(" Productos ")]),e("tbody",[e("tr",[e("th",[t._v("Nombre producto")]),e("th",[t._v("Corte")]),e("th",[t._v("Precio por kg")]),e("th",[t._v("Tipo de carne")]),e("th",[t._v("Acciones")])]),e("tr",[e("td",[t._v("Pechuga")]),e("td",[t._v("Entero")]),e("td",[t._v("7500")]),e("td",[t._v("Pollo")]),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{type:"button",href:""}},[t._v("Editar")]),t._v("| "),e("a",{staticClass:"btn btn-danger",attrs:{type:"button",href:""}},[t._v("Eliminar")])])]),e("tr",[e("td",[t._v("Cuadril")]),e("td",[t._v("magro")]),e("td",[t._v("10500")]),e("td",[t._v("Res")]),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{type:"button",href:""}},[t._v("Editar")]),t._v("| "),e("a",{staticClass:"btn btn-danger",attrs:{type:"button",href:""}},[t._v("Eliminar")])])]),e("tr",[e("td",[t._v("Tocino")]),e("td",[t._v("papada")]),e("td",[t._v("5600")]),e("td",[t._v("Pollo")]),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{type:"button",href:""}},[t._v("Editar")]),t._v("| "),e("a",{staticClass:"btn btn-danger",attrs:{type:"button",href:""}},[t._v("Eliminar")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid text-center",attrs:{id:"usuarios"}},[s("h2",{staticClass:"mt-4 center"},[s("a",{staticClass:"btn btn-outline-warning",attrs:{"data-bs-toggle":"collapse",href:"#collapseUsuarios",role:"button","aria-expanded":"false","aria-controls":"collapseUsuarios"}},[t._v(" Usuarios ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body bg-primary"},[s("p",[s("a",{staticClass:"btn btn-primary",attrs:{"data-bs-toggle":"collapse",href:"#collapseCarne",role:"button","aria-expanded":"false","aria-controls":"collapseCarne"}},[t._v(" Crear nuevo ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",[t._v("Id")]),s("th",[t._v("Nombre")]),s("th",[t._v("Apellido")]),s("th",[t._v("Email")]),s("th",[t._v("Date")]),s("th",[t._v("Acciones")])])}],o=s("5530"),i=(s("b0c0"),s("c740"),s("a434"),s("2f62")),l={data:function(){return{mensaje:{color:"success",texto:""},dismissSecs:5,dismissCountDown:0,usuarios:[],usuario:{nombre:"",apellido:"",email:"",birth_date:"",pass:"",role:""},editar:!1,usuarioEditar:{}}},computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])(["token"])),Object(i["c"])(["estaActivo"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["obtenerUsuario"])),Object(i["b"])(["guardarUsuario","leerToken","cerrarSesion"])),{},{listarUsuarios:function(){var t=this,a={headers:{token:this.token}};this.axios.get("/users/usuario",a).then((function(a){console.log(a.data),t.usuarios=a.data})).catch((function(t){console.log(t.response)}))},registrar:function(){var t=this;this.axios.post("/users/nuevo-usuario",this.usuario).then((function(a){t.usuarios.push(a.data),t.usuario.nombre="",t.usuario.apellido="",t.usuario.pass="",t.usuario.birth_date="",t.usuario.email="",t.mensaje.color="success",t.mensaje.texto="Registro exitoso",t.showAlert()})).catch((function(a){console.log(a.response),a.response.data.error.errors.nombre.message?t.mensaje.texto=a.response.data.error.errors.name.message:t.mensaje.texto="Error del sistema",t.mensaje.color="danger",t.showAlert()}))},eliminarUsuario:function(t){var a=this,s={headers:{token:this.token}};this.axios.delete("users/usuario/".concat(t),s).then((function(t){var s=a.usuarios.findIndex((function(a){return a._id===t.data._id}));a.usuarios.splice(s,1),a.mensaje.color="danger",a.mensaje.texto="Usuario Eliminado!",a.showAlert()})).catch((function(t){console.log(t.response)}))},activarEdicion:function(t){var a=this,s={headers:{token:this.token}};this.editar=!0,this.axios.get("users/usuario/".concat(t),s).then((function(t){a.usuarioEditar=t.data})).catch((function(t){console.log(t.response)}))},editarUsuario:function(t){var a=this,s={headers:{token:this.token}};this.axios.put("users/usuario/".concat(t._id),t,s).then((function(t){var s=a.usuarios.findIndex((function(a){return a._id===t.data._id}));a.usuarios[s].nombre=t.data.nombre,a.usuarios[s].apellido=t.data.apellido,a.usuarios[s].pass=t.data.pass,a.usuarios[s].birth_date=t.data.birth_date,a.usuarios[s].email=t.data.email,a.mensaje.color="success",a.mensaje.texto="Nota Editada",a.showAlert(),a.editar=!1})).catch((function(t){console.log(t.response)}))},onContext:function(t){this.context=t},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}),created:function(){this.leerToken(),this.listarUsuarios()}},n=l,c=s("2877"),d=Object(c["a"])(n,e,r,!1,null,null,null);a["default"]=d.exports},"524d":function(t,a,s){t.exports=s.p+"img/res.ed39ee22.jpg"},"6b28":function(t,a,s){t.exports=s.p+"img/user.ee3fe759.jpg"},8672:function(t,a,s){t.exports=s.p+"img/cerdo.f20a8127.jpg"},a434:function(t,a,s){"use strict";var e=s("23e7"),r=s("23cb"),o=s("a691"),i=s("50c4"),l=s("7b0b"),n=s("65f0"),c=s("8418"),d=s("1dde"),u=d("splice"),p=Math.max,m=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!u},{splice:function(t,a){var s,e,d,u,_,C,f=l(this),h=i(f.length),g=r(t,h),y=arguments.length;if(0===y?s=e=0:1===y?(s=0,e=h-g):(s=y-2,e=m(p(o(a),0),h-g)),h+s-e>v)throw TypeError(b);for(d=n(f,e),u=0;u<e;u++)_=g+u,_ in f&&c(d,u,f[_]);if(d.length=e,s<e){for(u=g;u<h-e;u++)_=u+e,C=u+s,_ in f?f[C]=f[_]:delete f[C];for(u=h;u>h-e+s;u--)delete f[u-1]}else if(s>e)for(u=h-e;u>g;u--)_=u+e-1,C=u+s-1,_ in f?f[C]=f[_]:delete f[C];for(u=0;u<s;u++)f[u+g]=arguments[u+2];return f.length=h-e+s,d}})},c740:function(t,a,s){"use strict";var e=s("23e7"),r=s("b727").findIndex,o=s("44d2"),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),e({target:"Array",proto:!0,forced:l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},f357:function(t,a,s){t.exports=s.p+"img/pollo.0db4188d.jpg"}}]);
//# sourceMappingURL=chunk-4f9b49b4.fa840b89.js.map