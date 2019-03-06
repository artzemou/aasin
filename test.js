module.exports = function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  return n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(r, o, function(t) {
        return e[t]
      }.bind(null, o));
    return r
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 35)
}([function(e, t) {
  e.exports = require("react")
}, function(e, t) {
  e.exports = require("styled-jsx/style")
}, function(e, t) {
  e.exports = require("react-redux")
}, function(e, t) {
  e.exports = require("redux")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = {
    primaryColor: "rgba(238, 238, 238, .5)",
    mceBackground: "buttonface",
    ripplesColor: "rgba(0, 0, 0, .1)",
    iconsColor: "#444444"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.host = t.port = void 0;
  var r, o = n(42),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  var i = t.port = Object({
      NODE_ENV: "production"
    }).PORT || 8080,
    l = (t.host = "localhost", "http://localhost:" + i + "/");
  l = "http://192.168.1.15:" + i + "/", console.log(l, "production"), t.default = a.default.create({
    baseURL: l,
    timeout: 0
  })
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.setIsLoading = function(e) {
    return {
      type: "SET_IS_LOADING",
      isLoading: e
    }
  }
}, function(e, t) {
  e.exports = require("react-router-dom")
}, function(e, t) {
  e.exports = require("react-redux-i18n")
}, function(e, t) {
  e.exports = require("@material-ui/icons")
}, function(e, t) {
  e.exports = require("react-dom")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  n(50);
  var r = void 0;
  "undefined" != typeof document && (r = (0, n(51).default)());
  t.default = r
}, function(e, t) {
  e.exports = require("react-ripples")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getLeaves = t.setLeaves = void 0;
  var r = n(77),
    o = n(6),
    a = t.setLeaves = function(e) {
      return {
        type: "SET_LEAVES",
        results: e
      }
    };
  t.getLeaves = function() {
    return function(e) {
      return (0, r.fetchLeaves)().catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(t) {
        e(a(t)), setTimeout(function() {
          e((0, o.setIsLoading)(!1))
        }, 1e3)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getLeaf = t.setLeaf = void 0;
  var r = n(43),
    o = t.setLeaf = function(e) {
      return {
        type: "SET_LEAF",
        result: e
      }
    };
  t.getLeaf = function(e) {
    return function(t) {
      return (0, r.fetchLeaf)(e).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {
          t(o(e))
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.signIn = t.setErrors = t.setAuth = void 0;
  var r = n(52),
    o = (a(n(0)), a(n(10)), n(7), a(n(11)));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var i = t.setAuth = function(e) {
      return {
        type: "SET_AUTH",
        auth: e
      }
    },
    l = t.setErrors = function(e) {
      return {
        type: "SET_ERRORS",
        error: e
      }
    };
  t.signIn = function(e, t) {
    return function(n) {
      return (0, r.fetchSignIn)(e, t).catch(function(e) {
        console.error("erreur server: ", e)
      }).then(function(e) {
        return setTimeout(function() {
          e.errors.length > 0 ? n(l(e.errors)) : e.isSignedIn && (n(i(e)), e.isAdmin ? o.default.push("/dashboard") : o.default.push("/"))
        }, 0)
      })
    }
  }
}, function(e, t) {
  e.exports = require("react-resize-detector")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = n(0),
    a = c(o),
    i = c(n(54)),
    l = n(55),
    s = (c(n(56)), c(n(57)));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        arrowRef: null
      }, n.handleArrowRef = n.handleArrowRef.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, o.Component), r(t, [{
      key: "handleArrowRef",
      value: function(e) {
        this.setState({
          arrowRef: e
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this.props.classes;
        return a.default.createElement(s.default, {
          title: a.default.createElement(o.Fragment, null, this.props.label, a.default.createElement("span", {
            className: e.arrow,
            ref: this.handleArrowRef
          })),
          classes: {
            popper: e.arrowPopper,
            tooltip: e.tooltip
          },
          PopperProps: {
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(this.state.arrowRef),
                  element: this.state.arrowRef
                }
              }
            }
          }
        }, a.default.createElement("div", {
          className: this.props.className,
          onClick: this.props.syntheticEvent
        }, this.props.icon))
      }
    }]), t
  }();
  u.propTypes = {
    classes: i.default.object.isRequired
  }, t.default = (0, l.withStyles)(function(e) {
    return {
      tooltip: {
        backgroundColor: e.palette.common.black
      },
      arrowPopper: (t = e.palette.common.black, {
        '&[x-placement*="bottom"] $arrow': {
          top: 0,
          left: 0,
          marginTop: "-0.9em",
          width: "3em",
          height: "1em",
          "&::before": {
            borderWidth: "0 1em 1em 1em",
            borderColor: "transparent transparent " + t + " transparent"
          }
        },
        '&[x-placement*="top"] $arrow': {
          bottom: 0,
          left: 0,
          marginBottom: "-0.9em",
          width: "3em",
          height: "1em",
          "&::before": {
            borderWidth: "1em 1em 0 1em",
            borderColor: t + " transparent transparent transparent"
          }
        },
        '&[x-placement*="right"] $arrow': {
          left: 0,
          marginLeft: "-0.9em",
          height: "3em",
          width: "1em",
          "&::before": {
            borderWidth: "1em 1em 1em 0",
            borderColor: "transparent " + t + " transparent transparent"
          }
        },
        '&[x-placement*="left"] $arrow': {
          right: 0,
          marginRight: "-0.9em",
          height: "3em",
          width: "1em",
          "&::before": {
            borderWidth: "1em 0 1em 1em",
            borderColor: "transparent transparent transparent " + t
          }
        }
      }),
      arrow: {
        position: "absolute",
        fontSize: 7,
        width: "3em",
        height: "3em",
        "&::before": {
          content: '""',
          margin: "auto",
          display: "block",
          width: 0,
          height: 0,
          borderStyle: "solid"
        }
      }
    };
    var t
  })(u)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.loadResults = t.update = t.setResults = void 0;
  var r = n(68),
    o = n(6),
    a = t.setResults = function(e) {
      return {
        type: "SET_RESULTS",
        results: e
      }
    };
  t.update = function(e) {
    return function(t) {
      return (0, r.fetchUpDate)(e).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {
          t((0, o.setIsLoading)(!1))
        }, 1e3)
      })
    }
  }, t.loadResults = function() {
    return function(e) {
      return (0, r.fetchResults)().catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(t) {
        return setTimeout(function() {
          e(a(t))
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setLeaf = void 0;
  var r, o = n(78),
    a = n(6),
    i = (n(14), n(13)),
    l = n(11);
  (r = l) && r.__esModule;
  t.setLeaf = function(e, t, n, r, l, s, c) {
    return function(u) {
      return (0, o.fetchSetLeaf)(e, t, n, r, l, s, c).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {
          e && (u((0, i.getLeaves)()), setTimeout(function() {
            u((0, a.setIsLoading)(!1))
          }, 750))
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    var t = new RegExp("<.[^<>]*>", "gi");
    return e = e.replace(t, "")
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = p(n(1)),
    i = n(0),
    l = p(i),
    s = n(79),
    c = n(2),
    u = n(3),
    d = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(6)),
    f = p(n(4));

  function p(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var m = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        x: 0,
        y: 0,
        arrowPos: null,
        memuPanelTopPosition: null,
        memuPanelLeftPosition: null,
        mcePanelId: null,
        mcePanelEmement: null,
        mceArrowDown: !1
      }, n.handleEditorChange = n.handleEditorChange.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "handleOnBlur",
      value: function() {
        this.props.gridItemFocus(null), document.querySelector(".mce-panel") && document.querySelector(".mce-tinymce-inline") && (document.querySelector(".mce-tinymce-inline").classList.remove("visible"), document.querySelector(".mce-tinymce-inline").parentNode.removeChild(document.querySelector(".mce-panel")))
      }
    }, {
      key: "handleOnClick",
      value: function(e) {
        this.props.gridItemFocus && this.props.gridItemFocus(e), document.querySelector(".mce-panel") && document.querySelector(".mce-tinymce-inline") && (document.querySelector(".mce-tinymce-inline").classList.remove("visible"), document.querySelector(".mce-tinymce-inline").parentNode.removeChild(document.querySelector(".mce-panel")))
      }
    }, {
      key: "handleOnDblclick",
      value: function(e) {
        var t = this;
        document.querySelector(".mce-panel") && (this.setState({
          memuPanelLeftPosition: null
        }), document.querySelector(".mce-tinymce-inline") && (document.querySelector(".mce-tinymce-inline").classList.remove("visible"), document.querySelector(".mce-tinymce-inline").parentNode.removeChild(document.querySelector(".mce-panel"))));
        var n = this.state,
          r = n.mcePanelEmement;
        n.mcePanelId, n.x, n.y, n.mceArrowDown;
        setTimeout(function() {
          if (document.querySelector(".mce-tinymce-inline")) {
            var n, o = document.querySelector(".mce-tinymce-inline"),
              a = document.querySelector("main"),
              i = document.querySelector("#side-bar"),
              l = (document.querySelector(".header-grid-layout-container").getBoundingClientRect().height, document.querySelector(".header-viewer").getBoundingClientRect().height, a.clientWidth),
              s = i.offsetLeft + i.clientWidth,
              c = parseFloat(o.style.top) + a.scrollTop,
              u = o.offsetLeft - s - parseFloat(window.getComputedStyle(a).marginLeft);
            u + o.getBoundingClientRect().width > l && (u -= u + o.getBoundingClientRect().width - l), n = e.screenX - u - s - 80, o.classList.contains("mce-arrow-right") && o.classList.remove("mce-arrow-right"), o.classList.contains("mce-arrow-left") && o.classList.remove("mce-arrow-left"), o.classList.contains("mce-arrow-down") ? c += 80 : o.classList.contains("mce-arrow-up") || (c += 30), t.setState({
              mcePanelId: o.getAttribute("id"),
              memuPanelLeftPosition: u,
              memuPanelTopPosition: c,
              arrowPos: n,
              mcePanelEmement: o
            }), document.querySelector(".mce-tinymce-inline").parentNode.removeChild(document.querySelector(".mce-panel")), document.querySelector("main").appendChild(o), o.classList.add("visible")
          } else if (r) {
            document.querySelector("main").appendChild(r);
            var d, f = document.querySelector(".mce-tinymce-inline"),
              p = document.querySelector("main"),
              m = document.querySelector("#side-bar"),
              y = (document.querySelector(".header-grid-layout-container").getBoundingClientRect().height, document.querySelector(".header-viewer").getBoundingClientRect().height, p.clientWidth),
              h = m.offsetLeft + m.clientWidth,
              b = parseFloat(f.style.top) + p.scrollTop,
              g = f.offsetLeft - h - parseFloat(window.getComputedStyle(p).marginLeft);
            g + f.getBoundingClientRect().width > y && (g -= g + f.getBoundingClientRect().width - y), d = e.screenX - g - h - 80, f.classList.contains("mce-arrow-right") && f.classList.remove("mce-arrow-right"), f.classList.contains("mce-arrow-left") && f.classList.remove("mce-arrow-left"), f.classList.contains("mce-arrow-down") ? b += 80 : f.classList.contains("mce-arrow-up") || (b += 30), t.setState({
              mcePanelId: f.getAttribute("id"),
              mcePanelEmement: f,
              memuPanelLeftPosition: g,
              memuPanelTopPosition: b,
              arrowPos: d
            }), document.querySelector(".mce-tinymce-inline").parentNode.removeChild(document.querySelector(".mce-panel")), document.querySelector("main").appendChild(f), f.classList.add("visible")
          }
        }, 250)
      }
    }, {
      key: "handleEditorChange",
      value: function(e) {
        console.log("editor changed");
        var t = this.props,
          n = t.index,
          r = t.name;
        (0, t.updateInput)(n, r, e)
      }
    }, {
      key: "handleonMouseMove",
      value: function(e) {
        this.setState({
          x: e.screenX,
          y: e.screenY
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.props,
          n = t.content,
          r = t.index,
          o = t.i18n,
          c = this.state;
        c.x, c.y, o.locale;
        return l.default.createElement(i.Fragment, null, l.default.createElement(s.Editor, {
          id: r.toString(),
          apiKey: "p5t98x5vqdbfs0hiit7iwz9u29u82f2oj8gfv5b7bm650kdl",
          value: n,
          initialValue: this.props.initialValue || null,
          init: {
            theme: "inlite",
            language_url: "/public/langs/" + o.locale + ".js",
            plugins: ["image table link paste textpattern autolink", "code", "textcolor"],
            image_caption: !0,
            object_resizing: !1,
            selection_toolbar: "quickimage | link | bold italic | alignleft aligncenter alignright alignjustify | fontsizeselect fontselect",
            inline: !0,
            paste_data_images: !0,
            browser_spellcheck: !1,
            force_br_newlines: !1,
            force_p_newlines: !0,
            forced_root_block: "p",
            font_formats: "Muli=Muli, sans-serif;Comic Sans MS=comic sans ms,sans-serif;Tahoma=tahoma,arial,helvetica,sans-serif;Symbol=symbol;Andale Mono=andale mono,times;Helvetica=helvetica;"
          },
          onEditorChange: this.handleEditorChange,
          onClick: function() {
            return e.handleOnClick(r)
          },
          onMouseDown: function() {
            return e.handleOnClick(r)
          },
          onDblclick: function(t) {
            return e.handleOnDblclick(t)
          },
          onMouseMove: function(t) {
            return e.handleonMouseMove(t)
          },
          onBlur: function() {
            return e.handleOnBlur()
          },
          onPaste: function() {
            return e.props.setItemHeigth()
          }
        }), l.default.createElement(a.default, {
          id: "2205545189",
          dynamic: [f.default.mceBackground, f.default.primaryColor]
        }, ["html .mce-panel,body .mce-panel{background:" + f.default.mceBackground + ";opacity:0;-webkit-transition:opacity 0 linear 500ms;-webkit-transition:opacity 0 linear 500ms;transition:opacity 0 linear 500ms;}", "html .mce-panel .mce-btn,body .mce-panel .mce-btn{background:" + f.default.primaryColor + ";}", "html .mce-panel.mce-foot,body .mce-panel.mce-foot{opacity:1;}", "html .mce-panel.mce-foot .mce-btn,body .mce-panel.mce-foot .mce-btn{color:#595959;background:transparent;border-color:#c5c5c5;}", "html .mce-arrow:after,body .mce-arrow:after{opacity:0;}", "html .mce-arrow:before,body .mce-arrow:before{opacity:0;}", "html .mce-btn.mce-active,body .mce-btn.mce-active{-webkit-box-shadow:none;box-shadow:none;background:rgba(0,0,0,0.1);color:#595959;border-color:transparent;}", "html .mce-btn.mce-active.mce-active button,html .mce-btn.mce-active.mce-active i,body .mce-btn.mce-active.mce-active button,body .mce-btn.mce-active.mce-active i{color:#595959;}", "html .mce-btn.mce-active.mce-active:hover,html .mce-btn.mce-active.mce-active:focus,html .mce-btn.mce-active.mce-active:active,body .mce-btn.mce-active.mce-active:hover,body .mce-btn.mce-active.mce-active:focus,body .mce-btn.mce-active.mce-active:active{-webkit-box-shadow:none;box-shadow:none;background:rgba(0,0,0,0.1);color:#595959;border-color:transparent;}", "html .mce-btn.mce-active.mce-active:hover i,html .mce-btn.mce-active.mce-active:focus i,html .mce-btn.mce-active.mce-active:active i,body .mce-btn.mce-active.mce-active:hover i,body .mce-btn.mce-active.mce-active:focus i,body .mce-btn.mce-active.mce-active:active i{border-top-color:#b5bcc2;}", "html .mce-menu-item.mce-active.mce-menu-item-normal,body .mce-menu-item.mce-active.mce-menu-item-normal{background:rgba(0,0,0,0.1);}", "html .mce-menu-item.mce-active.mce-menu-item-normal .mce-text,html .mce-menu-item.mce-active.mce-menu-item-normal .mce-ico,body .mce-menu-item.mce-active.mce-menu-item-normal .mce-text,body .mce-menu-item.mce-active.mce-menu-item-normal .mce-ico{color:#595959;}"]), l.default.createElement(a.default, {
          id: "2987272026",
          dynamic: [this.state.memuPanelTopPosition, this.state.memuPanelLeftPosition, this.state.arrowPos > 20 ? this.state.arrowPos > 534 ? 534 : this.state.arrowPos : 20, f.default.mceBackground, this.state.arrowPos > 20 ? this.state.arrowPos > 534 ? 534 : this.state.arrowPos : 20]
        }, ["html .mce-tinymce-inline.visible,body .mce-tinymce-inline.visible{top:" + this.state.memuPanelTopPosition + "px !important;left:" + this.state.memuPanelLeftPosition + "px !important;display:block !important;opacity:1;}", "html .mce-arrow.visible:after,body .mce-arrow.visible:after{opacity:1;left:" + (this.state.arrowPos > 20 ? this.state.arrowPos > 534 ? 534 : this.state.arrowPos : 20) + "px;top:-8px;border-bottom-color:#eeeeee;border-bottom-color:" + f.default.mceBackground + ";border-width:0 8px 8px;margin-left:-8px;}", "html .mce-arrow.visible:before,body .mce-arrow.visible:before{opacity:1;left:" + (this.state.arrowPos > 20 ? this.state.arrowPos > 534 ? 534 : this.state.arrowPos : 20) + "px;top:-9px;border-top-color:#eeeeee;border-bottom-color:#c5c5c5;border-width:0 9px 9px;margin-left:-9px;}"]))
      }
    }]), t
  }();
  t.default = (0, c.connect)(function(e) {
    return r({}, e)
  }, function(e) {
    return (0, u.bindActionCreators)(r({}, d), e)
  })(m)
}, function(e, t) {
  e.exports = require("react-grid-layout")
}, function(e, t) {
  e.exports = require("react-waypoint")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = s(n(1)),
    a = n(0),
    i = s(a),
    l = n(9);
  s(n(4));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var c = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.scrollTo = n.scrollTo.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, a.Component), r(t, [{
      key: "scrollTo",
      value: function(e) {
        function t(t, n, r) {
          return e.apply(this, arguments)
        }
        return t.toString = function() {
          return e.toString()
        }, t
      }(function(e, t, n) {
        if (!(n <= 0)) var r = (t - e.scrollTop) / n * 10,
          o = setInterval(function() {
            e.scrollTop = e.scrollTop + r, e.scrollTop !== t ? scrollTo(e, t, n - 10) : clearInterval(o)
          }, 2)
      })
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.props.visible;
        return i.default.createElement(a.Fragment, null, i.default.createElement("div", {
          onClick: function() {
            return e.scrollTo(document.querySelector("#view-container"), 0, 500)
          },
          className: "jsx-2366773254 " + ((t ? "scroll-top-btn visible" : "scroll-top-btn") || "")
        }, i.default.createElement(l.KeyboardArrowUp, null)), i.default.createElement(o.default, {
          id: "2366773254"
        }, [".scroll-top-btn.jsx-2366773254{opacity:0;position:fixed;right:2rem;bottom:1rem;cursor:pointer;border-radius:50%;height:50px;width:50px;border:1px solid rgba(0,0,0,0.1);display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:margin 0 linear;-webkit-transition:margin 0 linear;transition:margin 0 linear;}", ".scroll-top-btn.visible.jsx-2366773254{opacity:1;}"]))
      }
    }]), t
  }();
  t.default = c
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.setCurrentBreakpoint = function(e) {
    return {
      type: "SET_CURRENT_BREAKPOINT",
      breakpoint: e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = f(n(1)),
    i = n(0),
    l = f(i),
    s = n(2),
    c = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(6)),
    u = n(3),
    d = f(n(4));

  function f(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var p = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        opacity: 1
      }, n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "componentDidUpdate",
      value: function(e, t) {
        this.props.opacity !== this.state.opacity && this.setState({
          opacity: this.props.opacity
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this.props.isLoading;
        return l.default.createElement(i.Fragment, null, l.default.createElement("div", {
          className: a.default.dynamic([
            ["2927339815", [d.default.primaryColor, this.state.opacity]]
          ]) + " " + ((e ? "svg-container loading" : "svg-container") || "")
        }, l.default.createElement("svg", {
          version: "1.1",
          width: "40px",
          height: "40px",
          viewBox: "0 0 40 40",
          className: a.default.dynamic([
            ["2927339815", [d.default.primaryColor, this.state.opacity]]
          ])
        }, l.default.createElement("path", {
          opacity: "0.2",
          fill: "#000",
          d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z",
          className: a.default.dynamic([
            ["2927339815", [d.default.primaryColor, this.state.opacity]]
          ])
        }), l.default.createElement("path", {
          fill: "#000",
          d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z",
          className: a.default.dynamic([
            ["2927339815", [d.default.primaryColor, this.state.opacity]]
          ])
        }, l.default.createElement("animateTransform", {
          attributeType: "xml",
          attributeName: "transform",
          type: "rotate",
          from: "0 20 20",
          to: "360 20 20",
          dur: "0.5s",
          repeatCount: "indefinite",
          className: a.default.dynamic([
            ["2927339815", [d.default.primaryColor, this.state.opacity]]
          ])
        })))), l.default.createElement(a.default, {
          id: "2927339815",
          dynamic: [d.default.primaryColor, this.state.opacity]
        }, [".svg-container.__jsx-style-dynamic-selector{display:none;position:absolute;z-index:999;top:0;left:0;right:0;bottom:0;background:" + d.default.primaryColor + ";-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".svg-container.loading.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:" + this.state.opacity + ";}", ".svg-container.loading.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{margin-top:-8rem;-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}", ".svg-container.loading.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector,.svg-container.loading.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector rect.__jsx-style-dynamic-selector{fill:#333333;}"]))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      isLoading: e.isLoading
    }
  }, function(e) {
    return (0, u.bindActionCreators)(r({}, c), e)
  })(p)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getChildrenLeaves = t.setChildrenLeaves = void 0;
  var r = n(41),
    o = n(6),
    a = t.setChildrenLeaves = function(e) {
      return {
        type: "SET_CHILDREN_LEAVES",
        results: e
      }
    };
  t.getChildrenLeaves = function() {
    return function(e) {
      return (0, r.fetchGetChildrenLeaves)().catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(t) {
        e(a(t)), setTimeout(function() {
          e((0, o.setIsLoading)(!1))
        }, 1e3)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = n(0),
    a = l(o),
    i = l(n(53));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, a.default.Component), r(t, [{
      key: "render",
      value: function() {
        return a.default.createElement(o.Fragment, null, a.default.createElement(i.default, null))
      }
    }]), t
  }();
  t.default = s
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = n(0),
    a = i(o);
  i(n(4));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, o.Component), r(t, [{
      key: "render",
      value: function() {
        var e = this.props.error;
        return a.default.createElement(o.Fragment, null, a.default.createElement("div", {
          className: "error"
        }, e))
      }
    }]), t
  }();
  t.default = l
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = c(n(1)),
    a = n(0),
    i = c(a),
    l = c(n(58)),
    s = c(n(4));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, a.Component), r(t, [{
      key: "render",
      value: function() {
        var e = this.props,
          t = e.path,
          n = e.horizontal,
          r = e.vertical,
          c = e.rotate,
          u = e.spin,
          d = e.className;
        return console.log(d), i.default.createElement(a.Fragment, null, i.default.createElement(l.default, {
          path: t,
          size: 1,
          horizontal: n,
          vertical: r,
          rotate: c,
          color: s.default.iconsColor,
          spin: u
        }), i.default.createElement(o.default, {
          id: "2391971554"
        }, [".signed-in{background:blue;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:50%;height:35px;width:35px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".signed-in a{width:100%;height:100%;}", ".signed-in svg{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".signed-in svg path{fill:#ffffff !important;}", ".signed-out{background:transparent;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:50%;height:35px;width:35px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".signed-out a{width:100%;height:100%;}", ".signed-out svg{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]))
      }
    }]), t
  }();
  t.default = u, u.defaultProps = {
    horizontal: !1,
    vertical: !1,
    rotate: 0,
    spin: !1,
    className: null
  }
}, function(e, t) {
  e.exports = require("@mdi/js")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getStyles = t.setComponentStyles = void 0;
  var r = n(65),
    o = t.setComponentStyles = function(e) {
      return {
        type: "SET_COMPONENT_STYLES",
        result: e
      }
    };
  t.getStyles = function(e) {
    return function(t) {
      return (0, r.fetchGetStyles)(e).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {
          t(o(e))
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = d(n(1)),
    i = n(0),
    l = d(i),
    s = n(2),
    c = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(6)),
    u = n(3);
  d(n(4));

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var f = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        isLoading: !0
      }, n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        this.props.isLoading;
        this.setState({
          isLoading: !0
        })
      }
    }, {
      key: "componentDidUpdate",
      value: function(e, t) {}
    }, {
      key: "render",
      value: function() {
        var e = this.props,
          t = e.isLoading,
          n = e.size;
        return l.default.createElement(i.Fragment, null, l.default.createElement("div", {
          className: a.default.dynamic([
            ["2212396492", [n, n]]
          ]) + " " + ((t ? "loader" : "loader hide") || "")
        }, l.default.createElement("svg", {
          version: "1.1",
          width: "40px",
          height: "40px",
          viewBox: "0 0 40 40",
          className: a.default.dynamic([
            ["2212396492", [n, n]]
          ])
        }, l.default.createElement("path", {
          opacity: "0.2",
          fill: "#000",
          d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z",
          className: a.default.dynamic([
            ["2212396492", [n, n]]
          ])
        }), l.default.createElement("path", {
          fill: "#000",
          d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z",
          className: a.default.dynamic([
            ["2212396492", [n, n]]
          ])
        }, l.default.createElement("animateTransform", {
          attributeType: "xml",
          attributeName: "transform",
          type: "rotate",
          from: "0 20 20",
          to: "360 20 20",
          dur: "0.5s",
          repeatCount: "indefinite",
          className: a.default.dynamic([
            ["2212396492", [n, n]]
          ])
        })))), l.default.createElement(a.default, {
          id: "2212396492",
          dynamic: [n, n]
        }, [".loader.__jsx-style-dynamic-selector{position:absolute;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin-bottom:.2rem;}", ".loader.hide.__jsx-style-dynamic-selector{display:none;}", ".loader.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:" + n + "px;height:" + n + "px;}", ".loader.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector,.loader.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector rect.__jsx-style-dynamic-selector{fill:#333333;}"]))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      styles: e.styles
    }
  }, function(e) {
    return (0, u.bindActionCreators)(r({}, c), e)
  })(f)
}, function(e, t) {
  e.exports = require("mysql")
}, function(e, t, n) {
  "use strict";
  var r = x(n(36)),
    o = x(n(0)),
    a = n(37),
    i = n(7),
    l = x(n(38)),
    s = x(n(96)),
    c = n(97),
    u = n(2),
    d = n(3),
    f = n(5),
    p = n(108),
    m = x(n(109)),
    y = x(n(110)),
    h = x(n(111)),
    b = x(n(112)),
    g = x(n(114)),
    v = n(116);

  function x(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var w = n(117),
    _ = (0, r.default)();
  n(118);
  _.use(y.default.json({
    limit: "50mb"
  })), _.use(y.default.urlencoded({
    limit: "50mb",
    extended: !0,
    parameterLimit: 5e4
  })), _.use(w()), _.options("*", w()), _.use(function(e, t, n) {
    t.setHeader("Access-Control-Allow-Origin", "*"), t.setHeader("Access-Control-Allow-Methods", "GET"), t.setHeader("Access-Control-Allow-Methods", "POST"), n()
  }), _.get("*.js", function(e, t, n) {
    e.url = e.url + ".gz", t.set("Content-Encoding", "gzip"), t.set("Content-Type", "text/javascript"), n()
  }), _.use("/public", r.default.static("dist"), r.default.static("public")), _.use((0, m.default)({
    name: "session",
    keys: ["**************"],
    maxAge: 864e5
  })), _.use(function(e, t, n) {
    e.session.auth || (e.session.auth = {
      isSignedIn: !1,
      isAdmin: !1,
      errors: [],
      email: "",
      password: ""
    }), n()
  });
  var k = function(e, t, n) {
    var r = (0, d.createStore)(c.reducer, e),
      f = o.default.createElement(u.Provider, {
        store: r
      }, o.default.createElement(i.StaticRouter, {
        location: t,
        context: n
      }, o.default.createElement(l.default, null))),
      p = (0, a.renderToString)(f),
      m = (0, v.flushToHTML)(),
      y = t.slice(1);
    return (0, s.default)({
      body: p,
      title: y,
      reduxState: e,
      styles: m
    })
  };
  _.post("/results", function(e, t) {
    b.default.getPackages(function(n) {
      t.setHeader("Content-Type", "application/json");
      k({
        results: n
      }, e.url, {});
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(n))
    })
  }), _.post("/getLeaves", function(e, t) {
    b.default.getLeaves(function(e) {
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e))
    })
  }), _.post("/getChildrenLeaves", function(e, t) {
    b.default.getChildrenLeaves(function(e) {
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e))
    })
  }), _.post("/getLeaf", function(e, t) {
    b.default.getLeaf(e.body.id, function(e) {
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e[0]))
    })
  }), _.post("/getChildrenLeaf", function(e, t) {
    b.default.getChildrenLeaf(e.body.parentId, function(e) {
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e[0]))
    })
  }), _.post("/getChildrenLeafById", function(e, t) {
    b.default.getChildrenLeafById(e.body.id, function(e) {
      console.log(e), t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e[0]))
    })
  }), _.post("/deleteLeaf", function(e, t) {
    b.default.deleteLeaf(e.body.id, function(e) {
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e))
    })
  }), _.post("/setLeaf", function(e, t) {
    console.log(e.body), h.default.parallel([function(n) {
      b.default.setLeaf(e.body.id, JSON.stringify(e.body.title), JSON.stringify(e.body.subtitle), JSON.stringify(e.body.layouts), JSON.stringify(e.body.contents), e.body.level, e.body.hasChildrens, function(e) {
        t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e)), n(e.insertId)
      })
    }], function(e, t) {
      console.log(t, e, "....")
    })
  }), _.post("/setChildrenLeaf", function(e, t) {
    h.default.parallel([function(n) {
      b.default.setChildrenLeaf(e.body.id, e.body.parentId, JSON.stringify(e.body.title), JSON.stringify(e.body.subtitle), JSON.stringify(e.body.layouts), JSON.stringify(e.body.contents), e.body.level, function(e, r) {
        t.setHeader("Content-Type", "application/json"), t.status(200).send({
          result: JSON.stringify(e),
          parentId: r
        }), n(e.insertId)
      })
    }], function(e, t) {
      console.log(t, e, "....")
    })
  }), _.post("/setStyles", function(e, t) {
    b.default.setStyles(e.body.id, e.body.element, JSON.stringify(e.body.styles), function(e) {
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e.insertId))
    })
  }), _.post("/getStyles", function(e, t) {
    b.default.getStyles(e.body.element, function(e) {
      t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e[0]))
    })
  }), _.post("/signIn", function(e, t) {
    b.default.ifEmailExist(e.body.email, function(n) {
      n ? b.default.loadPassword(e.body.email, function(n) {
        g.default.compare(e.body.password, n, function(n) {
          n ? b.default.checkUserRight(e.body.email, function(n) {
            n.admin ? (e.session.auth.email = e.body.email, e.session.auth.password = e.body.password, e.session.auth.isSignedIn = !0, e.session.auth.isAdmin = !0, e.session.auth.errors = [], t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e.session.auth))) : n.available && (e.session.auth.email = e.body.email, e.session.auth.password = e.body.password, e.session.auth.isSignedIn = !0, e.session.auth.isAdmin = !1, e.session.auth.errors = [], t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e.session.auth)))
          }) : (console.log("incorrect password"), e.session.auth.errors = ["Mot de passe incorrect."], t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e.session.auth)))
        })
      }) : (console.log("user not exist"), e.session.auth.errors = ["Aucun compte associé à cet email."], t.status(200).send(JSON.stringify(e.session.auth)))
    })
  }), _.post("/setLocale", function(e, t, n) {
    e.session.locale = e.body.locale, t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e.session.locale))
  }), _.post("/signOut", function(e, t, n) {
    e.session.auth.isSignedIn = !1, e.session.auth.isAdmin = !1, e.session.auth.email = "", e.session.auth.password = "", e.session.auth.errors = [], t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify(e.session.auth))
  }), _.post("/signUp", function(e, t, n) {
    b.default.ifEmailExist(e.body.email, function(n) {
      n ? (console.log("account already signed up"), t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify({
        created: !1,
        accountStatus: "Cet email correspond déjà à un autre utilisateur."
      }))) : g.default.encrypt(e.body.password, function(n) {
        b.default.setPassword(e.body.email, n, e.body.name, e.body.firstName, function(n) {
          console.log("account signed up"), e.session.auth.email = e.body.email, e.session.auth.password = e.body.password, t.setHeader("Content-Type", "application/json"), t.status(200).send(JSON.stringify({
            created: !0,
            accountStatus: "Votre compte a bien été créé."
          }))
        })
      })
    })
  }), _.get("/users", function(e, t) {
    (0, p.fetchUsers)().catch(function(e) {
      return console.error("error while fetching /users: ", e), []
    }).then(function(n) {
      var r = {
          users: n
        },
        o = k({
          users: n
        }, e.url, r);
      t.status(200).send(o)
    }).catch(function(e) {
      return t.status(500).send(e)
    })
  }), _.get("*", function(e, t) {
    var n = {},
      r = k({
        auth: e.session.auth,
        i18n: {
          locale: e.session.locale || "fr"
        }
      }, e.url, n);
    if (n.url) return console.log("will redirect to ", n.url), void t.redirect(n.url);
    t.status(200).send(r)
  }), _.listen(f.port, function() {
    console.log("Serving at " + f.port)
  })
}, function(e, t) {
  e.exports = require("express")
}, function(e, t) {
  e.exports = require("react-dom/server")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = v(n(1)),
    i = v(n(0)),
    l = v(n(26)),
    s = n(7),
    c = v(n(39)),
    u = v(n(59)),
    d = v(n(16)),
    f = n(2),
    p = n(3),
    m = g(n(13)),
    y = g(n(32)),
    h = g(n(25)),
    b = (v(n(94)), v(n(95)), v(n(4)));

  function g(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function v(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var x = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        breakpoints: {
          lg: 1200,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 320
        },
        currentBreakpoint: null
      }, n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.default.Component), o(t, [{
      key: "componentBeforeMount",
      value: function() {
        this.props.setIsLoading(!0)
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.props.getLeaves(), this.props.getStyles("Home")
      }
    }, {
      key: "onResize",
      value: function(e) {
        var t = this,
          n = this.state.breakpoints,
          r = document.querySelector("#view-content").clientWidth,
          o = this.getBreakpointFromWidth(n, r + 60);
        this.setState({
          currentBreakpoint: this.props.currentBreakpoint || o
        }, function() {
          t.props.setCurrentBreakpoint(o)
        })
      }
    }, {
      key: "getBreakpointFromWidth",
      value: function(e, t) {
        for (var n = this.sortBreakpoints(e), r = n[0], o = 1, a = n.length; o < a; o++) {
          var i = n[o];
          t > e[i] && (r = i)
        }
        return r
      }
    }, {
      key: "sortBreakpoints",
      value: function(e) {
        return Object.keys(e).sort(function(t, n) {
          return e[t] - e[n]
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.props.auth;
        t.isSignedIn, t.isAdmin, this.props.leaves;
        return i.default.createElement("div", {
          id: "wrap",
          className: "jsx-3322202665 " + a.default.dynamic([
            ["2114803522", [b.default.primaryColor]]
          ])
        }, i.default.createElement(c.default, null), i.default.createElement(l.default, {
          opacity: .5
        }), i.default.createElement("canvas", {
          id: "canvas",
          className: "jsx-3322202665 " + a.default.dynamic([
            ["2114803522", [b.default.primaryColor]]
          ])
        }), i.default.createElement("main", {
          id: "view-container",
          className: "jsx-3322202665 " + a.default.dynamic([
            ["2114803522", [b.default.primaryColor]]
          ])
        }, i.default.createElement(d.default, {
          handleWidth: !0,
          handleHeight: !0,
          resizableElementId: "view-container",
          refreshMode: "throttle",
          refreshRate: 1,
          onResize: function(t) {
            return e.onResize(t)
          },
          render: function(e) {
            e.width, e.height;
            return i.default.createElement("div", {
              id: "view-content",
              className: "jsx-3322202665 " + a.default.dynamic([
                ["2114803522", [b.default.primaryColor]]
              ])
            }, i.default.createElement(u.default, null))
          }
        })), i.default.createElement(a.default, {
          id: "3322202665"
        }, ['@charset "UTF-8";', "noscript{position:absolute;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:9999999;padding:1rem;top:0;left:0;right:0;bottom:0;background:#eeeeee;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "::selection{background:rgba(0,0,0,0.05);}", "::-webkit-scrollbar{width:8px;background-color:transparent;}", "::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 3px rgba(0,0,0,0.2);background-color:transparent;}", "::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 3px rgba(0,0,0,0);background-color:transparent;}", ":focus{outline:0;}"]), i.default.createElement(a.default, {
          id: "2114803522",
          dynamic: [b.default.primaryColor]
        }, ["html{background-color:" + b.default.primaryColor + ";color:#444444;font:12pt 'Muli',sans-serif;overflow:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-overflow-scrolling:touch;-webkit-tap-highlight-color:transparent;}", "html>*{-webkit-box-sizing:border-box;box-sizing:border-box;}", "html #wrap{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;}", "html #wrap #canvas{position:fixed;bottom:0;right:0;}", "html #wrap #view-container{position:relative;z-index:1;padding:1rem;-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;}", "html #wrap #view-container #view-content{margin:5rem auto;max-width:1200px;}", "html #wrap #view-container a{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;color:#444444;padding:1rem;-webkit-box-shadow:0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);box-shadow:0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);}", "html #wrap #view-container a:focus{-webkit-box-shadow:inset 0 0 20px rgba(0,0,0,0.1);box-shadow:inset 0 0 20px rgba(0,0,0,0.1);}", "html #wrap #view-container .header-viewer button,html #wrap #view-container form button,html #wrap #view-container .color-picker button{position:relative;padding:1rem;margin-bottom:.5rem;margin-right:.5rem;background:buttonface;border:0;-webkit-box-shadow:0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);box-shadow:0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);border-radius:4px;}", "html #wrap #view-container .header-viewer button:focus,html #wrap #view-container form button:focus,html #wrap #view-container .color-picker button:focus{-webkit-box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);outline-color:transparent;}", "html #wrap #view-container .header-viewer button:hover,html #wrap #view-container form button:hover,html #wrap #view-container .color-picker button:hover{-webkit-box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);outline-color:transparent;}", "html #wrap #view-container .header-viewer button.btn-focused,html #wrap #view-container form button.btn-focused,html #wrap #view-container .color-picker button.btn-focused{-webkit-box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);}", "@media (max-width:1400px){html #wrap #view-container .header-viewer button.lg,html #wrap #view-container form button.lg,html #wrap #view-container .color-picker button.lg{display:none;}}", "html #wrap #view-container .mce-btn{border:0;}", "html #wrap #view-container .mce-btn button{background:buttonface;}", "html #wrap #view-container form{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:300px;margin:0 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "html #wrap #view-container form input,html #wrap #view-container form .mce-content-body{background:transparent;padding:1rem;margin-bottom:.5rem;-webkit-box-shadow:0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);box-shadow:0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);border:0 solid #d9d9d9;border-radius:4px;-webkit-transition:border-color ease-in-out .15s;-webkit-transition:border-color ease-in-out .15s;transition:border-color ease-in-out .15s;}", "html #wrap #view-container form input:-webkit-autofill,html #wrap #view-container form .mce-content-body:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #eeeeee inset,0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);box-shadow:0 0 0 1000px #eeeeee inset,0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);}", "html #wrap #view-container form input:focus,html #wrap #view-container form .mce-content-body:focus{-webkit-box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);box-shadow:0 2px 3px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3);outline-color:transparent;}", "html .react-grid-layout{position:relative;margin:0 auto;}", "html .react-grid-item{-webkit-transition:all 100ms ease;-webkit-transition:all 100ms ease;transition:all 100ms ease;cursor:-webkit--webkit-grab;cursor:-moz--webkit-grab;cursor:-webkit-grab;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;}", "html .react-grid-item img{width:100%;}", "html .react-grid-item img::selection{background:rgba(0,0,0,0.02);}", "html .react-grid-item img[data-mce-selected]{outline:0;}", "html .react-grid-item.resizing{z-index:1;will-change:width,height;-webkit-transition:none;-webkit-transition:none;transition:none;}", "html .react-grid-item.react-draggable-dragging{-webkit-transition:none;-webkit-transition:none;transition:none;z-index:3;will-change:transform;}", "html .react-grid-item.react-grid-placeholder{background:rgba(0,0,0,0.2);opacity:0.2;-webkit-transition-duration:100ms;-webkit-transition-duration:100ms;transition-duration:100ms;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", "html .react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px;bottom:0;right:0;cursor:se-resize;}", 'html .react-grid-item>.react-resizable-handle::after{content:"";position:absolute;right:12px;bottom:6px;width:8px;height:8px;border-right:2px solid rgba(0,0,0,0.2);border-bottom:2px solid rgba(0,0,0,0.2);}', "html .react-resizable{position:relative;}", "html .react-resizable-handle{position:absolute;width:20px;height:20px;bottom:0;right:0;background-position:bottom right;padding:0 3px 3px 0;background-repeat:no-repeat;background-origin:content-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:se-resize;}", "html .title .mce-content-body{min-height:calc(100%);padding:1rem;margin-top:0;}", "html .mce-content-body,html .item-content{padding:0 1rem 1rem;margin-top:30px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;cursor:text;line-height:1.3;}", "html .mce-content-body p,html .item-content p{margin:0;width:100%;word-wrap:break-word;}", "html .hidden .mce-content-body{opacity:.05;}"]))
      }
    }]), t
  }();
  t.default = (0, s.withRouter)((0, f.connect)(function(e) {
    return {
      auth: e.auth,
      leaves: e.leaves,
      styles: e.styles,
      currentBreakpoint: e.currentBreakpoint
    }
  }, function(e) {
    return (0, p.bindActionCreators)(r({}, m, y, h), e)
  })(x))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = v(n(1)),
    i = n(0),
    l = v(i),
    s = n(9),
    c = n(7),
    u = v(n(12)),
    d = v(n(40)),
    f = n(2),
    p = n(3),
    m = n(8),
    y = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(14)),
    h = v(n(44)),
    b = v(n(47)),
    g = v(n(4));

  function v(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var x = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        initDone: !1,
        isOpened: !0,
        color: "rgba(0, 0, 0, .1)",
        loopAlreadyDone: null
      }, n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        this.setState({
          initDone: !0
        }), window.addEventListener("resize", this.mobileDetect.bind(this))
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        window.removeEventListener("resize", this.mobileDetect.bind(this))
      }
    }, {
      key: "mobileDetect",
      value: function() {
        var e = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        this.setState({
          navPosition: e
        })
      }
    }, {
      key: "handleToggleIsOpened",
      value: function() {
        this.state.isOpened ? this.setState({
          isOpened: !1
        }) : this.setState({
          isOpened: !0
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.props.leaves,
          n = this.props.i18n.locale,
          r = this.props.auth,
          o = (r.isSignedIn, r.isAdmin),
          f = this.state,
          p = f.color;
        f.loopAlreadyDone;
        return this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement("nav", {
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ]) + " nav-bar"
        }, l.default.createElement("ul", {
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ])
        }, l.default.createElement(b.default, null), l.default.createElement(h.default, null), l.default.createElement("li", {
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ])
        }, l.default.createElement(s.EmailOutlined, null)), l.default.createElement("li", {
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ])
        }, l.default.createElement(s.MoreVert, {
          onClick: function() {
            e.handleToggleIsOpened()
          }
        })))), l.default.createElement("nav", {
          id: "side-bar",
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ]) + " " + ((this.state.isOpened ? "side-bar opened" : "side-bar") || "")
        }, l.default.createElement("ul", {
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ]) + " side-bar-scrollable"
        }, l.default.createElement("li", {
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ])
        }, l.default.createElement(u.default, {
          color: p
        }, l.default.createElement(c.Link, {
          to: "/"
        }, "Home"))), o ? l.default.createElement("li", {
          className: a.default.dynamic([
            ["4118197315", [g.default.primaryColor]],
            ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
          ])
        }, l.default.createElement(u.default, {
          color: p
        }, l.default.createElement(c.Link, {
          to: "/dashboard"
        }, m.I18n.t("app.nav.dashboard")))) : null, t.map(function(t, r) {
          return 0 === t.hasChildrens ? l.default.createElement("li", {
            key: r,
            className: a.default.dynamic([
              ["4118197315", [g.default.primaryColor]],
              ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
            ])
          }, l.default.createElement("ul", {
            className: a.default.dynamic([
              ["4118197315", [g.default.primaryColor]],
              ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
            ]) + " tab-level-1"
          }, l.default.createElement("li", {
            className: a.default.dynamic([
              ["4118197315", [g.default.primaryColor]],
              ["2345143172", [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]]
            ])
          }, l.default.createElement(u.default, {
            color: p
          }, l.default.createElement(c.Link, {
            to: "/page/" + t.id,
            dangerouslySetInnerHTML: {
              __html: JSON.parse(t.title) ? JSON.parse(t.title).hasOwnProperty("" + n) ? JSON.parse(t.title)["" + n] : m.I18n.t("app.nav.translation") : m.I18n.t("app.nav.addTitle")
            }
          }))))) : (console.log(JSON.parse(t.title)), l.default.createElement(d.default, {
            key: r,
            parentId: t.id,
            title: JSON.parse(t.title)
          }))
        }))), l.default.createElement(a.default, {
          id: "4118197315",
          dynamic: [g.default.primaryColor]
        }, ["html .nav-bar{position:fixed;z-index:10;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:1rem;top:0;}", "html .nav-bar ul{margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "html .nav-bar ul li{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.25rem;cursor:pointer;}", "html .side-bar{width:200px;-webkit-transition:margin 250ms linear;-webkit-transition:margin 250ms linear;transition:margin 250ms linear;z-index:9;height:100vh;overflow-y:auto;background:" + g.default.primaryColor + ";}", "html .side-bar .side-bar-scrollable{margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "html .side-bar .side-bar-scrollable .tab-level-1{padding:0;list-style:none;}", "html .side-bar .side-bar-scrollable .tab-level-2{list-style-type:circle;display:block;overflow:hidden;max-height:0;-webkit-transition:max-height 500ms linear;-webkit-transition:max-height 500ms linear;transition:max-height 500ms linear;}", "html .side-bar .side-bar-scrollable .tab-level-2.opened{max-height:1000px;}", "html .side-bar .side-bar-scrollable li div{display:-webkit-box !important;display:-ms-flexbox !important;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;}", "html .side-bar .side-bar-scrollable li div a,html .side-bar .side-bar-scrollable li div span{margin:0;cursor:pointer;-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-text-decoration:none;text-decoration:none;color:#444444;padding:1rem;-webkit-box-shadow:inset 0 0 1px rgba(0,0,0,0.1);box-shadow:inset 0 0 1px rgba(0,0,0,0.1);}", "html .side-bar .side-bar-scrollable li div a p,html .side-bar .side-bar-scrollable li div span p{display:inline-block;margin:0;}", "html .side-bar .side-bar-scrollable li div a:focus,html .side-bar .side-bar-scrollable li div span:focus{-webkit-box-shadow:inset 0 2px 130px rgba(0,0,0,0.1);box-shadow:inset 0 2px 130px rgba(0,0,0,0.1);outline-color:transparent;}", "html .side-bar .side-bar-scrollable li div a:hover,html .side-bar .side-bar-scrollable li div span:hover{-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,0.1);box-shadow:inset 0 0 2px rgba(0,0,0,0.1);outline-color:transparent;}"]), l.default.createElement(a.default, {
          id: "2345143172",
          dynamic: [e.state.navPosition ? "absolute" : "relative", e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200"]
        }, [".side-bar.__jsx-style-dynamic-selector{position:" + (e.state.navPosition ? "absolute" : "relative") + ";margin-left:" + (e.state.navPosition ? e.state.isOpened ? "-200" : "0" : e.state.isOpened ? "0" : "-200") + "px;}"]))
      }
    }]), t
  }();
  t.default = (0, f.connect)(function(e) {
    return r({}, e)
  }, function(e) {
    return (0, p.bindActionCreators)(r({}, y), e)
  })(x)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = m(n(1)),
    i = n(0),
    l = m(i),
    s = n(7),
    c = m(n(12)),
    u = n(2),
    d = n(3),
    f = n(8),
    p = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(27));

  function m(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var y = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        initDone: !1,
        color: "rgba(0, 0, 0, .1)",
        isOpened: !1
      }, n.toogleNavDropdown = n.toogleNavDropdown.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        var e = this.props,
          t = e.getChildrenLeaves,
          n = e.parentId;
        t(), this.setState({
          initDone: !0
        }), console.log(n)
      }
    }, {
      key: "componentDidUpdate",
      value: function(e, t) {}
    }, {
      key: "toogleNavDropdown",
      value: function() {
        console.log("????"), this.state.isOpened ? this.setState({
          isOpened: !1
        }) : this.setState({
          isOpened: !0
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this.props,
          t = (e.getChildrenLeaves, e.childrenLeaves),
          n = (e.childrensLeaf, e.parentId),
          r = e.title,
          o = this.props.i18n.locale,
          u = this.state,
          d = u.color,
          p = u.isOpened;
        return console.log(r, o), this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement("li", {
          className: "jsx-1380133349"
        }, l.default.createElement("ul", {
          className: "jsx-1380133349 tab-level-1"
        }, l.default.createElement("li", {
          className: "jsx-1380133349"
        }, l.default.createElement(c.default, {
          color: d
        }, l.default.createElement("span", {
          onClick: this.toogleNavDropdown,
          dangerouslySetInnerHTML: {
            __html: r ? r.hasOwnProperty("" + o) ? r["" + o] : f.I18n.t("app.nav.translation") : f.I18n.t("app.nav.addTitle")
          },
          className: "jsx-1380133349"
        })))), l.default.createElement("ul", {
          className: "jsx-1380133349 " + ((p ? "tab-level-2 opened" : "tab-level-2") || "")
        }, t.map(function(e, t) {
          if (n === e.parentId) return console.log(e.title), l.default.createElement("li", {
            key: t,
            className: "jsx-1380133349"
          }, l.default.createElement(c.default, {
            color: d
          }, l.default.createElement(s.Link, {
            to: "/page/" + n + "/" + e.id,
            dangerouslySetInnerHTML: {
              __html: JSON.parse(e.title) ? JSON.parse(e.title).hasOwnProperty("" + o) ? JSON.parse(e.title)["" + o] : f.I18n.t("app.nav.translation") : f.I18n.t("app.nav.addTitle")
            }
          })))
        }))), l.default.createElement(a.default, {
          id: "1380133349"
        }, ["div.jsx-1380133349{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:red;}"]))
      }
    }]), t
  }();
  t.default = (0, u.connect)(function(e) {
    return r({}, e)
  }, function(e) {
    return (0, d.bindActionCreators)(r({}, p), e)
  })(y)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchGetChildrenLeaves = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchGetChildrenLeaves = function(e) {
    return a.default.post("getChildrenLeaves").then(function(e) {
      return e.data
    })
  }
}, function(e, t) {
  e.exports = require("axios")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchLeaf = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchLeaf = function(e) {
    return a.default.post("getLeaf", {
      id: e
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = d(n(1)),
    i = n(0),
    l = d(i),
    s = n(2),
    c = n(3),
    u = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(45));
  d(n(4));

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var f = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.Component), o(t, [{
      key: "render",
      value: function() {
        var e = this.props.setLanguage;
        return l.default.createElement(i.Fragment, null, l.default.createElement("li", {
          className: "jsx-1467457327"
        }, l.default.createElement("span", {
          onClick: function() {
            return e("fr")
          },
          className: "jsx-1467457327"
        }, "fr")), l.default.createElement("li", {
          className: "jsx-1467457327"
        }, "|"), l.default.createElement("li", {
          className: "jsx-1467457327"
        }, l.default.createElement("span", {
          onClick: function() {
            return e("en")
          },
          className: "jsx-1467457327"
        }, "en")), l.default.createElement(a.default, {
          id: "1467457327"
        }, ["span.jsx-1467457327{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:1rem;}"]))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      locale: e.i18n.locale
    }
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, u), e)
  })(f)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setLanguage = void 0;
  var r = n(8),
    o = n(46);
  t.setLanguage = function(e) {
    return function(t) {
      return (0, o.fetchSetLocale)(e).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {
          e && t((0, r.setLocale)(e))
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchSetLocale = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchSetLocale = function(e) {
    return a.default.post("setLocale", {
      locale: e
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = n(0),
    i = b(a),
    l = n(7),
    s = n(2),
    c = n(3),
    u = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(48)),
    d = b(n(28)),
    f = b(n(12)),
    p = n(8),
    m = b(n(17)),
    y = b(n(30)),
    h = n(31);
  b(n(4));

  function b(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var g = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.signOut = n.signOut.bind(n), n.state = {
        color: "rgba(0, 0, 0, .1)",
        initDone: !1
      }, n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, a.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        console.log(this.props.auth), this.setState({
          initDone: !0
        })
      }
    }, {
      key: "signOut",
      value: function() {
        this.props.signOut()
      }
    }, {
      key: "render",
      value: function() {
        var e = this.props,
          t = (e.setLanguage, e.auth),
          n = this.state.color;
        return console.log(t.isSignedIn), this.state.initDone && i.default.createElement(a.Fragment, null, t.isSignedIn ? i.default.createElement("li", null, i.default.createElement(m.default, {
          className: "signed-in",
          icon: i.default.createElement(f.default, {
            color: n
          }, i.default.createElement("a", {
            onClick: this.signOut
          }, i.default.createElement(y.default, {
            path: h.mdiAccountOutline
          }))),
          label: p.I18n.t("app.nav.logout")
        })) : i.default.createElement("li", null, i.default.createElement(m.default, {
          className: "signed-out",
          icon: i.default.createElement("ul", null, i.default.createElement("li", null, i.default.createElement(f.default, {
            color: n
          }, i.default.createElement(l.Link, {
            to: "/signIn"
          }, i.default.createElement(y.default, {
            path: h.mdiAccountOutline
          }))), i.default.createElement(d.default, null))),
          label: p.I18n.t("app.nav.login")
        })))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return r({}, e)
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, u), e)
  })(g)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.signOut = void 0;
  var r = n(49),
    o = (i(n(0)), i(n(10)), n(7), i(n(11))),
    a = n(15);

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.signOut = function() {
    return function(e) {
      return (0, r.fetchSignOut)().catch(function(e) {
        console.error("erreur server: ", e)
      }).then(function(t) {
        return setTimeout(function() {
          console.log(t), e((0, a.setAuth)(t)), o.default.push("/signIn")
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchSignOut = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchSignOut = function() {
    return a.default.post("signOut").then(function(e) {
      return e.data
    })
  }
}, function(e, t) {
  e.exports = require("history")
}, function(e, t) {
  e.exports = require("history/createBrowserHistory")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchSignIn = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchSignIn = function(e, t) {
    return a.default.post("signIn", {
      email: e,
      password: t
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = d(n(1)),
    a = n(0),
    i = d(a),
    l = n(2),
    s = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(15)),
    c = n(3),
    u = d(n(29));
  d(n(4));

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function f(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }
  var p = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        email: "",
        password: "",
        errors: []
      }, n.checkForm = n.checkForm.bind(n), n.validEmail = n.validEmail.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.default.Component), r(t, [{
      key: "componentDidMount",
      value: function() {
        var e = JSON.parse(sessionStorage.getItem("auth"));
        e && this.setState({
          email: e.email,
          password: e.password
        })
      }
    }, {
      key: "componentWillReceiveProps",
      value: function(e) {
        console.log(e), this.setState({
          errors: [].concat(f(e.auth.errors))
        })
      }
    }, {
      key: "checkForm",
      value: function(e) {
        e.preventDefault();
        var t = this.state,
          n = t.email,
          r = t.password,
          o = (t.passwordConfirm, t.errors, []);
        console.log(!n, !r), n ? this.validEmail(n) || (o = [].concat(f(o), ["Format email invalide."])) : o = [].concat(f(o), ["Email obligatoire."]), r || (o = [].concat(f(o), ["Mot de passe obligatoire."])), o.length || (sessionStorage.setItem("auth", JSON.stringify(this.state)), this.props.signIn(n, r)), this.setState({
          errors: [].concat(f(o))
        })
      }
    }, {
      key: "validEmail",
      value: function(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.state,
          n = t.email,
          r = t.password,
          l = t.errors;
        return i.default.createElement(a.Fragment, null, i.default.createElement("form", {
          className: "jsx-103910014"
        }, i.default.createElement("div", {
          className: "jsx-103910014 alert__msg"
        }, l.map(function(e, t) {
          return i.default.createElement(u.default, {
            key: t,
            error: e
          })
        })), i.default.createElement("input", {
          type: "text",
          value: n,
          onChange: function(t) {
            return e.setState({
              email: t.target.value
            })
          },
          placeholder: "Votre email",
          className: "jsx-103910014"
        }), i.default.createElement("input", {
          type: "password",
          value: r,
          onChange: function(t) {
            return e.setState({
              password: t.target.value
            })
          },
          placeholder: "Votre mot de passe",
          className: "jsx-103910014"
        }), i.default.createElement("button", {
          onClick: function(t) {
            return e.checkForm(t)
          },
          className: "jsx-103910014"
        }, "Connexion"), i.default.createElement("a", {
          href: "/signUp",
          className: "jsx-103910014"
        }, "Créer un compte")), i.default.createElement(o.default, {
          id: "103910014"
        }, ["form.jsx-103910014{position:absolute;top:50px;}"]))
      }
    }]), t
  }();
  t.default = (0, l.connect)(function(e) {
    return {
      auth: e.auth
    }
  }, function(e) {
    return (0, c.bindActionCreators)(s, e)
  })(p)
}, function(e, t) {
  e.exports = require("prop-types")
}, function(e, t) {
  e.exports = require("@material-ui/core/styles")
}, function(e, t) {
  e.exports = require("@material-ui/core/Button")
}, function(e, t) {
  e.exports = require("@material-ui/core/Tooltip")
}, function(e, t) {
  e.exports = require("@mdi/react")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = n(0),
    i = x(a),
    l = n(7),
    s = x(n(60)),
    c = x(n(67)),
    u = x(n(28)),
    d = x(n(71)),
    f = x(n(75)),
    p = x(n(76)),
    m = x(n(80)),
    y = x(n(83)),
    h = x(n(86)),
    b = x(n(93)),
    g = x(n(26)),
    v = n(2);

  function x(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function w(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function _(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function k(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }! function(e) {
    function t() {
      return w(this, t), _(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    k(t, i.default.Component), o(t, [{
      key: "render",
      value: function() {
        var e = this.props,
          t = e.isSignedIn,
          n = e.component,
          r = e.path;
        return t ? i.default.createElement(l.Route, {
          path: r,
          component: n
        }) : i.default.createElement(l.Route, {
          path: "/dashboard",
          component: c.default
        })
      }
    }])
  }();
  var O = function(e) {
    function t() {
      return w(this, t), _(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return k(t, i.default.Component), o(t, [{
      key: "render",
      value: function() {
        var e = this,
          t = this.props.auth,
          n = (t.isSignedIn, t.isAdmin);
        return i.default.createElement(a.Fragment, null, i.default.createElement(l.Switch, null, i.default.createElement(l.Route, {
          exact: !0,
          path: "/",
          render: function(t) {
            return i.default.createElement(s.default, r({}, t, {
              setCSS: e.setCSS
            }))
          }
        }), i.default.createElement(l.Route, {
          path: "/results",
          component: c.default
        }), i.default.createElement(l.Route, {
          path: "/signIn",
          component: u.default
        }), i.default.createElement(l.Route, {
          path: "/signUp",
          component: d.default
        }), i.default.createElement(l.Route, {
          path: "/swiper",
          component: m.default
        }), i.default.createElement(l.Route, {
          path: "/dashboard",
          render: function() {
            return n ? i.default.createElement(f.default, null) : i.default.createElement("p", null, "Accès reservé")
          }
        }), i.default.createElement(l.Route, {
          path: "/newLeaf",
          component: p.default
        }), i.default.createElement(l.Route, {
          path: "/deletePage",
          component: y.default
        }), i.default.createElement(l.Route, {
          path: "/page/:id/:childrenId?",
          render: function(e) {
            return n ? i.default.createElement(h.default, e) : i.default.createElement(b.default, e)
          }
        }), i.default.createElement(l.Route, {
          path: "/souspage/:id",
          render: function(e) {
            return n ? i.default.createElement(h.default, e) : i.default.createElement(b.default, e)
          }
        }), i.default.createElement(l.Route, {
          path: "/designModification",
          component: c.default
        }), i.default.createElement(l.Route, {
          path: "/spinner",
          component: g.default
        }), i.default.createElement(l.Route, {
          exact: !0,
          path: "*",
          render: function() {
            return i.default.createElement("div", null, "Not found")
          }
        })))
      }
    }]), t
  }();
  t.default = (0, l.withRouter)((0, v.connect)(function(e) {
    return {
      auth: e.auth
    }
  })(O))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = c(n(1)),
    i = n(0),
    l = c(i),
    s = c(n(61));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        initDone: !1,
        styles: {}
      }, n.setCSS = n.setCSS.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        this.setState({
          initDone: !0
        })
      }
    }, {
      key: "setCSS",
      value: function(e) {
        this.setState({
          styles: e
        })
      }
    }, {
      key: "render",
      value: function() {
        return this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement(s.default, r({}, this.props, {
          setCSS: this.setCSS,
          element: this.constructor.name
        })), l.default.createElement(a.default, {
          id: "3591667937",
          dynamic: [this.state.styles.background]
        }, ["main{background:" + this.state.styles.background + " !important;}"]))
      }
    }]), t
  }();
  t.default = u
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = n(0),
    i = m(a),
    l = (m(n(10)), n(62)),
    s = n(2),
    c = n(3),
    u = p(n(63)),
    d = p(n(32)),
    f = (n(66), n(9));
  m(n(4));

  function p(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function m(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var y = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        styles: {},
        displayColorPicker: !1
      }, n.handleChangeComplete = n.handleChangeComplete.bind(n), n.handleClick = n.handleClick.bind(n), n.handleClose = n.handleClose.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, a.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        console.log(this.props.location.pathname.replace("/", "")), this.props.getStyles(this.props.element)
      }
    }, {
      key: "componentDidUpdate",
      value: function(e, t) {
        e.styles !== this.props.styles && this.props.styles && this.setState({
          styles: JSON.parse(this.props.styles.styles)
        }), t.styles !== this.state.styles && this.props.setCSS(JSON.parse(this.props.styles.styles))
      }
    }, {
      key: "handleChangeComplete",
      value: function(e) {
        this.props.setCSS(r({}, this.state.styles, {
          background: "rgba(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")"
        })), this.props.setStyles(this.props.styles.id || null, this.props.element, r({}, this.state.styles, {
          background: "rgba(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")"
        }))
      }
    }, {
      key: "handleClick",
      value: function() {
        this.setState({
          displayColorPicker: !this.state.displayColorPicker
        })
      }
    }, {
      key: "handleClose",
      value: function() {
        this.setState({
          displayColorPicker: !1
        })
      }
    }, {
      key: "render",
      value: function() {
        return i.default.createElement(a.Fragment, null, i.default.createElement("div", {
          className: "color-picker"
        }, i.default.createElement("button", {
          onClick: this.handleClick
        }, i.default.createElement(f.Brush, null)), this.state.displayColorPicker ? i.default.createElement("div", {
          style: {
            position: "absolute",
            zIndex: "2"
          }
        }, i.default.createElement("div", {
          style: {
            position: "fixed",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px"
          },
          onClick: this.handleClose
        }), i.default.createElement(l.ChromePicker, {
          onChangeComplete: this.handleChangeComplete
        })) : null))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      styles: e.styles
    }
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, u, d), e)
  })(y)
}, function(e, t) {
  e.exports = require("react-color")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setStyles = void 0;
  var r, o = n(64),
    a = n(11);
  (r = a) && r.__esModule;
  t.setStyles = function(e, t, n) {
    return function(r) {
      return (0, o.fetchSetStyles)(e, t, n).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {}, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchSetStyles = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchSetStyles = function(e, t, n) {
    return a.default.post("setStyles", {
      id: e,
      element: t,
      styles: n
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchGetStyles = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchGetStyles = function(e) {
    return a.default.post("getStyles", {
      element: e
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t) {
  e.exports = require("react-router")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = p(n(1)),
    i = n(0),
    l = p(i),
    s = n(2),
    c = n(3),
    u = f(n(18)),
    d = (f(n(15)), p(n(69)));

  function f(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function p(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var m = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        initDone: !1,
        styles: {}
      }, n.setCSS = n.setCSS.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        this.setState({
          initDone: !0
        }), this.props.staticContext && this.props.staticContext.results && (console.log(".?..."), this.props.setResults(this.props.staticContext.results))
      }
    }, {
      key: "setCSS",
      value: function(e) {
        console.log(e, void 0 === e ? "undefined" : r(e)), this.setState({
          styles: e
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this;
        return this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement(d.default, null), l.default.createElement("ul", {
          className: a.default.dynamic([
            ["816442525", [e.state.styles.mceBackground]]
          ])
        }, this.props.results.map(function(t, n) {
          return l.default.createElement("li", {
            key: n,
            dangerouslySetInnerHTML: {
              __html: t.id + "" + t.title
            },
            className: a.default.dynamic([
              ["816442525", [e.state.styles.mceBackground]]
            ])
          })
        })), l.default.createElement(a.default, {
          id: "816442525",
          dynamic: [e.state.styles.mceBackground]
        }, ["main{background:" + e.state.styles.mceBackground + " !important;}"]))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      results: e.results,
      auth: e.auth
    }
  }, function(e) {
    return (0, c.bindActionCreators)(u, e)
  })(m)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchResults = t.fetchUpDate = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchUpDate = function(e) {
    return a.default.post("updatePackages", {
      data: e
    }).then(function(e) {
      return e.data
    })
  }, t.fetchResults = function() {
    return a.default.post("results").then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = s(n(1)),
    a = n(0),
    i = s(a),
    l = s(n(70));
  s(n(4));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var c = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, a.Component), r(t, [{
      key: "componentDidMount",
      value: function() {
        this.parallax = new l.default(this.scene)
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.parallax.disable()
      }
    }, {
      key: "render",
      value: function() {
        var e = this;
        return i.default.createElement("ul", {
          ref: function(t) {
            return e.scene = t
          },
          className: "jsx-2042384592"
        }, i.default.createElement("pre", {
          "data-depth": "0.20",
          className: "jsx-2042384592 layer"
        }, "\n          Ici ou là\n          Luciole\n          Lê't ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( t )"), "re\n          Terrê là\n          L'à taire Aï ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( àï )")), i.default.createElement("pre", {
          "data-depth-x": "0.80",
          "data-depth-y": "-0.80",
          className: "jsx-2042384592 layer"
        }, "\n          Ici ou là\n          Luciole\n          Lê't ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( t )"), "re\n          Terrê là\n          L'à taire Aï ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( àï )")), i.default.createElement("pre", {
          "data-depth": "1.00",
          className: "jsx-2042384592 layer"
        }, "\n          Ici ou là\n          Luciole\n          Lê't ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( t )"), "re\n          Terrê là\n          L'à taire Aï ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( àï )")), i.default.createElement("pre", {
          "data-depth": "-0.20",
          className: "jsx-2042384592 layer"
        }, "\n          Ici ou là\n          Luciole\n          Lê't ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( t )"), "re\n          Terrê là\n          L'à taire Aï ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( àï )")), i.default.createElement("pre", {
          "data-depth-x": "0.50",
          "data-depth-y": "0.80",
          className: "jsx-2042384592 layer"
        }, "\n          Ici ou là\n          Luciole\n          Lê't ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( t )"), "re\n          Terrê là\n          L'à taire Aï ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( àï )")), i.default.createElement("pre", {
          "data-depth": "0.01",
          className: "jsx-2042384592 layer"
        }, "\n          Ici ou là\n          Luciole\n          Lê't ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( t )"), "re\n          Terrê là\n          L'à taire Aï ", i.default.createElement("sup", {
          className: "jsx-2042384592"
        }, "( àï )")), i.default.createElement(o.default, {
          id: "2042384592"
        }, ["ul.jsx-2042384592{height:300px;vertical-align:middle;}"]))
      }
    }]), t
  }();
  t.default = c
}, function(e, t) {
  e.exports = require("parallax-js")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = n(0),
    a = l(o),
    i = l(n(72));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, a.default.Component), r(t, [{
      key: "render",
      value: function() {
        return a.default.createElement(o.Fragment, null, a.default.createElement(i.default, null))
      }
    }]), t
  }();
  t.default = s
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = f(n(1)),
    i = n(0),
    l = f(i),
    s = f(n(29)),
    c = n(2),
    u = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(73)),
    d = n(3);
  f(n(4));

  function f(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function p(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }
  var m = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        firstName: "",
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        errors: []
      }, n.checkForm = n.checkForm.bind(n), n.validEmail = n.validEmail.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "componentWillReceiveProps",
      value: function(e) {
        console.log(e), this.setState({
          errors: [].concat(p(e.signUpState.accountStatus))
        })
      }
    }, {
      key: "checkForm",
      value: function(e) {
        e.preventDefault();
        var t = this.state,
          n = t.firstName,
          r = t.name,
          o = t.email,
          a = t.password,
          i = t.passwordConfirm,
          l = (t.errors, []);
        console.log(!o, !a), o ? this.validEmail(o) || (l = [].concat(p(l), ["Format email invalide."])) : l = [].concat(p(l), ["Email obligatoire."]), a || (l = [].concat(p(l), ["Mot de passe obligatoire."])), a !== i && (l = [].concat(p(l), ["Confirnation du mot de passe incorrecte."])), l.length || (sessionStorage.setItem("auth", JSON.stringify(this.state)), this.props.signUp(n, r, o, a)), this.setState({
          errors: [].concat(p(l))
        })
      }
    }, {
      key: "validEmail",
      value: function(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.state,
          n = t.firstName,
          r = t.name,
          o = t.email,
          c = t.password,
          u = t.passwordConfirm,
          d = t.errors;
        return l.default.createElement(i.Fragment, null, l.default.createElement("form", {
          className: "jsx-3315130402"
        }, l.default.createElement("div", {
          className: "jsx-3315130402 alert__msg"
        }, d.map(function(e, t) {
          return l.default.createElement(s.default, {
            key: t,
            error: e
          })
        })), l.default.createElement("input", {
          type: "text",
          value: n,
          onChange: function(t) {
            return e.setState({
              firstName: t.target.value
            })
          },
          placeholder: "Votre prénom",
          className: "jsx-3315130402"
        }), l.default.createElement("input", {
          type: "text",
          value: r,
          onChange: function(t) {
            return e.setState({
              name: t.target.value
            })
          },
          placeholder: "Votre nom",
          className: "jsx-3315130402"
        }), l.default.createElement("input", {
          type: "text",
          value: o,
          onChange: function(t) {
            return e.setState({
              email: t.target.value
            })
          },
          placeholder: "Votre email",
          className: "jsx-3315130402"
        }), l.default.createElement("input", {
          type: "password",
          value: c,
          onChange: function(t) {
            return e.setState({
              password: t.target.value
            })
          },
          placeholder: "Votre mot de passe",
          className: "jsx-3315130402"
        }), l.default.createElement("input", {
          type: "password",
          value: u,
          onChange: function(t) {
            return e.setState({
              passwordConfirm: t.target.value
            })
          },
          placeholder: "Confirmez le mot de passe",
          className: "jsx-3315130402"
        }), l.default.createElement("button", {
          onClick: function(t) {
            return e.checkForm(t)
          },
          className: "jsx-3315130402"
        }, "Créer un compte")), l.default.createElement(a.default, {
          id: "3315130402"
        }, ["form.jsx-3315130402{max-width:300px;}"]))
      }
    }]), t
  }();
  t.default = (0, c.connect)(function(e) {
    return {
      signUpState: e.signUpState
    }
  }, function(e) {
    return (0, d.bindActionCreators)(r({}, u), e)
  })(m)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.signUp = t.setAccountStatus = void 0;
  var r = n(74),
    o = (a(n(0)), a(n(10)), n(7), a(n(11)));
  n(15);

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var i = t.setAccountStatus = function(e) {
    return {
      type: "SET_ACCOUNT_STATUS",
      accountStatus: e
    }
  };
  t.signUp = function(e, t, n, a) {
    return function(l) {
      (0, r.fetchSignUp)(e, t, n, a).catch(function(e) {
        console.error("erreur server: ", e)
      }).then(function(e) {
        return setTimeout(function() {
          console.log(e), l(i(e.accountStatus)), e.created && o.default.push("/signIn")
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchSignUp = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchSignUp = function(e, t, n, r) {
    return a.default.post("signUp", {
      email: n,
      password: r,
      firstName: e,
      name: t
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = b(n(1)),
    i = n(0),
    l = b(i),
    s = n(7),
    c = b(n(12)),
    u = n(2),
    d = n(3),
    f = h(n(18)),
    p = h(n(6)),
    m = n(8),
    y = b(n(11));

  function h(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function b(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var g = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        initDone: !1,
        color: "rgba(0, 0, 0, .1)"
      }, n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        this.setState({
          initDone: !0
        })
      }
    }, {
      key: "delayRedirect",
      value: function(e) {
        console.log(e.target.pathname);
        var t = e.target.pathname;
        e.preventDefault(), setTimeout(function() {
          return y.default.push(t)
        }, 200)
      }
    }, {
      key: "render",
      value: function() {
        var e = this.state.color;
        return this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement("div", {
          className: "jsx-1382483915 dashboard"
        }, l.default.createElement("div", {
          className: "jsx-1382483915 dashboard-nav"
        }, l.default.createElement(c.default, {
          color: e
        }, l.default.createElement(s.Link, {
          to: "/newLeaf",
          onClick: this.delayRedirect
        }, m.I18n.t("app.dashboard.treeManager"))), l.default.createElement(c.default, {
          color: e
        }, l.default.createElement(s.Link, {
          to: "/deletePage",
          onClick: this.delayRedirect
        }, m.I18n.t("app.dashboard.deleteLeaf"))), l.default.createElement(c.default, {
          color: e
        }, l.default.createElement(s.Link, {
          to: "/",
          onClick: this.delayRedirect
        }, m.I18n.t("app.dashboard.designModification"))), l.default.createElement(c.default, {
          color: e
        }, l.default.createElement(s.Link, {
          to: "/",
          onClick: this.delayRedirect
        }, "Modifié droit utilisateur")))), l.default.createElement(a.default, {
          id: "1382483915"
        }, [".dashboard .dashboard-nav div{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:-webkit-inline-box !important;display:-webkit-inline-flex !important;display:-ms-inline-flexbox !important;display:inline-flex !important;margin-right:.5rem;-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,0.1),0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);box-shadow:inset 0 0 2px rgba(0,0,0,0.1),0 2px 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3);}"]))
      }
    }]), t
  }();
  t.default = (0, u.connect)(function(e) {
    return {
      results: e.results
    }
  }, function(e) {
    return (0, d.bindActionCreators)(r({}, f, p), e)
  })(g)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = S(n(1)),
    i = n(0),
    l = S(i),
    s = (S(n(10)), n(2)),
    c = n(3),
    u = E(n(13)),
    d = E(n(19)),
    f = E(n(6)),
    p = n(8),
    m = S(n(20)),
    y = (S(n(16)), S(n(21))),
    h = n(22),
    b = S(n(23)),
    g = S(n(24)),
    v = n(9),
    x = S(n(30)),
    w = S(n(12)),
    _ = n(7),
    k = n(31),
    O = S(n(17)),
    j = S(n(4));

  function E(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function S(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function C(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }(0, h.WidthProvider)(h.Responsive);
  var P = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.updateInput = n.updateInput.bind(n), n.gridItemFocus = n.gridItemFocus.bind(n), n.onAddNewBranch = n.onAddNewBranch.bind(n), n.state = {
        initDone: !1,
        scrolled: !1,
        hasChildrens: !1,
        ids: [],
        level: 1,
        titles: [],
        subtitle: [],
        contents: [],
        layouts: {
          lg: [],
          md: [],
          sm: [],
          xs: [],
          xxs: []
        }
      }, n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "onSetLeaf",
      value: function() {
        var e = this;
        this.props.setIsLoading(!0);
        var t = this.state,
          n = t.ids,
          r = t.titles,
          o = t.subtitle,
          a = t.layouts,
          i = t.contents,
          l = t.hasChildrens,
          s = t.level;
        r.map(function(t, c) {
          e.props.setLeaf(n[c] || null, r[c], o, a, i, s, l)
        })
      }
    }, {
      key: "onAddNewBranch",
      value: function() {
        var e = this.state.titles,
          t = new Object;
        t["" + this.state.locale] = p.I18n.t("app.newPage.addTitle"), this.setState({
          titles: [].concat(C(e), [t])
        })
      }
    }, {
      key: "gridItemFocus",
      value: function(e) {
        this.setState({
          focused: e
        })
      }
    }, {
      key: "componentDidMount",
      value: function() {
        var e = this.props,
          t = e.locale,
          n = e.getLeaves;
        sessionStorage.removeItem("layouts"), n(), this.setState({
          initDone: !0,
          locale: t
        })
      }
    }, {
      key: "componentDidUpdate",
      value: function(e, t) {
        var n = this,
          r = this.props,
          o = r.leaves,
          a = (r.locale, this.state);
        a.ids, a.titles;
        e.locale, e.leaves !== o && this.setState({
          titles: [],
          ids: []
        }, function() {
          o.map(function(e, t) {
            n.setState(function(t) {
              return {
                titles: [].concat(C(t.titles), [JSON.parse(e.title)]),
                ids: [].concat(C(t.ids), [e.id])
              }
            })
          })
        })
      }
    }, {
      key: "updateInput",
      value: function(e, t, n) {
        var r = this.state,
          o = r.titles;
        r.freezeUpdate, r.locale;
        if (t.indexOf("title-") > -1) {
          if ((0, m.default)(n) === p.I18n.t("app.newPage.translation")) return;
          if ((0, m.default)(n) === p.I18n.t("app.newPage.addTitle")) return;
          o ? o[Number(t.replace("title-", ""))]["" + this.state.locale] = n : (o[Number(t.replace("title-", ""))] = new Object, o[Number(t.replace("title-", ""))]["" + this.state.locale] = n), this.setState({
            titles: o
          })
        }
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.state,
          n = t.ids,
          r = t.titles,
          o = t.scrolled,
          s = t.focused,
          c = t.locale;
        t.layouts, t.contents;
        return console.log(r), console.log(n), this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement("div", {
          className: a.default.dynamic([
            ["3104871333", [j.default.primaryColor]]
          ]) + " grid-layouts-container"
        }, l.default.createElement("header", {
          className: a.default.dynamic([
            ["3104871333", [j.default.primaryColor]]
          ]) + " header-viewer"
        }, l.default.createElement("h2", {
          className: a.default.dynamic([
            ["3104871333", [j.default.primaryColor]]
          ])
        }, p.I18n.t("app.newPage.title") || ""), l.default.createElement(O.default, {
          onClick: this.onAddNewBranch,
          icon: l.default.createElement(v.Add, null),
          label: "Add new Tab"
        }), l.default.createElement(O.default, {
          onClick: function(t, n, r) {
            return e.onSetLeaf(t, n, r)
          },
          icon: l.default.createElement(v.Refresh, null),
          label: "Save website's tree"
        })), l.default.createElement("header", {
          className: a.default.dynamic([
            ["3104871333", [j.default.primaryColor]]
          ]) + " header-grid-layout-container"
        }, r.map(function(t, r) {
          return l.default.createElement("div", {
            key: r,
            className: a.default.dynamic([
              ["3104871333", [j.default.primaryColor]]
            ]) + " " + ((s === "title-" + r ? "title focused" : "title") || "")
          }, l.default.createElement(y.default, {
            index: "title-" + r,
            name: "title-" + r,
            updateInput: e.updateInput,
            gridItemFocus: e.gridItemFocus,
            content: t.hasOwnProperty("" + c) ? t["" + c] : p.I18n.t("app.newPage.translation")
          }), l.default.createElement(w.default, {
            color: j.default.ripplesColor
          }, l.default.createElement(_.Link, {
            to: "/page/" + n[r]
          }, l.default.createElement(x.default, {
            path: k.mdiArrowRightCircle
          }))))
        }), l.default.createElement(b.default, {
          onEnter: function(t) {
            t.viewportTop, t.event;
            e.setState({
              scrolled: !1
            })
          },
          onLeave: function(t) {
            t.viewportTop, t.event;
            e.setState({
              scrolled: !0
            })
          }
        })), l.default.createElement(g.default, {
          visible: o
        })), l.default.createElement(a.default, {
          id: "3104871333",
          dynamic: [j.default.primaryColor]
        }, [".header-viewer.__jsx-style-dynamic-selector{position:fixed;top:0;margin-bottom:1rem;width:100%;background:" + j.default.primaryColor + ";z-index:99999;}", ".grid-layouts-container.__jsx-style-dynamic-selector{margin-top:150px;}", ".grid-layouts-container.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{margin:0 .25rem;}", ".grid-layouts-container.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{border:1px dashed rgba(0,0,0,0.1);margin:1rem 5px;}", ".grid-layouts-container.__jsx-style-dynamic-selector .title.focused.__jsx-style-dynamic-selector{border:2px dashed rgba(0,0,0,0.1);}"]))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      leaves: e.leaves,
      locale: e.i18n.locale
    }
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, u, d, f), e)
  })(P)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchLeaves = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchLeaves = function() {
    return a.default.post("getLeaves").then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchSetLeaf = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchSetLeaf = function(e, t, n, r, o, i, l) {
    return a.default.post("setLeaf", {
      id: e,
      title: t,
      subtitle: n,
      layouts: r,
      contents: o,
      level: i,
      hasChildrens: l
    }).then(function(e) {
      return e.data.insertId
    })
  }
}, function(e, t) {
  e.exports = require("@tinymce/tinymce-react")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = h(n(1)),
    i = n(0),
    l = h(i),
    s = n(2),
    c = n(3),
    u = y(n(18)),
    d = y(n(6)),
    f = h(n(81)),
    p = h(n(21)),
    m = n(9);

  function y(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function h(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function b(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }
  var g = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var n = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return n.state = {
        initDone: !1,
        results: []
      }, n.update = n.update.bind(n), n.updateInput = n.updateInput.bind(n), n
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, l.default.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        console.log(this.props.history), this.props.loadResults(), this.setState({
          initDone: !0
        })
      }
    }, {
      key: "componentWillReceiveProps",
      value: function(e) {
        console.log(e), this.setState(function(t) {
          return {
            results: [].concat(b(t.results), b(e.results))
          }
        })
      }
    }, {
      key: "update",
      value: function(e) {
        e.preventDefault(), this.props.setIsLoading(!0), this.props.update(this.state.results)
      }
    }, {
      key: "updateInput",
      value: function(e, t, n) {
        console.log(n, e, t);
        var r = [].concat(b(this.state.results));
        r[e][t] = n, this.setState({
          results: r
        }), console.log(this.state.results)
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.props.results,
          n = {
            root: {
              "&$disabled": {
                color: "white"
              }
            },
            disabled: {}
          };
        return this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement("header", {
          className: "jsx-58255949 header-grid-layout-container"
        }), l.default.createElement("header", {
          className: "jsx-58255949 header-viewer"
        }), l.default.createElement(f.default, {
          params: {
            noSwiping: !0,
            shouldSwiperUpdate: !0,
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
              clickable: !0
            },
            navigation: {
              nextEl: ".swiper-button-next.swiper-button-white",
              prevEl: ".swiper-button-prev.swiper-button-white"
            },
            slidesPerView: 3,
            spaceBetween: 30,
            breakpoints: {
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 0
              }
            }
          }
        }, t.map(function(t, r) {
          return l.default.createElement("div", {
            key: r,
            className: "jsx-58255949"
          }, l.default.createElement("form", {
            method: "post",
            className: "jsx-58255949"
          }, l.default.createElement("div", {
            className: "jsx-58255949 refresh"
          }, l.default.createElement(m.Refresh, {
            style: n,
            onClick: function(t) {
              return e.update(t)
            }
          })), l.default.createElement(p.default, {
            index: r,
            name: "title",
            updateInput: e.updateInput,
            content: t.title
          })))
        })), l.default.createElement(a.default, {
          id: "58255949"
        }, ["div.jsx-58255949{min-height:300px;background:#9966e0;}", "form.jsx-58255949{position:relative;}", "form.jsx-58255949 .refresh.jsx-58255949{position:absolute;right:.5rem;top:.5rem;cursor:pointer;color:rgba(0,0,0,0.26);z-index:1;}"]))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      results: e.results
    }
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, u, d), e)
  })(g)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    o = i(n(0)),
    a = i(n(82));
  i(n(4));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, o.default.Component), r(t, [{
      key: "render",
      value: function() {
        var e = this.props.params;
        return console.log(e), o.default.createElement(a.default, e, this.props.children)
      }
    }]), t
  }();
  t.default = l
}, function(e, t) {
  e.exports = require("react-id-swiper/lib/custom")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = y(n(1)),
    i = n(0),
    l = y(i),
    s = n(2),
    c = n(3),
    u = m(n(84)),
    d = m(n(13)),
    f = n(8),
    p = n(9);
  y(n(4));

  function m(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function y(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var h = function(e) {
    function t() {
      return function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, i.Component), o(t, [{
      key: "componentDidMount",
      value: function() {
        this.props.getLeaves()
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = this.props,
          n = t.leaves,
          r = t.locale;
        return l.default.createElement(i.Fragment, null, n.map(function(t, n) {
          return l.default.createElement("li", {
            key: n,
            className: "jsx-3429303917"
          }, l.default.createElement("div", {
            className: "jsx-3429303917 remove"
          }, l.default.createElement(p.Delete, {
            onClick: function() {
              return e.props.deleteLeaf(t.id)
            }
          })), l.default.createElement("span", {
            dangerouslySetInnerHTML: {
              __html: JSON.parse(t.title) ? JSON.parse(t.title).hasOwnProperty("" + r) ? JSON.parse(t.title)["" + r] : f.I18n.t("app.nav.translation") : f.I18n.t("app.nav.addTitle")
            },
            className: "jsx-3429303917"
          }))
        }), l.default.createElement(a.default, {
          id: "3429303917"
        }, ["li.jsx-3429303917{position:relative;}", "li.jsx-3429303917 .remove.jsx-3429303917{position:absolute;right:1.5rem;top:1.5em;z-index:1;cursor:pointer;color:rgba(0,0,0,0.26);}"]))
      }
    }]), t
  }();
  t.default = (0, s.connect)(function(e) {
    return {
      leaves: e.leaves,
      locale: e.i18n.locale
    }
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, d, u), e)
  })(h)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.deleteLeaf = void 0;
  var r = n(85),
    o = n(13);
  t.deleteLeaf = function(e) {
    return function(t) {
      return (0, r.fetchDeleteLeaf)(e).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {
          t((0, o.getLeaves)())
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchDeleteLeaf = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchDeleteLeaf = function(e) {
    return a.default.post("deleteLeaf", {
      id: e
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = P(n(1)),
    i = n(0),
    l = P(i),
    s = (P(n(10)), n(2)),
    c = n(3),
    u = C(n(14)),
    d = C(n(87)),
    f = C(n(19)),
    p = C(n(89)),
    m = C(n(6)),
    y = C(n(25)),
    h = n(8),
    b = P(n(20)),
    g = (P(n(16)), P(n(21))),
    v = n(22),
    x = P(n(23)),
    w = P(n(24)),
    _ = P(n(33)),
    k = n(9),
    O = P(n(12)),
    j = P(n(17)),
    E = n(91),
    S = P(n(4));

  function C(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function P(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function L(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }
  var M = n(92),
    T = (0, v.WidthProvider)(v.Responsive),
    N = function(e) {
      function t(e) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.updateInput = n.updateInput.bind(n), n.onAddItem = n.onAddItem.bind(n), n.gridItemFocus = n.gridItemFocus.bind(n), n.setItemHeigth = n.setItemHeigth.bind(n), n.setDragPosition = n.setDragPosition.bind(n), n.checkAllBreakpointAndUpdate = n.checkAllBreakpointAndUpdate.bind(n), n.addSubtitle = n.addSubtitle.bind(n), n.state = {
          initDone: !1,
          scrolled: !1,
          id: null,
          parentId: null,
          childrenId: null,
          hasChildrens: !1,
          level: 1,
          title: null,
          parenTitle: null,
          subtitle: [],
          contents: [],
          breakpoints: {
            lg: 1200,
            md: 996,
            sm: 768,
            xs: 480,
            xxs: 320
          },
          cols: {
            lg: 12,
            md: 10,
            sm: 6,
            xs: 4,
            xxs: 2
          },
          layouts: {
            lg: [],
            md: [],
            sm: [],
            xs: [],
            xxs: []
          },
          y: 0,
          focused: null
        }, n
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, l.default.Component), o(t, [{
        key: "componentDidMount",
        value: function() {
          var e = this.props,
            t = e.match.params,
            n = t.id,
            r = t.childrenId,
            o = e.getLeaf,
            a = e.getChildrenLeafById;
          this.setState({
            id: n,
            childrenId: r,
            key: M.generate(),
            initDone: !0
          }), r ? a(r) : o(n)
        }
      }, {
        key: "componentDidUpdate",
        value: function(e, t) {
          var n = this,
            r = this.props,
            o = r.match.params,
            a = o.id,
            i = o.childrenId,
            l = r.leaf,
            s = r.childrenLeaf,
            c = r.locale,
            u = r.currentBreakpoint,
            d = r.getLeaf,
            f = r.getChildrenLeafById,
            p = r.setLeaf,
            m = r.setChildrenLeaf,
            y = this.state,
            h = (y.parentId, y.title),
            b = y.subtitle,
            g = y.contents,
            v = y.layouts,
            x = y.breakpoints;
          if (void 0 === e) return !1;
          this.state.id === a && this.state.childrenId === i || (console.log(this.state.id, a, i), this.setState({
            id: a,
            childrenId: i
          }, function() {
            console.log(a, i), i ? f(i) : d(a)
          })), e.locale !== c && (this.props.setIsLoading(!0), window.location.reload(), i ? m(i, a, h, b, v, g, l.level) : p(a, h, b, v, g, l.level, hasChildrens), i ? f(i) : d(a)), i || e.leaf === l ? i && e.childrenLeaf !== s && (console.log("leaf updated"), s.layouts && this.setState({
            title: JSON.parse(s.title),
            parenTitle: l.title,
            subtitle: JSON.parse(s.subtitle) || [],
            layouts: JSON.parse(s.layouts),
            contents: JSON.parse(s.contents),
            parentId: s.parentId,
            level: s.level
          })) : (console.log("leaf updated"), l.layouts && this.setState({
            title: JSON.parse(l.title),
            subtitle: JSON.parse(l.subtitle) || [],
            layouts: JSON.parse(l.layouts),
            contents: JSON.parse(l.contents),
            level: l.level,
            hasChildrens: l.hasChildrens
          })), e.currentBreakpoint !== u && (document.querySelector("#view-content").style.maxWidth = x[u] + 100 + "px", window.dispatchEvent(new Event("resize")), setTimeout(function() {
            n.setItemHeigth()
          }, 2e3), console.log("currentBreakpoint changed"))
        }
      }, {
        key: "onLayoutChange",
        value: function(e, t) {
          var n = this;
          console.log("layouts changed"), this.setState({
            layouts: t
          }, function() {
            n.onSetLeaf(!0)
          })
        }
      }, {
        key: "setItemHeigth",
        value: function() {
          var e = this;
          this.state.contents.length > 0 && function() {
            var t = e.props,
              n = (t.match.params.id, t.leaf, t.currentBreakpoint),
              r = e.state,
              o = r.layouts,
              a = (r.focused, 0),
              i = [],
              l = void 0,
              s = function(t) {
                var r = t.querySelector(".mce-content-body").clientHeight;
                Object.keys(o).map(function(t, s) {
                  o[t][a] && n === t && (r < 200 ? (l = 20 - o[n][a].h, o[t][a].h = 20, console.log(l), i = [].concat(L(i), [{
                    tag: document.querySelectorAll(".react-grid-item")[a],
                    height: "200px"
                  }])) : (console.log(o[t][a].h, Math.round(.1 * r) + 6), l = Math.round(.1 * r) + 6 - o[n][a].h, o[t][a].h = Math.round(.1 * r) + 6, console.log(l, "::::::::::::::::::"), i = [].concat(L(i), [{
                    tag: document.querySelectorAll(".react-grid-item")[a],
                    height: r + 60 + "px"
                  }])), e.setDragPosition(a, l))
                }), a++
              },
              c = !0,
              u = !1,
              d = void 0;
            try {
              for (var f, p = document.querySelectorAll(".react-draggable")[Symbol.iterator](); !(c = (f = p.next()).done); c = !0) {
                s(f.value)
              }
            } catch (e) {
              u = !0, d = e
            } finally {
              try {
                !c && p.return && p.return()
              } finally {
                if (u) throw d
              }
            }
            var m = i.map(function(e, t) {
              e.tag.style.height = e.height, e.tag.style.background = "white"
            });
            Promise.all(m).then(function() {
              e.onLayoutChange(null, o), console.log("done")
            })
          }()
        }
      }, {
        key: "setDragPosition",
        value: function(e, t) {
          console.log(t);
          var n = this.props.currentBreakpoint,
            r = this.state.layouts,
            o = [];
          if (null !== e) {
            var a = r[n][e].x,
              i = r[n][e].x + r[n][e].w,
              l = r[n][e].y;
            r[n].forEach(function(e, s) {
              var c = r[n][s].x,
                u = r[n][s].x + r[n][s].w,
                d = r[n][s].y;
              if (l !== d && (a < c && c < i && i < u || c < a && a < u && u < i || a < c && c < i && u < i || a === c && i === u) && l < d) {
                var f = t + r[n][s].y;
                console.log("item to drop: " + s, f, t), o = [].concat(L(o), [{
                  tag: document.querySelectorAll(".react-grid-item")[s],
                  transform: 10 * f
                }])
              }
            })
          }
          var s = o.map(function(e, t) {
            for (var n = "#", r = 0; r < 6; r++) n += "0123456789ABCDEF" [Math.floor(16 * Math.random())];
            setTimeout(function() {
              var t = e.tag.style.transform;
              console.log(t);
              var r = t.indexOf(",");
              t = t.slice(0, r) + ", " + e.transform + "px", console.log(t), e.tag.style.transform = t, e.tag.style.background = n
            }, 0)
          });
          console.log(s)
        }
      }, {
        key: "addSubtitle",
        value: function() {
          var e, t, n, r = this,
            o = this.props,
            a = o.match.params,
            i = a.id,
            l = (a.childrenId, o.setLeaf),
            s = o.setChildrenLeaf,
            c = this.state,
            u = (c.parentId, c.title),
            d = c.subtitle,
            f = c.layouts,
            p = c.contents,
            m = c.level,
            y = c.hasChildrens;
          this.setState({
            subtitle: [].concat(L(d), [(e = {}, t = this.props.locale, n = h.I18n.t("app.newPage.addSubTitle"), t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e)]),
            hasChildrens: !0
          }, function() {
            console.log(d.slice(-1)[0]), s(null, i, [r.state.subtitle.slice(-1)[0]], [], {
              lg: [],
              md: [],
              sm: [],
              xs: [],
              xxs: []
            }, [], m + 1), l(i, u, d, f, p, m, y)
          })
        }
      }, {
        key: "updateInput",
        value: function(e, t, n) {
          var r = this,
            o = this.state,
            a = o.contents,
            i = o.title,
            l = o.subtitle,
            s = (o.breakpoints, o.freezeUpdate);
          o.layouts, this.props.currentBreakpoint;
          if ("title" === t) {
            if ((0, b.default)(n) === h.I18n.t("app.newPage.translation")) return;
            if ((0, b.default)(n) === h.I18n.t("app.newPage.addTitle")) return;
            i ? i["" + this.props.locale] = n : (i = new Object)["" + this.props.locale] = n, console.log(n), this.setState({
              title: i
            }, function() {
              console.log(r.state.title), r.onSetLeaf(!1)
            })
          }
          if (t.indexOf("subtitle-") > -1) {
            if ((0, b.default)(n) === h.I18n.t("app.newPage.translation")) return;
            if ((0, b.default)(n) === h.I18n.t("app.newPage.addTitle")) return;
            l.length > 0 ? l[Number(t.replace("subtitle-", ""))]["" + this.props.locale] = n : (l = [new Object])[0]["" + this.props.locale] = n, this.setState({
              subtitle: l
            })
          }
          if ("content" === t) {
            if ((0, b.default)(n) === h.I18n.t("app.newPage.draft")) return;
            if ((0, b.default)(n) === h.I18n.t("app.newPage.translation")) return;
            if (a[e]) a[e]["" + this.props.locale] = n;
            else {
              if (s) return void this.setState({
                freezeUpdate: !1
              });
              a[e] = new Object, a[e]["" + this.props.locale] = n
            }
            this.setState({
              contents: a
            }, function() {
              r.setItemHeigth(), console.log("item updated")
            })
          }
        }
      }, {
        key: "onAddItem",
        value: function() {
          var e = this,
            t = this.state.layouts;
          Object.keys(this.state.layouts).map(function(n, r) {
            t[n] = [].concat(L(t[n]), [{
              w: 2,
              h: 20,
              x: 2 * t[n].length % e.state.cols[n],
              y: 0,
              i: t[n].length.toString(),
              moved: !1,
              static: !1
            }]), 2 * t[n].length % e.state.cols[n] == 0 && e.setState({
              y: e.state.y + 20
            })
          }), this.setState({
            layouts: t
          }, function() {
            console.log("item added")
          })
        }
      }, {
        key: "onRemoveItem",
        value: function(e) {
          var t = this.state,
            n = t.layouts,
            r = t.contents;
          this.props.locale;
          Object.keys(this.state.layouts).map(function(t, r) {
            n[t].splice(e, 1), n[t].map(function(e, t) {
              e.i = t.toString()
            })
          }), r.splice(e, 1), this.setState({
            freezeUpdate: !0,
            contents: r,
            layouts: n
          }, function() {
            console.log("item removed")
          })
        }
      }, {
        key: "onSetLeaf",
        value: function(e) {
          this.props.setIsLoading(e);
          var t = this.props,
            n = t.match.params,
            r = n.id,
            o = n.childrenId,
            a = t.setLeaf,
            i = t.setChildrenLeaf,
            l = this.state,
            s = (l.parentId, l.title),
            c = l.subtitle,
            u = l.layouts,
            d = l.contents,
            f = l.level,
            p = l.hasChildrens;
          console.log(o, s), o ? i(o, r, s, c, u, d, f) : a(r, s, c, u, d, f, p)
        }
      }, {
        key: "gridItemFocus",
        value: function(e) {
          this.setState({
            focused: e
          })
        }
      }, {
        key: "changeBreakpoint",
        value: function(e) {
          console.log("breakpoint changed"), this.props.setCurrentBreakpoint(e)
        }
      }, {
        key: "checkAllBreakpointAndUpdate",
        value: function() {
          for (var e = this, t = this.state.layouts, n = function(n) {
              setTimeout(function() {
                console.log(Object.keys(t)[n], n), e.props.setCurrentBreakpoint(Object.keys(t)[n])
              }, 2500 * n)
            }, r = 0; r < Object.keys(t).length; r++) n(r)
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = this.state,
            n = t.layouts,
            r = t.cols,
            o = t.breakpoints,
            s = t.checkedViews,
            c = t.parentTitle,
            u = t.title,
            d = t.subtitle,
            f = t.scrolled,
            p = t.contents,
            m = t.focused,
            y = (t.alerts, t.key),
            b = this.props,
            v = b.locale,
            C = (b.leaf, b.childrenLeaf, b.currentBreakpoint),
            P = this.props.match.params,
            L = (P.id, P.childrenId);
          return this.state.initDone && l.default.createElement(i.Fragment, {
            key: y
          }, l.default.createElement("div", {
            className: a.default.dynamic([
              ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
            ]) + " grid-layouts-container"
          }, l.default.createElement("header", {
            className: a.default.dynamic([
              ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
            ]) + " header-viewer"
          }, l.default.createElement("h2", {
            className: a.default.dynamic([
              ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
            ])
          }, h.I18n.t("app.newPage.title") || ""), l.default.createElement(O.default, {
            color: S.default.ripplesColor
          }, l.default.createElement(j.default, {
            syntheticEvent: this.onAddItem,
            icon: l.default.createElement(k.Add, null),
            label: "Add Item",
            className: "add-btn"
          })), l.default.createElement(O.default, {
            color: S.default.ripplesColor
          }, l.default.createElement(j.default, {
            syntheticEvent: function(t, n, r) {
              return e.checkAllBreakpointAndUpdate()
            },
            icon: l.default.createElement(k.Refresh, null),
            label: "Save",
            className: "refresh-btn"
          })), l.default.createElement("h3", {
            className: a.default.dynamic([
              ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
            ])
          }, h.I18n.t("app.newPage.resolutions")), l.default.createElement("pre", {
            className: a.default.dynamic([
              ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
            ])
          }, "\n                  @viewport {\n                    width: device-width;\n                  }\n                "), Object.entries(o).map(function(t, n) {
            return l.default.createElement("button", {
              key: n,
              onClick: function() {
                return e.changeBreakpoint(t[0], t[1])
              },
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ]) + " " + ((C === "" + t[0] ? "btn-focused " + t[0] : "" + t[0]) || "")
            }, l.default.createElement(k.DesktopWindows, null), t[1], s && s["" + t[0]] ? l.default.createElement(k.Done, null) : null, C === "" + t[0] ? l.default.createElement(_.default, {
              isLoading: !0,
              size: 13
            }) : null)
          })), l.default.createElement("header", {
            className: a.default.dynamic([
              ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
            ]) + " header-grid-layout-container"
          }, l.default.createElement(g.default, {
            index: "parenttitle",
            name: "parenttitle",
            updateInput: this.updateInput,
            gridItemFocus: this.gridItemFocus,
            content: c ? c.hasOwnProperty("" + v) ? c["" + v] : h.I18n.t("app.newPage.translation") : h.I18n.t("app.newPage.addTitle")
          }), l.default.createElement(x.default, {
            onEnter: function(t) {
              t.viewportTop, t.event;
              e.setState({
                scrolled: !1
              })
            },
            onLeave: function(t) {
              t.viewportTop, t.event;
              e.setState({
                scrolled: !0
              })
            }
          }), l.default.createElement("div", {
            className: a.default.dynamic([
              ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
            ]) + " " + (("title" === m ? "title focused" : "title") || "")
          }, l.default.createElement(g.default, {
            index: "title",
            name: "title",
            updateInput: this.updateInput,
            gridItemFocus: this.gridItemFocus,
            content: u ? u.hasOwnProperty("" + v) ? u["" + v] : h.I18n.t("app.newPage.translation") : h.I18n.t("app.newPage.addTitle")
          })), L ? null : d.map(function(t, n) {
            return l.default.createElement("div", {
              key: n,
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ]) + " " + ((m === "subtitle-" + n ? "subtitle focused" : "subtitle") || "")
            }, l.default.createElement(g.default, {
              index: "subtitle-" + n,
              name: "subtitle",
              updateInput: e.updateInput,
              gridItemFocus: e.gridItemFocus,
              content: t ? t.hasOwnProperty("" + v) ? t["" + v] : h.I18n.t("app.newPage.translation") : h.I18n.t("app.newPage.addSubTitle")
            }))
          }), l.default.createElement(O.default, {
            color: S.default.ripplesColor
          }, l.default.createElement(j.default, {
            syntheticEvent: this.addSubtitle,
            icon: l.default.createElement(k.Add, null),
            label: "Add subtitle"
          }))), l.default.createElement(T, {
            autoSize: !0,
            rowHeight: 10,
            margin: [0, 0],
            isResizable: !0,
            isDraggable: !0,
            useCSSTransforms: !0,
            draggableCancel: ".mce-content-body",
            cols: r,
            breakpoints: o,
            layouts: n,
            onWidthChange: function() {
              return null
            },
            onLayoutChange: function(t, n) {
              return e.onLayoutChange(t, n)
            }
          }, C ? n[C].map(function(t, n) {
            return l.default.createElement("div", {
              key: t.i,
              "data-grid": {
                x: t.x,
                y: t.y,
                w: t.w,
                h: t.h
              },
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ]) + " " + ((m === n ? "focused" : null) || "")
            }, l.default.createElement("div", {
              ref: function(t) {
                e[n] = t
              },
              onMouseMove: function(t) {
                return (0, E.matrixEffect)(t, e[n])
              },
              onMouseOut: function() {
                return (0, E.onMouseOut)(e[n])
              },
              onKeyUpCapture: function() {
                return setTimeout(function() {
                  e.setItemHeigth()
                }, 0)
              },
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ]) + " item"
            }, l.default.createElement("div", {
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ]) + " remove"
            }, l.default.createElement(k.DeleteOutlined, {
              fontSize: "small",
              onClick: e.onRemoveItem.bind(e, n)
            }), l.default.createElement("div", {
              style: {
                color: "#333333",
                background: "#eeeeee",
                padding: 14
              },
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ])
            }, "item: " + t.i, " ", l.default.createElement("br", {
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ])
            }), "width: " + t.w, " ", l.default.createElement("br", {
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ])
            }), "height: " + t.h, " ", l.default.createElement("br", {
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ])
            }), "y: " + t.y, " ", l.default.createElement("br", {
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ])
            }), "x: " + t.x, " ", l.default.createElement("br", {
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ])
            }), "maxX: " + (t.x + t.w), " ", l.default.createElement("br", {
              className: a.default.dynamic([
                ["2034648266", [S.default.primaryColor, S.default.mceBackground]]
              ])
            }), Object.keys(o).find(function(e) {
              return o[e] === C
            }))), l.default.createElement(g.default, {
              setItemHeigth: e.setItemHeigth,
              index: n,
              name: "content",
              updateInput: e.updateInput,
              gridItemFocus: e.gridItemFocus,
              content: p[n] ? p[n].hasOwnProperty("" + v) ? p[n]["" + v] : h.I18n.t("app.newPage.translation") : h.I18n.t("app.newPage.draft")
            })))
          }) : null), l.default.createElement(w.default, {
            visible: f
          })), l.default.createElement(a.default, {
            id: "2034648266",
            dynamic: [S.default.primaryColor, S.default.mceBackground]
          }, [".arrow.__jsx-style-dynamic-selector{position:absolute;fontSize:7px;width:3em;height:3em;}", ".arrow.__jsx-style-dynamic-selector::before{content:'';margin:auto;display:block;width:0;height:0;borderStyle:solid;}", ".header-viewer.__jsx-style-dynamic-selector{position:fixed;top:0;margin-bottom:1rem;width:100%;background:" + S.default.primaryColor + ";z-index:99999;}", ".grid-layouts-container.__jsx-style-dynamic-selector{margin-top:300px;}", ".grid-layouts-container.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{margin:0 .25rem;}", ".grid-layouts-container.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{border:1px dashed rgba(0,0,0,0.1);margin:1rem 5px;}", ".grid-layouts-container.__jsx-style-dynamic-selector .title.focused.__jsx-style-dynamic-selector{border:2px dashed rgba(0,0,0,0.1);}", ".grid-layouts-container.__jsx-style-dynamic-selector .subtitle.__jsx-style-dynamic-selector{border:1px dashed rgba(0,0,0,0.1);margin:1rem 5px;max-width:50%;}", ".grid-layouts-container.__jsx-style-dynamic-selector .subtitle.focused.__jsx-style-dynamic-selector{border:2px dashed rgba(0,0,0,0.1);}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector{-webkit-perspective:800px;-webkit-perspective:800px;-moz-perspective:800px;-ms-perspective:800px;perspective:800px;-webkit-perspective-origin:center;-webkit-perspective-origin:center;-moz-perspective-origin:center;-ms-perspective-origin:center;perspective-origin:center;}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.focused.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{border:2px dashed rgba(0,0,0,0.1);}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{background:" + S.default.mceBackground + ";border:1px dashed rgba(0,0,0,0.1);margin:15px 5px;height:calc(100% - 1rem);-webkit-transition:height 100ms linear;-webkit-transition:height 100ms linear;transition:height 100ms linear;overflow:hidden;-webkit-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector:hover{-webkit-transition:all .15s ease;-webkit-transition:all .15s ease;transition:all .15s ease;}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector .remove.__jsx-style-dynamic-selector{position:absolute;right:.5rem;top:1.5em;z-index:1;cursor:pointer;color:rgba(0,0,0,0.26);}"]))
        }
      }]), t
    }();
  t.default = (0, s.connect)(function(e) {
    return r({}, e, {
      locale: e.i18n.locale
    })
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, u, d, f, p, m, y), e)
  })(N)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getChildrenLeaf = t.getChildrenLeafById = t.setChildrenLeaf = void 0;
  var r = n(88),
    o = t.setChildrenLeaf = function(e) {
      return {
        type: "SET_CHILDREN_LEAF",
        results: e
      }
    };
  t.getChildrenLeafById = function(e) {
    return function(t) {
      return (0, r.fetchGetChildrenLeafById)(e).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        console.log(e), t(o(e))
      })
    }
  }, t.getChildrenLeaf = function(e) {
    return function(t) {
      return (0, r.fetchGetChildrenLeaf)(e).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {})
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchGetChildrenLeaf = t.fetchGetChildrenLeafById = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchGetChildrenLeafById = function(e) {
    return a.default.post("getChildrenLeafById", {
      id: e
    }).then(function(e) {
      return e.data
    })
  }, t.fetchGetChildrenLeaf = function(e) {
    return a.default.post("getChildrenLeaf", {
      parentId: e
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setChildrenLeaf = void 0;
  var r, o = n(90),
    a = n(6),
    i = n(27),
    l = n(11);
  (r = l) && r.__esModule;
  t.setChildrenLeaf = function(e, t, n, r, l, s, c) {
    return function(u) {
      return (0, o.fetchSetChildrenLeaf)(e, t, n, r, l, s, c).catch(function(e) {
        return console.error("erreur server: ", e), []
      }).then(function(e) {
        return setTimeout(function() {
          u((0, i.getChildrenLeaves)()), setTimeout(function() {
            u((0, a.setIsLoading)(!1))
          }, 1e3)
        }, 0)
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchSetChildrenLeaf = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchSetChildrenLeaf = function(e, t, n, r, o, i, l) {
    return a.default.post("setChildrenLeaf", {
      id: e,
      parentId: t,
      title: n,
      subtitle: r,
      layouts: o,
      contents: i,
      level: l
    }).then(function(e) {
      return e.data
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.matrixEffect = function(e, t) {
    var n = e.pageX - t.getBoundingClientRect().left - window.scrollX,
      o = e.pageY - t.getBoundingClientRect().top - window.scrollY,
      a = t.clientWidth,
      i = t.clientHeight;
    console.log(t.clientWidth, t.clientHeight, t.offsetLeft, t.offsetTop);
    var l = (n += -.5 * a) / 1e6,
      s = (o += -.5 * i) / 1e6;
    t.addEventListener("mousemove", r(t, l, s))
  };
  var r = function(e, t, n) {
    e.style.transform = "matrix3d(1.025,0,0," + -t + ",0,1.025,0," + -n + ",0,0,1,0,0,0,0,1)"
  };
  t.onMouseOut = function(e) {
    e.style.transform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", e.removeEventListener("mousemove", r)
  }
}, function(e, t) {
  e.exports = require("shortid")
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    a = x(n(1)),
    i = n(0),
    l = x(i),
    s = (x(n(10)), n(2)),
    c = n(3),
    u = v(n(14)),
    d = v(n(19)),
    f = v(n(6)),
    p = n(8),
    m = (x(n(20)), x(n(16)), n(22)),
    y = x(n(23)),
    h = x(n(24)),
    b = (x(n(33)), n(9), v(n(25))),
    g = x(n(4));

  function v(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function x(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var w = (0, m.WidthProvider)(m.Responsive),
    _ = function(e) {
      function t(e) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.state = {
          initDone: !1,
          scrolled: !1,
          id: null,
          title: null,
          contents: [],
          breakpoints: {
            lg: 1200,
            md: 996,
            sm: 768,
            xs: 480,
            xxs: 320
          },
          cols: {
            lg: 12,
            md: 10,
            sm: 6,
            xs: 4,
            xxs: 2
          },
          layouts: {
            lg: [],
            md: [],
            sm: [],
            xs: [],
            xxs: []
          }
        }, n.setItemHeigth = n.setItemHeigth.bind(n), n
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, l.default.Component), o(t, [{
        key: "componentDidMount",
        value: function() {
          var e = this.props.match.params.id;
          this.props.getLeaf(e), this.setState({
            id: e,
            initDone: !0
          })
        }
      }, {
        key: "componentDidUpdate",
        value: function(e, t) {
          var n = this,
            r = this.props,
            o = r.match.params.id,
            a = r.leaf,
            i = (r.locale, r.currentBreakpoint),
            l = this.state,
            s = (l.title, l.contents, l.layouts, l.breakpoints);
          if (void 0 === e) return !1;
          this.state.id !== o && this.setState({
            id: o
          }, function() {
            n.props.getLeaf(o)
          }), e.locale, e.leaf !== a && a.layouts && this.setState({
            title: JSON.parse(a.title),
            layouts: JSON.parse(a.layouts),
            contents: JSON.parse(this.props.leaf.contents)
          }), e.currentBreakpoint !== i && (document.querySelector("#view-content").style.maxWidth = s[i] + 60 + "px", window.dispatchEvent(new Event("resize")), setTimeout(function() {
            n.setItemHeigth()
          }, 1e3))
        }
      }, {
        key: "setItemHeigth",
        value: function() {
          var e = this;
          this.state.contents.length > 0 && function() {
            var t = e.props,
              n = (t.leaf, t.currentBreakpoint),
              r = e.state.layouts,
              o = 0,
              a = function(e) {
                var t = e.childNodes[0].childNodes[0].clientHeight;
                Object.keys(r).map(function(e, a) {
                  r[e][o] && (n !== e || (Math.round(.1 * t) < 20 ? (20 - r[e][o].h, r[e][o].h = 20) : (Math.round(.1 * t) + 6 - r[e][o].h, r[e][o].h = Math.round(.1 * t) + 6)))
                }), o++
              },
              i = !0,
              l = !1,
              s = void 0;
            try {
              for (var c, u = document.querySelectorAll(".react-grid-item")[Symbol.iterator](); !(i = (c = u.next()).done); i = !0) {
                a(c.value)
              }
            } catch (e) {
              l = !0, s = e
            } finally {
              try {
                !i && u.return && u.return()
              } finally {
                if (l) throw s
              }
            }
            e.setState({
              layouts: r
            }, function() {
              e.onSetLeaf(!1), console.log("item resized"), console.log(e.state.layouts)
            })
          }()
        }
      }, {
        key: "onLayoutChange",
        value: function(e, t) {
          console.log("layouts changed"), this.setState({
            layouts: t
          })
        }
      }, {
        key: "onSetLeaf",
        value: function(e) {
          this.props.setIsLoading(e);
          var t = this.props,
            n = t.match.params.id,
            r = (t.getLeaf, t.setLeaf),
            o = (t.setCurrentBreakpoint, t.currentBreakpoint, this.state),
            a = o.title,
            i = o.layouts,
            l = o.contents;
          o.breakpoints;
          r(n, a, i, l)
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = this.state,
            n = t.layouts,
            r = t.cols,
            o = t.breakpoints,
            s = (t.checkedViews, t.title),
            c = t.scrolled,
            u = t.contents,
            d = t.focused,
            f = (t.alerts, this.props),
            m = f.locale,
            b = (f.leaf, f.currentBreakpoint),
            v = this.props;
          v.match.params.id, v.getLeaf, v.setLeaf;
          return console.log(n), this.state.initDone && l.default.createElement(i.Fragment, null, l.default.createElement("div", {
            className: a.default.dynamic([
              ["1430094150", [g.default.background]]
            ]) + " grid-layouts-container"
          }, o[b], l.default.createElement("header", {
            className: a.default.dynamic([
              ["1430094150", [g.default.background]]
            ]) + " header-grid-layout-container"
          }, l.default.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: s ? s.hasOwnProperty("" + m) ? s["" + m] : p.I18n.t("app.newPage.translation") : p.I18n.t("app.newPage.addTitle")
            },
            className: a.default.dynamic([
              ["1430094150", [g.default.background]]
            ]) + " title"
          }), l.default.createElement(y.default, {
            onEnter: function(t) {
              t.viewportTop, t.event;
              e.setState({
                scrolled: !1
              })
            },
            onLeave: function(t) {
              t.viewportTop, t.event;
              e.setState({
                scrolled: !0
              })
            }
          })), l.default.createElement(w, {
            autoSize: !0,
            rowHeight: 10,
            margin: [0, 0],
            isResizable: !1,
            isDraggable: !1,
            useCSSTransforms: !0,
            cols: r,
            breakpoints: o,
            layouts: n,
            onLayoutChange: function(t, n) {
              return e.onLayoutChange(t, n)
            },
            onWidthChange: function() {
              return setTimeout(function() {
                console.log("width changed")
              }, 1e3)
            }
          }, b ? n[b].map(function(e, t) {
            return l.default.createElement("div", {
              key: t,
              "data-grid": {
                x: e.x,
                y: e.y,
                w: e.w,
                h: e.h
              },
              className: a.default.dynamic([
                ["1430094150", [g.default.background]]
              ]) + " " + ((d === t ? "focused" : null) || "")
            }, l.default.createElement("div", {
              className: a.default.dynamic([
                ["1430094150", [g.default.background]]
              ]) + " item"
            }, l.default.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: u[t] ? u[t].hasOwnProperty("" + m) ? u[t]["" + m] : p.I18n.t("app.newPage.translation") : p.I18n.t("app.newPage.draft")
              },
              className: a.default.dynamic([
                ["1430094150", [g.default.background]]
              ]) + " item-content"
            })))
          }) : null), l.default.createElement(h.default, {
            visible: c
          })), l.default.createElement(a.default, {
            id: "1430094150",
            dynamic: [g.default.background]
          }, [".grid-layouts-container.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{margin:0 .25rem;}", ".grid-layouts-container.__jsx-style-dynamic-selector .title.__jsx-style-dynamic-selector{border:1px dashed rgba(0,0,0,0.1);margin:1rem 5px;}", ".grid-layouts-container.__jsx-style-dynamic-selector .title.focused.__jsx-style-dynamic-selector{border:2px dashed rgba(0,0,0,0.1);}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.focused.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{border:2px dashed rgba(0,0,0,0.1);}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector{background:" + g.default.background + ";border:1px dashed rgba(0,0,0,0.1);margin:20px 5px;height:calc(100% - 1rem);overflow:hidden;}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector .item-alert.__jsx-style-dynamic-selector{display:none;}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector .item-alert.visible.__jsx-style-dynamic-selector{position:absolute;top:20px;left:5px;right:5px;bottom:-4px;padding:1rem;background:rgba(0,0,0,0.1);display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector .item-alert.visible.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;font-size:1.5rem;}", ".grid-layouts-container.__jsx-style-dynamic-selector .react-grid-item.__jsx-style-dynamic-selector .item.__jsx-style-dynamic-selector .remove.__jsx-style-dynamic-selector{position:absolute;right:.5rem;top:1.5em;z-index:1;cursor:pointer;color:rgba(0,0,0,0.26);}"]))
        }
      }]), t
    }();
  t.default = (0, s.connect)(function(e) {
    return {
      leaf: e.leaf,
      locale: e.i18n.locale,
      currentBreakpoint: e.currentBreakpoint
    }
  }, function(e) {
    return (0, c.bindActionCreators)(r({}, u, d, f, b), e)
  })(_)
}, function(e, t, n) {
  "use strict";
  e.exports = function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
      var r = (new Date).getTime(),
        o = Math.max(0, 16 - (r - e)),
        a = window.setTimeout(function() {
          t(r + o)
        }, o);
      return e = r + o, a
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
      clearTimeout(e)
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function() {
    var e = document.getElementById("canvas"),
      t = e.getContext("2d"),
      n = window.innerWidth / 2,
      r = window.innerHeight / 2,
      o = e.width = n,
      a = e.height = r;
    t.fillStyle = "#000";
    var i = [],
      l = 8,
      s = null;

    function c() {
      this.r = y(25, 170), this.x = y(this.r, o - this.r), this.y = y(this.r, a - this.r), this.vx = y(25, 100) / 100, this.vy = y(25, 100) / 100, this.update = function() {
        this.edges(), this.x += this.vx, this.y += this.vy
      }, this.edges = function() {
        (this.x < this.r || this.x > o - this.r) && (this.vx *= -1), (this.y < this.r || this.y > a - this.r) && (this.vy *= -1)
      }, this.draw = function() {
        t.strokeStyle = "#ccc", t.beginPath(), t.arc(this.x, this.y, this.r, 0, 2 * Math.PI), t.stroke()
      }
    }
    for (var u = 0; u < l; u++) {
      var d = new c;
      i.push(d)
    }

    function f() {
      s = window.requestAnimationFrame(f), t.clearRect(0, 0, o, a);
      for (var e = 0; e < i.length; e++)(n = i[e]).update(), n.draw();
      for (e = 0; e < i.length; e++)
        for (var n = i[e], r = e + 1; r < i.length; r++) {
          var l = i[r],
            c = (u = n, p = void 0, y = void 0, p = (d = l).x - u.x, y = d.y - u.y, Math.sqrt(p * p + y * y));
          c < n.r + l.r && c > Math.abs(n.r - l.r) && m(n, l, c)
        }
      var u, d, p, y
    }

    function p() {
      i.length = 0;
      for (var t = 0; t < l; t++) {
        var u = new c;
        i.push(u)
      }
      s && (window.cancelAnimationFrame(s), s = null), o = e.width = n, a = e.height = r, f()
    }

    function m(e, t, n) {
      var r = {},
        o = {},
        a = {},
        i = (Math.pow(e.r, 2) - Math.pow(t.r, 2) + Math.pow(n, 2)) / (2 * n),
        l = Math.sqrt(Math.pow(e.r, 2) - Math.pow(i, 2));
      r.x = e.x + i * (t.x - e.x) / n, r.y = e.y + i * (t.y - e.y) / n, o.x = r.x + l * (t.y - e.y) / n, o.y = r.y - l * (t.x - e.x) / n, a.x = r.x - l * (t.y - e.y) / n, a.y = r.y + l * (t.x - e.x) / n, h(o), h(a)
    }

    function y(e, t) {
      return ~~(Math.random() * (t - e + 1) + e)
    }

    function h(e) {
      t.fillStyle = "#000", t.beginPath(), t.arc(e.x, e.y, 2, 0, 2 * Math.PI), t.fill()
    }
    setTimeout(function() {
      p(), addEventListener("resize", p, !1)
    }, 15)
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function(e) {
    var t = e.body,
      n = (e.title, e.reduxState);
    return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>❶⓿</title>\n      " + e.styles + '\n      <meta http-equiv="X-UA-Compatible" content="IE=edge">\n      <meta name="google-site-verification" content="p14BDIqD5_MS_SZTZJau1LG5wgP4Gp4dCAUNyyuAjvs" />\n      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css">\n      <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">\n\n\n    </head>\n    <body>\n      <div id="root">' + t + "</div>\n      <script>\n         window.__REDUX_STATE__ = " + JSON.stringify(n).replace(/</g, "\\u003c") + '\n      <\/script>\n      <script src="/public/client.js"><\/script>\n      <script src="/public/dashboard.js"><\/script>\n    </body>\n  </html>\n'
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.reducer = void 0;
  var r = n(3),
    o = n(8),
    a = y(n(98)),
    i = y(n(99)),
    l = y(n(100)),
    s = y(n(101)),
    c = y(n(102)),
    u = y(n(103)),
    d = y(n(104)),
    f = y(n(105)),
    p = y(n(106)),
    m = y(n(107));

  function y(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.reducer = (0, r.combineReducers)({
    currentBreakpoint: m.default,
    results: a.default,
    auth: i.default,
    signUpState: l.default,
    isLoading: s.default,
    leaves: c.default,
    childrenLeaves: u.default,
    leaf: d.default,
    childrenLeaf: f.default,
    styles: p.default,
    i18n: o.i18nReducer
  })
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [{
        advantage: "test",
        contents: "test",
        description: "test",
        id: 4,
        price: 0,
        requirement: "test",
        title: "<p>ooOOOOoo</p>"
      }],
      t = arguments[1];
    switch (t.type) {
      case "SET_RESULTS":
        return t.results;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = {
      isSignedIn: !1,
      isAdmin: !1,
      errors: [],
      email: "",
      password: ""
    };
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
      t = arguments[1];
    switch (t.type) {
      case "SET_ERRORS":
        return r({}, e, {
          errors: [t.error]
        });
      case "SET_AUTH":
        return r({}, e, t.auth);
      default:
        return r({}, e)
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    o = {
      accountStatus: []
    };
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
      t = arguments[1];
    switch (t.type) {
      case "SET_ACCOUNT_STATUS":
        return console.log(t.accountStatus), r({}, e, {
          accountStatus: [t.accountStatus]
        });
      default:
        return r({}, e)
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
      t = arguments[1];
    switch (t.type) {
      case "SET_IS_LOADING":
        return t.isLoading;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments[1];
    switch (t.type) {
      case "SET_LEAVES":
        return t.results;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments[1];
    switch (t.type) {
      case "SET_CHILDREN_LEAVES":
        return t.results;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments[1];
    switch (t.type) {
      case "SET_LEAF":
        return t.result;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments[1];
    switch (t.type) {
      case "SET_CHILDREN_LEAF":
        return t.results;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments[1];
    switch (t.type) {
      case "SET_COMPONENT_STYLES":
        return t.result;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = arguments[1];
    switch (t.type) {
      case "SET_CURRENT_BREAKPOINT":
        return t.breakpoint;
      default:
        return e
    }
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fetchUsers = void 0;
  var r, o = n(5),
    a = (r = o) && r.__esModule ? r : {
      default: r
    };
  t.fetchUsers = function() {
    return a.default.get("public/users.json").then(function(e) {
      return e.data
    })
  }
}, function(e, t) {
  e.exports = require("cookie-session")
}, function(e, t) {
  e.exports = require("body-parser")
}, function(e, t) {
  e.exports = require("async")
}, function(e, t, n) {
  "use strict";
  n(34);
  var r = n(113),
    o = r("pool"),
    a = {
      ifEmailExist: function(e, t) {
        var n = r("connexion");
        n.connect(), n.query("SELECT id FROM users WHERE email = ?", [e], function(e, r) {
          e ? n.end() : (r.length > 0 ? t(!0) : t(!1), n.end())
        })
      },
      setPassword: function(e, t, n, o, a) {
        var i = r("connexion"),
          l = {
            email: e,
            password: t,
            name: n,
            first_name: o,
            available: 1
          };
        i.connect(), i.query("INSERT INTO users SET ?", l, function(e, t) {
          if (e) return console.log(e), void i.end();
          a(t)
        })
      },
      checkUserRight: function(e, t) {
        var n = r("connexion");
        n.connect(), n.query("SELECT * FROM users WHERE email = ?", [e], function(e, r) {
          e ? n.end() : r && (1 === r[0].available ? t(r[0]) : 1 !== r[0].available && t("waitForConfirm"))
        }), n.end()
      },
      validateAccount: function(e, t) {
        var n = r("connexion");
        n.connect(), n.query("UPDATE users SET available = ? WHERE email = ?", [1, e], function(e, r) {
          e ? n.end() : r && (t(!0), n.end())
        })
      },
      loadPassword: function(e, t) {
        var n = r("connexion");
        n.connect(), n.query("SELECT id, password FROM users WHERE email = ?", [e], function(e, r) {
          e ? n.end() : r && (t(r[0].password), n.end())
        })
      },
      setStyles: function(e, t, n, o) {
        console.log(e, t, n);
        var a = r("connexion");
        a.connect(), a.query("REPLACE INTO `styles` SET `id`= ?,`element`= ?, `styles`= ?", [e, t, n], function(e, t) {
          if (e) return console.log(e), void a.end();
          o(t), a.end()
        })
      },
      getStyles: function(e, t) {
        var n = r("connexion");
        n.connect(), n.query("SELECT * FROM styles WHERE element = ?", [e], function(e, r) {
          if (e) return console.log(e), void n.end();
          t(r), n.end()
        })
      },
      setLeaf: function(e, t, n, r, a) {
        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          s = arguments[7];
        o.query("REPLACE INTO `leaves` SET `id`= ?, `title`= ?, `subtitle`= ?, `layouts`= ?, `contents`= ?, `level`= ?, `hasChildrens`= ?  ", [e, t, n, r, a, i, l], function(t, n) {
          t ? console.log(t) : (s(n), console.log("Connection %d released setLeaf", e))
        }), console.log("All Connections " + o._allConnections.length), console.log("Acquiring Connections " + o._acquiringConnections.length), console.log("Free Connections " + o._freeConnections.length), console.log("Queue Connections " + o._connectionQueue.length)
      },
      setChildrenLeaf: function(e, t, n, r, a, i) {
        var l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
          s = arguments[7];
        o.query("REPLACE INTO `childrenLeaves` SET `id`= ?,`parentId`= ?,`title`= ?, `subtitle`= ?, `layouts`= ?, `contents`= ?, `level`= ?  ", [e, t, n, r, a, i, l], function(n, r) {
          n ? console.log(n) : (s(r, t), console.log("Connection %d released setLeaf", e))
        })
      },
      deleteLeaf: function(e, t) {
        var n = r("connexion");
        n.query("DELETE FROM leaves WHERE id = ?", [e], function(r, o) {
          if (r) console.log(r);
          else {
            t(o);
            n.query("DELETE FROM childrenLeaves WHERE parentId = ?", [e], function(e, t) {
              e ? console.log(e) : console.log("ok")
            })
          }
        })
      },
      getLeaf: function(e, t) {
        o.query("SELECT * FROM leaves WHERE id = ?", [e], function(n, r) {
          n ? connexion.end() : (t(r), console.log("Connection %d released getLeaf", e))
        })
      },
      getChildrenLeaf: function(e, t) {
        o.query("SELECT * FROM childrenLeaves WHERE parentId = ?", [e], function(n, r) {
          n ? connexion.end() : (console.log(r), t(r), console.log("Connection %d released getChildrensLeaf", e))
        })
      },
      getChildrenLeafById: function(e, t) {
        o.query("SELECT * FROM childrenLeaves WHERE id = ?", [e], function(n, r) {
          n ? connexion.end() : (console.log(r), t(r), console.log("Connection %d released getChildrensLeaf", e))
        })
      },
      getChildrenLeaves: function(e) {
        o.query("SELECT * FROM childrenLeaves", function(t, n) {
          t ? console.log(t) : (e(n), console.log("Connection getLeavesy released getLeaves", "//"))
        })
      },
      getLeaves: function(e) {
        o.query("SELECT * FROM leaves", function(t, n) {
          t ? console.log(t) : (e(n), console.log("Connection getLeavesy released getLeaves", "//"))
        })
      }
    };
  e.exports = a
}, function(e, t, n) {
  "use strict";
  var r = n(34);
  e.exports = function(e) {
    var t = null,
      n = null;
    return t = r.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "@lgrrr",
      database: "Asin",
      port: "3306"
    }), n = r.createPool({
      host: "127.0.0.1",
      user: "root",
      password: "@lgrrr",
      database: "Asin",
      queueLimit: 0,
      connectionLimit: 100,
      port: "3306"
    }), "connexion" === e ? t : n
  }
}, function(e, t, n) {
  "use strict";
  var r = n(115),
    o = "3zTvzr3p67VC61jmV54rIYu1545x4TlY",
    a = "88iZ0O6vOoEa",
    i = {
      encrypt: function(e, t) {
        var n = r.createCipheriv("aes-256-gcm", o, a),
          i = n.update(e, "utf8", "hex");
        i += n.final("hex");
        n.getAuthTag();
        return t(i)
      },
      decrypt: function(e, t) {
        var n = r.createDecipheriv("aes-256-gcm", o, a);
        n.setAuthTag(e.tag);
        var i = n.update(e.content, "hex", "utf8");
        return t(i += n.final("utf8"))
      },
      compare: function(e, t, n) {
        n((e = this.encrypt(e, function(e) {
          return e
        })) === t)
      }
    };
  e.exports = i
}, function(e, t) {
  e.exports = require("crypto")
}, function(e, t) {
  e.exports = require("styled-jsx/server")
}, function(e, t) {
  e.exports = require("cors")
}, function(e, t) {
  e.exports = require("serve-favicon")
}]);