(function (t) {
  function a(a) {
    for (
      var e, r, n = a[0], l = a[1], c = a[2], d = 0, m = [];
      d < n.length;
      d++
    )
      (r = n[d]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && m.push(i[r][0]),
        (i[r] = 0);
    for (e in l) Object.prototype.hasOwnProperty.call(l, e) && (t[e] = l[e]);
    u && u(a);
    while (m.length) m.shift()();
    return o.push.apply(o, c || []), s();
  }
  function s() {
    for (var t, a = 0; a < o.length; a++) {
      for (var s = o[a], e = !0, r = 1; r < s.length; r++) {
        var l = s[r];
        0 !== i[l] && (e = !1);
      }
      e && (o.splice(a--, 1), (t = n((n.s = s[0]))));
    }
    return t;
  }
  var e = {},
    i = { app: 0 },
    o = [];
  function r(t) {
    return (
      n.p +
      "js/" +
      ({}[t] || t) +
      "." +
      { "chunk-b73ddafa": "48094cf8" }[t] +
      ".js"
    );
  }
  function n(a) {
    if (e[a]) return e[a].exports;
    var s = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.e = function (t) {
    var a = [],
      s = i[t];
    if (0 !== s)
      if (s) a.push(s[2]);
      else {
        var e = new Promise(function (a, e) {
          s = i[t] = [a, e];
        });
        a.push((s[2] = e));
        var o,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          n.nc && l.setAttribute("nonce", n.nc),
          (l.src = r(t));
        var c = new Error();
        o = function (a) {
          (l.onerror = l.onload = null), clearTimeout(d);
          var s = i[t];
          if (0 !== s) {
            if (s) {
              var e = a && ("load" === a.type ? "missing" : a.type),
                o = a && a.target && a.target.src;
              (c.message =
                "Loading chunk " + t + " failed.\n(" + e + ": " + o + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = e),
                (c.request = o),
                s[1](c);
            }
            i[t] = void 0;
          }
        };
        var d = setTimeout(function () {
          o({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = o), document.head.appendChild(l);
      }
    return Promise.all(a);
  }),
    (n.m = t),
    (n.c = e),
    (n.d = function (t, a, s) {
      n.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: s });
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, a) {
      if ((1 & a && (t = n(t)), 8 & a)) return t;
      if (4 & a && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & a && "string" != typeof t)
      )
        for (var e in t)
          n.d(
            s,
            e,
            function (a) {
              return t[a];
            }.bind(null, e)
          );
      return s;
    }),
    (n.n = function (t) {
      var a =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return n.d(a, "a", a), a;
    }),
    (n.o = function (t, a) {
      return Object.prototype.hasOwnProperty.call(t, a);
    }),
    (n.p = "/"),
    (n.oe = function (t) {
      throw (console.error(t), t);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = l.push.bind(l);
  (l.push = a), (l = l.slice());
  for (var d = 0; d < l.length; d++) a(l[d]);
  var u = c;
  o.push([0, "chunk-vendors"]), s();
})({
  0: function (t, a, s) {
    t.exports = s("56d7");
  },
  "07ca": function (t, a, s) {
    t.exports = s.p + "img/res.142e8d23.jpeg";
  },
  "14b9": function (t, a, s) {
    t.exports = s.p + "img/62.176748c7.jpg";
  },
  "159c": function (t, a, s) {
    t.exports = s.p + "img/lomo.f088f6bd.jpeg";
  },
  "1b99": function (t, a, s) {
    t.exports = s.p + "img/912966.b7414e18.png";
  },
  "2e8a": function (t, a, s) {
    t.exports = s.p + "img/34a.b2e254c8.jpg";
  },
  "2f20": function (t, a, s) {
    t.exports = s.p + "img/32a.dc950073.jpg";
  },
  "3b38": function (t, a, s) {
    t.exports = s.p + "img/61.ee9b86df.jpg";
  },
  "3ffb": function (t, a, s) {
    t.exports = s.p + "img/31a.b0dd2e4f.jpg";
  },
  "486a": function (t, a, s) {
    t.exports = s.p + "img/Foto_Henry.d7ad87b0.jpeg";
  },
  "490c": function (t, a, s) {
    t.exports = s.p + "img/33a.72b5cbd6.jpg";
  },
  "4ad7": function (t, a, s) {
    t.exports = s.p + "img/galardon2.660873c4.png";
  },
  "4d54": function (t, a, s) {
    t.exports = s.p + "img/ciculoDeSabores.f205ae6c.png";
  },
  "52c8": function (t, a, s) {
    t.exports = s.p + "img/31.4bc4e15c.jpg";
  },
  "56d7": function (t, a, s) {
    "use strict";
    s.r(a);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var e = s("2b0e"),
      i = function () {
        var t = this,
          a = t.$createElement,
          s = t._self._c || a;
        return s(
          "div",
          { attrs: { id: "app" } },
          [s("div", { attrs: { id: "nav" } }), s("router-view")],
          1
        );
      },
      o = [],
      r = (s("5c0b"), s("2877")),
      n = {},
      l = Object(r["a"])(n, i, o, !1, null, null, null),
      c = l.exports,
      d = (s("d3b7"), s("3ca3"), s("ddb0"), s("8c4f")),
      u = function () {
        var t = this,
          a = t.$createElement,
          s = t._self._c || a;
        return s(
          "div",
          [
            s("Cabecera"),
            s("Producto"),
            s("Noticias"),
            s("About"),
            s("Contact"),
            s("Footer"),
          ],
          1
        );
      },
      m = [],
      p = function () {
        var t = this,
          a = t.$createElement,
          s = t._self._c || a;
        return s(
          "div",
          { attrs: { id: "page-top" } },
          [
            s(
              "nav",
              {
                staticClass:
                  "navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-3",
                attrs: { id: "mainNav" },
              },
              [
                s("div", { staticClass: "container px-4 px-lg-5" }, [
                  t._m(0),
                  t._m(1),
                  s(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse",
                      attrs: { id: "navbarResponsive" },
                    },
                    [
                      s(
                        "ul",
                        { staticClass: "navbar-nav ms-auto my-2 my-lg-0" },
                        [
                          t._m(2),
                          t._m(3),
                          t._m(4),
                          t._m(5),
                          t._m(6),
                          t._m(7),
                          t._v(" | "),
                          s(
                            "ul",
                            { staticClass: "navbar-nav ms-auto my-2 my-lg-0" },
                            [
                              s(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  s(
                                    "b-link",
                                    {
                                      staticClass: "nav-link",
                                      on: {
                                        click: function (a) {
                                          return t.$bvModal.show(
                                            "modalRegistro"
                                          );
                                        },
                                      },
                                    },
                                    [t._v("Registrarse")]
                                  ),
                                ],
                                1
                              ),
                              s(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  t.estaActivo
                                    ? t._e()
                                    : s(
                                        "b-link",
                                        {
                                          directives: [
                                            {
                                              name: "b-modal",
                                              rawName: "v-b-modal.modalLogin",
                                              modifiers: { modalLogin: !0 },
                                            },
                                          ],
                                          staticClass: "nav-link",
                                        },
                                        [t._v("Iniciar sesion")]
                                      ),
                                  t.estaActivo
                                    ? s(
                                        "b-link",
                                        {
                                          staticClass: "nav-link",
                                          on: {
                                            click: function (a) {
                                              return t.cerrarSesion();
                                            },
                                          },
                                        },
                                        [t._v("Cerrar sesion")]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            s(
              "b-modal",
              {
                attrs: { id: "modalRegistro" },
                scopedSlots: t._u([
                  {
                    key: "modal-header",
                    fn: function (a) {
                      var e = a.close;
                      return [
                        s("h5", [t._v("Registro")]),
                        s(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "" },
                            on: {
                              click: function (t) {
                                return e();
                              },
                            },
                          },
                          [t._v(" ??? ")]
                        ),
                      ];
                    },
                  },
                  {
                    key: "modal-footer",
                    fn: function () {
                      return [
                        s(
                          "div",
                          { staticClass: "w-100" },
                          [
                            s(
                              "b-alert",
                              {
                                attrs: {
                                  show: t.dismissCountDown,
                                  dismissible: "",
                                  variant: t.mensaje.color,
                                },
                                on: {
                                  dismissed: function (a) {
                                    t.dismissCountDown = 0;
                                  },
                                  "dismiss-count-down": t.countDownChanged,
                                },
                              },
                              [t._v(" " + t._s(t.mensaje.texto) + " ")]
                            ),
                          ],
                          1
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                s("div", { staticClass: "card text-center" }, [
                  s("div", { staticClass: "card-body" }, [
                    s(
                      "form",
                      {
                        attrs: { method: "post" },
                        on: {
                          submit: function (a) {
                            return a.preventDefault(), t.registrar();
                          },
                        },
                      },
                      [
                        s("div", { staticClass: "mb-3" }, [
                          s(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "nombre" },
                            },
                            [t._v("Nombre:")]
                          ),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.usuario.nombre,
                                expression: "usuario.nombre",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "nombreForm" },
                            domProps: { value: t.usuario.nombre },
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(t.usuario, "nombre", a.target.value);
                              },
                            },
                          }),
                        ]),
                        s("div", { staticClass: "mb-3" }, [
                          s(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "apellido" },
                            },
                            [t._v("Apellido:")]
                          ),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.usuario.apellido,
                                expression: "usuario.apellido",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "apellidoForm" },
                            domProps: { value: t.usuario.apellido },
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(t.usuario, "apellido", a.target.value);
                              },
                            },
                          }),
                        ]),
                        s("div", { staticClass: "mb-3" }, [
                          s(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "contrasena" },
                            },
                            [t._v("Contrase??a:")]
                          ),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.usuario.pass,
                                expression: "usuario.pass",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "password", id: "constrasenaForm" },
                            domProps: { value: t.usuario.pass },
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(t.usuario, "pass", a.target.value);
                              },
                            },
                          }),
                        ]),
                        s(
                          "div",
                          { staticClass: "mb-3" },
                          [
                            s(
                              "label",
                              {
                                staticClass: "form-label",
                                attrs: { for: "fecha" },
                              },
                              [t._v("Fecha de naciemiento:")]
                            ),
                            s(
                              "b-input-group",
                              { staticClass: "mb-3" },
                              [
                                s("b-form-input", {
                                  attrs: {
                                    id: "fechaNacimiento",
                                    type: "text",
                                    placeholder: "YYYY-MM-DD",
                                    autocomplete: "off",
                                  },
                                  model: {
                                    value: t.usuario.birth_date,
                                    callback: function (a) {
                                      t.$set(t.usuario, "birth_date", a);
                                    },
                                    expression: "usuario.birth_date",
                                  },
                                }),
                                s(
                                  "b-input-group-append",
                                  [
                                    s("b-form-datepicker", {
                                      attrs: {
                                        "button-only": "",
                                        right: "",
                                        locale: "es-CO",
                                        "aria-controls": "fechaNacimiento",
                                      },
                                      on: { context: t.onContext },
                                      model: {
                                        value: t.usuario.birth_date,
                                        callback: function (a) {
                                          t.$set(t.usuario, "birth_date", a);
                                        },
                                        expression: "usuario.birth_date",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        s("div", { staticClass: "mb-3" }, [
                          s(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "correo" },
                            },
                            [t._v("Correo electronico:")]
                          ),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.usuario.email,
                                expression: "usuario.email",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "email", id: "correoForm" },
                            domProps: { value: t.usuario.email },
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(t.usuario, "email", a.target.value);
                              },
                            },
                          }),
                        ]),
                        s(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "submit" },
                          },
                          [t._v("Registrar")]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
            s(
              "b-modal",
              {
                attrs: { id: "modalLogin" },
                scopedSlots: t._u([
                  {
                    key: "modal-header",
                    fn: function (a) {
                      var e = a.close;
                      return [
                        s("h5", [t._v("Inicio de sesion")]),
                        s(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "" },
                            on: {
                              click: function (t) {
                                return e();
                              },
                            },
                          },
                          [t._v(" ??? ")]
                        ),
                      ];
                    },
                  },
                  {
                    key: "modal-footer",
                    fn: function () {
                      return [
                        s(
                          "div",
                          { staticClass: "w-100" },
                          [
                            s(
                              "b-alert",
                              {
                                attrs: {
                                  show: t.dismissCountDown,
                                  dismissible: "",
                                  variant: t.mensaje.color,
                                },
                                on: {
                                  dismissed: function (a) {
                                    t.dismissCountDown = 0;
                                  },
                                  "dismiss-count-down": t.countDownChanged,
                                },
                              },
                              [t._v(" " + t._s(t.mensaje.texto) + " ")]
                            ),
                          ],
                          1
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                s("div", { staticClass: "card text-center" }, [
                  s("div", { staticClass: "card-body" }, [
                    s(
                      "form",
                      {
                        on: {
                          submit: function (a) {
                            return a.preventDefault(), t.login();
                          },
                        },
                      },
                      [
                        s("div", { staticClass: "mb-3" }, [
                          s(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "correo" },
                            },
                            [t._v("Correo electronico:")]
                          ),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.usuario.email,
                                expression: "usuario.email",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "email", id: "correoForm" },
                            domProps: { value: t.usuario.email },
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(t.usuario, "email", a.target.value);
                              },
                            },
                          }),
                        ]),
                        s("div", { staticClass: "mb-3" }, [
                          s(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "contrasenaLogin" },
                            },
                            [t._v("Contrase??a:")]
                          ),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.usuario.pass,
                                expression: "usuario.pass",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              id: "constrasenaLoginForm",
                            },
                            domProps: { value: t.usuario.pass },
                            on: {
                              input: function (a) {
                                a.target.composing ||
                                  t.$set(t.usuario, "pass", a.target.value);
                              },
                            },
                          }),
                        ]),
                        s(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "submit" },
                          },
                          [t._v("Ingresar")]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
            t._m(8),
          ],
          1
        );
      },
      v = [
        function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
            e("img", {
              staticClass: "img-fluid rounded logo",
              attrs: { src: s("6f42"), alt: "chatas" },
            }),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "button",
            {
              staticClass: "navbar-toggler navbar-toggler-right",
              attrs: {
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarResponsive",
                "aria-controls": "navbarResponsive",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [s("span", { staticClass: "navbar-toggler-icon" })]
          );
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("li", { staticClass: "nav-item" }, [
            s("a", { staticClass: "nav-link", attrs: { href: "#page-top" } }, [
              t._v("Home"),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("li", { staticClass: "nav-item" }, [
            s("a", { staticClass: "nav-link", attrs: { href: "#product" } }, [
              t._v("Nuestros Productos"),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("li", { staticClass: "nav-item" }, [
            s(
              "a",
              { staticClass: "nav-link", attrs: { href: "#containerNews" } },
              [t._v("Noticias")]
            ),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("li", { staticClass: "nav-item" }, [
            s("a", { staticClass: "nav-link", attrs: { href: "#blog" } }, [
              t._v("Blog"),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("li", { staticClass: "nav-item" }, [
            s("a", { staticClass: "nav-link", attrs: { href: "#about" } }, [
              t._v("Quienes Somos"),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("li", { staticClass: "nav-item" }, [
            s("a", { staticClass: "nav-link", attrs: { href: "#contact2" } }, [
              t._v("Contacto"),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("header", { staticClass: "masthead" }, [
            e("div", { staticClass: "container px-4 px-lg-5 h-100" }, [
              e(
                "div",
                {
                  staticClass:
                    "\n          row\n          gx-4 gx-lg-5\n          h-100\n          align-items-center\n          justify-content-center\n          text-center\n        ",
                },
                [
                  e("div", { staticClass: "col-lg-8 align-self-end" }, [
                    e("h1", { staticClass: "text-white font-weight-bold" }, [
                      e("img", {
                        staticClass: "img-fluid",
                        attrs: { src: s("d42f"), alt: "" },
                      }),
                    ]),
                    e("hr", { staticClass: "divider" }),
                  ]),
                  e("div", { staticClass: "col-lg-8 align-self-baseline" }, [
                    e(
                      "a",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { href: "#about" },
                      },
                      [t._v("Conocenos")]
                    ),
                  ]),
                ]
              ),
            ]),
          ]);
        },
      ],
      f = s("5530"),
      g = (s("b0c0"), s("2f62")),
      C = {
        data: function () {
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
        methods: Object(f["a"])(
          Object(f["a"])(
            Object(f["a"])({}, Object(g["d"])(["obtenerUsuario"])),
            Object(g["b"])(["guardarUsuario", "leerToken", "cerrarSesion"])
          ),
          {},
          {
            login: function () {
              var t = this;
              this.axios.post("/login", this.usuario).then(function (a) {
                var s = a.data.token;
                t.guardarUsuario(s);
              });
            },
            registrar: function () {
              var t = this;
              this.axios
                .post("/users/nuevo-usuario", this.usuario)
                .then(function (a) {
                  t.usuarios.push(a.data),
                    (t.usuario.nombre = ""),
                    (t.usuario.apellido = ""),
                    (t.usuario.pass = ""),
                    (t.usuario.birth_date = ""),
                    (t.usuario.email = ""),
                    (t.mensaje.color = "success"),
                    (t.mensaje.texto = "Registro exitoso"),
                    t.showAlert();
                })
                .catch(function (a) {
                  console.log(a.response),
                    a.response.data.error.errors.nombre.message
                      ? (t.mensaje.texto =
                          a.response.data.error.errors.name.message)
                      : (t.mensaje.texto = "Error del sistema"),
                    (t.mensaje.color = "danger"),
                    t.showAlert();
                });
            },
            onContext: function (t) {
              this.context = t;
            },
            countDownChanged: function (t) {
              this.dismissCountDown = t;
            },
            showAlert: function () {
              this.dismissCountDown = this.dismissSecs;
            },
          }
        ),
        computed: Object(f["a"])({}, Object(g["c"])(["estaActivo"])),
        created: function () {
          this.leerToken();
        },
      },
      b = C,
      h = Object(r["a"])(b, p, v, !1, null, null, null),
      _ = h.exports,
      x = function () {
        var t = this,
          a = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      y = [
        function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "container-fluid" }, [
            e("hr", { staticClass: "divider", attrs: { id: "about" } }),
            e("h2", { staticClass: "text-center mt-0" }, [
              t._v("Nuestro Equipo"),
            ]),
            e("hr", { staticClass: "divider" }),
            e("section", { staticClass: "page-section bg-primary" }, [
              e("div", { staticClass: "container px-4 px-lg-5" }, [
                e(
                  "div",
                  { staticClass: "row gx-4 gx-lg-5 justify-content-center" },
                  [
                    e("div", { staticClass: "col-lg-8 text-center" }, [
                      e("p", { staticClass: "text-white-75 mb-4" }, [
                        t._v(" Somos un equipo multidiciplinario."),
                        e("br"),
                        t._v(
                          " A continuaci??n conoce quienes somos y nuestro rol en el proyecto. "
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
              e("div", { staticClass: "row row-cols-1 row-cols-md-5 g-4" }, [
                e("div", { staticClass: "col" }, [
                  e("div", { staticClass: "card" }, [
                    e("img", {
                      staticClass: "card-img-top img-fluid",
                      attrs: { src: s("b9ed"), alt: "..." },
                    }),
                    e("div", { staticClass: "card-body" }, [
                      e("h5", { staticClass: "card-title" }, [
                        t._v("Juan Ardila"),
                        e("br"),
                        e("i", [t._v("Product Owner")]),
                      ]),
                    ]),
                  ]),
                ]),
                e("div", { staticClass: "col" }, [
                  e("div", { staticClass: "card" }, [
                    e("img", {
                      staticClass: "card-img-top",
                      attrs: { src: s("486a"), alt: "..." },
                    }),
                    e("div", { staticClass: "card-body" }, [
                      e("h5", { staticClass: "card-title" }, [
                        t._v(" Henry Vel??squez"),
                        e("br"),
                        e("i", [t._v("Scrum Master")]),
                      ]),
                    ]),
                  ]),
                ]),
                e("div", { staticClass: "col" }, [
                  e("div", { staticClass: "card" }, [
                    e("img", {
                      staticClass:
                        "card-img-top img-fluid rounded mx-auto d-block",
                      attrs: { src: s("1b99"), alt: "..." },
                    }),
                    e("div", { staticClass: "card-body" }, [
                      e("h5", { staticClass: "card-title" }, [
                        t._v(" Stephanie Rodr??guez"),
                        e("br"),
                        e("i", [t._v("Desarrolladora Frontend")]),
                      ]),
                    ]),
                  ]),
                ]),
                e("div", { staticClass: "col" }, [
                  e("div", { staticClass: "card" }, [
                    e("img", {
                      staticClass: "card-img-top",
                      attrs: { src: s("c28d"), alt: "..." },
                    }),
                    e("div", { staticClass: "card-body" }, [
                      e("h5", { staticClass: "card-title" }, [
                        t._v(" Julio D??az"),
                        e("br"),
                        e("i", [t._v("Desarrollador Backend")]),
                      ]),
                    ]),
                  ]),
                ]),
                e("div", { staticClass: "col" }, [
                  e("div", { staticClass: "card" }, [
                    e("img", {
                      staticClass: "card-img-top",
                      attrs: { src: s("9c96"), alt: "..." },
                    }),
                    e("div", { staticClass: "card-body" }, [
                      e("h5", { staticClass: "card-title" }, [
                        t._v(" Jorge Hern??ndez"),
                        e("br"),
                        e("i", [t._v("Desarrollador Fullstack")]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      M = {},
      j = Object(r["a"])(M, x, y, !1, null, null, null),
      k = j.exports,
      w = function () {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", { staticClass: "container-fluid" }, [
          e("hr", { staticClass: "divider", attrs: { id: "product" } }),
          e("h2", { staticClass: "text-center mt-0" }, [t._v("Productos")]),
          e("hr", { staticClass: "divider" }),
          e("section", { staticClass: "page-section bg-light" }, [
            e(
              "div",
              {
                staticClass: "carousel carousel-primary slide",
                attrs: {
                  id: "carouselExampleIndicators",
                  "data-ride": "carousel",
                },
              },
              [
                t._m(0),
                e("div", { staticClass: "carousel-inner" }, [
                  e("div", { staticClass: "carousel-item active" }, [
                    e("img", {
                      staticClass: "img-thumbnail img-product-size",
                      attrs: { src: s("07ca"), alt: "First slide" },
                    }),
                    e(
                      "div",
                      { staticClass: "carousel-caption d-none d-md-block" },
                      [
                        e("h1", [t._v("Cortes de Res")]),
                        e("p", [
                          t._v(
                            " En Chata's tenemos los mejores cortes de res adecuados a tu gusto "
                          ),
                        ]),
                        e(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              type: "button",
                              role: "button",
                              "data-bs-toggle": "collapse",
                              href: "#menu",
                              "aria-expanded": "false",
                              "aria-controls": "menu",
                            },
                            on: {
                              click: function (a) {
                                return t.imprimir("Res");
                              },
                            },
                          },
                          [t._v(" ??Ir a los productos! ")]
                        ),
                      ]
                    ),
                  ]),
                  e("div", { staticClass: "carousel-item" }, [
                    e("img", {
                      staticClass: "img-thumbnail img-product-size",
                      attrs: { src: s("159c"), alt: "Second slide" },
                    }),
                    e(
                      "div",
                      { staticClass: "carousel-caption d-none d-md-block" },
                      [
                        e("h1", [t._v("Cortes de Cerdo")]),
                        e("p", [
                          t._v(
                            " Nuestros cortes de cerdo tienen una inigualable presentaci??n que hace que siempre quieras un poco m??s "
                          ),
                        ]),
                        e(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              type: "button",
                              role: "button",
                              "data-bs-toggle": "collapse",
                              href: "#menu",
                              "aria-expanded": "false",
                              "aria-controls": "menu",
                            },
                            on: {
                              click: function (a) {
                                return t.imprimir("Cerdo");
                              },
                            },
                          },
                          [t._v(" ??Ir a los productos! ")]
                        ),
                      ]
                    ),
                  ]),
                  e("div", { staticClass: "carousel-item" }, [
                    e("img", {
                      staticClass: "img-thumbnail img-product-size",
                      attrs: { src: s("9324"), alt: "Third slide" },
                    }),
                    e(
                      "div",
                      { staticClass: "carousel-caption d-none d-md-block" },
                      [
                        e("h1", [t._v("Pollo")]),
                        e("p", [
                          t._v(
                            " Las mejores partes de pollo y filetes que podr??s encontrar en el mercado "
                          ),
                        ]),
                        e(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              type: "button",
                              role: "button",
                              "data-bs-toggle": "collapse",
                              href: "#menu",
                              "aria-expanded": "false",
                              "aria-controls": "menu",
                            },
                            on: {
                              click: function (a) {
                                return t.imprimir("Pollo");
                              },
                            },
                          },
                          [t._v(" ??Ir a los productos! ")]
                        ),
                      ]
                    ),
                  ]),
                ]),
                t._m(1),
                t._m(2),
              ]
            ),
          ]),
          e(
            "section",
            { staticClass: "collapse show", attrs: { id: "menu" } },
            [
              e("hr", { staticClass: "divider" }),
              e("div", { staticClass: "container-fluid" }, [
                e("div", { staticClass: "row" }, [
                  e("div", { staticClass: "col-4" }),
                  e("div", { staticClass: "col-4 text-center" }, [
                    e("div", { staticClass: "row" }, [
                      e("div", { staticClass: "col p-1" }, [
                        e(
                          "a",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button", href: "#menu" },
                            on: {
                              click: function (a) {
                                return t.imprimir("Pollo");
                              },
                            },
                          },
                          [t._v(" Pollo ")]
                        ),
                      ]),
                      e("div", { staticClass: "col p-1" }, [
                        e(
                          "a",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button", href: "#menu" },
                            on: {
                              click: function (a) {
                                return t.imprimir("Res");
                              },
                            },
                          },
                          [t._v(" Res ")]
                        ),
                      ]),
                      e("div", { staticClass: "col p-1" }, [
                        e(
                          "a",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button", href: "#menu" },
                            on: {
                              click: function (a) {
                                return t.imprimir("Cerdo");
                              },
                            },
                          },
                          [t._v(" Cerdo ")]
                        ),
                      ]),
                    ]),
                  ]),
                  e("div", { staticClass: "col-4" }),
                ]),
                e(
                  "div",
                  { staticClass: "row justify-content-center" },
                  t._l(t.productos.slice(0, 6), function (a, i) {
                    return e("div", { key: i, staticClass: "col-sm-6" }, [
                      a.tipoCarne == t.tipoCarne
                        ? e("div", [
                            e(
                              "div",
                              {
                                staticClass:
                                  "card text-white bg-dark border-danger m-1 text-center",
                              },
                              [
                                e("div", { staticClass: "card-header" }, [
                                  "Pollo" == a.tipoCarne
                                    ? e("div", [
                                        e("img", {
                                          staticClass:
                                            "card-img-top img-thumbnail img-size-product",
                                          attrs: {
                                            src: s("f357"),
                                            alt: "Pollo",
                                          },
                                        }),
                                      ])
                                    : "Res" == a.tipoCarne
                                    ? e("div", [
                                        e("img", {
                                          staticClass:
                                            "card-img-top img-thumbnail img-size-product",
                                          attrs: { src: s("ad06"), alt: "Res" },
                                        }),
                                      ])
                                    : "Cerdo" == a.tipoCarne
                                    ? e("div", [
                                        e("img", {
                                          staticClass:
                                            "card-img-top img-thumbnail img-size-product",
                                          attrs: {
                                            src: s("8672"),
                                            alt: "Cerdo",
                                          },
                                        }),
                                      ])
                                    : t._e(),
                                ]),
                                e("div", { staticClass: "card-body" }, [
                                  e("h5", { staticClass: "card-title" }, [
                                    t._v(t._s(a.nombre)),
                                  ]),
                                  e("p", { staticClass: "card-text" }, [
                                    t._v(t._s(a.descripcion)),
                                  ]),
                                ]),
                                e("div", { staticClass: "card-footer" }, [
                                  t._v("Valor por Kg - $" + t._s(a.precio)),
                                ]),
                              ]
                            ),
                          ])
                        : t._e(),
                    ]);
                  }),
                  0
                ),
              ]),
            ]
          ),
        ]);
      },
      E = [
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("ol", { staticClass: "carousel-indicators" }, [
            s("li", {
              staticClass: "active",
              attrs: {
                "data-target": "#carouselExampleIndicators",
                "data-slide-to": "0",
              },
            }),
            s("li", {
              attrs: {
                "data-target": "#carouselExampleIndicators",
                "data-slide-to": "1",
              },
            }),
            s("li", {
              attrs: {
                "data-target": "#carouselExampleIndicators",
                "data-slide-to": "2",
              },
            }),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "a",
            {
              staticClass: "carousel-control-prev",
              attrs: {
                href: "#carouselExampleIndicators",
                role: "button",
                "data-slide": "prev",
              },
            },
            [
              s("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: { "aria-hidden": "true" },
              }),
              s("span", {}, [t._v("Anterior")]),
            ]
          );
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "a",
            {
              staticClass: "carousel-control-next",
              attrs: {
                href: "#carouselExampleIndicators",
                role: "button",
                "data-slide": "next",
              },
            },
            [
              s("span", {
                staticClass: "carousel-control-next-icon",
                attrs: { "aria-hidden": "true" },
              }),
              s("span", { staticClass: "sr-only" }, [t._v("Siguiente")]),
            ]
          );
        },
      ],
      N = {
        data: function () {
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
          listarProductos: function () {
            var t = this;
            this.axios
              .get("/producto/producto")
              .then(function (a) {
                console.log(a.data), (t.productos = a.data);
              })
              .catch(function (t) {
                console.log(t.response);
              });
          },
          imprimir: function (t) {
            this.tipoCarne = t;
          },
        },
        created: function () {
          this.listarProductos(), this.imprimir();
        },
      },
      S = N,
      $ = Object(r["a"])(S, w, E, !1, null, null, null),
      q = $.exports,
      P = function () {
        var t = this,
          a = t.$createElement,
          s = t._self._c || a;
        return s("div", { staticClass: "container-fluid" }, [
          s(
            "div",
            {
              staticClass: "container-fluid p-0",
              attrs: { id: "containerNews" },
            },
            [
              s("hr", { staticClass: "divider" }),
              s("h2", { staticClass: "text-center mt-0" }, [t._v("Novedades")]),
              s("hr", { staticClass: "divider" }),
              s("div", { staticClass: "container-fluid p-0" }, [
                s("div", { staticClass: "row" }, [
                  s("div", { staticClass: "col-lg-3 col-md-6 text-center" }, [
                    s("div", { staticClass: "mt-5" }, [
                      s(
                        "a",
                        {
                          staticClass: "portfolio-link",
                          attrs: {
                            "data-bs-toggle": "modal",
                            href: "#portfolioModal1",
                          },
                        },
                        [
                          t._m(0),
                          s(
                            "div",
                            {
                              staticClass:
                                "portfolio-caption-heading text-primary",
                            },
                            [
                              s("h3", { staticClass: "h4 mb-2" }, [
                                t._v(t._s(t.tituloNovedad1)),
                              ]),
                            ]
                          ),
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenNovedad1, alt: "..." },
                          }),
                        ]
                      ),
                    ]),
                    s("div", { staticClass: "portfolio-caption" }, [
                      s("strong", [t._v(t._s(t.nombreNovedad1))]),
                      s(
                        "div",
                        {
                          staticClass:
                            "portfolio-caption-subheading text-muted",
                        },
                        [
                          t._v(" " + t._s(t.descripcionNovedad1) + " "),
                          s("div", { staticClass: "mt-auto" }, [
                            s(
                              "button",
                              {
                                staticClass: "btn btn-info",
                                attrs: {
                                  type: "button",
                                  onclick: t.linkNovedad1,
                                },
                              },
                              [t._v(" C??mo Comprar ")]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  s("div", { staticClass: "col-lg-3 col-md-6 text-center" }, [
                    s("div", { staticClass: "mt-5" }, [
                      s(
                        "a",
                        {
                          staticClass: "portfolio-link",
                          attrs: {
                            "data-bs-toggle": "modal",
                            href: "#portfolioModal2",
                          },
                        },
                        [
                          t._m(1),
                          s(
                            "div",
                            {
                              staticClass:
                                "portfolio-caption-heading text-primary",
                            },
                            [
                              s("h3", { staticClass: "h4 mb-2" }, [
                                t._v(t._s(t.tituloNovedad2)),
                              ]),
                            ]
                          ),
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenNovedad2, alt: "..." },
                          }),
                        ]
                      ),
                      s("div", { staticClass: "portfolio-caption" }, [
                        s("strong", [t._v(t._s(t.nombreNovedad2))]),
                        s(
                          "div",
                          {
                            staticClass:
                              "portfolio-caption-subheading text-muted",
                          },
                          [
                            t._v(" " + t._s(t.descripcionNovedad2) + " "),
                            s("div", { staticClass: "mt-auto" }, [
                              s(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: {
                                    type: "button",
                                    onclick: t.linkNovedad2,
                                  },
                                },
                                [t._v(" C??mo Comprar ")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  s("div", { staticClass: "col-lg-3 col-md-6 text-center" }, [
                    s("div", { staticClass: "mt-5" }, [
                      s(
                        "a",
                        {
                          staticClass: "portfolio-link",
                          attrs: {
                            "data-bs-toggle": "modal",
                            href: "#portfolioModal3",
                          },
                        },
                        [
                          t._m(2),
                          s(
                            "div",
                            {
                              staticClass:
                                "portfolio-caption-heading text-primary",
                            },
                            [
                              s("h3", { staticClass: "h4 mb-2" }, [
                                t._v(t._s(t.tituloNovedad3)),
                              ]),
                            ]
                          ),
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenNovedad3, alt: "..." },
                          }),
                        ]
                      ),
                      s("div", { staticClass: "portfolio-caption" }, [
                        s("strong", [t._v(t._s(t.nombreNovedad3))]),
                        s(
                          "div",
                          {
                            staticClass:
                              "portfolio-caption-subheading text-muted",
                          },
                          [
                            t._v(" " + t._s(t.descripcionNovedad3) + " "),
                            s("div", { staticClass: "mt-auto" }, [
                              s(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: {
                                    type: "button",
                                    onclick: t.linkNovedad3,
                                  },
                                },
                                [t._v(" Receta Completa ")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  s("div", { staticClass: "col-lg-3 col-md-6 text-center" }, [
                    s("div", { staticClass: "mt-5" }, [
                      s(
                        "a",
                        {
                          staticClass: "portfolio-link",
                          attrs: {
                            "data-bs-toggle": "modal",
                            href: "#portfolioModal4",
                          },
                        },
                        [
                          t._m(3),
                          s(
                            "div",
                            {
                              staticClass:
                                "portfolio-caption-heading text-primary",
                            },
                            [
                              s("h3", { staticClass: "h4 mb-2" }, [
                                t._v(t._s(t.tituloNovedad4)),
                              ]),
                            ]
                          ),
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenNovedad4, alt: "..." },
                          }),
                        ]
                      ),
                      s("div", { staticClass: "portfolio-caption" }, [
                        s("strong", [t._v(t._s(t.nombreNovedad4))]),
                        s(
                          "div",
                          {
                            staticClass:
                              "portfolio-caption-subheading text-muted",
                          },
                          [
                            t._v(" " + t._s(t.descripcionNovedad4) + " "),
                            s("div", { staticClass: "mt-auto" }, [
                              s(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: {
                                    type: "button",
                                    onclick: t.linkNovedad4,
                                  },
                                },
                                [t._v(" Agenda del Evento ")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
          s(
            "div",
            { staticClass: "container-fluid", attrs: { id: "containerBlog" } },
            [
              s("hr", { staticClass: "divider", attrs: { id: "blog" } }),
              s("h2", { staticClass: "text-center mt-0" }, [
                t._v(t._s(t.descripcionBlog)),
              ]),
              s("section", { staticClass: "page-section bg-dark text-white" }, [
                s(
                  "div",
                  { staticClass: "container px-4 px-lg-5 text-center" },
                  [
                    s("div", { staticClass: "container-fluid" }, [
                      s("div", { staticClass: "row" }, [
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog1, alt: "..." },
                          }),
                        ]),
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog2, alt: "..." },
                          }),
                        ]),
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog3, alt: "..." },
                          }),
                        ]),
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog4, alt: "..." },
                          }),
                        ]),
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog5, alt: "..." },
                          }),
                        ]),
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog6, alt: "..." },
                          }),
                        ]),
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog7, alt: "..." },
                          }),
                        ]),
                        s("div", { staticClass: "col" }, [
                          s("img", {
                            staticClass: "img-fluid",
                            attrs: { src: t.imagenBlog8, alt: "..." },
                          }),
                        ]),
                      ]),
                    ]),
                    s("div", { staticClass: "mt-auto" }, [
                      s("hr", { staticClass: "divider-light" }),
                      s(
                        "a",
                        {
                          staticClass: "btn btn-light btn-xl",
                          attrs: { href: t.linkBlog },
                        },
                        [t._v(" " + t._s(t.botonBlog) + " ")]
                      ),
                      s("hr", { staticClass: "divider-light" }),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
          s(
            "div",
            {
              staticClass: "portfolio-modal modal fade",
              attrs: {
                id: "portfolioModal1",
                tabindex: "-1",
                role: "dialog",
                "aria-hidden": "true",
              },
            },
            [
              s("div", { staticClass: "modal-dialog" }, [
                s("div", { staticClass: "modal-content" }, [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "row justify-content-center" }, [
                      s("div", { staticClass: "col-lg-8" }, [
                        s("div", { staticClass: "modal-body" }, [
                          s("h2", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.nombreModal1)),
                          ]),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.datosModal1)),
                          ]),
                          s("p", { staticClass: "item-intro text-muted" }, [
                            t._v(t._s(t.introModal1)),
                          ]),
                          s("img", {
                            staticClass: "img-fluid d-block mx-auto",
                            attrs: { src: t.imagenModal1, alt: "..." },
                          }),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.titulo1Modal1)),
                          ]),
                          s("p", [t._v(t._s(t.descripcion1Modal1))]),
                          s("ul", { staticClass: "list-inline" }, [
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo2Modal1))]),
                              t._v(t._s(t.descripcion2Modal1) + " "),
                            ]),
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo3Modal1))]),
                              t._v(t._s(t.descripcion3Modal1) + " "),
                            ]),
                          ]),
                          t._m(4),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
          s(
            "div",
            {
              staticClass: "portfolio-modal modal fade",
              attrs: {
                id: "portfolioModal2",
                tabindex: "-1",
                role: "dialog",
                "aria-hidden": "true",
              },
            },
            [
              s("div", { staticClass: "modal-dialog" }, [
                s("div", { staticClass: "modal-content" }, [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "row justify-content-center" }, [
                      s("div", { staticClass: "col-lg-8" }, [
                        s("div", { staticClass: "modal-body" }, [
                          s("h2", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.nombreModal2)),
                          ]),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.datosModal2)),
                          ]),
                          s("p", { staticClass: "item-intro text-muted" }, [
                            t._v(t._s(t.introModal2)),
                          ]),
                          s("img", {
                            staticClass: "img-fluid d-block mx-auto",
                            attrs: { src: t.imagenModal2, alt: "..." },
                          }),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.titulo1Modal2)),
                          ]),
                          s("p", [t._v(t._s(t.descripcion1Modal2))]),
                          s("ul", { staticClass: "list-inline" }, [
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo2Modal2))]),
                              t._v(t._s(t.descripcion2Modal2) + " "),
                            ]),
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo3Modal2))]),
                              t._v(t._s(t.descripcion3Modal2) + " "),
                            ]),
                          ]),
                          t._m(5),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
          s(
            "div",
            {
              staticClass: "portfolio-modal modal fade",
              attrs: {
                id: "portfolioModal3",
                tabindex: "-1",
                role: "dialog",
                "aria-hidden": "true",
              },
            },
            [
              s("div", { staticClass: "modal-dialog" }, [
                s("div", { staticClass: "modal-content" }, [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "row justify-content-center" }, [
                      s("div", { staticClass: "col-lg-8" }, [
                        s("div", { staticClass: "modal-body" }, [
                          s("h2", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.nombreModal3)),
                          ]),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.datosModal3)),
                          ]),
                          s("p", { staticClass: "item-intro text-muted" }, [
                            t._v(t._s(t.introModal3)),
                          ]),
                          s("img", {
                            staticClass: "img-fluid d-block mx-auto",
                            attrs: { src: t.imagenModal3, alt: "..." },
                          }),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.titulo1Modal3)),
                          ]),
                          s("p", [t._v(t._s(t.descripcion1Modal3))]),
                          s("ul", { staticClass: "list-inline" }, [
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo2Modal3))]),
                              t._v(t._s(t.descripcion2Modal3) + " "),
                            ]),
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo3Modal3))]),
                              t._v(t._s(t.descripcion3Modal3) + " "),
                            ]),
                          ]),
                          t._m(6),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
          s(
            "div",
            {
              staticClass: "portfolio-modal modal fade",
              attrs: {
                id: "portfolioModal4",
                tabindex: "-1",
                role: "dialog",
                "aria-hidden": "true",
              },
            },
            [
              s("div", { staticClass: "modal-dialog" }, [
                s("div", { staticClass: "modal-content" }, [
                  s("div", { staticClass: "container" }, [
                    s("div", { staticClass: "row justify-content-center" }, [
                      s("div", { staticClass: "col-lg-8" }, [
                        s("div", { staticClass: "modal-body" }, [
                          s("h2", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.nombreModal4)),
                          ]),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.datosModal4)),
                          ]),
                          s("p", { staticClass: "item-intro text-muted" }, [
                            t._v(t._s(t.introModal4)),
                          ]),
                          s("img", {
                            staticClass: "img-fluid d-block mx-auto",
                            attrs: { src: t.imagenModal4, alt: "..." },
                          }),
                          s("h3", { staticClass: "h4 mb-2" }, [
                            t._v(t._s(t.titulo1Modal4)),
                          ]),
                          s("p", [t._v(t._s(t.descripcion1Modal4))]),
                          s("ul", { staticClass: "list-inline" }, [
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo2Modal4))]),
                              t._v(t._s(t.descripcion2Modal4) + " "),
                            ]),
                            s("li", [
                              s("strong", [t._v(t._s(t.titulo3Modal4))]),
                              t._v(t._s(t.descripcion3Modal4) + " "),
                            ]),
                          ]),
                          t._m(7),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]);
      },
      A = [
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "portfolio-hover" }, [
            s("div", { staticClass: "portfolio-hover-content" }, [
              s("i", { staticClass: "fas fa-plus fa-3x" }),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "portfolio-hover" }, [
            s("div", { staticClass: "portfolio-hover-content" }, [
              s("i", { staticClass: "fas fa-plus fa-3x" }),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "portfolio-hover" }, [
            s("div", { staticClass: "portfolio-hover-content" }, [
              s("i", { staticClass: "fas fa-plus fa-3x" }),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "portfolio-hover" }, [
            s("div", { staticClass: "portfolio-hover-content" }, [
              s("i", { staticClass: "fas fa-plus fa-3x" }),
            ]),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticStyle: { "text-align": "center" } }, [
            s(
              "button",
              {
                staticClass: "btn btn-primary btn-xl text-uppercase",
                attrs: { "data-bs-dismiss": "modal", type: "button" },
              },
              [s("i", { staticClass: "fas fa-times me-1" }), t._v(" Cerrar ")]
            ),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticStyle: { "text-align": "center" } }, [
            s(
              "button",
              {
                staticClass: "btn btn-primary btn-xl text-uppercase",
                attrs: { "data-bs-dismiss": "modal", type: "button" },
              },
              [s("i", { staticClass: "fas fa-times me-1" }), t._v(" Cerrar ")]
            ),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticStyle: { "text-align": "center" } }, [
            s(
              "button",
              {
                staticClass: "btn btn-primary btn-xl text-uppercase",
                attrs: { "data-bs-dismiss": "modal", type: "button" },
              },
              [s("i", { staticClass: "fas fa-times me-1" }), t._v(" Cerrar ")]
            ),
          ]);
        },
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticStyle: { "text-align": "center" } }, [
            s(
              "button",
              {
                staticClass: "btn btn-primary btn-xl text-uppercase",
                attrs: { "data-bs-dismiss": "modal", type: "button" },
              },
              [s("i", { staticClass: "fas fa-times me-1" }), t._v(" Cerrar ")]
            ),
          ]);
        },
      ],
      D = {
        data: function () {
          return {
            tituloNovedad1: "Promoci??n del D??a",
            imagenNovedad1: s("52c8"),
            nombreNovedad1: "Lomo Fino de Res | 500 g | $ 26.500",
            descripcionNovedad1:
              "Lo mejor de nuestro stock de carnes al m??s bajo precio para tu negocio,             tu placer o tus celebraciones.",
            linkNovedad1: "location.href = '#contact2';",
            tituloNovedad2: "Novedad de la Semana",
            imagenNovedad2: s("c438"),
            nombreNovedad2: "Filetes de Salm??n | 4x6 oz | $ 139.500",
            descripcionNovedad2:
              "Las entradas m??s recientes a nuestro cat??logo de proveedores nacionales y             extranjeros certificados.",
            linkNovedad2: "location.href = '#contact2';",
            tituloNovedad3: "Receta del D??a",
            imagenNovedad3: s("9d13"),
            nombreNovedad3: "Brochetas de Cerdo Caramelizado",
            descripcionNovedad3:
              "Nuestros chefs y maestros parrilleros invitados sorprenden cada d??a con             ??tiles tips y exquisitas preparaciones.",
            linkNovedad3: "location.href = 'https://bit.ly/3mgtzxq';",
            tituloNovedad4: "Evento de la Semana",
            imagenNovedad4: s("6322"),
            nombreNovedad4: "Feria del At??n Rojo ??CartagenAsia??",
            descripcionNovedad4:
              "Chata's siempre presente en los peque??os y grandes acontecimientos del             mundo de la prote??na animal.",
            linkNovedad4:
              "location.href = 'https://cartagenasia.es/calendario/';",
            imagenBlog1: s("3b38"),
            imagenBlog2: s("14b9"),
            imagenBlog3: s("9dac"),
            imagenBlog4: s("9956"),
            imagenBlog5: s("647a"),
            imagenBlog6: s("c4fe"),
            imagenBlog7: s("c78a"),
            imagenBlog8: s("c54a"),
            descripcionBlog:
              "Disfruta las mejores preparaciones, recetas y recomendaciones gastron??micas             de nuestros maestros parrilleros,chefs, expertos y colaboradores.",
            linkBlog: "https://www.carnevillamaria.com/blog/",
            botonBlog: "Visita nuestro blog invitado",
            nombreModal1: "Lomo Fino de Res",
            datosModal1: "500 g | $26.500 COP",
            introModal1:
              "Corte madurado y empacado al vac??o. Entrega inmediata",
            imagenModal1: s("3ffb"),
            titulo1Modal1: "Informaci??n Nutricional",
            descripcion1Modal1:
              "Cada porci??n de 100 gramos de este producto proporciona aproximadammente             169 calorias, de las cuales el 51% son prote??na pura. No contiene carbohidratos.",
            titulo2Modal1: "Antes:",
            descripcion2Modal1: "$33.125 COP | -25%",
            titulo3Modal1: "V??lida hasta:",
            descripcion3Modal1: "24/9/2021 | 11:59 PM",
            nombreModal2: "Filetes de Salm??n de las Islas Feroe",
            datosModal2: "Paquete de 4 x 6 oz | $139.500 COP",
            introModal2:
              "Libre de transg??nicos y antibi??ticos. Disponibilidad limitada. Entrega inmediata.",
            imagenModal2: s("2f20"),
            titulo1Modal2: "Informaci??n Nutricional",
            descripcion1Modal2:
              "Cada porci??n de 100 gramos (3.2 oz) de este producto proporciona             aproximadamente 116 calorias, de las cuales el 72% son prote??na pura. No contiene carbohidratos.",
            titulo2Modal2: "Proveedor:",
            descripcion2Modal2: "Rastelli Foods DTC (USA)",
            titulo3Modal2: "Importado por:",
            descripcion3Modal2: "Chata's Distribuidores C??rnicos",
            nombreModal3: "Brochetas de cerdo caramelizado con pi??a",
            datosModal3: "Receta para 4 personas | Nivel de dificultad: F??cil",
            introModal3: "Tiempo de preparaci??n t??pico: 19 minutos",
            imagenModal3: s("490c"),
            titulo1Modal3: "Resumen",
            descripcion1Modal3:
              "??No os dej??is enga??ar por la pinta inocente de estas brochetas de carne             porque, s??, son caramelizadas, pero tienen un sabor potente y picante gracias a la salsa             Sriracha, un aderezo asi??tico a base de chile fermentado que no deja a nadie indiferente??. E. C.",
            titulo2Modal3: "Chef Invitada:",
            descripcion2Modal3: "Ester Clemente (Espa??a)",
            titulo3Modal3: "Fecha de Publicaci??n:",
            descripcion3Modal3: "23 de Julio de 2021",
            nombreModal4: "CartagenAsia 2021",
            datosModal4:
              "Chata's presente en la feria del at??n rojo de acuicultura m??s importante de Europa.",
            introModal4:
              " Estableciendo alianzas estrat??gicas en la UE para traer a Colombia uno de los             productos m??s valorados y vers??tiles del mar.",
            imagenModal4: s("2e8a"),
            titulo1Modal4: "Resumen",
            descripcion1Modal4:
              "Cartagena, en la regi??n de Murcia (Espa??a) es el principal productor de             at??n rojo de la Uni??n Europea por la exclusividad de las especies que se pueden encontrar en             sus aguas. CartagenAsia es, adem??s de un viaje gastron??mico, el hermanamiento entre Espa??a y             Jap??n, el pa??s invitado a esta importante feria y al cual se exporta el 70% del at??n rojo de             Cartagena. Y ahora, gracias a nuestra alianza estrategica con el Grupo Ricardo Fuente e Hijos,             los colombianos podremos tambi??n disfrutar el sabor y los beneficios de esta famosa prote??na             que ha conquistado los paladares m??s exigentes del mundo por su calidad y sabor.",
            titulo2Modal4: "Lugar y Fechas del Evento:",
            descripcion2Modal4:
              " Batel de Cartagena (Murcia, Espa??a), junto al Museo Nacional de             Arqueolog??a Subacu??tica. | 16, 17, 18 y 19 de septiembre de 2021",
            titulo3Modal4: "Organiza:",
            descripcion3Modal4:
              "Apromar, la Asociaci??n empresarial de Acuicultura de Espa??a.",
          };
        },
      },
      O = D,
      B = Object(r["a"])(O, P, A, !1, null, null, null),
      R = B.exports,
      I = function () {
        var t = this,
          a = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      F = [
        function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", [
            s("section", { staticClass: "page-section" }, [
              s("hr", { staticClass: "divider", attrs: { id: "contact2" } }),
              s("h2", { staticClass: "text-center mt-0" }, [
                t._v("Cont??ctanos"),
              ]),
              s("hr", { staticClass: "divider" }),
              s("div", { staticClass: "container px-4 px-lg-5" }, [
                s(
                  "div",
                  { staticClass: "row gx-4 gx-lg-5 justify-content-center" },
                  [
                    s("div", { staticClass: "col-lg-8 col-xl-6 text-center" }, [
                      s("p", { staticClass: "text-muted mb-5" }, [
                        t._v(
                          " ??Tienes alguna inquietud o sugerencia? ??Necesitas m??s informaci??n acerca de nuestros productos y/o procesos? Env??anos un mensaje y nos pondremos en contacto contigo lo antes posible. "
                        ),
                      ]),
                    ]),
                  ]
                ),
                s(
                  "div",
                  {
                    staticClass: "row gx-4 gx-lg-5 justify-content-center mb-5",
                  },
                  [
                    s("div", { staticClass: "col-lg-6" }, [
                      s(
                        "form",
                        {
                          attrs: {
                            id: "contactForm",
                            "data-sb-form-api-token": "API_TOKEN",
                          },
                        },
                        [
                          s("div", { staticClass: "form-floating mb-3" }, [
                            s("input", {
                              staticClass: "form-control",
                              attrs: {
                                id: "name",
                                type: "text",
                                placeholder: "Enter your name...",
                                "data-sb-validations": "required",
                              },
                            }),
                            s("label", { attrs: { for: "name" } }, [
                              t._v("Nombre completo"),
                            ]),
                            s(
                              "div",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { "data-sb-feedback": "name:required" },
                              },
                              [t._v(" Se requiere un nombre. ")]
                            ),
                          ]),
                          s("div", { staticClass: "form-floating mb-3" }, [
                            s("input", {
                              staticClass: "form-control",
                              attrs: {
                                id: "email",
                                type: "email",
                                placeholder: "name@example.com",
                                "data-sb-validations": "required,email",
                              },
                            }),
                            s("label", { attrs: { for: "email" } }, [
                              t._v("Direcci??n de e-mail"),
                            ]),
                            s(
                              "div",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { "data-sb-feedback": "email:required" },
                              },
                              [t._v(" Se requiere una direcci??n de e-mail. ")]
                            ),
                            s(
                              "div",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { "data-sb-feedback": "email:email" },
                              },
                              [t._v(" E-mail inv??lido. ")]
                            ),
                          ]),
                          s("div", { staticClass: "form-floating mb-3" }, [
                            s("input", {
                              staticClass: "form-control",
                              attrs: {
                                id: "phone",
                                type: "tel",
                                placeholder: "(123) 456-7890",
                                "data-sb-validations": "required",
                              },
                            }),
                            s("label", { attrs: { for: "phone" } }, [
                              t._v("Tel??fono de contacto"),
                            ]),
                            s(
                              "div",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { "data-sb-feedback": "phone:required" },
                              },
                              [
                                t._v(
                                  " Se requiere un n??mero de tel??fono m??vil o fijo en Colombia. "
                                ),
                              ]
                            ),
                          ]),
                          s("div", { staticClass: "form-floating mb-3" }, [
                            s("textarea", {
                              staticClass: "form-control",
                              staticStyle: { height: "10rem" },
                              attrs: {
                                id: "message",
                                type: "text",
                                placeholder: "Enter your message here...",
                                "data-sb-validations": "required",
                              },
                            }),
                            s("label", { attrs: { for: "message" } }, [
                              t._v("Mensaje"),
                            ]),
                            s(
                              "div",
                              {
                                staticClass: "invalid-feedback",
                                attrs: {
                                  "data-sb-feedback": "message:required",
                                },
                              },
                              [t._v(" Se requiere un mensaje. ")]
                            ),
                          ]),
                          s(
                            "div",
                            {
                              staticClass: "d-none",
                              attrs: { id: "submitSuccessMessage" },
                            },
                            [
                              s("div", { staticClass: "text-center mb-3" }, [
                                s("div", { staticClass: "fw-bolder" }, [
                                  t._v(
                                    " Env??o de formulario exitoso. Una confirmaci??n ha sido enviada al correo registrado. Muy pronto le contestaremos. "
                                  ),
                                ]),
                                t._v(" To activate this form, sign up at "),
                                s("br"),
                                s(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://startbootstrap.com/solution/contact-forms",
                                    },
                                  },
                                  [
                                    t._v(
                                      "https://startbootstrap.com/solution/contact-forms"
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          s(
                            "div",
                            {
                              staticClass: "d-none",
                              attrs: { id: "submitErrorMessage" },
                            },
                            [
                              s(
                                "div",
                                { staticClass: "text-center text-danger mb-3" },
                                [
                                  t._v(
                                    " Error al enviar el mensaje! Intente de nuevo. "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          s("div", { staticClass: "d-grid" }, [
                            s(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-xl disabled",
                                attrs: { id: "submitButton", type: "submit" },
                              },
                              [t._v(" Enviar ")]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]
                ),
                s(
                  "div",
                  { staticClass: "row gx-4 gx-lg-5 justify-content-center" },
                  [
                    s(
                      "div",
                      { staticClass: "col-lg-4 text-center mb-5 mb-lg-0" },
                      [
                        s("i", {
                          staticClass: "bi-phone fs-2 mb-3 text-muted",
                        }),
                        s("div", [t._v("+57 (315) 546-0477")]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ]);
        },
      ],
      z = {
        data: function () {
          return {
            tituloContacto: "Cont??ctanos",
            descripcionContacto:
              "??Tienes alguna inquietud o sugerencia? ??Necesitas m??s informaci??n acerca             de nuestros productos y/o procesos? Env??anos un mensaje y nos pondremos en contacto contigo.",
            nombreContactoReq: "Nombre Completo",
            nombreContactoInv: "Se requiere ingresar un nombre.",
            emailContactoReq: "E-mail",
            emailContactoInv1: "Se requiere una direcci??n de e-mail.",
            emailContactoInv2: "Direcci??n de e-mail inv??lida.",
            telefonoContactoReq: "Tel??fono",
            telefonoContactoInv:
              "Se requiere ingresar un n??mero de tel??fono m??vil o fijo en Colombia.",
            mensajeContactoReq: "Mensaje",
            mensajeContactoInv: "Se requiere ingresar un mensaje",
            formContactoSucess:
              "Env??o de formulario exitoso. Una confirmaci??n ha sido enviada al correo             registrado. Muy pronto le contestaremos.",
            formContactoError:
              "!Error al enviar el formulario! Por favor, intente de nuevo.",
            botonContactoEnv: "Enviar",
            phoneContactoInfo: "Haz tus pedidos: +57 (315) 546-0477",
          };
        },
      },
      T = z,
      L = Object(r["a"])(T, I, F, !1, null, null, null),
      U = L.exports,
      H = s("fd2d"),
      J = {
        name: "Home",
        components: {
          Cabecera: _,
          About: k,
          Producto: q,
          Noticias: R,
          Contact: U,
          Footer: H["a"],
        },
      },
      Y = J,
      V = Object(r["a"])(Y, u, m, !1, null, null, null),
      G = V.exports,
      K = s("1232");
    e["default"].use(g["a"]);
    var Q = new g["a"].Store({
      state: { token: "", usuarioDB: "" },
      mutations: {
        obtenerUsuario: function (t, a) {
          (t.token = a),
            "" === a
              ? (t.usuarioDB = "")
              : ((t.usuarioDB = Object(K["a"])(a)),
                console.log(t.usuarioDB.data),
                "ADMIN" == t.usuarioDB.data.role && Z.push({ name: "Admin" }));
        },
      },
      actions: {
        guardarUsuario: function (t, a) {
          var s = t.commit;
          localStorage.setItem("token", a), s("obtenerUsuario", a);
        },
        cerrarSesion: function (t, a) {
          var s = t.commit;
          s("obtenerUsuario", ""),
            localStorage.removeItem("token"),
            Z.push({ name: "Home" });
        },
        leerToken: function (t) {
          var a = t.commit,
            s = localStorage.getItem("token");
          a("obtenerUsuario", s || "");
        },
      },
      getters: {
        estaActivo: function (t) {
          return !!t.token;
        },
      },
      modules: {},
    });
    e["default"].use(d["a"]);
    var W = [
        { path: "/", name: "Home", component: G },
        {
          path: "/admin",
          name: "Admin",
          component: function () {
            return s.e("chunk-b73ddafa").then(s.bind(null, "3530"));
          },
          meta: { requireAuth: !0 },
        },
      ],
      X = new d["a"]({ mode: "history", base: "/", routes: W });
    X.beforeEach(function (t, a, s) {
      var e = t.matched.some(function (t) {
        return t.meta.requireAuth;
      });
      e && "" == Q.state.token ? s({ name: "Admin" }) : s();
    });
    var Z = X,
      tt = s("5f5b"),
      at = (s("f9e3"), s("2dd8"), s("bc3a")),
      st = s.n(at),
      et = s("130e");
    (e["default"].config.productionTip = !1),
      e["default"].use(et["a"], st.a),
      e["default"].use(tt["a"]),
      (st.a.defaults.baseURL = "https://distribucion-carnicos.herokuapp.com/"),
      new e["default"]({
        router: Z,
        store: Q,
        render: function (t) {
          return t(c);
        },
      }).$mount("#app");
  },
  "5c0b": function (t, a, s) {
    "use strict";
    s("9c0c");
  },
  6322: function (t, a, s) {
    t.exports = s.p + "img/34.2a7f342f.jpg";
  },
  "647a": function (t, a, s) {
    t.exports = s.p + "img/65.fa65fac4.jpg";
  },
  "6f42": function (t, a, s) {
    t.exports = s.p + "img/chatas2.92816c2f.jpeg";
  },
  8672: function (t, a, s) {
    t.exports = s.p + "img/cerdo.f20a8127.jpg";
  },
  9324: function (t, a, s) {
    t.exports = s.p + "img/pollo.8f497e7b.jpeg";
  },
  9956: function (t, a, s) {
    t.exports = s.p + "img/64.f3f0e21e.jpg";
  },
  "9c0c": function (t, a, s) {},
  "9c96": function (t, a, s) {
    t.exports = s.p + "img/FotoJorgeEquipo.5e6165fa.jpg";
  },
  "9d13": function (t, a, s) {
    t.exports = s.p + "img/33.09769e0e.jpg";
  },
  "9dac": function (t, a, s) {
    t.exports = s.p + "img/63.0c5f938a.jpg";
  },
  ad06: function (t, a, s) {
    t.exports = s.p + "img/res2.ae62ec1a.jpg";
  },
  ad85: function (t, a, s) {
    t.exports = s.p + "img/iconctec.fef69bad.png";
  },
  b9ed: function (t, a, s) {
    t.exports = s.p + "img/foto_Juan.d57a6a35.jpeg";
  },
  c28d: function (t, a, s) {
    t.exports = s.p + "img/Foto_Julio.d48e6cb9.jpeg";
  },
  c438: function (t, a, s) {
    t.exports = s.p + "img/32.30f30cd7.jpg";
  },
  c4fe: function (t, a, s) {
    t.exports = s.p + "img/66.c5aa51f9.jpg";
  },
  c54a: function (t, a, s) {
    t.exports = s.p + "img/68.222c5586.jpg";
  },
  c78a: function (t, a, s) {
    t.exports = s.p + "img/67.e6f8152d.jpg";
  },
  d42f: function (t, a, s) {
    t.exports = s.p + "img/fraseHeader.e5c8cba2.png";
  },
  efe6: function (t, a, s) {
    t.exports = s.p + "img/vaca2.08edad85.png";
  },
  f357: function (t, a, s) {
    t.exports = s.p + "img/pollo.0db4188d.jpg";
  },
  fd2d: function (t, a, s) {
    "use strict";
    var e = function () {
        var t = this,
          a = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      i = [
        function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "container-fluid" }, [
            e("footer", { staticClass: "bg-light" }, [
              e("div", { staticClass: "row" }, [
                e("div", { staticClass: "col-sm-3" }, [
                  e("div", { staticClass: "row" }, [
                    e("span", { staticClass: "text-center py-2" }, [
                      e("strong", [t._v("Afiliado a:")]),
                    ]),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e("img", {
                      attrs: { src: s("4d54"), alt: "Circulo De Sabores" },
                    }),
                  ]),
                ]),
                e("div", { staticClass: "col-sm-1" }, [
                  e("img", {
                    staticClass: "py-2",
                    attrs: { src: s("ad85"), alt: "icontec" },
                  }),
                ]),
                e("div", { staticClass: "col-sm-4" }, [
                  e("div", { staticClass: "row" }, [
                    e("img", {
                      staticClass: "img-fluid rounded logo-footer",
                      attrs: { src: s("6f42"), alt: "chatas" },
                    }),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e("span", { staticClass: "small text-center text-muted" }, [
                      t._v(
                        " Copyright ?? 2021 - Chata??s Distribuidores C??rnicos. Todos los derechos reservados. "
                      ),
                    ]),
                  ]),
                ]),
                e("div", { staticClass: "col-sm-1" }, [
                  e("div", { staticClass: "row" }, [
                    e("span", { staticClass: "text-galardon" }, [
                      e("strong", [
                        t._v("Galardonado PREMIUM 2021 por ASOCARNES"),
                      ]),
                    ]),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e("img", {
                      staticClass: "img-fluid rounded galardon-footer",
                      attrs: { src: s("4ad7"), alt: "galardon" },
                    }),
                  ]),
                ]),
                e("div", { staticClass: "col-sm-3" }, [
                  e("div", { staticClass: "row" }, [
                    e("div", { staticClass: "text-center" }, [
                      e(
                        "a",
                        { staticClass: "col-sm-1 m-1", attrs: { href: "/" } },
                        [
                          e("span", { staticClass: "text-primary" }, [
                            e("i", { staticClass: "bi bi-facebook fs-2" }),
                          ]),
                        ]
                      ),
                      e(
                        "a",
                        { staticClass: "col-sm-1 m-1", attrs: { href: "/" } },
                        [
                          e("span", { staticClass: "text-danger" }, [
                            e("i", { staticClass: "bi bi-youtube fs-2" }),
                          ]),
                        ]
                      ),
                      e(
                        "a",
                        { staticClass: "col-sm-1 m-1", attrs: { href: "/" } },
                        [
                          e("span", { staticClass: "text-warning" }, [
                            e("i", { staticClass: "bi bi-instagram fs-2" }),
                          ]),
                        ]
                      ),
                      e(
                        "a",
                        { staticClass: "col-sm-1 m-1", attrs: { href: "/" } },
                        [
                          e("span", { staticClass: "text-info" }, [
                            e("i", { staticClass: "bi bi-twitter fs-2" }),
                          ]),
                        ]
                      ),
                      e(
                        "a",
                        { staticClass: "col-sm-1 m-1", attrs: { href: "/" } },
                        [
                          e("span", { staticClass: "text-primary" }, [
                            e("i", { staticClass: "bi bi-linkedin fs-2" }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e("div", { staticClass: "col" }, [
                      e("p", { staticClass: "text-center" }, [
                        e("strong", [t._v("Cont??ctanos:")]),
                      ]),
                      e("p", { staticClass: "text-center" }, [
                        t._v("info@chatas.com"),
                      ]),
                      e("p", { staticClass: "text-center" }, [
                        e("span", { staticClass: "text-success" }, [
                          e("i", { staticClass: "bi bi-whatsapp" }),
                        ]),
                        t._v("+57 31198765438"),
                      ]),
                    ]),
                    e("div", { staticClass: "col" }, [
                      e("img", { attrs: { src: s("efe6"), alt: "" } }),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      o = s("2877"),
      r = {},
      n = Object(o["a"])(r, e, i, !1, null, null, null);
    a["a"] = n.exports;
  },
});
//# sourceMappingURL=app.6e710852.js.map
