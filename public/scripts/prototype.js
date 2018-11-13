!(function(t) {
  function e(n) {
    if (r[n]) return r[n].exports;
    var i = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var r = {};
  (e.m = t),
    (e.c = r),
    (e.d = function(t, r, n) {
      e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n });
    }),
    (e.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function(t, r) {
      if ((1 & r && (t = e(t)), 8 & r)) return t;
      if (4 & r && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (e.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & r && "string" != typeof t)
      )
        for (var i in t)
          e.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (e.n = function(t) {
      var r =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = "/"),
    e((e.s = 43));
})([
  function(t, e) {
    /*!
* screenfull
* v3.3.3 - 2018-09-04
* (c) Sindre Sorhus; MIT License
*/
    !(function() {
      "use strict";
      var e =
          "undefined" != typeof window && void 0 !== window.document
            ? window.document
            : {},
        r = void 0 !== t && t.exports,
        n = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        i = (function() {
          for (
            var t,
              r = [
                [
                  "requestFullscreen",
                  "exitFullscreen",
                  "fullscreenElement",
                  "fullscreenEnabled",
                  "fullscreenchange",
                  "fullscreenerror"
                ],
                [
                  "webkitRequestFullscreen",
                  "webkitExitFullscreen",
                  "webkitFullscreenElement",
                  "webkitFullscreenEnabled",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror"
                ],
                [
                  "webkitRequestFullScreen",
                  "webkitCancelFullScreen",
                  "webkitCurrentFullScreenElement",
                  "webkitCancelFullScreen",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror"
                ],
                [
                  "mozRequestFullScreen",
                  "mozCancelFullScreen",
                  "mozFullScreenElement",
                  "mozFullScreenEnabled",
                  "mozfullscreenchange",
                  "mozfullscreenerror"
                ],
                [
                  "msRequestFullscreen",
                  "msExitFullscreen",
                  "msFullscreenElement",
                  "msFullscreenEnabled",
                  "MSFullscreenChange",
                  "MSFullscreenError"
                ]
              ],
              n = 0,
              i = r.length,
              o = {};
            n < i;
            n++
          )
            if ((t = r[n]) && t[1] in e) {
              for (n = 0; n < t.length; n++) o[r[0][n]] = t[n];
              return o;
            }
          return !1;
        })(),
        o = { change: i.fullscreenchange, error: i.fullscreenerror },
        s = {
          request: function(t) {
            var r = i.requestFullscreen;
            (t = t || e.documentElement),
              / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)
                ? t[r]()
                : t[r](n ? Element.ALLOW_KEYBOARD_INPUT : {});
          },
          exit: function() {
            e[i.exitFullscreen]();
          },
          toggle: function(t) {
            this.isFullscreen ? this.exit() : this.request(t);
          },
          onchange: function(t) {
            this.on("change", t);
          },
          onerror: function(t) {
            this.on("error", t);
          },
          on: function(t, r) {
            var n = o[t];
            n && e.addEventListener(n, r, !1);
          },
          off: function(t, r) {
            var n = o[t];
            n && e.removeEventListener(n, r, !1);
          },
          raw: i
        };
      i
        ? (Object.defineProperties(s, {
            isFullscreen: {
              get: function() {
                return Boolean(e[i.fullscreenElement]);
              }
            },
            element: {
              enumerable: !0,
              get: function() {
                return e[i.fullscreenElement];
              }
            },
            enabled: {
              enumerable: !0,
              get: function() {
                return Boolean(e[i.fullscreenEnabled]);
              }
            }
          }),
          r ? (t.exports = s) : (window.screenfull = s))
        : r
          ? (t.exports = !1)
          : (window.screenfull = !1);
    })();
  },
  function(t, e, r) {
    "use strict";
    function n(t) {
      "loading" !== document.readyState
        ? t()
        : document.addEventListener("DOMContentLoaded", t);
    }
    function i(t, e) {
      return (
        e && ((t.style.transform = e), (t.style.webkitTransform = e)),
        t.style.transform || t.style.webkitTransform
      );
    }
    function o() {
      return (
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname
      );
    }
    function s() {
      Array.prototype.slice
        .call(document.querySelectorAll("[data-event]"))
        .forEach(function(t) {
          t.addEventListener("click", function() {
            ga("send", "event", t.dataset);
          });
        });
    }
    r.d(e, "b", function() {
      return n;
    }),
      r.d(e, "d", function() {
        return i;
      }),
      r.d(e, "c", function() {
        return o;
      }),
      r.d(e, "a", function() {
        return s;
      });
  },
  function(t, e, r) {
    (function(r) {
      var n,
        i,
        o,
        s = { scope: {} };
      (s.defineProperty =
        "function" == typeof Object.defineProperties
          ? Object.defineProperty
          : function(t, e, r) {
              if (r.get || r.set)
                throw new TypeError(
                  "ES3 does not support getters and setters."
                );
              t != Array.prototype && t != Object.prototype && (t[e] = r.value);
            }),
        (s.getGlobal = function(t) {
          return "undefined" != typeof window && window === t
            ? t
            : void 0 !== r && null != r
              ? r
              : t;
        }),
        (s.global = s.getGlobal(this)),
        (s.SYMBOL_PREFIX = "jscomp_symbol_"),
        (s.initSymbol = function() {
          (s.initSymbol = function() {}),
            s.global.Symbol || (s.global.Symbol = s.Symbol);
        }),
        (s.symbolCounter_ = 0),
        (s.Symbol = function(t) {
          return s.SYMBOL_PREFIX + (t || "") + s.symbolCounter_++;
        }),
        (s.initSymbolIterator = function() {
          s.initSymbol();
          var t = s.global.Symbol.iterator;
          t || (t = s.global.Symbol.iterator = s.global.Symbol("iterator")),
            "function" != typeof Array.prototype[t] &&
              s.defineProperty(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function() {
                  return s.arrayIterator(this);
                }
              }),
            (s.initSymbolIterator = function() {});
        }),
        (s.arrayIterator = function(t) {
          var e = 0;
          return s.iteratorPrototype(function() {
            return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
          });
        }),
        (s.iteratorPrototype = function(t) {
          return (
            s.initSymbolIterator(),
            ((t = { next: t })[s.global.Symbol.iterator] = function() {
              return this;
            }),
            t
          );
        }),
        (s.array = s.array || {}),
        (s.iteratorFromArray = function(t, e) {
          s.initSymbolIterator(), t instanceof String && (t += "");
          var r = 0,
            n = {
              next: function() {
                if (r < t.length) {
                  var i = r++;
                  return { value: e(i, t[i]), done: !1 };
                }
                return (
                  (n.next = function() {
                    return { done: !0, value: void 0 };
                  }),
                  n.next()
                );
              }
            };
          return (
            (n[Symbol.iterator] = function() {
              return n;
            }),
            n
          );
        }),
        (s.polyfill = function(t, e, r, n) {
          if (e) {
            for (r = s.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
              var i = t[n];
              i in r || (r[i] = {}), (r = r[i]);
            }
            (e = e((n = r[(t = t[t.length - 1])]))) != n &&
              null != e &&
              s.defineProperty(r, t, {
                configurable: !0,
                writable: !0,
                value: e
              });
          }
        }),
        s.polyfill(
          "Array.prototype.keys",
          function(t) {
            return (
              t ||
              function() {
                return s.iteratorFromArray(this, function(t) {
                  return t;
                });
              }
            );
          },
          "es6-impl",
          "es3"
        );
      var a = this;
      (i = []),
        (n = function() {
          function t(t) {
            if (!L.col(t))
              try {
                return document.querySelectorAll(t);
              } catch (t) {}
          }
          function e(t, e) {
            for (
              var r = t.length,
                n = 2 <= arguments.length ? arguments[1] : void 0,
                i = [],
                o = 0;
              o < r;
              o++
            )
              if (o in t) {
                var s = t[o];
                e.call(n, s, o, t) && i.push(s);
              }
            return i;
          }
          function r(t) {
            return t.reduce(function(t, e) {
              return t.concat(L.arr(e) ? r(e) : e);
            }, []);
          }
          function n(e) {
            return L.arr(e)
              ? e
              : (L.str(e) && (e = t(e) || e),
                e instanceof NodeList || e instanceof HTMLCollection
                  ? [].slice.call(e)
                  : [e]);
          }
          function i(t, e) {
            return t.some(function(t) {
              return t === e;
            });
          }
          function o(t) {
            var e,
              r = {};
            for (e in t) r[e] = t[e];
            return r;
          }
          function s(t, e) {
            var r,
              n = o(t);
            for (r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
            return n;
          }
          function u(t, e) {
            var r,
              n = o(t);
            for (r in e) n[r] = L.und(t[r]) ? e[r] : t[r];
            return n;
          }
          function c(t) {
            if (
              (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
                t
              ))
            )
              return t[2];
          }
          function l(t, e) {
            return L.fnc(t) ? t(e.target, e.id, e.total) : t;
          }
          function h(t, e) {
            if (e in t.style)
              return (
                getComputedStyle(t).getPropertyValue(
                  e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                ) || "0"
              );
          }
          function p(t, e) {
            return L.dom(t) && i(C, e)
              ? "transform"
              : L.dom(t) && (t.getAttribute(e) || (L.svg(t) && t[e]))
                ? "attribute"
                : L.dom(t) && "transform" !== e && h(t, e)
                  ? "css"
                  : null != t[e]
                    ? "object"
                    : void 0;
          }
          function f(t, r) {
            var n = (function(t) {
                return -1 < t.indexOf("translate") || "perspective" === t
                  ? "px"
                  : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew")
                    ? "deg"
                    : void 0;
              })(r),
              n = -1 < r.indexOf("scale") ? 1 : 0 + n;
            if (!(t = t.style.transform)) return n;
            for (
              var i = [], o = [], s = [], a = /(\w+)\((.+?)\)/g;
              (i = a.exec(t));

            )
              o.push(i[1]), s.push(i[2]);
            return (t = e(s, function(t, e) {
              return o[e] === r;
            })).length
              ? t[0]
              : n;
          }
          function d(t, e) {
            switch (p(t, e)) {
              case "transform":
                return f(t, e);
              case "css":
                return h(t, e);
              case "attribute":
                return t.getAttribute(e);
            }
            return t[e] || 0;
          }
          function y(t, e) {
            var r = /^(\*=|\+=|-=)/.exec(t);
            if (!r) return t;
            var n = c(t) || 0;
            switch (
              ((e = parseFloat(e)),
              (t = parseFloat(t.replace(r[0], ""))),
              r[0][0])
            ) {
              case "+":
                return e + t + n;
              case "-":
                return e - t + n;
              case "*":
                return e * t + n;
            }
          }
          function g(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }
          function v(t) {
            t = t.points;
            for (var e, r = 0, n = 0; n < t.numberOfItems; n++) {
              var i = t.getItem(n);
              0 < n && (r += g(e, i)), (e = i);
            }
            return r;
          }
          function m(t) {
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
              case "circle":
                return 2 * Math.PI * t.getAttribute("r");
              case "rect":
                return (
                  2 * t.getAttribute("width") + 2 * t.getAttribute("height")
                );
              case "line":
                return g(
                  { x: t.getAttribute("x1"), y: t.getAttribute("y1") },
                  { x: t.getAttribute("x2"), y: t.getAttribute("y2") }
                );
              case "polyline":
                return v(t);
              case "polygon":
                var e = t.points;
                return v(t) + g(e.getItem(e.numberOfItems - 1), e.getItem(0));
            }
          }
          function E(t, e) {
            function r(r) {
              return (
                (r = void 0 === r ? 0 : r),
                t.el.getPointAtLength(1 <= e + r ? e + r : 0)
              );
            }
            var n = r(),
              i = r(-1),
              o = r(1);
            switch (t.property) {
              case "x":
                return n.x;
              case "y":
                return n.y;
              case "angle":
                return (180 * Math.atan2(o.y - i.y, o.x - i.x)) / Math.PI;
            }
          }
          function P(t, e) {
            var r,
              n = /-?\d*\.?\d+/g;
            if (((r = L.pth(t) ? t.totalLength : t), L.col(r)))
              if (L.rgb(r)) {
                var i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);
                r = i ? "rgba(" + i[1] + ",1)" : r;
              } else
                r = L.hex(r)
                  ? (function(t) {
                      t = t.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        function(t, e, r, n) {
                          return e + e + r + r + n + n;
                        }
                      );
                      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                        t
                      );
                      t = parseInt(e[1], 16);
                      var r = parseInt(e[2], 16),
                        e = parseInt(e[3], 16);
                      return "rgba(" + t + "," + r + "," + e + ",1)";
                    })(r)
                  : L.hsl(r)
                    ? (function(t) {
                        function e(t, e, r) {
                          return (
                            0 > r && (r += 1),
                            1 < r && --r,
                            r < 1 / 6
                              ? t + 6 * (e - t) * r
                              : 0.5 > r
                                ? e
                                : r < 2 / 3
                                  ? t + (e - t) * (2 / 3 - r) * 6
                                  : t
                          );
                        }
                        var r =
                          /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                          /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                            t
                          );
                        t = parseInt(r[1]) / 360;
                        var n = parseInt(r[2]) / 100,
                          i = parseInt(r[3]) / 100,
                          r = r[4] || 1;
                        if (0 == n) i = n = t = i;
                        else {
                          var o = 0.5 > i ? i * (1 + n) : i + n - i * n,
                            s = 2 * i - o,
                            i = e(s, o, t + 1 / 3),
                            n = e(s, o, t);
                          t = e(s, o, t - 1 / 3);
                        }
                        return (
                          "rgba(" +
                          255 * i +
                          "," +
                          255 * n +
                          "," +
                          255 * t +
                          "," +
                          r +
                          ")"
                        );
                      })(r)
                    : void 0;
            else
              (i = (i = c(r)) ? r.substr(0, r.length - i.length) : r),
                (r = e && !/\s/g.test(r) ? i + e : i);
            return {
              original: (r += ""),
              numbers: r.match(n) ? r.match(n).map(Number) : [0],
              strings: L.str(t) || e ? r.split(n) : []
            };
          }
          function T(t) {
            return e((t = t ? r(L.arr(t) ? t.map(n) : n(t)) : []), function(
              t,
              e,
              r
            ) {
              return r.indexOf(t) === e;
            });
          }
          function _(t, e) {
            var r = o(e);
            if (L.arr(t)) {
              var i = t.length;
              2 !== i || L.obj(t[0])
                ? L.fnc(e.duration) || (r.duration = e.duration / i)
                : (t = { value: t });
            }
            return n(t)
              .map(function(t, r) {
                return (
                  (r = r ? 0 : e.delay),
                  (t = L.obj(t) && !L.pth(t) ? t : { value: t }),
                  L.und(t.delay) && (t.delay = r),
                  t
                );
              })
              .map(function(t) {
                return u(t, r);
              });
          }
          function b(t, e) {
            var r;
            return t.tweens.map(function(n) {
              var i = (n = (function(t, e) {
                  var r,
                    n = {};
                  for (r in t) {
                    var i = l(t[r], e);
                    L.arr(i) &&
                      1 ===
                        (i = i.map(function(t) {
                          return l(t, e);
                        })).length &&
                      (i = i[0]),
                      (n[r] = i);
                  }
                  return (
                    (n.duration = parseFloat(n.duration)),
                    (n.delay = parseFloat(n.delay)),
                    n
                  );
                })(n, e)).value,
                o = d(e.target, t.name),
                s = r ? r.to.original : o,
                s = L.arr(i) ? i[0] : s,
                a = y(L.arr(i) ? i[1] : i, s),
                o = c(a) || c(s) || c(o);
              return (
                (n.from = P(s, o)),
                (n.to = P(a, o)),
                (n.start = r ? r.end : t.offset),
                (n.end = n.start + n.delay + n.duration),
                (n.easing = (function(t) {
                  return L.arr(t) ? I.apply(this, t) : M[t];
                })(n.easing)),
                (n.elasticity =
                  (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3),
                (n.isPath = L.pth(i)),
                (n.isColor = L.col(n.from.original)),
                n.isColor && (n.round = 1),
                (r = n)
              );
            });
          }
          function O(t, n) {
            return e(
              r(
                t.map(function(t) {
                  return n.map(function(e) {
                    var r = p(t.target, e.name);
                    if (r) {
                      var n = b(e, t);
                      e = {
                        type: r,
                        property: e.name,
                        animatable: t,
                        tweens: n,
                        duration: n[n.length - 1].end,
                        delay: n[0].delay
                      };
                    } else e = void 0;
                    return e;
                  });
                })
              ),
              function(t) {
                return !L.und(t);
              }
            );
          }
          function w(t, e, r, n) {
            var i = "delay" === t;
            return e.length
              ? (i ? Math.min : Math.max).apply(
                  Math,
                  e.map(function(e) {
                    return e[t];
                  })
                )
              : i
                ? n.delay
                : r.offset + n.delay + n.duration;
          }
          function R(t) {
            var e,
              r = s(S, t),
              n = s(N, t),
              i = (function(t) {
                var e = T(t);
                return e.map(function(t, r) {
                  return { target: t, id: r, total: e.length };
                });
              })(t.targets),
              o = [],
              a = u(r, n);
            for (e in t)
              a.hasOwnProperty(e) ||
                "targets" === e ||
                o.push({ name: e, offset: a.offset, tweens: _(t[e], n) });
            return (
              (t = O(i, o)),
              u(r, {
                children: [],
                animatables: i,
                animations: t,
                duration: w("duration", t, r, n),
                delay: w("delay", t, r, n)
              })
            );
          }
          function x(t) {
            function r() {
              return (
                window.Promise &&
                new Promise(function(t) {
                  return (p = t);
                })
              );
            }
            function n(t) {
              return d.reversed ? d.duration - t : t;
            }
            function i(t) {
              for (var r = 0, n = {}, i = d.animations, o = i.length; r < o; ) {
                var s = i[r],
                  a = s.animatable,
                  u = s.tweens,
                  c = u.length - 1,
                  l = u[c];
                c &&
                  (l =
                    e(u, function(e) {
                      return t < e.end;
                    })[0] || l);
                for (
                  var u =
                      Math.min(Math.max(t - l.start - l.delay, 0), l.duration) /
                      l.duration,
                    p = isNaN(u) ? 1 : l.easing(u, l.elasticity),
                    u = l.to.strings,
                    f = l.round,
                    c = [],
                    y = void 0,
                    y = l.to.numbers.length,
                    g = 0;
                  g < y;
                  g++
                ) {
                  var v = void 0,
                    v = l.to.numbers[g],
                    m = l.from.numbers[g],
                    v = l.isPath ? E(l.value, p * v) : m + p * (v - m);
                  f && ((l.isColor && 2 < g) || (v = Math.round(v * f) / f)),
                    c.push(v);
                }
                if ((l = u.length))
                  for (y = u[0], p = 0; p < l; p++)
                    (f = u[p + 1]),
                      (g = c[p]),
                      isNaN(g) || (y = f ? y + (g + f) : y + (g + " "));
                else y = c[0];
                D[s.type](a.target, s.property, y, n, a.id),
                  (s.currentValue = y),
                  r++;
              }
              if ((r = Object.keys(n).length))
                for (i = 0; i < r; i++)
                  A ||
                    (A = h(document.body, "transform")
                      ? "transform"
                      : "-webkit-transform"),
                    (d.animatables[i].target.style[A] = n[i].join(" "));
              (d.currentTime = t), (d.progress = (t / d.duration) * 100);
            }
            function o(t) {
              d[t] && d[t](d);
            }
            function s() {
              d.remaining && !0 !== d.remaining && d.remaining--;
            }
            function a(t) {
              var e = d.duration,
                a = d.offset,
                h = a + d.delay,
                y = d.currentTime,
                g = d.reversed,
                v = n(t);
              if (d.children.length) {
                var m = d.children,
                  E = m.length;
                if (v >= d.currentTime)
                  for (var P = 0; P < E; P++) m[P].seek(v);
                else for (; E--; ) m[E].seek(v);
              }
              (v >= h || !e) &&
                (d.began || ((d.began = !0), o("begin")), o("run")),
                v > a && v < e
                  ? i(v)
                  : (v <= a && 0 !== y && (i(0), g && s()),
                    ((v >= e && y !== e) || !e) && (i(e), g || s())),
                o("update"),
                t >= e &&
                  (d.remaining
                    ? ((c = u),
                      "alternate" === d.direction && (d.reversed = !d.reversed))
                    : (d.pause(),
                      d.completed ||
                        ((d.completed = !0),
                        o("complete"),
                        "Promise" in window && (p(), (f = r())))),
                  (l = 0));
            }
            t = void 0 === t ? {} : t;
            var u,
              c,
              l = 0,
              p = null,
              f = r(),
              d = R(t);
            return (
              (d.reset = function() {
                var t = d.direction,
                  e = d.loop;
                for (
                  d.currentTime = 0,
                    d.progress = 0,
                    d.paused = !0,
                    d.began = !1,
                    d.completed = !1,
                    d.reversed = "reverse" === t,
                    d.remaining = "alternate" === t && 1 === e ? 2 : e,
                    i(0),
                    t = d.children.length;
                  t--;

                )
                  d.children[t].reset();
              }),
              (d.tick = function(t) {
                (u = t), c || (c = u), a((l + u - c) * x.speed);
              }),
              (d.seek = function(t) {
                a(n(t));
              }),
              (d.pause = function() {
                var t = V.indexOf(d);
                -1 < t && V.splice(t, 1), (d.paused = !0);
              }),
              (d.play = function() {
                d.paused &&
                  ((d.paused = !1),
                  (c = 0),
                  (l = n(d.currentTime)),
                  V.push(d),
                  F || U());
              }),
              (d.reverse = function() {
                (d.reversed = !d.reversed), (c = 0), (l = n(d.currentTime));
              }),
              (d.restart = function() {
                d.pause(), d.reset(), d.play();
              }),
              (d.finished = f),
              d.reset(),
              d.autoplay && d.play(),
              d
            );
          }
          var A,
            S = {
              update: void 0,
              begin: void 0,
              run: void 0,
              complete: void 0,
              loop: 1,
              direction: "normal",
              autoplay: !0,
              offset: 0
            },
            N = {
              duration: 1e3,
              delay: 0,
              easing: "easeOutElastic",
              elasticity: 500,
              round: 0
            },
            C = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(
              " "
            ),
            L = {
              arr: function(t) {
                return Array.isArray(t);
              },
              obj: function(t) {
                return -1 < Object.prototype.toString.call(t).indexOf("Object");
              },
              pth: function(t) {
                return L.obj(t) && t.hasOwnProperty("totalLength");
              },
              svg: function(t) {
                return t instanceof SVGElement;
              },
              dom: function(t) {
                return t.nodeType || L.svg(t);
              },
              str: function(t) {
                return "string" == typeof t;
              },
              fnc: function(t) {
                return "function" == typeof t;
              },
              und: function(t) {
                return void 0 === t;
              },
              hex: function(t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
              },
              rgb: function(t) {
                return /^rgb/.test(t);
              },
              hsl: function(t) {
                return /^hsl/.test(t);
              },
              col: function(t) {
                return L.hex(t) || L.rgb(t) || L.hsl(t);
              }
            },
            I = (function() {
              function t(t, e, r) {
                return (
                  (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
                );
              }
              return function(e, r, n, i) {
                if (0 <= e && 1 >= e && 0 <= n && 1 >= n) {
                  var o = new Float32Array(11);
                  if (e !== r || n !== i)
                    for (var s = 0; 11 > s; ++s) o[s] = t(0.1 * s, e, n);
                  return function(s) {
                    if (e === r && n === i) return s;
                    if (0 === s) return 0;
                    if (1 === s) return 1;
                    for (var a = 0, u = 1; 10 !== u && o[u] <= s; ++u) a += 0.1;
                    var u = a + ((s - o[--u]) / (o[u + 1] - o[u])) * 0.1,
                      c =
                        3 * (1 - 3 * n + 3 * e) * u * u +
                        2 * (3 * n - 6 * e) * u +
                        3 * e;
                    if (0.001 <= c) {
                      for (
                        a = 0;
                        4 > a &&
                        0 !=
                          (c =
                            3 * (1 - 3 * n + 3 * e) * u * u +
                            2 * (3 * n - 6 * e) * u +
                            3 * e);
                        ++a
                      )
                        var l = t(u, e, n) - s, u = u - l / c;
                      s = u;
                    } else if (0 === c) s = u;
                    else {
                      var u = a,
                        a = a + 0.1,
                        h = 0;
                      do {
                        0 < (c = t((l = u + (a - u) / 2), e, n) - s)
                          ? (a = l)
                          : (u = l);
                      } while (1e-7 < Math.abs(c) && 10 > ++h);
                      s = l;
                    }
                    return t(s, r, i);
                  };
                }
              };
            })(),
            M = (function() {
              function t(t, e) {
                return 0 === t || 1 === t
                  ? t
                  : -Math.pow(2, 10 * (t - 1)) *
                      Math.sin(
                        (2 *
                          (t - 1 - (e / (2 * Math.PI)) * Math.asin(1)) *
                          Math.PI) /
                          e
                      );
              }
              var e,
                r = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(
                  " "
                ),
                n = {
                  In: [
                    [0.55, 0.085, 0.68, 0.53],
                    [0.55, 0.055, 0.675, 0.19],
                    [0.895, 0.03, 0.685, 0.22],
                    [0.755, 0.05, 0.855, 0.06],
                    [0.47, 0, 0.745, 0.715],
                    [0.95, 0.05, 0.795, 0.035],
                    [0.6, 0.04, 0.98, 0.335],
                    [0.6, -0.28, 0.735, 0.045],
                    t
                  ],
                  Out: [
                    [0.25, 0.46, 0.45, 0.94],
                    [0.215, 0.61, 0.355, 1],
                    [0.165, 0.84, 0.44, 1],
                    [0.23, 1, 0.32, 1],
                    [0.39, 0.575, 0.565, 1],
                    [0.19, 1, 0.22, 1],
                    [0.075, 0.82, 0.165, 1],
                    [0.175, 0.885, 0.32, 1.275],
                    function(e, r) {
                      return 1 - t(1 - e, r);
                    }
                  ],
                  InOut: [
                    [0.455, 0.03, 0.515, 0.955],
                    [0.645, 0.045, 0.355, 1],
                    [0.77, 0, 0.175, 1],
                    [0.86, 0, 0.07, 1],
                    [0.445, 0.05, 0.55, 0.95],
                    [1, 0, 0, 1],
                    [0.785, 0.135, 0.15, 0.86],
                    [0.68, -0.55, 0.265, 1.55],
                    function(e, r) {
                      return 0.5 > e
                        ? t(2 * e, r) / 2
                        : 1 - t(-2 * e + 2, r) / 2;
                    }
                  ]
                },
                i = { linear: I(0.25, 0.25, 0.75, 0.75) },
                o = {};
              for (e in n)
                (o.type = e),
                  n[o.type].forEach(
                    (function(t) {
                      return function(e, n) {
                        i["ease" + t.type + r[n]] = L.fnc(e)
                          ? e
                          : I.apply(a, e);
                      };
                    })(o)
                  ),
                  (o = { type: o.type });
              return i;
            })(),
            D = {
              css: function(t, e, r) {
                return (t.style[e] = r);
              },
              attribute: function(t, e, r) {
                return t.setAttribute(e, r);
              },
              object: function(t, e, r) {
                return (t[e] = r);
              },
              transform: function(t, e, r, n, i) {
                n[i] || (n[i] = []), n[i].push(e + "(" + r + ")");
              }
            },
            V = [],
            F = 0,
            U = (function() {
              function t() {
                F = requestAnimationFrame(e);
              }
              function e(e) {
                var r = V.length;
                if (r) {
                  for (var n = 0; n < r; ) V[n] && V[n].tick(e), n++;
                  t();
                } else cancelAnimationFrame(F), (F = 0);
              }
              return t;
            })();
          return (
            (x.version = "2.2.0"),
            (x.speed = 1),
            (x.running = V),
            (x.remove = function(t) {
              t = T(t);
              for (var e = V.length; e--; )
                for (var r = V[e], n = r.animations, o = n.length; o--; )
                  i(t, n[o].animatable.target) &&
                    (n.splice(o, 1), n.length || r.pause());
            }),
            (x.getValue = d),
            (x.path = function(e, r) {
              var n = L.str(e) ? t(e)[0] : e,
                i = r || 100;
              return function(t) {
                return { el: n, property: t, totalLength: m(n) * (i / 100) };
              };
            }),
            (x.setDashoffset = function(t) {
              var e = m(t);
              return t.setAttribute("stroke-dasharray", e), e;
            }),
            (x.bezier = I),
            (x.easings = M),
            (x.timeline = function(t) {
              var e = x(t);
              return (
                e.pause(),
                (e.duration = 0),
                (e.add = function(r) {
                  return (
                    e.children.forEach(function(t) {
                      (t.began = !0), (t.completed = !0);
                    }),
                    n(r).forEach(function(r) {
                      var n = u(r, s(N, t || {}));
                      (n.targets = n.targets || t.targets), (r = e.duration);
                      var i = n.offset;
                      (n.autoplay = !1),
                        (n.direction = e.direction),
                        (n.offset = L.und(i) ? r : y(i, r)),
                        (e.began = !0),
                        (e.completed = !0),
                        e.seek(n.offset),
                        ((n = x(n)).began = !0),
                        (n.completed = !0),
                        n.duration > r && (e.duration = n.duration),
                        e.children.push(n);
                    }),
                    e.seek(0),
                    e.reset(),
                    e.autoplay && e.restart(),
                    e
                  );
                }),
                e
              );
            }),
            (x.random = function(t, e) {
              return Math.floor(Math.random() * (e - t + 1)) + t;
            }),
            x
          );
        }),
        void 0 !== (o = "function" == typeof n ? n.apply(e, i) : n) &&
          (t.exports = o);
    }.call(this, r(8)));
  },
  function(t, e) {
    var r,
      n = [
        0,
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
    (e.getSymbolSize = function(t) {
      if (!t) throw new Error('"version" cannot be null or undefined');
      if (t < 1 || t > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return 4 * t + 17;
    }),
      (e.getSymbolTotalCodewords = function(t) {
        return n[t];
      }),
      (e.getBCHDigit = function(t) {
        for (var e = 0; 0 !== t; ) e++, (t >>>= 1);
        return e;
      }),
      (e.setToSJISFunction = function(t) {
        if ("function" != typeof t)
          throw new Error('"toSJISFunc" is not a valid function.');
        r = t;
      }),
      (e.isKanjiModeEnabled = function() {
        return void 0 !== r;
      }),
      (e.toSJIS = function(t) {
        return r(t);
      });
  },
  function(t, e, r) {
    var n = r(10),
      i = r(11);
    (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
      (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
      (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
      (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
      (e.MIXED = { bit: -1 }),
      (e.getCharCountIndicator = function(t, e) {
        if (!t.ccBits) throw new Error("Invalid mode: " + t);
        if (!n.isValid(e)) throw new Error("Invalid version: " + e);
        return e >= 1 && e < 10
          ? t.ccBits[0]
          : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
      }),
      (e.getBestModeForData = function(t) {
        return i.testNumeric(t)
          ? e.NUMERIC
          : i.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : i.testKanji(t)
              ? e.KANJI
              : e.BYTE;
      }),
      (e.toString = function(t) {
        if (t && t.id) return t.id;
        throw new Error("Invalid mode");
      }),
      (e.isValid = function(t) {
        return t && t.bit && t.ccBits;
      }),
      (e.from = function(t, r) {
        if (e.isValid(t)) return t;
        try {
          return (function(t) {
            if ("string" != typeof t) throw new Error("Param is not a string");
            switch (t.toLowerCase()) {
              case "numeric":
                return e.NUMERIC;
              case "alphanumeric":
                return e.ALPHANUMERIC;
              case "kanji":
                return e.KANJI;
              case "byte":
                return e.BYTE;
              default:
                throw new Error("Unknown mode: " + t);
            }
          })(t);
        } catch (t) {
          return r;
        }
      });
  },
  function(t, e, r) {
    "use strict";
    function n(t, e, r) {
      return "number" == typeof t
        ? s(t)
        : (function(t, e, r) {
            if ("number" == typeof t)
              throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
              ? (function(t, e, r) {
                  if (e < 0 || t.byteLength < e)
                    throw new RangeError("'offset' is out of bounds");
                  if (t.byteLength < e + (r || 0))
                    throw new RangeError("'length' is out of bounds");
                  var i;
                  return (
                    ((i =
                      void 0 === e && void 0 === r
                        ? new Uint8Array(t)
                        : void 0 === r
                          ? new Uint8Array(t, e)
                          : new Uint8Array(t, e, r)).__proto__ =
                      n.prototype),
                    i
                  );
                })(t, e, r)
              : "string" == typeof t
                ? (function(t) {
                    var e = 0 | c(t),
                      r = o(e),
                      n = r.write(t);
                    return n !== e && (r = r.slice(0, n)), r;
                  })(t)
                : (function(t) {
                    if (n.isBuffer(t)) {
                      var e = 0 | i(t.length),
                        r = o(e);
                      return 0 === r.length ? r : (t.copy(r, 0, 0, e), r);
                    }
                    if (t) {
                      if (
                        ("undefined" != typeof ArrayBuffer &&
                          t.buffer instanceof ArrayBuffer) ||
                        "length" in t
                      )
                        return "number" != typeof t.length ||
                          (function(t) {
                            return t != t;
                          })(t.length)
                          ? o(0)
                          : a(t);
                      if ("Buffer" === t.type && Array.isArray(t.data))
                        return a(t.data);
                    }
                    throw new TypeError(
                      "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                    );
                  })(t);
          })(t, e, r);
    }
    function i(t) {
      if (t >= h)
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" +
            h.toString(16) +
            " bytes"
        );
      return 0 | t;
    }
    function o(t) {
      var e = new Uint8Array(t);
      return (e.__proto__ = n.prototype), e;
    }
    function s(t) {
      return o(t < 0 ? 0 : 0 | i(t));
    }
    function a(t) {
      for (
        var e = t.length < 0 ? 0 : 0 | i(t.length), r = o(e), n = 0;
        n < e;
        n += 1
      )
        r[n] = 255 & t[n];
      return r;
    }
    function u(t, e) {
      e = e || 1 / 0;
      for (var r, n = t.length, i = null, o = [], s = 0; s < n; ++s) {
        if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            if (s + 1 === n) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
            continue;
          }
          r = 65536 + (((i - 55296) << 10) | (r - 56320));
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
        if (((i = null), r < 128)) {
          if ((e -= 1) < 0) break;
          o.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          o.push((r >> 6) | 192, (63 & r) | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
        } else {
          if (!(r < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          o.push(
            (r >> 18) | 240,
            ((r >> 12) & 63) | 128,
            ((r >> 6) & 63) | 128,
            (63 & r) | 128
          );
        }
      }
      return o;
    }
    function c(t) {
      return n.isBuffer(t)
        ? t.length
        : "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          ? t.byteLength
          : ("string" != typeof t && (t = "" + t),
            0 === t.length ? 0 : u(t).length);
    }
    var l = r(6),
      h = 2147483647;
    (n.prototype.__proto__ = Uint8Array.prototype),
      (n.__proto__ = Uint8Array),
      "undefined" != typeof Symbol &&
        Symbol.species &&
        n[Symbol.species] === n &&
        Object.defineProperty(n, Symbol.species, {
          value: null,
          configurable: !0,
          enumerable: !1,
          writable: !1
        }),
      (n.prototype.write = function(t, e, r) {
        void 0 === e
          ? ((r = this.length), (e = 0))
          : void 0 === r && "string" == typeof e
            ? ((r = this.length), (e = 0))
            : isFinite(e) && ((e |= 0), isFinite(r) ? (r |= 0) : (r = void 0));
        var n = this.length - e;
        if (
          ((void 0 === r || r > n) && (r = n),
          (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        return (function(t, e, r, n) {
          return (function(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
              e[i + r] = t[i];
            return i;
          })(u(e, t.length - r), t, r, n);
        })(this, t, e, r);
      }),
      (n.prototype.slice = function(t, e) {
        var r = this.length;
        (t = ~~t),
          (e = void 0 === e ? r : ~~e),
          t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          e < t && (e = t);
        var i = this.subarray(t, e);
        return (i.__proto__ = n.prototype), i;
      }),
      (n.prototype.copy = function(t, e, r, n) {
        if (
          (r || (r = 0),
          n || 0 === n || (n = this.length),
          e >= t.length && (e = t.length),
          e || (e = 0),
          n > 0 && n < r && (n = r),
          n === r)
        )
          return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length)
          throw new RangeError("sourceStart out of bounds");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length),
          t.length - e < n - r && (n = t.length - e + r);
        var i,
          o = n - r;
        if (this === t && r < e && e < n)
          for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];
        else if (o < 1e3) for (i = 0; i < o; ++i) t[i + e] = this[i + r];
        else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
        return o;
      }),
      (n.prototype.fill = function(t, e, r) {
        if ("string" == typeof t) {
          if (
            ("string" == typeof e
              ? ((e = 0), (r = this.length))
              : "string" == typeof r && (r = this.length),
            1 === t.length)
          ) {
            var i = t.charCodeAt(0);
            i < 256 && (t = i);
          }
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < r)
          throw new RangeError("Out of range index");
        if (r <= e) return this;
        var o;
        if (
          ((e >>>= 0),
          (r = void 0 === r ? this.length : r >>> 0),
          t || (t = 0),
          "number" == typeof t)
        )
          for (o = e; o < r; ++o) this[o] = t;
        else {
          var s = n.isBuffer(t) ? t : new n(t),
            a = s.length;
          for (o = 0; o < r - e; ++o) this[o + e] = s[o % a];
        }
        return this;
      }),
      (n.concat = function(t, e) {
        if (!l(t))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return o(null);
        var r;
        if (void 0 === e)
          for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
        var i = s(e),
          a = 0;
        for (r = 0; r < t.length; ++r) {
          var u = t[r];
          if (!n.isBuffer(u))
            throw new TypeError('"list" argument must be an Array of Buffers');
          u.copy(i, a), (a += u.length);
        }
        return i;
      }),
      (n.byteLength = c),
      (n.prototype._isBuffer = !0),
      (n.isBuffer = function(t) {
        return !(null == t || !t._isBuffer);
      }),
      (t.exports = n);
  },
  function(t, e) {
    var r = {}.toString;
    t.exports =
      Array.isArray ||
      function(t) {
        return "[object Array]" == r.call(t);
      };
  },
  function(t, e) {
    (e.L = { bit: 1 }),
      (e.M = { bit: 0 }),
      (e.Q = { bit: 3 }),
      (e.H = { bit: 2 }),
      (e.isValid = function(t) {
        return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
      }),
      (e.from = function(t, r) {
        if (e.isValid(t)) return t;
        try {
          return (function(t) {
            if ("string" != typeof t) throw new Error("Param is not a string");
            switch (t.toLowerCase()) {
              case "l":
              case "low":
                return e.L;
              case "m":
              case "medium":
                return e.M;
              case "q":
              case "quartile":
                return e.Q;
              case "h":
              case "high":
                return e.H;
              default:
                throw new Error("Unknown EC Level: " + t);
            }
          })(t);
        } catch (t) {
          return r;
        }
      });
  },
  function(t, e) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(7),
      i = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ],
      o = [
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
    (e.getBlocksCount = function(t, e) {
      switch (e) {
        case n.L:
          return i[4 * (t - 1) + 0];
        case n.M:
          return i[4 * (t - 1) + 1];
        case n.Q:
          return i[4 * (t - 1) + 2];
        case n.H:
          return i[4 * (t - 1) + 3];
        default:
          return;
      }
    }),
      (e.getTotalCodewordsCount = function(t, e) {
        switch (e) {
          case n.L:
            return o[4 * (t - 1) + 0];
          case n.M:
            return o[4 * (t - 1) + 1];
          case n.Q:
            return o[4 * (t - 1) + 2];
          case n.H:
            return o[4 * (t - 1) + 3];
          default:
            return;
        }
      });
  },
  function(t, e, r) {
    function n(t, r, n) {
      for (var i = 1; i <= 40; i++) if (r <= e.getCapacity(i, n, t)) return i;
    }
    function i(t, e) {
      return l.getCharCountIndicator(t, e) + 4;
    }
    function o(t, e) {
      var r = 0;
      return (
        t.forEach(function(t) {
          var n = i(t.mode, e);
          r += n + t.getBitsLength();
        }),
        r
      );
    }
    function s(t, r) {
      for (var n = 1; n <= 40; n++)
        if (o(t, n) <= e.getCapacity(n, r, l.MIXED)) return n;
    }
    var a = r(3),
      u = r(9),
      c = r(7),
      l = r(4),
      h = r(6),
      p = a.getBCHDigit(7973);
    (e.isValid = function(t) {
      return !isNaN(t) && t >= 1 && t <= 40;
    }),
      (e.from = function(t, r) {
        return e.isValid(t) ? parseInt(t, 10) : r;
      }),
      (e.getCapacity = function(t, r, n) {
        if (!e.isValid(t)) throw new Error("Invalid QR Code version");
        void 0 === n && (n = l.BYTE);
        var o =
          8 * (a.getSymbolTotalCodewords(t) - u.getTotalCodewordsCount(t, r));
        if (n === l.MIXED) return o;
        var s = o - i(n, t);
        switch (n) {
          case l.NUMERIC:
            return Math.floor((s / 10) * 3);
          case l.ALPHANUMERIC:
            return Math.floor((s / 11) * 2);
          case l.KANJI:
            return Math.floor(s / 13);
          case l.BYTE:
          default:
            return Math.floor(s / 8);
        }
      }),
      (e.getBestVersionForData = function(t, e) {
        var r,
          i = c.from(e, c.M);
        if (h(t)) {
          if (t.length > 1) return s(t, i);
          if (0 === t.length) return 1;
          r = t[0];
        } else r = t;
        return n(r.mode, r.getLength(), i);
      }),
      (e.getEncodedBits = function(t) {
        if (!e.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
        for (var r = t << 12; a.getBCHDigit(r) - p >= 0; )
          r ^= 7973 << (a.getBCHDigit(r) - p);
        return (t << 12) | r;
      });
  },
  function(t, e) {
    var r =
      "(?:[　-〿]|[぀-ゟ]|[゠-ヿ]|[＀-￯]|[一-龯]|[★-☆]|[←-↕]|※|[‐―‘’‥…“”∥≠]|[Α-ё]|[§¨±´×÷])+";
    (e.KANJI = new RegExp(r, "g")),
      (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+-./:]+", "g")),
      (e.BYTE = new RegExp(
        "(?:(?![A-Z0-9 $%*+-./:]|(?:[　-〿]|[぀-ゟ]|[゠-ヿ]|[＀-￯]|[一-龯]|[★-☆]|[←-↕]|※|[‐―‘’‥…“”∥≠]|[Α-ё]|[§¨±´×÷])+).)+",
        "g"
      )),
      (e.NUMERIC = new RegExp("[0-9]+", "g")),
      (e.ALPHANUMERIC = new RegExp("[A-Z $%*+-./:]+", "g"));
    var n = new RegExp("^" + r + "$"),
      i = new RegExp("^[0-9]+$"),
      o = new RegExp("^[A-Z0-9 $%*+-./:]+$");
    (e.testKanji = function(t) {
      return n.test(t);
    }),
      (e.testNumeric = function(t) {
        return i.test(t);
      }),
      (e.testAlphanumeric = function(t) {
        return o.test(t);
      });
  },
  function(t, e) {
    function r(t) {
      if ("string" != typeof t)
        throw new Error("Color should be defined as hex string");
      var e = t
        .slice()
        .replace("#", "")
        .split("");
      if (e.length < 3 || 5 === e.length || e.length > 8)
        throw new Error("Invalid hex color: " + t);
      (3 !== e.length && 4 !== e.length) ||
        (e = Array.prototype.concat.apply(
          [],
          e.map(function(t) {
            return [t, t];
          })
        )),
        6 === e.length && e.push("F", "F");
      var r = parseInt(e.join(""), 16);
      return {
        r: (r >> 24) & 255,
        g: (r >> 16) & 255,
        b: (r >> 8) & 255,
        a: 255 & r
      };
    }
    (e.getOptions = function(t) {
      t || (t = {}), t.color || (t.color = {});
      var e =
        void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin;
      return {
        scale: t.scale || 4,
        margin: e,
        color: {
          dark: r(t.color.dark || "#000000ff"),
          light: r(t.color.light || "#ffffffff")
        },
        type: t.type,
        rendererOpts: t.rendererOpts || {}
      };
    }),
      (e.qrToImageData = function(t, e, r, n, i) {
        for (
          var o = e.modules.size,
            s = e.modules.data,
            a = r * n,
            u = o * n + 2 * a,
            c = [i.light, i.dark],
            l = 0;
          l < u;
          l++
        )
          for (var h = 0; h < u; h++) {
            var p = 4 * (l * u + h),
              f = i.light;
            if (l >= a && h >= a && l < u - a && h < u - a)
              f = c[s[Math.floor((l - a) / n) * o + Math.floor((h - a) / n)]];
            (t[p++] = f.r), (t[p++] = f.g), (t[p++] = f.b), (t[p] = f.a);
          }
      });
  },
  function(t, e, r) {
    function n(t, e, r, n, o) {
      var s = arguments.length - 1;
      if (s < 2) throw new Error("Too few arguments provided");
      if (
        (2 === s
          ? ((o = r), (r = e), (e = n = void 0))
          : 3 === s &&
            (e.getContext && void 0 === o
              ? ((o = n), (n = void 0))
              : ((o = n), (n = r), (r = e), (e = void 0))),
        "function" != typeof o)
      )
        throw new Error("Callback required as last argument");
      try {
        o(null, t(i.create(r, n), e, n));
      } catch (t) {
        o(t);
      }
    }
    var i = r(25),
      o = r(41),
      s = r(42);
    (e.create = i.create),
      (e.toCanvas = n.bind(null, o.render)),
      (e.toDataURL = n.bind(null, o.renderToDataURL)),
      (e.toString = n.bind(null, function(t, e, r) {
        return s.render(t, r);
      })),
      (e.qrcodedraw = function() {
        return { draw: e.toCanvas };
      });
  },
  function(t, e) {
    t.exports = (function(t) {
      function e(n) {
        if (r[n]) return r[n].exports;
        var i = (r[n] = { i: n, l: !1, exports: {} });
        return t[n].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
      }
      var r = {};
      return (
        (e.m = t),
        (e.c = r),
        (e.d = function(t, r, n) {
          e.o(t, r) ||
            Object.defineProperty(t, r, {
              configurable: !1,
              enumerable: !0,
              get: n
            });
        }),
        (e.n = function(t) {
          var r =
            t && t.__esModule
              ? function() {
                  return t.default;
                }
              : function() {
                  return t;
                };
          return e.d(r, "a", r), r;
        }),
        (e.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.p = ""),
        e((e.s = 106))
      );
    })([
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n,
          i,
          o,
          s,
          a,
          u,
          c,
          l,
          h,
          p,
          f,
          d = r(114),
          y = r(118);
        !(function(t) {
          (t[(t.GT = 0)] = "GT"),
            (t[(t.GTE = 1)] = "GTE"),
            (t[(t.LT = 2)] = "LT"),
            (t[(t.LTE = 3)] = "LTE"),
            (t[(t.EQ = 4)] = "EQ"),
            (t[(t.NEQ = 5)] = "NEQ");
        })((n = e.ComparisonOperator || (e.ComparisonOperator = {}))),
          (function(t) {
            (t[(t.INCREASE = 1)] = "INCREASE"),
              (t[(t.DECREASE = -1)] = "DECREASE");
          })((i = e.ScalarDir || (e.ScalarDir = {}))),
          (function(t) {
            (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
          })((o = e.Axis2D || (e.Axis2D = {}))),
          (function(t) {
            (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y"), (t[(t.Z = 2)] = "Z");
          })((s = e.Axis3D || (e.Axis3D = {}))),
          (function(t) {
            (t[(t.SET = 0)] = "SET"), (t[(t.INCREASE = 1)] = "INCREASE");
          })((a = e.Operation || (e.Operation = {}))),
          (function(t) {
            (t[(t.CW = 0)] = "CW"),
              (t[(t.CCW = 1)] = "CCW"),
              (t[(t.NEAR = 2)] = "NEAR");
          })((u = e.RotateDirection || (e.RotateDirection = {}))),
          (function(t) {
            (t[(t.X_CW = 0)] = "X_CW"),
              (t[(t.X_CCW = 1)] = "X_CCW"),
              (t[(t.Y_CW = 2)] = "Y_CW"),
              (t[(t.Y_CCW = 3)] = "Y_CCW");
          })((c = e.Rotate3DDirection || (e.Rotate3DDirection = {}))),
          (function(t) {
            (t[(t.VERTICAL = 0)] = "VERTICAL"),
              (t[(t.HORIZONTAL = 1)] = "HORIZONTAL"),
              (t[(t.FREE = 2)] = "FREE");
          })((l = e.DragAxis || (e.DragAxis = {}))),
          (function(t) {
            (t[(t.UP = 0)] = "UP"),
              (t[(t.DOWN = 1)] = "DOWN"),
              (t[(t.LEFT = 2)] = "LEFT"),
              (t[(t.RIGHT = 3)] = "RIGHT");
          })((h = e.MoveDir || (e.MoveDir = {}))),
          (function(t) {
            (t[(t.BACK = 0)] = "BACK"),
              (t[(t.FRONT = 1)] = "FRONT"),
              (t[(t.BACKWARD = 2)] = "BACKWARD"),
              (t[(t.FORWARD = 3)] = "FORWARD");
          })((p = e.ReorderType || (e.ReorderType = {}))),
          (function(t) {
            (t[(t.SCROLL = 0)] = "SCROLL"),
              (t[(t.PAGING = 1)] = "PAGING"),
              (t[(t.NONE = 2)] = "NONE");
          })(e.ScrollType || (e.ScrollType = {})),
          (function(t) {
            (t[(t.BOUNCE = 0)] = "BOUNCE"), (t[(t.NONE = 1)] = "NONE");
          })((f = e.ScrollEdgeEffectType || (e.ScrollEdgeEffectType = {}))),
          (e.axisToDragAxis = function(t) {
            return t == o.X ? l.HORIZONTAL : t == o.Y ? l.VERTICAL : void 0;
          }),
          (e.moveDirToAxis = function(t) {
            if (t == h.UP || t == h.DOWN) return o.Y;
            if (t == h.LEFT || t == h.RIGHT) return o.X;
            throw new Error("Unexpected dir value: " + t);
          }),
          (e.moveDirToScalarDir = function(t) {
            if (t == h.UP || t == h.LEFT) return i.DECREASE;
            if (t == h.DOWN || t == h.RIGHT) return i.INCREASE;
            throw new Error("Unexpected dir value: " + t);
          }),
          (e.rotate3DDirTo2D = function(t) {
            switch (t) {
              case c.X_CW:
              case c.Y_CW:
                return u.CW;
              case c.X_CCW:
              case c.Y_CCW:
                return u.CCW;
              default:
                return null;
            }
          }),
          (e.rotate3DDirToAxis = function(t) {
            switch (t) {
              case c.X_CW:
              case c.X_CCW:
                return s.X;
              case c.Y_CW:
              case c.Y_CCW:
                return s.Y;
              default:
                return null;
            }
          }),
          (e.stringToComparisonOperator = function(t) {
            switch (t) {
              case "GT":
                return n.GT;
              case "GTE":
                return n.GTE;
              case "LT":
                return n.LT;
              case "LTE":
                return n.LTE;
              case "EQ":
                return n.EQ;
              case "NEQ":
                return n.NEQ;
              default:
                throw new Error("Invalid ComparisonOperator value: " + t);
            }
          }),
          (e.stringToMoveDir = function(t) {
            switch (t) {
              case "UP":
                return h.UP;
              case "DOWN":
                return h.DOWN;
              case "LEFT":
                return h.LEFT;
              case "RIGHT":
                return h.RIGHT;
              default:
                throw new Error("Invalid MoveDir value: " + t);
            }
          }),
          (e.stringToOperation = function(t) {
            switch (t) {
              case "SET":
                return a.SET;
              case "INCREASE":
                return a.INCREASE;
              default:
                throw new Error("Invalid Operation value: " + t);
            }
          }),
          (e.stringToRotateDir = function(t) {
            switch (t) {
              case "CW":
                return u.CW;
              case "CCW":
                return u.CCW;
              case "NEAR":
                return u.NEAR;
              default:
                throw new Error("Invalid RotateDirection value: " + t);
            }
          }),
          (e.stringToRotate3DDir = function(t) {
            switch (t) {
              case "X_CW":
                return c.X_CW;
              case "X_CCW":
                return c.X_CCW;
              case "Y_CW":
                return c.Y_CW;
              case "Y_CCW":
                return c.Y_CCW;
              default:
                throw new Error("Invalid Rotate3DDirection value: " + t);
            }
          }),
          (e.stringToReorderType = function(t) {
            switch (t) {
              case "BACK":
                return p.BACK;
              case "FRONT":
                return p.FRONT;
              case "BACKWARD":
                return p.BACKWARD;
              case "FORWARD":
                return p.FORWARD;
              default:
                throw new Error("Invalid ReorderType value: " + t);
            }
          }),
          (e.stringToScrollEdgeEffectType = function(t) {
            switch (t) {
              case "BOUNCE":
                return f.BOUNCE;
              case "NONE":
                return f.NONE;
              default:
                throw new Error("Invalid ScrollEdgeEffectType value: " + t);
            }
          }),
          (e.scrollEdgeEffectTypeToScrollEndEffect = function(t) {
            switch (t) {
              case f.BOUNCE:
                return new d.BounceScrollEndEffect();
              case f.NONE:
                return new y.NoBounceScrollEndEffect();
              default:
                throw new Error("Unhandled ScrollEdgeEffectType");
            }
          }),
          (e.scrollEdgeEffectTypeToOverScrollRatio = function(t) {
            switch (t) {
              case f.BOUNCE:
                return 0.4;
              case f.NONE:
              default:
                return 0;
            }
          });
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n,
          i = r(8),
          o = (function() {
            function t(t, e) {
              (this.dataType = t), (this.env = e);
            }
            return (
              (t.prototype.evalAsLayer = function() {
                switch (this.dataType) {
                  case n.NUMBER:
                    return (
                      this.reportError(
                        i.PPExprEvalError.castingNumberToLayer()
                      ),
                      null
                    );
                  case n.STRING:
                    return (
                      this.reportError(
                        i.PPExprEvalError.castingStringToLayer()
                      ),
                      null
                    );
                  case n.COLOR:
                    return (
                      this.reportError(i.PPExprEvalError.castingColorToLayer()),
                      null
                    );
                  case n.LAYER:
                  default:
                    return (
                      this.reportError(i.PPExprEvalError.unexpected()), null
                    );
                }
              }),
              (t.prototype.reportError = function(t) {
                this.env && this.env.reportError(t);
              }),
              t
            );
          })();
        (e.PPExpr = o),
          (function(t) {
            (t[(t.LAYER = 0)] = "LAYER"),
              (t[(t.NUMBER = 1)] = "NUMBER"),
              (t[(t.STRING = 2)] = "STRING"),
              (t[(t.COLOR = 3)] = "COLOR");
          })((n = e.PPExprDataType || (e.PPExprDataType = {}))),
          (e.dataTypeToEnum = function(t) {
            switch (t) {
              case "NUMBER":
                return n.NUMBER;
              case "STRING":
                return n.STRING;
              case "COLOR":
                return n.COLOR;
              case "LAYER":
                return n.LAYER;
              default:
                return null;
            }
          }),
          (e.dataTypeToString = function(t) {
            switch (t) {
              case n.NUMBER:
                return "NUMBER";
              case n.STRING:
                return "STRING";
              case n.COLOR:
                return "COLOR";
              case n.LAYER:
                return "LAYER";
              default:
                return null;
            }
          });
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(0),
          i = (function() {
            function t(t, e) {
              (this.x = t), (this.y = e);
            }
            return (
              (t.prototype.getValue = function(t) {
                return t == n.Axis2D.X
                  ? this.x
                  : t == n.Axis2D.Y
                    ? this.y
                    : void 0;
              }),
              (t.prototype.set = function(t, e) {
                (this.x = t), (this.y = e);
              }),
              (t.prototype.copyFrom = function(t) {
                (this.x = t.x), (this.y = t.y);
              }),
              (t.prototype.setDiff = function(t, e) {
                (this.x = e.x - t.x), (this.y = e.y - t.y);
              }),
              (t.prototype.clone = function() {
                return new t(this.x, this.y);
              }),
              t
            );
          })();
        e.Point = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.setLogLevel = function(t) {
              this.logLevel = t;
            }),
            (t.d = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel <= 0 && console.debug.apply(console, t);
            }),
            (t.i = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel <= 1 && console.info.apply(console, t);
            }),
            (t.w = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel <= 2 && console.warn.apply(console, t);
            }),
            (t.e = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel <= 3 && console.error.apply(console, t);
            }),
            (t.assert = function(t, e) {
              void 0 === e && (e = null),
                t ||
                  this.w(
                    "Assertion failed" + (e ? ": " + e : "."),
                    new Error()
                  );
            }),
            (t.logLevel = 2),
            t
          );
        })();
        e.Logger = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n,
          i = r(2),
          o = r(121),
          s = r(3);
        !(function(t) {
          (t[(t.DOWN = 0)] = "DOWN"),
            (t[(t.UP = 1)] = "UP"),
            (t[(t.MOVE = 2)] = "MOVE");
        })((n = e.TouchEventAction || (e.TouchEventAction = {}))),
          (function(t) {
            (t[(t.TAP = 0)] = "TAP"),
              (t[(t.LONG_PRESS = 1)] = "LONG_PRESS"),
              (t[(t.TOUCH_UP = 2)] = "TOUCH_UP"),
              (t[(t.FLING = 3)] = "FLING"),
              (t[(t.MOVE_FREE = 4)] = "MOVE_FREE"),
              (t[(t.MOVE_VERTICAL = 5)] = "MOVE_VERTICAL"),
              (t[(t.MOVE_HORIZONTAL = 6)] = "MOVE_HORIZONTAL"),
              (t[(t.PINCH = 7)] = "PINCH"),
              (t[(t.ROTATE = 8)] = "ROTATE"),
              (t[(t.NONE = 9)] = "NONE");
          })(e.TouchEventUsageType || (e.TouchEventUsageType = {}));
        var a = (function() {
          function t() {
            (this.pointerMap = {}),
              (this.focus = new i.Point(0, 0)),
              (this.pointerCount = 0),
              (this.spanTrackingEnabled = !1);
          }
          return (
            (t.prototype.addPointer = function(t, e, r, o) {
              (this.lastAction = n.DOWN),
                (this.lastActionPointerId = t),
                (this.lastActionTime = o),
                this.pointerMap[t]
                  ? this.pointerMap[t].set(e, r)
                  : ((this.pointerMap[t] = new i.Point(e, r)),
                    this.pointerCount++),
                this.updateValues();
            }),
            (t.prototype.removePointer = function(t, e) {
              (this.lastAction = n.UP),
                (this.lastActionPointerId = t),
                (this.lastActionTime = e),
                this.pointerMap[t] &&
                  (delete this.pointerMap[t],
                  this.updateValues(),
                  this.pointerCount--);
            }),
            (t.prototype.addMovement = function(t, e, r, i) {
              (this.lastAction = n.MOVE),
                (this.lastActionPointerId = t),
                (this.lastActionTime = i),
                this.pointerMap
                  ? ((this.pointerMap[t].x = e),
                    (this.pointerMap[t].y = r),
                    this.updateValues())
                  : s.Logger.e("addMovement on untracked pointer");
            }),
            (t.prototype.enableSpanTracking = function() {
              this.spanTrackingEnabled ||
                ((this.spanTrackingEnabled = !0), this.computeSpan());
            }),
            (t.prototype.getTouchCount = function() {
              return this.pointerCount;
            }),
            (t.prototype.getVelocity = function() {
              return this.velocityTracker
                ? this.velocityTracker.getVelocity()
                : new i.Point(0, 0);
            }),
            (t.prototype.getSpan = function() {
              return this.span;
            }),
            (t.prototype.updateValues = function() {
              var t = 0,
                e = 0,
                r = 0;
              for (var n in this.pointerMap)
                (t += this.pointerMap[n].x), (e += this.pointerMap[n].y), r++;
              r > 0 && this.focus.set(t / r, e / r),
                this.computeVelocity(),
                this.spanTrackingEnabled && this.computeSpan();
            }),
            (t.prototype.computeVelocity = function() {
              this.velocityTracker
                ? this.velocityTracker.update(this.focus, Date.now())
                : (this.velocityTracker = new o.VelocityTracker(
                    this.focus,
                    Date.now()
                  ));
            }),
            (t.prototype.computeSpan = function() {
              var t = 0,
                e = 0;
              for (var r in this.pointerMap) {
                var n = this.pointerMap[r];
                (t += Math.abs(n.x - this.focus.x)),
                  (e += Math.abs(n.y - this.focus.y));
              }
              var i = (t / this.pointerCount) * 2,
                o = (e / this.pointerCount) * 2;
              this.span = Math.sqrt(i * i + o * o);
            }),
            t
          );
        })();
        e.PPTouchEvent = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(0),
          i = (function() {
            function t() {}
            return (
              (t.normalize = function(t) {
                var e = t % 360;
                return e < 0 ? e + 360 : e;
              }),
              (t.getAngleDelta = function(t, e, r) {
                var i = e - t;
                return (
                  r == n.RotateDirection.NEAR
                    ? i > 180
                      ? (i -= 360)
                      : i < -180 && (i += 360)
                    : r == n.RotateDirection.CW
                      ? i < 0 && (i += 360)
                      : r == n.RotateDirection.CCW && i > 0 && (i -= 360),
                  i
                );
              }),
              (t.toRadians = function(t) {
                return (t * Math.PI) / 180;
              }),
              (t.toDegrees = function(t) {
                return (180 * t) / Math.PI;
              }),
              (t.rotate = function(t, e, r, n) {
                var i = this.toRadians(e),
                  o =
                    r.x + (t.x - r.x) * Math.cos(i) - (t.y - r.y) * Math.sin(i),
                  s =
                    r.y + (t.x - r.x) * Math.sin(i) + (t.y - r.y) * Math.cos(i);
                n.set(o, s);
              }),
              (t.isVisible3DRotation = function(t) {
                var e = this.normalize(t);
                return Math.abs(e - 90) > 1 && Math.abs(e - 270) > 1;
              }),
              (t.reverseRotateX = function(t, e, r, n, i) {
                var o = this.toRadians(e),
                  s = t.x - r.x,
                  a = t.y - r.y,
                  u = Math.cos(o),
                  c = Math.sin(o),
                  l = a / (u + (0 * c) / n - (c * a) / n),
                  h = s + ((s - 0) * c * l) / n;
                (i.x = h + r.x), (i.y = l + r.y);
              }),
              (t.reverseRotateY = function(t, e, r, n, i) {
                var o = this.toRadians(e),
                  s = t.x - r.x,
                  a = t.y - r.y,
                  u = Math.cos(o),
                  c = Math.sin(o),
                  l = s / (u - (0 * c) / n + (c * s) / n),
                  h = a - (a * c * l) / n + (0 * c * l) / n;
                (i.x = l + r.x), (i.y = h + r.y);
              }),
              (t.getLineAngle = function(t, e) {
                return this.normalize(
                  this.toDegrees(Math.atan2(t.y - e.y, t.x - e.x))
                );
              }),
              t
            );
          })();
        e.AngleUtils = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.startTime = null),
              (i.actualEndValue = null),
              (i.endValue = e),
              (i.duration = r),
              (i.easingFunc = n),
              i
            );
          }
          return (
            n(e, t),
            (e.fromDDE = function(t, r) {
              return new e(t, r.duration, r.easingFunc);
            }),
            (e.prototype.clone = function() {
              return new e(this.endValue, this.duration, this.easingFunc);
            }),
            (e.prototype.start = function(t, e) {
              return (
                (this.startValue = t),
                (this.startTime = e),
                (this.actualEndValue = this.endValue.evalAsNumber()),
                null !== this.actualEndValue
              );
            }),
            (e.prototype.getValueAt = function(t) {
              return null === this.actualEndValue || null === this.startTime
                ? null
                : this.computeValueAt(this.startValue, this.actualEndValue, t);
            }),
            (e.prototype.isEnded = function(t) {
              return (
                null !== this.startTime && t >= this.startTime + this.duration
              );
            }),
            (e.prototype.getDuration = function() {
              return this.duration;
            }),
            (e.prototype.computeValueAt = function(t, e, r) {
              if (r >= this.startTime + this.duration) return e;
              if (r <= this.startTime) return t;
              var n = e - t,
                i = (r - this.startTime) / this.duration;
              return t + n * this.easingFunc.computeValueProgress(i);
            }),
            e
          );
        })(r(47).SetNumberAnimation);
        e.EasingSetNumberAnimation = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(12),
          s = r(8),
          a = (function(t) {
            function e(e, r) {
              void 0 === r && (r = null);
              var n = t.call(this, i.PPExprDataType.NUMBER, r) || this;
              return (
                (n.numberValue = null),
                (n.stringValue = null),
                (n.numberValue = e),
                (n.stringValue = o.PPExprUtils.numberToString(e)),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                return this.numberValue;
              }),
              (e.prototype.evalAsString = function() {
                return this.stringValue;
              }),
              (e.prototype.evalAsColor = function() {
                return (
                  this.reportError(s.PPExprEvalError.castingNumberToColor()),
                  null
                );
              }),
              e
            );
          })(i.PPExpr);
        e.NumberConstantExpr = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r) {
            (this.message = t), (this.code = e), (this.args = r);
          }
          return (
            (t.castingNumberToColor = function() {
              return new t(
                "Unable to convert a number to a color.",
                "CASTING_NUMBER_TO_COLOR",
                []
              );
            }),
            (t.castingNumberToLayer = function() {
              return new t(
                "Unable to convert a number to a layer.",
                "CASTING_NUMBER_TO_LAYER",
                []
              );
            }),
            (t.castingStringToNumber = function(e) {
              return new t(
                'Unable to convert the string "' + e + '" to a number.',
                "CASTING_STRING_TO_NUMBER",
                [e]
              );
            }),
            (t.castingStringToColor = function(e) {
              return new t(
                'Unable to convert the string "' + e + '" to a color.',
                "CASTING_STRING_TO_COLOR",
                [e]
              );
            }),
            (t.castingStringToLayer = function() {
              return new t(
                "Unable to convert a string to a layer.",
                "CASTING_STRING_TO_LAYER",
                []
              );
            }),
            (t.castingColorToNumber = function() {
              return new t(
                "Unable to convert a color to a number.",
                "CASTING_COLOR_TO_NUMBER",
                []
              );
            }),
            (t.castingColorToLayer = function() {
              return new t(
                "Unable to convert a color to a layer.",
                "CASTING_COLOR_TO_LAYER",
                []
              );
            }),
            (t.castingLayerToNumber = function() {
              return new t(
                "Unable to convert a layer to a number.",
                "CASTING_LAYER_TO_NUMBER",
                []
              );
            }),
            (t.castingLayerToString = function() {
              return new t(
                "Unable to convert a layer to a string.",
                "CASTING_LAYER_TO_STRING",
                []
              );
            }),
            (t.castingLayerToColor = function() {
              return new t(
                "Unable to convert a layer to a color.",
                "CASTING_LAYER_TO_COLOR",
                []
              );
            }),
            (t.noProperty = function(e, r) {
              return new t(
                'Layer "' +
                  e +
                  '" doesn\'t have a property with name "' +
                  r +
                  '"',
                "NO_PROPERTY",
                [e, r]
              );
            }),
            (t.numberFunctionError = function(e) {
              return new t(
                'The result of function "' + e + '" is not a valid number.',
                "INVALID_NUMBER_FUNCTION_RESULT",
                [e]
              );
            }),
            (t.stringFunctionError = function(e) {
              return new t(
                'The result of function "' + e + '" is not a valid string.',
                "INVALID_STRING_FUNCTION_RESULT",
                [e]
              );
            }),
            (t.colorFunctionError = function(e) {
              return new t(
                'The result of function "' + e + '" is not a valid color.',
                "INVALID_COLOR_FUNCTION_RESULT",
                [e]
              );
            }),
            (t.layerFunctionError = function(e) {
              return new t(
                'The result of function "' + e + '" is not a valid layer.',
                "INVALID_LAYER_FUNCTION_RESULT",
                [e]
              );
            }),
            (t.negateColor = function() {
              return new t("Unable to negate a color value", "", []);
            }),
            (t.unexpected = function() {
              return new t("Unexpected error occurred.", "UNEXPECTED", []);
            }),
            t
          );
        })();
        e.PPExprEvalError = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), e;
        })(r(68).PPResponse);
        e.OneTimeResponse = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function(t) {
            (t[(t.PIXEL = 0)] = "PIXEL"),
              (t[(t.DEGREE = 1)] = "DEGREE"),
              (t[(t.PERCENT = 2)] = "PERCENT"),
              (t[(t.HEX = 3)] = "HEX"),
              (t[(t.SECOND = 4)] = "SECOND"),
              (t[(t.NONE = 5)] = "NONE");
          })(e.Unit || (e.Unit = {}));
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r) {
            (this.r = t), (this.g = e), (this.b = r);
          }
          return (
            (t.fromString = function(e) {
              var r;
              if (t.REGEX_WITHOUT_SHOP.test(e)) r = 0;
              else {
                if (!t.REGEX_WITH_SHOP.test(e)) return null;
                r = 1;
              }
              return new t(
                parseInt(e.substr(r, 2), 16),
                parseInt(e.substr(r + 2, 2), 16),
                parseInt(e.substr(r + 4, 2), 16)
              );
            }),
            (t.white = function() {
              return new t(255, 255, 255);
            }),
            (t.toHex = function(t, e, r) {
              return (
                "#" +
                this.numberToHex(t) +
                this.numberToHex(e) +
                this.numberToHex(r)
              );
            }),
            (t.numberToHex = function(t) {
              var e = Math.min(Math.max(Math.round(t), 0), 255)
                .toString(16)
                .toUpperCase();
              return 1 == e.length ? "0" + e : e;
            }),
            (t.prototype.toHex = function() {
              return t.toHex(this.r, this.g, this.b);
            }),
            (t.prototype.toString = function(t) {
              return (
                "rgba(" +
                this.r +
                "," +
                this.g +
                "," +
                this.b +
                "," +
                Math.round(t) / 100 +
                ")"
              );
            }),
            (t.BLACK = new t(0, 0, 0)),
            (t.WHITE = new t(255, 255, 255)),
            (t.REGEX_WITHOUT_SHOP = /^[0-9a-zA-Z]{6}$/),
            (t.REGEX_WITH_SHOP = /^#[0-9a-zA-Z]{6}$/),
            t
          );
        })();
        e.PPColor = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(11),
          i = (function() {
            function t() {}
            return (
              (t.stringToNumber = function(t) {
                var e = +t;
                return isNaN(e) ? null : e;
              }),
              (t.numberToString = function(t) {
                if (null === t) return null;
                var e = "" + Math.round(100 * t) / 100;
                if (e.indexOf("e") >= 0) return null;
                var r = e.indexOf(".");
                for (
                  r >= 0 && e.length > r + 3 && (e = e.substring(0, r + 3));
                  (e.indexOf(".") >= 0 && "0" === e[e.length - 1]) ||
                  "." === e[e.length - 1];

                )
                  e = e.substring(0, e.length - 1);
                return e;
              }),
              (t.stringToColor = function(t) {
                return null === t ? null : n.PPColor.fromString(t);
              }),
              (t.colorToString = function(t) {
                return null === t ? null : t.toHex();
              }),
              t
            );
          })();
        e.PPExprUtils = i;
      },
      function(t, e, r) {
        "use strict";
        function n(t, e) {
          var r = i(t, e);
          if (null === r) throw new Error("Property is missing: " + e);
          return r;
        }
        function i(t, e, r) {
          if ((void 0 === r && (r = null), !t)) return r;
          var n = null;
          return (
            t.hasOwnProperty(e) && (n = t[e]),
            "string" == typeof n ? +n : null === n ? r : n
          );
        }
        function o(t, e, r) {
          if (!t) return r;
          var n = null;
          return (
            t.hasOwnProperty(e) && (n = t[e]),
            "string" == typeof n ? n : null === n ? r : n + ""
          );
        }
        function s(t, e, r) {
          void 0 === r && (r = null);
          var n = t[e];
          return (n && c.PPColor.fromString(n)) || r;
        }
        function a(t) {
          var e = t.split(":");
          return 1 == e.length ? +t : 2 == e.length ? 60 * e[0] + +e[1] : NaN;
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var u = r(14),
          c = r(11),
          l = r(41),
          h = r(58),
          p = r(134),
          f = r(48),
          d = r(15);
        (e.requireNumber = n),
          (e.readNumber = i),
          (e.readString = o),
          (e.requireString = function(t, e) {
            var r = o(t, e, null);
            if (null === r) throw new Error("Property is missing: " + e);
            return r;
          }),
          (e.requireColor = function(t, e) {
            var r = s(t, e, null);
            if (null === r) throw new Error("Property is missing: " + e);
            return r;
          }),
          (e.readTime = function(t, e, r) {
            void 0 === r && (r = null);
            var n = i(t, e, null);
            return null === n ? r : 1e3 * n;
          }),
          (e.readColor = s),
          (e.readBoolean = function(t, e, r) {
            var n = t[e];
            return "boolean" == typeof n
              ? n
              : "string" == typeof n
                ? "true" === n
                : r;
          }),
          (e.readLimit = function(t, e, r) {
            var n = i(t, e, null),
              o = i(t, r, null);
            return new l.NumberLimit(n, o);
          }),
          (e.readVideoTime = function(t, e) {
            return a(o(t, e, "0"));
          }),
          (e.parseVideoTime = a),
          (e.parseNumber = function(t) {
            var e = +t;
            return isNaN(e) ? null : e;
          }),
          (e.requireNumberOrTime = function(t, e) {
            if (!t || !t.hasOwnProperty(e))
              throw new Error("Property is missing: " + e);
            var r = t[e],
              n = NaN;
            if (null === r) throw new Error("Property is missing: " + e);
            if ("number" == typeof r) n = r;
            else {
              if ("string" != typeof r)
                throw new Error("Unexpected value for " + e);
              n = r.indexOf(":") >= 0 ? a(r) : +r;
            }
            if (isNaN(n))
              throw new Error("Property " + e + " is not a number.: " + r);
            return n;
          }),
          (e.readExpression = function(t, e, r, n, i) {
            var s = o(t, e, null);
            return null === s || "" === s.trim()
              ? null
              : h.PPExprParser.parseAsExpr(s, r, n, i);
          }),
          (e.readEasing = function(t, e) {
            void 0 === e && (e = null);
            var r = t[u.StringUtils.prepend("easingFunction", e)] || "LINEAR";
            if ("CUBIC_BEZIER" != r) {
              if ("SPRING" == r) {
                var i = n(t, u.StringUtils.prepend("tension", e)),
                  o = n(t, u.StringUtils.prepend("friction", e));
                return new p.SpringEasingFunc(i, o, 1e3 / 60, 600);
              }
              return d.EasingFuncFactory.fromName(r);
            }
            try {
              var s = n(t, u.StringUtils.prepend("easingCubicBezierX1", e)),
                a = n(t, u.StringUtils.prepend("easingCubicBezierY1", e)),
                c = n(t, u.StringUtils.prepend("easingCubicBezierX2", e)),
                l = n(t, u.StringUtils.prepend("easingCubicBezierY2", e));
              return new f.CubicBezierEasingFunc(s, a, c, l);
            } catch (t) {
              return d.EasingFuncFactory.fromName("LINEAR");
            }
          });
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.isNil = function(t) {
              return null === t;
            }),
            (t.ifNil = function(t, e) {
              return this.isNil(t) ? e : t;
            }),
            t
          );
        })();
        e.LangUtils = n;
        var i = (function() {
          function t() {}
          return (
            (t.contains = function(t, e) {
              return t.indexOf(e) >= 0;
            }),
            (t.remove = function(t, e) {
              for (var r = 0, n = t.length - 1; n >= 0; n--)
                t[n] == e && (t.splice(n, 1), r++);
              return r;
            }),
            t
          );
        })();
        e.ArrayUtils = i;
        var o = (function() {
          function t() {}
          return (
            (t.forValues = function(t, e) {
              for (var r in t) t.hasOwnProperty(r) && e(t[r]);
            }),
            t
          );
        })();
        e.ObjectUtils = o;
        var s = (function() {
          function t() {}
          return (
            (t.prepend = function(t, e) {
              return e ? e + this.capitalize(t) : t;
            }),
            (t.capitalize = function(t) {
              return t.length > 1 ? t[0].toUpperCase() + t.substring(1) : t;
            }),
            (t.isWhiteSpace = function(t) {
              return " " == t || "\t" == t || "\n" == t || "\r" == t;
            }),
            (t.isNumber = function(t) {
              return t >= "0" && t <= "9";
            }),
            (t.isAlpha = function(t) {
              return (t >= "a" && t <= "z") || (t >= "A" && t <= "Z");
            }),
            t
          );
        })();
        e.StringUtils = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(48),
          i = r(115),
          o = r(116),
          s = (function() {
            function t() {}
            return (
              (t.getInstance = function() {
                return this.instance;
              }),
              (t.prototype.computeValueProgress = function(t) {
                return t;
              }),
              (t.instance = new t()),
              t
            );
          })();
        e.LinearEasingFunc = s;
        var a = (function() {
          function t() {}
          return (
            (t.linear = function() {
              return s.getInstance();
            }),
            (t.fromName = function(t) {
              var e;
              return (
                (e =
                  null == t
                    ? s.getInstance()
                    : "EASE" === t
                      ? new n.CubicBezierEasingFunc(0.25, 0.1, 0.25, 1)
                      : "EASE_IN.CUBIC" === t || "EASE_IN" === t
                        ? new n.CubicBezierEasingFunc(0.55, 0.055, 0.675, 0.19)
                        : "EASE_IN.SINE" === t
                          ? new n.CubicBezierEasingFunc(0.47, 0, 0.745, 0.715)
                          : "EASE_IN.QUAD" === t
                            ? new n.CubicBezierEasingFunc(
                                0.55,
                                0.085,
                                0.68,
                                0.53
                              )
                            : "EASE_IN.QUART" === t
                              ? new n.CubicBezierEasingFunc(
                                  0.895,
                                  0.03,
                                  0.685,
                                  0.22
                                )
                              : "EASE_IN.QUINT" === t
                                ? new n.CubicBezierEasingFunc(
                                    0.755,
                                    0.05,
                                    0.855,
                                    0.06
                                  )
                                : "EASE_IN.EXPO" === t
                                  ? new n.CubicBezierEasingFunc(
                                      0.95,
                                      0.05,
                                      0.795,
                                      0.035
                                    )
                                  : "EASE_IN.CIRC" === t
                                    ? new n.CubicBezierEasingFunc(
                                        0.6,
                                        0.04,
                                        0.98,
                                        0.335
                                      )
                                    : "EASE_IN.BACK" === t
                                      ? new n.CubicBezierEasingFunc(
                                          0.6,
                                          -0.28,
                                          0.735,
                                          0.045
                                        )
                                      : "EASE_IN.ELASTIC" === t
                                        ? new i.ElasticEasingFunc(
                                            i.ElasticEasingFunc.EASE_IN
                                          )
                                        : "EASE_IN.BOUNCE" === t
                                          ? new o.BounceEasingFunc(
                                              o.BounceEasingFunc.EASE_IN
                                            )
                                          : "EASE_OUT.CUBIC" === t ||
                                            "EASE_OUT" === t
                                            ? new n.CubicBezierEasingFunc(
                                                0.215,
                                                0.61,
                                                0.355,
                                                1
                                              )
                                            : "EASE_OUT.SINE" === t
                                              ? new n.CubicBezierEasingFunc(
                                                  0.39,
                                                  0.575,
                                                  0.565,
                                                  1
                                                )
                                              : "EASE_OUT.QUAD" === t
                                                ? new n.CubicBezierEasingFunc(
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                  )
                                                : "EASE_OUT.QUART" === t
                                                  ? new n.CubicBezierEasingFunc(
                                                      0.165,
                                                      0.84,
                                                      0.44,
                                                      1
                                                    )
                                                  : "EASE_OUT.QUINT" === t
                                                    ? new n.CubicBezierEasingFunc(
                                                        0.23,
                                                        1,
                                                        0.32,
                                                        1
                                                      )
                                                    : "EASE_OUT.EXPO" === t
                                                      ? new n.CubicBezierEasingFunc(
                                                          0.19,
                                                          1,
                                                          0.22,
                                                          1
                                                        )
                                                      : "EASE_OUT.CIRC" === t
                                                        ? new n.CubicBezierEasingFunc(
                                                            0.075,
                                                            0.82,
                                                            0.165,
                                                            1
                                                          )
                                                        : "EASE_OUT.BACK" === t
                                                          ? new n.CubicBezierEasingFunc(
                                                              0.175,
                                                              0.885,
                                                              0.32,
                                                              1.275
                                                            )
                                                          : "EASE_OUT.ELASTIC" ===
                                                            t
                                                            ? new i.ElasticEasingFunc(
                                                                i.ElasticEasingFunc.EASE_OUT
                                                              )
                                                            : "EASE_OUT.BOUNCE" ===
                                                              t
                                                              ? new o.BounceEasingFunc(
                                                                  o.BounceEasingFunc.EASE_OUT
                                                                )
                                                              : "EASE_IN_OUT.CUBIC" ===
                                                                  t ||
                                                                "EASE_IN_OUT" ===
                                                                  t
                                                                ? new n.CubicBezierEasingFunc(
                                                                    0.645,
                                                                    0.045,
                                                                    0.355,
                                                                    1
                                                                  )
                                                                : "EASE_IN_OUT.SINE" ===
                                                                  t
                                                                  ? new n.CubicBezierEasingFunc(
                                                                      0.445,
                                                                      0.05,
                                                                      0.55,
                                                                      0.95
                                                                    )
                                                                  : "EASE_IN_OUT.QUAD" ===
                                                                    t
                                                                    ? new n.CubicBezierEasingFunc(
                                                                        0.455,
                                                                        0.03,
                                                                        0.515,
                                                                        0.955
                                                                      )
                                                                    : "EASE_IN_OUT.QUART" ===
                                                                      t
                                                                      ? new n.CubicBezierEasingFunc(
                                                                          0.77,
                                                                          0,
                                                                          0.175,
                                                                          1
                                                                        )
                                                                      : "EASE_IN_OUT.QUINT" ===
                                                                        t
                                                                        ? new n.CubicBezierEasingFunc(
                                                                            0.86,
                                                                            0,
                                                                            0.07,
                                                                            1
                                                                          )
                                                                        : "EASE_IN_OUT.EXPO" ===
                                                                          t
                                                                          ? new n.CubicBezierEasingFunc(
                                                                              1,
                                                                              0,
                                                                              0,
                                                                              1
                                                                            )
                                                                          : "EASE_IN_OUT.CIRC" ===
                                                                            t
                                                                            ? new n.CubicBezierEasingFunc(
                                                                                0.785,
                                                                                0.135,
                                                                                0.15,
                                                                                0.86
                                                                              )
                                                                            : "EASE_IN_OUT.BACK" ===
                                                                              t
                                                                              ? new n.CubicBezierEasingFunc(
                                                                                  0.68,
                                                                                  -0.55,
                                                                                  0.265,
                                                                                  1.55
                                                                                )
                                                                              : "EASE_IN_OUT.ELASTIC" ===
                                                                                t
                                                                                ? new i.ElasticEasingFunc(
                                                                                    i.ElasticEasingFunc.EASE_IN_OUT
                                                                                  )
                                                                                : "EASE_IN_OUT.BOUNCE" ===
                                                                                    t ||
                                                                                  "BOUNCE" ===
                                                                                    t
                                                                                  ? new o.BounceEasingFunc(
                                                                                      o.BounceEasingFunc.EASE_IN_OUT
                                                                                    )
                                                                                  : s.getInstance()) ||
                  (e = s.getInstance()),
                e
              );
            }),
            (t.EASE_OUT_CUBIC = "EASE_OUT.CUBIC"),
            (t.EASE_IN_OUT_QUAD = "EASE_IN_OUT.QUAD"),
            (t.EASE_IN_OUT_CUBIC = "EASE_IN_OUT.CUBIC"),
            (t.EASE_OUT_SINE = "EASE_OUT.SINE"),
            (t.EASE_IN_SINE = "EASE_IN.SINE"),
            t
          );
        })();
        e.EasingFuncFactory = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.prototype.init = function(t) {
              this.scheduler = t;
            }),
            t
          );
        })();
        e.Trigger = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(10),
          o = r(112),
          s = r(113),
          a = r(66),
          u = r(119),
          c = (function(t) {
            function e(e, r, n, a, c) {
              void 0 === a && (a = null), void 0 === c && (c = null);
              var l = t.call(this, e) || this;
              (l.initialValue = r), (l.curValue = r), (l.unit = n);
              var h = null;
              return (
                l.unit == i.Unit.DEGREE
                  ? (h = new s.DegreeNormalizer())
                  : (null === a && null == c) ||
                    (h = new s.MinMaxNormalizer(a, c)),
                (l.animationAccumulator = new o.AnimationAccumulator(r, h)),
                (l.changeAccumulator = new u.NumberChangeAccumulator(h)),
                l
              );
            }
            return (
              n(e, t),
              (e.prototype.setInitial = function(t) {
                (this.initialValue = t),
                  (this.curValue = t),
                  this.animationAccumulator.reset(t);
              }),
              (e.prototype.reset = function() {
                (this.curValue = this.initialValue),
                  this.changeAccumulator.clear(),
                  this.animationAccumulator.reset(this.curValue),
                  this.notifySetImmediate();
              }),
              (e.prototype.stop = function() {
                this.animationAccumulator.isChanging() &&
                  this.animationAccumulator.reset(this.curValue);
              }),
              (e.prototype.isChanging = function() {
                return (
                  this.changeAccumulator.isActive() ||
                  this.animationAccumulator.isChanging()
                );
              }),
              (e.prototype.startAnimation = function(t, e) {
                if (!this.changeAccumulator.isActive())
                  return this.animationAccumulator.startAnimation(t, e)
                    ? ((this.curValue = this.animationAccumulator.getValue()),
                      this.notifySetImmediate(),
                      !0)
                    : (this.notifyShouldProgress(), !1);
              }),
              (e.prototype.startContinuousChange = function(t, e) {
                !this.changeAccumulator.isActive() &&
                  this.animationAccumulator.isChanging() &&
                  this.animationAccumulator.progress(e) &&
                  (this.curValue = this.animationAccumulator.getValue()),
                  this.changeAccumulator.add(this.curValue, t) &&
                    ((this.curValue = this.changeAccumulator.getValue()),
                    this.notifySetImmediate()),
                  this.animationAccumulator.reset(this.curValue),
                  this.notifyShouldProgress();
              }),
              (e.prototype.endContinuousChange = function(t) {
                this.changeAccumulator.remove(t) &&
                  ((this.curValue = this.changeAccumulator.getValue()),
                  this.notifySetImmediate()),
                  this.changeAccumulator.isActive() ||
                    this.animationAccumulator.reset(this.curValue);
              }),
              (e.prototype.setImmediate = function(t) {
                (this.curValue = t),
                  this.animationAccumulator.reset(t),
                  this.notifySetImmediate();
              }),
              (e.prototype.progress = function(t) {
                if (this.changeAccumulator.isActive()) {
                  if (this.changeAccumulator.progress())
                    return (
                      (this.curValue = this.changeAccumulator.getValue()), !0
                    );
                } else if (this.animationAccumulator.progress(t))
                  return (
                    (this.curValue = this.animationAccumulator.getValue()), !0
                  );
                return !1;
              }),
              (e.prototype.curVal = function() {
                return this.curValue;
              }),
              (e.prototype.getNumberValue = function() {
                return this.curVal();
              }),
              (e.prototype.getNumberUnit = function() {
                return this.unit;
              }),
              e
            );
          })(a.Property);
        e.NumberProperty = c;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (
              (n.autoEnd = !0),
              (n.touchSession = null),
              (n.id = e),
              (n.layer = r),
              n
            );
          }
          return (
            n(e, t),
            (e.prototype.getId = function() {
              return this.id;
            }),
            (e.prototype.onTouchSessionStarted = function(t) {
              this.touchSession = t;
            }),
            e
          );
        })(r(16).Trigger);
        e.TouchTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r) {
            void 0 === t && (t = 0),
              void 0 === e && (e = null),
              void 0 === r && (r = null),
              (this.increment = 0),
              (this.min = null),
              (this.max = null),
              (this.increment = t),
              (this.min = e),
              (this.max = r);
          }
          return (
            (t.prototype.getIncrement = function() {
              return this.increment;
            }),
            (t.prototype.setIncrement = function(t) {
              this.increment = t;
            }),
            (t.prototype.setLimit = function(t) {
              t && ((this.min = t.min), (this.max = t.max));
            }),
            t
          );
        })();
        e.NumberChange = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(14),
          i = (function() {
            function t() {
              (this.text = null),
                (this.fontSize = null),
                (this.lineHeight = null),
                (this.textAlign = null),
                (this.verticalAlign = null),
                (this.font = null),
                (this.borderStyle = null),
                (this.fillStyle = null),
                (this.autoSize = !1),
                (this.paddingStyle = null),
                (this.radiusStyle = null);
            }
            return (
              (t.prototype.copyFrom = function(t) {
                (this.text = n.LangUtils.ifNil(t.text, this.text)),
                  (this.fontSize = n.LangUtils.ifNil(
                    t.fontSize,
                    this.fontSize
                  )),
                  (this.lineHeight = n.LangUtils.ifNil(
                    t.lineHeight,
                    this.lineHeight
                  )),
                  (this.textAlign = n.LangUtils.ifNil(
                    t.textAlign,
                    this.textAlign
                  )),
                  (this.verticalAlign = n.LangUtils.ifNil(
                    t.verticalAlign,
                    this.verticalAlign
                  )),
                  (this.font = n.LangUtils.ifNil(t.font, this.font)),
                  (this.borderStyle = n.LangUtils.ifNil(
                    t.borderStyle,
                    this.borderStyle
                  )),
                  (this.fillStyle = n.LangUtils.ifNil(
                    t.fillStyle,
                    this.fillStyle
                  )),
                  (this.autoSize = n.LangUtils.ifNil(
                    t.autoSize,
                    this.autoSize
                  )),
                  (this.paddingStyle = n.LangUtils.ifNil(
                    t.paddingStyle,
                    this.paddingStyle
                  )),
                  (this.radiusStyle = n.LangUtils.ifNil(
                    t.radiusStyle,
                    this.radiusStyle
                  ));
              }),
              (t.prototype.getStringValue = function() {
                return this.text;
              }),
              (t.DEFAULT_FONT_REGULAR = "SYSTEM_DEFAULT-Regular"),
              (t.DEFAULT_FONT_BOLD = "SYSTEM_DEFAULT-Bold"),
              t
            );
          })();
        e.PPTextAttributes = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(30),
          o = r(2),
          s = r(17),
          a = r(10),
          u = r(72),
          c = r(51),
          l = r(0),
          h = r(33),
          p = r(5),
          f = r(32),
          d = r(11),
          y = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, r) || this;
              return (
                (n.clipChildren = !0),
                (n.children = []),
                (n.fillColor = new f.ColorProperty(
                  "fillColor",
                  d.PPColor.white()
                )),
                (n.fillOpacity = new s.NumberProperty(
                  "fillOpacity",
                  100,
                  a.Unit.PERCENT,
                  0,
                  100
                )),
                (n.sX = new s.NumberProperty("scrollX", 0, a.Unit.PIXEL)),
                (n.sY = new s.NumberProperty("scrollY", 0, a.Unit.PIXEL)),
                (n.radius = new s.NumberProperty(
                  "radius",
                  0,
                  a.Unit.PIXEL,
                  0,
                  null
                )),
                (n.initialChildren = []),
                n.registerProperty(n.fillColor),
                n.registerProperty(n.fillOpacity),
                n.registerProperty(n.sX),
                n.registerProperty(n.sY),
                n.registerProperty(n.radius),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.addChildLayer = function(t) {
                this.children.push(t), this.initialChildren.push(t);
              }),
              (e.prototype.init = function(e) {
                t.prototype.init.call(this, e);
                for (var r = 0, n = this.children; r < n.length; r++)
                  n[r].init(e);
              }),
              (e.prototype.reset = function() {
                t.prototype.reset.call(this), (this.children.length = 0);
                for (var e = 0, r = this.initialChildren; e < r.length; e++) {
                  var n = r[e];
                  n.reset(),
                    this.children.push(n),
                    this.notifyChildOrderModified();
                }
              }),
              (e.prototype.removeAllObservers = function() {
                t.prototype.removeAllObservers.call(this);
                for (var e = 0, r = this.children; e < r.length; e++)
                  r[e].removeAllObservers();
              }),
              (e.prototype.start = function(e) {
                t.prototype.start.call(this, e);
                for (var r = 0, n = this.children; r < n.length; r++)
                  n[r].start(e);
              }),
              (e.prototype.stop = function(e) {
                t.prototype.stop.call(this, e);
                for (var r = 0, n = this.children; r < n.length; r++)
                  n[r].stop(e);
              }),
              (e.prototype.progress = function(e) {
                t.prototype.progress.call(this, e);
                for (var r = 0, n = this.children; r < n.length; r++)
                  n[r].progress(e);
              }),
              (e.prototype.reorder = function(t, e) {
                var r = this.children.indexOf(t);
                if (r >= 0) {
                  var n = this.computeReorderPosition(
                    e,
                    r,
                    this.children.length
                  );
                  null != n &&
                    (this.children.splice(r, 1),
                    this.children.splice(n, 0, t),
                    this.notifyChildOrderModified());
                }
              }),
              (e.prototype.findLayersAt = function(t, r) {
                if (this.isTouchable()) {
                  var n = this.translateParentPointToSelf(t),
                    i = this.includesSelfOriginPoint(n);
                  if ((i || !this.clipChildren) && this.children.length > 0)
                    for (
                      var s = new o.Point(
                          n.x + this.sX.curVal(),
                          n.y + this.sY.curVal()
                        ),
                        a = this.children.length - 1;
                      a >= 0;
                      a--
                    ) {
                      var u = this.children[a],
                        c = r.length,
                        l = this.findMaskLayer(a);
                      if (
                        (null == l || l.includesPoint(s)) &&
                        (u instanceof e
                          ? u.findLayersAt(s, r)
                          : u.isInterestedWithTouchEvent(s) && r.push(u),
                        !u.passTouch && r.length > c)
                      )
                        break;
                    }
                  i && r.push(this);
                }
              }),
              (e.prototype.findTouchableLayers = function(t) {
                if (this.isTouchable())
                  for (var r = 0, n = this.children; r < n.length; r++) {
                    var i = n[r];
                    i.isTouchable() && i.touchTriggers.length > 0 && t.push(i),
                      i instanceof e && i.findTouchableLayers(t);
                  }
              }),
              (e.prototype.getScrollOffset = function() {
                return this.scrollDir == l.Axis2D.X
                  ? this.sX
                  : this.scrollDir == l.Axis2D.Y
                    ? this.sY
                    : void 0;
              }),
              (e.prototype.getChildrenRect = function() {
                for (
                  var t = Number.MAX_VALUE,
                    e = Number.MAX_VALUE,
                    r = Number.MIN_VALUE,
                    n = Number.MIN_VALUE,
                    i = 0,
                    s = this.children;
                  i < s.length;
                  i++
                ) {
                  var a = s[i],
                    l = a.getTopLeft(),
                    h = a.w.curVal(),
                    p = a.h.curVal();
                  (t = Math.min(t, l.x)),
                    (e = Math.min(e, l.y)),
                    (r = Math.max(r, l.x + h)),
                    (n = Math.max(n, l.y + p));
                }
                return new u.PPRect(
                  new o.Point(t, e),
                  new c.PPSize(r - t, n - e)
                );
              }),
              (e.prototype.getPropertyByName = function(e) {
                return "scrollOffset" == e
                  ? this.scrollDir == l.Axis2D.X
                    ? this.sX
                    : this.scrollDir == l.Axis2D.Y
                      ? this.sY
                      : null
                  : t.prototype.getPropertyByName.call(this, e);
              }),
              (e.prototype.getScrollProp = function(t) {
                return t == l.Axis2D.X
                  ? this.sX
                  : t == l.Axis2D.Y
                    ? this.sY
                    : void 0;
              }),
              (e.prototype.getMainColorProperty = function() {
                return this.fillColor;
              }),
              (e.prototype.getMainColorOpacityProperty = function() {
                return this.fillOpacity;
              }),
              (e.prototype.computeReorderPosition = function(t, e, r) {
                switch (t) {
                  case l.ReorderType.BACK:
                    return 0;
                  case l.ReorderType.FRONT:
                    return r - 1;
                  case l.ReorderType.BACKWARD:
                    if (e > 0) return e - 1;
                    break;
                  case l.ReorderType.FORWARD:
                    if (e < r - 1) return e + 1;
                }
                return null;
              }),
              (e.prototype.findMaskLayer = function(t) {
                for (var e = t - 1; e >= 0; e--) {
                  var r = this.children[e];
                  if (r instanceof h.ShapeLayer && r.isMask) return r;
                }
                return null;
              }),
              (e.prototype.moveOrigin = function(t) {
                var e =
                    this.x.curVal() + this.w.curVal() * (t.x - this.origin.x),
                  r = this.y.curVal() + this.h.curVal() * (t.y - this.origin.y),
                  n = new o.Point(0, 0);
                p.AngleUtils.rotate(
                  new o.Point(e, r),
                  this.r.curVal(),
                  new o.Point(this.x.curVal(), this.y.curVal()),
                  n
                ),
                  this.x.setImmediate(n.x),
                  this.y.setImmediate(n.y),
                  (this.origin.x = t.x),
                  (this.origin.y = t.y);
              }),
              e
            );
          })(i.Layer);
        e.ContainerLayer = y;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(54),
          o = r(1),
          s = (function(t) {
            function e(e, r, n, i) {
              return (
                void 0 === n && (n = null),
                void 0 === i && (i = null),
                t.call(this, e, r, o.PPExprDataType.STRING, n, i) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.getStringValue = function() {
                return this.getValue();
              }),
              (e.prototype.getLinkedVar = function(t, r) {
                return new e(r, this.getValue(), t, this.name);
              }),
              e
            );
          })(i.PPVar);
        e.PPStringVar = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(54),
          o = r(1),
          s = r(10),
          a = (function(t) {
            function e(e, r, n, i) {
              return (
                void 0 === n && (n = null),
                void 0 === i && (i = null),
                t.call(this, e, r, o.PPExprDataType.NUMBER, n, i) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.getNumberValue = function() {
                return this.getValue();
              }),
              (e.prototype.getNumberUnit = function() {
                return s.Unit.NONE;
              }),
              (e.prototype.getLinkedVar = function(t, r) {
                return new e(r, this.getValue(), t, this.name);
              }),
              e
            );
          })(i.PPVar);
        e.PPNumberVar = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = r(30),
          s = r(136),
          a = r(10),
          u = r(17);
        !(function(t) {
          (t[(t.PLAY = 0)] = "PLAY"),
            (t[(t.PAUSE = 1)] = "PAUSE"),
            (t[(t.SEEK = 2)] = "SEEK");
        })((i = e.VideoLayerCommandType || (e.VideoLayerCommandType = {})));
        var c = (function() {
          return function(t) {
            (this.repeating = !1), (this.seekTime = 0), (this.type = t);
          };
        })();
        e.VideoLayerCommand = c;
        var l = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, e, r) || this;
            return (
              (i.autoPlay = !1),
              (i.autoPlayRepeat = !1),
              (i.currentTime = new u.NumberProperty(
                "currentTime",
                0,
                a.Unit.SECOND,
                0,
                null
              )),
              (i.autoPlayApplied = !1),
              (i.commands = []),
              (i.playState = new s.PPPlayState(n)),
              i.registerProperty(i.currentTime),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.reset = function() {
              t.prototype.reset.call(this),
                (this.commands.length = 0),
                this.playState.reset(),
                (this.autoPlayApplied = !1);
            }),
            (e.prototype.start = function(e) {
              t.prototype.start.call(this, e),
                !this.autoPlayApplied &&
                  this.autoPlay &&
                  (this.playState.play(e, this.autoPlayRepeat),
                  (this.autoPlayApplied = !0)),
                this.restorePlayState(e);
            }),
            (e.prototype.enqueueCommand = function(t, e) {
              switch ((this.commands.push(t), t.type)) {
                case i.PLAY:
                  this.playState.play(e, t.repeating);
                  break;
                case i.PAUSE:
                  this.playState.pause(e);
                  break;
                case i.SEEK:
                  this.playState.seek(e, t.seekTime);
              }
              this.notifyImmediateModification();
            }),
            (e.prototype.dequeueCommand = function() {
              return this.commands.length > 0
                ? this.commands.splice(0, 1)[0]
                : null;
            }),
            (e.prototype.restorePlayState = function(t) {
              if (this.playState.isPlaying(t)) {
                var e = new c(i.SEEK);
                (e.seekTime = this.playState.getPlayPosition(t) / 1e3),
                  this.commands.push(e);
                var r = new c(i.PLAY);
                (r.repeating = this.playState.isLooping()),
                  this.commands.push(r),
                  this.notifyImmediateModification();
              } else if (0 != this.currentTime.curVal()) {
                var n = new c(i.SEEK);
                (n.seekTime = this.currentTime.curVal()),
                  this.commands.push(n),
                  this.notifyImmediateModification();
              }
            }),
            e
          );
        })(o.Layer);
        e.VideoLayer = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(20),
          o = r(30),
          s = r(32),
          a = r(17),
          u = r(10),
          c = r(11),
          l = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, r) || this;
              return (
                (n.textColor = new s.ColorProperty(
                  "textColor",
                  c.PPColor.white()
                )),
                (n.textOpacity = new a.NumberProperty(
                  "textOpacity",
                  100,
                  u.Unit.PERCENT,
                  0,
                  100
                )),
                (n.textAttributes = new i.PPTextAttributes()),
                (n.initialTextAttributes = new i.PPTextAttributes()),
                (n.autoWrap = !0),
                (n.autoResize = !1),
                n.registerProperty(n.textColor),
                n.registerProperty(n.textOpacity),
                (n.textAttributes.text = ""),
                (n.textAttributes.fontSize = 16),
                (n.textAttributes.lineHeight = 1.2),
                (n.textAttributes.textAlign = "LEFT"),
                (n.textAttributes.verticalAlign = "TOP"),
                (n.textAttributes.font =
                  i.PPTextAttributes.DEFAULT_FONT_REGULAR),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.saveInitialState = function() {
                t.prototype.saveInitialState.call(this),
                  this.initialTextAttributes.copyFrom(this.textAttributes);
              }),
              (e.prototype.reset = function() {
                t.prototype.reset.call(this),
                  this.textAttributes.copyFrom(this.initialTextAttributes);
              }),
              (e.prototype.updateTextAttributes = function(t) {
                this.textAttributes.copyFrom(t),
                  this.notifyImmediateModification();
              }),
              (e.prototype.getStringProvider = function() {
                return this.textAttributes;
              }),
              (e.prototype.getMainColorProperty = function() {
                return this.textColor;
              }),
              (e.prototype.getMainColorOpacityProperty = function() {
                return this.textOpacity;
              }),
              e
            );
          })(o.Layer);
        e.TextLayer = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, e, r) || this;
            return (i.responses = n), i;
          }
          return (
            n(e, t),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.runResponses = function(t) {
              this.responses.run(t), this.touchSession.notifyEnded(this);
            }),
            e
          );
        })(r(18).TouchTrigger);
        e.OneTimeTouchTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(9),
          o = r(6),
          s = r(0),
          a = r(40),
          u = r(44),
          c = r(153),
          l = (function(t) {
            function e(e, r) {
              var n = t.call(this) || this;
              return (n.tasks = []), (n.layer = e), (n.dde = r), n;
            }
            return (
              n(e, t),
              (e.prototype.run = function(t) {
                for (var e = 0, r = this.tasks; e < r.length; e++) {
                  var n = r[e];
                  this.scheduler.scheduleTask(
                    n,
                    t,
                    this.dde.delay,
                    this.repeatDef
                  );
                }
              }),
              (e.prototype.addEntry = function(t, e, r) {
                if ((void 0 === r && (r = s.Operation.SET), e)) {
                  var n = void 0;
                  if (r === s.Operation.SET)
                    n = o.EasingSetNumberAnimation.fromDDE(e, this.dde);
                  else {
                    if (r !== s.Operation.INCREASE) return;
                    n = a.IncrementNumberAnimation.fromDDE(e, this.dde);
                  }
                  this.tasks.push(
                    new u.PPNumberAnimationTask(this.layer.id, t, n)
                  );
                }
              }),
              (e.prototype.addColorEntry = function(t, e) {
                e &&
                  this.tasks.push(
                    new c.PPColorAnimationTask(this.layer.id, t, e, this.dde)
                  );
              }),
              e
            );
          })(i.OneTimeResponse);
        e.OneTimePropertyResponse = l;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(6),
          i = r(7),
          o = (function() {
            function t() {}
            return (
              (t.prototype.updateProperty = function(t, e, r) {
                t.isChanging() ||
                  (this.dde
                    ? t.startAnimation(
                        new n.EasingSetNumberAnimation(
                          new i.NumberConstantExpr(e),
                          this.dde.duration,
                          this.dde.easingFunc
                        ),
                        r
                      )
                    : t.setImmediate(e));
              }),
              (t.prototype.updateColorProperty = function(t, e, r) {
                this.dde ? t.startAnimation(e, r, this.dde) : t.setImmediate(e);
              }),
              t
            );
          })();
        e.ChainResponse = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {
            this.entries = [];
          }
          return (
            (t.prototype.add = function(t) {
              this.entries.push(t);
            }),
            (t.prototype.updateRangeValue = function(t) {
              var e = this.getAt(t);
              return (this.lastRangeValue = t), e;
            }),
            (t.prototype.getAt = function(t) {
              for (
                var e = Number.MAX_VALUE, r = null, n = 0, i = this.entries;
                n < i.length;
                n++
              ) {
                var o = i[n],
                  s = o.getDistance(t, this.lastRangeValue);
                if (0 == s) {
                  r = o;
                  break;
                }
                s < e && ((e = s), (r = o));
              }
              return r;
            }),
            (t.prototype.getAll = function() {
              return this.entries;
            }),
            t
          );
        })();
        e.RangeMap = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(17),
          i = r(10),
          o = r(2),
          s = r(120),
          a = r(0),
          u = r(14),
          c = r(5),
          l = r(67),
          h = r(69),
          p = r(52),
          f = r(122),
          d = r(3),
          y = r(123),
          g = r(32),
          v = new o.Point(0, 0),
          m = (function() {
            function t(t, e) {
              (this.passTouch = !1),
                (this.hitArea = new s.HitArea()),
                (this.origin = new o.Point(0, 0)),
                (this.r3Pivot = new o.Point(0.5, 0.5)),
                (this.r3Depth = 200),
                (this.x = new n.NumberProperty(
                  "x",
                  0,
                  i.Unit.PIXEL,
                  null,
                  null
                )),
                (this.y = new n.NumberProperty(
                  "y",
                  0,
                  i.Unit.PIXEL,
                  null,
                  null
                )),
                (this.w = new n.NumberProperty(
                  "width",
                  0,
                  i.Unit.PIXEL,
                  0,
                  null
                )),
                (this.h = new n.NumberProperty(
                  "height",
                  0,
                  i.Unit.PIXEL,
                  0,
                  null
                )),
                (this.r = new n.NumberProperty("rotation", 0, i.Unit.DEGREE)),
                (this.r3 = new n.NumberProperty(
                  "rotation3d",
                  0,
                  i.Unit.DEGREE
                )),
                (this.scaleX = new n.NumberProperty(
                  "scaleX",
                  100,
                  i.Unit.PERCENT,
                  0,
                  null
                )),
                (this.scaleY = new n.NumberProperty(
                  "scaleY",
                  100,
                  i.Unit.PERCENT,
                  0,
                  null
                )),
                (this.o = new n.NumberProperty(
                  "opacity",
                  100,
                  i.Unit.PERCENT,
                  0,
                  100
                )),
                (this.highlightRequested = !1),
                (this.propertyMap = {}),
                (this.touchTriggers = []),
                (this.mouseTriggers = []),
                (this.wheelEventHandlers = []),
                (this.observers = []),
                (this.propertyObservers = []),
                (this.id = t),
                (this.parent = e),
                this.registerProperty(this.x),
                this.registerProperty(this.y),
                this.registerProperty(this.w),
                this.registerProperty(this.h),
                this.registerProperty(this.r),
                this.registerProperty(this.r3),
                this.registerProperty(this.scaleX),
                this.registerProperty(this.scaleY),
                this.registerProperty(this.o);
            }
            return (
              (t.prototype.addTouchTrigger = function(t) {
                this.touchTriggers.push(t);
              }),
              (t.prototype.addMouseTrigger = function(t) {
                this.mouseTriggers.push(t);
              }),
              (t.prototype.optimizeInteractions = function() {
                for (
                  var t, e, r, n = 0, i = 0, o = this.touchTriggers;
                  i < o.length;
                  i++
                ) {
                  var s = o[i];
                  s instanceof l.PinchTrigger
                    ? !t && s.isOptimizable() && ((t = s), (n += 1))
                    : s instanceof h.RotateTrigger
                      ? !e && s.isOptimizable() && ((e = s), (n += 1))
                      : s instanceof p.DragTrigger &&
                        !r &&
                        s.isOptimizable() &&
                        ((r = s), (n += 1));
                }
                if (n >= 2) {
                  this.touchTriggers.push(
                    f.FreeTransformComponent.fromTriggers(r, t, e)
                  );
                  for (var a = 0; a < this.touchTriggers.length; a++) {
                    var u = this.touchTriggers[a];
                    (u != t && u != e && u != r) ||
                      (this.touchTriggers.splice(a, 1), a--);
                  }
                  d.Logger.i("FreeTransform optimized count=(count)");
                }
              }),
              (t.prototype.addObserver = function(t) {
                this.observers.push(t);
              }),
              (t.prototype.removeObserver = function(t) {
                var e = this.observers.indexOf(t);
                e >= 0 && this.observers.splice(e, 1);
              }),
              (t.prototype.addPropertyObserver = function(t) {
                this.propertyObservers.push(t);
              }),
              (t.prototype.removeAllObservers = function() {
                this.observers.length = 0;
              }),
              (t.prototype.init = function(t) {
                for (var e = 0, r = this.touchTriggers; e < r.length; e++) {
                  r[e].init(t);
                }
                for (var n = 0, i = this.mouseTriggers; n < i.length; n++) {
                  i[n].init(t);
                }
              }),
              (t.prototype.saveInitialState = function() {}),
              (t.prototype.reset = function() {
                u.ObjectUtils.forValues(this.propertyMap, function(t) {
                  t.reset();
                });
                for (var t = 0, e = this.touchTriggers; t < e.length; t++) {
                  e[t].reset();
                }
                for (var r = 0, n = this.mouseTriggers; r < n.length; r++) {
                  n[r].reset();
                }
              }),
              (t.prototype.stopPropertyAnimation = function() {
                u.ObjectUtils.forValues(this.propertyMap, function(t) {
                  t.stop();
                });
              }),
              (t.prototype.start = function(t) {}),
              (t.prototype.stop = function(t) {}),
              (t.prototype.progress = function(t) {
                for (var e in this.propertyMap) this.propertyMap[e].progress(t);
              }),
              (t.prototype.requestHighlight = function() {
                (this.highlightRequested = !0), this.notifyLayerModified();
              }),
              (t.prototype.consumeHighlighted = function() {
                return (
                  !!this.highlightRequested &&
                  ((this.highlightRequested = !1), !0)
                );
              }),
              (t.prototype.getMouseEventHandler = function() {
                return this.mouseTriggers.length > 0
                  ? new y.LayerMouseEventHandler(this, this.mouseTriggers)
                  : null;
              }),
              (t.prototype.addWheelEventHandler = function(t) {
                this.wheelEventHandlers.push(t);
              }),
              (t.prototype.getWheelEventHandlers = function() {
                return this.wheelEventHandlers;
              }),
              (t.prototype.moveOrigin = function(t) {
                var e =
                    this.x.curVal() + this.w.curVal() * (t.x - this.origin.x),
                  r = this.y.curVal() + this.h.curVal() * (t.y - this.origin.y),
                  n = new o.Point(0, 0);
                c.AngleUtils.rotate(
                  new o.Point(e, r),
                  this.r.curVal(),
                  new o.Point(this.x.curVal(), this.y.curVal()),
                  n
                ),
                  this.x.setImmediate(n.x),
                  this.y.setImmediate(n.y),
                  (this.origin.x = t.x),
                  (this.origin.y = t.y);
              }),
              (t.prototype.isTouchable = function() {
                return (
                  this.o.curVal() > 0 &&
                  c.AngleUtils.isVisible3DRotation(this.r3.curVal())
                );
              }),
              (t.prototype.isInterestedWithTouchEvent = function(t) {
                return this.isTouchable() && this.includesPoint(t);
              }),
              (t.prototype.includesPoint = function(t) {
                return this.includesSelfOriginPoint(
                  this.translateParentPointToSelf(t)
                );
              }),
              (t.prototype.includesSelfOriginPoint = function(t) {
                return this.hitArea.isPointIncludedIn(
                  t,
                  this.w.curVal(),
                  this.h.curVal()
                );
              }),
              (t.prototype.translateParentPointToSelf = function(t) {
                var e = new o.Point(0, 0);
                return this.applyReverseGeometryToPoint(t, e), e;
              }),
              (t.prototype.translateAbsPointToSelf = function(t) {
                if (this.parent) {
                  var e = this.parent.translateAbsPointToSelf(t);
                  return (
                    (e.x = e.x + this.parent.sX.curVal()),
                    (e.y = e.y + this.parent.sY.curVal()),
                    this.translateParentPointToSelf(e)
                  );
                }
                return this.translateParentPointToSelf(t);
              }),
              (t.prototype.absToPivot = function(t) {
                var e = this.translateAbsPointToSelf(t);
                return new o.Point(
                  e.x / this.w.curVal(),
                  e.y / this.h.curVal()
                );
              }),
              (t.prototype.applyReverseGeometryToPoint = function(t, e) {
                (e.x = t.x - this.x.curVal()),
                  (e.y = t.y - this.y.curVal()),
                  c.AngleUtils.rotate(e, -this.r.curVal(), v, e),
                  (e.x = e.x / (this.scaleX.curVal() / 100)),
                  (e.y = e.y / (this.scaleY.curVal() / 100)),
                  (e.x += this.origin.x * this.w.curVal()),
                  (e.y += this.origin.y * this.h.curVal());
                var r = this.r3.curVal(),
                  n = this.w.curVal(),
                  i = this.h.curVal(),
                  s = this.r3Pivot.x,
                  u = this.r3Pivot.y;
                Math.abs(r) > 5 &&
                  (this.r3Axis === a.Axis3D.Y
                    ? c.AngleUtils.reverseRotateY(
                        e,
                        -r,
                        new o.Point(n * s, i * u),
                        this.r3Depth,
                        e
                      )
                    : this.r3Axis === a.Axis3D.X &&
                      c.AngleUtils.reverseRotateX(
                        e,
                        -r,
                        new o.Point(n * s, i * u),
                        this.r3Depth,
                        e
                      ));
              }),
              (t.prototype.registerProperty = function(t) {
                (this.propertyMap[t.name] = t), t.addObserver(this);
              }),
              (t.prototype.onPropertyShouldProgress = function(t) {
                for (var e = 0, r = this.propertyObservers; e < r.length; e++)
                  r[e].onLayerPropertyShouldProgress(this, t);
              }),
              (t.prototype.onPropertySetImmediate = function(t) {
                for (var e = 0, r = this.propertyObservers; e < r.length; e++)
                  r[e].onLayerPropertySetImmediate(this, t);
              }),
              (t.prototype.getTopLeft = function() {
                return new o.Point(
                  this.x.curVal() - this.w.curVal() * this.origin.x,
                  this.y.curVal() - this.h.curVal() * this.origin.y
                );
              }),
              (t.prototype.getPositionProp = function(t) {
                return t == a.Axis2D.X
                  ? this.x
                  : t == a.Axis2D.Y
                    ? this.y
                    : void 0;
              }),
              (t.prototype.getSize = function(t) {
                return t == a.Axis2D.X
                  ? this.w
                  : t == a.Axis2D.Y
                    ? this.h
                    : void 0;
              }),
              (t.prototype.getMainColorProperty = function() {
                return null;
              }),
              (t.prototype.getMainColorOpacityProperty = function() {
                return null;
              }),
              (t.prototype.getPropertyByName = function(t) {
                return this.propertyMap[t];
              }),
              (t.prototype.getNumberPropertyByName = function(t) {
                var e = this.getPropertyByName(t);
                return e instanceof n.NumberProperty ? e : null;
              }),
              (t.prototype.getColorPropertyByName = function(t) {
                var e = this.getPropertyByName(t);
                return e instanceof g.ColorProperty ? e : null;
              }),
              (t.prototype.notifyLayerModified = function() {
                for (var t = 0, e = this.observers; t < e.length; t++)
                  e[t].onLayerModified(this);
              }),
              (t.prototype.notifyChildOrderModified = function() {
                for (var t = 0, e = this.observers; t < e.length; t++)
                  e[t].onChildOrderModified();
              }),
              (t.prototype.notifyImmediateModification = function() {
                for (var t = 0, e = this.propertyObservers; t < e.length; t++)
                  e[t].onLayerPropertySetImmediate(this, null);
              }),
              (t.prototype.getLeft = function() {
                return this.x.curVal() - this.origin.x * this.w.curVal();
              }),
              (t.prototype.getRight = function() {
                return this.x.curVal() + (1 - this.origin.x) * this.w.curVal();
              }),
              (t.prototype.getTop = function() {
                return this.y.curVal() - this.origin.y * this.h.curVal();
              }),
              (t.prototype.getBottom = function() {
                return this.y.curVal() + (1 - this.origin.y) * this.h.curVal();
              }),
              t
            );
          })();
        e.Layer = m;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(68),
          o = (function() {
            return function() {};
          })();
        e.DragResponse = o;
        var s = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), e;
        })(i.PPResponse);
        e.PinchResponse = s;
        var a = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), e;
        })(i.PPResponse);
        e.RotateResponse = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(17),
          o = r(10),
          s = r(11),
          a = r(66),
          u = r(6),
          c = r(7),
          l = (function(t) {
            function e(e, r) {
              var n = t.call(this, e) || this;
              return (
                (n.rProp = new i.NumberProperty(
                  "fillColorRed",
                  255,
                  o.Unit.HEX,
                  0,
                  255
                )),
                (n.gProp = new i.NumberProperty(
                  "fillColorGreen",
                  255,
                  o.Unit.HEX,
                  0,
                  255
                )),
                (n.bProp = new i.NumberProperty(
                  "fillColorBlue",
                  255,
                  o.Unit.HEX,
                  0,
                  255
                )),
                n.setInitial(r),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.setInitial = function(t) {
                this.rProp.setInitial(t.r),
                  this.gProp.setInitial(t.g),
                  this.bProp.setInitial(t.b);
              }),
              (e.prototype.isChanging = function() {
                return (
                  this.rProp.isChanging() ||
                  this.gProp.isChanging() ||
                  this.bProp.isChanging()
                );
              }),
              (e.prototype.progress = function(t) {
                var e = this.rProp.progress(t),
                  r = this.gProp.progress(t),
                  n = this.bProp.progress(t);
                return e || r || n;
              }),
              (e.prototype.reset = function() {
                this.rProp.reset(),
                  this.gProp.reset(),
                  this.bProp.reset(),
                  this.notifySetImmediate();
              }),
              (e.prototype.stop = function() {
                this.rProp.stop(), this.gProp.stop(), this.bProp.stop();
              }),
              (e.prototype.setImmediate = function(t) {
                this.rProp.setImmediate(t.r),
                  this.gProp.setImmediate(t.g),
                  this.bProp.setImmediate(t.b),
                  this.notifySetImmediate();
              }),
              (e.prototype.startAnimation = function(t, e, r) {
                var n = this.rProp.startAnimation(
                    u.EasingSetNumberAnimation.fromDDE(
                      new c.NumberConstantExpr(t.r),
                      r
                    ),
                    e
                  ),
                  i = this.gProp.startAnimation(
                    u.EasingSetNumberAnimation.fromDDE(
                      new c.NumberConstantExpr(t.g),
                      r
                    ),
                    e
                  ),
                  o = this.bProp.startAnimation(
                    u.EasingSetNumberAnimation.fromDDE(
                      new c.NumberConstantExpr(t.b),
                      r
                    ),
                    e
                  );
                (n || i || o) && this.notifySetImmediate(),
                  this.notifyShouldProgress();
              }),
              (e.prototype.toColor = function() {
                return new s.PPColor(
                  this.rProp.curVal(),
                  this.gProp.curVal(),
                  this.bProp.curVal()
                );
              }),
              (e.prototype.toHex = function() {
                return s.PPColor.toHex(
                  this.rProp.curVal(),
                  this.gProp.curVal(),
                  this.bProp.curVal()
                );
              }),
              (e.prototype.getColorValue = function() {
                return this.toColor();
              }),
              (e.prototype.toString = function(t) {
                return (
                  "rgba(" +
                  Math.round(this.rProp.curVal()) +
                  "," +
                  Math.round(this.gProp.curVal()) +
                  "," +
                  Math.round(this.bProp.curVal()) +
                  "," +
                  Math.round(t) / 100 +
                  ")"
                );
              }),
              e
            );
          })(a.Property);
        e.ColorProperty = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(32),
          o = r(17),
          s = r(10),
          a = r(11),
          u = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, r) || this;
              return (
                (n.fillColor = new i.ColorProperty(
                  "fillColor",
                  a.PPColor.white()
                )),
                (n.fillOpacity = new o.NumberProperty(
                  "fillOpacity",
                  100,
                  s.Unit.PERCENT,
                  0,
                  100
                )),
                (n.isMask = !1),
                n.registerProperty(n.fillColor),
                n.registerProperty(n.fillOpacity),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.getMainColorProperty = function() {
                return this.fillColor;
              }),
              (e.prototype.getMainColorOpacityProperty = function() {
                return this.fillOpacity;
              }),
              e
            );
          })(r(30).Layer);
        e.ShapeLayer = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(54),
          o = r(1),
          s = (function(t) {
            function e(e, r, n, i) {
              return (
                void 0 === n && (n = null),
                void 0 === i && (i = null),
                t.call(this, e, r, o.PPExprDataType.COLOR, n, i) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.getColorValue = function() {
                return this.getValue();
              }),
              (e.prototype.getLinkedVar = function(t, r) {
                return new e(r, this.getValue(), t, this.name);
              }),
              e
            );
          })(i.PPVar);
        e.PPColorVar = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n,
          i,
          o = r(3);
        !(function(t) {
          (t[(t.MAC = 0)] = "MAC"),
            (t[(t.WINDOWS = 1)] = "WINDOWS"),
            (t[(t.IOS = 2)] = "IOS"),
            (t[(t.ANDROID = 3)] = "ANDROID"),
            (t[(t.ETC = 4)] = "ETC");
        })((n = e.OsType || (e.OsType = {}))),
          (function(t) {
            (t[(t.CHROME = 0)] = "CHROME"),
              (t[(t.FIREFOX = 1)] = "FIREFOX"),
              (t[(t.SAFARI = 2)] = "SAFARI"),
              (t[(t.EDGE = 3)] = "EDGE"),
              (t[(t.IE = 4)] = "IE"),
              (t[(t.ETC = 5)] = "ETC");
          })((i = e.BrowserType || (e.BrowserType = {})));
        var s = (function() {
          function t() {}
          return (
            (t.isMobile = function() {
              return this.detect(), this.osIsIn(n.IOS, n.ANDROID);
            }),
            (t.supportsMask = function() {
              return (
                this.detect(), this.browserIsIn(i.FIREFOX, i.CHROME, i.SAFARI)
              );
            }),
            (t.supportsMultiTouch = function() {
              return this.isMobile();
            }),
            (t.osIsIn = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return t.indexOf(this.osType) >= 0;
            }),
            (t.browserIsIn = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return t.indexOf(this.browserType) >= 0;
            }),
            (t.detect = function() {
              null === this.browserType &&
                (/iPhone/.test(navigator.userAgent)
                  ? (this.osType = n.IOS)
                  : /Android/.test(navigator.userAgent)
                    ? (this.osType = n.ANDROID)
                    : /Macintosh/.test(navigator.userAgent)
                      ? (this.osType = n.MAC)
                      : /Windows/.test(navigator.userAgent)
                        ? (this.osType = n.WINDOWS)
                        : (this.browserType = i.ETC),
                /Firefox/.test(navigator.userAgent)
                  ? (this.browserType = i.FIREFOX)
                  : /Edge/.test(navigator.userAgent)
                    ? (this.browserType = i.EDGE)
                    : /MSIE/.test(navigator.userAgent)
                      ? (this.browserType = i.IE)
                      : /Chrome/.test(navigator.userAgent)
                        ? (this.browserType = i.CHROME)
                        : /Safari/.test(navigator.userAgent)
                          ? (this.browserType = i.SAFARI)
                          : (this.browserType = i.ETC),
                o.Logger.d(
                  "UserAgent",
                  i[this.browserType],
                  n[this.osType],
                  navigator.userAgent
                ));
            }),
            (t.browserType = null),
            (t.osType = null),
            t
          );
        })();
        e.BrowserDetector = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(59),
          s = (function() {
            function t(t, e, r, n) {
              (this.errors = []),
                (this.nodeType = t),
                (this.position = e),
                (this.children = n),
                (this.fullText = r),
                (this.effectivePosition = (function(t, e, r) {
                  if (r) {
                    for (var n = 0, i = r; n < i.length; n++) {
                      var o = i[n];
                      if (o) return o.effectivePosition;
                    }
                    return t;
                  }
                  return (
                    t +
                    (function(t) {
                      for (var e = 0, r = 0; r < t.length; r++) {
                        var n = t[r];
                        if (" " != n && "\t" != n && "\n" != n && "\r" != n)
                          break;
                        e++;
                      }
                      return e;
                    })(e)
                  );
                })(e, r, this.children)),
                (this.endPosition = (function(t, e, r) {
                  if (r) {
                    if (r.length > 0) {
                      for (var n = t, i = 0, o = r; i < o.length; i++) {
                        var s = o[i];
                        s && (n = s.endPosition);
                      }
                      return n;
                    }
                    return t;
                  }
                  return t + e.length;
                })(e, r, this.children));
            }
            return (
              (t.prototype.getFullText = function() {
                if (this.children) {
                  for (
                    var t = "", e = 0, r = this.children;
                    e < r.length;
                    e++
                  ) {
                    var n = r[e];
                    n && (t += n.getFullText());
                  }
                  return t;
                }
                return this.fullText;
              }),
              t
            );
          })();
        e.PPParseNode = s;
        var a = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, "NOT_PARSED", e, n, null) || this;
            return (
              i.errors.push(
                o.PPExprParseError.error(
                  i.effectivePosition,
                  o.ParseErrorCodes.UNEXPECTED_CHARACTER,
                  [n]
                )
              ),
              i
            );
          }
          return n(e, t), e;
        })(s);
        e.PPNotParsedString = a;
        var u = (function(t) {
          function e(r, n, i) {
            var o = t.call(this, "OPERATOR", n, i, null) || this;
            return (o.operator = r), (o.priority = e.priorityOfOperator(r)), o;
          }
          return (
            n(e, t),
            (e.priorityOfOperator = function(t) {
              return this.PRIORITY1_OPERATORS.indexOf(t) >= 0
                ? this.PRIORITY_HIGH
                : this.PRIORITY2_OPERATORS.indexOf(t) >= 0
                  ? this.PRIORITY_LOW
                  : 0;
            }),
            (e.isBinaryOperator = function(t) {
              return (
                this.PRIORITY1_OPERATORS.indexOf(t) >= 0 ||
                this.PRIORITY2_OPERATORS.indexOf(t) >= 0
              );
            }),
            (e.prototype.isBinaryOperator = function() {
              return e.isBinaryOperator(this.operator);
            }),
            (e.prototype.isUnaryOperator = function() {
              return e.UNARY_OPERATORS.indexOf(this.operator) >= 0;
            }),
            (e.PRIORITY_HIGH = 1),
            (e.PRIORITY_LOW = 2),
            (e.PRIORITIES_FROM_LOW = [e.PRIORITY_LOW, e.PRIORITY_HIGH]),
            (e.PRIORITY1_OPERATORS = ["*", "/", "%"]),
            (e.PRIORITY2_OPERATORS = ["+", "-"]),
            (e.UNARY_OPERATORS = ["-"]),
            e
          );
        })(s);
        e.PPOperatorNode = u;
        var c = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, "IDENTIFIER", r, n, null) || this;
            return (i.identifier = e), i;
          }
          return n(e, t), e;
        })(s);
        e.PPIdentifierNode = c;
        var l = (function(t) {
          function e(e) {
            var r =
              t.call(
                this,
                "EXPR_LIST",
                e.length > 0 ? e[0].position : 0,
                null,
                e
              ) || this;
            return (r.nodes = e), r;
          }
          return n(e, t), e;
        })(s);
        e.PPExprListNode = l;
        var h = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), e;
        })(s);
        e.PPExprParseNode = h;
        var p = (function(t) {
            function e(e, r, n) {
              return t.call(this, e, r, n, null) || this;
            }
            return n(e, t), e;
          })(h),
          f = (function(t) {
            function e(e, r) {
              return (
                t.call(
                  this,
                  e,
                  (function(t) {
                    for (var e = 0, r = t; e < r.length; e++) {
                      var n = r[e];
                      if (n) return n.position;
                    }
                    return 0;
                  })(r),
                  null,
                  r
                ) || this
              );
            }
            return n(e, t), e;
          })(h),
          d = (function(t) {
            function e(e, r, n) {
              var i = t.call(this, "NUMBER", r, n) || this;
              return (i.value = e), i;
            }
            return (
              n(e, t),
              (e.prototype.validate = function(t, e) {
                return "NUMBER";
              }),
              e
            );
          })(p);
        e.PPNumberLiteralNode = d;
        var y = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, "STRING", r, n) || this;
            return (i.value = e), i;
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              return "STRING";
            }),
            e
          );
        })(p);
        e.PPStringLiteralNode = y;
        var g = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, "COLOR", r, n) || this;
            return (
              (i.hexValue = null),
              (i.value = e),
              e && (i.hexValue = e.toHex()),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              return "COLOR";
            }),
            e
          );
        })(p);
        e.PPColorLiteralNode = g;
        var v = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, "LAYER", r, n) || this;
            return (i.layerName = e), i;
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              return (
                t.getLayerType(this.layerName) ||
                  this.errors.push(
                    o.PPExprParseError.error(
                      this.effectivePosition,
                      o.ParseErrorCodes.UNDEFINED_LAYER,
                      [this.layerName]
                    )
                  ),
                "LAYER"
              );
            }),
            e
          );
        })(p);
        e.PPLayerLiteralNode = v;
        var m = (function(t) {
          function e(e) {
            var r =
              t.call(this, "VARIABLE", e.position, e.getFullText(), null) ||
              this;
            return (r.varName = e.identifier), (r.identifier = e), r;
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              var r = t.getVariableType(this.varName);
              if (!r) {
                var n = o.PPExprParseError.error(
                  this.effectivePosition,
                  o.ParseErrorCodes.UNDEFINED_VARIABLE,
                  [this.varName]
                );
                this.errors.push(n);
              }
              return r;
            }),
            e
          );
        })(h);
        e.PPVariableNode = m;
        var E = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, "PARENTHESIS", [e, r, n]) || this;
            return (
              (i.openToken = e),
              (i.content = r),
              (i.closeToken = n),
              n ||
                i.errors.push(
                  o.PPExprParseError.error(
                    i.endPosition,
                    o.ParseErrorCodes.NOT_CLOSED,
                    [")"]
                  )
                ),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              return this.content
                ? this.content.validate(t, e)
                : (this.errors.push(
                    o.PPExprParseError.error(
                      this.openToken.endPosition,
                      o.ParseErrorCodes.EXPRESSION_EXPECTED,
                      []
                    )
                  ),
                  null);
            }),
            e
          );
        })(f);
        e.PPParenthesisNode = E;
        var P = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, "BINARY", [r, e, n]) || this;
            return (i.operator = e), (i.lhs = r), (i.rhs = n), i;
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              var r = this.lhs ? this.lhs.validate(t, e) : null,
                n = this.rhs ? this.rhs.validate(t, e) : null;
              this.lhs ||
                this.errors.push(
                  o.PPExprParseError.error(
                    this.operator.position,
                    o.ParseErrorCodes.BINARY_OPERAND_REQUIRED,
                    [this.operator.operator]
                  )
                ),
                this.rhs ||
                  this.errors.push(
                    o.PPExprParseError.error(
                      this.operator.endPosition,
                      o.ParseErrorCodes.INCOMPLETE_BINARY_OPERATION,
                      [this.operator.operator]
                    )
                  );
              var s = null;
              if (this.lhs && this.rhs) {
                var a = e.getFunction(
                  this.operator.operator,
                  [i.dataTypeToEnum(r), i.dataTypeToEnum(n)],
                  !0
                );
                if (a) s = i.dataTypeToString(a.getReturnType());
                else {
                  var u = o.PPExprParseError.error(
                    this.position,
                    o.ParseErrorCodes.UNSUPPORTED_BINARY_OPERATION,
                    [this.operator.operator, r, n]
                  );
                  this.errors.push(u);
                }
              }
              return s;
            }),
            e
          );
        })(f);
        e.PPBinaryOperationNode = P;
        var T = (function(t) {
          function e(e, r) {
            var n = t.call(this, "UNARY", e.position, null, [e, r]) || this;
            return (n.operator = e), (n.value = r), n;
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              var r = this.value.validate(t, e),
                n = e.getFunction(
                  this.operator.operator,
                  [i.dataTypeToEnum(r)],
                  !0
                ),
                s = null;
              return (
                n
                  ? (s = i.dataTypeToString(n.getReturnType()))
                  : this.errors.push(
                      o.PPExprParseError.error(
                        this.position,
                        o.ParseErrorCodes.UNSUPPORTED_UNARY_OPERATION,
                        [this.operator.operator, r]
                      )
                    ),
                s
              );
            }),
            e
          );
        })(h);
        e.PPUnaryOperationNode = T;
        var _ = (function(t) {
          function e(e, r, n) {
            var i =
              t.call(this, "PROPERTY", e ? e.position : r.position, null, [
                e,
                r,
                n
              ]) || this;
            return (
              (i.layer = e),
              (i.operator = r),
              (i.propertyName = n),
              e ||
                i.errors.push(
                  o.PPExprParseError.error(
                    r.effectivePosition,
                    o.ParseErrorCodes.LAYER_REQUIRED,
                    []
                  )
                ),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, r) {
              this.layer && this.layer.validate(t, r);
              var n = null;
              return (
                this.propertyName
                  ? (e.numberProps.indexOf(this.propertyName.identifier) >= 0
                      ? (n = "NUMBER")
                      : e.colorProps.indexOf(this.propertyName.identifier) >= 0
                        ? (n = "COLOR")
                        : e.stringProps.indexOf(this.propertyName.identifier) >=
                            0 && (n = "STRING"),
                    null === n &&
                      this.errors.push(
                        o.PPExprParseError.error(
                          this.propertyName.position,
                          o.ParseErrorCodes.UNDEFINED_PROPERTY,
                          [this.propertyName.identifier]
                        )
                      ))
                  : this.errors.push(
                      o.PPExprParseError.error(
                        this.operator.endPosition,
                        o.ParseErrorCodes.PROPERTY_REQUIRED,
                        []
                      )
                    ),
                n
              );
            }),
            (e.numberProps = [
              "x",
              "y",
              "width",
              "height",
              "rotation",
              "rotation3d",
              "scrollOffset",
              "scaleX",
              "scaleY",
              "opacity",
              "radius",
              "fillOpacity",
              "textOpacity"
            ]),
            (e.colorProps = ["fillColor", "textColor"]),
            (e.stringProps = ["text"]),
            e
          );
        })(h);
        e.PPPropertyNode = _;
        var b = (function(t) {
          function e(e, r, n, i) {
            var s =
              t.call(
                this,
                "FUNCTION",
                e.position,
                null,
                n.getNodeList([e, r], [i])
              ) || this;
            return (
              (s.functionName = e),
              (s.openToken = r),
              (s.args = n.values),
              (s.commas = n.commas),
              (s.closeToken = i),
              i ||
                s.errors.push(
                  o.PPExprParseError.error(
                    s.endPosition,
                    o.ParseErrorCodes.NOT_CLOSED,
                    [")"]
                  )
                ),
              s
            );
          }
          return (
            n(e, t),
            (e.prototype.validate = function(t, e) {
              for (
                var r = this.args.map(function(r) {
                    return r ? r.validate(t, e) : null;
                  }),
                  n = 0;
                n < this.args.length;
                n++
              )
                if (!this.args[n]) {
                  var s =
                    0 === n
                      ? this.openToken.endPosition
                      : this.commas[n - 1].endPosition;
                  this.errors.push(
                    o.PPExprParseError.error(
                      s,
                      o.ParseErrorCodes.EXPRESSION_EXPECTED,
                      []
                    )
                  );
                }
              var a = e.getFunction(
                  this.functionName.identifier,
                  r.map(function(t) {
                    return i.dataTypeToEnum(t);
                  }),
                  !0
                ),
                u = null;
              return (
                a
                  ? (u = i.dataTypeToString(a.getReturnType()))
                  : e.hasFunctionWithName(this.functionName.identifier)
                    ? this.errors.push(
                        o.PPExprParseError.error(
                          this.effectivePosition,
                          o.ParseErrorCodes.FUNCTION_ARGS_MISMATCH,
                          [
                            this.functionName.identifier,
                            r
                              .map(function(t) {
                                return t;
                              })
                              .join(", ")
                          ]
                        )
                      )
                    : this.errors.push(
                        o.PPExprParseError.error(
                          this.effectivePosition,
                          o.ParseErrorCodes.UNDEFINED_FUNCTION,
                          [this.functionName.identifier]
                        )
                      ),
                this.commas.length > 0 &&
                  this.commas.length == this.args.length &&
                  this.errors.push(
                    o.PPExprParseError.error(
                      this.commas[this.commas.length - 1].endPosition,
                      o.ParseErrorCodes.EXPRESSION_EXPECTED,
                      []
                    )
                  ),
                u
              );
            }),
            e
          );
        })(h);
        e.PPFunctionNode = b;
        var O = (function() {
          function t(t, e) {
            (this.values = t), (this.commas = e);
          }
          return (
            (t.prototype.getNodeList = function(t, e) {
              var r = [];
              t.forEach(function(t) {
                return r.push(t);
              });
              for (var n = 0; n < this.values.length; n++)
                n > 0 && r.push(this.commas[n - 1]), r.push(this.values[n]);
              return (
                this.commas.length > 0 &&
                  this.commas.length == this.values.length &&
                  r.push(this.commas[this.commas.length - 1]),
                e.forEach(function(t) {
                  return r.push(t);
                }),
                r
              );
            }),
            t
          );
        })();
        e.PPFunctionNodeArgs = O;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r, n) {
            t <= e
              ? ((this.rangeStart = t),
                (this.rangeEnd = e),
                (this.startValue = r),
                (this.endValue = n))
              : ((this.rangeStart = e),
                (this.rangeEnd = t),
                (this.startValue = n),
                (this.endValue = r));
          }
          return (
            (t.prototype.getProgressAt = function(t) {
              return t <= this.rangeStart
                ? 0
                : t >= this.rangeEnd
                  ? 1
                  : (t - this.rangeStart) / (this.rangeEnd - this.rangeStart);
            }),
            (t.prototype.getDistance = function(t, e) {
              return t >= this.rangeStart && t <= this.rangeEnd
                ? 0
                : null == e
                  ? Number.MAX_VALUE
                  : t > this.rangeEnd && e <= this.rangeEnd
                    ? Math.abs(t - this.rangeEnd)
                    : t < this.rangeStart && e >= this.rangeStart
                      ? Math.abs(t - this.rangeStart)
                      : Number.MAX_VALUE;
            }),
            (t.prototype.interpolate = function(t, e, r) {
              return null != t && null != e ? t + (e - t) * r : null;
            }),
            t
          );
        })();
        e.RangeEntry = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r, n) {
            (this.animations = []),
              (this.animatingProperties = []),
              (this.prevSceneRenderer = t),
              (this.nextSceneRenderer = e),
              (this.prevScene = r),
              (this.nextScene = n);
          }
          return (
            (t.prototype.shouldAttachedToFront = function() {
              return !0;
            }),
            (t.prototype.registerAnimation = function(t, e, r) {
              void 0 === r && (r = 0),
                this.animatingProperties.indexOf(t) < 0 &&
                  this.animatingProperties.push(t),
                t.startAnimation(e, r),
                this.animations.push(e);
            }),
            (t.prototype.progress = function(t) {
              this.prevScene.progressRootLayerAnimations(t),
                this.nextScene.progressRootLayerAnimations(t);
            }),
            (t.prototype.isEnded = function(t) {
              for (var e = 0, r = this.animations; e < r.length; e++)
                if (!r[e].isEnded(t)) return !1;
              return !0;
            }),
            t
          );
        })();
        e.SceneTransition = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(5),
          i = r(0),
          o = r(101),
          s = r(209),
          a = r(210),
          u = (function() {
            function t(t, e) {
              (this.highlighter = null),
                (this.wheelEventEndTimer = null),
                (this.layer = t),
                (this.clock = e),
                (this.boundOnMouseOut = this.onMouseOut.bind(this)),
                t.addObserver(this);
            }
            return (
              (t.prototype.init = function() {
                (this.positionElement = document.createElement("div")),
                  (this.positionElement.style.position = "absolute"),
                  (this.renderElement = this.createElement()),
                  this.positionElement.appendChild(this.renderElement),
                  (this.renderElement.style.position = "absolute"),
                  (this.renderElement.style.width = "100%"),
                  (this.renderElement.style.height = "100%"),
                  (this.renderElement.style.top = "0px"),
                  (this.renderElement.style.left = "0px"),
                  this.layer.hitArea.hasExtension()
                    ? ((this.hitElement = document.createElement("div")),
                      (this.hitElement.style.position = "absolute"),
                      (this.hitElement.style.top =
                        "-" + this.layer.hitArea.extendAbove + "px"),
                      (this.hitElement.style.bottom =
                        "-" + this.layer.hitArea.extendBelow + "px"),
                      (this.hitElement.style.left =
                        "-" + this.layer.hitArea.extendLeft + "px"),
                      (this.hitElement.style.right =
                        "-" + this.layer.hitArea.extendRight + "px"),
                      this.positionElement.appendChild(this.hitElement))
                    : (this.hitElement = this.renderElement);
                var t = !1;
                (this.mouseEventHandler = this.layer.getMouseEventHandler()),
                  this.mouseEventHandler &&
                    (this.hitElement.addEventListener(
                      "mouseenter",
                      this.onMouseOver.bind(this)
                    ),
                    (t = !0)),
                  this.layer.getWheelEventHandlers().length > 0 &&
                    (this.hitElement.addEventListener(
                      "wheel",
                      this.onWheelEvent.bind(this)
                    ),
                    (t = !0)),
                  !t &&
                    this.layer.passTouch &&
                    (this.positionElement.style.pointerEvents = "none"),
                  this.updateToElement(this.renderElement);
              }),
              (t.prototype.getElement = function() {
                return this.positionElement;
              }),
              (t.prototype.getModel = function() {
                return this.layer;
              }),
              (t.prototype.getMaskElementId = function() {
                return null;
              }),
              (t.prototype.onLayerModified = function(t) {
                this.updateToElement(this.renderElement);
              }),
              (t.prototype.onChildOrderModified = function() {}),
              (t.prototype.updateClockScale = function(t) {}),
              (t.prototype.updateToElement = function(t) {
                this.layer.consumeHighlighted() && this.showTouchHint(),
                  (this.positionElement.style.left =
                    Math.round(
                      this.layer.x.curVal() -
                        this.layer.w.curVal() * this.layer.origin.x
                    ) + "px"),
                  (this.positionElement.style.top =
                    Math.round(
                      this.layer.y.curVal() -
                        this.layer.h.curVal() * this.layer.origin.y
                    ) + "px"),
                  (this.positionElement.style.width =
                    Math.round(this.layer.w.curVal()) + "px"),
                  (this.positionElement.style.height =
                    Math.round(this.layer.h.curVal()) + "px"),
                  (this.positionElement.style.transformOrigin =
                    (1e4 * this.layer.origin.x) / 100 +
                    "% " +
                    (1e4 * this.layer.origin.y) / 100 +
                    "%");
                var e = "";
                0 != this.layer.r.curVal() &&
                  (e = "rotate(" + Math.round(this.layer.r.curVal()) + "deg)"),
                  (100 === this.layer.scaleX.curVal() &&
                    100 === this.layer.scaleY.curVal()) ||
                    (e +=
                      " scale(" +
                      this.layer.scaleX.curVal() / 100 +
                      "," +
                      this.layer.scaleY.curVal() / 100 +
                      ")"),
                  (this.positionElement.style.transform = e),
                  (this.positionElement.style.opacity =
                    "" + Math.round(this.layer.o.curVal()) / 100),
                  this.apply3DRotation(t);
              }),
              (t.prototype.showTouchHint = function() {
                if (!this.highlighter) {
                  var t =
                    this.hitElement === this.renderElement
                      ? this.positionElement
                      : this.hitElement;
                  this.highlighter = new a.LayerHighlighter(t);
                }
                this.highlighter.highlight();
              }),
              (t.prototype.apply3DRotation = function(t, e) {
                void 0 === e && (e = !1);
                var r = n.AngleUtils.normalize(this.layer.r3.curVal());
                if (0 == r) t.style.transform && (t.style.transform = "");
                else {
                  var o = this.layer.r3Axis,
                    s = "perspective(" + this.layer.r3Depth + "px) rotate";
                  if (o === i.Axis3D.X) s += "X";
                  else {
                    if (o !== i.Axis3D.Y) return;
                    s += "Y";
                  }
                  (s += "(" + r + "deg)"),
                    (t.style.transform = s),
                    (t.style.transformOrigin =
                      100 * this.layer.r3Pivot.x +
                      "% " +
                      100 * this.layer.r3Pivot.y +
                      "%");
                }
              }),
              (t.prototype.onMouseOver = function(t) {
                if (this.layer.o.curVal() > 0 && !this.clock.isPaused()) {
                  var e = new o.PPMouseEvent(this.clock.getNow());
                  this.mouseEventHandler.onMouseOver(e) &&
                    this.hitElement.addEventListener(
                      "mouseleave",
                      this.boundOnMouseOut
                    );
                }
              }),
              (t.prototype.onMouseOut = function(t) {
                var e = new o.PPMouseEvent(this.clock.getNow());
                this.mouseEventHandler.onMouseOut(e),
                  this.hitElement.removeEventListener(
                    "mouseleave",
                    this.boundOnMouseOut
                  );
              }),
              (t.prototype.onWheelEvent = function(t) {
                null === this.wheelEventEndTimer && this.fireWheelStartEvent(),
                  this.fireWheelChangeEvent(t),
                  this.reserveWheelEndEvent();
              }),
              (t.prototype.fireWheelStartEvent = function() {
                for (
                  var t = s.PPWheelEvent.obtainInstance(this.clock.getNow()),
                    e = 0,
                    r = this.layer.getWheelEventHandlers();
                  e < r.length;
                  e++
                )
                  r[e].onMouseWheelStart(t);
                t.recycle();
              }),
              (t.prototype.fireWheelChangeEvent = function(t) {
                var e = s.PPWheelEvent.obtainInstance(this.clock.getNow());
                (e.wheelDeltaX = t.deltaX), (e.wheelDeltaY = t.deltaY);
                for (
                  var r = 0, n = this.layer.getWheelEventHandlers();
                  r < n.length;
                  r++
                )
                  n[r].onMouseWheelChange(e),
                    e.isPropagationStopped() &&
                      (t.stopPropagation(), t.preventDefault());
                e.recycle();
              }),
              (t.prototype.reserveWheelEndEvent = function() {
                var t = this;
                null !== this.wheelEventEndTimer &&
                  window.clearTimeout(this.wheelEventEndTimer),
                  (this.wheelEventEndTimer = window.setTimeout(function() {
                    for (
                      var e = s.PPWheelEvent.obtainInstance(t.clock.getNow()),
                        r = 0,
                        n = t.layer.getWheelEventHandlers();
                      r < n.length;
                      r++
                    )
                      n[r].onMouseWheelEnd(e), (t.wheelEventEndTimer = null);
                    e.recycle();
                  }, 100));
              }),
              t
            );
          })();
        e.BaseLayerRenderer = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.startTime = null),
              (i.actualIncrement = null),
              (i.increment = e),
              (i.duration = r),
              (i.easingFunc = n),
              i
            );
          }
          return (
            n(e, t),
            (e.fromDDE = function(t, r) {
              return new e(t, r.duration, r.easingFunc);
            }),
            (e.prototype.start = function(t) {
              return (
                (this.startTime = t),
                (this.actualIncrement = this.increment.evalAsNumber()),
                null !== this.actualIncrement
              );
            }),
            (e.prototype.getIncrementAt = function(t) {
              return null === this.actualIncrement || null === this.startTime
                ? null
                : t >= this.startTime + this.duration
                  ? this.actualIncrement
                  : t <= this.startTime
                    ? 0
                    : this.actualIncrement *
                      this.easingFunc.computeValueProgress(
                        (t - this.startTime) / this.duration
                      );
            }),
            (e.prototype.clone = function() {
              return new e(this.increment, this.duration, this.easingFunc);
            }),
            (e.prototype.getDuration = function() {
              return this.duration;
            }),
            (e.prototype.isEnded = function(t) {
              return t >= this.startTime + this.duration;
            }),
            e
          );
        })(r(62).NumberAnimation);
        e.IncrementNumberAnimation = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(14),
          i = (function() {
            function t(t, e) {
              void 0 === t && (t = null),
                void 0 === e && (e = null),
                (this.min = null),
                (this.max = null),
                (this.min = t),
                (this.max = e);
            }
            return (
              (t.prototype.applyTo = function(t) {
                return null !== this.min && t < this.min
                  ? this.min
                  : null != this.max && t > this.max
                    ? this.max
                    : t;
              }),
              (t.prototype.merge = function(e) {
                var r = new t(this.min, this.max);
                return (
                  n.LangUtils.isNil(e.min) ||
                    ((n.LangUtils.isNil(r.min) || e.min > r.min) &&
                      (r.min = e.min)),
                  n.LangUtils.isNil(e.max) ||
                    ((n.LangUtils.isNil(r.max) || e.max < r.max) &&
                      (r.max = e.max)),
                  r
                );
              }),
              (t.prototype.multiply = function(e) {
                return new t(
                  n.LangUtils.isNil(this.min) ? null : this.min * e,
                  n.LangUtils.isNil(this.max) ? null : this.max * e
                );
              }),
              t
            );
          })();
        e.NumberLimit = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n,
          i = r(4),
          o = r(2),
          s = r(0);
        !(function(t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.ALL_DOWN = 1)] = "ALL_DOWN"),
            (t[(t.DRAGGING = 2)] = "DRAGGING"),
            (t[(t.CANCELED = 3)] = "CANCELED");
        })(n || (n = {}));
        var a = (function() {
          return function(t, e) {
            (this.drag = new o.Point(0, 0)),
              (this.time = t),
              (this.startPoint = e.clone());
          };
        })();
        e.PPDragEvent = a;
        var u = (function() {
          function t(t, e) {
            (this.fingerCount = 1),
              (this.state = n.NONE),
              (this.startPoint = new o.Point(0, 0)),
              (this.axis = t),
              (this.listener = e);
          }
          return (
            (t.prototype.reset = function() {
              (this.dragEvent = null), (this.state = n.NONE);
            }),
            (t.prototype.onTouchEvent = function(t) {
              t.lastAction == i.TouchEventAction.DOWN
                ? this.onTouchDown(t)
                : t.lastAction == i.TouchEventAction.MOVE
                  ? this.onTouchMove(t)
                  : t.lastAction == i.TouchEventAction.UP && this.onTouchUp(t);
            }),
            (t.prototype.onTouchDown = function(t) {
              this.state == n.NONE && t.getTouchCount() == this.fingerCount
                ? (this.startPoint.copyFrom(t.focus),
                  this.listener.onDragTouchDown(t.lastActionTime)
                    ? ((this.state = n.DRAGGING), this.startEvent(t))
                    : (this.state = n.ALL_DOWN))
                : t.getTouchCount() > this.fingerCount &&
                  (this.state == n.DRAGGING && this.endEvent(t),
                  (this.state = n.CANCELED));
            }),
            (t.prototype.onTouchMove = function(t) {
              this.state == n.ALL_DOWN &&
                this.touchMovedSignificantly(t) &&
                ((this.state = n.DRAGGING), this.startEvent(t)),
                this.state == n.DRAGGING && this.updateEvent(t);
            }),
            (t.prototype.onTouchUp = function(t) {
              this.state == n.DRAGGING && this.endEvent(t),
                0 == t.getTouchCount()
                  ? (this.state = n.NONE)
                  : (this.state = n.CANCELED);
            }),
            (t.prototype.touchMovedSignificantly = function(t) {
              return (
                (this.axis != s.DragAxis.VERTICAL &&
                  Math.abs(t.focus.x - this.startPoint.x) > 5) ||
                (this.axis != s.DragAxis.HORIZONTAL &&
                  Math.abs(t.focus.y - this.startPoint.y) > 5)
              );
            }),
            (t.prototype.startEvent = function(t) {
              (this.dragEvent = new a(t.lastActionTime, t.focus)),
                (this.dragEvent.touchEvent = t),
                this.listener.onDragStart(this.dragEvent);
            }),
            (t.prototype.updateEvent = function(t) {
              (this.dragEvent.time = t.lastActionTime),
                this.dragEvent.drag.setDiff(this.startPoint, t.focus),
                (this.dragEvent.touchEvent = t),
                this.listener.onDragMove(this.dragEvent);
            }),
            (t.prototype.endEvent = function(t) {
              (this.dragEvent.time = t.lastActionTime),
                (this.dragEvent.touchEvent = t),
                this.listener.onDragEnd(this.dragEvent);
            }),
            t
          );
        })();
        e.DragDetector = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(25),
          o = r(79),
          s = (function(t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.textInputEventListeners = []),
                (e.placeHolderText = ""),
                (e.keyboardType = "TEXT"),
                (e.returnKeyType = "DONE"),
                (e.keyboardLook = "LIGHT"),
                (e.autoFocusOut = !0),
                (e.focusOutOnTapOutside = !0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.requestFocus = function(t) {
                this.focusRequestListener &&
                  this.focusRequestListener.onFocusRequested(t);
              }),
              (e.prototype.notifyFocusStatus = function(t, e) {
                for (
                  var r = 0, n = this.textInputEventListeners;
                  r < n.length;
                  r++
                ) {
                  var i = n[r];
                  i.onFocusStatusChanged && i.onFocusStatusChanged(this, t, e);
                }
              }),
              (e.prototype.notifyReturnKey = function(t) {
                for (
                  var e = 0, r = this.textInputEventListeners;
                  e < r.length;
                  e++
                ) {
                  var n = r[e];
                  n.onReturnKeyPressed && n.onReturnKeyPressed(this, t);
                }
              }),
              (e.prototype.addTextInputEventListener = function(t) {
                this.textInputEventListeners.push(t);
              }),
              (e.prototype.getKeyboardOptions = function() {
                var t = new o.PPKeyboardOptions();
                return (
                  (t.keyboardType = this.keyboardType),
                  (t.returnKeyType = this.returnKeyType),
                  (t.keyboardLook = this.keyboardLook),
                  t
                );
              }),
              e
            );
          })(i.TextLayer);
        e.TextInputLayer = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r) {
            (this.doNotExpire = !0),
              (this.layerId = t),
              (this.property = e),
              (this.animation = r);
          }
          return (
            (t.prototype.run = function(t, e) {
              (this.actualAnimation = this.animation.clone()),
                this.property.startAnimation(this.actualAnimation, t);
            }),
            (t.prototype.shouldStopForLayer = function(t) {
              return t.id == this.layerId;
            }),
            (t.prototype.shouldStopForVariable = function(t) {
              return !1;
            }),
            (t.prototype.isEnded = function(t) {
              return this.actualAnimation && this.actualAnimation.isEnded(t);
            }),
            t
          );
        })();
        e.PPNumberAnimationTask = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            (this.responses = []), (this.conditionalResponses = []);
            for (var r = 0, n = t; r < n.length; r++) {
              var i = n[r];
              this.addResponse(i);
            }
          }
          return (
            (t.prototype.addResponse = function(t) {
              this.responses.push(t);
            }),
            (t.prototype.addConditionalResponseList = function(t) {
              this.conditionalResponses.push(t);
            }),
            (t.prototype.init = function(t) {
              for (var e = 0, r = this.responses; e < r.length; e++)
                r[e].init(t);
              for (var n = 0, i = this.conditionalResponses; n < i.length; n++)
                i[n].init(t);
            }),
            (t.prototype.run = function(t) {
              for (var e = 0, r = this.responses; e < r.length; e++)
                r[e].run(t);
              for (var n = 0, i = this.conditionalResponses; n < i.length; n++)
                i[n].run(t);
            }),
            t
          );
        })();
        e.OneTimeResponseList = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {
            (this.unsupportedFeatures = []),
              (this.missingFonts = []),
              (this.errorMessage = null),
              (this.errorCode = null);
          }
          return (
            (t.prototype.addUnsupportedFeature = function(t) {
              this.unsupportedFeatures.indexOf(t) < 0 &&
                this.unsupportedFeatures.push(t);
            }),
            (t.FEATURE_PINCH_TRIGGER = "PinchTrigger"),
            (t.FEATURE_ROTATE_TRIGGER = "RotateTrigger"),
            (t.FEATURE_TILT_TRIGGER = "TiltTrigger"),
            (t.FEATURE_PROXIMITY_TRIGGER = "ProximityTrigger"),
            (t.FEATURE_FINGER_COUNT = "FingerCount"),
            (t.FEATURE_COMPASS_TRIGGER = "CompassTrigger"),
            (t.FEATURE_SOUND_TRIGGER = "SoundTrigger"),
            (t.FEATURE_TOUCH3D_TRIGGER = "3DTouchTrigger"),
            (t.FEATURE_VIBRATE_RESPONSE = "VibrateResponse"),
            (t.FEATURE_MASK = "Mask"),
            (t.FEATURE_MULTIPLE_VIDEO = "MultipleVideo"),
            (t.FEATURE_VIDEO_SOUND = "VideoSound"),
            t
          );
        })();
        e.PPPieReadResult = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return n(e, t), e;
        })(r(62).NumberAnimation);
        e.SetNumberAnimation = i;
      },
      function(t, e, r) {
        "use strict";
        function n(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function i(t, e) {
          return 3 * e - 6 * t;
        }
        function o(t) {
          return 3 * t;
        }
        function s(t, e, r) {
          return ((n(e, r) * t + i(e, r)) * t + o(e)) * t;
        }
        function a(t, e, r) {
          return 3 * n(e, r) * t * t + 2 * i(e, r) * t + o(e);
        }
        function u(t, e, r, n, i) {
          var o,
            a,
            u = 0;
          do {
            (o = s((a = e + (r - e) / 2), n, i) - t) > 0 ? (r = a) : (e = a);
          } while (Math.abs(o) > p && ++u < f);
          return a;
        }
        function c(t, e, r, n) {
          for (var i = 0; i < l; ++i) {
            var o = a(e, r, n);
            if (0 === o) return e;
            e -= (s(e, r, n) - t) / o;
          }
          return e;
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l = 4,
          h = 0.001,
          p = 1e-7,
          f = 10,
          d = 11,
          y = 1 / (d - 1),
          g = "function" == typeof Float32Array,
          v = (function() {
            function t(t, e, r, n) {
              this.bezierEasing = (function(t, e, r, n) {
                function i(e) {
                  for (var n = 0, i = 1, s = d - 1; i !== s && o[i] <= e; ++i)
                    n += y;
                  var l = n + ((e - o[--i]) / (o[i + 1] - o[i])) * y,
                    p = a(l, t, r);
                  return p >= h
                    ? c(e, l, t, r)
                    : 0 === p
                      ? l
                      : u(e, n, n + y, t, r);
                }
                if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
                  throw new Error("bezier x values must be in [0, 1] range");
                var o = g ? new Float32Array(d) : new Array(d);
                if (t !== e || r !== n)
                  for (var l = 0; l < d; ++l) o[l] = s(l * y, t, r);
                return function(o) {
                  return t === e && r === n
                    ? o
                    : 0 === o
                      ? 0
                      : 1 === o
                        ? 1
                        : s(i(o), e, n);
                };
              })(t, e, r, n);
            }
            return (
              (t.prototype.computeValueProgress = function(t) {
                return this.bezierEasing(t);
              }),
              t
            );
          })();
        e.CubicBezierEasingFunc = v;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(3),
          i = (function() {
            function t() {
              (this.ppi = 97), this.detectPpi();
            }
            return (
              (t.getInstance = function() {
                return (
                  this.instance || (this.instance = new t()), this.instance
                );
              }),
              (t.prototype.getPpi = function() {
                return this.ppi;
              }),
              (t.prototype.detectPpi = function() {
                var t = this,
                  e = document.createElement("div");
                (e.style.position = "absolute"),
                  (e.style.top = "0"),
                  (e.style.left = "0"),
                  (e.style.width = "1in"),
                  (e.style.height = "1in"),
                  (e.style.background = "#f00"),
                  (e.style.opacity = "0"),
                  document.body.appendChild(e);
                var r = 0,
                  i = function() {
                    var o = e.offsetWidth;
                    o > 0
                      ? ((t.ppi = o),
                        document.body.removeChild(e),
                        n.Logger.i("Detected PPI: " + t.ppi))
                      : r < 100
                        ? (r++, window.setTimeout(i, 10))
                        : (n.Logger.w("Failed to detect PPI"),
                          document.body.removeChild(e));
                  };
                window.setTimeout(i, 0);
              }),
              t
            );
          })();
        e.SystemInfo = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(31),
          o = r(41),
          s = r(2),
          a = r(0),
          u = r(19),
          c = r(51),
          l = r(14),
          h = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (
                (r.direction = a.DragAxis.FREE),
                (r.useAutoPivot = !0),
                (r.wLimit = new o.NumberLimit()),
                (r.hLimit = new o.NumberLimit()),
                (r.wChange = new u.NumberChange()),
                (r.hChange = new u.NumberChange()),
                (r.originMoved = !1),
                (r.layer = e),
                (r.originalOrigin = new s.Point(e.origin.x, e.origin.y)),
                r
              );
            }
            return (
              n(e, t),
              (e.prototype.onStart = function(t) {
                var e = t.time;
                this.direction != a.DragAxis.VERTICAL &&
                  ((this.wChange.increment = 0),
                  this.wChange.setLimit(this.wLimit),
                  this.layer.w.startContinuousChange(this.wChange, e)),
                  this.direction != a.DragAxis.HORIZONTAL &&
                    ((this.hChange.increment = 0),
                    this.hChange.setLimit(this.hLimit),
                    this.layer.h.startContinuousChange(this.hChange, e)),
                  this.useAutoPivot &&
                    (this.layer.moveOrigin(
                      this.layer.absToPivot(t.currentFocus)
                    ),
                    (this.originMoved = !0)),
                  (this.initialSize = new c.PPSize(
                    this.layer.w.curVal(),
                    this.layer.h.curVal()
                  ));
              }),
              (e.prototype.onChange = function(t) {
                var e = t.scaleRatio - 1;
                this.direction != a.DragAxis.VERTICAL &&
                  this.applyIncrement(
                    this.initialSize.w * e,
                    this.layer.w,
                    this.wChange
                  ),
                  this.direction != a.DragAxis.HORIZONTAL &&
                    this.applyIncrement(
                      this.initialSize.h * e,
                      this.layer.h,
                      this.hChange
                    );
              }),
              (e.prototype.onEnd = function(t) {
                t.time,
                  this.direction != a.DragAxis.VERTICAL &&
                    this.layer.w.endContinuousChange(this.wChange),
                  this.direction != a.DragAxis.HORIZONTAL &&
                    this.layer.h.endContinuousChange(this.hChange),
                  this.originMoved &&
                    (this.layer.moveOrigin(this.originalOrigin),
                    (this.originMoved = !1));
              }),
              (e.prototype.applyIncrement = function(t, e, r) {
                var n = e.curVal() - r.increment,
                  i = this.applyMinMax(n + t, r.min, r.max);
                r.increment = i - n;
              }),
              (e.prototype.applyMinMax = function(t, e, r) {
                var n = t;
                return (
                  !l.LangUtils.isNil(e) && n < e && (n = e),
                  !l.LangUtils.isNil(r) && n > r && (n = r),
                  n
                );
              }),
              e
            );
          })(i.PinchResponse);
        e.PinchScaleResponse = h;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(0),
          i = (function() {
            function t(t, e) {
              (this.w = t), (this.h = e);
            }
            return (
              (t.prototype.getValue = function(t) {
                return t == n.Axis2D.X
                  ? this.w
                  : t == n.Axis2D.Y
                    ? this.h
                    : void 0;
              }),
              t
            );
          })();
        e.PPSize = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(18),
          o = r(4),
          s = r(42),
          a = r(0),
          u = r(53),
          c = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, r) || this;
              return (
                (n.responses = []),
                (n.fingerCount = 1),
                (n.dragDetector = new s.DragDetector(a.DragAxis.FREE, n)),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.setFingerCount = function(t) {
                (this.fingerCount = t), (this.dragDetector.fingerCount = t);
              }),
              (e.prototype.getFingerCount = function() {
                return this.fingerCount;
              }),
              (e.prototype.onTouchEvent = function(t) {
                this.dragDetector.onTouchEvent(t);
              }),
              (e.prototype.reset = function() {
                this.dragDetector.reset();
              }),
              (e.prototype.getTouchEventUsageType = function() {
                return o.TouchEventUsageType.MOVE_FREE;
              }),
              (e.prototype.isOptimizable = function() {
                if (
                  1 == this.responses.length &&
                  2 == this.fingerCount &&
                  this.responses[0] instanceof u.DragMoveResponse
                ) {
                  var t = this.responses[0];
                  return (
                    t.layer.id == this.layer.id &&
                    t.direction == a.DragAxis.FREE
                  );
                }
                return !1;
              }),
              (e.prototype.onDragTouchDown = function(t) {
                return !1;
              }),
              (e.prototype.onDragStart = function(t) {
                for (var e = 0, r = this.responses; e < r.length; e++)
                  r[e].onStart(t), this.touchSession.notifyDetected(this);
              }),
              (e.prototype.onDragMove = function(t) {
                for (var e = 0, r = this.responses; e < r.length; e++)
                  r[e].onChange(t);
              }),
              (e.prototype.onDragEnd = function(t) {
                for (var e = 0, r = this.responses; e < r.length; e++)
                  r[e].onEnd(t), this.touchSession.notifyEnded(this);
              }),
              e
            );
          })(i.TouchTrigger);
        e.DragTrigger = c;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(31),
          o = r(19),
          s = r(0),
          a = r(71),
          u = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (
                (r.direction = s.DragAxis.FREE),
                (r.ratio = 1),
                (r.xChange = new o.NumberChange()),
                (r.yChange = new o.NumberChange()),
                (r.layer = e),
                r
              );
            }
            return (
              n(e, t),
              (e.prototype.onStart = function(t) {
                var e = t.time;
                this.direction != s.DragAxis.VERTICAL &&
                  ((this.xChange.increment = 0),
                  this.layer.x.startContinuousChange(this.xChange, e)),
                  this.direction != s.DragAxis.HORIZONTAL &&
                    ((this.yChange.increment = 0),
                    this.layer.y.startContinuousChange(this.yChange, e));
              }),
              (e.prototype.onChange = function(t) {
                if (this.limitToParent) {
                  var e = a.CoordUtils.computeContainingRect(this.layer);
                  this.direction != s.DragAxis.VERTICAL &&
                    this.setLimitToParent(this.xChange, s.Axis2D.X, e),
                    this.direction != s.DragAxis.HORIZONTAL &&
                      this.setLimitToParent(this.yChange, s.Axis2D.Y, e);
                } else
                  this.direction != s.DragAxis.VERTICAL &&
                    this.xChange.setLimit(this.xLimit),
                    this.direction != s.DragAxis.HORIZONTAL &&
                      this.yChange.setLimit(this.yLimit);
                this.direction != s.DragAxis.VERTICAL &&
                  (this.xChange.increment = t.drag.x * this.ratio),
                  this.direction != s.DragAxis.HORIZONTAL &&
                    (this.yChange.increment = t.drag.y * this.ratio);
              }),
              (e.prototype.onEnd = function(t) {
                t.time,
                  this.direction != s.DragAxis.VERTICAL &&
                    this.layer.x.endContinuousChange(this.xChange),
                  this.direction != s.DragAxis.HORIZONTAL &&
                    this.layer.y.endContinuousChange(this.yChange);
              }),
              (e.prototype.setLimitToParent = function(t, e, r) {
                var n = this.layer.parent;
                if (n) {
                  var i = n.getSize(e).curVal(),
                    o = this.layer.getPositionProp(e).curVal() - r.getMin(e),
                    s = r.getMax(e) - this.layer.getPositionProp(e).curVal();
                  i > r.size.getValue(e)
                    ? ((t.min = o), (t.max = i - s))
                    : ((t.min = i - s), (t.max = o));
                }
              }),
              e
            );
          })(i.DragResponse);
        e.DragMoveResponse = u;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r, n, i) {
            void 0 === n && (n = null),
              void 0 === i && (i = null),
              (this.x = 0),
              (this.y = 0),
              (this.visible = !1),
              (this.name = t),
              (this.value = e),
              (this.dataType = r),
              (this.linkSceneId = n),
              (this.linkVarName = i);
          }
          return (
            (t.prototype.getDataType = function() {
              return this.dataType;
            }),
            (t.prototype.isWritable = function() {
              return !0;
            }),
            (t.prototype.isLink = function() {
              return null !== this.linkSceneId && null !== this.linkVarName;
            }),
            (t.prototype.getValue = function() {
              return this.value;
            }),
            (t.prototype.setValue = function(t) {
              this.value = t;
            }),
            (t.prototype.syncFrom = function(t) {
              this.setValue(t.getValue());
            }),
            t
          );
        })();
        e.PPVar = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (n.changeDetector = e), (n.responses = r), n;
          }
          return (
            n(e, t),
            (e.prototype.reset = function() {
              this.changeDetector.reset();
            }),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.run = function(t) {
              this.changeDetector.isChanged() && this.responses.run(t);
            }),
            e
          );
        })(r(16).Trigger);
        e.ChangeTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(30),
          o = r(17),
          s = r(10),
          a = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, r) || this;
              return (
                (n.radius = new o.NumberProperty(
                  "radius",
                  0,
                  s.Unit.PIXEL,
                  0,
                  null
                )),
                n.registerProperty(n.radius),
                n
              );
            }
            return n(e, t), e;
          })(i.Layer);
        e.ImageLayer = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(17),
          o = r(10),
          s = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, r) || this;
              return (
                (n.radius = new i.NumberProperty(
                  "radius",
                  0,
                  o.Unit.PIXEL,
                  0,
                  null
                )),
                n.registerProperty(n.radius),
                n
              );
            }
            return n(e, t), e;
          })(r(33).ShapeLayer);
        e.RectLayer = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(36),
          i = r(1),
          o = r(84),
          s = r(85),
          a = r(129),
          u = r(59),
          c = r(132),
          l = r(133),
          h = r(3),
          p = new o.PPPseudoVarTable(),
          f = s.PPFunctions.createRegistry(null),
          d = (function() {
            return function(t, e) {
              (this.name = t), (this.dataType = e);
            };
          })();
        e.PPVariableDefinition = d;
        var y = (function() {
          function t(t) {
            (this.contextStack = []),
              (this.resultNodes = []),
              (this.exprStr = t),
              (this.tokenReader = new c.ExprTokenReader(t));
          }
          return (
            (t.parse = function(t, e) {
              var r = this.parseInternal(t),
                n = this.validateNode(r, e);
              return new u.PPExprParseResult(r, n, t);
            }),
            (t.getFunctionSignatures = function() {
              return f.getFunctionSignatures();
            }),
            (t.getPseudoVariables = function() {
              return p.getVariables().map(function(t) {
                return new d(t.name, i.dataTypeToString(t.dataType));
              });
            }),
            (t.parseAsExpr = function(t, e, r, i) {
              var o = this.parseInternal(t);
              return o instanceof n.PPExprParseNode
                ? o.errors.length > 0
                  ? (h.Logger.w(
                      "Expression has errors",
                      o.errors.map(function(t) {
                        return t.message;
                      })
                    ),
                    null)
                  : a.ParseResultTranslator.translate(o, e, r, i)
                : null;
            }),
            (t.validateNode = function(t, e) {
              var r = new g(e, p);
              if (t instanceof n.PPExprParseNode) return t.validate(r, f);
              if (t instanceof n.PPExprListNode) {
                for (var i = 0, o = t.nodes; i < o.length; i++) {
                  var s = o[i];
                  s instanceof n.PPExprParseNode && s.validate(r, f);
                }
                return null;
              }
              return null;
            }),
            (t.parseInternal = function(e) {
              var r = new t(e);
              try {
                return r.parse(), r.rootNode;
              } catch (t) {
                return (
                  h.Logger.w("Uncaught error while parsing an expression.", t),
                  new n.PPNotParsedString(0, 0, e)
                );
              }
            }),
            (t.prototype.parse = function() {
              for (
                this.currentContext = new l.PPExprParseContext(null);
                this.tokenReader.hasMore();

              ) {
                var t = this.tokenReader.readNextToken();
                if (!t) break;
                this.handleNode(t);
              }
              this.closeAllContext(),
                1 == this.resultNodes.length
                  ? (this.rootNode = this.resultNodes[0])
                  : ((this.rootNode = new n.PPExprListNode(this.resultNodes)),
                    this.resultNodes.length > 1 &&
                      this.rootNode.errors.push(
                        u.PPExprParseError.error(
                          this.resultNodes[1].effectivePosition,
                          u.ParseErrorCodes.UNEXPECTED_CHARACTER,
                          []
                        )
                      ));
            }),
            (t.prototype.handleNode = function(t) {
              if (t instanceof n.PPOperatorNode) {
                if (")" === t.operator)
                  return void (this.currentContext.closable()
                    ? this.closeContext(t)
                    : (this.closeAllContext(), this.resultNodes.push(t)));
                if ("(" === t.operator) {
                  var e = this.currentContext.popFunctionName();
                  return void this.openContext(t, e);
                }
              }
              this.currentContext.push(t) ||
                (this.closeAllContext(),
                this.currentContext.push(t) || this.resultNodes.push(t));
            }),
            (t.prototype.closeAllContext = function() {
              for (; this.contextStack.length > 0; ) this.closeContext();
              var t = this.currentContext.toExpr(null);
              t && this.resultNodes.push(t),
                (this.currentContext = new l.PPExprParseContext(null));
            }),
            (t.prototype.openContext = function(t, e) {
              this.contextStack.push(this.currentContext),
                (this.currentContext = new l.PPExprParseContext(e, t));
            }),
            (t.prototype.closeContext = function(t) {
              void 0 === t && (t = null);
              var e = this.currentContext.toExpr(t);
              (this.currentContext = this.contextStack.pop()),
                this.handleNode(e);
            }),
            t
          );
        })();
        e.PPExprParser = y;
        var g = (function() {
          function t(t, e) {
            (this.varTable = t), (this.pseudoVarTable = e);
          }
          return (
            (t.prototype.getVariableType = function(t) {
              var e = this.varTable.getVariableType(t);
              if (e) return e;
              var r = this.pseudoVarTable.getVariable(t);
              return r ? i.dataTypeToString(r.dataType) : null;
            }),
            (t.prototype.getLayerType = function(t) {
              return this.varTable.getLayerType(t);
            }),
            t
          );
        })();
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.errorMessage = function(t, e) {
              switch (t) {
                case this.EXPRESSION_EXPECTED:
                  return "Expression expected.";
                case this.UNEXPECTED_CHARACTER:
                  return "Unexpected character: " + e[0] + ".";
                case this.BINARY_OPERAND_REQUIRED:
                  return "Operand required.";
                case this.UNSUPPORTED_BINARY_OPERATION:
                  return (
                    "Unsupported operation " +
                    e[0] +
                    " with " +
                    e[1] +
                    " and " +
                    e[2] +
                    "."
                  );
                case this.UNSUPPORTED_UNARY_OPERATION:
                  return (
                    "Unsupported operation " + e[0] + " with " + e[1] + "."
                  );
                case this.UNDEFINED_FUNCTION:
                  return "Undefined function " + e[0] + ".";
                case this.FUNCTION_ARGS_MISMATCH:
                  return (
                    "Function " +
                    e[0] +
                    " does not support arguments " +
                    e[1] +
                    "."
                  );
                case this.UNDEFINED_VARIABLE:
                  return "Undefined variable: " + e[0];
                case this.UNDEFINED_LAYER:
                  return "Undefined layer: " + e[0];
                case this.UNDEFINED_PROPERTY:
                  return "Undefined property: " + e[0];
                case this.PROPERTY_REQUIRED:
                  return "Property name required.";
                case this.PARENTHESIS_NOT_CLOSED:
                  return ") expected.";
                case this.NOT_CLOSED:
                  return e[0] + " expected.";
                case this.INCOMPLETE_BINARY_OPERATION:
                  return "Incomplete binary operation: " + e[0] + ".";
                case this.INVALID_COLOR_LITERAL:
                  return "Invalid color value: " + e[0] + ".";
                case this.LAYER_REQUIRED:
                  return "Layer required.";
                case this.UNEXPECTED_PARSE_ERROR:
                  return "Unexpected parse error.";
              }
              return "Unexpected parse error: " + t;
            }),
            (t.UNEXPECTED_PARSE_ERROR = "UNEXPECTED_PARSE_ERROR"),
            (t.UNEXPECTED_CHARACTER = "UNEXPECTED_CHARACTER"),
            (t.UNDEFINED_VARIABLE = "UNDEFINED_VARIABLE"),
            (t.BINARY_OPERAND_REQUIRED = "BINARY_OPERAND_REQUIRED"),
            (t.UNSUPPORTED_BINARY_OPERATION = "UNSUPPORTED_BINARY_OPERATION"),
            (t.UNSUPPORTED_UNARY_OPERATION = "UNSUPPORTED_UNARY_OPERATION"),
            (t.UNDEFINED_FUNCTION = "UNDEFINED_FUNCTION"),
            (t.UNDEFINED_LAYER = "UNDEFINED_LAYER"),
            (t.UNDEFINED_PROPERTY = "UNDEFINED_PROPERTY"),
            (t.PROPERTY_REQUIRED = "PROPERTY_REQUIRED"),
            (t.FUNCTION_ARGS_MISMATCH = "FUNCTION_ARGS_MISMATCH"),
            (t.PARENTHESIS_NOT_CLOSED = "PARENTHESIS_NOT_CLOSED"),
            (t.NOT_CLOSED = "NOT_CLOSED"),
            (t.INCOMPLETE_BINARY_OPERATION = "INCOMPLETE_BINARY_OPERATION"),
            (t.INVALID_COLOR_LITERAL = "INVALID_COLOR_LITERAL"),
            (t.LAYER_REQUIRED = "LAYER_REQUIRED"),
            (t.EXPRESSION_EXPECTED = "EXPRESSION_EXPECTED"),
            t
          );
        })();
        e.ParseErrorCodes = n;
        var i = (function() {
          function t(t, e, r, n) {
            (this.position = t),
              (this.code = e),
              (this.args = r),
              (this.message = n);
          }
          return (
            (t.error = function(e, r, i) {
              return new t(e, r, i, n.errorMessage(r, i));
            }),
            t
          );
        })();
        e.PPExprParseError = i;
        var o = (function() {
          function t(t, e, r) {
            (this.resultType = null),
              (this.errors = []),
              (this.rootNode = t),
              (this.resultType = e),
              (this.trailingWhiteSpace = r.substring(
                this.rootNode.endPosition
              )),
              this.addErrors(t),
              this.errors.sort(function(t, e) {
                return t.position - e.position;
              });
          }
          return (
            (t.prototype.getFullText = function() {
              return this.rootNode
                ? this.rootNode.getFullText() + this.trailingWhiteSpace
                : this.trailingWhiteSpace;
            }),
            (t.prototype.addErrors = function(t) {
              var e = this;
              if (
                t &&
                (t.errors.forEach(function(t) {
                  return e.errors.push(t);
                }),
                t.children)
              )
                for (var r = 0, n = t.children; r < n.length; r++) {
                  var i = n[r];
                  this.addErrors(i);
                }
            }),
            t
          );
        })();
        e.PPExprParseResult = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          return function(t, e, r) {
            (this.delay = t), (this.duration = e), (this.easingFunc = r);
          };
        })();
        e.DDE = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          return function(t, e, r, n) {
            (this.family = t),
              (this.subfamily = e),
              (this.weight = r),
              (this.style = n);
          };
        })();
        e.PPFont = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          return function() {};
        })();
        e.NumberAnimation = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r) {
            (this.value = t),
              (this.velocity = e),
              (this.friction = r),
              (this.finished = !1);
          }
          return (
            (t.prototype.integrate = function(t) {
              this.finished ||
                ((this.value += this.velocity * t),
                this.velocity > 0
                  ? (this.velocity = Math.max(
                      this.velocity - this.friction * t,
                      0
                    ))
                  : (this.velocity = Math.min(
                      this.velocity + this.friction * t,
                      0
                    )),
                0 == this.velocity && (this.finished = !0),
                null !== this.minValue &&
                  this.value <= this.minValue &&
                  ((this.value = this.minValue), (this.finished = !0)),
                null !== this.maxValue &&
                  this.value >= this.maxValue &&
                  ((this.value = this.maxValue), (this.finished = !0)));
            }),
            (t.prototype.getValue = function() {
              return this.value;
            }),
            (t.prototype.getVelocity = function() {
              return this.velocity;
            }),
            (t.prototype.isFinished = function() {
              return this.finished;
            }),
            (t.prototype.setMinValue = function(t) {
              this.minValue = t;
            }),
            (t.prototype.setMaxValue = function(t) {
              this.maxValue = t;
            }),
            t
          );
        })();
        e.FrictionMovement = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r) {
            (this.yValues = []),
              (this.xStart = t),
              (this.xInterval = e),
              this.yValues.push(r);
          }
          return (
            (t.prototype.addSample = function(t) {
              this.yValues.push(t);
            }),
            (t.prototype.getXRange = function() {
              return this.xInterval * (this.yValues.length - 1);
            }),
            (t.prototype.getY = function(t) {
              var e = Math.round((t - this.xStart) / this.xInterval);
              return this.yValues[
                Math.min(Math.max(e, 0), this.yValues.length - 1)
              ];
            }),
            (t.prototype.update = function(t) {
              for (var e = 0; e < this.yValues.length; e++)
                this.yValues[e] = t(this.yValues[e]);
            }),
            t
          );
        })();
        e.Sampler = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e) {
            var r = t.call(this) || this;
            return (
              (r.startTime = null),
              (r.sampler = e),
              (r.duration = Math.ceil(1e3 * e.getXRange())),
              r
            );
          }
          return (
            n(e, t),
            (e.prototype.clone = function() {
              throw new Error("Not implemented");
            }),
            (e.prototype.getDuration = function() {
              return this.duration;
            }),
            (e.prototype.start = function(t, e) {
              return (this.startTime = e), !0;
            }),
            (e.prototype.isEnded = function(t) {
              return (
                null !== this.startTime && t > this.startTime + this.duration
              );
            }),
            (e.prototype.getValueAt = function(t) {
              return this.sampler.getY((t - this.startTime) / 1e3);
            }),
            e
          );
        })(r(47).SetNumberAnimation);
        e.SamplerAnimation = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(e) {
            (this.observers = []),
              (this.name = e),
              t.idCounter++,
              (this.id = e + "_" + t.idCounter);
          }
          return (
            (t.prototype.addObserver = function(t) {
              this.observers.push(t);
            }),
            (t.prototype.notifyShouldProgress = function() {
              for (var t = 0, e = this.observers; t < e.length; t++)
                e[t].onPropertyShouldProgress(this);
            }),
            (t.prototype.notifySetImmediate = function() {
              for (var t = 0, e = this.observers; t < e.length; t++)
                e[t].onPropertySetImmediate(this);
            }),
            (t.idCounter = 0),
            t
          );
        })();
        e.Property = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = r(18),
          s = r(4),
          a = r(2),
          u = r(50),
          c = (function() {
            function t() {
              (this.initialFocus = new a.Point(0, 0)),
                (this.currentFocus = new a.Point(0, 0));
            }
            return (
              (t.prototype.reset = function(t) {
                (this.time = t.lastActionTime),
                  this.initialFocus.copyFrom(t.focus),
                  (this.initialSpan = t.getSpan()),
                  this.updateValues(t);
              }),
              (t.prototype.updateValues = function(t) {
                (this.time = t.lastActionTime),
                  this.currentFocus.copyFrom(t.focus),
                  (this.currentSpan = t.getSpan()),
                  (this.scaleRatio = this.currentSpan / this.initialSpan);
              }),
              t
            );
          })();
        (e.PPPinchEvent = c),
          (function(t) {
            (t[(t.NONE = 0)] = "NONE"),
              (t[(t.DETECTING_MOVE = 1)] = "DETECTING_MOVE"),
              (t[(t.IN_PROGRESS = 2)] = "IN_PROGRESS");
          })(i || (i = {}));
        var l = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.responses = []),
              (e.pinchEvent = new c()),
              (e.state = i.NONE),
              e
            );
          }
          return (
            n(e, t),
            (e.prototype.onTouchEvent = function(t) {
              t.lastAction == s.TouchEventAction.DOWN
                ? (t.getTouchCount() >= 2 && t.enableSpanTracking(),
                  this.handleTouchCountChange(t))
                : t.lastAction == s.TouchEventAction.MOVE
                  ? this.handleTouchMove(t)
                  : t.lastAction == s.TouchEventAction.UP &&
                    this.handleTouchCountChange(t);
            }),
            (e.prototype.reset = function() {
              this.state = i.NONE;
            }),
            (e.prototype.getTouchEventUsageType = function() {
              return s.TouchEventUsageType.PINCH;
            }),
            (e.prototype.isOptimizable = function() {
              if (
                1 == this.responses.length &&
                this.responses[0] instanceof u.PinchScaleResponse
              ) {
                var t = this.responses[0];
                return t.layer.id == this.layer.id && t.useAutoPivot;
              }
              return !1;
            }),
            (e.prototype.handleTouchCountChange = function(t) {
              this.state == i.IN_PROGRESS && this.end(),
                t.getTouchCount() >= 2
                  ? (this.pinchEvent.reset(t), (this.state = i.DETECTING_MOVE))
                  : this.state != i.NONE && (this.state = i.NONE);
            }),
            (e.prototype.handleTouchMove = function(t) {
              this.state == i.DETECTING_MOVE
                ? ((this.state = i.IN_PROGRESS),
                  this.start(),
                  this.pinchEvent.updateValues(t),
                  this.updateChange())
                : this.state == i.IN_PROGRESS &&
                  (this.pinchEvent.updateValues(t), this.updateChange());
            }),
            (e.prototype.start = function() {
              for (var t = 0, e = this.responses; t < e.length; t++)
                e[t].onStart(this.pinchEvent);
              this.touchSession.notifyDetected(this);
            }),
            (e.prototype.updateChange = function() {
              for (var t = 0, e = this.responses; t < e.length; t++)
                e[t].onChange(this.pinchEvent);
            }),
            (e.prototype.end = function() {
              for (var t = 0, e = this.responses; t < e.length; t++)
                e[t].onEnd(this.pinchEvent);
            }),
            e
          );
        })(o.TouchTrigger);
        e.PinchTrigger = l;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.prototype.init = function(t) {
              this.scheduler = t;
            }),
            t
          );
        })();
        e.PPResponse = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(18),
          o = r(4),
          s = r(2),
          a = r(14),
          u = r(5),
          c = r(0),
          l = r(70),
          h = (function() {
            return function() {
              (this.initialFocus = new s.Point(0, 0)),
                (this.currentFocus = new s.Point(0, 0));
            };
          })();
        e.PPRotateEvent = h;
        var p = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.responses = []), (e.outEvent = new h()), e;
          }
          return (
            n(e, t),
            (e.prototype.onTouchEvent = function(t) {
              t.lastAction == o.TouchEventAction.DOWN
                ? this.onTouchDown(t)
                : t.lastAction == o.TouchEventAction.MOVE
                  ? this.onTouchMove(t)
                  : t.lastAction == o.TouchEventAction.UP && this.onTouchUp(t);
            }),
            (e.prototype.reset = function() {
              (this.touch1Id = null), (this.touch2Id = null);
            }),
            (e.prototype.getTouchEventUsageType = function() {
              return o.TouchEventUsageType.ROTATE;
            }),
            (e.prototype.isOptimizable = function() {
              if (
                1 == this.responses.length &&
                this.responses[0] instanceof l.RotateRotateResponse
              ) {
                var t = this.responses[0];
                return t.layer.id == this.layer.id && t.useAutoPivot;
              }
              return !1;
            }),
            (e.prototype.onTouchDown = function(t) {
              for (var e in t.pointerMap)
                if (a.LangUtils.isNil(this.touch1Id)) this.touch1Id = e;
                else {
                  if (!a.LangUtils.isNil(this.touch2Id)) break;
                  e != this.touch1Id &&
                    ((this.touch2Id = e), this.updateVars(t, !0), this.start());
                }
            }),
            (e.prototype.onTouchMove = function(t) {
              a.LangUtils.isNil(this.touch2Id) ||
                (this.updateVars(t, !1), this.updateChange());
            }),
            (e.prototype.onTouchUp = function(t) {
              a.LangUtils.isNil(this.touch1Id) ||
              a.LangUtils.isNil(this.touch2Id)
                ? a.LangUtils.isNil(this.touch1Id) || (this.touch1Id = null)
                : (t.pointerMap[this.touch1Id] &&
                    t.pointerMap[this.touch2Id]) ||
                  (this.end(), (this.touch1Id = null), (this.touch2Id = null));
            }),
            (e.prototype.start = function() {
              for (var t = 0, e = this.responses; t < e.length; t++)
                e[t].onStart(this.outEvent);
              this.touchSession.notifyDetected(this);
            }),
            (e.prototype.updateChange = function() {
              for (var t = 0, e = this.responses; t < e.length; t++)
                e[t].onChange(this.outEvent);
            }),
            (e.prototype.end = function() {
              for (var t = 0, e = this.responses; t < e.length; t++)
                e[t].onEnd(this.outEvent);
            }),
            (e.prototype.updateVars = function(t, e) {
              var r = t.pointerMap[this.touch1Id],
                n = t.pointerMap[this.touch2Id];
              if (r && n) {
                var i = u.AngleUtils.getLineAngle(r, n);
                e &&
                  ((this.outEvent.initialAngle = i),
                  (this.outEvent.initialFocus = t.focus)),
                  (this.outEvent.time = t.lastActionTime),
                  (this.outEvent.currentAngle = i),
                  (this.outEvent.currentFocus = t.focus),
                  (this.outEvent.angleChange = u.AngleUtils.getAngleDelta(
                    this.outEvent.initialAngle,
                    this.outEvent.currentAngle,
                    c.RotateDirection.NEAR
                  ));
              }
            }),
            e
          );
        })(i.TouchTrigger);
        e.RotateTrigger = p;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(31),
          o = r(2),
          s = r(0),
          a = r(19),
          u = r(5),
          c = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (
                (r.useAutoPivot = !0),
                (r.rChange = new a.NumberChange()),
                (r.originMoved = !1),
                (r.layer = e),
                (r.originalOrigin = new o.Point(e.origin.x, e.origin.y)),
                r
              );
            }
            return (
              n(e, t),
              (e.prototype.onStart = function(t) {
                (this.rChange.increment = 0),
                  this.layer.r.startContinuousChange(this.rChange, t.time),
                  this.useAutoPivot &&
                    (this.layer.moveOrigin(
                      this.layer.absToPivot(t.currentFocus)
                    ),
                    (this.originMoved = !0)),
                  (this.initialRotation = this.layer.r.curVal());
              }),
              (e.prototype.onChange = function(t) {
                var e = u.AngleUtils.normalize(
                  this.initialRotation + t.angleChange
                );
                this.rChange.increment = u.AngleUtils.getAngleDelta(
                  this.initialRotation,
                  e,
                  s.RotateDirection.NEAR
                );
              }),
              (e.prototype.onEnd = function(t) {
                this.layer.r.endContinuousChange(this.rChange),
                  this.originMoved &&
                    (this.layer.moveOrigin(this.originalOrigin),
                    (this.originMoved = !1));
              }),
              e
            );
          })(i.RotateResponse);
        e.RotateRotateResponse = c;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(72),
          i = r(2),
          o = r(51),
          s = r(5),
          a = (function() {
            function t() {}
            return (
              (t.computeContainingRect = function(t) {
                if (0 == t.r.curVal())
                  return new n.PPRect(
                    new i.Point(t.getLeft(), t.getTop()),
                    new o.PPSize(t.w.curVal(), t.h.curVal())
                  );
                for (
                  var e = Number.POSITIVE_INFINITY,
                    r = Number.POSITIVE_INFINITY,
                    a = Number.NEGATIVE_INFINITY,
                    u = Number.NEGATIVE_INFINITY,
                    c = t.r.curVal(),
                    l = new i.Point(t.x.curVal(), t.y.curVal()),
                    h = new i.Point(0, 0),
                    p = [t.getLeft(), t.getRight()],
                    f = [t.getTop(), t.getBottom()],
                    d = 0,
                    y = p;
                  d < y.length;
                  d++
                )
                  for (var g = y[d], v = 0, m = f; v < m.length; v++) {
                    var E = m[v];
                    s.AngleUtils.rotate(new i.Point(g, E), c, l, h),
                      (e = Math.min(e, h.x)),
                      (a = Math.max(a, h.x)),
                      (r = Math.min(r, h.y)),
                      (u = Math.max(u, h.y));
                  }
                return new n.PPRect(
                  new i.Point(e, r),
                  new o.PPSize(a - e, u - r)
                );
              }),
              (t.computePositionChangeForScale = function(t, e, r, n, i) {
                var o = s.AngleUtils.toRadians(t.r.curVal());
                (i.x =
                  -(e.x - t.origin.x) * r * Math.cos(o) +
                  (e.y - t.origin.y) * n * Math.sin(o)),
                  (i.y =
                    -(e.x - t.origin.x) * r * Math.sin(o) -
                    (e.y - t.origin.y) * n * Math.cos(o));
              }),
              t
            );
          })();
        e.CoordUtils = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(0),
          i = (function() {
            function t(t, e) {
              (this.position = t), (this.size = e);
            }
            return (
              (t.prototype.getTop = function() {
                return this.position.y;
              }),
              (t.prototype.getBottom = function() {
                return this.position.y + this.size.h;
              }),
              (t.prototype.getLeft = function() {
                return this.position.x;
              }),
              (t.prototype.getRight = function() {
                return this.position.x + this.size.w;
              }),
              (t.prototype.getMin = function(t) {
                return t == n.Axis2D.X
                  ? this.getLeft()
                  : t == n.Axis2D.Y
                    ? this.getTop()
                    : void 0;
              }),
              (t.prototype.getMax = function(t) {
                return t == n.Axis2D.X
                  ? this.getRight()
                  : t == n.Axis2D.Y
                    ? this.getBottom()
                    : void 0;
              }),
              t
            );
          })();
        e.PPRect = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e) {
            var r = t.call(this) || this;
            return (
              (r.lastValue = Number.NaN),
              (r.responses = []),
              (r.numberProvider = e),
              r
            );
          }
          return (
            n(e, t),
            (e.prototype.addResponse = function(t) {
              this.responses.push(t);
            }),
            (e.prototype.reset = function() {
              this.lastValue = Number.NaN;
            }),
            (e.prototype.run = function(t) {
              var e = !1,
                r = this.numberProvider.getNumberValue();
              if (r != this.lastValue) {
                for (var n = 0, i = this.responses; n < i.length; n++)
                  i[n].run(r, t) && (e = !0);
                this.lastValue = r;
              }
              return e;
            }),
            e
          );
        })(r(16).Trigger);
        e.ChainTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.beforeTransition = !1),
              (i.onlyOnReset = !0),
              (i.executed = !1),
              (i.responses = e),
              (i.onlyOnReset = r),
              (i.beforeTransition = n),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.reset = function() {
              this.executed = !1;
            }),
            (e.prototype.run = function(t) {
              (this.executed && this.onlyOnReset) ||
                (this.responses.run(t), (this.executed = !0));
            }),
            e
          );
        })(r(16).Trigger);
        e.OnLoadTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.matched = !1),
              (i.numberProvider = e),
              (i.range = r),
              (i.responses = n),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.reset = function() {
              this.matched = !1;
            }),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.run = function(t) {
              this.range.isInRange(this.numberProvider.getNumberValue())
                ? this.matched || (this.responses.run(t), (this.matched = !0))
                : (this.matched = !1);
            }),
            e
          );
        })(r(16).Trigger);
        e.RangeTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(16),
          o = r(22),
          s = r(23),
          a = r(12),
          u = r(34),
          c = (function(t) {
            function e(e, r) {
              var n = t.call(this) || this;
              return (n.responses = e), (n.storeVar = r), n;
            }
            return (
              n(e, t),
              (e.prototype.init = function(e) {
                t.prototype.init.call(this, e), this.responses.init(e);
              }),
              (e.prototype.reset = function() {}),
              (e.prototype.run = function(t, e) {
                if (this.storeVar && null !== e)
                  if (this.storeVar instanceof o.PPStringVar)
                    this.storeVar.setValue(e);
                  else if (this.storeVar instanceof s.PPNumberVar) {
                    var r = a.PPExprUtils.stringToNumber(e);
                    null !== r && this.storeVar.setValue(r);
                  } else if (this.storeVar instanceof u.PPColorVar) {
                    var n = a.PPExprUtils.stringToColor(e);
                    null !== n && this.storeVar.setValue(n);
                  }
                this.responses.run(t);
              }),
              e
            );
          })(i.Trigger);
        e.ReceiveTrigger = c;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (n.id = e), (n.layer = r), n;
          }
          return n(e, t), e;
        })(r(16).Trigger);
        e.AbstractMouseTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        for (
          var i = r(16),
            o = {
              ESC: ["Escape"],
              ENTER: ["Enter"],
              SPACE: [" "],
              TAB: ["Tab"],
              UP: ["ArrowUp"],
              LEFT: ["ArrowLeft"],
              RIGHT: ["ArrowRight"],
              DOWN: ["ArrowDown"]
            },
            s = "A";
          s <= "Z";
          s = String.fromCharCode(s.charCodeAt(0) + 1)
        )
          o[s] = [s, s.toLowerCase()];
        for (s = "0"; s <= "9"; s = String.fromCharCode(s.charCodeAt(0) + 1))
          o[s] = [s];
        var a = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (n.key = e), (n.responses = r), n;
          }
          return (
            n(e, t),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.reset = function() {}),
            (e.prototype.run = function(t, e) {
              this.keyMatched(t) && this.responses.run(e);
            }),
            (e.prototype.keyMatched = function(t) {
              var e = o[this.key];
              return e && e.indexOf(t.key) >= 0;
            }),
            e
          );
        })(i.Trigger);
        e.KeyTrigger = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.prototype.isNumberKeyboard = function() {
              return (
                "NUMBER" == this.keyboardType ||
                "NUMBER_PASSWORD" == this.keyboardType
              );
            }),
            t
          );
        })();
        e.PPKeyboardOptions = n;
        var i = (function() {
          return function() {
            (this.subImageUrl = null),
              (this.subImageWidth = 0),
              (this.subImageHeight = 0);
          };
        })();
        e.PPKeyboardDef = i;
        var o = (function() {
          function t(t) {
            this.imageUrlBase = t;
          }
          return (
            (t.prototype.getKeyboardDef = function(t, e) {
              if (!this.imageUrlBase) return null;
              var r = this.normalizeDeviceId(e.id);
              if (!r) return null;
              var n = new i();
              return (
                this.setSize(n, t, r),
                (n.imageUrl = this.getMainImageUrl(t, r)),
                (n.subImageUrl = this.getSubImageUrl(t, r)),
                n
              );
            }),
            (t.prototype.setSize = function(t, e, r) {
              switch (r) {
                case "IPHONE_8":
                  (t.width = 750),
                    (t.height = 432),
                    (t.subImageWidth = 180),
                    (t.subImageHeight = 92);
                  break;
                case "IPHONE_8PLUS":
                  (t.width = 1242),
                    (t.height = 678),
                    (t.subImageWidth = 306),
                    (t.subImageHeight = 150);
                  break;
                case "IPHONE_X":
                  (t.width = 750),
                    (t.height = 582),
                    (t.subImageWidth = 180),
                    (t.subImageHeight = 242);
                  break;
                case "IPHONE_SE":
                  (t.width = 640),
                    (t.height = 432),
                    (t.subImageWidth = 154),
                    (t.subImageHeight = 84);
                  break;
                case "IPAD":
                  (t.width = 768),
                    (t.height = 313),
                    (t.subImageWidth = 112),
                    (t.subImageHeight = 191);
                  break;
                case "IPAD_PRO":
                  (t.width = 1024),
                    (t.height = 378),
                    (t.subImageWidth = 125),
                    (t.subImageHeight = 201);
                  break;
                case "ANDROID":
                  e.isNumberKeyboard()
                    ? ((t.width = 360),
                      (t.height = 207),
                      (t.subImageWidth = 63),
                      (t.subImageHeight = 46))
                    : ((t.width = 360),
                      (t.height = 207),
                      (t.subImageWidth = 45),
                      (t.subImageHeight = 46));
                  break;
                default:
                  (t.width = 0), (t.height = 0);
              }
            }),
            (t.prototype.getMainImageUrl = function(t, e) {
              var r = this.getKeyboardType(t, e);
              if ("ANDROID" === e)
                return this.imageUrlBase + "/" + e + "-" + r + ".png";
              var n = t.keyboardLook;
              return this.imageUrlBase + "/" + e + "-" + r + "-" + n + ".png";
            }),
            (t.prototype.getSubImageUrl = function(t, e) {
              var r = "DONE";
              switch (t.returnKeyType) {
                case "GO":
                case "NEXT":
                case "SEARCH":
                case "SEND":
                  r = t.returnKeyType;
              }
              var n = this.getKeyboardType(t, e);
              return "ANDROID" === e
                ? this.imageUrlBase + "/" + e + "-SUB-" + n + "-" + r + ".png"
                : "NUMBER" === n
                  ? null
                  : "NEXT" === t.returnKeyType
                    ? this.imageUrlBase +
                      "/" +
                      e +
                      "-SUB-" +
                      r +
                      "-" +
                      t.keyboardLook +
                      ".png"
                    : this.imageUrlBase + "/" + e + "-SUB-" + r + ".png";
            }),
            (t.prototype.getKeyboardType = function(t, e) {
              return t.isNumberKeyboard() && "IPAD_PRO" != e
                ? "NUMBER"
                : "TEXT";
            }),
            (t.prototype.normalizeDeviceId = function(t) {
              switch (t) {
                case "IPHONE_7":
                case "IPHONE_8":
                  return "IPHONE_8";
                case "IPHONE_7PLUS":
                case "IPHONE_8PLUS":
                  return "IPHONE_8PLUS";
                case "IPHONE_X":
                case "IPHONE_SE":
                case "IPAD":
                case "IPAD_PRO":
                  return t;
                case "GALAXY_S7":
                case "GALAXY_S8":
                case "GALAXY_NOTE5":
                case "GOOGLE_PIXEL":
                case "GOOGLE_PIXEL2":
                case "NEXUS_6P":
                  return "ANDROID";
                default:
                  return null;
              }
            }),
            t
          );
        })();
        e.DefaultKeyboardProvider = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(56),
          i = r(21),
          o = r(81),
          s = r(45),
          a = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
          u = (function() {
            function t(e) {
              (this.deviceWidth = e.w.curVal()),
                (this.deviceHeight = e.h.curVal()),
                (this.container = new i.ContainerLayer(t.KEYBOARD_LAYER_ID, e)),
                this.container.w.setInitial(this.deviceWidth),
                this.container.h.setInitial(0),
                this.container.x.setInitial(0),
                this.container.y.setInitial(this.deviceHeight),
                this.container.fillOpacity.setInitial(0),
                this.container.addTouchTrigger(
                  new o.TouchDownTrigger(
                    "_KEYBOARD_TOUCH_DOWN_",
                    this.container,
                    new s.OneTimeResponseList()
                  )
                ),
                (this.mainImage = new n.ImageLayer(
                  "_KEYBOARD_MAIN_",
                  this.container
                )),
                (this.mainImage.src = a),
                this.mainImage.h.setInitial(0),
                this.mainImage.x.setInitial(0),
                this.mainImage.w.setInitial(this.deviceWidth),
                this.mainImage.w.setInitial(this.deviceWidth),
                this.mainImage.y.setInitial(0),
                this.container.addChildLayer(this.mainImage),
                (this.subImage = new n.ImageLayer(
                  "_KEYBOARD_SUB_",
                  this.container
                )),
                (this.subImage.src = a),
                (this.subImage.origin.x = 1),
                (this.subImage.origin.y = 1),
                this.subImage.w.setInitial(0),
                this.subImage.h.setInitial(0),
                this.subImage.x.setInitial(this.deviceWidth),
                this.subImage.y.setInitial(0),
                this.container.addChildLayer(this.subImage);
            }
            return (
              (t.prototype.update = function(t) {
                var e = this.deviceWidth / t.width;
                (this.mainImage.src = t.imageUrl),
                  this.container.y.setImmediate(this.deviceHeight),
                  this.container.h.setImmediate(Math.round(t.height * e)),
                  this.mainImage.h.setImmediate(this.container.h.curVal()),
                  t.subImageUrl
                    ? ((this.subImage.src = t.subImageUrl),
                      this.subImage.w.setImmediate(
                        Math.round(t.subImageWidth * e)
                      ),
                      this.subImage.h.setImmediate(
                        Math.round(t.subImageHeight * e)
                      ),
                      this.subImage.y.setImmediate(this.container.h.curVal()))
                    : (this.subImage.w.setImmediate(0),
                      this.subImage.h.setImmediate(0));
              }),
              (t.KEYBOARD_LAYER_ID = "_KEYBOARD_CONTAINER_"),
              t
            );
          })();
        e.PPSoftKeyboard = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = r(4),
          s = r(26);
        !(function(t) {
          (t[(t.NONE = 0)] = "NONE"), (t[(t.FIRED = 1)] = "FIRED");
        })(i || (i = {}));
        var a = (function(t) {
          function e(e, r, n) {
            var o = t.call(this, e, r, n) || this;
            return (o.fingerCount = 1), (o.state = i.NONE), o;
          }
          return (
            n(e, t),
            (e.prototype.onTouchEvent = function(t) {
              t.lastAction == o.TouchEventAction.DOWN
                ? this.state == i.NONE &&
                  t.getTouchCount() >= this.fingerCount &&
                  (this.runResponses(t.lastActionTime), (this.state = i.FIRED))
                : t.lastAction == o.TouchEventAction.UP &&
                  0 == t.getTouchCount() &&
                  (this.state = i.NONE);
            }),
            (e.prototype.reset = function() {
              this.state = i.NONE;
            }),
            (e.prototype.getTouchEventUsageType = function() {
              return o.TouchEventUsageType.TAP;
            }),
            e
          );
        })(s.OneTimeTouchTrigger);
        e.TouchDownTrigger = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(19),
          i = r(0),
          o = (function() {
            function t(t, e, r) {
              (this.change = new n.NumberChange()),
                (this.layer = t),
                (this.axis = e),
                (this.overScrollRatio = r),
                this.axis == i.Axis2D.X
                  ? (this.scrollProp = this.layer.sX)
                  : this.axis == i.Axis2D.Y &&
                    (this.scrollProp = this.layer.sY);
            }
            return (
              (t.prototype.getScrollProp = function() {
                return this.scrollProp;
              }),
              (t.prototype.getScrollOffset = function() {
                return this.scrollOffset;
              }),
              (t.prototype.getScrollMax = function() {
                return this.scrollMax;
              }),
              (t.prototype.getContentSize = function() {
                return this.contentSize;
              }),
              (t.prototype.getContainerSize = function() {
                return this.containerSize;
              }),
              (t.prototype.start = function(e) {
                this.currentSessionId && this.end(e),
                  (this.currentSessionId = ++t.lastSessionId);
                var r = this.layer.getChildrenRect();
                return (
                  (this.contentSize =
                    r.position.getValue(this.axis) +
                    r.size.getValue(this.axis)),
                  (this.containerSize = this.layer.getSize(this.axis).curVal()),
                  (this.scrollMax = Math.max(
                    this.contentSize - this.containerSize,
                    0
                  )),
                  (this.scrollOffset = this.scrollProp.curVal()),
                  (this.startScrollOffset = this.scrollOffset),
                  (this.startTouchOffset = this.scrollOffsetToTouchOffset(
                    this.startScrollOffset
                  )),
                  (this.change.increment = 0),
                  this.scrollProp.startContinuousChange(this.change, e),
                  this.currentSessionId
                );
              }),
              (t.prototype.scrollBy = function(t, e) {
                e == this.currentSessionId &&
                  ((this.scrollOffset = this.touchOffsetToScrollOffset(
                    this.startTouchOffset + t
                  )),
                  this.applyScrollOffsetToChange());
              }),
              (t.prototype.scrollByWheel = function(t, e) {
                e == this.currentSessionId &&
                  ((this.scrollOffset = Math.min(
                    Math.max(this.scrollOffset + t, 0),
                    this.scrollMax
                  )),
                  this.applyScrollOffsetToChange());
              }),
              (t.prototype.end = function(t) {
                this.scrollProp.endContinuousChange(this.change),
                  (this.currentSessionId = null);
              }),
              (t.prototype.applyScrollOffsetToChange = function() {
                this.change.increment =
                  this.scrollOffset - this.startScrollOffset;
              }),
              (t.prototype.scrollOffsetToTouchOffset = function(t) {
                return t < 0
                  ? t / this.overScrollRatio
                  : t > this.scrollMax
                    ? this.scrollMax +
                      (t - this.scrollMax) / this.overScrollRatio
                    : t;
              }),
              (t.prototype.touchOffsetToScrollOffset = function(t) {
                return t < 0
                  ? t * this.overScrollRatio
                  : t > this.scrollMax
                    ? this.scrollMax +
                      (t - this.scrollMax) * this.overScrollRatio
                    : t;
              }),
              (t.lastSessionId = 0),
              t
            );
          })();
        e.PPScroller = o;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            return t.call(this, e, r) || this;
          }
          return n(e, t), e;
        })(r(33).ShapeLayer);
        e.OvalLayer = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(22),
          i = r(23),
          o = (function() {
            function t() {
              (this.map = {}),
                (this.variables = []),
                this.registerVariable(
                  new n.PPStringVar("$deviceOS", "Browser")
                ),
                (this.mouseX = new i.PPNumberVar("$mouseX", 0)),
                (this.mouseY = new i.PPNumberVar("$mouseY", 0)),
                (this.touchX = new i.PPNumberVar("$touchX", 0)),
                (this.touchY = new i.PPNumberVar("$touchY", 0)),
                (this.touchVelocityX = new i.PPNumberVar("$touchVelocityX", 0)),
                (this.touchVelocityY = new i.PPNumberVar("$touchVelocityY", 0)),
                (this.touchVelocity = new i.PPNumberVar("$touchVelocity", 0)),
                (this.touchPointerCount = new i.PPNumberVar(
                  "$touchPointerCount",
                  0
                )),
                (this.keyboardHeight = new i.PPNumberVar("$keyboardHeight", 0)),
                this.registerVariable(this.mouseX),
                this.registerVariable(this.mouseY),
                this.registerVariable(this.touchX),
                this.registerVariable(this.touchY),
                this.registerVariable(this.touchVelocityX),
                this.registerVariable(this.touchVelocityY),
                this.registerVariable(this.touchVelocity),
                this.registerVariable(this.touchPointerCount),
                this.registerVariable(this.keyboardHeight);
            }
            return (
              (t.prototype.getVariable = function(t) {
                return this.map[t];
              }),
              (t.prototype.getVariables = function() {
                return this.variables;
              }),
              (t.prototype.registerVariable = function(t) {
                (this.map[t.name] = t), this.variables.push(t);
              }),
              t
            );
          })();
        e.PPPseudoVarTable = o;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(86),
          o = r(1),
          s = r(87),
          a = r(11),
          u = r(12),
          c = r(128),
          l = [o.PPExprDataType.NUMBER],
          h = [o.PPExprDataType.STRING],
          p = [o.PPExprDataType.COLOR],
          f = [o.PPExprDataType.NUMBER, o.PPExprDataType.NUMBER],
          d = [o.PPExprDataType.NUMBER, o.PPExprDataType.STRING],
          y = [o.PPExprDataType.STRING, o.PPExprDataType.NUMBER],
          g = [o.PPExprDataType.STRING, o.PPExprDataType.STRING],
          v = [
            o.PPExprDataType.NUMBER,
            o.PPExprDataType.NUMBER,
            o.PPExprDataType.NUMBER
          ],
          m = [
            o.PPExprDataType.STRING,
            o.PPExprDataType.STRING,
            o.PPExprDataType.STRING
          ],
          E = (function() {
            function t() {}
            return (
              (t.createRegistry = function(e) {
                var r = new i.PPExprFunctionRegistry();
                return t.registerFunctions(r, e), r;
              }),
              (t.registerFunctions = function(t, e) {
                this.registerUnaryOperations(t),
                  this.registerBinaryOperations(t),
                  this.registerTypeConversionFunctions(t),
                  this.registerStringOperations(t),
                  this.registerMathOperations(t),
                  this.registerColorOperations(t),
                  this.registerPropertyOperations(t, e);
              }),
              (t.registerUnaryOperations = function(t) {
                t.registerFunction("-", l, new P());
              }),
              (t.registerBinaryOperations = function(t) {
                var e = new C("concat", function(t, e) {
                  return t + e;
                });
                t.registerFunction("+", g, e);
                var r = new b("+", function(t, e) {
                  return t + e;
                });
                t.registerFunction("+", f, r);
                var n = new b("-", function(t, e) {
                  return t - e;
                });
                t.registerFunction("-", f, n);
                var i = new b("*", function(t, e) {
                  return t * e;
                });
                t.registerFunction("*", f, i);
                var o = new b("/", function(t, e) {
                  return t / e;
                });
                t.registerFunction("/", f, o);
                var s = new b("%", function(t, e) {
                  return t % e;
                });
                t.registerFunction("%", f, s);
              }),
              (t.registerTypeConversionFunctions = function(t) {
                var e = new x("text", function(t) {
                  return u.PPExprUtils.numberToString(t);
                });
                t.registerFunction("text", l, e);
                var r = new w("number", function(t) {
                  return u.PPExprUtils.stringToNumber(t);
                });
                t.registerFunction("number", h, r);
                var n = new I("color", function(t) {
                  return u.PPExprUtils.stringToColor(t);
                });
                t.registerFunction("color", h, n);
                var i = new S("format", function(t, e) {
                  var r = c.PPNumberFormat.parse(e);
                  return r ? r.format(t) : null;
                });
                t.registerFunction("format", d, i);
              }),
              (t.registerStringOperations = function(t) {
                var e = new w("length", function(t) {
                  return t.length;
                });
                t.registerFunction("length", h, e);
                var r = new N("left", function(t, e) {
                  return t.substr(
                    0,
                    Math.min(Math.max(Math.round(e), 0), t.length)
                  );
                });
                t.registerFunction("left", y, r);
                var n = new N("right", function(t, e) {
                  return t.substring(
                    Math.min(Math.max(t.length - Math.round(e), 0), t.length)
                  );
                });
                t.registerFunction("right", y, n);
                var i = new C("concat", function(t, e) {
                  return t + e;
                });
                t.registerFunction("concat", g, i);
                var o = new L("replace", function(t, e, r) {
                  return "" == e ? t : t.split(e).join(r);
                });
                t.registerFunction("replace", m, o);
                var s = new A("trim", function(t) {
                  return t.trim();
                });
                t.registerFunction("trim", h, s);
                var a = new A("ltrim", function(t) {
                  return t.replace(/^\s+/, "");
                });
                t.registerFunction("ltrim", h, a);
                var u = new A("rtrim", function(t) {
                  return t.replace(/\s+$/, "");
                });
                t.registerFunction("rtrim", h, u);
                var c = new O("indexOf", function(t, e) {
                  return t.indexOf(e);
                });
                t.registerFunction("indexOf", g, c);
                var l = new A("upperCase", function(t) {
                  return t.toUpperCase();
                });
                t.registerFunction("upperCase", h, l);
                var p = new A("lowerCase", function(t) {
                  return t.toLowerCase();
                });
                t.registerFunction("lowerCase", h, p);
              }),
              (t.registerMathOperations = function(t) {
                var e = new b("max", function(t, e) {
                  return Math.max(t, e);
                });
                t.registerFunction("max", f, e);
                var r = new b("min", function(t, e) {
                  return Math.min(t, e);
                });
                t.registerFunction("min", f, r);
                var n = new _("abs", function(t) {
                  return Math.abs(t);
                });
                t.registerFunction("abs", l, n);
                var i = new _("round", function(t) {
                  return Math.round(t);
                });
                t.registerFunction("round", l, i);
                var o = new _("floor", function(t) {
                  return Math.floor(t);
                });
                t.registerFunction("floor", l, o);
                var s = new _("ceil", function(t) {
                  return Math.ceil(t);
                });
                t.registerFunction("ceil", l, s);
                var a = new _("sqrt", function(t) {
                  return t >= 0 ? Math.sqrt(t) : null;
                });
                t.registerFunction("sqrt", l, a);
                var u = new b("pow", function(t, e) {
                  var r = Math.pow(t, e);
                  return isFinite(r) ? r : null;
                });
                t.registerFunction("pow", f, u);
                var c = new T("random", function() {
                  return Math.random();
                });
                t.registerFunction("random", [], c);
                var h = new b("random", function(t, e) {
                  return t + Math.random() * (e - t);
                });
                t.registerFunction("random", f, h);
                var p = new b("randomInt", function(t, e) {
                  return Math.round(
                    Math.floor(Math.random() * (e - t + 1)) + t
                  );
                });
                t.registerFunction("randomInt", f, p);
                var d = new _("sin", function(t) {
                  return Math.sin(t);
                });
                t.registerFunction("sin", l, d);
                var y = new _("cos", function(t) {
                  return Math.cos(t);
                });
                t.registerFunction("cos", l, y);
                var g = new _("tan", function(t) {
                  return Math.tan(t);
                });
                t.registerFunction("tan", l, g);
                var v = new _("asin", function(t) {
                  return Math.asin(t);
                });
                t.registerFunction("asin", l, v);
                var m = new _("acos", function(t) {
                  return Math.acos(t);
                });
                t.registerFunction("acos", l, m);
                var E = new _("atan", function(t) {
                  return Math.atan(t);
                });
                t.registerFunction("atan", l, E);
              }),
              (t.registerColorOperations = function(t) {
                var e = new M("color", function(t, e, r) {
                  return new a.PPColor(t, e, r);
                });
                t.registerFunction("color", v, e);
                var r = new R("red", function(t) {
                  return t.r;
                });
                t.registerFunction("red", p, r);
                var n = new R("green", function(t) {
                  return t.g;
                });
                t.registerFunction("green", p, n);
                var i = new R("blue", function(t) {
                  return t.b;
                });
                t.registerFunction("blue", p, i);
              }),
              (t.registerPropertyOperations = function(t, e) {
                t.registerFunction(
                  "layer",
                  h,
                  new D("layer", e, function(t, e) {
                    return t.findLayerByName(e);
                  })
                );
              }),
              t
            );
          })();
        e.PPFunctions = E;
        var P = (function(t) {
            function e() {
              return t.call(this, "-", [o.PPExprDataType.NUMBER]) || this;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return -t[0];
              }),
              e
            );
          })(s.PPNumberFunction),
          T = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, []) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func();
              }),
              e
            );
          })(s.PPNumberFunction),
          _ = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, [o.PPExprDataType.NUMBER]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0]);
              }),
              e
            );
          })(s.PPNumberFunction),
          b = (function(t) {
            function e(e, r) {
              var n =
                t.call(this, e, [
                  o.PPExprDataType.NUMBER,
                  o.PPExprDataType.NUMBER
                ]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0], t[1]);
              }),
              e
            );
          })(s.PPNumberFunction),
          O = (function(t) {
            function e(e, r) {
              var n =
                t.call(this, e, [
                  o.PPExprDataType.STRING,
                  o.PPExprDataType.STRING
                ]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0], t[1]);
              }),
              e
            );
          })(s.PPNumberFunction),
          w = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, [o.PPExprDataType.STRING]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0]);
              }),
              e
            );
          })(s.PPNumberFunction),
          R = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, [o.PPExprDataType.COLOR]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0]);
              }),
              e
            );
          })(s.PPNumberFunction),
          x = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, [o.PPExprDataType.STRING]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0]);
              }),
              e
            );
          })(s.PPStringFunction),
          A = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, [o.PPExprDataType.STRING]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0]);
              }),
              e
            );
          })(s.PPStringFunction),
          S = (function(t) {
            function e(e, r) {
              var n =
                t.call(this, e, [
                  o.PPExprDataType.NUMBER,
                  o.PPExprDataType.STRING
                ]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0], t[1]);
              }),
              e
            );
          })(s.PPStringFunction),
          N = (function(t) {
            function e(e, r) {
              var n =
                t.call(this, e, [
                  o.PPExprDataType.STRING,
                  o.PPExprDataType.NUMBER
                ]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0], t[1]);
              }),
              e
            );
          })(s.PPStringFunction),
          C = (function(t) {
            function e(e, r) {
              var n =
                t.call(this, e, [
                  o.PPExprDataType.STRING,
                  o.PPExprDataType.STRING
                ]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0], t[1]);
              }),
              e
            );
          })(s.PPStringFunction),
          L = (function(t) {
            function e(e, r) {
              var n =
                t.call(this, e, [
                  o.PPExprDataType.STRING,
                  o.PPExprDataType.STRING,
                  o.PPExprDataType.STRING
                ]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0], t[1], t[2]);
              }),
              e
            );
          })(s.PPStringFunction),
          I = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, [o.PPExprDataType.STRING]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0]);
              }),
              e
            );
          })(s.PPColorFunction),
          M = (function(t) {
            function e(e, r) {
              var n =
                t.call(this, e, [
                  o.PPExprDataType.NUMBER,
                  o.PPExprDataType.NUMBER,
                  o.PPExprDataType.NUMBER
                ]) || this;
              return (n.func = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(t[0], t[1], t[2]);
              }),
              e
            );
          })(s.PPColorFunction),
          D = (function(t) {
            function e(e, r, n) {
              var i = t.call(this, e, [o.PPExprDataType.STRING]) || this;
              return (i.layerRefReader = r), (i.func = n), i;
            }
            return (
              n(e, t),
              (e.prototype.evaluate = function(t) {
                return this.func(this.layerRefReader, t[0]);
              }),
              e
            );
          })(s.PPLayerFunction);
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(1),
          i = r(14),
          o = (function() {
            function t() {
              (this.map = {}), (this.signatures = []), (this.functions = []);
            }
            return (
              (t.prototype.registerFunction = function(t, e, r) {
                var n = new a(t, e, r);
                (this.map[this.signatureToKeyString(t, e)] = n),
                  this.functions.push(n),
                  i.StringUtils.isAlpha(t[0]) &&
                    this.signatures.push(n.toSignature());
              }),
              (t.prototype.getFunction = function(t, e, r) {
                var n = this.map[this.signatureToKeyString(t, e)];
                if (n) return n.func;
                for (var i = 0, o = this.functions; i < o.length; i++) {
                  var s = o[i];
                  if (s.name == t && s.func.acceptsArgs(e, r)) return s.func;
                }
                return null;
              }),
              (t.prototype.getFunctionSignatures = function() {
                return this.signatures;
              }),
              (t.prototype.hasFunctionWithName = function(t) {
                for (var e = 0, r = this.functions; e < r.length; e++)
                  if (r[e].name == t) return !0;
                return !1;
              }),
              (t.prototype.signatureToKeyString = function(t, e) {
                return (
                  t +
                  "(" +
                  e
                    .map(function(t) {
                      return "" + t;
                    })
                    .join(",") +
                  ")"
                );
              }),
              t
            );
          })();
        e.PPExprFunctionRegistry = o;
        var s = (function() {
          return function(t, e, r) {
            (this.name = t), (this.returnType = e), (this.argumentsTypes = r);
          };
        })();
        e.PPFunctionSignature = s;
        var a = (function() {
          function t(t, e, r) {
            (this.name = t), (this.argsTypes = e), (this.func = r);
          }
          return (
            (t.prototype.toSignature = function() {
              return new s(
                this.name,
                n.dataTypeToString(this.func.getReturnType()),
                this.argsTypes.map(function(t) {
                  return n.dataTypeToString(t);
                })
              );
            }),
            t
          );
        })();
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = (function() {
            function t(t, e, r) {
              (this.name = t), (this.argTypes = e), (this.returnType = r);
            }
            return (
              (t.prototype.getReturnType = function() {
                return this.returnType;
              }),
              (t.prototype.acceptsArgs = function(t, e) {
                if (
                  (void 0 === e && (e = !1), t.length != this.argTypes.length)
                )
                  return !1;
                for (var r = 0; r < t.length; r++) {
                  var n = t[r],
                    i = this.argTypes[r];
                  if (!this.isCompatibleType(n, i, e)) return !1;
                }
                return !0;
              }),
              (t.prototype.evaluateArguments = function(t) {
                if (t.length < this.argTypes.length) return null;
                for (var e = [], r = 0; r < this.argTypes.length; r++)
                  switch (this.argTypes[r]) {
                    case i.PPExprDataType.NUMBER:
                      e.push(t[r].evalAsNumber());
                      break;
                    case i.PPExprDataType.STRING:
                      e.push(t[r].evalAsString());
                      break;
                    case i.PPExprDataType.COLOR:
                      e.push(t[r].evalAsColor());
                      break;
                    case i.PPExprDataType.LAYER:
                      e.push(t[r].evalAsLayer());
                      break;
                    default:
                      e.push(null);
                  }
                return e;
              }),
              (t.prototype.isCompatibleType = function(t, e, r) {
                if (null == t) return r;
                if (t == e) return !0;
                switch (e) {
                  case i.PPExprDataType.NUMBER:
                    return t == i.PPExprDataType.STRING;
                  case i.PPExprDataType.STRING:
                    return (
                      t == i.PPExprDataType.NUMBER ||
                      t == i.PPExprDataType.COLOR
                    );
                  case i.PPExprDataType.COLOR:
                    return t == i.PPExprDataType.STRING;
                }
                return !1;
              }),
              t
            );
          })();
        e.PPFunction = o;
        var s = (function(t) {
          function e(e, r) {
            return t.call(this, e, r, i.PPExprDataType.NUMBER) || this;
          }
          return n(e, t), e;
        })(o);
        e.PPNumberFunction = s;
        var a = (function(t) {
          function e(e, r) {
            return t.call(this, e, r, i.PPExprDataType.STRING) || this;
          }
          return n(e, t), e;
        })(o);
        e.PPStringFunction = a;
        var u = (function(t) {
          function e(e, r) {
            return t.call(this, e, r, i.PPExprDataType.COLOR) || this;
          }
          return n(e, t), e;
        })(o);
        e.PPColorFunction = u;
        var c = (function(t) {
          function e(e, r) {
            return t.call(this, e, r, i.PPExprDataType.LAYER) || this;
          }
          return n(e, t), e;
        })(o);
        e.PPLayerFunction = c;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(12),
          s = r(8),
          a = (function(t) {
            function e(e, r) {
              var n = t.call(this, i.PPExprDataType.STRING, e) || this;
              return (
                (n.stringValue = r),
                (n.numberValue = o.PPExprUtils.stringToNumber(r)),
                (n.colorValue = o.PPExprUtils.stringToColor(r)),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                return (
                  null === this.numberValue &&
                    this.reportError(
                      s.PPExprEvalError.castingStringToNumber(this.stringValue)
                    ),
                  this.numberValue
                );
              }),
              (e.prototype.evalAsString = function() {
                return this.stringValue;
              }),
              (e.prototype.evalAsColor = function() {
                return (
                  null === this.colorValue &&
                    this.reportError(
                      s.PPExprEvalError.castingStringToColor(this.stringValue)
                    ),
                  this.colorValue
                );
              }),
              e
            );
          })(i.PPExpr);
        e.StringConstantExpr = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(8),
          s = (function(t) {
            function e(e, r) {
              void 0 === r && (r = null);
              var n = t.call(this, i.PPExprDataType.COLOR, r) || this;
              return (n.colorValue = e), n;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                return (
                  this.reportError(o.PPExprEvalError.castingColorToNumber()),
                  null
                );
              }),
              (e.prototype.evalAsString = function() {
                return this.colorValue.toHex();
              }),
              (e.prototype.evalAsColor = function() {
                return this.colorValue;
              }),
              e
            );
          })(i.PPExpr);
        e.ColorConstantExpr = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(23),
          s = r(22),
          a = r(12),
          u = r(34),
          c = r(8),
          l = (function(t) {
            function e(e, r) {
              var n = t.call(this, e.getDataType(), r) || this;
              return (n.variable = e), n;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                if (this.variable instanceof o.PPNumberVar)
                  return this.variable.getValue();
                if (this.variable instanceof s.PPStringVar) {
                  var t = this.variable.getValue(),
                    e = a.PPExprUtils.stringToNumber(t);
                  return (
                    null === e &&
                      this.reportError(
                        c.PPExprEvalError.castingStringToNumber(t)
                      ),
                    e
                  );
                }
                return (
                  this.reportError(c.PPExprEvalError.castingColorToNumber()),
                  null
                );
              }),
              (e.prototype.evalAsString = function() {
                return this.variable instanceof s.PPStringVar
                  ? this.variable.getValue()
                  : this.variable instanceof o.PPNumberVar
                    ? a.PPExprUtils.numberToString(this.variable.getValue())
                    : this.variable instanceof u.PPColorVar
                      ? this.variable.getValue().toHex()
                      : (this.reportError(c.PPExprEvalError.unexpected()),
                        null);
              }),
              (e.prototype.evalAsColor = function() {
                if (this.variable instanceof u.PPColorVar)
                  return this.variable.getValue();
                if (this.variable instanceof s.PPStringVar) {
                  var t = this.variable.getValue(),
                    e = a.PPExprUtils.stringToColor(t);
                  return (
                    null === e &&
                      this.reportError(
                        c.PPExprEvalError.castingStringToColor(t)
                      ),
                    e
                  );
                }
                return (
                  this.reportError(c.PPExprEvalError.castingNumberToColor()),
                  null
                );
              }),
              e
            );
          })(i.PPExpr);
        e.PPVarExpr = l;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r) {
            (this.duration = 0), (this.values = []);
            for (var n = 0; !t.isFinished(); ) {
              if (((this.duration += e), n >= r)) {
                this.values.push(1);
                break;
              }
              this.values.push(t.getNext(e)), n++;
            }
          }
          return (
            (t.prototype.computeValueProgress = function(t) {
              var e = Math.min(
                Math.round(t * this.values.length) - 1,
                this.values.length - 1
              );
              return e < 0 ? 0 : this.values[e];
            }),
            (t.prototype.getDuration = function() {
              return this.duration;
            }),
            t
          );
        })();
        e.PopulatingEasingFunc = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(4),
          o = r(93),
          s = (function(t) {
            function e(e, r, n) {
              var i = t.call(this, e, r, n) || this;
              return (
                (i.fingerCount = 1),
                (i.tapDetector = new o.TapDetector()),
                (i.tapDetector.listener = i),
                i
              );
            }
            return (
              n(e, t),
              (e.prototype.getFingerCount = function() {
                return this.fingerCount;
              }),
              (e.prototype.setFingerCount = function(t) {
                (this.fingerCount = t),
                  (this.tapDetector.requiredFingerCount = t);
              }),
              (e.prototype.onTouchEvent = function(t) {
                this.tapDetector.onTouchEvent(t);
              }),
              (e.prototype.onTap = function(t) {
                this.runResponses(t);
              }),
              (e.prototype.reset = function() {}),
              (e.prototype.getTouchEventUsageType = function() {
                return i.TouchEventUsageType.TAP;
              }),
              e
            );
          })(r(26).OneTimeTouchTrigger);
        e.TapTrigger = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n,
          i = r(4),
          o = r(2);
        !(function(t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.ALL_DOWN = 1)] = "ALL_DOWN"),
            (t[(t.RELEASING = 2)] = "RELEASING");
        })(n || (n = {}));
        var s = (function() {
          function t() {
            (this.requiredFingerCount = 1),
              (this.downPoint = new o.Point(0, 0));
          }
          return (
            (t.prototype.onTouchEvent = function(t) {
              if (t.lastAction == i.TouchEventAction.DOWN)
                t.getTouchCount() == this.requiredFingerCount
                  ? ((this.state = n.ALL_DOWN),
                    this.downPoint.copyFrom(t.focus))
                  : (this.state = n.NONE),
                  this.downPoint.copyFrom(t.focus);
              else if (t.lastAction == i.TouchEventAction.MOVE) {
                if (this.state == n.ALL_DOWN || this.state == n.RELEASING) {
                  var e = t.focus.x - this.downPoint.x,
                    r = t.focus.y - this.downPoint.y;
                  e * e + r * r > 400 && (this.state = n.NONE);
                }
              } else
                t.lastAction == i.TouchEventAction.UP &&
                  (this.state == n.ALL_DOWN || this.state == n.RELEASING
                    ? 0 == t.getTouchCount()
                      ? (this.listener.onTap(t.lastActionTime),
                        (this.state = n.NONE))
                      : (this.state = n.RELEASING)
                    : (this.state = n.NONE));
            }),
            t
          );
        })();
        e.TapDetector = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (i.layer = e), (i.focus = r), (i.delay = n), i;
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e = this,
                r = {
                  doNotExpire: !1,
                  run: function() {
                    e.layer.requestFocus(e.focus);
                  },
                  shouldStopForLayer: function(t) {
                    return t == this.layer;
                  },
                  shouldStopForVariable: function() {
                    return !1;
                  }
                };
              this.scheduler.scheduleTask(r, t, this.delay);
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.FocusResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, e, r) || this;
            return (i.responses = n), i;
          }
          return (
            n(e, t),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.runResponses = function(t) {
              this.responses.run(t);
            }),
            e
          );
        })(r(77).AbstractMouseTrigger);
        e.AbstractOneTimeMouseTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(23),
          i = r(22),
          o = r(34);
        e.changeDetectorForVariable = function(t) {
          if (t instanceof n.PPNumberVar) return new s(t);
          if (t instanceof i.PPStringVar) return new a(t);
          if (t instanceof o.PPColorVar) return new u(t);
          throw new Error("Unhandled variable type");
        };
        var s = (function() {
          function t(t) {
            (this.numberProvider = t),
              (this.initialValue = t.getNumberValue()),
              (this.lastValue = t.getNumberValue());
          }
          return (
            (t.prototype.reset = function() {
              this.lastValue = this.initialValue;
            }),
            (t.prototype.isChanged = function() {
              var t = this.numberProvider.getNumberValue();
              return t != this.lastValue && ((this.lastValue = t), !0);
            }),
            t
          );
        })();
        e.PPNumberChangeDetector = s;
        var a = (function() {
          function t(t) {
            (this.stringProvider = t),
              (this.initialValue = t.getStringValue()),
              (this.lastValue = t.getStringValue());
          }
          return (
            (t.prototype.reset = function() {
              this.lastValue = this.initialValue;
            }),
            (t.prototype.isChanged = function() {
              var t = this.stringProvider.getStringValue();
              return t != this.lastValue && ((this.lastValue = t), !0);
            }),
            t
          );
        })();
        e.PPStringChangeDetector = a;
        var u = (function() {
          function t(t) {
            (this.colorProvider = t),
              (this.initialValue = t.getColorValue().toHex()),
              (this.lastValue = t.getColorValue().toHex());
          }
          return (
            (t.prototype.reset = function() {
              this.lastValue = this.initialValue;
            }),
            (t.prototype.isChanged = function() {
              var t = this.colorProvider.getColorValue();
              return (
                t.toHex() !== this.lastValue &&
                ((this.lastValue = t.toHex()), !0)
              );
            }),
            t
          );
        })();
        e.PPColorChangeDetector = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(0),
          o = r(6),
          s = r(5),
          a = (function(t) {
            function e(e, r, n, i, o) {
              var s = t.call(this, e, r, n) || this;
              return (
                (s.circularEndValue = null), (s.circleSize = i), (s.dir = o), s
              );
            }
            return (
              n(e, t),
              (e.prototype.clone = function() {
                return new e(
                  this.endValue,
                  this.getDuration(),
                  this.easingFunc,
                  this.circleSize,
                  this.dir
                );
              }),
              (e.prototype.start = function(e, r) {
                return t.prototype.start.call(this, e, r)
                  ? ((this.actualEndValue = s.AngleUtils.normalize(
                      this.actualEndValue
                    )),
                    (this.dir == i.RotateDirection.CW &&
                      this.actualEndValue < e) ||
                    (this.dir == i.RotateDirection.NEAR &&
                      e - this.actualEndValue > this.circleSize / 2)
                      ? (this.circularEndValue =
                          this.actualEndValue + this.circleSize)
                      : (this.dir == i.RotateDirection.CCW &&
                          this.actualEndValue > e) ||
                        (this.dir == i.RotateDirection.NEAR &&
                          this.actualEndValue - e > this.circleSize / 2)
                        ? (this.circularEndValue =
                            this.actualEndValue - this.circleSize)
                        : (this.circularEndValue = this.actualEndValue),
                    !0)
                  : ((this.circularEndValue = null), !1);
              }),
              (e.prototype.getValueAt = function(t) {
                if (null === this.circularEndValue) return null;
                for (
                  var e = this.computeValueAt(
                    this.startValue,
                    this.circularEndValue,
                    t
                  );
                  e > this.circleSize;

                )
                  e -= this.circleSize;
                for (; e < 0; ) e += this.circleSize;
                return e;
              }),
              e
            );
          })(o.EasingSetNumberAnimation);
        e.CircularSetNumberAnimation = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(12),
          s = r(8),
          a = (function(t) {
            function e(e) {
              var r = t.call(this, i.PPExprDataType.NUMBER, e.env) || this;
              return (r.expr = e), r;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                var t = this.expr.evalAsNumber();
                return null !== t ? -t : null;
              }),
              (e.prototype.evalAsString = function() {
                return o.PPExprUtils.numberToString(this.evalAsNumber());
              }),
              (e.prototype.evalAsColor = function() {
                return this.reportError(s.PPExprEvalError.negateColor()), null;
              }),
              e
            );
          })(i.PPExpr);
        e.PPNegateExpr = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(9),
          o = r(20),
          s = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (
                (r.delay = 0),
                (r.textAttributes = new o.PPTextAttributes()),
                (r.layer = e),
                r
              );
            }
            return (
              n(e, t),
              (e.prototype.run = function(t) {
                this.task || (this.task = this.buildTask()),
                  this.scheduler.scheduleTask(
                    this.task,
                    t,
                    this.delay,
                    this.repeatDef
                  );
              }),
              (e.prototype.buildTask = function() {
                var t = this;
                return {
                  doNotExpire: !0,
                  run: function(e, r) {
                    t.expr && (t.textAttributes.text = t.expr.evalAsString()),
                      t.layer.updateTextAttributes(t.textAttributes);
                  },
                  shouldStopForLayer: function(e) {
                    return e.id == t.layer.id;
                  },
                  shouldStopForVariable: function(t) {
                    return !1;
                  }
                };
              }),
              e
            );
          })(i.OneTimeResponse);
        e.TextResponse = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(13),
          i = r(22),
          o = r(23),
          s = r(34),
          a = (function() {
            function t(t) {
              this.globalVarTable = t;
            }
            return (
              (t.prototype.readVariable = function(t) {
                var e = n.readString(t, "evalType", "NORMAL");
                return "NORMAL" === e
                  ? this.readNormalVariable(t)
                  : "LINK" == e
                    ? this.readLinkVariable(t)
                    : this.readNormalVariable(t);
              }),
              (t.prototype.readNormalVariable = function(t) {
                var e,
                  r = n.requireString(t, "name"),
                  a = n.requireString(t, "dataType");
                if ("STRING" === a) {
                  var u = n.requireString(t, "value");
                  e = new i.PPStringVar(r, u);
                } else if ("NUMBER" === a) {
                  u = n.requireNumber(t, "value");
                  e = new o.PPNumberVar(r, u);
                } else {
                  if ("COLOR" !== a)
                    throw new Error("Unexpected dataType: " + a);
                  u = n.requireColor(t, "value");
                  e = new s.PPColorVar(r, u);
                }
                return (
                  (e.x = n.readNumber(t, "x", 0)),
                  (e.y = n.readNumber(t, "y", 0)),
                  (e.visible = n.readBoolean(t, "visible", !1)),
                  e
                );
              }),
              (t.prototype.readLinkVariable = function(t) {
                var e = n.requireString(t, "name"),
                  r = n.requireString(t, "sceneId"),
                  i = n.requireString(t, "linkVarName"),
                  o = this.globalVarTable.getLocalVariable(r, i);
                if (null === o)
                  throw new Error(
                    "Variable not found for link: " + r + "." + i + " " + e
                  );
                var s = o.getLinkedVar(r, e);
                return (
                  (s.x = n.readNumber(t, "x", 0)),
                  (s.y = n.readNumber(t, "y", 0)),
                  (s.visible = n.readBoolean(t, "visible", !1)),
                  s
                );
              }),
              t
            );
          })();
        e.VariableReader = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          return function(t) {
            this.time = t;
          };
        })();
        e.PPMouseEvent = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this, e, r) || this;
            return (n.shapeLayer = e), n;
          }
          return (
            n(e, t),
            (e.prototype.getMaskElementId = function() {
              return this.maskElementId;
            }),
            (e.prototype.createElement = function() {
              var t = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              if (
                ((this.shapeElement = this.createShapeElement()),
                t.appendChild(this.shapeElement),
                this.shapeLayer.isMask)
              ) {
                e.idCounter++,
                  (this.maskElementId =
                    e.idCounter + "-MASK-" + this.shapeLayer.id);
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "defs"
                );
                t.appendChild(r);
                var n = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "clipPath"
                );
                n.setAttribute("id", this.maskElementId),
                  r.appendChild(n),
                  (this.maskElement = this.createMaskElement()),
                  n.appendChild(this.maskElement);
              }
              return t;
            }),
            (e.prototype.updateToElement = function(e) {
              t.prototype.updateToElement.call(this, e);
              var r = this.shapeLayer;
              if (
                (this.shapeElement.setAttribute(
                  "fill",
                  r.fillColor.toString(r.fillOpacity.curVal())
                ),
                this.updateModelToShapeElement(this.shapeElement),
                this.maskElement)
              ) {
                this.updateModelToMaskElement(this.maskElement);
                var n = [];
                if (
                  (0 !== r.r.curVal() &&
                    n.push("rotate(" + r.r.curVal() + "deg)"),
                  (100 === r.scaleX.curVal() && 100 === r.scaleY.curVal()) ||
                    n.push(
                      "scale(" +
                        r.scaleX.curVal() / 100 +
                        "," +
                        r.scaleY.curVal() / 100 +
                        ")"
                    ),
                  n.length > 0)
                ) {
                  var i =
                    "transform-origin: " +
                    100 * r.origin.x +
                    "% " +
                    100 * r.origin.y +
                    "%";
                  (i += "; transform: " + n.join(" ") + ";"),
                    this.maskElement.setAttribute("style", i);
                }
              }
            }),
            (e.idCounter = 0),
            e
          );
        })(r(39).BaseLayerRenderer);
        e.ShapeLayerRenderer = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.createTextElement = function() {
              return (
                (this.textDivElement = document.createElement("div")),
                this.textLayer.autoWrap
                  ? ((this.textDivElement.style.whiteSpace = "pre-wrap"),
                    (this.textDivElement.style.wordBreak = "break-word"),
                    (this.textDivElement.style.width = "100%"))
                  : (this.textDivElement.style.whiteSpace = "nowrap"),
                this.textDivElement
              );
            }),
            (e.prototype.updateText = function(t) {
              this.textDivElement.innerHTML = this.textToHtml(t);
            }),
            (e.prototype.updateToElement = function(e) {
              var r = this;
              t.prototype.updateToElement.call(this, e),
                this.textLayer.autoResize &&
                  (this.textLayer.autoWrap
                    ? setTimeout(function() {
                        r.textDivElement.scrollHeight !=
                          r.textLayer.h.curVal() &&
                          r.textLayer.h.setImmediate(
                            r.textDivElement.scrollHeight
                          );
                      })
                    : setTimeout(function() {
                        r.textDivElement.scrollWidth !=
                          r.textLayer.w.curVal() &&
                          r.textLayer.w.setImmediate(
                            r.textDivElement.scrollWidth
                          );
                      }, 0));
            }),
            (e.prototype.createDecoratorElement = function() {
              return null;
            }),
            (e.prototype.updateDecoratorElement = function(t) {}),
            e
          );
        })(r(104).AbstractTextLayerRenderer);
        e.TextLayerRenderer = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, e, r) || this;
            return (i.textLayer = e), (i.fontProvider = n), i;
          }
          return (
            n(e, t),
            (e.prototype.getTextHeight = function() {
              return this.textElement.scrollHeight;
            }),
            (e.prototype.getRenderElement = function() {
              return this.textElement;
            }),
            (e.prototype.createElement = function() {
              return (
                (this.areaElement = document.createElement("div")),
                (this.areaElement.style.display = "table"),
                (this.areaElement.style.overflow = "hidden"),
                (this.textElement = this.createTextElement()),
                (this.textElement.style.position = "absolute"),
                this.areaElement.appendChild(this.textElement),
                (this.decoratorElement = this.createDecoratorElement()),
                this.decoratorElement &&
                  ((this.decoratorElement.style.position = "absolute"),
                  (this.textElement.style.width = "100%"),
                  this.areaElement.appendChild(this.decoratorElement)),
                this.areaElement
              );
            }),
            (e.prototype.updateToElement = function(e) {
              t.prototype.updateToElement.call(this, e);
              var r = this.textLayer.textAttributes;
              this.updateText(r.text),
                this.applyTextAttributesToElement(
                  r,
                  this.textElement,
                  this.textLayer.textColor.toString(
                    this.textLayer.textOpacity.curVal()
                  )
                ),
                this.decoratorElement &&
                  this.updateDecoratorElement(this.decoratorElement);
            }),
            (e.prototype.textToHtml = function(t) {
              return t
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            }),
            (e.prototype.applyTextAttributesToElement = function(t, e, r) {
              (e.style.fontSize = t.fontSize + "px"),
                (e.style.color = r),
                (e.style.textAlign = t.textAlign),
                (e.style.lineHeight = "" + t.lineHeight),
                null !== t.fillStyle && (e.style.background = t.fillStyle),
                null !== t.borderStyle && (e.style.border = t.borderStyle),
                t.autoSize &&
                  ((this.areaElement.style.overflow = "visible"),
                  (e.style.width = ""),
                  (e.style.height = "")),
                null !== t.paddingStyle && (e.style.padding = t.paddingStyle),
                null !== t.radiusStyle &&
                  (e.style.borderRadius = t.radiusStyle);
              var n = this.fontProvider.getFontStyle(t.font);
              switch (
                (n
                  ? (n.family
                      ? (e.style.fontFamily = '"' + n.family + '"')
                      : (e.style.fontFamily = ""),
                    n.weight
                      ? (e.style.fontWeight = n.weight)
                      : (e.style.fontWeight = ""),
                    n.style
                      ? (e.style.fontStyle = n.style)
                      : (e.style.fontStyle = ""))
                  : ((e.style.fontFamily = ""),
                    (e.style.fontWeight = ""),
                    (e.style.fontStyle = "")),
                t.verticalAlign.toUpperCase())
              ) {
                case "BOTTOM":
                  (e.style.top = null),
                    (e.style.bottom = "0px"),
                    (e.style.transform = null);
                  break;
                case "MIDDLE":
                  (e.style.top = "50%"),
                    (e.style.bottom = null),
                    (e.style.transform = "translateY(-50%)");
                  break;
                default:
                  (e.style.top = "0px"),
                    (e.style.bottom = null),
                    (e.style.transform = null);
              }
            }),
            e
          );
        })(r(39).BaseLayerRenderer);
        e.AbstractTextLayerRenderer = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.once = function(t, e, r) {
              var n = function(i) {
                r(i), t.removeEventListener(e, n);
              };
              t.addEventListener(e, n);
            }),
            t
          );
        })();
        e.EventUtils = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(107);
        e.PPEngine = n.PPEngine;
        var i = r(58);
        e.PPExprParser = i.PPExprParser;
        var o = r(36);
        (e.PPParseNode = o.PPParseNode),
          (e.PPOperatorNode = o.PPOperatorNode),
          (e.PPExprParseNode = o.PPExprParseNode),
          (e.PPNumberLiteralNode = o.PPNumberLiteralNode),
          (e.PPStringLiteralNode = o.PPStringLiteralNode),
          (e.PPColorLiteralNode = o.PPColorLiteralNode),
          (e.PPLayerLiteralNode = o.PPLayerLiteralNode),
          (e.PPVariableNode = o.PPVariableNode),
          (e.PPBinaryOperationNode = o.PPBinaryOperationNode),
          (e.PPUnaryOperationNode = o.PPUnaryOperationNode),
          (e.PPPropertyNode = o.PPPropertyNode),
          (e.PPFunctionNode = o.PPFunctionNode);
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(108),
          i = r(198),
          o = r(200),
          s = r(201),
          a = r(207),
          u = r(49),
          c = r(3),
          l = r(46),
          h = r(21),
          p = r(103),
          f = r(217),
          d = r(79),
          y = r(218),
          g = (function() {
            function t(t, e) {
              void 0 === e && (e = null);
              var r = this;
              (this.frameCount = 0),
                (this.frameDuration = 0),
                (this.transparent = !1),
                (this.sceneHistory = []),
                (this.sceneRenderers = {}),
                (this.stopped = !0),
                (this.pieFrameCount = 0),
                (this.wrapElement = t),
                (this.clock = new o.PPClock()),
                (this.pieReader = new n.PieReader(
                  new d.DefaultKeyboardProvider(e ? e.imageUrlBase : null)
                )),
                (this.touchHandler = new i.SceneTouchHandler(
                  this.wrapElement,
                  this.clock
                )),
                (this.inputFocusManager = new y.InputFocusManager(
                  this.touchHandler
                )),
                (this.boundStep = this.doFrame.bind(this)),
                (this.systemInfo = u.SystemInfo.getInstance()),
                e &&
                  e.fontTestElement &&
                  (this.fontChecker = new f.PPFontChecker(e.fontTestElement)),
                (this.wrapElement.style.webkitUserSelect = "none"),
                (this.wrapElement.style.overflow = "hidden"),
                e &&
                  e.pauseOnHidden &&
                  document.addEventListener("visibilitychange", function() {
                    document.hidden
                      ? (c.Logger.i("Pausing for visibility change"), r.pause())
                      : (c.Logger.i("Resuming for visibility change"),
                        r.resume());
                  }),
                this.registerKeyEvents();
            }
            return (
              (t.prototype.run = function(t, e, r) {
                void 0 === r && (r = null),
                  this.clearAll(),
                  (this.sceneHistory.length = 0);
                var n = new l.PPPieReadResult();
                (this.runningPie = this.pieReader.readPie(t, this.observer, n)),
                  (this.runningResourceProvider = e);
                for (
                  var i = 0, o = this.runningPie.getAllScenes();
                  i < o.length;
                  i++
                ) {
                  var s = o[i];
                  s.reset(),
                    this.transparent && s.rootLayer.fillOpacity.setInitial(0);
                }
                return (
                  this.testFonts(this.runningPie, n),
                  this.fitWrapElementSize(this.runningPie.deviceInfo),
                  this.initSceneRenderers(e, this.runningPie.getFontProvider()),
                  this.startInitialScene(r),
                  n
                );
              }),
              (t.prototype.updateScene = function(t, e) {
                if (!this.runningPie) return !1;
                var r = new l.PPPieReadResult(),
                  n = this.pieReader.readScene(
                    e,
                    this.runningPie.globalVarTable,
                    r
                  );
                if (this.runningPie.updateScene(t, n)) {
                  var i = new a.SceneRenderer(
                    n,
                    this.runningResourceProvider,
                    this.runningPie.getFontProvider(),
                    this.clock,
                    this.inputFocusManager
                  );
                  return (
                    (this.sceneRenderers[n.id] = i),
                    this.stopScene(),
                    this.runningSceneRenderer.detachFromParent(),
                    i.attachTo(this.wrapElement),
                    this.startScene(n, i, !0),
                    !0
                  );
                }
                return !1;
              }),
              (t.prototype.setTouchHintEnabled = function(t) {
                this.touchHandler.hintEnabled = t;
              }),
              (t.prototype.getCurrentSceneId = function() {
                return this.runningScene ? this.runningScene.id : null;
              }),
              (t.prototype.getLayerProperty = function(t, e) {
                var r = this.findLayer(t);
                if (r) {
                  if ("bottom" == e) return r.y.curVal() + r.h.curVal();
                  if ("right" == e) return r.x.curVal() + r.w.curVal();
                  var n = r.getNumberPropertyByName(e);
                  if (n) return n.curVal();
                }
                return null;
              }),
              (t.prototype.getLayerElement = function(t) {
                if (!this.runningSceneRenderer) return null;
                var e = this.runningSceneRenderer.getLayerRenderer(t);
                return e ? e.getElement() : null;
              }),
              (t.prototype.setLayerProperty = function(t, e, r) {
                var n = this.findLayer(t);
                if (n) {
                  var i = n.getNumberPropertyByName(e);
                  i && i.setImmediate(r);
                }
              }),
              (t.prototype.getTextLayerHeight = function(t) {
                var e = this.findLayer(t);
                if (e) {
                  var r = this.runningSceneRenderer.getLayerRenderer(e.id);
                  if (r && r instanceof p.TextLayerRenderer)
                    return r.getTextHeight();
                }
                return 0;
              }),
              (t.prototype.getTextLayerElement = function(t) {
                var e = this.findLayer(t);
                if (e) {
                  var r = this.runningSceneRenderer.getLayerRenderer(e.id);
                  if (r && r instanceof p.TextLayerRenderer)
                    return r.getRenderElement();
                }
                return null;
              }),
              (t.prototype.setDeviceSize = function(t, e) {
                if (
                  this.runningPie &&
                  (t || (t = this.runningPie.deviceInfo.width),
                  e || (e = this.runningPie.deviceInfo.height),
                  t != this.runningPie.deviceInfo.width ||
                    e != this.runningPie.deviceInfo.height)
                ) {
                  (this.runningPie.deviceInfo.width = t),
                    (this.runningPie.deviceInfo.height = e);
                  for (
                    var r = 0, n = this.runningPie.getAllScenes();
                    r < n.length;
                    r++
                  ) {
                    var i = n[r];
                    i.rootLayer.w.setImmediate(t),
                      i.rootLayer.h.setImmediate(e);
                  }
                  this.fitWrapElementSize(this.runningPie.deviceInfo);
                }
              }),
              (t.prototype.getChildrenIds = function(t) {
                var e = [],
                  r = this.findLayer(t);
                if (r && r instanceof h.ContainerLayer)
                  for (var n = 0, i = r.children; n < i.length; n++) {
                    var o = i[n];
                    e.push(o.id);
                  }
                return e;
              }),
              (t.prototype.updateCanvasPosition = function() {
                this.touchHandler.updateCanvasPosition();
              }),
              (t.prototype.stop = function() {
                (this.stopped = !0), this.clearAll();
              }),
              (t.prototype.pause = function() {
                (this.stopped = !0),
                  this.clock.pause(),
                  this.runningSceneRenderer &&
                    this.runningSceneRenderer.updateClockScale(0);
              }),
              (t.prototype.resume = function() {
                (this.stopped = !1),
                  this.clock.resume(),
                  this.runningSceneRenderer &&
                    this.runningSceneRenderer.updateClockScale(
                      this.clock.scale
                    ),
                  window.requestAnimationFrame(this.boundStep);
              }),
              (t.prototype.setClockScale = function(t) {
                (this.clock.scale = t),
                  this.runningSceneRenderer &&
                    this.runningSceneRenderer.updateClockScale(t);
              }),
              Object.defineProperty(t.prototype, "onStart", {
                get: function() {
                  return this._onStart;
                },
                set: function(t) {
                  (this._onStart = t),
                    this.runningSceneRenderer &&
                      this.runningSceneRenderer.isReady() &&
                      this._onStart(
                        this.runningSceneRenderer.getResourceLoadingErrorCount()
                      );
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.handleReceivedMessage = function(t, e, r) {
                void 0 === r && (r = null),
                  this.runningScene &&
                    this.runningScene.runReceiveTriggers(
                      this.clock.getNow(),
                      t,
                      e,
                      r
                    );
              }),
              (t.prototype.send = function(t, e, r, n) {
                if ("PIE" == t)
                  for (
                    var i = 0, o = this.runningPie.getAllScenes();
                    i < o.length;
                    i++
                  ) {
                    o[i].runReceiveTriggers(n, t, e, r);
                  }
                else this.onSend && this.onSend(t, e);
              }),
              (t.prototype.jump = function(t, e, r) {
                var n;
                if ("!BACK!" == t) {
                  if (0 == this.sceneHistory.length)
                    return void c.Logger.w(
                      "Ignoring jump back. History is empty."
                    );
                  var i = this.sceneHistory.pop();
                  c.Logger.d("Jump back to " + i),
                    (n = this.runningPie.getSceneById(i));
                } else {
                  if (t == this.runningScene.id)
                    return void c.Logger.w("Ignoring jump to self");
                  if (
                    (c.Logger.d("Jumping to " + t),
                    !(n = this.runningPie.getSceneById(t)))
                  )
                    return void c.Logger.w(
                      "Ignoring jump to invalid sceneId: " + t
                    );
                  this.sceneHistory.push(this.runningScene.id);
                }
                if (n) {
                  this.transferLinkedVarsFrom(this.runningScene),
                    this.transferLinkedVarsTo(n),
                    r && n.reset(),
                    n.prepareTransition(this.clock.getNow()),
                    this.stopScene();
                  var o = this.runningSceneRenderer,
                    a = this.sceneRenderers[n.id],
                    u = s.SceneTransitionFactory.fromName(
                      e,
                      o,
                      a,
                      this.runningScene,
                      n
                    );
                  u
                    ? this.startTransition(u)
                    : (n.progress(this.clock.getNow(), !0),
                      a.attachTo(this.wrapElement),
                      o.detachFromParent(),
                      this.startScene(n, a, !1));
                }
              }),
              (t.prototype.openUrl = function(t) {
                c.Logger.i("Running Link to " + t),
                  this.onOpenUrl && this.onOpenUrl(t);
              }),
              (t.prototype.removeTasksOfLayer = function(t) {}),
              (t.prototype.removeTasksOfVariable = function(t) {}),
              (t.prototype.setLogLevel = function(t) {
                c.Logger.setLogLevel(t);
              }),
              (t.prototype.clearAll = function() {
                for (var t in this.sceneRenderers)
                  this.sceneRenderers[t].detachFromParent(),
                    this.sceneRenderers[t].cleanUpResources(),
                    this.sceneRenderers[t].setOnReady(null);
                (this.runningPie = null),
                  (this.sceneRenderers = {}),
                  (this.runningScene = null),
                  (this.runningSceneRenderer = null),
                  (this.runningTransition = null);
              }),
              (t.prototype.registerKeyEvents = function() {
                var t = this;
                document.addEventListener("keydown", function(e) {
                  if (t.runningScene) {
                    if (e.target instanceof HTMLElement) {
                      var r = e.target.tagName.toUpperCase();
                      if ("INPUT" === r || "TEXTAREA" === r) return;
                    }
                    t.runningScene.handleKeyEvent(e, t.clock.getNow());
                  }
                });
              }),
              (t.prototype.initSceneRenderers = function(t, e) {
                for (
                  var r = 0, n = this.runningPie.getAllScenes();
                  r < n.length;
                  r++
                ) {
                  var i = n[r];
                  this.sceneRenderers[i.id] = new a.SceneRenderer(
                    i,
                    t,
                    e,
                    this.clock,
                    this.inputFocusManager
                  );
                }
              }),
              (t.prototype.startInitialScene = function(t) {
                var e = this,
                  r = this.runningPie.getInitialScene(t),
                  n = this.sceneRenderers[r.id];
                n.attachTo(this.wrapElement),
                  n.setOnReady(function(t) {
                    (e.stopped = !1),
                      e.startScene(r, n, !0),
                      window.requestAnimationFrame(e.boundStep),
                      e._onStart && e._onStart(t);
                  });
              }),
              (t.prototype.fitWrapElementSize = function(t) {
                (this.wrapElement.style.width = t.width + "px"),
                  (this.wrapElement.style.height = t.height + "px"),
                  this.updateCanvasPosition();
              }),
              (t.prototype.doFrame = function(t) {
                this.frameCount++;
                var e = Date.now(),
                  r = this.clock.getNow();
                this.runningTransition
                  ? (this.runningTransition.progress(r),
                    this.runningTransition.isEnded(r) &&
                      this.endCurrentTransition(r))
                  : this.runningScene &&
                    (this.pieFrameCount++,
                    2 == this.pieFrameCount &&
                      this.onFirstFrame &&
                      this.onFirstFrame(),
                    this.runningScene.progress(r)),
                  this.clock.updateNow(),
                  (this.frameDuration += Date.now() - e),
                  this.stopped || window.requestAnimationFrame(this.boundStep);
              }),
              (t.prototype.startScene = function(t, e, r) {
                (this.runningScene = t),
                  (this.runningSceneRenderer = e),
                  this.runningSceneRenderer.updateClockScale(this.clock.scale),
                  (this.touchHandler.scene = t),
                  (this.pieFrameCount = 0),
                  this.clock.updateNow(),
                  (t.taskRunner = this),
                  t.start(this.clock.getNow(), r);
              }),
              (t.prototype.stopScene = function() {
                this.runningScene &&
                  (this.runningScene.stop(this.clock.getNow()),
                  (this.runningScene.taskRunner = null));
              }),
              (t.prototype.startTransition = function(t) {
                var e = this.clock.getNow();
                t.nextScene.progress(e, !0),
                  t.shouldAttachedToFront()
                    ? t.nextSceneRenderer.attachTo(this.wrapElement)
                    : (t.prevSceneRenderer.detachFromParent(),
                      t.nextSceneRenderer.attachTo(this.wrapElement),
                      t.prevSceneRenderer.attachTo(this.wrapElement)),
                  t.start(e),
                  t.progress(e),
                  (this.runningTransition = t);
              }),
              (t.prototype.endCurrentTransition = function(t) {
                this.runningTransition &&
                  (this.runningTransition.end(t),
                  this.runningTransition.prevSceneRenderer.detachFromParent(),
                  this.startScene(
                    this.runningTransition.nextScene,
                    this.runningTransition.nextSceneRenderer,
                    !1
                  ),
                  (this.runningTransition = null));
              }),
              (t.prototype.transferLinkedVarsFrom = function(t) {
                for (var e = 0, r = t.getLinkVariables(); e < r.length; e++) {
                  var n = r[e];
                  this.runningPie
                    .getSceneById(n.linkSceneId)
                    .getVariable(n.linkVarName)
                    .syncFrom(n);
                }
              }),
              (t.prototype.transferLinkedVarsTo = function(t) {
                for (var e = 0, r = t.getLinkVariables(); e < r.length; e++) {
                  var n = r[e],
                    i = this.runningPie
                      .getSceneById(n.linkSceneId)
                      .getVariable(n.linkVarName);
                  n.syncFrom(i);
                }
              }),
              (t.prototype.findLayer = function(t) {
                if (this.runningScene)
                  for (
                    var e = 0, r = this.runningScene.getAllLayers();
                    e < r.length;
                    e++
                  ) {
                    var n = r[e];
                    if ("#" == t[0]) {
                      if (n.id == t.substr(1)) return n;
                    } else if (n.name == t) return n;
                  }
                return null;
              }),
              (t.prototype.testFonts = function(t, e) {
                if (this.fontChecker)
                  for (var r = 0, n = t.getUsedFonts(); r < n.length; r++) {
                    var i = n[r];
                    this.fontChecker.isAvailable(i) ||
                      e.missingFonts.push(i.family);
                  }
              }),
              t
            );
          })();
        e.PPEngine = g;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(109),
          i = r(110),
          o = r(3),
          s = r(61),
          a = r(197),
          u = r(100),
          c = r(13),
          l = (function() {
            function t(t) {
              this.keyboardProvider = t;
            }
            return (
              (t.prototype.readPie = function(t, e, r) {
                t.modelVersion > 13 &&
                  ((r.errorCode = "UNSUPPORTED_MODEL_VERSION"),
                  (r.errorMessage =
                    "This pie was created with a newer version of ProtoPie Studio.")),
                  this.migratePie(t);
                var o = this.readGlobalVarTable(t),
                  a = new n.Pie(t.device, o);
                this.sceneReader = new i.SceneReader(
                  a.deviceInfo,
                  this.keyboardProvider,
                  e
                );
                for (var u = 0, c = t.scenes; u < c.length; u++) {
                  var l = c[u];
                  a.addScene(this.readScene(l, o, r));
                }
                if (((a.selectedSceneId = t.selectedSceneId), t.fonts))
                  for (var h in t.fonts) {
                    var p = t.fonts[h];
                    a.addFont(
                      h,
                      new s.PPFont(
                        p.familyName,
                        p.subfamilyName,
                        p.cssWeight,
                        p.cssStyle
                      )
                    );
                  }
                return a;
              }),
              (t.prototype.readScene = function(t, e, r) {
                return this.sceneReader.readScene(t, e, r);
              }),
              (t.prototype.migratePie = function(t) {
                t.modelVersion <= 8 &&
                  (o.Logger.i("Migrating from model V8"),
                  this.migrateFromV8(t));
              }),
              (t.prototype.migrateFromV8 = function(t) {
                function e(t) {
                  if ((t.invisible && (t.invisible = !1), t.children))
                    for (var r = 0, n = t.children; r < n.length; r++) {
                      e(n[r]);
                    }
                }
                for (var r = 0, n = t.scenes; r < n.length; r++)
                  for (var i = 0, o = n[r].layers; i < o.length; i++) {
                    e(o[i]);
                  }
              }),
              (t.prototype.readGlobalVarTable = function(t) {
                var e = new u.VariableReader(null),
                  r = new a.PPGlobalVarTable(t.scenes[0].id);
                if (t.variables)
                  for (var n = 0, i = t.variables; n < i.length; n++) {
                    var s = i[n];
                    try {
                      r.addGlobalVariable(e.readVariable(s));
                    } catch (t) {
                      o.Logger.i("Ignoring invalid variable: " + t.message);
                    }
                  }
                for (var l = 0, h = t.scenes; l < h.length; l++) {
                  var p = h[l],
                    f = void 0;
                  try {
                    f = c.requireString(p, "id");
                  } catch (t) {
                    o.Logger.i("Ignoring invalid scene: " + t.message);
                    continue;
                  }
                  if (p.variables)
                    for (var d = 0, y = p.variables; d < y.length; d++) {
                      s = y[d];
                      try {
                        "NORMAL" === c.requireString(s, "evalType") &&
                          r.addLocalVariable(f, e.readVariable(s));
                      } catch (t) {
                        o.Logger.i("Ignoring invalid variable: " + t.message);
                      }
                    }
                }
                return r;
              }),
              t
            );
          })();
        e.PieReader = l;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(61),
          i = r(20),
          o = (function() {
            function t(t, e) {
              (this.scenes = []),
                (this.fontMap = {}),
                (this.deviceInfo = t),
                (this.globalVarTable = e),
                (this.fontMap[
                  i.PPTextAttributes.DEFAULT_FONT_REGULAR
                ] = new n.PPFont(null, null, "normal", null)),
                (this.fontMap[
                  i.PPTextAttributes.DEFAULT_FONT_BOLD
                ] = new n.PPFont(null, null, "bold", null));
            }
            return (
              (t.prototype.addScene = function(t) {
                this.scenes.push(t);
              }),
              (t.prototype.updateScene = function(t, e) {
                this.globalVarTable.updateScene(e);
                for (var r = 0; r < this.scenes.length; r++)
                  if (this.scenes[r].id == t) return (this.scenes[r] = e), !0;
                return !1;
              }),
              (t.prototype.addFont = function(t, e) {
                this.fontMap[t] = e;
              }),
              (t.prototype.getInitialScene = function(t) {
                void 0 === t && (t = null);
                var e = t || this.selectedSceneId;
                if (e)
                  for (var r = 0, n = this.scenes; r < n.length; r++) {
                    var i = n[r];
                    if (i.id == e) return i;
                  }
                return this.scenes[0];
              }),
              (t.prototype.getAllScenes = function() {
                return this.scenes;
              }),
              (t.prototype.getSceneById = function(t) {
                for (var e = 0, r = this.scenes; e < r.length; e++) {
                  var n = r[e];
                  if (n.id === t) return n;
                }
                return null;
              }),
              (t.prototype.getUsedFonts = function() {
                var t = [];
                for (var e in this.fontMap)
                  e != i.PPTextAttributes.DEFAULT_FONT_REGULAR &&
                    e != i.PPTextAttributes.DEFAULT_FONT_BOLD &&
                    t.push(this.fontMap[e]);
                return t;
              }),
              (t.prototype.getFontProvider = function() {
                var t = this;
                return {
                  getFontStyle: function(e) {
                    return t.fontMap[e];
                  }
                };
              }),
              t
            );
          })();
        e.Pie = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(111),
          i = r(125),
          o = r(21),
          s = r(138),
          a = r(139),
          u = r(151),
          c = r(11),
          l = r(3),
          h = r(46),
          p = r(33),
          f = r(24),
          d = r(35),
          y = r(13),
          g = r(100),
          v = r(194),
          m = r(86),
          E = r(85),
          P = r(84),
          T = r(25),
          _ = r(99),
          b = r(55),
          O = r(96),
          w = r(45),
          R = r(20),
          x = r(90),
          A = r(53),
          S = r(52),
          N = r(196),
          C = (function() {
            function t(t, e, r) {
              (this.deviceInfo = t),
                (this.keyboardProvider = e),
                (this.pseudoVarTable = new P.PPPseudoVarTable()),
                (this.errorReporter = r);
            }
            return (
              (t.prototype.readScene = function(t, e, r) {
                var i = t.id,
                  o = y.readColor(t, "fillColor", c.PPColor.white()),
                  a = y.readNumber(t, "fillOpacity", 100),
                  u = this.readLayers(t, o, a),
                  l = new s.LayerRefReader(u),
                  h = new m.PPExprFunctionRegistry();
                E.PPFunctions.registerFunctions(h, l);
                var p = this.readVariables(t, e),
                  f = new v.PPVarTable(p, h, this.pseudoVarTable);
                this.addVarLayers(u, f, l);
                var d = this.readTriggers(t, l, f, r);
                this.addVarInteractions(f, l, d);
                var g = new n.Scene(
                  i,
                  this.deviceInfo,
                  u,
                  d,
                  f,
                  this.keyboardProvider
                );
                return (
                  (g.name = t.name), this.getUnsupportedLayerFeatures(g, r), g
                );
              }),
              (t.prototype.readLayers = function(t, e, r) {
                var n = new i.LayerReader(),
                  s = new o.ContainerLayer("_ROOT_", null);
                (s.name = "ROOT"),
                  (s.clipChildren = !0),
                  s.fillColor.setInitial(e),
                  s.fillOpacity.setInitial(r),
                  s.w.setInitial(this.deviceInfo.width),
                  s.h.setInitial(this.deviceInfo.height);
                for (var a = 0, u = t.layers; a < u.length; a++) {
                  var c = u[a];
                  try {
                    var h = n.readLayer(c, s);
                    h && s.addChildLayer(h);
                  } catch (t) {
                    l.Logger.w("Ignoring invalid layer", t);
                  }
                }
                return s;
              }),
              (t.prototype.readVariables = function(t, e) {
                var r = [];
                if (!t.variables) return r;
                if (t.id === e.mainSceneId)
                  for (
                    var n = 0, i = e.getGlobalVariables();
                    n < i.length;
                    n++
                  ) {
                    var o = i[n];
                    r.push(o);
                  }
                else
                  for (
                    var s = 0, a = e.getGlobalVariables();
                    s < a.length;
                    s++
                  ) {
                    var u = (o = a[s]).getLinkedVar(e.mainSceneId, o.name);
                    (u.visible = o.visible),
                      (u.x = o.x),
                      (u.y = o.y),
                      r.push(u);
                  }
                for (
                  var c = new g.VariableReader(e), h = 0, p = t.variables;
                  h < p.length;
                  h++
                ) {
                  var f = p[h];
                  try {
                    r.push(c.readVariable(f));
                  } catch (t) {
                    l.Logger.i("Ignoring invalid variable", t);
                  }
                }
                return r;
              }),
              (t.prototype.readTriggers = function(t, e, r, n) {
                for (
                  var i = new u.ResponseReader(e, r, this.errorReporter),
                    o = new a.TriggerReader(e, i, r, this.errorReporter),
                    s = [],
                    c = 0,
                    h = t.interactions;
                  c < h.length;
                  c++
                ) {
                  var p = h[c];
                  if (!p.disabled)
                    try {
                      s.push(o.readTrigger(p, n));
                    } catch (t) {
                      l.Logger.i("Ignoring invalid trigger", t);
                    }
                }
                return s;
              }),
              (t.prototype.addVarLayers = function(t, e, r) {
                for (var n = 0, i = e.getVariables(); n < i.length; n++) {
                  var o = i[n];
                  if (o.visible) {
                    var s = new T.TextLayer(this.buildLayerIdForVar(o), t);
                    s.x.setInitial(o.x),
                      s.y.setInitial(o.y),
                      s.w.setInitial(0),
                      s.h.setInitial(30),
                      s.o.setInitial(95),
                      (s.autoWrap = !1),
                      (s.autoResize = !0),
                      s.textColor.setInitial(c.PPColor.WHITE),
                      s.textOpacity.setInitial(100),
                      (s.textAttributes.text =
                        o.name +
                        " : " +
                        new x.PPVarExpr(o, null).evalAsString()),
                      (s.textAttributes.textAlign = "LEFT"),
                      (s.textAttributes.verticalAlign = "TOP"),
                      (s.textAttributes.lineHeight = 1),
                      (s.textAttributes.font =
                        R.PPTextAttributes.DEFAULT_FONT_REGULAR),
                      (s.textAttributes.fontSize = 15),
                      (s.textAttributes.fillStyle = "#8bc763"),
                      (s.textAttributes.borderStyle = "solid 1px #7fbf54"),
                      (s.textAttributes.autoSize = !0),
                      (s.textAttributes.paddingStyle = "5px 8px"),
                      (s.textAttributes.radiusStyle = "2px"),
                      s.saveInitialState(),
                      t.addChildLayer(s),
                      r.addLayer(s);
                  }
                }
              }),
              (t.prototype.addVarInteractions = function(t, e, r) {
                for (var n = 0, i = t.getVariables(); n < i.length; n++) {
                  var o = i[n];
                  if (o.visible) {
                    var s = e.findLayerById(this.buildLayerIdForVar(o)),
                      a = new _.TextResponse(s);
                    (a.expr = new N.PPVariableDisplayExpr(
                      new x.PPVarExpr(o, null)
                    )),
                      r.push(
                        new b.ChangeTrigger(
                          O.changeDetectorForVariable(o),
                          new w.OneTimeResponseList(a)
                        )
                      );
                    var u = new A.DragMoveResponse(s),
                      c = new S.DragTrigger("drag-" + o.name, s);
                    c.responses.push(u), r.push(c);
                  }
                }
              }),
              (t.prototype.getUnsupportedLayerFeatures = function(t, e) {
                for (
                  var r = 0, n = 0, i = t.getAllLayers();
                  n < i.length;
                  n++
                ) {
                  var o = i[n];
                  d.BrowserDetector.supportsMask() ||
                    (o instanceof p.ShapeLayer &&
                      o.isMask &&
                      e.addUnsupportedFeature(h.PPPieReadResult.FEATURE_MASK)),
                    o instanceof f.VideoLayer && r++;
                }
                d.BrowserDetector.isMobile() &&
                  r > 1 &&
                  e.addUnsupportedFeature(
                    h.PPPieReadResult.FEATURE_MULTIPLE_VIDEO
                  ),
                  d.BrowserDetector.isMobile() &&
                    r > 0 &&
                    e.addUnsupportedFeature(
                      h.PPPieReadResult.FEATURE_VIDEO_SOUND
                    );
              }),
              (t.prototype.buildLayerIdForVar = function(t) {
                return "_VAR_" + t.name;
              }),
              t
            );
          })();
        e.SceneReader = C;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(21),
          i = r(18),
          o = r(73),
          s = r(124),
          a = r(74),
          u = r(75),
          c = r(76),
          l = r(77),
          h = r(3),
          p = r(55),
          f = r(78),
          d = r(43),
          y = r(6),
          g = r(15),
          v = r(7),
          m = r(44),
          E = r(80),
          P = r(35),
          T = (function() {
            return function(t, e) {
              (this.property = e), (this.layer = t);
            };
          })(),
          _ = (function() {
            return function(t, e, r) {
              (this.time = t), (this.messageId = e), (this.value = r);
            };
          })(),
          b = (function() {
            function t(t, e, r, n, i, o) {
              var a = this;
              (this.allLayers = []),
                (this.rangeTriggers = []),
                (this.chainTriggers = []),
                (this.changeTriggers = []),
                (this.onLoadTriggers = []),
                (this.receiveTriggers = []),
                (this.keyTriggers = []),
                (this.allSceneTriggers = []),
                (this.running = !1),
                (this.messageQueue = []),
                (this.progressingProperties = {}),
                (this.modifiedLayers = {}),
                (this.textInputEventListener = {
                  onFocusStatusChanged: function(t, e, r) {
                    if (!P.BrowserDetector.isMobile()) {
                      var n = a.keyboardProvider.getKeyboardDef(
                        t.getKeyboardOptions(),
                        a.deviceInfo
                      );
                      if (n) {
                        var i,
                          o = a.softKeyboard.container;
                        e
                          ? (a.softKeyboard.update(n),
                            (i = a.rootLayer.h.curVal() - o.h.curVal()),
                            a.varTable.pseudoVarTable.keyboardHeight.setValue(
                              o.h.curVal()
                            ))
                          : (i = a.rootLayer.h.curVal());
                        var s = new y.EasingSetNumberAnimation(
                          new v.NumberConstantExpr(i),
                          200,
                          g.EasingFuncFactory.fromName(
                            g.EasingFuncFactory.EASE_IN_OUT_CUBIC
                          )
                        );
                        a.taskScheduler.scheduleTask(
                          new m.PPNumberAnimationTask(o.id, o.y, s),
                          r,
                          null
                        );
                      }
                    }
                  }
                }),
                (this.id = t),
                (this.deviceInfo = e),
                (this.rootLayer = r),
                (this.varTable = i),
                (this.softKeyboard = new E.PPSoftKeyboard(r)),
                this.rootLayer.addChildLayer(this.softKeyboard.container),
                (this.keyboardProvider = o),
                (this.taskScheduler = new s.PPScheduler(this));
              for (var u = 0, c = n; u < c.length; u++) {
                var l = c[u];
                this.addTrigger(l);
              }
              this.traverseLayers(this.rootLayer),
                this.observeLayerProperties(this.rootLayer),
                this.optimizeLayerInteractions(this.rootLayer),
                this.rootLayer.init(this.taskScheduler);
              for (var h = 0, p = this.allSceneTriggers; h < p.length; h++) {
                (l = p[h]).init(this.taskScheduler);
              }
            }
            return (
              (t.prototype.reset = function() {
                this.taskScheduler.clearAll(), this.rootLayer.reset();
                for (var t = 0, e = this.allSceneTriggers; t < e.length; t++)
                  e[t].reset();
                this.messageQueue.length = 0;
              }),
              (t.prototype.prepareTransition = function(t) {
                for (var e = 0; e < 3; e++)
                  this.runChainTriggers(t),
                    this.runRangeTriggers(t),
                    this.runChangeTriggers(t);
                this.runOnLoadTriggers(t, !0);
              }),
              (t.prototype.start = function(t, e) {
                h.Logger.i("Starting scene " + this.id),
                  (this.running = !0),
                  this.rootLayer.start(t);
                for (var r = 0, n = this.messageQueue; r < n.length; r++) {
                  var i = n[r];
                  this.runReceiveTriggers(i.time, "PIE", i.messageId, i.value);
                }
                (this.messageQueue.length = 0),
                  this.runChainTriggers(t),
                  this.runRangeTriggers(t),
                  this.runChangeTriggers(t),
                  e && this.runOnLoadTriggers(t, !0),
                  this.runOnLoadTriggers(t, !1);
              }),
              (t.prototype.stop = function(t) {
                h.Logger.i("Stopping scene " + this.id),
                  (this.running = !1),
                  this.rootLayer.stop(t);
              }),
              (t.prototype.progress = function(t, e) {
                if (
                  (void 0 === e && (e = !1),
                  this.taskScheduler.progress(t),
                  this.running || e)
                ) {
                  for (var r in (this.progressLayerProperties(t),
                  this.runChainTriggers(t),
                  this.runRangeTriggers(t),
                  this.runChangeTriggers(t),
                  this.modifiedLayers))
                    this.modifiedLayers[r].notifyLayerModified();
                  this.modifiedLayers = {};
                }
              }),
              (t.prototype.handleKeyEvent = function(t, e) {
                for (var r = 0, n = this.keyTriggers; r < n.length; r++)
                  n[r].run(t, e);
              }),
              (t.prototype.progressRootLayerAnimations = function(t) {
                for (var e in this.progressingProperties) {
                  var r = this.progressingProperties[e];
                  r.layer == this.rootLayer && r.property.progress(t);
                }
                this.rootLayer.notifyLayerModified();
              }),
              (t.prototype.runReceiveTriggers = function(t, e, r, n) {
                if (this.running)
                  for (var i = 0, o = this.receiveTriggers; i < o.length; i++) {
                    var s = o[i];
                    s.channel == e && s.messageId == r && s.run(t, n);
                  }
                else this.messageQueue.push(new _(t, r, n));
              }),
              (t.prototype.onLayerPropertyShouldProgress = function(t, e) {
                this.progressingProperties[e.id] ||
                  (this.progressingProperties[e.id] = new T(t, e));
              }),
              (t.prototype.onLayerPropertySetImmediate = function(t, e) {
                this.modifiedLayers[t.id] = t;
              }),
              (t.prototype.getAllLayers = function() {
                return this.allLayers;
              }),
              (t.prototype.findTouchableLayers = function() {
                var t = [];
                return this.rootLayer.findTouchableLayers(t), t;
              }),
              (t.prototype.getVariable = function(t) {
                return this.varTable.getVariable(t);
              }),
              (t.prototype.getLinkVariables = function() {
                return this.varTable.getLinkVariables();
              }),
              (t.prototype.getPseudoVarTable = function() {
                return this.varTable.pseudoVarTable;
              }),
              (t.prototype.jump = function(t, e, r) {
                this.taskRunner && this.taskRunner.jump(t, e, r);
              }),
              (t.prototype.send = function(t, e, r, n) {
                "SCENE" == t
                  ? this.runReceiveTriggers(n, t, r, e)
                  : this.taskRunner && this.taskRunner.send(t, e, r, n);
              }),
              (t.prototype.openUrl = function(t) {
                this.taskRunner.openUrl && this.taskRunner.openUrl(t);
              }),
              (t.prototype.removeTasksOfLayer = function(t, e) {
                this.taskScheduler.removeTasksOfLayer(t, e);
              }),
              (t.prototype.removeTasksOfVariable = function(t, e) {
                this.taskScheduler.removeTasksOfVariable(t, e);
              }),
              (t.prototype.progressLayerProperties = function(t) {
                for (var e in this.progressingProperties) {
                  var r = this.progressingProperties[e];
                  r.property.progress(t) &&
                    (this.modifiedLayers[r.layer.id] = r.layer),
                    r.property.isChanging() ||
                      delete this.progressingProperties[e];
                }
              }),
              (t.prototype.runRangeTriggers = function(t) {
                for (var e = 0, r = this.rangeTriggers; e < r.length; e++)
                  r[e].run(t);
              }),
              (t.prototype.runChainTriggers = function(t) {
                for (var e = 0, r = this.chainTriggers; e < r.length; e++)
                  r[e].run(t);
              }),
              (t.prototype.runChangeTriggers = function(t) {
                for (var e = 0, r = this.changeTriggers; e < r.length; e++)
                  r[e].run(t);
              }),
              (t.prototype.runOnLoadTriggers = function(t, e) {
                for (var r = 0, n = this.onLoadTriggers; r < n.length; r++) {
                  var i = n[r];
                  e == i.beforeTransition && i.run(t);
                }
              }),
              (t.prototype.addTrigger = function(t) {
                t instanceof i.TouchTrigger
                  ? t.layer.addTouchTrigger(t)
                  : t instanceof l.AbstractMouseTrigger
                    ? t.layer.addMouseTrigger(t)
                    : t instanceof u.RangeTrigger
                      ? (this.rangeTriggers.push(t),
                        this.allSceneTriggers.push(t))
                      : t instanceof o.ChainTrigger
                        ? (this.chainTriggers.push(t),
                          this.allSceneTriggers.push(t))
                        : t instanceof p.ChangeTrigger
                          ? (this.changeTriggers.push(t),
                            this.allSceneTriggers.push(t))
                          : t instanceof a.OnLoadTrigger
                            ? (this.onLoadTriggers.push(t),
                              this.allSceneTriggers.push(t))
                            : t instanceof c.ReceiveTrigger
                              ? (this.receiveTriggers.push(t),
                                this.allSceneTriggers.push(t))
                              : t instanceof f.KeyTrigger
                                ? (this.keyTriggers.push(t),
                                  this.allSceneTriggers.push(t))
                                : this.allSceneTriggers.push(t);
              }),
              (t.prototype.traverseLayers = function(t) {
                this.allLayers.push(t);
                for (var e = 0, r = t.children; e < r.length; e++) {
                  var i = r[e];
                  i instanceof n.ContainerLayer
                    ? this.traverseLayers(i)
                    : (this.allLayers.push(i),
                      i instanceof d.TextInputLayer &&
                        i.addTextInputEventListener(
                          this.textInputEventListener
                        ));
                }
              }),
              (t.prototype.observeLayerProperties = function(t) {
                t.addPropertyObserver(this);
                for (var e = 0, r = t.children; e < r.length; e++) {
                  var i = r[e];
                  i instanceof n.ContainerLayer
                    ? this.observeLayerProperties(i)
                    : i.addPropertyObserver(this);
                }
              }),
              (t.prototype.optimizeLayerInteractions = function(t) {
                t.optimizeInteractions();
                for (var e = 0, r = t.children; e < r.length; e++) {
                  var i = r[e];
                  i instanceof n.ContainerLayer
                    ? this.optimizeLayerInteractions(i)
                    : i.optimizeInteractions();
                }
              }),
              t
            );
          })();
        e.Scene = b;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(47),
          i = r(40),
          o = (function() {
            function t(t, e) {
              (this.incrementBase = 0),
                (this.endedIncrement = 0),
                (this.runningIncrement = 0),
                (this.runningIncrementalAnimations = []),
                (this.value = t),
                (this.normalizer = e),
                (this.incrementBase = t);
            }
            return (
              (t.prototype.reset = function(t) {
                (this.value = t),
                  (this.incrementBase = t),
                  (this.runningSetAnimation = null),
                  this.clearIncrementalAnimations();
              }),
              (t.prototype.isChanging = function() {
                return (
                  !!this.runningSetAnimation ||
                  this.runningIncrementalAnimations.length > 0
                );
              }),
              (t.prototype.getValue = function() {
                return this.value;
              }),
              (t.prototype.progress = function(t) {
                var e = this.updateBaseValue(t),
                  r = this.updateIncrements(t);
                if (e || r) {
                  var n =
                    this.incrementBase +
                    this.endedIncrement +
                    this.runningIncrement;
                  if (
                    (this.normalizer && (n = this.normalizer.normalize(n)),
                    n != this.value)
                  )
                    return (this.value = n), !0;
                }
                return !1;
              }),
              (t.prototype.startAnimation = function(t, e) {
                if (t instanceof n.SetNumberAnimation) {
                  if (!t.start(this.value, e)) return !1;
                  this.clearIncrementalAnimations(),
                    (this.runningSetAnimation = t);
                } else if (t instanceof i.IncrementNumberAnimation) {
                  if (!t.start(e)) return !1;
                  this.runningIncrementalAnimations.push(t);
                }
                return t.getDuration() <= 0 && this.progress(e);
              }),
              (t.prototype.updateBaseValue = function(t) {
                var e = !1;
                if (this.runningSetAnimation) {
                  var r = this.runningSetAnimation.getValueAt(t);
                  null !== r && ((this.incrementBase = r), (e = !0)),
                    this.runningSetAnimation.isEnded(t) &&
                      (this.runningSetAnimation = null);
                }
                return e;
              }),
              (t.prototype.updateIncrements = function(t) {
                if (0 == this.runningIncrementalAnimations.length) return !1;
                this.runningIncrement = 0;
                for (
                  var e = 0;
                  e < this.runningIncrementalAnimations.length;
                  e++
                ) {
                  var r = this.runningIncrementalAnimations[e],
                    n = r.getIncrementAt(t);
                  null !== n &&
                    (r.isEnded(t)
                      ? ((this.endedIncrement += n),
                        this.runningIncrementalAnimations.splice(0, 1),
                        e--)
                      : (this.runningIncrement += n));
                }
                return !0;
              }),
              (t.prototype.clearIncrementalAnimations = function() {
                (this.endedIncrement = 0),
                  (this.runningIncrement = 0),
                  (this.runningIncrementalAnimations.length = 0);
              }),
              t
            );
          })();
        e.AnimationAccumulator = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(5),
          i = r(41),
          o = (function() {
            function t() {}
            return (
              (t.prototype.normalize = function(t) {
                return n.AngleUtils.normalize(t);
              }),
              t
            );
          })();
        e.DegreeNormalizer = o;
        var s = (function() {
          function t(t, e) {
            this.limit = new i.NumberLimit(t, e);
          }
          return (
            (t.prototype.normalize = function(t) {
              return this.limit.applyTo(t);
            }),
            t
          );
        })();
        e.MinMaxNormalizer = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(15),
          i = r(63),
          o = r(117),
          s = r(64),
          a = r(49),
          u = r(65),
          c = 50,
          l = n.EasingFuncFactory.fromName(n.EasingFuncFactory.EASE_OUT_CUBIC),
          h = 1 / 120,
          p = 450,
          f = (function() {
            function t() {}
            return (
              (t.prototype.getAnimation = function(t, e, r, n) {
                return Math.abs(e) >= c || t < 0 || t > n
                  ? new u.SamplerAnimation(new d(t, e, n).sampler)
                  : null;
              }),
              t
            );
          })();
        e.BounceScrollEndEffect = f;
        var d = (function() {
          function t(t, e, r) {
            var n = p / a.SystemInfo.getInstance().getPpi();
            (this.maxValue = r * n),
              (this.value = t * n),
              (this.velocity = e * n),
              (this.sampler = new s.Sampler(0, h, this.value)),
              t < 0 || t > r
                ? this.backToBoundary()
                : Math.abs(this.velocity) >= c &&
                  (this.speedDownWithFriction(),
                  0 != this.velocity &&
                    (this.speedDownWithTension(), this.backToBoundary())),
              this.sampler.update(function(t) {
                return t / n;
              });
          }
          return (
            (t.prototype.speedDownWithFriction = function() {
              for (
                var t = new i.FrictionMovement(this.value, this.velocity, 4e3);
                !(
                  t.isFinished() ||
                  (t.integrate(h),
                  (this.value = t.getValue()),
                  (this.velocity = t.getVelocity()),
                  this.sampler.addSample(this.value),
                  (this.velocity < 0 && this.value < 0) ||
                    (this.velocity > 0 && this.value > this.maxValue))
                );

              );
            }),
            (t.prototype.speedDownWithTension = function() {
              for (
                var t = this.value,
                  e = t < 0 ? -1 : 1,
                  r = new o.TensionMovement(e * this.velocity, 600);
                !r.isFinished();

              )
                r.integrate(h),
                  (this.value = t + r.getValue() * e),
                  this.sampler.addSample(this.value);
            }),
            (t.prototype.backToBoundary = function() {
              for (
                var t = this.value, e = (t < 0 ? 0 : this.maxValue) - t, r = 0;
                r <= 0.4;
                r += h
              ) {
                var n = r / 0.4;
                this.sampler.addSample(t + e * l.computeValueProgress(n));
              }
            }),
            t
          );
        })();
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(e) {
            (this.type = e),
              e == t.EASE_IN_OUT ? (this.p = 0.45) : (this.p = 0.3),
              (this.s = (this.p / (2 * Math.PI)) * Math.asin(1));
          }
          return (
            (t.prototype.computeValueProgress = function(e) {
              return e <= 0
                ? 0
                : e >= 1
                  ? 1
                  : this.type == t.EASE_IN
                    ? -Math.pow(2, 10 * (e - 1)) *
                      Math.sin((2 * (e - 1 - 0.075) * Math.PI) / this.p)
                    : this.type == t.EASE_IN_OUT
                      ? e < 0.5
                        ? Math.pow(2, 10 * (2 * e - 1)) *
                          Math.sin(
                            ((2 * e - 1 - this.s) * (2 * Math.PI)) / this.p
                          ) *
                          -0.5
                        : Math.pow(2, -10 * (2 * e - 1)) *
                            Math.sin(
                              ((2 * e - 1 - this.s) * (2 * Math.PI)) / this.p
                            ) *
                            0.5 +
                          1
                      : Math.pow(2, -10 * e) *
                          Math.sin((2 * (1 * e - 0.075) * Math.PI) / this.p) +
                        1;
            }),
            (t.EASE_IN = "EASE_IN"),
            (t.EASE_OUT = "EASE_OUT"),
            (t.EASE_IN_OUT = "EASE_IN_OUT"),
            t
          );
        })();
        e.ElasticEasingFunc = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t) {
            this.type = t;
          }
          return (
            (t.prototype.computeValueProgress = function(e) {
              return this.type == t.EASE_IN
                ? this.easeInBounce(e)
                : this.type == t.EASE_IN_OUT
                  ? this.easeInOutBounce(e)
                  : this.easeOutBounce(e);
            }),
            (t.prototype.easeInOutBounce = function(t) {
              return t < 0.5
                ? 0.5 * this.easeInBounce(2 * t)
                : 0.5 * this.easeOutBounce(2 * t - 1) + 0.5;
            }),
            (t.prototype.easeInBounce = function(t) {
              return 1 - this.easeOutBounce(1 - t);
            }),
            (t.prototype.easeOutBounce = function(t) {
              var e, r;
              return (
                t < 1 / 2.75
                  ? ((e = t), (r = 0))
                  : t < 2 / 2.75
                    ? ((e = t - 1.5 / 2.75), (r = 0.75))
                    : t < 2.5 / 2.75
                      ? ((e = t - 2.25 / 2.75), (r = 0.9375))
                      : ((e = t - 2.625 / 2.75), (r = 0.984375)),
                7.5625 * e * e + r
              );
            }),
            (t.EASE_IN = "EASE_IN"),
            (t.EASE_OUT = "EASE_OUT"),
            (t.EASE_IN_OUT = "EASE_IN_OUT"),
            t
          );
        })();
        e.BounceEasingFunc = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e) {
            (this.value = 0), (this.k = e), (this.speed = t);
          }
          return (
            (t.prototype.integrate = function(t) {
              this.finished ||
                ((this.value += this.speed * t),
                (this.speed = Math.max(
                  this.speed - this.value * this.k * t,
                  0
                )),
                0 == this.speed && (this.finished = !0));
            }),
            (t.prototype.getValue = function() {
              return this.value;
            }),
            (t.prototype.getSpeed = function() {
              return this.speed;
            }),
            (t.prototype.isFinished = function() {
              return this.finished;
            }),
            t
          );
        })();
        e.TensionMovement = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(65),
          o = r(64),
          s = r(63),
          a = r(49),
          u = (function() {
            function t() {}
            return (
              (t.prototype.getAnimation = function(t, e, r, n) {
                return Math.abs(e) >= 50 && t > r && t < n
                  ? new c(t, e, r, n)
                  : null;
              }),
              t
            );
          })();
        e.NoBounceScrollEndEffect = u;
        var c = (function(t) {
          function e(r, n, i, o) {
            return t.call(this, e.populate(r, n, i, o)) || this;
          }
          return (
            n(e, t),
            (e.populate = function(t, e, r, n) {
              var i = 450 / a.SystemInfo.getInstance().getPpi(),
                u = new o.Sampler(0, 1 / 120, t),
                c = new s.FrictionMovement(t * i, e * i, 4e3);
              for (
                c.setMinValue(r * i), c.setMaxValue(n * i);
                !c.isFinished();

              )
                c.integrate(1 / 120), u.addSample(c.getValue());
              return (
                u.update(function(t) {
                  return t / i;
                }),
                u
              );
            }),
            e
          );
        })(i.SamplerAnimation);
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t) {
            (this.changes = []),
              (this.baseValue = null),
              (this.currentValue = null),
              (this.normalizer = t);
          }
          return (
            (t.prototype.isActive = function() {
              return this.changes.length > 0;
            }),
            (t.prototype.getValue = function() {
              return this.currentValue;
            }),
            (t.prototype.add = function(t, e) {
              return (
                this.isActive() ||
                  ((this.baseValue = t), (this.currentValue = t)),
                this.changes.push(e),
                this.progress()
              );
            }),
            (t.prototype.progress = function() {
              if (null === this.baseValue) return !1;
              for (
                var t = this.baseValue,
                  e = Number.NEGATIVE_INFINITY,
                  r = Number.POSITIVE_INFINITY,
                  n = 0,
                  i = this.changes;
                n < i.length;
                n++
              ) {
                var o = i[n];
                (t += o.getIncrement()),
                  null !== o.min && (e = Math.max(e, o.min)),
                  null != o.max && (r = Math.min(r, o.max));
              }
              return (
                (t = Math.min(Math.max(t, e), r)),
                this.normalizer && (t = this.normalizer.normalize(t)),
                t != this.currentValue && ((this.currentValue = t), !0)
              );
            }),
            (t.prototype.remove = function(t) {
              var e = this.changes.indexOf(t);
              return (
                e >= 0 &&
                ((this.baseValue = this.baseValue + t.getIncrement()),
                null !== t.max &&
                  (this.baseValue = Math.min(this.baseValue, t.max)),
                null !== t.min &&
                  (this.baseValue = Math.max(this.baseValue, t.min)),
                this.changes.splice(e, 1),
                this.progress())
              );
            }),
            (t.prototype.clear = function() {
              (this.baseValue = null),
                (this.currentValue = null),
                (this.changes.length = 0);
            }),
            t
          );
        })();
        e.NumberChangeAccumulator = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {
            (this.extendAbove = 0),
              (this.extendBelow = 0),
              (this.extendLeft = 0),
              (this.extendRight = 0);
          }
          return (
            (t.prototype.isPointIncludedIn = function(t, e, r) {
              return (
                t.x >= -this.extendLeft &&
                t.x <= e + this.extendRight &&
                t.y >= -this.extendAbove &&
                t.y <= r + this.extendBelow
              );
            }),
            (t.prototype.hasExtension = function() {
              return (
                this.extendAbove > 0 ||
                this.extendBelow > 0 ||
                this.extendLeft > 0 ||
                this.extendRight > 0
              );
            }),
            t
          );
        })();
        e.HitArea = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(2),
          i = (function() {
            function t(t, e) {
              (this.lastPoint = new n.Point(t.x, t.y)),
                (this.lastTime = e),
                (this.velocity = new n.Point(0, 0));
            }
            return (
              (t.prototype.update = function(t, e) {
                if (e > this.lastTime) {
                  var r = 0.001 * (e - this.lastTime),
                    n = (t.x - this.lastPoint.x) / r,
                    i = (t.y - this.lastPoint.y) / r,
                    o = 1 - Math.exp(-r / 0.1);
                  (this.velocity.x = o * n + (1 - o) * this.velocity.x),
                    (this.velocity.y = o * i + (1 - o) * this.velocity.y);
                }
                this.lastPoint.copyFrom(t), (this.lastTime = e);
              }),
              (t.prototype.getVelocity = function() {
                return this.velocity;
              }),
              t
            );
          })();
        e.VelocityTracker = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(18),
          o = r(4),
          s = r(41),
          a = r(2),
          u = r(19),
          c = r(14),
          l = r(5),
          h = r(0),
          p = r(50),
          f = (function(t) {
            function e(r) {
              var n = t.call(this, "FREE_TRANSFORM_" + e.counter++, r) || this;
              return (
                (n.movingEnabled = !1),
                (n.scalingEnabled = !1),
                (n.rotationEnabled = !1),
                (n.wLimit = new s.NumberLimit()),
                (n.hLimit = new s.NumberLimit()),
                (n.initialFocus = new a.Point(0, 0)),
                (n.currentFocus = new a.Point(0, 0)),
                (n.xChange = new u.NumberChange()),
                (n.yChange = new u.NumberChange()),
                (n.wChange = new u.NumberChange()),
                (n.hChange = new u.NumberChange()),
                (n.rChange = new u.NumberChange()),
                (n.originalOrigin = new a.Point(r.origin.x, r.origin.y)),
                n
              );
            }
            return (
              n(e, t),
              (e.fromTriggers = function(t, r, n) {
                var i = new e(t ? t.layer : r ? r.layer : n.layer);
                if (
                  ((i.movingEnabled = !!t),
                  (i.scalingEnabled = !!r),
                  (i.rotationEnabled = !!n),
                  r)
                )
                  for (var o = 0, s = r.responses; o < s.length; o++) {
                    var a = s[o];
                    a instanceof p.PinchScaleResponse &&
                      ((i.wLimit = a.wLimit), (i.hLimit = a.hLimit));
                  }
                return i;
              }),
              (e.prototype.reset = function() {
                (this.touch1Id = null), (this.touch2Id = null);
              }),
              (e.prototype.getTouchEventUsageType = function() {
                return o.TouchEventUsageType.PINCH;
              }),
              (e.prototype.onTouchEvent = function(t) {
                t.lastAction == o.TouchEventAction.DOWN
                  ? this.onTouchDown(t)
                  : t.lastAction == o.TouchEventAction.MOVE
                    ? this.onTouchMove(t)
                    : t.lastAction == o.TouchEventAction.UP &&
                      this.onTouchUp(t);
              }),
              (e.prototype.onTouchDown = function(t) {
                for (var e in t.pointerMap)
                  if (c.LangUtils.isNil(this.touch1Id)) this.touch1Id = e;
                  else {
                    if (!c.LangUtils.isNil(this.touch2Id)) break;
                    e != this.touch1Id && ((this.touch2Id = e), this.start(t));
                  }
              }),
              (e.prototype.onTouchMove = function(t) {
                c.LangUtils.isNil(this.touch2Id) || this.update(t);
              }),
              (e.prototype.onTouchUp = function(t) {
                c.LangUtils.isNil(this.touch1Id) ||
                c.LangUtils.isNil(this.touch2Id)
                  ? c.LangUtils.isNil(this.touch1Id) || (this.touch1Id = null)
                  : (t.pointerMap[this.touch1Id] &&
                      t.pointerMap[this.touch2Id]) ||
                    (this.end(t),
                    (this.touch1Id = null),
                    (this.touch2Id = null));
              }),
              (e.prototype.start = function(t) {
                var e = t.pointerMap[this.touch1Id],
                  r = t.pointerMap[this.touch2Id];
                this.initialFocus.copyFrom(t.focus),
                  (this.initialSpan = this.computeSpan(
                    this.initialFocus,
                    e,
                    r
                  )),
                  (this.initialAngle = l.AngleUtils.getLineAngle(e, r)),
                  this.layer.moveOrigin(
                    this.layer.absToPivot(this.initialFocus)
                  ),
                  this.movingEnabled &&
                    ((this.xChange.increment = 0),
                    (this.yChange.increment = 0),
                    this.layer.x.startContinuousChange(
                      this.xChange,
                      t.lastActionTime
                    ),
                    this.layer.y.startContinuousChange(
                      this.yChange,
                      t.lastActionTime
                    )),
                  this.scalingEnabled &&
                    ((this.initialW = this.layer.w.curVal()),
                    (this.initialH = this.layer.h.curVal()),
                    (this.wChange.increment = 0),
                    (this.hChange.increment = 0),
                    0 != this.initialW &&
                      0 != this.initialH &&
                      (this.wChange.setLimit(
                        this.wLimit.merge(
                          this.hLimit.multiply(this.initialW / this.initialH)
                        )
                      ),
                      this.hChange.setLimit(
                        this.hLimit.merge(
                          this.wLimit.multiply(this.initialH / this.initialW)
                        )
                      )),
                    this.layer.w.startContinuousChange(
                      this.wChange,
                      t.lastActionTime
                    ),
                    this.layer.h.startContinuousChange(
                      this.hChange,
                      t.lastActionTime
                    )),
                  this.rotationEnabled &&
                    ((this.rChange.increment = 0),
                    this.layer.r.startContinuousChange(
                      this.rChange,
                      t.lastActionTime
                    )),
                  this.touchSession.notifyDetected(this);
              }),
              (e.prototype.update = function(t) {
                var e = t.pointerMap[this.touch1Id],
                  r = t.pointerMap[this.touch2Id];
                this.computeFocus(e, r, this.currentFocus);
                var n = this.computeSpan(this.currentFocus, e, r),
                  i = l.AngleUtils.getLineAngle(e, r);
                this.movingEnabled &&
                  ((this.xChange.increment =
                    this.currentFocus.x - this.initialFocus.x),
                  (this.yChange.increment =
                    this.currentFocus.y - this.initialFocus.y)),
                  this.scalingEnabled &&
                    n > 0 &&
                    this.initialSpan > 0 &&
                    ((this.wChange.increment =
                      (this.initialW * (n - this.initialSpan)) /
                      this.initialSpan),
                    (this.hChange.increment =
                      (this.initialH * (n - this.initialSpan)) /
                      this.initialSpan)),
                  this.rotationEnabled &&
                    (this.rChange.increment = l.AngleUtils.getAngleDelta(
                      this.initialAngle,
                      i,
                      h.RotateDirection.NEAR
                    ));
              }),
              (e.prototype.end = function(t) {
                this.movingEnabled &&
                  (this.layer.x.endContinuousChange(this.xChange),
                  this.layer.y.endContinuousChange(this.yChange)),
                  this.scalingEnabled &&
                    (this.layer.w.endContinuousChange(this.wChange),
                    this.layer.h.endContinuousChange(this.hChange)),
                  this.rotationEnabled &&
                    this.layer.r.endContinuousChange(this.rChange),
                  this.layer.moveOrigin(this.originalOrigin);
              }),
              (e.prototype.computeFocus = function(t, e, r) {
                (r.x = (t.x + e.x) / 2), (r.y = (t.y + e.y) / 2);
              }),
              (e.prototype.computeSpan = function(t, e, r) {
                var n = (Math.abs(e.x - t.x) + Math.abs(r.x - t.x)) / 2,
                  i = (Math.abs(e.y - t.y) + Math.abs(r.y - t.y)) / 2;
                return Math.sqrt(n * n + i * i);
              }),
              (e.counter = 0),
              e
            );
          })(i.TouchTrigger);
        e.FreeTransformComponent = f;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e) {
            (this.layer = t), (this.triggers = e);
          }
          return (
            (t.prototype.onMouseOver = function(t) {
              for (var e = !1, r = 0, n = this.triggers; r < n.length; r++)
                n[r].onMouseOver(t) && (e = !0);
              return e;
            }),
            (t.prototype.onMouseOut = function(t) {
              for (var e = 0, r = this.triggers; e < r.length; e++)
                r[e].onMouseOut(t);
            }),
            t
          );
        })();
        e.LayerMouseEventHandler = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = Number.MAX_VALUE,
          i = (function() {
            function t(t, e, r, i, o, s) {
              (this.task = t),
                (this.interval = r),
                (this.infinite = i),
                (this.taskNo = s),
                (this.deleted = !1),
                i
                  ? (this.nextRepeatTime = e)
                  : o > 0
                    ? ((this.nextRepeatTime = e), (this.remainedCount = o - 1))
                    : ((this.nextRepeatTime = n), (this.remainedCount = 0));
            }
            return (
              (t.prototype.progress = function(t) {
                if (t >= this.nextRepeatTime) {
                  var e =
                    !this.task.doNotExpire && t > this.nextRepeatTime + 100;
                  return this.scheduleNext(), e ? null : this.task;
                }
                return null;
              }),
              (t.prototype.isEnded = function() {
                return 0 == this.remainedCount && this.nextRepeatTime == n;
              }),
              (t.prototype.shouldStopForLayer = function(t) {
                return this.task.shouldStopForLayer(t);
              }),
              (t.prototype.shouldStopForVariable = function(t) {
                return this.task.shouldStopForVariable(t);
              }),
              (t.prototype.scheduleNext = function() {
                this.infinite
                  ? (this.nextRepeatTime += this.interval)
                  : this.remainedCount > 0
                    ? (this.remainedCount--,
                      (this.nextRepeatTime += this.interval))
                    : (this.nextRepeatTime = n);
              }),
              t
            );
          })(),
          o = (function() {
            return function(t, e, r) {
              (this.task = t),
                (this.time = e),
                (this.taskNo = r),
                (this.deleted = !1);
            };
          })(),
          s = (function() {
            function t(t) {
              (this.lastTaskNo = 0),
                (this.scheduledTasks = []),
                (this.repeatingTasks = []),
                (this.runner = t);
            }
            return (
              (t.prototype.progress = function(t) {
                for (var e = 0; e < this.repeatingTasks.length; e++) {
                  var r = this.repeatingTasks[e];
                  if (r.deleted) this.repeatingTasks.splice(e, 1), e--;
                  else {
                    var n = r.progress(t);
                    null != n && this.run(n, t),
                      r.isEnded() && (this.repeatingTasks.splice(e, 1), e--);
                  }
                }
                for (e = 0; e < this.scheduledTasks.length; e++) {
                  var i = this.scheduledTasks[e];
                  i.deleted
                    ? (this.scheduledTasks.splice(e, 1), e--)
                    : i.time <= t &&
                      ((i.task.doNotExpire || t <= i.time + 100) &&
                        this.run(i.task, t),
                      this.scheduledTasks.splice(e, 1),
                      e--);
                }
              }),
              (t.prototype.clearAll = function() {
                (this.scheduledTasks.length = 0),
                  (this.repeatingTasks.length = 0);
              }),
              (t.prototype.scheduleTask = function(t, e, r, n) {
                void 0 === n && (n = null);
                var s = ++this.lastTaskNo;
                if (n) {
                  var a = new i(
                    t,
                    e + r,
                    n.interval,
                    n.infinite,
                    n.repeatCount,
                    s
                  );
                  this.repeatingTasks.push(a);
                } else this.scheduledTasks.push(new o(t, e + r, s));
                return s;
              }),
              (t.prototype.removeTask = function(t) {
                for (var e = 0; e < this.scheduledTasks.length; e++)
                  if (this.scheduledTasks[e].task === t) {
                    this.scheduledTasks.splice(e, 1);
                    break;
                  }
              }),
              (t.prototype.removeTasksOfLayer = function(t, e) {
                for (var r = 0, n = this.scheduledTasks; r < n.length; r++) {
                  var i = n[r];
                  i.task.shouldStopForLayer(t) &&
                    i.taskNo < e &&
                    (i.deleted = !0);
                }
                for (var o = 0, s = this.repeatingTasks; o < s.length; o++) {
                  var a = s[o];
                  a.shouldStopForLayer(t) && a.taskNo < e && (a.deleted = !0);
                }
              }),
              (t.prototype.removeTasksOfVariable = function(t, e) {
                for (var r = 0, n = this.scheduledTasks; r < n.length; r++) {
                  var i = n[r];
                  i.task.shouldStopForVariable(t) &&
                    i.taskNo < e &&
                    (i.deleted = !0);
                }
                for (var o = 0, s = this.repeatingTasks; o < s.length; o++) {
                  var a = s[o];
                  a.shouldStopForVariable(t) &&
                    a.taskNo < e &&
                    (a.deleted = !0);
                }
              }),
              (t.prototype.hasTask = function(t) {
                for (var e = 0, r = this.scheduledTasks; e < r.length; e++) {
                  if (!(o = r[e]).deleted && o.task === t) return !0;
                }
                for (var n = 0, i = this.repeatingTasks; n < i.length; n++) {
                  var o;
                  if (!(o = i[n]).deleted && o.task === t) return !0;
                }
                return !1;
              }),
              (t.prototype.run = function(t, e) {
                t.run(e, this.runner);
              }),
              t
            );
          })();
        e.PPScheduler = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(21),
          i = r(57),
          o = r(56),
          s = r(11),
          a = r(0),
          u = r(126),
          c = r(127),
          l = r(83),
          h = r(13),
          p = r(24),
          f = r(25),
          d = r(20),
          y = r(43),
          g = r(92),
          v = r(94),
          m = r(45),
          E = r(137),
          P = r(3),
          T = (function() {
            function t() {}
            return (
              (t.prototype.readLayer = function(t, e) {
                if (t.invisible) return null;
                var r,
                  n = t.type;
                switch (n) {
                  case "RECT":
                    r = this.readRectLayer(t, e);
                    break;
                  case "OVAL":
                    r = this.readOvalLayer(t, e);
                    break;
                  case "IMAGE":
                    r = this.readImageLayer(t, e);
                    break;
                  case "VIDEO":
                    r = this.readVideoLayer(t, e);
                    break;
                  case "TEXT":
                    r = this.readTextLayer(t, e);
                    break;
                  case "TEXT_INPUT":
                    r = this.readTextInputLayer(t, e);
                    break;
                  case "CONTAINER":
                    r = this.readContainerLayer(t, e);
                    break;
                  default:
                    throw new Error("Unsupported layer type: " + n);
                }
                return r.saveInitialState(), r;
              }),
              (t.prototype.readRectLayer = function(t, e) {
                var r = t.id,
                  n = new i.RectLayer(r, e);
                return (
                  this.readShapeLayerProperties(n, t),
                  n.radius.setInitial(h.readNumber(t, "radius", 0)),
                  n
                );
              }),
              (t.prototype.readContainerLayer = function(t, e) {
                var r = t.id,
                  i = new n.ContainerLayer(r, e);
                if (
                  (this.readCommonProperties(i, t),
                  i.fillColor.setInitial(
                    h.readColor(t, "fillColor", s.PPColor.white())
                  ),
                  i.fillOpacity.setInitial(h.readNumber(t, "fillOpacity", 100)),
                  i.radius.setInitial(h.readNumber(t, "radius", 0)),
                  (i.clipChildren = t.clipChildren),
                  this.readScrollBehavior(i, t),
                  t.children)
                )
                  for (var o = 0, a = t.children; o < a.length; o++) {
                    var u = a[o];
                    try {
                      var c = this.readLayer(u, i);
                      c && i.addChildLayer(c);
                    } catch (t) {
                      P.Logger.w("Ignoring invalid layer", t);
                    }
                  }
                return i;
              }),
              (t.prototype.readImageLayer = function(t, e) {
                var r = t.id,
                  n = new o.ImageLayer(r, e);
                return (
                  this.readCommonProperties(n, t),
                  n.radius.setInitial(h.readNumber(t, "radius", 0)),
                  (n.resourceId = t.resourceId),
                  n
                );
              }),
              (t.prototype.readVideoLayer = function(t, e) {
                var r = t.id,
                  n = h.readTime(t, "duration", 0),
                  i = new p.VideoLayer(r, e, n);
                return (
                  this.readCommonProperties(i, t),
                  (i.resourceId = t.resourceId),
                  (i.autoPlay = h.readBoolean(t, "autoPlay", !1)),
                  (i.autoPlayRepeat = h.readBoolean(t, "autoPlayRepeat", !1)),
                  i
                );
              }),
              (t.prototype.readTextLayer = function(t, e) {
                var r = t.id,
                  n = new f.TextLayer(r, e);
                return (
                  this.readCommonProperties(n, t),
                  this.readTextProperties(n, t),
                  (n.autoWrap = h.readBoolean(t, "autoWrap", !0)),
                  (n.autoResize = h.readBoolean(t, "autoResize", !1)),
                  n
                );
              }),
              (t.prototype.readTextInputLayer = function(t, e) {
                var r = t.id,
                  n = new y.TextInputLayer(r, e);
                return (
                  this.readCommonProperties(n, t),
                  this.readTextProperties(n, t),
                  h.readBoolean(t, "enablePlaceHolder", !1) &&
                    ((n.placeHolderText = h.readString(
                      t,
                      "placeHolderText",
                      ""
                    )),
                    (n.placeHolderFontSize = h.readNumber(
                      t,
                      "placeHolderFontSize",
                      null
                    )),
                    (n.placeHolderColor = h.readColor(
                      t,
                      "placeHolderColor",
                      null
                    )),
                    (n.placeHolderOpacity = h.readNumber(
                      t,
                      "placeHolderOpacity",
                      100
                    ))),
                  (n.keyboardType = h.readString(t, "keyboardType", "TEXT")),
                  (n.returnKeyType = h.readString(t, "returnKeyType", "DONE")),
                  (n.keyboardLook = h.readString(t, "keyboardLook", "LIGHT")),
                  (n.autoFocusOut = h.readBoolean(t, "autoFocusOut", !0)),
                  (n.focusOutOnTapOutside = h.readBoolean(
                    t,
                    "focusOutOnTapOutside",
                    !0
                  )),
                  n.addTouchTrigger(
                    new g.TapTrigger(
                      E.IdGenerator.generateId(),
                      n,
                      new m.OneTimeResponseList(new v.FocusResponse(n, !0, 0))
                    )
                  ),
                  n
                );
              }),
              (t.prototype.readOvalLayer = function(t, e) {
                var r = t.id,
                  n = new l.OvalLayer(r, e);
                return this.readShapeLayerProperties(n, t), n;
              }),
              (t.prototype.readTextProperties = function(t, e) {
                var r = e.fillColor && !e.textColor ? "fill" : "text";
                t.textColor.setInitial(
                  h.readColor(e, r + "Color", s.PPColor.white())
                ),
                  t.textOpacity.setInitial(h.readNumber(e, r + "Opacity", 100)),
                  (t.textAttributes.text = h.readString(e, "text", "")),
                  (t.textAttributes.fontSize = h.readNumber(e, "fontSize", 16)),
                  (t.textAttributes.lineHeight = h.readNumber(
                    e,
                    "lineHeight",
                    1.2
                  )),
                  (t.textAttributes.textAlign = h.readString(
                    e,
                    "textAlign",
                    "LEFT"
                  )),
                  (t.textAttributes.verticalAlign = h.readString(
                    e,
                    "verticalAlign",
                    "TOP"
                  ));
                var n = h.readString(e, "font", null),
                  i = h.readString(e, "fontWeight", null);
                t.textAttributes.font =
                  n ||
                  (i && "BOLD" == i
                    ? d.PPTextAttributes.DEFAULT_FONT_BOLD
                    : d.PPTextAttributes.DEFAULT_FONT_REGULAR);
              }),
              (t.prototype.readShapeLayerProperties = function(t, e) {
                this.readCommonProperties(t, e),
                  t.fillColor.setInitial(
                    h.readColor(e, "fillColor", s.PPColor.white())
                  ),
                  t.fillOpacity.setInitial(h.readNumber(e, "fillOpacity", 100)),
                  (t.isMask = h.readBoolean(e, "isMask", !1));
              }),
              (t.prototype.readScrollBehavior = function(t, e) {
                var r = e.scrollType,
                  n =
                    "HORIZONTAL" == e.scrollDirection ? a.Axis2D.X : a.Axis2D.Y,
                  i = a.stringToScrollEdgeEffectType(
                    h.readString(e, "edgeEffect", "BOUNCE")
                  );
                if (((t.scrollDir = n), "SCROLL" == r)) {
                  var o = new u.ScrollComponent(t.id, t, n, i);
                  t.addTouchTrigger(o),
                    t.addWheelEventHandler(o),
                    (t.scrollType = a.ScrollType.SCROLL),
                    t
                      .getScrollOffset()
                      .setInitial(h.readNumber(e, "scrollOffset", 0));
                } else
                  "PAGING" == r
                    ? (t.addTouchTrigger(new c.PageComponent(t.id, t, n, i)),
                      (t.scrollType = a.ScrollType.PAGING),
                      t
                        .getScrollOffset()
                        .setInitial(h.readNumber(e, "scrollOffset", 0)))
                    : (t.scrollType = a.ScrollType.NONE);
              }),
              (t.prototype.readCommonProperties = function(t, e) {
                (t.name = e.name),
                  (t.origin.x = h.readNumber(e, "anchorX", 0) / 100),
                  (t.origin.y = h.readNumber(e, "anchorY", 0) / 100),
                  t.x.setInitial(h.readNumber(e, "x", 0)),
                  t.y.setInitial(h.readNumber(e, "y", 0)),
                  t.w.setInitial(h.readNumber(e, "width", 0)),
                  t.h.setInitial(h.readNumber(e, "height", 0)),
                  t.r.setInitial(h.readNumber(e, "rotation", 0)),
                  t.o.setInitial(h.readNumber(e, "opacity", 100)),
                  (t.passTouch = h.readBoolean(e, "passTouch", !1)),
                  h.readBoolean(e, "hitExtendEnabled", !1) &&
                    ((t.hitArea.extendAbove = h.readNumber(
                      e,
                      "hitExtendAbove",
                      0
                    )),
                    (t.hitArea.extendBelow = h.readNumber(
                      e,
                      "hitExtendBelow",
                      0
                    )),
                    (t.hitArea.extendLeft = h.readNumber(
                      e,
                      "hitExtendLeft",
                      0
                    )),
                    (t.hitArea.extendRight = h.readNumber(
                      e,
                      "hitExtendRight",
                      0
                    )));
              }),
              t
            );
          })();
        e.LayerReader = T;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(18),
          o = r(4),
          s = r(0),
          a = r(82),
          u = r(42),
          c = r(3),
          l = (function(t) {
            function e(e, r, n, i) {
              var o = t.call(this, e, r) || this;
              return (
                (o.dragEndAnimation = null),
                (o.containerLayer = r),
                (o.axis = n),
                (o.dragDetector = new u.DragDetector(s.axisToDragAxis(n), o)),
                (o.scrollProp = r.getScrollProp(n)),
                (o.scrollEndEffect = s.scrollEdgeEffectTypeToScrollEndEffect(
                  i
                )),
                (o.scroller = new a.PPScroller(
                  r,
                  n,
                  s.scrollEdgeEffectTypeToOverScrollRatio(i)
                )),
                o
              );
            }
            return (
              n(e, t),
              (e.prototype.onTouchEvent = function(t) {
                this.dragDetector.onTouchEvent(t);
              }),
              (e.prototype.reset = function() {
                this.dragDetector.reset();
              }),
              (e.prototype.getTouchEventUsageType = function() {
                return this.axis == s.Axis2D.X
                  ? o.TouchEventUsageType.MOVE_HORIZONTAL
                  : o.TouchEventUsageType.MOVE_VERTICAL;
              }),
              (e.prototype.onMouseWheelStart = function(t) {
                c.Logger.d("Starting scroll by wheel"),
                  (this.scrollSessionIdByWheel = this.scroller.start(t.time));
              }),
              (e.prototype.onMouseWheelChange = function(t) {
                var e = 0;
                this.axis == s.Axis2D.X
                  ? (e = t.wheelDeltaX)
                  : this.axis == s.Axis2D.Y && (e = t.wheelDeltaY),
                  this.scroller.scrollByWheel(e, this.scrollSessionIdByWheel),
                  t.stopPropagation();
              }),
              (e.prototype.onMouseWheelEnd = function(t) {
                c.Logger.d("Ending scroll by wheel"),
                  this.scroller.end(t.time),
                  (this.scrollSessionIdByWheel = null);
              }),
              (e.prototype.onDragTouchDown = function(t) {
                return (
                  this.dragEndAnimation && !this.dragEndAnimation.isEnded(t)
                );
              }),
              (e.prototype.onDragStart = function(t) {
                c.Logger.d("Starting scroll by touch"),
                  this.touchSession.notifyDetected(this),
                  (this.scrollSessionIdByTouch = this.scroller.start(t.time));
              }),
              (e.prototype.onDragMove = function(t) {
                var e = t.drag.getValue(this.axis);
                this.scroller.scrollBy(-e, this.scrollSessionIdByTouch);
              }),
              (e.prototype.onDragEnd = function(t) {
                c.Logger.d("Ending scroll by touch");
                var e = t.time;
                this.scroller.end(e), (this.scrollSessionIdByTouch = null);
                var r = t.touchEvent.getVelocity().getValue(this.axis);
                (this.dragEndAnimation = this.scrollEndEffect.getAnimation(
                  this.scroller.getScrollOffset(),
                  -r,
                  0,
                  this.scroller.getScrollMax()
                )),
                  this.dragEndAnimation &&
                    this.scrollProp.startAnimation(this.dragEndAnimation, e);
              }),
              e
            );
          })(i.TouchTrigger);
        e.ScrollComponent = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(18),
          o = r(4),
          s = r(0),
          a = r(82),
          u = r(15),
          c = r(42),
          l = r(6),
          h = r(7),
          p = u.EasingFuncFactory.fromName(u.EasingFuncFactory.EASE_OUT_CUBIC),
          f = (function(t) {
            function e(e, r, n, i) {
              var o = t.call(this, e, r) || this;
              return (
                (o.containerLayer = r),
                (o.axis = n),
                (o.dragDetector = new c.DragDetector(s.axisToDragAxis(n), o)),
                (o.scroller = new a.PPScroller(
                  r,
                  n,
                  s.scrollEdgeEffectTypeToOverScrollRatio(i)
                )),
                o
              );
            }
            return (
              n(e, t),
              (e.prototype.onTouchEvent = function(t) {
                this.dragDetector.onTouchEvent(t);
              }),
              (e.prototype.reset = function() {
                this.dragDetector.reset();
              }),
              (e.prototype.getTouchEventUsageType = function() {
                return this.axis == s.Axis2D.X
                  ? o.TouchEventUsageType.MOVE_HORIZONTAL
                  : o.TouchEventUsageType.MOVE_VERTICAL;
              }),
              (e.prototype.startEndAnimation = function(t, e) {
                var r,
                  n = this.scroller.getScrollOffset();
                r =
                  n >= this.scroller.getScrollMax()
                    ? Math.ceil(
                        this.scroller.getContentSize() /
                          this.scroller.getContainerSize()
                      ) - 1
                    : n <= 0
                      ? 0
                      : Math.abs(t) >= 50
                        ? t > 0
                          ? Math.floor(n / this.scroller.getContainerSize())
                          : Math.ceil(n / this.scroller.getContainerSize())
                        : Math.round(n / this.scroller.getContainerSize());
                var i = Math.min(
                    r * this.scroller.getContainerSize(),
                    this.scroller.getScrollMax()
                  ),
                  o = new l.EasingSetNumberAnimation(
                    new h.NumberConstantExpr(i),
                    200,
                    p
                  );
                this.scroller.end(e),
                  this.scroller.getScrollProp().startAnimation(o, e);
              }),
              (e.prototype.onDragTouchDown = function(t) {
                return !1;
              }),
              (e.prototype.onDragStart = function(t) {
                this.touchSession.notifyDetected(this),
                  (this.scrollSessionId = this.scroller.start(t.time));
              }),
              (e.prototype.onDragMove = function(t) {
                var e = t.drag.getValue(this.axis);
                this.scroller.scrollBy(-e, this.scrollSessionId);
              }),
              (e.prototype.onDragEnd = function(t) {
                this.startEndAnimation(
                  t.touchEvent.getVelocity().getValue(this.axis),
                  t.time
                ),
                  (this.scrollSessionId = null);
              }),
              e
            );
          })(i.TouchTrigger);
        e.PageComponent = f;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r, n) {
            (this.groupSeparator = t),
              (this.groupLength = e),
              (this.decimalPoint = r),
              (this.decimalLength = n);
          }
          return (
            (t.parse = function(t) {
              return (
                this.cache.hasOwnProperty(t) ||
                  (this.cache[t] = this.parseInternal(t)),
                this.cache[t]
              );
            }),
            (t.parseInternal = function(e) {
              for (
                var r = null,
                  n = 0,
                  i = null,
                  o = 0,
                  s = t.MODE_DECIMAL_PART,
                  a = e.length - 1;
                a >= 0;
                a--
              ) {
                var u = e[a];
                if (s == t.MODE_DECIMAL_PART)
                  if ("0" === u) o++;
                  else if ("#" === u) {
                    if (0 !== o) return null;
                    n++, (s = t.MODE_INTEGER_PART);
                  } else (i = u), (s = t.MODE_INTEGER_PART);
                else if (s == t.MODE_INTEGER_PART)
                  if ("#" === u) n++;
                  else {
                    if ("0" === u) return null;
                    (r = u), (s = t.MODE_INTEGER_PART2);
                  }
                else if (s == t.MODE_INTEGER_PART2 && "#" !== u) return null;
              }
              return null === r && (n = 0), new t(r, n, i, o);
            }),
            (t.prototype.format = function(t) {
              var e;
              if (
                null ===
                (e =
                  "" === this.decimalPoint ||
                  null === this.decimalPoint ||
                  this.decimalLength <= 0
                    ? this.numberToString(Math.round(t))
                    : this.numberToString(t))
              )
                return null;
              var r = e.split("."),
                n = r[0],
                i = r[1] || "";
              return this.formatIntegerPart(n) + this.formatDecimalPart(i);
            }),
            (t.prototype.numberToString = function(t) {
              var e = "" + t;
              return e.indexOf("e-") >= 0
                ? "0"
                : e.indexOf("e") >= 0
                  ? null
                  : e;
            }),
            (t.prototype.formatIntegerPart = function(t) {
              if (
                "" === this.groupSeparator ||
                null === this.groupSeparator ||
                this.groupLength <= 0
              )
                return t;
              for (var e = "", r = 0; r < t.length; r++)
                0 != r &&
                  r % this.groupLength == 0 &&
                  (e = this.groupSeparator + e),
                  (e = t[t.length - r - 1] + e);
              return e;
            }),
            (t.prototype.formatDecimalPart = function(t) {
              if (
                "" === this.decimalPoint ||
                null === this.decimalPoint ||
                this.decimalLength <= 0
              )
                return "";
              var e = "";
              if (((e += this.decimalPoint), t.length > this.decimalLength))
                e += Math.round(
                  +(
                    t.substr(0, this.decimalLength) +
                    "." +
                    t.substr(this.decimalLength)
                  )
                );
              else {
                e += t;
                for (var r = 0; r < this.decimalLength - t.length; r++)
                  e += "0";
              }
              return e;
            }),
            (t.MODE_DECIMAL_PART = 1),
            (t.MODE_INTEGER_PART = 2),
            (t.MODE_INTEGER_PART2 = 3),
            (t.cache = {}),
            t
          );
        })();
        e.PPNumberFormat = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(36),
          i = r(7),
          o = r(88),
          s = r(89),
          a = r(130),
          u = r(131),
          c = r(90),
          l = (function() {
            function t() {}
            return (
              (t.translate = function(t, e, r, l) {
                var h = this;
                if (t instanceof n.PPNumberLiteralNode)
                  return new i.NumberConstantExpr(t.value, l);
                if (t instanceof n.PPStringLiteralNode)
                  return new o.StringConstantExpr(l, t.value);
                if (t instanceof n.PPColorLiteralNode)
                  return new s.ColorConstantExpr(t.value, l);
                if (t instanceof n.PPLayerLiteralNode) {
                  var p = r.findLayerByName(t.layerName);
                  if (p) return new a.PPLayerExpr(l, p);
                  throw new Error("No layer with name " + t.layerName);
                }
                if (t instanceof n.PPPropertyNode) {
                  if (t.layer) {
                    var f = this.translate(t.layer, e, r, l);
                    return new u.PPPropertyExpr(
                      l,
                      f,
                      t.propertyName.identifier
                    );
                  }
                  throw new Error(
                    "Layer required for property expression " + t.getFullText()
                  );
                }
                if (t instanceof n.PPVariableNode)
                  return new c.PPVarExpr(e.requireVariable(t.varName), l);
                if (t instanceof n.PPUnaryOperationNode) {
                  var d = this.translate(t.value, e, r, l);
                  return e.getFunction(t.operator.operator, [d], l);
                }
                if (t instanceof n.PPBinaryOperationNode) {
                  if (t.lhs && t.rhs) {
                    var y = this.translate(t.lhs, e, r, l),
                      g = this.translate(t.rhs, e, r, l);
                    return e.getFunction(t.operator.operator, [y, g], l);
                  }
                  throw new Error(
                    "Incomplete binary operation: " + t.getFullText()
                  );
                }
                if (t instanceof n.PPFunctionNode) {
                  for (var v = 0, m = t.args; v < m.length; v++)
                    if (!m[v])
                      throw new Error(
                        "Function argument is missing: " + t.getFullText()
                      );
                  var E = t.args.map(function(t) {
                    return h.translate(t, e, r, l);
                  });
                  return e.getFunction(t.functionName.identifier, E, l);
                }
                if (t instanceof n.PPParenthesisNode) {
                  if (t.content) return this.translate(t.content, e, r, l);
                  throw new Error("Empty parenthesis");
                }
                throw new Error("Unhandled node type: " + t.nodeType);
              }),
              t
            );
          })();
        e.ParseResultTranslator = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(8),
          s = (function(t) {
            function e(e, r) {
              var n = t.call(this, i.PPExprDataType.LAYER, e) || this;
              return (n.layer = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evalAsLayer = function() {
                return this.layer;
              }),
              (e.prototype.evalAsNumber = function() {
                return (
                  this.reportError(o.PPExprEvalError.castingLayerToNumber()),
                  null
                );
              }),
              (e.prototype.evalAsString = function() {
                return (
                  this.reportError(o.PPExprEvalError.castingLayerToString()),
                  null
                );
              }),
              (e.prototype.evalAsColor = function() {
                return (
                  this.reportError(o.PPExprEvalError.castingLayerToColor()),
                  null
                );
              }),
              e
            );
          })(i.PPExpr);
        e.PPLayerExpr = s;
      },
      function(t, e, r) {
        "use strict";
        function n(t) {
          if (s.ArrayUtils.contains(l, t)) return o.PPExprDataType.NUMBER;
          if (s.ArrayUtils.contains(h, t)) return o.PPExprDataType.COLOR;
          if (s.ArrayUtils.contains(p, t)) return o.PPExprDataType.STRING;
          throw new Error("Invalid property name: " + t);
        }
        var i =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = r(1),
          s = r(14),
          a = r(12),
          u = r(25),
          c = r(8),
          l = [
            "x",
            "y",
            "width",
            "height",
            "rotation",
            "rotation3d",
            "scrollOffset",
            "scaleX",
            "scaleY",
            "opacity",
            "radius",
            "fillOpacity",
            "textOpacity"
          ],
          h = ["fillColor", "textColor"],
          p = ["text"],
          f = (function(t) {
            function e(e, r, i) {
              var o = t.call(this, n(i), e) || this;
              return (o.layer = r), (o.propertyName = i), o;
            }
            return (
              i(e, t),
              (e.prototype.evalAsNumber = function() {
                switch (this.dataType) {
                  case o.PPExprDataType.NUMBER:
                    var t = this.layer.evalAsLayer();
                    if (!t) return null;
                    var e = t.getNumberPropertyByName(this.propertyName);
                    return e
                      ? e.curVal()
                      : (this.reportError(
                          c.PPExprEvalError.noProperty(
                            t.name,
                            this.propertyName
                          )
                        ),
                        null);
                  case o.PPExprDataType.STRING:
                    var r = this.evalAsString();
                    if (null !== r) {
                      var n = a.PPExprUtils.stringToNumber(r);
                      return (
                        null === n &&
                          this.reportError(
                            c.PPExprEvalError.castingStringToNumber(r)
                          ),
                        n
                      );
                    }
                    return null;
                  case o.PPExprDataType.COLOR:
                    return (
                      this.reportError(
                        c.PPExprEvalError.castingColorToNumber()
                      ),
                      null
                    );
                  case o.PPExprDataType.LAYER:
                    return (
                      this.reportError(
                        c.PPExprEvalError.castingLayerToNumber()
                      ),
                      null
                    );
                  default:
                    return (
                      this.reportError(c.PPExprEvalError.unexpected()), null
                    );
                }
              }),
              (e.prototype.evalAsString = function() {
                switch (this.dataType) {
                  case o.PPExprDataType.NUMBER:
                    var t = this.evalAsNumber();
                    return null !== t ? a.PPExprUtils.numberToString(t) : null;
                  case o.PPExprDataType.STRING:
                    var e = this.layer.evalAsLayer();
                    return e
                      ? e instanceof u.TextLayer
                        ? e.textAttributes.text
                        : (this.reportError(
                            c.PPExprEvalError.noProperty(
                              e.name,
                              this.propertyName
                            )
                          ),
                          null)
                      : null;
                  case o.PPExprDataType.COLOR:
                    return a.PPExprUtils.colorToString(this.evalAsColor());
                  case o.PPExprDataType.LAYER:
                    return (
                      this.reportError(
                        c.PPExprEvalError.castingLayerToString()
                      ),
                      null
                    );
                  default:
                    return (
                      this.reportError(c.PPExprEvalError.unexpected()), null
                    );
                }
              }),
              (e.prototype.evalAsColor = function() {
                switch (this.dataType) {
                  case o.PPExprDataType.NUMBER:
                    return (
                      this.reportError(
                        c.PPExprEvalError.castingNumberToColor()
                      ),
                      null
                    );
                  case o.PPExprDataType.STRING:
                    var t = this.evalAsString();
                    if (null !== t) {
                      var e = a.PPExprUtils.stringToColor(t);
                      return (
                        null === e &&
                          this.reportError(
                            c.PPExprEvalError.castingStringToColor(t)
                          ),
                        e
                      );
                    }
                    return null;
                  case o.PPExprDataType.COLOR:
                    var r = this.layer.evalAsLayer();
                    if (!r) return null;
                    var n = r.getColorPropertyByName(this.propertyName);
                    return n
                      ? n.toColor()
                      : (this.reportError(
                          c.PPExprEvalError.noProperty(
                            r.name,
                            this.propertyName
                          )
                        ),
                        null);
                  case o.PPExprDataType.LAYER:
                    return (
                      this.reportError(c.PPExprEvalError.castingLayerToColor()),
                      null
                    );
                  default:
                    return (
                      this.reportError(c.PPExprEvalError.unexpected()), null
                    );
                }
              }),
              e
            );
          })(o.PPExpr);
        e.PPPropertyExpr = f;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(36),
          i = r(59),
          o = r(14),
          s = r(11),
          a = r(3),
          u = ["+", "-", "*", "/", "%", '"', "`", ".", "(", ")", ","],
          c = (function() {
            function t(t) {
              (this.pos = 0), (this.exprStr = t);
            }
            return (
              (t.prototype.hasMore = function() {
                return this.pos < this.exprStr.length;
              }),
              (t.prototype.readNextToken = function() {
                var t = this.lookAhead(!0);
                return null === t
                  ? null
                  : o.StringUtils.isNumber(t)
                    ? this.readNumberLiteral()
                    : o.StringUtils.isAlpha(t) || "$" == t
                      ? this.readIdentifier()
                      : '"' == t
                        ? this.readStringLiteral()
                        : "`" == t
                          ? this.readLayerLiteral()
                          : "#" == t
                            ? this.readColorLiteral()
                            : "." === t
                              ? this.readOperator()
                              : n.PPOperatorNode.isBinaryOperator(t)
                                ? this.readOperator()
                                : "(" === t
                                  ? this.readOperator()
                                  : ")" == t
                                    ? this.readOperator()
                                    : "," == t
                                      ? this.readOperator()
                                      : this.readNotParsed();
              }),
              (t.prototype.readIdentifier = function() {
                var t = this.pos;
                this.skipWhiteSpaces();
                for (var e = ""; this.hasMore(); ) {
                  var r = this.pop();
                  if (
                    !(
                      o.StringUtils.isAlpha(r) ||
                      o.StringUtils.isNumber(r) ||
                      "_" == r ||
                      ("" == e && "$" == r)
                    )
                  ) {
                    this.pushBack();
                    break;
                  }
                  e += r;
                }
                return e.length > 0
                  ? new n.PPIdentifierNode(
                      e,
                      t,
                      this.exprStr.substring(t, this.pos)
                    )
                  : null;
              }),
              (t.prototype.readNumberLiteral = function() {
                var t = this.pos;
                this.skipWhiteSpaces();
                for (var e = "", r = !1; this.hasMore(); ) {
                  var i = this.pop();
                  if (r || "." != i) {
                    if (!o.StringUtils.isNumber(i)) {
                      this.pushBack();
                      break;
                    }
                    e += i;
                  } else (r = !0), (e += i);
                }
                return new n.PPNumberLiteralNode(
                  +e,
                  t,
                  this.exprStr.substring(t, this.pos)
                );
              }),
              (t.prototype.readStringLiteral = function() {
                var t = this.pos;
                this.skipWhiteSpaces();
                var e = this.pop(),
                  r = this.readEnclosedString(e),
                  i = new n.PPStringLiteralNode(
                    r.content,
                    t,
                    this.exprStr.substring(t, this.pos)
                  );
                return (
                  r.errors.forEach(function(t) {
                    return i.errors.push(t);
                  }),
                  i
                );
              }),
              (t.prototype.readLayerLiteral = function() {
                var t = this.pos;
                this.skipWhiteSpaces();
                var e = this.pop(),
                  r = this.readEnclosedString(e),
                  i = new n.PPLayerLiteralNode(
                    r.content,
                    t,
                    this.exprStr.substring(t, this.pos)
                  );
                return (
                  r.errors.forEach(function(t) {
                    return i.errors.push(t);
                  }),
                  i
                );
              }),
              (t.prototype.readColorLiteral = function() {
                var t = this.pos;
                this.skipWhiteSpaces(), this.pop();
                var e = this.readNumberAndAlphaSequence(),
                  r = null,
                  o = [];
                if (/^[0-9a-fA-F]{6}$/.test(e)) {
                  var a = parseInt(e.substr(0, 2), 16),
                    u = parseInt(e.substr(2, 2), 16),
                    c = parseInt(e.substr(4, 2), 16);
                  r = new s.PPColor(a, u, c);
                } else
                  o.push(
                    i.PPExprParseError.error(
                      t,
                      i.ParseErrorCodes.INVALID_COLOR_LITERAL,
                      ["#" + e]
                    )
                  );
                var l = new n.PPColorLiteralNode(
                  r,
                  t,
                  this.exprStr.substring(t, this.pos)
                );
                return (
                  o.forEach(function(t) {
                    return l.errors.push(t);
                  }),
                  l
                );
              }),
              (t.prototype.readOperator = function() {
                var t = this.pos;
                this.skipWhiteSpaces();
                var e = this.pop();
                return new n.PPOperatorNode(
                  e,
                  t,
                  this.exprStr.substring(t, this.pos)
                );
              }),
              (t.prototype.readNotParsed = function() {
                var t = this.pos;
                this.skipWhiteSpaces();
                var e = this.pos;
                return (
                  this.readInvalid(),
                  new n.PPNotParsedString(
                    t,
                    e,
                    this.exprStr.substring(t, this.pos)
                  )
                );
              }),
              (t.prototype.readNumberAndAlphaSequence = function() {
                for (var t = ""; this.hasMore(); ) {
                  var e = this.lookAhead(!1);
                  if (!o.StringUtils.isNumber(e) && !o.StringUtils.isAlpha(e))
                    break;
                  t += this.pop();
                }
                return t;
              }),
              (t.prototype.readInvalid = function() {
                for (var t = ""; this.hasMore(); ) {
                  var e = this.lookAhead(!1);
                  if (
                    o.StringUtils.isWhiteSpace(e) ||
                    o.StringUtils.isAlpha(e) ||
                    o.StringUtils.isNumber(e) ||
                    !(u.indexOf(e) < 0)
                  )
                    break;
                  t += this.pop();
                }
                return t;
              }),
              (t.prototype.readEnclosedString = function(t) {
                for (var e = new l(), r = !1, n = !1; this.hasMore(); ) {
                  var o = this.pop();
                  if (r)
                    (e.content +=
                      "n" == o ? "\n" : '"' == o ? '"' : "\\" == o ? "\\" : o),
                      (r = !1);
                  else {
                    if (o === t) {
                      n = !0;
                      break;
                    }
                    "\\" === o ? (r = !0) : (e.content += o);
                  }
                }
                return (
                  n ||
                    e.errors.push(
                      i.PPExprParseError.error(
                        this.pos,
                        i.ParseErrorCodes.NOT_CLOSED,
                        [t]
                      )
                    ),
                  e
                );
              }),
              (t.prototype.skipWhiteSpaces = function() {
                for (
                  ;
                  o.StringUtils.isWhiteSpace(this.exprStr.charAt(this.pos));

                )
                  this.pos++;
              }),
              (t.prototype.lookAhead = function(t) {
                for (var e = this.pos; e < this.exprStr.length; e++) {
                  var r = this.exprStr[e];
                  if (!t || !o.StringUtils.isWhiteSpace(r)) return r;
                }
                return null;
              }),
              (t.prototype.pop = function() {
                return this.hasMore()
                  ? this.exprStr.charAt(this.pos++)
                  : (a.Logger.w("Attempting to pop on EOF"), null);
              }),
              (t.prototype.pushBack = function() {
                this.pos--;
              }),
              t
            );
          })();
        e.ExprTokenReader = c;
        var l = (function() {
          return function() {
            (this.content = ""), (this.errors = []);
          };
        })();
      },
      function(t, e, r) {
        "use strict";
        function n(t, e) {
          return (
            t instanceof i.PPOperatorNode && (null == e || t.priority == e)
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(36),
          o = r(3),
          s = (function() {
            function t(t, e) {
              void 0 === t && (t = null),
                void 0 === e && (e = null),
                (this.nodes = []),
                (this.arguments = []),
                (this.commas = []),
                (this.dotOperator = null),
                (this.functionName = t),
                (this.openToken = e);
            }
            return (
              (t.prototype.push = function(t) {
                if (this.dotOperator && this.mergeDotOperation(t)) return !0;
                if (t instanceof i.PPOperatorNode)
                  return "," === t.operator
                    ? !!this.functionName &&
                        (this.arguments.push(this.combineNodes()),
                        this.commas.push(t),
                        !0)
                    : "." === t.operator
                      ? ((this.dotOperator = t), !0)
                      : !!t.isBinaryOperator() && (this.nodes.push(t), !0);
                if (t instanceof i.PPExprParseNode) {
                  var e = this.getLastNode();
                  return !(
                    (e && e instanceof i.PPExprParseNode) ||
                    (this.nodes.push(t), 0)
                  );
                }
                return (
                  t instanceof i.PPIdentifierNode &&
                  this.push(new i.PPVariableNode(t))
                );
              }),
              (t.prototype.closable = function() {
                return !!this.openToken;
              }),
              (t.prototype.popFunctionName = function() {
                var t = this.getLastNode();
                return t && t instanceof i.PPVariableNode
                  ? (this.nodes.pop(), t.identifier)
                  : null;
              }),
              (t.prototype.toExpr = function(t) {
                if ((void 0 === t && (t = null), null === this.functionName)) {
                  var e = this.combineNodes();
                  return this.openToken
                    ? new i.PPParenthesisNode(this.openToken, e, t)
                    : e;
                }
                var r = this.combineNodes();
                return (
                  r && this.arguments.push(r),
                  new i.PPFunctionNode(
                    this.functionName,
                    this.openToken,
                    new i.PPFunctionNodeArgs(this.arguments, this.commas),
                    t
                  )
                );
              }),
              (t.prototype.combineNodes = function() {
                if (
                  (this.dotOperator && this.mergeDotOperation(null),
                  0 == this.nodes.length)
                )
                  return null;
                var t = this.mergeUnaryOperations(),
                  e = this.mergeBinaryOperations(t, 0, t.length);
                return (this.nodes.length = 0), e;
              }),
              (t.prototype.getLastNode = function() {
                return 0 === this.nodes.length
                  ? null
                  : this.nodes[this.nodes.length - 1];
              }),
              (t.prototype.mergeDotOperation = function(t) {
                var e = this.getLastNode(),
                  r = null;
                e instanceof i.PPExprParseNode && (this.nodes.pop(), (r = e));
                var n = null;
                return (
                  t instanceof i.PPIdentifierNode && (n = t),
                  this.nodes.push(new i.PPPropertyNode(r, this.dotOperator, n)),
                  (this.dotOperator = null),
                  !!n
                );
              }),
              (t.prototype.mergeUnaryOperations = function() {
                for (var t = [], e = 0; e < this.nodes.length; e++) {
                  var r = this.nodes[e],
                    n = 0 == e ? null : this.nodes[e - 1],
                    o = e >= this.nodes.length - 1 ? null : this.nodes[e + 1];
                  r instanceof i.PPOperatorNode &&
                  r.isUnaryOperator() &&
                  (!n || n instanceof i.PPOperatorNode) &&
                  o &&
                  o instanceof i.PPExprParseNode
                    ? (t.push(new i.PPUnaryOperationNode(r, o)), e++)
                    : t.push(r);
                }
                return t;
              }),
              (t.prototype.mergeBinaryOperations = function(t, e, r) {
                var s = r - e;
                if (0 == s) return null;
                if (1 == s) {
                  var a = t[e];
                  return a instanceof i.PPExprParseNode
                    ? a
                    : a instanceof i.PPOperatorNode
                      ? new i.PPBinaryOperationNode(a, null, null)
                      : (o.Logger.w("Unexpected code branch", a), null);
                }
                for (
                  var u = 0, c = i.PPOperatorNode.PRIORITIES_FROM_LOW;
                  u < c.length;
                  u++
                )
                  for (var l = c[u], h = r - 1; h >= e; h--)
                    if (n(t[h], l))
                      return this.mergeBinaryOperation(t, e, r, h);
              }),
              (t.prototype.mergeBinaryOperation = function(t, e, r, n) {
                var o = this.mergeBinaryOperations(t, e, n),
                  s = this.mergeBinaryOperations(t, n + 1, r),
                  a = t[n];
                return new i.PPBinaryOperationNode(a, o, s);
              }),
              t
            );
          })();
        e.PPExprParseContext = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(91),
          o = r(135),
          s = (function() {
            function t(t, e) {
              this.springRK4 = new o.SpringRK4(t, e);
            }
            return (
              (t.prototype.getNext = function(t) {
                return this.springRK4.next(t / 1e3);
              }),
              (t.prototype.isFinished = function() {
                return this.springRK4.isFinished();
              }),
              t
            );
          })(),
          a = (function(t) {
            function e(e, r, n, i) {
              return t.call(this, new s(e, r), n, i) || this;
            }
            return n(e, t), e;
          })(i.PopulatingEasingFunc);
        e.SpringEasingFunc = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
            function t() {}
            return (
              (t.prototype.reset = function(t, e) {
                (this.x = t), (this.v = e), (this.dx = 0), (this.dv = 0);
              }),
              t
            );
          })(),
          i = (function() {
            function t(t, e) {
              (this.state = new n()),
                (this.a = new n()),
                (this.b = new n()),
                (this.c = new n()),
                (this.d = new n()),
                (this.tension = t),
                (this.friction = e),
                (this.value = 0),
                (this.velocity = 0),
                (this.finished = !1);
            }
            return (
              (t.prototype.next = function(t) {
                return this.finished
                  ? 1
                  : (this.state.reset(this.value - 1, this.velocity),
                    this.integrateState(this.state, t),
                    (this.finished =
                      Math.abs(this.state.x) < 0.01 &&
                      Math.abs(this.state.v) < 0.01),
                    (this.value = 1 + this.state.x),
                    (this.velocity = this.state.v),
                    this.value);
              }),
              (t.prototype.isFinished = function() {
                return this.finished;
              }),
              (t.prototype.integrateState = function(t, e) {
                this.evaluateState(t, this.a),
                  this.evaluateStateWithDerivative(t, 0.5 * e, this.a, this.b),
                  this.evaluateStateWithDerivative(t, 0.5 * e, this.b, this.c),
                  this.evaluateStateWithDerivative(t, e, this.c, this.d);
                var r =
                    (1 / 6) *
                    (this.a.dx + 2 * (this.b.dx + this.c.dx) + this.d.dx),
                  n =
                    (1 / 6) *
                    (this.a.dv + 2 * (this.b.dv + this.c.dv) + this.d.dv);
                (t.x = t.x + r * e), (t.v = t.v + n * e);
              }),
              (t.prototype.evaluateState = function(t, e) {
                e.reset(0, 0),
                  (e.dx = t.v),
                  (e.dv = this.accelerationForState(t.x, t.v));
              }),
              (t.prototype.evaluateStateWithDerivative = function(t, e, r, n) {
                var i = t.x + r.dx * e,
                  o = t.v + r.dv * e;
                n.reset(0, 0),
                  (n.dx = o),
                  (n.dv = this.accelerationForState(i, o));
              }),
              (t.prototype.accelerationForState = function(t, e) {
                return -this.tension * t - this.friction * e;
              }),
              t
            );
          })();
        e.SpringRK4 = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t) {
            (this.duration = null),
              (this.looping = !1),
              (this.playTime = null),
              (this.pauseTime = null),
              (this.duration = t);
          }
          return (
            (t.prototype.reset = function() {
              (this.looping = !1),
                (this.playTime = null),
                (this.pauseTime = null);
            }),
            (t.prototype.play = function(t, e) {
              null === this.playTime
                ? ((this.playTime = t), (this.looping = e))
                : null !== this.pauseTime
                  ? ((this.playTime = this.playTime + (t - this.pauseTime)),
                    (this.pauseTime = null))
                  : e != this.looping &&
                    (e
                      ? this.isPlaying(t) || (this.playTime = t)
                      : (this.playTime = t - this.getPlayPosition(t)),
                    (this.looping = e));
            }),
            (t.prototype.pause = function(t) {
              this.isPlaying(t) && (this.pauseTime = t);
            }),
            (t.prototype.seek = function(t, e) {
              this.isPlaying(t)
                ? (this.playTime +=
                    Math.min(Math.max(e, 0), this.duration) -
                    this.getPlayPosition(t))
                : ((this.playTime = t - e), (this.pauseTime = t));
            }),
            (t.prototype.isLooping = function() {
              return this.looping;
            }),
            (t.prototype.isPlaying = function(t) {
              return !(
                null == this.playTime ||
                this.duration <= 0 ||
                (null != this.pauseTime && t >= this.pauseTime) ||
                !(this.looping
                  ? t >= this.playTime
                  : t >= this.playTime && t < this.playTime + this.duration)
              );
            }),
            (t.prototype.getPlayPosition = function(t) {
              return null == this.playTime
                ? 0
                : this.duration <= 0
                  ? 0
                  : null != this.pauseTime && t > this.pauseTime
                    ? this.getPlayPosition(this.pauseTime)
                    : this.looping
                      ? t < this.playTime
                        ? 0
                        : (t - this.playTime) % this.duration
                      : t < this.playTime
                        ? 0
                        : t > this.playTime + this.duration
                          ? this.duration
                          : t - this.playTime;
            }),
            t
          );
        })();
        e.PPPlayState = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {}
          return (
            (t.generateId = function() {
              return "generated-" + this.lastId++;
            }),
            (t.lastId = 0),
            t
          );
        })();
        e.IdGenerator = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(21),
          i = r(57),
          o = r(24),
          s = r(25),
          a = r(43),
          u = (function() {
            function t(t) {
              (this.layerMap = {}),
                (this.layerMapByName = {}),
                this.buildLayerMap(t);
            }
            return (
              (t.prototype.addLayer = function(t) {
                this.buildLayerMap(t);
              }),
              (t.prototype.findLayerById = function(t) {
                return this.layerMap[t] || null;
              }),
              (t.prototype.findLayerByName = function(t) {
                return this.layerMapByName[t] || null;
              }),
              (t.prototype.readLayer = function(t, e) {
                var r = t[e],
                  n = this.layerMap[r];
                if (n) return n;
                throw new Error("Layer not found: layerId=" + r);
              }),
              (t.prototype.readRectLayer = function(t, e) {
                var r = this.readLayer(t, e);
                if (r instanceof i.RectLayer) return r;
                throw new Error("Rect layer required");
              }),
              (t.prototype.readContainerLayer = function(t, e) {
                var r = this.readLayer(t, e);
                if (r instanceof n.ContainerLayer) return r;
                throw new Error("Container layer required");
              }),
              (t.prototype.readVideoLayer = function(t, e) {
                var r = this.readLayer(t, e);
                if (r instanceof o.VideoLayer) return r;
                throw new Error("Video layer required");
              }),
              (t.prototype.readTextLayer = function(t, e) {
                var r = this.readLayer(t, e);
                if (r instanceof s.TextLayer) return r;
                throw new Error("Text layer required");
              }),
              (t.prototype.readTextInputLayer = function(t, e) {
                var r = this.readLayer(t, e);
                if (r instanceof a.TextInputLayer) return r;
                throw new Error("TextInput layer required");
              }),
              (t.prototype.readProperty = function(t, e, r) {
                var n,
                  i = this.readLayer(t, e),
                  o = t[r];
                if (
                  (n =
                    "fillColor" === o
                      ? i.getMainColorProperty()
                      : "fillOpacity" === o
                        ? i.getMainColorOpacityProperty()
                        : i.getPropertyByName(o))
                )
                  return n;
                throw new Error("Property not found. propertyName=" + o);
              }),
              (t.prototype.readNumberProperty = function(t, e, r) {
                var n = this.readLayer(t, e),
                  i = t[r],
                  o = n.getNumberPropertyByName(i);
                if (o) return o;
                throw new Error("Property not found. propertyName=" + i);
              }),
              (t.prototype.buildLayerMap = function(t) {
                if (
                  ((this.layerMap[t.id] = t),
                  t.name &&
                    !this.layerMapByName[t.name] &&
                    (this.layerMapByName[t.name] = t),
                  t instanceof n.ContainerLayer)
                )
                  for (var e = 0, r = t.children; e < r.length; e++) {
                    var i = r[e];
                    this.buildLayerMap(i);
                  }
              }),
              t
            );
          })();
        e.LayerRefReader = u;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(92),
          i = r(52),
          o = r(73),
          s = r(140),
          a = r(0),
          u = r(13),
          c = r(60),
          l = r(141),
          h = r(81),
          p = r(142),
          f = r(143),
          d = r(74),
          y = r(144),
          g = r(75),
          v = r(10),
          m = r(145),
          E = r(76),
          P = r(67),
          T = r(69),
          _ = r(46),
          b = r(35),
          O = r(146),
          w = r(147),
          R = r(96),
          x = r(17),
          A = r(55),
          S = r(32),
          N = r(78),
          C = r(148),
          L = r(149),
          I = r(150),
          M = (function() {
            function t(t, e, r, n) {
              (this.layerRefReader = t),
                (this.responseReader = e),
                (this.varTable = r),
                (this.engineObserver = n);
            }
            return (
              (t.prototype.readTrigger = function(t, e) {
                var r = t.type;
                if ("xid_tap" == r) {
                  var n = this.readTapTrigger(t, e);
                  return (
                    !b.BrowserDetector.supportsMultiTouch() &&
                      n.getFingerCount() > 1 &&
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_FINGER_COUNT
                      ),
                    n
                  );
                }
                if ("xid_double_tap" == r) {
                  n = this.readDoubleTapTrigger(t, e);
                  return (
                    !b.BrowserDetector.supportsMultiTouch() &&
                      n.getFingerCount() > 1 &&
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_FINGER_COUNT
                      ),
                    n
                  );
                }
                if ("xid_long_press" == r) {
                  n = this.readLongPressTrigger(t, e);
                  return (
                    !b.BrowserDetector.supportsMultiTouch() &&
                      n.fingerCount > 1 &&
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_FINGER_COUNT
                      ),
                    n
                  );
                }
                if ("xid_touch_down" == r) {
                  n = this.readTouchDownTrigger(t, e);
                  return (
                    !b.BrowserDetector.supportsMultiTouch() &&
                      n.fingerCount > 1 &&
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_FINGER_COUNT
                      ),
                    n
                  );
                }
                if ("xid_touch_up" == r) {
                  n = this.readTouchUpTrigger(t, e);
                  return (
                    !b.BrowserDetector.supportsMultiTouch() &&
                      n.fingerCount > 1 &&
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_FINGER_COUNT
                      ),
                    n
                  );
                }
                if ("xid_mouse_over" == r)
                  return this.readMouseOverTrigger(t, e);
                if ("xid_mouse_out" == r) return this.readMouseOutTrigger(t, e);
                if ("xid_key" == r) return this.readKeyTrigger(t, e);
                if ("xid_focus" == r) return this.readFocusTrigger(t, e);
                if ("xid_return_key" == r)
                  return this.readReturnKeyTrigger(t, e);
                if ("xid_fling" == r) return this.readFlingTrigger(t, e);
                if ("xid_drag" == r) {
                  n = this.readDragTrigger(t);
                  return (
                    !b.BrowserDetector.supportsMultiTouch() &&
                      n.getFingerCount() > 1 &&
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_FINGER_COUNT
                      ),
                    n
                  );
                }
                if ("xid_pinch" == r)
                  return (
                    b.BrowserDetector.supportsMultiTouch() ||
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_PINCH_TRIGGER
                      ),
                    this.readPinchTrigger(t)
                  );
                if ("xid_rotate" == r)
                  return (
                    b.BrowserDetector.supportsMultiTouch() ||
                      e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_ROTATE_TRIGGER
                      ),
                    this.readRotateTrigger(t)
                  );
                if ("xid_pull" == r) return this.readPullTrigger(t, e);
                if ("xid_on_load" == r) return this.readOnLoadTrigger(t, e);
                if ("xid_range" == r) return this.readRangeTrigger(t, e);
                if ("xid_chain" == r) return this.readChainTrigger(t);
                if ("xid_change" == r) return this.readChangeTrigger(t, e);
                if ("xid_receive" == r) return this.readReceiveTrigger(t, e);
                throw ("xid_tilt" === r
                  ? e.addUnsupportedFeature(
                      _.PPPieReadResult.FEATURE_TILT_TRIGGER
                    )
                  : "xid_proximity" === r
                    ? e.addUnsupportedFeature(
                        _.PPPieReadResult.FEATURE_PROXIMITY_TRIGGER
                      )
                    : "xid_compass" === r
                      ? e.addUnsupportedFeature(
                          _.PPPieReadResult.FEATURE_COMPASS_TRIGGER
                        )
                      : "xid_sound" === r
                        ? e.addUnsupportedFeature(
                            _.PPPieReadResult.FEATURE_SOUND_TRIGGER
                          )
                        : "xid_force_touch" === r &&
                          e.addUnsupportedFeature(
                            _.PPPieReadResult.FEATURE_TOUCH3D_TRIGGER
                          ),
                new Error("Unhandled trigger type: " + r));
              }),
              (t.prototype.readTapTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  i = new n.TapTrigger(
                    t.id,
                    this.readLayer(t),
                    this.responseReader.readOneTimeResponses(t, r, e)
                  );
                return i.setFingerCount(this.readFingerCount(t)), i;
              }),
              (t.prototype.readDoubleTapTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = new l.DoubleTapTrigger(
                    t.id,
                    this.readLayer(t),
                    this.responseReader.readOneTimeResponses(t, r, e)
                  );
                return n.setFingerCount(this.readFingerCount(t)), n;
              }),
              (t.prototype.readLongPressTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = new f.LongPressTrigger(
                    t.id,
                    this.readLayer(t),
                    this.responseReader.readOneTimeResponses(t, r, e)
                  );
                return (
                  (n.fingerCount = this.readFingerCount(t)),
                  (n.pressingTime = u.readTime(
                    t,
                    "pressingTime",
                    n.pressingTime
                  )),
                  n
                );
              }),
              (t.prototype.readTouchDownTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = new h.TouchDownTrigger(
                    t.id,
                    this.readLayer(t),
                    this.responseReader.readOneTimeResponses(t, r, e)
                  );
                return (n.fingerCount = this.readFingerCount(t)), n;
              }),
              (t.prototype.readTouchUpTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = new p.TouchUpTrigger(
                    t.id,
                    this.readLayer(t),
                    this.responseReader.readOneTimeResponses(t, r, e)
                  );
                return (n.fingerCount = this.readFingerCount(t)), n;
              }),
              (t.prototype.readMouseOverTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id);
                return new O.MouseOverTrigger(
                  t.id,
                  this.readLayer(t),
                  this.responseReader.readOneTimeResponses(t, r, e)
                );
              }),
              (t.prototype.readMouseOutTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id);
                return new w.MouseOutTrigger(
                  t.id,
                  this.readLayer(t),
                  this.responseReader.readOneTimeResponses(t, r, e)
                );
              }),
              (t.prototype.readKeyTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = u.requireString(t, "keySource");
                if ("KEYBOARD" === n) {
                  var i = u.requireString(t, "key");
                  return new N.KeyTrigger(
                    i,
                    this.responseReader.readOneTimeResponses(t, r, e)
                  );
                }
                throw new Error("Unsupported keySource: " + n);
              }),
              (t.prototype.readFocusTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = this.layerRefReader.readTextInputLayer(t, "layerId"),
                  i = "OUT" !== u.requireString(t, "focusType");
                return new C.FocusTrigger(
                  n,
                  i,
                  this.responseReader.readOneTimeResponses(t, r, e)
                );
              }),
              (t.prototype.readReturnKeyTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = this.layerRefReader.readTextInputLayer(t, "layerId");
                return new L.ReturnKeyTrigger(
                  n,
                  this.responseReader.readOneTimeResponses(t, r, e)
                );
              }),
              (t.prototype.readFlingTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = new y.FlingTrigger(
                    t.id,
                    this.readLayer(t),
                    this.responseReader.readOneTimeResponses(t, r, e)
                  );
                return (n.direction = a.stringToMoveDir(t.direction)), n;
              }),
              (t.prototype.readDragTrigger = function(t) {
                var e = new i.DragTrigger(t.id, this.readLayer(t));
                return (
                  e.setFingerCount(this.readFingerCount(t)),
                  (e.responses = this.responseReader.readDragResponses(t)),
                  e
                );
              }),
              (t.prototype.readPinchTrigger = function(t) {
                var e = new P.PinchTrigger(t.id, this.readLayer(t));
                return (
                  (e.responses = this.responseReader.readPinchResponses(t)), e
                );
              }),
              (t.prototype.readRotateTrigger = function(t) {
                var e = new T.RotateTrigger(t.id, this.readLayer(t));
                return (
                  (e.responses = this.responseReader.readRotateResponses(t)), e
                );
              }),
              (t.prototype.readPullTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = a.stringToMoveDir(t.direction),
                  i = u.requireNumber(t, "distance"),
                  o = new s.PullComponent(
                    t.id,
                    this.readLayer(t),
                    n,
                    i,
                    this.responseReader.readOneTimeResponses(t, r, e)
                  ),
                  l = u.readEasing(t, "success");
                o.successDde = new c.DDE(
                  0,
                  s.PullComponent.DEFAULT_SUCCESS_DURATION,
                  l
                );
                var h = t.overPullBehavior;
                return (
                  (o.excessMoveRatio =
                    "STOP" == h ? 0 : "FOLLOW_WITH_RESISTANCE" == h ? 0.5 : 1),
                  o
                );
              }),
              (t.prototype.readOnLoadTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = u.readBoolean(t, "onlyOnReset", !0),
                  i = u.readBoolean(t, "beforeTransition", !1);
                return new d.OnLoadTrigger(
                  this.responseReader.readOneTimeResponses(t, r, e),
                  n,
                  i
                );
              }),
              (t.prototype.readRangeTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = this.readNumberProvider(t),
                  i = this.readRange(t, n.getNumberUnit()),
                  o = this.responseReader.readOneTimeResponses(t, r, e);
                return new g.RangeTrigger(n, i, o);
              }),
              (t.prototype.readChainTrigger = function(t) {
                for (
                  var e = new o.ChainTrigger(this.readNumberProvider(t)),
                    r = 0,
                    n = this.responseReader.readChainResponses(t);
                  r < n.length;
                  r++
                ) {
                  var i = n[r];
                  e.addResponse(i);
                }
                return e;
              }),
              (t.prototype.readChangeTrigger = function(t, e) {
                var r,
                  n = new I.PPExprEnv(this.engineObserver, t.id),
                  i = u.requireString(t, "targetType");
                if ("VARIABLE" === i) {
                  var o = this.varTable.requireVariable(
                    u.requireString(t, "varName")
                  );
                  r = R.changeDetectorForVariable(o);
                } else {
                  if ("PROPERTY" !== i)
                    throw new Error("Unexpected targetType:" + i);
                  var s = u.requireString(t, "propertyName");
                  if ("text" === s) {
                    var a = this.layerRefReader.readTextLayer(t, "layerId");
                    r = new R.PPStringChangeDetector(a.getStringProvider());
                  } else {
                    var c = this.layerRefReader.readProperty(
                      t,
                      "layerId",
                      "propertyName"
                    );
                    if (c instanceof x.NumberProperty)
                      r = new R.PPNumberChangeDetector(c);
                    else {
                      if (!(c instanceof S.ColorProperty))
                        throw new Error("Unexpected property type: " + s);
                      r = new R.PPColorChangeDetector(c);
                    }
                  }
                }
                var l = this.responseReader.readOneTimeResponses(t, n, e);
                return new A.ChangeTrigger(r, l);
              }),
              (t.prototype.readReceiveTrigger = function(t, e) {
                var r = new I.PPExprEnv(this.engineObserver, t.id),
                  n = this.responseReader.readOneTimeResponses(t, r, e),
                  i = u.readString(t, "storeVarName", null),
                  o = null;
                i && (o = this.varTable.requireVariable(i));
                var s = new E.ReceiveTrigger(n, o);
                return (s.channel = t.channel), (s.messageId = t.messageId), s;
              }),
              (t.prototype.readLayer = function(t) {
                return this.layerRefReader.readLayer(t, "layerId");
              }),
              (t.prototype.readRange = function(t, e) {
                var r = t.rangeType;
                switch (r) {
                  case "BT":
                    var n = u.requireNumberOrTime(t, "rangeFrom"),
                      i = u.requireNumberOrTime(t, "rangeTo");
                    return e == v.Unit.DEGREE
                      ? i >= n
                        ? new m.BetweenNumberRange(n, i)
                        : new m.NotBetweenNumberRange(i, n)
                      : new m.BetweenNumberRange(n, i);
                  case "NBT":
                    return new m.NotBetweenNumberRange(
                      u.requireNumberOrTime(t, "rangeFrom"),
                      u.requireNumberOrTime(t, "rangeTo")
                    );
                  case "GTE":
                    return new m.GteNumberRange(
                      u.requireNumberOrTime(t, "rangeFrom")
                    );
                  case "LTE":
                    return new m.LteNumberRange(
                      u.requireNumberOrTime(t, "rangeTo")
                    );
                  default:
                    throw new Error("Unhandled rangeType: " + r);
                }
              }),
              (t.prototype.readFingerCount = function(t) {
                return Math.min(
                  Math.max(u.readNumber(t, "fingerCount", 1), 1),
                  5
                );
              }),
              (t.prototype.readNumberProvider = function(t) {
                var e = t.targetType || "PROPERTY";
                if ("PROPERTY" === e)
                  return this.layerRefReader.readNumberProperty(
                    t,
                    "layerId",
                    "propertyName"
                  );
                if ("VARIABLE" === e)
                  return this.varTable.getNumberVariable(
                    u.requireString(t, "varName")
                  );
                throw new Error("Unexpected targetType: " + e);
              }),
              t
            );
          })();
        e.TriggerReader = M;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(18),
          o = r(4),
          s = r(42),
          a = r(0),
          u = r(19),
          c = r(60),
          l = r(15),
          h = r(6),
          p = r(7),
          f = (function(t) {
            function e(r, n, i, o, l) {
              var h = t.call(this, r, n) || this;
              return (
                (h.excessMoveRatio = 0),
                (h.successDde = new c.DDE(
                  0,
                  e.DEFAULT_SUCCESS_DURATION,
                  e.DEFAULT_SUCCESS_EASING
                )),
                (h.cancelDde = new c.DDE(
                  0,
                  e.DEFAULT_CANCEL_DURATION,
                  e.DEFAULT_CANCEL_EASING
                )),
                (h.change = new u.NumberChange()),
                (h.dir = i),
                (h.distance = o),
                (h.responses = l),
                (h.axis = a.moveDirToAxis(i)),
                (h.property = n.getPositionProp(h.axis)),
                (h.dragDetector = new s.DragDetector(
                  a.axisToDragAxis(h.axis),
                  h
                )),
                (h.curDir = a.moveDirToScalarDir(i)),
                (h.startPosition = h.property.curVal()),
                (h.endPosition = h.startPosition + h.curDir * o),
                h
              );
            }
            return (
              n(e, t),
              (e.prototype.onTouchEvent = function(t) {
                this.dragDetector.onTouchEvent(t);
              }),
              (e.prototype.init = function(e) {
                t.prototype.init.call(this, e), this.responses.init(e);
              }),
              (e.prototype.reset = function() {
                this.dragDetector.reset();
              }),
              (e.prototype.getTouchEventUsageType = function() {
                return this.axis == a.Axis2D.X
                  ? o.TouchEventUsageType.MOVE_HORIZONTAL
                  : this.axis == a.Axis2D.Y
                    ? o.TouchEventUsageType.MOVE_VERTICAL
                    : o.TouchEventUsageType.NONE;
              }),
              (e.prototype.onDragTouchDown = function(t) {
                return !1;
              }),
              (e.prototype.onDragStart = function(t) {
                var e = this.property.curVal();
                Math.abs(e - this.startPosition) <
                Math.abs(e - this.endPosition)
                  ? (this.curDir = a.moveDirToScalarDir(this.dir))
                  : (this.curDir = -a.moveDirToScalarDir(this.dir)),
                  (this.change.increment = 0),
                  this.property.startContinuousChange(this.change, t.time),
                  this.touchSession.notifyDetected(this);
              }),
              (e.prototype.onDragMove = function(t) {
                if (Math.sign(t.drag.getValue(this.axis)) == this.curDir) {
                  var e = Math.abs(t.drag.getValue(this.axis)),
                    r = this.computeMovementForDrag(e);
                  this.change.setIncrement(this.curDir * r);
                }
              }),
              (e.prototype.onDragEnd = function(t) {
                if (
                  (this.property.endContinuousChange(this.change),
                  this.pullSucceeded(t))
                ) {
                  var e =
                    this.curDir == a.moveDirToScalarDir(this.dir)
                      ? this.endPosition
                      : this.startPosition;
                  this.property.startAnimation(
                    h.EasingSetNumberAnimation.fromDDE(
                      new p.NumberConstantExpr(e),
                      this.successDde
                    ),
                    t.time
                  ),
                    this.responses.run(t.time + this.successDde.duration);
                } else {
                  e =
                    this.curDir == a.moveDirToScalarDir(this.dir)
                      ? this.startPosition
                      : this.endPosition;
                  this.property.startAnimation(
                    h.EasingSetNumberAnimation.fromDDE(
                      new p.NumberConstantExpr(e),
                      this.cancelDde
                    ),
                    t.time
                  );
                }
              }),
              (e.prototype.computeMovementForDrag = function(t) {
                return t <= this.distance
                  ? t
                  : this.distance + this.excessMoveRatio * (t - this.distance);
              }),
              (e.prototype.pullSucceeded = function(t) {
                if (Math.sign(t.drag.getValue(this.axis)) == this.curDir) {
                  if (
                    Math.abs(t.drag.getValue(this.axis)) >
                    0.5 * this.distance
                  )
                    return !0;
                  var e = t.touchEvent.getVelocity().getValue(this.axis);
                  if (Math.sign(e) == this.curDir && Math.abs(e) >= 400)
                    return !0;
                }
                return !1;
              }),
              (e.DEFAULT_SUCCESS_DURATION = 200),
              (e.DEFAULT_CANCEL_DURATION = 200),
              (e.DEFAULT_SUCCESS_EASING = l.EasingFuncFactory.fromName(
                l.EasingFuncFactory.EASE_OUT_CUBIC
              )),
              (e.DEFAULT_CANCEL_EASING = l.EasingFuncFactory.fromName(
                l.EasingFuncFactory.EASE_OUT_CUBIC
              )),
              e
            );
          })(i.TouchTrigger);
        e.PullComponent = f;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(4),
          o = r(93),
          s = 300,
          a = (function(t) {
            function e(e, r, n) {
              var i = t.call(this, e, r, n) || this;
              return (
                (i.maxTapInterval = s),
                (i.tapCount = 0),
                (i.firstTapTime = 0),
                (i.fingerCount = 1),
                (i.timeOutTask = null),
                (i.autoEnd = !1),
                (i.tapDetector = new o.TapDetector()),
                (i.tapDetector.listener = i),
                i
              );
            }
            return (
              n(e, t),
              (e.prototype.getFingerCount = function() {
                return this.fingerCount;
              }),
              (e.prototype.setFingerCount = function(t) {
                (this.fingerCount = t),
                  (this.tapDetector.requiredFingerCount = t);
              }),
              (e.prototype.onTouchEvent = function(t) {
                this.tapDetector.onTouchEvent(t);
              }),
              (e.prototype.onTap = function(t) {
                var e = this;
                1 == this.tapCount &&
                t - this.firstTapTime <= this.maxTapInterval
                  ? (this.runResponses(t),
                    this.timeOutTask &&
                      (this.scheduler.removeTask(this.timeOutTask),
                      (this.timeOutTask = null)))
                  : ((this.tapCount = 1),
                    (this.firstTapTime = t),
                    (this.timeOutTask = {
                      doNotExpire: !0,
                      run: function() {
                        e.touchSession.notifyCanceled(e),
                          (e.timeOutTask = null);
                      },
                      shouldStopForVariable: function() {
                        return !1;
                      },
                      shouldStopForLayer: function() {
                        return !1;
                      }
                    }),
                    this.scheduler.scheduleTask(
                      this.timeOutTask,
                      t,
                      this.maxTapInterval,
                      null
                    ));
              }),
              (e.prototype.reset = function() {}),
              (e.prototype.getTouchEventUsageType = function() {
                return i.TouchEventUsageType.TAP;
              }),
              e
            );
          })(r(26).OneTimeTouchTrigger);
        e.DoubleTapTrigger = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = r(4),
          s = r(26);
        !(function(t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.TOUCHED = 1)] = "TOUCHED"),
            (t[(t.RELEASING = 2)] = "RELEASING"),
            (t[(t.CANCELED = 3)] = "CANCELED");
        })(i || (i = {}));
        var a = (function(t) {
          function e(e, r, n) {
            var o = t.call(this, e, r, n) || this;
            return (o.fingerCount = 1), (o.state = i.NONE), o;
          }
          return (
            n(e, t),
            (e.prototype.onTouchEvent = function(t) {
              t.lastAction == o.TouchEventAction.DOWN
                ? this.state == i.NONE
                  ? t.getTouchCount() == this.fingerCount
                    ? (this.state = i.TOUCHED)
                    : t.getTouchCount() > this.fingerCount &&
                      (this.state = i.CANCELED)
                  : (this.state = i.CANCELED)
                : t.lastAction == o.TouchEventAction.UP &&
                  (0 == t.getTouchCount()
                    ? ((this.state != i.TOUCHED && this.state != i.RELEASING) ||
                        this.runResponses(t.lastActionTime),
                      (this.state = i.NONE))
                    : this.state == i.TOUCHED && (this.state = i.RELEASING));
            }),
            (e.prototype.reset = function() {
              this.state = i.NONE;
            }),
            (e.prototype.getTouchEventUsageType = function() {
              return o.TouchEventUsageType.TOUCH_UP;
            }),
            e
          );
        })(s.OneTimeTouchTrigger);
        e.TouchUpTrigger = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = r(4),
          s = r(26),
          a = r(2),
          u = 500;
        !(function(t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.PRESSING = 1)] = "PRESSING"),
            (t[(t.FIRED = 2)] = "FIRED"),
            (t[(t.CANCELED = 3)] = "CANCELED");
        })(i || (i = {}));
        var c = (function(t) {
          function e(e, r, n) {
            var o = t.call(this, e, r, n) || this;
            return (
              (o.fingerCount = 1), (o.pressingTime = u), (o.state = i.NONE), o
            );
          }
          return (
            n(e, t),
            (e.prototype.getTouchEventUsageType = function() {
              return o.TouchEventUsageType.LONG_PRESS;
            }),
            (e.prototype.reset = function() {
              (this.state = i.NONE), this.cancelTimer();
            }),
            (e.prototype.onTouchEvent = function(t) {
              t.lastAction == o.TouchEventAction.DOWN ||
              t.lastAction == o.TouchEventAction.UP
                ? this.onTouchChange(t)
                : t.lastAction == o.TouchEventAction.MOVE &&
                  ((this.state != i.NONE && this.state != i.PRESSING) ||
                    (this.touchMovedSignificantly(t) &&
                      this.state == i.PRESSING &&
                      this.cancelTimer()));
            }),
            (e.prototype.onTouchChange = function(t) {
              var e = t.getTouchCount();
              this.state == i.NONE
                ? e == this.fingerCount
                  ? ((this.state = i.PRESSING),
                    this.resetTouchPoint(t),
                    this.startTimer(t))
                  : e > this.fingerCount
                    ? (this.state = i.CANCELED)
                    : this.resetTouchPoint(t)
                : this.state == i.PRESSING
                  ? (this.cancelTimer(),
                    (this.state = 0 == e ? i.NONE : i.CANCELED))
                  : (this.state != i.FIRED && this.state != i.CANCELED) ||
                    (0 == e && (this.state = i.NONE));
            }),
            (e.prototype.resetTouchPoint = function(t) {
              this.initialTouchPoint = new a.Point(t.focus.x, t.focus.y);
            }),
            (e.prototype.startTimer = function(t) {
              var e = this;
              (this.scheduledTask = {
                doNotExpire: !0,
                run: function(t, r) {
                  e.runResponses(t), (e.scheduledTask = null);
                },
                shouldStopForLayer: function(t) {
                  return !1;
                },
                shouldStopForVariable: function(t) {
                  return !1;
                }
              }),
                this.scheduler.scheduleTask(
                  this.scheduledTask,
                  t.lastActionTime,
                  this.pressingTime
                );
            }),
            (e.prototype.cancelTimer = function() {
              this.scheduledTask &&
                this.scheduler.removeTask(this.scheduledTask);
            }),
            (e.prototype.touchMovedSignificantly = function(t) {
              if (this.initialTouchPoint) {
                var e = t.focus.x,
                  r = t.focus.y;
                return (
                  Math.abs(this.initialTouchPoint.x - e) > 20 ||
                  Math.abs(this.initialTouchPoint.y - r) > 20
                );
              }
              return !1;
            }),
            e
          );
        })(s.OneTimeTouchTrigger);
        e.LongPressTrigger = c;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(4),
          o = r(26),
          s = r(2),
          a = r(0),
          u = 50,
          c = 100,
          l = (function(t) {
            function e(e, r, n) {
              var i = t.call(this, e, r, n) || this;
              return (
                (i.direction = a.MoveDir.RIGHT),
                (i.minDistance = u),
                (i.successSpeed = c),
                (i.startPoint = new s.Point(0, 0)),
                i
              );
            }
            return (
              n(e, t),
              (e.prototype.onTouchEvent = function(t) {
                t.lastAction == i.TouchEventAction.DOWN
                  ? this.startPoint.copyFrom(t.focus)
                  : t.lastAction == i.TouchEventAction.UP &&
                    this.meetsFlingRequirements(t) &&
                    this.runResponses(t.lastActionTime);
              }),
              (e.prototype.reset = function() {}),
              (e.prototype.getTouchEventUsageType = function() {
                return i.TouchEventUsageType.FLING;
              }),
              (e.prototype.meetsFlingRequirements = function(t) {
                var e = t.getVelocity();
                switch (this.direction) {
                  case a.MoveDir.LEFT:
                    return (
                      t.focus.x - this.startPoint.x <= -this.minDistance &&
                      e.x <= -this.successSpeed
                    );
                  case a.MoveDir.RIGHT:
                    return (
                      t.focus.x - this.startPoint.x >= this.minDistance &&
                      e.x >= this.successSpeed
                    );
                  case a.MoveDir.UP:
                    return (
                      t.focus.y - this.startPoint.y <= -this.minDistance &&
                      e.y <= -this.successSpeed
                    );
                  case a.MoveDir.DOWN:
                    return (
                      t.focus.y - this.startPoint.y >= this.minDistance &&
                      e.y >= this.successSpeed
                    );
                }
                return !1;
              }),
              e
            );
          })(o.OneTimeTouchTrigger);
        e.FlingTrigger = l;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t) {
            this.fromValue = t;
          }
          return (
            (t.prototype.isInRange = function(t) {
              return t >= this.fromValue;
            }),
            t
          );
        })();
        e.GteNumberRange = n;
        var i = (function() {
          function t(t) {
            this.toValue = t;
          }
          return (
            (t.prototype.isInRange = function(t) {
              return t <= this.toValue;
            }),
            t
          );
        })();
        e.LteNumberRange = i;
        var o = (function() {
          function t(t, e) {
            (this.fromValue = t), (this.toValue = e);
          }
          return (
            (t.prototype.isInRange = function(t) {
              return t >= this.fromValue && t <= this.toValue;
            }),
            t
          );
        })();
        e.BetweenNumberRange = o;
        var s = (function() {
          function t(t, e) {
            (this.fromValue = t), (this.toValue = e);
          }
          return (
            (t.prototype.isInRange = function(t) {
              return t <= this.fromValue || t >= this.toValue;
            }),
            t
          );
        })();
        e.NotBetweenNumberRange = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.reset = function() {}),
            (e.prototype.onMouseOver = function(t) {
              return this.runResponses(t.time), !1;
            }),
            (e.prototype.onMouseOut = function(t) {
              return !1;
            }),
            (e.prototype.onMouseMove = function(t) {
              return !1;
            }),
            e
          );
        })(r(95).AbstractOneTimeMouseTrigger);
        e.MouseOverTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            n(e, t),
            (e.prototype.reset = function() {}),
            (e.prototype.onMouseOver = function(t) {
              return !0;
            }),
            (e.prototype.onMouseOut = function(t) {
              this.runResponses(t.time);
            }),
            e
          );
        })(r(95).AbstractOneTimeMouseTrigger);
        e.MouseOutTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.layer = e),
              (i.triggersOnFocused = r),
              (i.responses = n),
              e.addTextInputEventListener({
                onFocusStatusChanged: function(t, e, r) {
                  e == i.triggersOnFocused && i.responses.run(r);
                }
              }),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.reset = function() {}),
            e
          );
        })(r(16).Trigger);
        e.FocusTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (
              (n.layer = e),
              (n.responses = r),
              e.addTextInputEventListener({
                onReturnKeyPressed: function(t, e) {
                  n.responses.run(e);
                }
              }),
              n
            );
          }
          return (
            n(e, t),
            (e.prototype.init = function(e) {
              t.prototype.init.call(this, e), this.responses.init(e);
            }),
            (e.prototype.reset = function() {}),
            e
          );
        })(r(16).Trigger);
        e.ReturnKeyTrigger = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(3),
          i = (function() {
            function t(t, e, r, n) {
              void 0 === r && (r = null),
                void 0 === n && (n = null),
                (this.engineObserver = t),
                (this.triggerId = e),
                (this.conditionId = r),
                (this.responseId = n);
            }
            return (
              (t.prototype.withCondition = function(e) {
                return new t(this.engineObserver, this.triggerId, e);
              }),
              (t.prototype.withResponse = function(e) {
                return new t(
                  this.engineObserver,
                  this.triggerId,
                  this.conditionId,
                  e
                );
              }),
              (t.prototype.reportError = function(t) {
                (t.responseId = this.responseId),
                  (t.conditionId = this.conditionId);
                try {
                  this.engineObserver && this.engineObserver.onEvalError(t);
                } catch (t) {
                  n.Logger.e("Error while notifying observers of error", t);
                }
              }),
              t
            );
          })();
        e.PPExprEnv = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(152),
          i = r(170),
          o = r(173),
          s = r(45),
          a = r(185),
          u = r(186),
          c = r(192),
          l = r(193),
          h = r(3),
          p = (function() {
            function t(t, e, r) {
              (this.oneTimeResponseReader = new n.OneTimeResponseReader(t, e)),
                (this.chainResponseReader = new o.ChainResponseReader(t, e)),
                (this.dragResponseReader = new i.DragResponseReader(t)),
                (this.pinchResponseReader = new c.PinchResponseReader(t)),
                (this.rotateResponseReader = new l.RotateResponseReader(t)),
                (this.conditionReader = new u.ConditionReader(t, e));
            }
            return (
              (t.prototype.readOneTimeResponses = function(t, e, r) {
                var n = new s.OneTimeResponseList();
                if (t.responses)
                  for (var i = 0, o = t.responses; i < o.length; i++) {
                    var a = o[i];
                    try {
                      a.disabled ||
                        n.addResponse(
                          this.oneTimeResponseReader.readResponse(a, e, r)
                        );
                    } catch (t) {
                      h.Logger.i("Ignoring invalid response: ", t.message);
                    }
                  }
                if (t.conditions)
                  for (var u = 0, c = t.conditions; u < c.length; u++) {
                    var l = c[u];
                    try {
                      l.disabled ||
                        n.addConditionalResponseList(
                          this.readConditionalROneTimeResponseList(l, e, r)
                        );
                    } catch (t) {
                      h.Logger.i("Ignoring invalid condition: ", t.message);
                    }
                  }
                return n;
              }),
              (t.prototype.readChainResponses = function(t) {
                for (var e = [], r = 0, n = t.responses; r < n.length; r++) {
                  var i = n[r];
                  try {
                    i.disabled ||
                      e.push(this.chainResponseReader.readResponse(i));
                  } catch (t) {
                    h.Logger.i("Ignoring invalid response: ", t.message);
                  }
                }
                return e;
              }),
              (t.prototype.readDragResponses = function(t) {
                for (var e = [], r = 0, n = t.responses; r < n.length; r++) {
                  var i = n[r];
                  try {
                    i.disabled ||
                      e.push(this.dragResponseReader.readResponse(i));
                  } catch (t) {
                    h.Logger.i("Ignoring invalid response: ", t.message);
                  }
                }
                return e;
              }),
              (t.prototype.readPinchResponses = function(t) {
                for (var e = [], r = 0, n = t.responses; r < n.length; r++) {
                  var i = n[r];
                  try {
                    i.disabled ||
                      e.push(this.pinchResponseReader.readResponse(i));
                  } catch (t) {
                    h.Logger.i("Ignoring invalid response: ", t.message);
                  }
                }
                return e;
              }),
              (t.prototype.readRotateResponses = function(t) {
                for (var e = [], r = 0, n = t.responses; r < n.length; r++) {
                  var i = n[r];
                  try {
                    i.disabled ||
                      e.push(this.rotateResponseReader.readResponse(i));
                  } catch (t) {
                    h.Logger.i("Ignoring invalid response: ", t.message);
                  }
                }
                return e;
              }),
              (t.prototype.readConditionalROneTimeResponseList = function(
                t,
                e,
                r
              ) {
                for (
                  var n = this.conditionReader.readConditionExpressions(
                      t,
                      "expressions",
                      e
                    ),
                    i = new a.ConditionalOneTimeResponseList(n),
                    o = 0,
                    s = t.responses;
                  o < s.length;
                  o++
                ) {
                  var u = s[o];
                  try {
                    u.disabled ||
                      i.addResponse(
                        this.oneTimeResponseReader.readResponse(u, e, r)
                      );
                  } catch (t) {
                    h.Logger.i("Ignoring invalid response: ", t.message);
                  }
                }
                return i;
              }),
              t
            );
          })();
        e.ResponseReader = p;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(60),
          i = r(27),
          o = r(154),
          s = r(13),
          a = r(0),
          u = r(155),
          c = r(2),
          l = r(156),
          h = r(157),
          p = r(158),
          f = r(91),
          d = r(159),
          y = r(160),
          g = r(24),
          v = r(99),
          m = r(46),
          E = r(161),
          P = r(162),
          T = r(20),
          _ = r(163),
          b = r(58),
          O = r(165),
          w = r(166),
          R = r(167),
          x = r(168),
          A = r(169),
          S = r(94),
          N = (function() {
            function t(t, e) {
              (this.layerRefReader = t), (this.varTable = e);
            }
            return (
              (t.prototype.readResponse = function(t, e, r) {
                var n = t.type;
                switch (n) {
                  case "xid_move":
                    return this.readMoveResponse(t, e);
                  case "xid_scale":
                    return this.readScaleResponse(t, e);
                  case "xid_scroll":
                    return this.readScrollResponse(t, e);
                  case "xid_res_rotate":
                    return this.readRotateResponse(t, e);
                  case "xid_rotate_3d":
                    return this.readRotate3DResponse(t, e);
                  case "xid_opacity":
                    return this.readOpacityResponse(t, e);
                  case "xid_color":
                    return this.readColorResponse(t, e);
                  case "xid_radius":
                    return this.readRadiusResponse(t, e);
                  case "xid_reorder":
                    return this.readReorderResponse(t, e);
                  case "xid_playback":
                    return this.readPlayBackResponse(t, e);
                  case "xid_text":
                    return this.readTextResponse(t, e);
                  case "xid_focus":
                  case "xid_res_focus":
                    return this.readFocusResponse(t, e);
                  case "xid_set":
                  case "xid_assign":
                    return this.readSetResponse(t, e);
                  case "xid_stop":
                    return this.readStopResponse(t, e);
                  case "xid_vibrate":
                    r.addUnsupportedFeature(
                      m.PPPieReadResult.FEATURE_VIBRATE_RESPONSE
                    );
                    break;
                  case "xid_jump":
                    return this.readJumpResponse(t, e);
                  case "xid_link":
                    return this.readLinkResponse(t, e);
                  case "xid_send":
                    return this.readSendResponse(t, e);
                }
                throw new Error("Unhandled response type: " + n);
              }),
              (t.prototype.readMoveResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readLayer(t, "layerId"),
                  i = a.stringToOperation(s.readString(t, "operation", "SET")),
                  o = s.readExpression(
                    t,
                    "x",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  u = s.readExpression(
                    t,
                    "y",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  c = this.readDde(t),
                  l = new O.OneTimeMoveResponse(n, i, o, u, c);
                return this.readRepeatDef(t, l, c.duration), l;
              }),
              (t.prototype.readScaleResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readLayer(t, "layerId"),
                  i = a.stringToOperation(s.readString(t, "operation", "SET")),
                  o = null,
                  u = null,
                  c = null,
                  l = null;
                "FACTOR" == t.scaleType
                  ? ((c = s.readExpression(
                      t,
                      "scaleX",
                      this.varTable,
                      this.layerRefReader,
                      r
                    )),
                    (l = s.readExpression(
                      t,
                      "scaleY",
                      this.varTable,
                      this.layerRefReader,
                      r
                    )))
                  : ((o = s.readExpression(
                      t,
                      "width",
                      this.varTable,
                      this.layerRefReader,
                      r
                    )),
                    (u = s.readExpression(
                      t,
                      "height",
                      this.varTable,
                      this.layerRefReader,
                      r
                    )));
                var h = this.readDde(t),
                  p = new w.OneTimeScaleResponse(n, i, o, u, c, l, h);
                return this.readRepeatDef(t, p, h.duration), p;
              }),
              (t.prototype.readScrollResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readContainerLayer(t, "layerId");
                if (n.scrollType == a.ScrollType.NONE)
                  throw new Error(
                    "Scroll response is not applicable to a non-scrollable container"
                  );
                var i = a.stringToOperation(
                    s.readString(t, "operation", "SET")
                  ),
                  o = s.readExpression(
                    t,
                    "scrollOffset",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  u = this.readDde(t),
                  c = new R.OneTimeScrollResponse(n, i, o, u);
                return this.readRepeatDef(t, c, u.duration), c;
              }),
              (t.prototype.readRotateResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readLayer(t, "layerId"),
                  i = a.stringToOperation(t.operation),
                  u = s.readExpression(
                    t,
                    "degree",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  c = new o.OneTimeRotateResponse(n, i, u);
                return (
                  (c.direction = a.stringToRotateDir(t.direction)),
                  this.readTimingProperties(t, c),
                  c
                );
              }),
              (t.prototype.readRotate3DResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readLayer(t, "layerId"),
                  i = a.stringToOperation(t.operation),
                  o = s.readExpression(
                    t,
                    "degree",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  l = new u.OneTimeRotate3DResponse(n, i, o),
                  h = t.direction;
                if ("X_CW" == h)
                  (l.axis = a.Axis3D.X), (l.direction = a.RotateDirection.CW);
                else if ("X_CCW" == h)
                  (l.axis = a.Axis3D.X), (l.direction = a.RotateDirection.CCW);
                else if ("Y_CW" == h)
                  (l.axis = a.Axis3D.Y), (l.direction = a.RotateDirection.CW);
                else {
                  if ("Y_CCW" != h) throw new Error("Unknown 3d rotate dir");
                  (l.axis = a.Axis3D.Y), (l.direction = a.RotateDirection.CCW);
                }
                if (
                  ((l.depth = s.readNumber(t, "perspectiveDepth", l.depth)),
                  "CUSTOM" == t.pivotType)
                ) {
                  var p = s.readNumber(t, "pivotX", 50) / 100,
                    f = s.readNumber(t, "pivotY", 50) / 100;
                  l.pivot = new c.Point(p, f);
                }
                return this.readTimingProperties(t, l), l;
              }),
              (t.prototype.readOpacityResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readLayer(t, "layerId"),
                  i = a.stringToOperation(s.readString(t, "operation", "SET")),
                  o = s.readExpression(
                    t,
                    "opacity",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  u = this.readDde(t),
                  c = new x.OneTimeOpacityResponse(n, i, o, u);
                return this.readRepeatDef(t, c, u.duration), c;
              }),
              (t.prototype.readColorResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readLayer(t, "layerId"),
                  o = this.readDde(t),
                  a = new i.OneTimePropertyResponse(n, o),
                  u = n.getMainColorOpacityProperty();
                if (u) {
                  var c = s.readExpression(
                    t,
                    "fillOpacity",
                    this.varTable,
                    this.layerRefReader,
                    r
                  );
                  null !== c && a.addEntry(u, c);
                }
                var l = n.getMainColorProperty();
                if (l) {
                  var h = s.readExpression(
                    t,
                    "fillColor",
                    this.varTable,
                    this.layerRefReader,
                    r
                  );
                  h && a.addColorEntry(l, h);
                }
                return this.readRepeatDef(t, a, o.duration), a;
              }),
              (t.prototype.readRadiusResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readLayer(t, "layerId"),
                  i = a.stringToOperation(s.readString(t, "operation", "SET")),
                  o = s.readExpression(
                    t,
                    "radius",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  u = this.readDde(t),
                  c = new A.OneTimeRadiusResponse(n, i, o, u);
                return this.readRepeatDef(t, c, u.duration), c;
              }),
              (t.prototype.readReorderResponse = function(t, e) {
                var r = (e.withResponse(t.id),
                  this.layerRefReader.readLayer(t, "layerId")),
                  n = a.stringToReorderType(t.order),
                  i = new l.ReorderResponse(r, n);
                return (
                  (i.delay = s.readTime(t, "delay", 0)),
                  this.readRepeatDef(t, i, 0),
                  i
                );
              }),
              (t.prototype.readPlayBackResponse = function(t, e) {
                var r,
                  n = (e.withResponse(t.id),
                  this.layerRefReader.readVideoLayer(t, "layerId")),
                  i = s.requireString(t, "command");
                if ("PLAY" == i)
                  (r = new g.VideoLayerCommand(
                    g.VideoLayerCommandType.PLAY
                  )).repeating = s.readBoolean(t, "repeat", !1);
                else if ("PAUSE" == i)
                  r = new g.VideoLayerCommand(g.VideoLayerCommandType.PAUSE);
                else {
                  if ("SEEK" != i) throw new Error("Invalid command: " + i);
                  (r = new g.VideoLayerCommand(
                    g.VideoLayerCommandType.SEEK
                  )).seekTime = s.readVideoTime(t, "seekTime");
                }
                var o = new y.PlayBackResponse(n, r);
                return (o.delay = s.readTime(t, "delay", 0)), o;
              }),
              (t.prototype.readTextResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.layerRefReader.readTextLayer(t, "layerId"),
                  i = new v.TextResponse(n);
                (i.delay = s.readTime(t, "delay", 0)),
                  this.readRepeatDef(t, i, 0),
                  (i.textAttributes.text = s.readString(t, "text", null)),
                  (i.textAttributes.fontSize = s.readNumber(
                    t,
                    "fontSize",
                    null
                  )),
                  (i.textAttributes.lineHeight = s.readNumber(
                    t,
                    "lineHeight",
                    null
                  )),
                  (i.textAttributes.textAlign = s.readString(
                    t,
                    "textAlign",
                    null
                  )),
                  (i.textAttributes.verticalAlign = s.readString(
                    t,
                    "verticalAlign",
                    null
                  ));
                var o = s.readString(t, "fontWeight", null),
                  a = s.readString(t, "font", null);
                return (
                  a
                    ? (i.textAttributes.font = a)
                    : "NORMAL" == o
                      ? (i.textAttributes.font =
                          T.PPTextAttributes.DEFAULT_FONT_REGULAR)
                      : "BOLD" == o &&
                        (i.textAttributes.font =
                          T.PPTextAttributes.DEFAULT_FONT_BOLD),
                  "FORMULA" == t.textType &&
                    (i.expr = s.readExpression(
                      t,
                      "textFormula",
                      this.varTable,
                      this.layerRefReader,
                      r
                    )),
                  i
                );
              }),
              (t.prototype.readFocusResponse = function(t, e) {
                var r = (e.withResponse(t.id),
                  this.layerRefReader.readTextInputLayer(t, "layerId")),
                  n = "OUT" !== s.requireString(t, "focusType"),
                  i = s.readTime(t, "delay", 0);
                return new S.FocusResponse(r, n, i);
              }),
              (t.prototype.readSetResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = this.varTable.requireVariable(
                    s.requireString(t, "varName")
                  );
                if (!n.isWritable())
                  throw new Error("Variable is not writable: " + n.name);
                var i = b.PPExprParser.parseAsExpr(
                    s.requireString(t, "formula"),
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  o = new _.OneTimeSetResponse(n, i);
                return (
                  (o.delay = s.readTime(t, "delay", 0)),
                  this.readRepeatDef(t, o, 0),
                  o
                );
              }),
              (t.prototype.readStopResponse = function(t, e) {
                var r;
                if (
                  "VARIABLE" ===
                  (e.withResponse(t.id), s.readString(t, "targetType", "LAYER"))
                ) {
                  var n = this.varTable.requireVariable(
                    s.requireString(t, "varName")
                  );
                  r = new E.StopResponse(null, n);
                } else {
                  var i = this.layerRefReader.readLayer(t, "layerId");
                  r = new E.StopResponse(i, null);
                }
                return (r.delay = s.readTime(t, "delay", 0)), r;
              }),
              (t.prototype.readJumpResponse = function(t, e) {
                var r = (e.withResponse(t.id), t.sceneId),
                  n = t.transition,
                  i = s.readBoolean(t, "resetTargetScene", !0),
                  o = new p.JumpResponse(r, n, i);
                return (o.delay = s.readTime(t, "delay", 0)), o;
              }),
              (t.prototype.readLinkResponse = function(t, e) {
                var r = (e.withResponse(t.id), s.requireString(t, "url")),
                  n = new P.LinkResponse(r);
                return (n.delay = s.readTime(t, "delay", 0)), n;
              }),
              (t.prototype.readSendResponse = function(t, e) {
                var r = e.withResponse(t.id),
                  n = t.channel,
                  i = t.messageId,
                  o = s.readExpression(
                    t,
                    "value",
                    this.varTable,
                    this.layerRefReader,
                    r
                  ),
                  a = new d.SendResponse(n, i, o);
                return (
                  (a.delay = s.readTime(t, "delay", 0)),
                  this.readRepeatDef(t, a, 0),
                  a
                );
              }),
              (t.prototype.readTimingProperties = function(t, e) {
                (e.dde = this.readDde(t)),
                  this.readRepeatDef(t, e, e.dde.duration);
              }),
              (t.prototype.readDde = function(t) {
                var e = s.readTime(t, "delay", 0),
                  r = s.readTime(t, "duration", 0),
                  i = s.readEasing(t, null);
                return (
                  i instanceof f.PopulatingEasingFunc && (r = i.getDuration()),
                  new n.DDE(e, r, i)
                );
              }),
              (t.prototype.readRepeatDef = function(t, e, r) {
                if (s.readBoolean(t, "repeat", !1)) {
                  var n = s.readBoolean(t, "repeatInfinite", !1),
                    i = s.readNumber(t, "repeatCount", 10),
                    o = s.readTime(t, "repeatInterval", 1e3) + r;
                  o < 0 || (e.repeatDef = new h.RepeatDef(n, i, o));
                }
              }),
              t
            );
          })();
        e.OneTimeResponseReader = N;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t, e, r, n) {
            (this.doNotExpire = !0),
              (this.layerId = t),
              (this.property = e),
              (this.endValue = r),
              (this.dde = n);
          }
          return (
            (t.prototype.run = function(t, e) {
              var r = this.endValue.evalAsColor();
              r && this.property.startAnimation(r, t, this.dde);
            }),
            (t.prototype.shouldStopForLayer = function(t) {
              return t.id == this.layerId;
            }),
            (t.prototype.shouldStopForVariable = function(t) {
              return !1;
            }),
            t
          );
        })();
        e.PPColorAnimationTask = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(9),
          o = r(0),
          s = r(40),
          a = r(97),
          u = r(98),
          c = r(44),
          l = (function(t) {
            function e(e, r, n) {
              var i = t.call(this) || this;
              return (
                (i.direction = o.RotateDirection.CW),
                (i.layerId = e.id),
                (i.property = e.r),
                (i.operation = r),
                (i.degree = n),
                i
              );
            }
            return (
              n(e, t),
              (e.prototype.run = function(t) {
                if (this.operation == o.Operation.SET) {
                  var e = new a.CircularSetNumberAnimation(
                    this.degree,
                    this.dde.duration,
                    this.dde.easingFunc,
                    360,
                    this.direction
                  );
                  this.scheduler.scheduleTask(
                    new c.PPNumberAnimationTask(this.layerId, this.property, e),
                    t,
                    this.dde.delay,
                    this.repeatDef
                  );
                } else if (this.operation == o.Operation.INCREASE) {
                  var r = null;
                  if (
                    (this.direction == o.RotateDirection.CW
                      ? (r = this.degree)
                      : this.direction == o.RotateDirection.CCW &&
                        (r = new u.PPNegateExpr(this.degree)),
                    r)
                  ) {
                    e = s.IncrementNumberAnimation.fromDDE(r, this.dde);
                    this.scheduler.scheduleTask(
                      new c.PPNumberAnimationTask(
                        this.layerId,
                        this.property,
                        e
                      ),
                      t,
                      this.dde.delay,
                      this.repeatDef
                    );
                  }
                }
              }),
              e
            );
          })(i.OneTimeResponse);
        e.OneTimeRotateResponse = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(9),
          o = r(0),
          s = r(40),
          a = r(97),
          u = r(98),
          c = r(44),
          l = 300,
          h = (function(t) {
            function e(e, r, n) {
              var i = t.call(this) || this;
              return (
                (i.direction = o.RotateDirection.CW),
                (i.depth = l),
                (i.layer = e),
                (i.property = e.r3),
                (i.operation = r),
                (i.degree = n),
                i
              );
            }
            return (
              n(e, t),
              (e.prototype.run = function(t) {
                if (
                  ((this.layer.r3Axis = this.axis),
                  this.pivot
                    ? this.layer.r3Pivot.copyFrom(this.pivot)
                    : this.layer.r3Pivot.copyFrom(this.layer.origin),
                  (this.layer.r3Depth = this.depth),
                  this.operation == o.Operation.SET)
                ) {
                  var e = new a.CircularSetNumberAnimation(
                    this.degree,
                    this.dde.duration,
                    this.dde.easingFunc,
                    360,
                    this.direction
                  );
                  this.scheduler.scheduleTask(
                    new c.PPNumberAnimationTask(
                      this.layer.id,
                      this.property,
                      e
                    ),
                    t,
                    this.dde.delay,
                    this.repeatDef
                  );
                } else if (this.operation == o.Operation.INCREASE) {
                  var r = null;
                  if (
                    (this.direction == o.RotateDirection.CW
                      ? (r = this.degree)
                      : this.direction == o.RotateDirection.CCW &&
                        (r = new u.PPNegateExpr(this.degree)),
                    r)
                  ) {
                    e = s.IncrementNumberAnimation.fromDDE(r, this.dde);
                    this.scheduler.scheduleTask(
                      new c.PPNumberAnimationTask(
                        this.layer.id,
                        this.property,
                        e
                      ),
                      t,
                      this.dde.delay,
                      this.repeatDef
                    );
                  }
                }
              }),
              e
            );
          })(i.OneTimeResponse);
        e.OneTimeRotate3DResponse = h;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (n.delay = 0), (n.layer = e), (n.reorderType = r), n;
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e = this,
                r = this.layer.parent;
              if (r) {
                var n = {
                  doNotExpire: !0,
                  run: function(t, n) {
                    r.reorder(e.layer, e.reorderType);
                  },
                  shouldStopForLayer: function(t) {
                    return t.id == e.layer.id;
                  },
                  shouldStopForVariable: function(t) {
                    return !1;
                  }
                };
                this.scheduler.scheduleTask(n, t, this.delay, this.repeatDef);
              }
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.ReorderResponse = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          return function(t, e, r) {
            (this.infinite = t), (this.repeatCount = e), (this.interval = r);
          };
        })();
        e.RepeatDef = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (
              (i.resetTargetScene = !0),
              (i.sceneId = e),
              (i.transitionName = r),
              (i.resetTargetScene = n),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e = this,
                r = {
                  doNotExpire: !1,
                  run: function(t, r) {
                    r.jump(e.sceneId, e.transitionName, e.resetTargetScene);
                  },
                  shouldStopForLayer: function(t) {
                    return !1;
                  },
                  shouldStopForVariable: function(t) {
                    return !1;
                  }
                };
              this.scheduler.scheduleTask(r, t, this.delay);
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.JumpResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this) || this;
            return (i.channel = e), (i.messageId = r), (i.valueExpr = n), i;
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e = this,
                r = {
                  doNotExpire: !0,
                  run: function(t, r) {
                    var n = e.valueExpr ? e.valueExpr.evalAsString() : null;
                    r.send(e.channel, e.messageId, n, t);
                  },
                  shouldStopForLayer: function(t) {
                    return !1;
                  },
                  shouldStopForVariable: function(t) {
                    return !1;
                  }
                };
              this.scheduler.scheduleTask(r, t, this.delay, this.repeatDef);
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.SendResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (n.delay = 0), (n.layer = e), (n.command = r), n;
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e = this;
              if (0 == this.delay) this.layer.enqueueCommand(this.command, t);
              else {
                var r = {
                  doNotExpire: !0,
                  run: function(t, r) {
                    e.layer.enqueueCommand(e.command, t);
                  },
                  shouldStopForLayer: function(t) {
                    return t.id == e.layer.id;
                  },
                  shouldStopForVariable: function(t) {
                    return !1;
                  }
                };
                this.scheduler.scheduleTask(r, t + this.delay, null);
              }
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.PlayBackResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this) || this;
            return (n.delay = 0), (n.layer = e), (n.variable = r), n;
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e,
                r = this,
                n = {
                  doNotExpire: !0,
                  run: function(t, n) {
                    r.layer
                      ? (r.layer.stopPropertyAnimation(),
                        n.removeTasksOfLayer(r.layer, e))
                      : r.variable && n.removeTasksOfVariable(r.variable, e);
                  },
                  shouldStopForLayer: function(t) {
                    return !1;
                  },
                  shouldStopForVariable: function(t) {
                    return !1;
                  }
                };
              e = this.scheduler.scheduleTask(n, t, this.delay);
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.StopResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e) {
            var r = t.call(this) || this;
            return (r.url = e), r;
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e = this,
                r = {
                  doNotExpire: !1,
                  run: function(t, r) {
                    r.openUrl(e.url);
                  },
                  shouldStopForLayer: function(t) {
                    return !1;
                  },
                  shouldStopForVariable: function(t) {
                    return !1;
                  }
                };
              this.scheduler.scheduleTask(r, t, this.delay);
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.LinkResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(164),
          o = r(22),
          s = r(23),
          a = r(34),
          u = (function(t) {
            function e(e, r) {
              var n = t.call(this) || this;
              return (n.delay = 0), (n.variable = e), (n.expr = r), n;
            }
            return (
              n(e, t),
              (e.prototype.getTask = function() {
                var t = this;
                return {
                  doNotExpire: !0,
                  run: function(e, r) {
                    if (t.variable instanceof o.PPStringVar)
                      null !== (n = t.expr.evalAsString()) &&
                        t.variable.setValue(n);
                    else if (t.variable instanceof s.PPNumberVar) {
                      null !== (n = t.expr.evalAsNumber()) &&
                        t.variable.setValue(n);
                    } else if (t.variable instanceof a.PPColorVar) {
                      var n;
                      null !== (n = t.expr.evalAsColor()) &&
                        t.variable.setValue(n);
                    }
                  },
                  shouldStopForLayer: function(t) {
                    return !1;
                  },
                  shouldStopForVariable: function(e) {
                    return t.variable.name == e.name;
                  }
                };
              }),
              e
            );
          })(i.OneTimeTaskResponse);
        e.OneTimeSetResponse = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.delay = 0), e;
          }
          return (
            n(e, t),
            (e.prototype.run = function(t) {
              var e = this.getTask();
              this.scheduler.scheduleTask(e, t, this.delay, this.repeatDef);
            }),
            e
          );
        })(r(9).OneTimeResponse);
        e.OneTimeTaskResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n, i, o) {
            var s = t.call(this, e, o) || this;
            return n && s.addEntry(e.x, n, r), i && s.addEntry(e.y, i, r), s;
          }
          return n(e, t), e;
        })(r(27).OneTimePropertyResponse);
        e.OneTimeMoveResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n, i, o, s, a) {
            var u = t.call(this, e, a) || this;
            return (
              n && u.addEntry(e.w, n, r),
              i && u.addEntry(e.h, i, r),
              o && u.addEntry(e.scaleX, o, r),
              s && u.addEntry(e.scaleY, s, r),
              u
            );
          }
          return n(e, t), e;
        })(r(27).OneTimePropertyResponse);
        e.OneTimeScaleResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n, i) {
            var o = t.call(this, e, i) || this;
            if (n) {
              var s = e.getScrollOffset();
              s && o.addEntry(s, n, r);
            }
            return o;
          }
          return n(e, t), e;
        })(r(27).OneTimePropertyResponse);
        e.OneTimeScrollResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n, i) {
            var o = t.call(this, e, i) || this;
            return n && o.addEntry(e.o, n, r), o;
          }
          return n(e, t), e;
        })(r(27).OneTimePropertyResponse);
        e.OneTimeOpacityResponse = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n, i) {
            var o = t.call(this, e, i) || this,
              s = e.getNumberPropertyByName("radius");
            return n && s && o.addEntry(s, n, r), o;
          }
          return n(e, t), e;
        })(r(27).OneTimePropertyResponse);
        e.OneTimeRadiusResponse = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(53),
          i = r(0),
          o = r(13),
          s = r(171),
          a = r(2),
          u = r(172),
          c = (function() {
            function t(t) {
              this.layerRefReader = t;
            }
            return (
              (t.prototype.readResponse = function(t) {
                var e = t.type;
                switch (e) {
                  case "xid_move":
                    return this.readMoveResponse(t);
                  case "xid_scale":
                    return this.readScaleResponse(t);
                  case "xid_res_rotate":
                    return this.readRotateResponse(t);
                  default:
                    throw new Error("Unhandled response type: " + e);
                }
              }),
              (t.prototype.readMoveResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new n.DragMoveResponse(e);
                switch (
                  ((r.direction = this.readDragAxis(t, "direction")),
                  (r.ratio = o.readNumber(t, "ratio", 100) / 100),
                  t.limitType)
                ) {
                  case "CUSTOM":
                    (r.xLimit = o.readLimit(t, "minX", "maxX")),
                      (r.yLimit = o.readLimit(t, "minY", "maxY")),
                      (r.limitToParent = !1);
                    break;
                  case "NONE":
                    r.limitToParent = !1;
                    break;
                  default:
                    r.limitToParent = !0;
                }
                return r;
              }),
              (t.prototype.readScaleResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new s.DragScaleResponse(e);
                switch (
                  ((r.ratio = o.readNumber(t, "ratio", 100) / 100), t.direction)
                ) {
                  case "UP":
                    (r.hDir = i.ScalarDir.DECREASE),
                      (r.pivot = new a.Point(0.5, 1));
                    break;
                  case "DOWN":
                    (r.hDir = i.ScalarDir.INCREASE),
                      (r.pivot = new a.Point(0.5, 0));
                    break;
                  case "LEFT":
                    (r.wDir = i.ScalarDir.DECREASE),
                      (r.pivot = new a.Point(1, 0.5));
                    break;
                  case "RIGHT":
                    (r.wDir = i.ScalarDir.INCREASE),
                      (r.pivot = new a.Point(0, 0.5));
                    break;
                  case "UP_LEFT":
                    (r.wDir = i.ScalarDir.DECREASE),
                      (r.hDir = i.ScalarDir.DECREASE),
                      (r.pivot = new a.Point(1, 1));
                    break;
                  case "UP_RIGHT":
                    (r.wDir = i.ScalarDir.INCREASE),
                      (r.hDir = i.ScalarDir.DECREASE),
                      (r.pivot = new a.Point(0, 1));
                    break;
                  case "DOWN_LEFT":
                    (r.wDir = i.ScalarDir.DECREASE),
                      (r.hDir = i.ScalarDir.INCREASE),
                      (r.pivot = new a.Point(1, 0));
                    break;
                  case "DOWN_RIGHT":
                    (r.wDir = i.ScalarDir.INCREASE),
                      (r.hDir = i.ScalarDir.INCREASE),
                      (r.pivot = new a.Point(0, 0));
                }
                return (
                  (r.wLimit = o.readLimit(t, "minWidth", "maxWidth")),
                  (r.hLimit = o.readLimit(t, "minHeight", "maxHeight")),
                  r
                );
              }),
              (t.prototype.readRotateResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId");
                return new u.DragRotateResponse(e);
              }),
              (t.prototype.readDragAxis = function(t, e) {
                var r = o.readString(t, e, "FREE");
                if ("HORIZONTAL" == r) return i.DragAxis.HORIZONTAL;
                if ("VERTICAL" == r) return i.DragAxis.VERTICAL;
                if ("FREE" == r) return i.DragAxis.FREE;
                throw new Error("Invalid drag direction: " + r);
              }),
              t
            );
          })();
        e.DragResponseReader = c;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(31),
          o = r(19),
          s = r(71),
          a = r(2),
          u = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (
                (r.ratio = 1),
                (r.wChange = new o.NumberChange()),
                (r.hChange = new o.NumberChange()),
                (r.xChange = new o.NumberChange()),
                (r.yChange = new o.NumberChange()),
                (r.positionDelta = new a.Point(0, 0)),
                (r.layer = e),
                r
              );
            }
            return (
              n(e, t),
              (e.prototype.onStart = function(t) {
                this.wDir &&
                  ((this.wChange.increment = 0),
                  (this.xChange.increment = 0),
                  this.wChange.setLimit(this.wLimit),
                  this.layer.w.startContinuousChange(this.wChange, t.time),
                  this.layer.x.startContinuousChange(this.xChange, t.time)),
                  this.hDir &&
                    ((this.hChange.increment = 0),
                    (this.yChange.increment = 0),
                    this.hChange.setLimit(this.hLimit),
                    this.layer.h.startContinuousChange(this.hChange, t.time),
                    this.layer.y.startContinuousChange(this.yChange, t.time));
              }),
              (e.prototype.onChange = function(t) {
                this.wDir &&
                  this.applyIncrement(
                    this.layer.w,
                    this.wDir * t.drag.x * this.ratio,
                    this.wChange
                  ),
                  this.hDir &&
                    this.applyIncrement(
                      this.layer.h,
                      this.hDir * t.drag.y * this.ratio,
                      this.hChange
                    ),
                  s.CoordUtils.computePositionChangeForScale(
                    this.layer,
                    this.pivot,
                    this.wChange.increment,
                    this.hChange.increment,
                    this.positionDelta
                  ),
                  (this.xChange.increment = this.positionDelta.x),
                  (this.yChange.increment = this.positionDelta.y);
              }),
              (e.prototype.onEnd = function(t) {
                this.wDir &&
                  (this.layer.w.endContinuousChange(this.wChange),
                  this.layer.x.endContinuousChange(this.xChange)),
                  this.hDir &&
                    (this.layer.h.endContinuousChange(this.hChange),
                    this.layer.y.endContinuousChange(this.yChange));
              }),
              (e.prototype.applyIncrement = function(t, e, r) {
                var n = t.curVal() - r.getIncrement(),
                  i = n + e;
                null !== r.min && i < r.min && (i = r.min),
                  null !== r.max && i > r.max && (i = r.max),
                  (r.increment = i - n);
              }),
              e
            );
          })(i.DragResponse);
        e.DragScaleResponse = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(31),
          o = r(19),
          s = r(0),
          a = r(2),
          u = r(5),
          c = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (
                (r.rChange = new o.NumberChange()),
                (r.absPivot = new a.Point(0, 0)),
                (r.initialPosition = new a.Point(0, 0)),
                (r.initialAngle = 0),
                (r.layer = e),
                r
              );
            }
            return (
              n(e, t),
              (e.prototype.onStart = function(t) {
                (this.rChange.increment = 0),
                  this.layer.r.startContinuousChange(this.rChange, t.time),
                  (this.absPivot.x = this.layer.x.curVal()),
                  (this.absPivot.y = this.layer.y.curVal()),
                  (this.initialPosition.x = this.layer.x.curVal()),
                  (this.initialAngle = u.AngleUtils.getLineAngle(
                    this.absPivot,
                    t.touchEvent.focus
                  ));
              }),
              (e.prototype.onChange = function(t) {
                var e = u.AngleUtils.getLineAngle(
                  this.absPivot,
                  t.touchEvent.focus
                );
                this.rChange.increment = u.AngleUtils.getAngleDelta(
                  this.initialAngle,
                  e,
                  s.RotateDirection.NEAR
                );
              }),
              (e.prototype.onEnd = function(t) {
                this.layer.r.endContinuousChange(this.rChange);
              }),
              e
            );
          })(i.DragResponse);
        e.DragRotateResponse = c;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(174),
          i = r(175),
          o = r(176),
          s = r(177),
          a = r(2),
          u = r(13),
          c = r(178),
          l = r(179),
          h = r(180),
          p = r(0),
          f = r(181),
          d = r(182),
          y = r(183),
          g = r(184),
          v = r(3),
          m = (function() {
            function t(t, e) {
              (this.layerRefReader = t), (this.varTable = e);
            }
            return (
              (t.prototype.readResponse = function(t) {
                var e = t.type;
                switch (e) {
                  case "xid_move":
                    return this.readMoveResponse(t);
                  case "xid_scale":
                    return this.readScaleResponse(t);
                  case "xid_scroll":
                    return this.readScrollResponse(t);
                  case "xid_res_rotate":
                    return this.readRotateResponse(t);
                  case "xid_rotate_3d":
                    return this.readRotate3DResponse(t);
                  case "xid_opacity":
                    return this.readOpacityResponse(t);
                  case "xid_radius":
                    return this.readRadiusResponse(t);
                  case "xid_color":
                    return this.readColorResponse(t);
                  case "xid_set":
                  case "xid_assign":
                    return this.readSetResponse(t);
                  default:
                    throw new Error("Unhandled response type: " + e);
                }
              }),
              (t.prototype.readMoveResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new o.ChainPointResponse(e.x, e.y);
                this.readTimingProperties(t, r);
                for (var n = 0, i = t.mapping; n < i.length; n++) {
                  var s = i[n];
                  try {
                    r.addMappingEntry(this.readPointEntry(s, "x", "y"));
                  } catch (t) {
                    v.Logger.i("Ignoring invalid mapping", t.message, s);
                  }
                }
                return r;
              }),
              (t.prototype.readScaleResponse = function(t) {
                var e,
                  r = this.layerRefReader.readLayer(t, "layerId");
                if ("FACTOR" == t.scaleType) {
                  e = new o.ChainPointResponse(r.scaleX, r.scaleY);
                  for (var n = 0, i = t.mapping; n < i.length; n++) {
                    var s = i[n];
                    try {
                      e.addMappingEntry(
                        this.readPointEntry(s, "scaleX", "scaleY")
                      );
                    } catch (t) {
                      v.Logger.i("Ignoring invalid mapping", t.message, s);
                    }
                  }
                } else {
                  e = new o.ChainPointResponse(r.w, r.h);
                  for (var a = 0, u = t.mapping; a < u.length; a++) {
                    s = u[a];
                    try {
                      e.addMappingEntry(
                        this.readPointEntry(s, "width", "height")
                      );
                    } catch (t) {
                      v.Logger.i("Ignoring invalid mapping", t.message, s);
                    }
                  }
                }
                return this.readTimingProperties(t, e), e;
              }),
              (t.prototype.readScrollResponse = function(t) {
                var e = this.layerRefReader.readContainerLayer(t, "layerId");
                if (e.scrollType == p.ScrollType.NONE)
                  throw new Error(
                    "Scroll response is not applicable to a non-scrollable container"
                  );
                var r = e.getScrollOffset();
                if (r) {
                  var i = new n.ChainScalarResponse(r);
                  this.readTimingProperties(t, i);
                  for (var o = 0, s = t.mapping; o < s.length; o++) {
                    var a = s[o];
                    try {
                      i.addMappingEntry(
                        this.readOnePropEntry(a, "scrollOffset")
                      );
                    } catch (t) {
                      v.Logger.i("Ignoring invalid mapping", t.message, a);
                    }
                  }
                  return i;
                }
                throw new Error("Scroll response requires scrolling container");
              }),
              (t.prototype.readRotateResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new f.ChainRotateResponse(e.r);
                this.readTimingProperties(t, r);
                for (var n = 0, i = t.mapping; n < i.length; n++) {
                  var o = i[n];
                  try {
                    r.addMappingEntry(this.readRotateEntry(o, "rotation"));
                  } catch (t) {
                    v.Logger.i("Ignoring invalid mapping", t.message, o);
                  }
                }
                return r;
              }),
              (t.prototype.readRotate3DResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new y.ChainRotate3DResponse(e);
                if (
                  (this.readTimingProperties(t, r),
                  (r.depth = u.readNumber(t, "perspectiveDepth", r.depth)),
                  "CUSTOM" == t.pivotType)
                ) {
                  var n = u.readNumber(t, "pivotX", 50) / 100,
                    i = u.readNumber(t, "pivotY", 50) / 100;
                  r.pivot = new a.Point(n, i);
                }
                for (var o = 0, s = t.mapping; o < s.length; o++) {
                  var c = s[o];
                  try {
                    r.addMappingEntry(this.readRotate3DEntry(c, "rotation"));
                  } catch (t) {
                    v.Logger.i("Ignoring invalid mapping", t.message, c);
                  }
                }
                return r;
              }),
              (t.prototype.readOpacityResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new n.ChainScalarResponse(e.o);
                this.readTimingProperties(t, r);
                for (var i = 0, o = t.mapping; i < o.length; i++) {
                  var s = o[i];
                  try {
                    r.addMappingEntry(this.readOnePropEntry(s, "opacity"));
                  } catch (t) {
                    v.Logger.i("Ignoring invalid mapping", t.message, s);
                  }
                }
                return r;
              }),
              (t.prototype.readRadiusResponse = function(t) {
                var e = this.layerRefReader
                  .readLayer(t, "layerId")
                  .getNumberPropertyByName("radius");
                if (e) {
                  var r = new n.ChainScalarResponse(e);
                  this.readTimingProperties(t, r);
                  for (var i = 0, o = t.mapping; i < o.length; i++) {
                    var s = o[i];
                    try {
                      r.addMappingEntry(this.readOnePropEntry(s, "radius"));
                    } catch (t) {
                      v.Logger.i("Ignoring invalid mapping", t.message, s);
                    }
                  }
                  return r;
                }
                throw new Error("Layer doesn't have radius property.");
              }),
              (t.prototype.readColorResponse = function(t) {
                var e = this.layerRefReader
                  .readLayer(t, "layerId")
                  .getMainColorProperty();
                if (!e)
                  throw new Error("Layer does not have a color property.");
                var r = new l.ChainColorResponse(e);
                this.readTimingProperties(t, r);
                for (var n = 0, i = t.mapping; n < i.length; n++) {
                  var o = i[n];
                  try {
                    r.addMappingEntry(this.readColorEntry(o, "fillColor"));
                  } catch (t) {
                    v.Logger.i("Ignoring invalid mapping", t.message, o);
                  }
                }
                return r;
              }),
              (t.prototype.readSetResponse = function(t) {
                var e = this.varTable.getNumberVariable(
                  u.requireString(t, "varName")
                );
                if (!e.isWritable())
                  throw new Error("Variable is not writable: " + e.name);
                var r = new g.ChainSetResponse(e);
                this.readTimingProperties(t, r);
                for (var n = 0, i = t.mapping; n < i.length; n++) {
                  var o = i[n];
                  try {
                    r.addMappingEntry(this.readOnePropEntry(o, "value"));
                  } catch (t) {
                    v.Logger.i("Ignoring invalid mapping", t.message, o);
                  }
                }
                return r;
              }),
              (t.prototype.readOnePropEntry = function(t, e) {
                var r = t.from,
                  n = t.to,
                  o = u.requireNumberOrTime(r, "range"),
                  s = u.requireNumberOrTime(n, "range"),
                  a = u.requireNumber(r, e),
                  c = u.requireNumber(n, e);
                return new i.NumberRangeEntry(o, s, a, c);
              }),
              (t.prototype.readPointEntry = function(t, e, r) {
                var n = t.from,
                  i = t.to,
                  o = u.requireNumberOrTime(n, "range"),
                  c = u.requireNumberOrTime(i, "range"),
                  l = new a.Point(u.readNumber(n, e), u.readNumber(n, r)),
                  h = new a.Point(u.readNumber(i, e), u.readNumber(i, r));
                return new s.PointRangeEntry(o, c, l, h);
              }),
              (t.prototype.readRotateEntry = function(t, e) {
                var r = t.from,
                  n = t.to,
                  i = u.requireNumberOrTime(r, "range"),
                  o = u.requireNumberOrTime(n, "range"),
                  s = u.requireNumber(r, e),
                  a = u.requireNumber(n, e),
                  c = p.stringToRotateDir(t.direction);
                return new h.RotateRangeEntry(i, o, s, a, c);
              }),
              (t.prototype.readRotate3DEntry = function(t, e) {
                var r = t.from,
                  n = t.to,
                  i = u.requireNumberOrTime(r, "range"),
                  o = u.requireNumberOrTime(n, "range"),
                  s = u.requireNumber(r, e),
                  a = u.requireNumber(n, e),
                  c = p.stringToRotate3DDir(t.direction);
                return new d.Rotate3DRangeEntry(i, o, s, a, c);
              }),
              (t.prototype.readColorEntry = function(t, e) {
                var r = t.from,
                  n = t.to,
                  i = u.requireNumberOrTime(r, "range"),
                  o = u.requireNumberOrTime(n, "range"),
                  s = u.readColor(r, e),
                  a = u.readColor(n, e);
                return new c.ColorRangeEntry(i, o, s, a);
              }),
              (t.prototype.readTimingProperties = function(t, e) {}),
              t
            );
          })();
        e.ChainResponseReader = m;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(28),
          o = r(29),
          s = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (r.mapping = new o.RangeMap()), (r.property = e), r;
            }
            return (
              n(e, t),
              (e.prototype.addMappingEntry = function(t) {
                this.mapping.add(t);
              }),
              (e.prototype.run = function(t, e) {
                var r = this.mapping.updateRangeValue(t);
                return (
                  null != r &&
                  (this.updateProperty(this.property, r.getValueAt(t), e), !0)
                );
              }),
              e
            );
          })(i.ChainResponse);
        e.ChainScalarResponse = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n, i) {
            return t.call(this, e, r, n, i) || this;
          }
          return (
            n(e, t),
            (e.prototype.getValueAt = function(t) {
              var e = this.getProgressAt(t);
              return this.startValue + (this.endValue - this.startValue) * e;
            }),
            e
          );
        })(r(37).RangeEntry);
        e.NumberRangeEntry = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(28),
          o = r(29),
          s = (function(t) {
            function e(e, r) {
              var n = t.call(this) || this;
              return (
                (n.mapping = new o.RangeMap()), (n.xProp = e), (n.yProp = r), n
              );
            }
            return (
              n(e, t),
              (e.prototype.addMappingEntry = function(t) {
                this.mapping.add(t);
              }),
              (e.prototype.run = function(t, e) {
                var r = this.mapping.updateRangeValue(t);
                if (null != r) {
                  var n = r.getValueAt(t);
                  return (
                    null !== n.x && this.updateProperty(this.xProp, n.x, e),
                    null !== n.y && this.updateProperty(this.yProp, n.y, e),
                    !0
                  );
                }
                return !1;
              }),
              e
            );
          })(i.ChainResponse);
        e.ChainPointResponse = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(37),
          o = r(2),
          s = (function(t) {
            function e(e, r, n, i) {
              var s = t.call(this, e, r, n, i) || this;
              return (s.interpolated = new o.Point(null, null)), s;
            }
            return (
              n(e, t),
              (e.prototype.getValueAt = function(t) {
                var e = this.getProgressAt(t),
                  r = this.startValue,
                  n = this.endValue;
                return (
                  null !== r.x && null !== n.x
                    ? (this.interpolated.x = r.x + (n.x - r.x) * e)
                    : (this.interpolated.y = null),
                  null !== r.y && null !== n.y
                    ? (this.interpolated.y = r.y + (n.y - r.y) * e)
                    : (this.interpolated.y = null),
                  this.interpolated
                );
              }),
              e
            );
          })(i.RangeEntry);
        e.PointRangeEntry = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(37),
          o = r(11),
          s = (function(t) {
            function e(e, r, n, i) {
              var s = t.call(this, e, r, n, i) || this;
              return (s.interpolated = new o.PPColor(0, 0, 0)), s;
            }
            return (
              n(e, t),
              (e.prototype.getValueAt = function(t) {
                var e = this.getProgressAt(t),
                  r = this.startValue,
                  n = this.endValue;
                return r && n
                  ? ((this.interpolated.r = this.interpolate(r.r, n.r, e)),
                    (this.interpolated.g = this.interpolate(r.g, n.g, e)),
                    (this.interpolated.b = this.interpolate(r.b, n.b, e)),
                    this.interpolated)
                  : null;
              }),
              e
            );
          })(i.RangeEntry);
        e.ColorRangeEntry = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(28),
          o = r(29),
          s = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (r.mapping = new o.RangeMap()), (r.property = e), r;
            }
            return (
              n(e, t),
              (e.prototype.addMappingEntry = function(t) {
                this.mapping.add(t);
              }),
              (e.prototype.run = function(t, e) {
                var r = this.mapping.updateRangeValue(t);
                if (null != r) {
                  var n = r.getValueAt(t);
                  return n && this.updateColorProperty(this.property, n, e), !0;
                }
                return !1;
              }),
              e
            );
          })(i.ChainResponse);
        e.ChainColorResponse = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(37),
          o = r(5),
          s = (function(t) {
            function e(e, r, n, i, o) {
              var s = t.call(this, e, r, n, i) || this;
              return (s.dir = o), s;
            }
            return (
              n(e, t),
              (e.prototype.getValueAt = function(t) {
                var e = this.getProgressAt(t),
                  r = o.AngleUtils.getAngleDelta(
                    this.startValue,
                    this.endValue,
                    this.dir
                  );
                return o.AngleUtils.normalize(this.startValue + r * e);
              }),
              e
            );
          })(i.RangeEntry);
        e.RotateRangeEntry = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(28),
          o = r(29),
          s = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (r.mapping = new o.RangeMap()), (r.property = e), r;
            }
            return (
              n(e, t),
              (e.prototype.addMappingEntry = function(t) {
                this.mapping.add(t);
              }),
              (e.prototype.run = function(t, e) {
                var r = this.mapping.updateRangeValue(t);
                return (
                  null != r &&
                  (this.updateProperty(this.property, r.getValueAt(t), e), !0)
                );
              }),
              e
            );
          })(i.ChainResponse);
        e.ChainRotateResponse = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(37),
          o = r(0),
          s = r(5),
          a = (function(t) {
            function e(e, r, n, i, o) {
              var s = t.call(this, e, r, n, i) || this;
              return (s.dir = o), s;
            }
            return (
              n(e, t),
              (e.prototype.getValueAt = function(t) {
                var e = this.getProgressAt(t),
                  r = s.AngleUtils.getAngleDelta(
                    this.startValue,
                    this.endValue,
                    o.rotate3DDirTo2D(this.dir)
                  );
                return s.AngleUtils.normalize(this.startValue + r * e);
              }),
              e
            );
          })(i.RangeEntry);
        e.Rotate3DRangeEntry = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(28),
          o = r(29),
          s = r(0),
          a = 300,
          u = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (
                (r.depth = a), (r.mapping = new o.RangeMap()), (r.layer = e), r
              );
            }
            return (
              n(e, t),
              (e.prototype.addMappingEntry = function(t) {
                this.mapping.add(t);
              }),
              (e.prototype.run = function(t, e) {
                var r = this.mapping.updateRangeValue(t);
                return (
                  null != r &&
                  (this.pivot
                    ? this.layer.r3Pivot.copyFrom(this.pivot)
                    : this.layer.r3Pivot.copyFrom(this.layer.origin),
                  (this.layer.r3Depth = this.depth),
                  (this.layer.r3Axis = s.rotate3DDirToAxis(r.dir)),
                  this.updateProperty(this.layer.r3, r.getValueAt(t), e),
                  !0)
                );
              }),
              e
            );
          })(i.ChainResponse);
        e.ChainRotate3DResponse = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(29),
          o = (function(t) {
            function e(e) {
              var r = t.call(this) || this;
              return (r.mapping = new i.RangeMap()), (r.variable = e), r;
            }
            return (
              n(e, t),
              (e.prototype.addMappingEntry = function(t) {
                this.mapping.add(t);
              }),
              (e.prototype.run = function(t, e) {
                var r = this.mapping.updateRangeValue(t);
                return (
                  null != r && (this.variable.setValue(r.getValueAt(t)), !0)
                );
              }),
              e
            );
          })(r(28).ChainResponse);
        e.ChainSetResponse = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t) {
            (this.responses = []), (this.condition = t);
          }
          return (
            (t.prototype.addResponse = function(t) {
              this.responses.push(t);
            }),
            (t.prototype.init = function(t) {
              for (var e = 0, r = this.responses; e < r.length; e++)
                r[e].init(t);
            }),
            (t.prototype.run = function(t) {
              if (this.condition.eval())
                for (var e = 0, r = this.responses; e < r.length; e++) {
                  r[e].run(t);
                }
            }),
            t
          );
        })();
        e.ConditionalOneTimeResponseList = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(187),
          i = r(188),
          o = r(189),
          s = r(0),
          a = r(1),
          u = r(190),
          c = r(191),
          l = r(7),
          h = r(13),
          p = r(88),
          f = r(89),
          d = (function() {
            function t(t, e) {
              (this.layerRefReader = t), (this.varTable = e);
            }
            return (
              (t.prototype.readConditionExpressions = function(t, e, r) {
                for (
                  var i = r.withCondition(t.id),
                    o = new n.BooleanAndComposition(),
                    s = 0,
                    a = t[e];
                  s < a.length;
                  s++
                ) {
                  var u = a[s];
                  o.addExpr(this.readBooleanExpr(u, i));
                }
                return o;
              }),
              (t.prototype.readBooleanExpr = function(t, e) {
                var r = s.stringToComparisonOperator(t.operator),
                  n = this.readPropertyOrExpr(t.left, e);
                if (!n) throw new Error("Empty expression");
                var i = this.readExpr(t.right, n.dataType, e);
                if (!i) throw new Error("Empty expression");
                return new o.ComparisonExpr(r, n, i);
              }),
              (t.prototype.readExpr = function(t, e, r) {
                var n = t.type;
                if ("CONSTANT" === n) return this.readConstantExpr(t, e, r);
                if ("PROPERTY" == n) return this.readPropertyExpr(t, r);
                if ("FORMULA" === n)
                  return h.readExpression(
                    t,
                    "formula",
                    this.varTable,
                    this.layerRefReader,
                    r
                  );
                if ("VARIABLE" === n)
                  return h.readExpression(
                    t,
                    "varName",
                    this.varTable,
                    this.layerRefReader,
                    r
                  );
                throw new Error("Unknown number expression type: " + n);
              }),
              (t.prototype.readPropertyOrExpr = function(t, e) {
                var r = h.requireString(t, "type");
                if ("PROPERTY" === r) return this.readPropertyExpr(t, e);
                if ("FORMULA" === r)
                  return h.readExpression(
                    t,
                    "formula",
                    this.varTable,
                    this.layerRefReader,
                    e
                  );
                if ("VARIABLE" === r)
                  return h.readExpression(
                    t,
                    "varName",
                    this.varTable,
                    this.layerRefReader,
                    e
                  );
                throw new Error("Unhandled number expression type: " + r);
              }),
              (t.prototype.readPropertyExpr = function(t, e) {
                if ("text" == t.propertyName) {
                  var r = this.layerRefReader.readTextLayer(t, "layerId");
                  return new u.StringPropertyExpr(e, r.getStringProvider());
                }
                if ("fillColor" == t.propertyName) {
                  var n = (r = this.layerRefReader.readLayer(
                    t,
                    "layerId"
                  )).getMainColorProperty();
                  if (n) return new c.ColorPropertyExpr(e, n);
                  throw new Error("Layer does not have a color property.");
                }
                return new i.NumberPropertyExpr(
                  e,
                  this.layerRefReader.readNumberProperty(
                    t,
                    "layerId",
                    "propertyName"
                  )
                );
              }),
              (t.prototype.readConstantExpr = function(t, e, r) {
                switch (e) {
                  case a.PPExprDataType.NUMBER:
                    return new l.NumberConstantExpr(
                      h.requireNumberOrTime(t, "value"),
                      r
                    );
                  case a.PPExprDataType.STRING:
                    return new p.StringConstantExpr(
                      r,
                      h.readString(t, "value", "")
                    );
                  case a.PPExprDataType.COLOR:
                    var n = h.readColor(t, "value", null);
                    if (n) return new f.ColorConstantExpr(n, r);
                    throw new Error("Failed to read color value");
                  default:
                    throw new Error("Unhandled switch");
                }
              }),
              t
            );
          })();
        e.ConditionReader = d;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {
            this.expressions = [];
          }
          return (
            (t.prototype.addExpr = function(t) {
              this.expressions.push(t);
            }),
            (t.prototype.eval = function() {
              if (0 == this.expressions.length) return !1;
              for (var t = 0, e = this.expressions; t < e.length; t++)
                if (!e[t].eval()) return !1;
              return !0;
            }),
            t
          );
        })();
        e.BooleanAndComposition = n;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(12),
          s = r(8),
          a = (function(t) {
            function e(e, r) {
              var n = t.call(this, i.PPExprDataType.NUMBER, e) || this;
              return (n.property = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                return this.property.curVal();
              }),
              (e.prototype.evalAsString = function() {
                return o.PPExprUtils.numberToString(this.evalAsNumber());
              }),
              (e.prototype.evalAsColor = function() {
                return (
                  this.reportError(s.PPExprEvalError.castingNumberToColor()),
                  null
                );
              }),
              e
            );
          })(i.PPExpr);
        e.NumberPropertyExpr = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(0),
          i = r(1),
          o = r(12),
          s = (function() {
            function t(t, e, r) {
              (this.operator = t), (this.left = e), (this.right = r);
            }
            return (
              (t.prototype.eval = function() {
                switch (this.left.dataType) {
                  case i.PPExprDataType.NUMBER:
                    switch (this.right.dataType) {
                      case i.PPExprDataType.STRING:
                        return this.compareNumberAndString();
                      default:
                        return this.compareAsNumbers();
                    }
                  case i.PPExprDataType.STRING:
                    switch (this.right.dataType) {
                      case i.PPExprDataType.NUMBER:
                        return this.compareNumberAndString();
                      case i.PPExprDataType.COLOR:
                        return this.compareStringAndColor(
                          this.left,
                          this.right
                        );
                      default:
                        return this.compareAsStrings();
                    }
                  case i.PPExprDataType.COLOR:
                    switch (this.right.dataType) {
                      case i.PPExprDataType.STRING:
                        return this.compareStringAndColor(
                          this.left,
                          this.right
                        );
                      default:
                        return this.compareAsColors();
                    }
                  case i.PPExprDataType.LAYER:
                    return this.compareAsLayers();
                  default:
                    return !1;
                }
              }),
              (t.prototype.compareAsNumbers = function() {
                var t = this.left.evalAsNumber(),
                  e = this.right.evalAsNumber();
                return null !== t && null !== e && this.compareNumbers(t, e);
              }),
              (t.prototype.compareAsStrings = function() {
                var t = this.left.evalAsString(),
                  e = this.right.evalAsString();
                return null !== t && null !== e && this.compareStrings(t, e);
              }),
              (t.prototype.compareAsColors = function() {
                var t = this.left.evalAsColor(),
                  e = this.right.evalAsColor();
                return (
                  null !== t &&
                  null !== e &&
                  this.compareStrings(t.toHex(), e.toHex())
                );
              }),
              (t.prototype.compareAsLayers = function() {
                var t = this.left.evalAsLayer(),
                  e = this.right.evalAsLayer();
                if (null === t || null === e) return !1;
                switch (this.operator) {
                  case n.ComparisonOperator.EQ:
                    return t === e;
                  case n.ComparisonOperator.NEQ:
                    return t !== e;
                  default:
                    return !1;
                }
              }),
              (t.prototype.compareNumberAndString = function() {
                var t = this.left.evalAsString(),
                  e = this.right.evalAsString();
                if (null === t || null === e) return !1;
                var r = o.PPExprUtils.stringToNumber(t),
                  n = o.PPExprUtils.stringToNumber(e);
                return null !== r && null !== n
                  ? this.compareNumbers(r, n)
                  : this.compareStrings(t, e);
              }),
              (t.prototype.compareStringAndColor = function(t, e) {
                var r = this.left.evalAsString(),
                  n = this.right.evalAsString();
                return (
                  null !== r &&
                  null !== n &&
                  this.compareStrings(t.evalAsString(), e.evalAsString())
                );
              }),
              (t.prototype.compareNumbers = function(t, e) {
                switch (this.operator) {
                  case n.ComparisonOperator.GT:
                    return t > e;
                  case n.ComparisonOperator.GTE:
                    return t >= e;
                  case n.ComparisonOperator.LT:
                    return t < e;
                  case n.ComparisonOperator.LTE:
                    return t <= e;
                  case n.ComparisonOperator.EQ:
                    return Math.abs(t - e) <= 0.01;
                  case n.ComparisonOperator.NEQ:
                    return Math.abs(t - e) > 0.01;
                  default:
                    return !1;
                }
              }),
              (t.prototype.compareStrings = function(t, e) {
                switch (this.operator) {
                  case n.ComparisonOperator.GT:
                    return t > e;
                  case n.ComparisonOperator.GTE:
                    return t >= e;
                  case n.ComparisonOperator.LT:
                    return t < e;
                  case n.ComparisonOperator.LTE:
                    return t <= e;
                  case n.ComparisonOperator.EQ:
                    return t == e;
                  case n.ComparisonOperator.NEQ:
                    return t != e;
                  default:
                    return !1;
                }
              }),
              t
            );
          })();
        e.ComparisonExpr = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(12),
          s = r(8),
          a = (function(t) {
            function e(e, r) {
              var n = t.call(this, i.PPExprDataType.STRING, e) || this;
              return (n.stringProvider = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                var t = this.evalAsString(),
                  e = o.PPExprUtils.stringToNumber(t);
                return (
                  null === e &&
                    this.reportError(
                      s.PPExprEvalError.castingStringToNumber(t)
                    ),
                  e
                );
              }),
              (e.prototype.evalAsString = function() {
                return this.stringProvider.getStringValue();
              }),
              (e.prototype.evalAsColor = function() {
                var t = this.evalAsString(),
                  e = o.PPExprUtils.stringToColor(t);
                return (
                  null === e &&
                    this.reportError(s.PPExprEvalError.castingStringToColor(t)),
                  e
                );
              }),
              e
            );
          })(i.PPExpr);
        e.StringPropertyExpr = a;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(8),
          s = (function(t) {
            function e(e, r) {
              var n = t.call(this, i.PPExprDataType.COLOR, e) || this;
              return (n.property = r), n;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                return (
                  this.reportError(o.PPExprEvalError.castingColorToNumber()),
                  null
                );
              }),
              (e.prototype.evalAsString = function() {
                return this.property.toHex();
              }),
              (e.prototype.evalAsColor = function() {
                return this.property.toColor();
              }),
              e
            );
          })(i.PPExpr);
        e.ColorPropertyExpr = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(0),
          i = r(13),
          o = r(50),
          s = (function() {
            function t(t) {
              this.layerRefReader = t;
            }
            return (
              (t.prototype.readResponse = function(t) {
                var e = t.type;
                switch (e) {
                  case "xid_scale":
                    return this.readScaleResponse(t);
                  default:
                    throw new Error("Unhandled response type: " + e);
                }
              }),
              (t.prototype.readScaleResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new o.PinchScaleResponse(e);
                return (
                  (r.wLimit = i.readLimit(t, "minWidth", "maxWidth")),
                  (r.hLimit = i.readLimit(t, "minHeight", "maxHeight")),
                  (r.useAutoPivot = "AUTO" == i.readString(t, "pivotType", "")),
                  (r.direction = this.readDragAxis(t, "direction")),
                  r
                );
              }),
              (t.prototype.readDragAxis = function(t, e) {
                var r = t[e];
                if ("HORIZONTAL" == r) return n.DragAxis.HORIZONTAL;
                if ("VERTICAL" == r) return n.DragAxis.VERTICAL;
                if ("FREE" == r) return n.DragAxis.FREE;
                throw new Error("Invalid drag direction: " + r);
              }),
              t
            );
          })();
        e.PinchResponseReader = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(13),
          i = r(70),
          o = (function() {
            function t(t) {
              this.layerRefReader = t;
            }
            return (
              (t.prototype.readResponse = function(t) {
                var e = t.type;
                switch (e) {
                  case "xid_res_rotate":
                    return this.readRotateResponse(t);
                  default:
                    throw new Error("Unhandled response type: " + e);
                }
              }),
              (t.prototype.readRotateResponse = function(t) {
                var e = this.layerRefReader.readLayer(t, "layerId"),
                  r = new i.RotateRotateResponse(e);
                return (
                  (r.useAutoPivot = "AUTO" == n.readString(t, "pivotType", "")),
                  r
                );
              }),
              t
            );
          })();
        e.RotateResponseReader = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(23),
          i = r(195),
          o = r(22),
          s = (function() {
            function t(t, e, r) {
              (this.varMap = {}),
                (this.linkVariables = []),
                (this.functionRegistry = e),
                (this.pseudoVarTable = r);
              for (var n = 0, i = t; n < i.length; n++) {
                var o = i[n];
                this.registerVariable(o);
              }
            }
            return (
              (t.prototype.getVariables = function() {
                var t = [];
                for (var e in this.varMap) t.push(this.varMap[e]);
                return t;
              }),
              (t.prototype.getVariable = function(t) {
                var e = this.varMap[t];
                return (
                  !e &&
                    this.pseudoVarTable &&
                    (e = this.pseudoVarTable.getVariable(t)),
                  e
                );
              }),
              (t.prototype.requireVariable = function(t) {
                var e = this.getVariable(t);
                if (!e) throw new Error("No such variable: " + t);
                return e;
              }),
              (t.prototype.getNumberVariable = function(t) {
                var e = this.requireVariable(t);
                if (e instanceof n.PPNumberVar) return e;
                throw new Error("Number variable expected");
              }),
              (t.prototype.requireStringVariable = function(t) {
                var e = this.requireVariable(t);
                if (e instanceof o.PPStringVar) return e;
                throw new Error("String variable expected");
              }),
              (t.prototype.getLinkVariables = function() {
                return this.linkVariables;
              }),
              (t.prototype.getFunction = function(t, e, r) {
                var n = e.map(function(t) {
                    return t.dataType;
                  }),
                  o = this.functionRegistry.getFunction(t, n, !1);
                if (null != o) return new i.PPFunctionExpr(r, o, e);
                throw new Error("No such function " + t + "(" + n + ")");
              }),
              (t.prototype.registerVariable = function(t) {
                (this.varMap[t.name] = t),
                  t.isLink() && this.linkVariables.push(t);
              }),
              t
            );
          })();
        e.PPVarTable = s;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = r(87),
          s = r(12),
          a = r(8),
          u = (function(t) {
            function e(e, r, n) {
              var i = t.call(this, r.getReturnType(), e) || this;
              return (i.func = r), (i.args = n), i;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                var t = this.func.evaluateArguments(this.args);
                if (null == t) return null;
                for (var e = 0, r = t; e < r.length; e++)
                  if (null === r[e]) return null;
                if (this.func instanceof o.PPNumberFunction) {
                  var n = this.func.evaluate(t);
                  return null !== n && isFinite(n)
                    ? n
                    : (this.reportError(
                        a.PPExprEvalError.numberFunctionError(this.func.name)
                      ),
                      null);
                }
                if (this.func instanceof o.PPStringFunction) {
                  var i = this.func.evaluate(t);
                  if (null !== i) {
                    var u = s.PPExprUtils.stringToNumber(i);
                    return (
                      null === u &&
                        this.reportError(
                          a.PPExprEvalError.castingStringToNumber(i)
                        ),
                      u
                    );
                  }
                  return null;
                }
                return this.func instanceof o.PPColorFunction
                  ? (this.reportError(a.PPExprEvalError.castingColorToNumber()),
                    null)
                  : this.func instanceof o.PPLayerFunction
                    ? (this.reportError(
                        a.PPExprEvalError.castingLayerToNumber()
                      ),
                      null)
                    : (this.reportError(a.PPExprEvalError.unexpected()), null);
              }),
              (e.prototype.evalAsString = function() {
                var t = this.func.evaluateArguments(this.args);
                if (null == t) return null;
                for (var e = 0, r = t; e < r.length; e++)
                  if (null === r[e]) return null;
                if (this.func instanceof o.PPStringFunction) {
                  var n = this.func.evaluate(t);
                  return (
                    null === n &&
                      this.reportError(
                        a.PPExprEvalError.stringFunctionError(this.func.name)
                      ),
                    n
                  );
                }
                if (this.func instanceof o.PPNumberFunction) {
                  var i = this.func.evaluate(t);
                  return null !== i && isFinite(i)
                    ? s.PPExprUtils.numberToString(i)
                    : (this.reportError(
                        a.PPExprEvalError.numberFunctionError(this.func.name)
                      ),
                      null);
                }
                if (this.func instanceof o.PPColorFunction) {
                  var u = this.func.evaluate(t);
                  return u
                    ? u.toHex()
                    : (this.reportError(
                        a.PPExprEvalError.colorFunctionError(this.func.name)
                      ),
                      null);
                }
                return this.func instanceof o.PPLayerFunction
                  ? (this.reportError(a.PPExprEvalError.castingLayerToString()),
                    null)
                  : (this.reportError(a.PPExprEvalError.unexpected()), null);
              }),
              (e.prototype.evalAsColor = function() {
                var t = this.func.evaluateArguments(this.args);
                if (null == t) return null;
                for (var e = 0, r = t; e < r.length; e++)
                  if (null === r[e]) return null;
                if (this.func instanceof o.PPColorFunction)
                  return (
                    null === (n = this.func.evaluate(t)) &&
                      this.reportError(
                        a.PPExprEvalError.colorFunctionError(this.func.name)
                      ),
                    n
                  );
                if (this.func instanceof o.PPStringFunction) {
                  var n,
                    i = this.func.evaluate(t);
                  return null === i
                    ? (this.reportError(
                        a.PPExprEvalError.stringFunctionError(this.func.name)
                      ),
                      null)
                    : (null === (n = s.PPExprUtils.stringToColor(i)) &&
                        this.reportError(
                          a.PPExprEvalError.castingStringToColor(i)
                        ),
                      n);
                }
                return this.func instanceof o.PPNumberFunction
                  ? (this.reportError(a.PPExprEvalError.castingNumberToColor()),
                    null)
                  : this.func instanceof o.PPLayerFunction
                    ? (this.reportError(
                        a.PPExprEvalError.castingLayerToColor()
                      ),
                      null)
                    : (this.reportError(a.PPExprEvalError.unexpected()), null);
              }),
              (e.prototype.evalAsLayer = function() {
                var t = this.func.evaluateArguments(this.args);
                if (null == t) return null;
                for (var e = 0, r = t; e < r.length; e++)
                  if (null === r[e]) return null;
                if (this.func instanceof o.PPLayerFunction) {
                  var n = this.func.evaluate(t);
                  return (
                    null === n &&
                      this.reportError(
                        a.PPExprEvalError.layerFunctionError(this.func.name)
                      ),
                    n
                  );
                }
                return this.func instanceof o.PPNumberFunction
                  ? (this.reportError(a.PPExprEvalError.castingNumberToLayer()),
                    null)
                  : this.func instanceof o.PPStringFunction
                    ? (this.reportError(
                        a.PPExprEvalError.castingStringToLayer()
                      ),
                      null)
                    : this.func instanceof o.PPColorFunction
                      ? (this.reportError(
                          a.PPExprEvalError.castingColorToLayer()
                        ),
                        null)
                      : (this.reportError(a.PPExprEvalError.unexpected()),
                        null);
              }),
              e
            );
          })(i.PPExpr);
        e.PPFunctionExpr = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(1),
          o = (function(t) {
            function e(e) {
              var r = t.call(this, i.PPExprDataType.STRING, null) || this;
              return (r.variable = e), r;
            }
            return (
              n(e, t),
              (e.prototype.evalAsNumber = function() {
                return null;
              }),
              (e.prototype.evalAsString = function() {
                var t = this.variable.evalAsString() || "";
                return this.variable.variable.name + " : " + t;
              }),
              (e.prototype.evalAsColor = function() {
                return null;
              }),
              e
            );
          })(i.PPExpr);
        e.PPVariableDisplayExpr = o;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t) {
            (this.globalVarMap = {}),
              (this.localVarMap = {}),
              (this.mainSceneId = t);
          }
          return (
            (t.prototype.addGlobalVariable = function(t) {
              this.globalVarMap[t.name] = t;
            }),
            (t.prototype.getGlobalVariables = function() {
              var t = [];
              for (var e in this.globalVarMap) t.push(this.globalVarMap[e]);
              return t;
            }),
            (t.prototype.addLocalVariable = function(t, e) {
              this.getSceneVarMap(t)[e.name] = e;
            }),
            (t.prototype.getLocalVariable = function(t, e) {
              var r = this.localVarMap[t];
              return r ? r[e] : null;
            }),
            (t.prototype.updateScene = function(t) {
              this.localVarMap[t.id] = {};
              for (
                var e = 0, r = t.varTable.getVariables();
                e < r.length;
                e++
              ) {
                var n = r[e];
                n.isLink() || this.addLocalVariable(t.id, n);
              }
            }),
            (t.prototype.getSceneVarMap = function(t) {
              var e = this.localVarMap[t];
              return e || ((e = {}), (this.localVarMap[t] = e)), e;
            }),
            t
          );
        })();
        e.PPGlobalVarTable = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(4),
          i = r(3),
          o = r(199),
          s = (function() {
            function t(t, e) {
              (this.hintEnabled = !1),
                (this.currentSession = null),
                (this.observers = []),
                (this.element = t),
                (this.clock = e),
                (this.boundOnTouchDown = this.onTouchDown.bind(this)),
                (this.boundOnTouchUp = this.onTouchUp.bind(this)),
                (this.boundOnTouchMove = this.onTouchMove.bind(this)),
                this.updateCanvasPosition(),
                t.addEventListener("mousedown", this.boundOnTouchDown),
                document.addEventListener("mousemove", this.boundOnTouchMove),
                t.addEventListener("touchstart", this.boundOnTouchDown);
            }
            return (
              (t.prototype.registerObserver = function(t) {
                this.observers.push(t);
              }),
              (t.prototype.updateCanvasPosition = function() {
                (this.canvasBoundingRect = this.element.getBoundingClientRect()),
                (this.canvasBoundingRect.y += window.scrollY),
                  console.log("Updating canvas rect", this.canvasBoundingRect);
              }),
              (t.prototype.onTouchSessionEnded = function(t) {
                if (!t && this.hintEnabled)
                  for (
                    var e = 0, r = this.scene.findTouchableLayers();
                    e < r.length;
                    e++
                  ) {
                    r[e].requestHighlight();
                  }
              }),
              (t.prototype.onTouchDown = function(t) {
                if (
                  (this.currentEvent ||
                    (this.currentEvent = new n.PPTouchEvent()),
                  t.changedTouches)
                )
                  for (var e = 0; e < t.changedTouches.length; e++) {
                    var r = t.changedTouches[e],
                      i = this.convertCoordinate(r.pageX, r.pageY);
                    this.currentEvent.addPointer(
                      r.identifier,
                      i.x,
                      i.y,
                      this.clock.getNow()
                    );
                  }
                else {
                  i = this.convertCoordinate(t.pageX, t.pageY);
                  this.currentEvent.addPointer(
                    "MOUSE",
                    i.x,
                    i.y,
                    this.clock.getNow()
                  );
                }
                this.updateTouchPseudoVariables(),
                  (this.currentSession = new o.PPTouchSession(this));
                for (
                  var s = 0, a = this.buildTouchTargets();
                  s < a.length;
                  s++
                ) {
                  var u = a[s];
                  this.currentSession.addTarget(u);
                }
                for (var c = 0, l = this.observers; c < l.length; c++)
                  l[c].onTouchBegin(this.currentSession);
                return (
                  this.currentSession.onTouchEvent(this.currentEvent),
                  document.addEventListener("mouseup", this.boundOnTouchUp),
                  document.addEventListener("touchmove", this.boundOnTouchMove),
                  document.addEventListener("touchend", this.boundOnTouchUp),
                  t.preventDefault(),
                  !0
                );
              }),
              (t.prototype.onTouchMove = function(t) {
                if (this.scene && this.scene.rootLayer) {
                  if (this.currentEvent) {
                    if (t.changedTouches)
                      for (var e = 0; e < t.changedTouches.length; e++) {
                        var r = t.changedTouches[e],
                          n = this.convertCoordinate(r.pageX, r.pageY);
                        this.currentEvent.addMovement(
                          r.identifier,
                          n.x,
                          n.y,
                          this.clock.getNow()
                        );
                      }
                    else {
                      n = this.convertCoordinate(t.pageX, t.pageY);
                      this.currentEvent.addMovement(
                        "MOUSE",
                        n.x,
                        n.y,
                        this.clock.getNow()
                      );
                    }
                    this.updateTouchPseudoVariables(),
                      this.currentSession &&
                        this.currentSession.onTouchEvent(this.currentEvent);
                  }
                  if (!t.changedTouches) {
                    n = this.convertCoordinate(t.pageX, t.pageY);
                    var i = this.scene.getPseudoVarTable();
                    i.mouseX.setValue(n.x), i.mouseY.setValue(n.y);
                  }
                }
              }),
              (t.prototype.onTouchUp = function(t) {
                if (t.changedTouches)
                  for (var e = 0; e < t.changedTouches.length; e++) {
                    var r = t.changedTouches[e];
                    this.currentEvent.removePointer(
                      r.identifier,
                      this.clock.getNow()
                    );
                  }
                else
                  this.currentEvent.removePointer("MOUSE", this.clock.getNow());
                this.currentSession &&
                  this.currentSession.onTouchEvent(this.currentEvent),
                  this.scene
                    .getPseudoVarTable()
                    .touchPointerCount.setValue(
                      this.currentEvent.getTouchCount()
                    ),
                  0 == this.currentEvent.getTouchCount() &&
                    ((this.currentEvent = null),
                    (this.currentSession = null),
                    document.removeEventListener(
                      "mouseup",
                      this.boundOnTouchUp
                    ),
                    document.removeEventListener(
                      "touchmove",
                      this.boundOnTouchMove
                    ),
                    document.removeEventListener(
                      "touchend",
                      this.boundOnTouchUp
                    ));
              }),
              (t.prototype.updateTouchPseudoVariables = function() {
                var t = this.scene.getPseudoVarTable();
                this.currentEvent.focus &&
                  (t.touchX.setValue(this.currentEvent.focus.x),
                  t.touchY.setValue(this.currentEvent.focus.y));
                var e = this.currentEvent.getVelocity();
                e &&
                  (t.touchVelocityX.setValue(e.x),
                  t.touchVelocityY.setValue(e.y),
                  t.touchVelocity.setValue(Math.sqrt(e.x * e.x + e.y * e.y))),
                  t.touchPointerCount.setValue(
                    this.currentEvent.getTouchCount()
                  );
              }),
              (t.prototype.buildTouchTargets = function() {
                if (this.scene && this.currentEvent) {
                  var t = [];
                  this.scene.rootLayer.findLayersAt(this.currentEvent.focus, t);
                  for (var e = [], r = 0, n = t; r < n.length; r++)
                    for (var i = 0, o = n[r].touchTriggers; i < o.length; i++) {
                      var s = o[i];
                      this.isHidden(s, e) || e.push(s);
                    }
                  return e;
                }
              }),
              (t.prototype.isHidden = function(t, e) {
                for (var r = 0, n = e; r < n.length; r++) {
                  var i = n[r];
                  if (
                    i !== t &&
                    i.layer != t.layer &&
                    t.getTouchEventUsageType() === i.getTouchEventUsageType()
                  )
                    return !0;
                }
                return !1;
              }),
              (t.prototype.convertCoordinate = function(t, e) {
                var r = -this.canvasBoundingRect.left,
                  n = -this.canvasBoundingRect.top;
                return {
                  x:
                    (t + r) *
                    (this.scene.rootLayer.w.curVal() /
                      this.canvasBoundingRect.width),
                  y:
                    (e + n) *
                    (this.scene.rootLayer.h.curVal() /
                      this.canvasBoundingRect.height)
                };
              }),
              t
            );
          })();
        e.SceneTouchHandler = s;
      },
      function(t, e, r) {
        "use strict";
        function n(t, e) {
          return t == i.TouchEventUsageType.MOVE_VERTICAL
            ? e == i.TouchEventUsageType.MOVE_HORIZONTAL
            : t == i.TouchEventUsageType.MOVE_HORIZONTAL
              ? e == i.TouchEventUsageType.MOVE_VERTICAL
              : t == i.TouchEventUsageType.LONG_PRESS &&
                e == i.TouchEventUsageType.TAP;
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(4),
          o = r(3),
          s = (function() {
            return function(t) {
              (this.canceled = !1), (this.trigger = t);
            };
          })(),
          a = (function() {
            function t(t) {
              (this.touchTargets = []),
                (this.touchEventConsumed = !1),
                (this.listener = t);
            }
            return (
              (t.prototype.addTarget = function(t) {
                t.onTouchSessionStarted(this), this.touchTargets.push(new s(t));
              }),
              (t.prototype.containsLayer = function(t) {
                for (var e = 0, r = this.touchTargets; e < r.length; e++)
                  if (r[e].trigger.layer.id == t) return !0;
                return !1;
              }),
              (t.prototype.onTouchEvent = function(t) {
                for (var e = 0, r = this.touchTargets; e < r.length; e++) {
                  var n = r[e];
                  n.canceled || n.trigger.onTouchEvent(t);
                }
                if (
                  t.lastAction === i.TouchEventAction.UP &&
                  0 === t.getTouchCount()
                ) {
                  for (var o = 0, s = this.touchTargets; o < s.length; o++) {
                    var a = s[o];
                    !a.canceled && a.trigger.autoEnd && (a.canceled = !0);
                  }
                  this.allEnded() &&
                    this.listener.onTouchSessionEnded(this.touchEventConsumed);
                }
              }),
              (t.prototype.markAsEventConsumed = function() {
                this.touchEventConsumed = !0;
              }),
              (t.prototype.notifyCanceled = function(t) {
                var e = this.findEntryOfTrigger(t);
                e &&
                  !e.canceled &&
                  ((e.canceled = !0),
                  this.allEnded() &&
                    this.listener.onTouchSessionEnded(this.touchEventConsumed));
              }),
              (t.prototype.notifyEnded = function(t) {
                var e = this.findEntryOfTrigger(t);
                e && !e.canceled && (this.touchEventConsumed = !0);
              }),
              (t.prototype.notifyDetected = function(t) {
                (this.touchEventConsumed = !0),
                  this.cancelConflictingTriggers(
                    t.getTouchEventUsageType(),
                    t.id
                  );
              }),
              (t.prototype.findEntryOfTrigger = function(t) {
                for (var e = 0, r = this.touchTargets; e < r.length; e++) {
                  var n = r[e];
                  if (n.trigger === t) return n;
                }
                return null;
              }),
              (t.prototype.allEnded = function() {
                for (var t = 0, e = this.touchTargets; t < e.length; t++)
                  if (!e[t].canceled) return !1;
                return !0;
              }),
              (t.prototype.cancelConflictingTriggers = function(t, e) {
                for (var r = 0, i = this.touchTargets; r < i.length; r++) {
                  var s = i[r],
                    a = s.trigger;
                  a.getId() !== e &&
                    n(t, a.getTouchEventUsageType()) &&
                    (o.Logger.i(
                      a.constructor.name +
                        " canceled by conflicting trigger " +
                        e +
                        "/" +
                        t
                    ),
                    a.reset(),
                    (s.canceled = !0));
                }
              }),
              t
            );
          })();
        e.PPTouchSession = a;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t() {
            (this.scale = 1),
              (this.paused = !1),
              (this.now = 0),
              (this.lastUpdateTime = Date.now());
          }
          return (
            (t.prototype.pause = function() {
              this.paused = !0;
            }),
            (t.prototype.resume = function() {
              (this.lastUpdateTime = Date.now()), (this.paused = !1);
            }),
            (t.prototype.updateNow = function() {
              if (!this.paused) {
                var t = Date.now();
                (this.now += Math.round(
                  this.scale * (t - this.lastUpdateTime)
                )),
                  (this.lastUpdateTime = t);
              }
              return this.now;
            }),
            (t.prototype.getNow = function() {
              return this.now;
            }),
            (t.prototype.isPaused = function() {
              return this.paused;
            }),
            t
          );
        })();
        e.PPClock = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(202),
          i = r(0),
          o = r(203),
          s = r(204),
          a = r(205),
          u = r(206),
          c = (function() {
            function t() {}
            return (
              (t.fromName = function(t, e, r, c, l) {
                return "FADE" == t
                  ? new n.FadeTransition(e, r, c, l)
                  : "POP" == t
                    ? new s.PopTransition(e, r, c, l)
                    : "SLIDE_LEFT" == t
                      ? new o.SlideTransition(i.MoveDir.LEFT, e, r, c, l)
                      : "SLIDE_RIGHT" == t
                        ? new o.SlideTransition(i.MoveDir.RIGHT, e, r, c, l)
                        : "SLIDE_UP" == t
                          ? new o.SlideTransition(i.MoveDir.UP, e, r, c, l)
                          : "SLIDE_DOWN" == t
                            ? new o.SlideTransition(i.MoveDir.DOWN, e, r, c, l)
                            : "SLIDEOUT_LEFT" == t
                              ? new u.SlideOutTransition(
                                  i.MoveDir.LEFT,
                                  e,
                                  r,
                                  c,
                                  l
                                )
                              : "SLIDEOUT_RIGHT" == t
                                ? new u.SlideOutTransition(
                                    i.MoveDir.RIGHT,
                                    e,
                                    r,
                                    c,
                                    l
                                  )
                                : "SLIDEOUT_UP" == t
                                  ? new u.SlideOutTransition(
                                      i.MoveDir.UP,
                                      e,
                                      r,
                                      c,
                                      l
                                    )
                                  : "SLIDEOUT_DOWN" == t
                                    ? new u.SlideOutTransition(
                                        i.MoveDir.DOWN,
                                        e,
                                        r,
                                        c,
                                        l
                                      )
                                    : "FLIP_LEFT" == t
                                      ? new a.FlipTransition(
                                          i.MoveDir.LEFT,
                                          e,
                                          r,
                                          c,
                                          l
                                        )
                                      : "FLIP_RIGHT" == t
                                        ? new a.FlipTransition(
                                            i.MoveDir.RIGHT,
                                            e,
                                            r,
                                            c,
                                            l
                                          )
                                        : "FLIP_UP" == t
                                          ? new a.FlipTransition(
                                              i.MoveDir.UP,
                                              e,
                                              r,
                                              c,
                                              l
                                            )
                                          : "FLIP_DOWN" == t
                                            ? new a.FlipTransition(
                                                i.MoveDir.DOWN,
                                                e,
                                                r,
                                                c,
                                                l
                                              )
                                            : null;
              }),
              t
            );
          })();
        e.SceneTransitionFactory = c;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(38),
          o = r(15),
          s = r(6),
          a = r(7),
          u = o.EasingFuncFactory.fromName(
            o.EasingFuncFactory.EASE_IN_OUT_QUAD
          ),
          c = o.EasingFuncFactory.fromName(
            o.EasingFuncFactory.EASE_IN_OUT_QUAD
          ),
          l = (function(t) {
            function e(e, r, n, i) {
              return t.call(this, e, r, n, i) || this;
            }
            return (
              n(e, t),
              (e.prototype.start = function(t) {
                var e = this.prevSceneRenderer.getModel(),
                  r = this.nextSceneRenderer.getModel();
                r.o.setImmediate(0),
                  this.registerAnimation(
                    e.o,
                    new s.EasingSetNumberAnimation(
                      new a.NumberConstantExpr(0),
                      350,
                      u
                    ),
                    t
                  ),
                  this.registerAnimation(
                    r.o,
                    new s.EasingSetNumberAnimation(
                      new a.NumberConstantExpr(100),
                      350,
                      c
                    ),
                    t
                  );
              }),
              (e.prototype.end = function(t) {
                this.prevSceneRenderer.getModel().o.setImmediate(100);
              }),
              e
            );
          })(i.SceneTransition);
        e.FadeTransition = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(38),
          o = r(15),
          s = r(0),
          a = r(6),
          u = r(7),
          c = o.EasingFuncFactory.fromName(
            o.EasingFuncFactory.EASE_IN_OUT_QUAD
          ),
          l = (function(t) {
            function e(e, r, n, i, o) {
              var s = t.call(this, r, n, i, o) || this;
              return (s.dir = e), s;
            }
            return (
              n(e, t),
              (e.prototype.start = function(t) {
                var e,
                  r = this.nextSceneRenderer.getModel();
                switch (this.dir) {
                  case s.MoveDir.UP:
                    (e = r.y).setImmediate(r.h.curVal());
                    break;
                  case s.MoveDir.DOWN:
                    (e = r.y).setImmediate(-r.h.curVal());
                    break;
                  case s.MoveDir.LEFT:
                    (e = r.x).setImmediate(r.w.curVal());
                    break;
                  case s.MoveDir.RIGHT:
                    (e = r.x).setImmediate(-r.w.curVal());
                    break;
                  default:
                    return;
                }
                this.registerAnimation(
                  e,
                  new a.EasingSetNumberAnimation(
                    new u.NumberConstantExpr(0),
                    320,
                    c
                  ),
                  t
                );
              }),
              (e.prototype.end = function(t) {}),
              e
            );
          })(i.SceneTransition);
        e.SlideTransition = l;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(38),
          o = r(15),
          s = r(2),
          a = r(6),
          u = r(7),
          c = o.EasingFuncFactory.fromName(
            o.EasingFuncFactory.EASE_IN_OUT_CUBIC
          ),
          l = o.EasingFuncFactory.fromName(
            o.EasingFuncFactory.EASE_IN_OUT_CUBIC
          ),
          h = (function(t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.start = function(t) {
                var e = this.nextScene.rootLayer;
                e.moveOrigin(new s.Point(0.5, 0.5)),
                  e.scaleX.setImmediate(0),
                  e.scaleY.setImmediate(0),
                  e.o.setImmediate(0),
                  this.registerAnimation(
                    e.scaleX,
                    new a.EasingSetNumberAnimation(
                      new u.NumberConstantExpr(100),
                      320,
                      c
                    ),
                    t
                  ),
                  this.registerAnimation(
                    e.scaleY,
                    new a.EasingSetNumberAnimation(
                      new u.NumberConstantExpr(100),
                      320,
                      c
                    ),
                    t
                  ),
                  this.registerAnimation(
                    e.o,
                    new a.EasingSetNumberAnimation(
                      new u.NumberConstantExpr(100),
                      200,
                      l
                    ),
                    t
                  );
              }),
              (e.prototype.end = function(t) {
                this.nextScene.rootLayer.moveOrigin(new s.Point(0, 0));
              }),
              e
            );
          })(i.SceneTransition);
        e.PopTransition = h;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(38),
          o = r(15),
          s = r(0),
          a = r(6),
          u = r(7),
          c = o.EasingFuncFactory.fromName(o.EasingFuncFactory.EASE_OUT_SINE),
          l = o.EasingFuncFactory.fromName(o.EasingFuncFactory.EASE_IN_SINE),
          h = (function(t) {
            function e(e, r, n, i, o) {
              var s = t.call(this, r, n, i, o) || this;
              return (s.dir = e), s;
            }
            return (
              n(e, t),
              (e.prototype.start = function(t) {
                var e,
                  r,
                  n,
                  i,
                  o = this.prevSceneRenderer.getModel(),
                  h = this.nextSceneRenderer.getModel(),
                  p = 0.5,
                  f = 0.5;
                switch (this.dir) {
                  case s.MoveDir.UP:
                    (i = s.Axis2D.Y),
                      (n = -1),
                      (e = 90),
                      (r = s.Axis3D.X),
                      (f = 1);
                    break;
                  case s.MoveDir.DOWN:
                    (i = s.Axis2D.Y),
                      (n = 1),
                      (e = -90),
                      (r = s.Axis3D.X),
                      (f = 0);
                    break;
                  case s.MoveDir.LEFT:
                    (i = s.Axis2D.X),
                      (n = -1),
                      (e = -90),
                      (r = s.Axis3D.Y),
                      (p = 1);
                    break;
                  case s.MoveDir.RIGHT:
                    (i = s.Axis2D.X),
                      (n = 1),
                      (e = 90),
                      (r = s.Axis3D.Y),
                      (p = 0);
                    break;
                  default:
                    return;
                }
                var d = 0.5 * o.getSize(i).curVal();
                (o.r3Axis = r),
                  (o.r3Pivot.x = p),
                  (o.r3Pivot.y = f),
                  (o.r3Depth = 2 * o.getSize(i).curVal()),
                  (h.r3Axis = r),
                  (h.r3Pivot.x = 1 - p),
                  (h.r3Pivot.y = 1 - f),
                  (h.r3Depth = 2 * h.getSize(i).curVal()),
                  h.getPositionProp(i).setImmediate(-n * d),
                  h.r3.setImmediate(-e),
                  this.registerAnimation(
                    o.r3,
                    new a.EasingSetNumberAnimation(
                      new u.NumberConstantExpr(e),
                      250,
                      l
                    ),
                    t
                  ),
                  this.registerAnimation(
                    o.getPositionProp(i),
                    new a.EasingSetNumberAnimation(
                      new u.NumberConstantExpr(n * d),
                      250,
                      l
                    ),
                    t
                  ),
                  this.registerAnimation(
                    h.r3,
                    new a.EasingSetNumberAnimation(
                      new u.NumberConstantExpr(0),
                      250,
                      c
                    ),
                    t + 250
                  ),
                  this.registerAnimation(
                    h.getPositionProp(i),
                    new a.EasingSetNumberAnimation(
                      new u.NumberConstantExpr(0),
                      250,
                      c
                    ),
                    t + 250
                  );
              }),
              (e.prototype.end = function(t) {
                var e = this.prevSceneRenderer.getModel();
                e.r3.setImmediate(0), e.x.setImmediate(0), e.y.setImmediate(0);
              }),
              e
            );
          })(i.SceneTransition);
        e.FlipTransition = h;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(38),
          o = r(15),
          s = r(0),
          a = r(6),
          u = r(7),
          c = o.EasingFuncFactory.fromName(
            o.EasingFuncFactory.EASE_IN_OUT_QUAD
          ),
          l = (function(t) {
            function e(e, r, n, i, o) {
              var s = t.call(this, r, n, i, o) || this;
              return (s.dir = e), s;
            }
            return (
              n(e, t),
              (e.prototype.shouldAttachedToFront = function() {
                return !1;
              }),
              (e.prototype.start = function(t) {
                var e,
                  r,
                  n = this.prevSceneRenderer.getModel();
                switch (this.dir) {
                  case s.MoveDir.UP:
                    (e = n.y), (r = -n.h.curVal());
                    break;
                  case s.MoveDir.DOWN:
                    (e = n.y), (r = n.h.curVal());
                    break;
                  case s.MoveDir.LEFT:
                    (e = n.x), (r = -n.w.curVal());
                    break;
                  case s.MoveDir.RIGHT:
                    (e = n.x), (r = n.w.curVal());
                    break;
                  default:
                    return;
                }
                this.registerAnimation(
                  e,
                  new a.EasingSetNumberAnimation(
                    new u.NumberConstantExpr(r),
                    320,
                    c
                  ),
                  t
                );
              }),
              (e.prototype.end = function(t) {
                var e = this.prevSceneRenderer.getModel();
                e.x.setImmediate(0), e.y.setImmediate(0);
              }),
              e
            );
          })(i.SceneTransition);
        e.SlideOutTransition = l;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(57),
          i = r(208),
          o = r(21),
          s = r(83),
          a = r(211),
          u = r(212),
          c = r(56),
          l = r(213),
          h = r(25),
          p = r(103),
          f = r(24),
          d = r(214),
          y = r(215),
          g = r(43),
          v = r(216),
          m = (function() {
            function t(t, e, r, n, i) {
              var o = this;
              (this.scene = t),
                (this.resourceLoader = new y.ResourceLoader(e, t.id)),
                (this.fontProvider = r),
                (this.rootLayerRenderer = this.buildLayerRenderer(
                  t.rootLayer,
                  n,
                  i
                )),
                this.resourceLoader.setOnReady(function(t) {
                  o.onReady && o.onReady(t);
                });
            }
            return (
              (t.prototype.attachTo = function(t) {
                t.appendChild(this.rootLayerRenderer.getElement());
              }),
              (t.prototype.detachFromParent = function() {
                var t = this.rootLayerRenderer.getElement();
                t.parentElement && t.parentElement.removeChild(t);
                for (
                  var e = t.getElementsByTagName("video"), r = 0;
                  r < e.length;
                  r++
                )
                  e[r].pause(), (e[r].currentTime = 0);
              }),
              (t.prototype.cleanUpResources = function() {
                for (
                  var t = this.rootLayerRenderer
                      .getElement()
                      .getElementsByTagName("video"),
                    e = 0;
                  e < t.length;
                  e++
                )
                  t[e].src = "";
              }),
              (t.prototype.isReady = function() {
                return this.resourceLoader.isReady();
              }),
              (t.prototype.getResourceLoadingErrorCount = function() {
                return this.resourceLoader.getErrorCount();
              }),
              (t.prototype.setOnReady = function(t) {
                t && this.resourceLoader.isReady()
                  ? t(this.resourceLoader.getErrorCount())
                  : (this.onReady = t);
              }),
              (t.prototype.getModel = function() {
                return this.scene.rootLayer;
              }),
              (t.prototype.updateClockScale = function(t) {
                this.rootLayerRenderer.updateClockScale(t);
              }),
              (t.prototype.getLayerRenderer = function(t) {
                return this.rootLayerRenderer.findLayerRenderById(t);
              }),
              (t.prototype.buildLayerRenderer = function(t, e, r) {
                if (t instanceof o.ContainerLayer) {
                  var y = t;
                  (O = new i.ContainerLayerRenderer(y, e)).init();
                  for (var m = 0, E = y.children; m < E.length; m++) {
                    var P = E[m],
                      T = this.buildLayerRenderer(P, e, r);
                    O.addChildRenderer(T);
                  }
                  return O;
                }
                if (t instanceof n.RectLayer) {
                  var _ = t;
                  return (O = new a.RectLayerRenderer(_, e)).init(), O;
                }
                if (t instanceof s.OvalLayer) {
                  var b = t;
                  return (O = new u.OvalLayerRenderer(b, e)).init(), O;
                }
                var O;
                return t instanceof c.ImageLayer
                  ? ((O = new l.ImageLayerRenderer(
                      t,
                      e,
                      this.resourceLoader
                    )).init(),
                    O)
                  : t instanceof g.TextInputLayer
                    ? ((O = new v.TextInputLayerRenderer(
                        t,
                        e,
                        this.fontProvider,
                        r
                      )).init(),
                      O)
                    : t instanceof h.TextLayer
                      ? ((O = new p.TextLayerRenderer(
                          t,
                          e,
                          this.fontProvider
                        )).init(),
                        O)
                      : t instanceof f.VideoLayer
                        ? ((O = new d.VideoLayerRenderer(
                            t,
                            e,
                            this.resourceLoader
                          )).init(),
                          O)
                        : void 0;
              }),
              t
            );
          })();
        e.SceneRenderer = m;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(39),
          o = r(35),
          s = r(24),
          a = r(33),
          u = (function(t) {
            function e(e, r) {
              var n = t.call(this, e, r) || this;
              return (
                (n.childRenderMap = {}),
                (n.maskObserversMap = {}),
                (n.containerLayer = e),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.addChildRenderer = function(t) {
                (this.childRenderMap[t.getModel().id] = t),
                  this.addChildRendererInternal(t);
              }),
              (e.prototype.onChildOrderModified = function() {
                t.prototype.onChildOrderModified.call(this),
                  this.clearMaskObservers();
                for (
                  var e = 0, r = this.containerLayer.children;
                  e < r.length;
                  e++
                ) {
                  var n = r[e],
                    i = (a = this.childRenderMap[n.id]).getElement();
                  i.parentElement && i.parentElement.removeChild(i);
                }
                this.currentChildParentElement = this.contentElement;
                for (
                  var o = 0, s = this.containerLayer.children;
                  o < s.length;
                  o++
                ) {
                  n = s[o];
                  var a = this.childRenderMap[n.id];
                  this.addChildRendererInternal(a);
                }
              }),
              (e.prototype.updateClockScale = function(e) {
                t.prototype.updateClockScale.call(this, e);
                for (
                  var r = 0, n = this.containerLayer.children;
                  r < n.length;
                  r++
                ) {
                  var i = n[r];
                  this.childRenderMap[i.id].updateClockScale(e);
                }
              }),
              (e.prototype.findLayerRenderById = function(t) {
                if (this.getModel().id == t) return this;
                for (var r in this.childRenderMap) {
                  var n = this.childRenderMap[r];
                  if (r == t) return n;
                  if (n instanceof e) {
                    var i = n.findLayerRenderById(t);
                    if (i) return i;
                  }
                }
                return null;
              }),
              (e.prototype.createElement = function() {
                var t = document.createElement("div");
                return (
                  (t.style.position = "absolute"),
                  (t.style.overflow = this.containerLayer.clipChildren
                    ? "hidden"
                    : "visible"),
                  (this.contentElement = document.createElement("div")),
                  (this.contentElement.style.position = "absolute"),
                  (this.contentElement.style.width = "100%"),
                  (this.contentElement.style.height = "100%"),
                  t.appendChild(this.contentElement),
                  (this.currentChildParentElement = this.contentElement),
                  t
                );
              }),
              (e.prototype.updateToElement = function(e) {
                t.prototype.updateToElement.call(this, e),
                  (e.style.backgroundColor = this.containerLayer.fillColor.toString(
                    this.containerLayer.fillOpacity.curVal()
                  )),
                  (this.contentElement.style.top =
                    Math.round(-this.containerLayer.sY.curVal()) + "px"),
                  (this.contentElement.style.left =
                    Math.round(-this.containerLayer.sX.curVal()) + "px");
                var r = Math.min(
                  this.containerLayer.radius.curVal(),
                  this.containerLayer.w.curVal() / 2,
                  this.containerLayer.h.curVal() / 2
                );
                (e.style.borderRadius = r + "px"),
                  r > 0 && this.containerLayer.clipChildren
                    ? (e.style["-webkit-mask-image"] =
                        "-linear-gradient(white, white)")
                    : (e.style["-webkit-mask-image"] = "");
              }),
              (e.prototype.addChildRendererInternal = function(t) {
                t.getMaskElementId()
                  ? (this.contentElement.appendChild(t.getElement()),
                    (this.currentMaskLayer = t.getModel()),
                    (this.currentMaskElementId = t.getMaskElementId()),
                    this.addMaskGroupElement())
                  : t.getModel() instanceof s.VideoLayer &&
                    this.currentMaskLayer
                    ? (this.addMaskGroupElement(),
                      this.currentChildParentElement.appendChild(
                        t.getElement()
                      ),
                      this.addMaskGroupElement())
                    : this.currentChildParentElement.appendChild(
                        t.getElement()
                      );
              }),
              (e.prototype.addMaskGroupElement = function() {
                (this.currentChildParentElement = this.createMaskGroupElement(
                  this.currentMaskLayer,
                  this.currentMaskElementId
                )),
                  this.contentElement.appendChild(
                    this.currentChildParentElement
                  );
              }),
              (e.prototype.createMaskGroupElement = function(t, e) {
                var r = document.createElement("div");
                if (o.BrowserDetector.supportsMask()) {
                  r.setAttribute(
                    "style",
                    "-webkit-clip-path:url(#" +
                      e +
                      "); clip-path:url(#" +
                      e +
                      ")"
                  ),
                    (r.style.position = "absolute"),
                    (r.style.top = "0"),
                    (r.style.left = "0"),
                    (r.style.width = "100%"),
                    (r.style.height = "100%");
                  var n = {
                    onLayerModified: function(t) {
                      r.style.x = Math.random() + "";
                    },
                    onChildOrderModified: function() {}
                  };
                  t.addObserver(n),
                    this.maskObserversMap[t.id] ||
                      (this.maskObserversMap[t.id] = []),
                    this.maskObserversMap[t.id].push(n);
                } else
                  (r.style.position = "absolute"),
                    (r.style.top = "0"),
                    (r.style.left = "0"),
                    (r.style.width = "100%"),
                    (r.style.height = "100%");
                return r;
              }),
              (e.prototype.clearMaskObservers = function() {
                for (
                  var t = 0, e = this.containerLayer.children;
                  t < e.length;
                  t++
                ) {
                  var r = e[t];
                  if (
                    r instanceof a.ShapeLayer &&
                    r.isMask &&
                    this.maskObserversMap[r.id]
                  )
                    for (; this.maskObserversMap[r.id].length > 0; )
                      r.removeObserver(this.maskObserversMap[r.id][0]),
                        this.maskObserversMap[r.id].splice(0, 1);
                }
              }),
              e
            );
          })(i.BaseLayerRenderer);
        e.ContainerLayerRenderer = u;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.wheelDeltaX = 0),
              (e.wheelDeltaY = 0),
              (e.propagationStopped = !1),
              e
            );
          }
          return (
            n(e, t),
            (e.obtainInstance = function(t) {
              if (this.recyclables.length > 0) {
                var r = this.recyclables.pop();
                return (r.time = t), r;
              }
              return new e(t);
            }),
            (e.prototype.stopPropagation = function() {
              this.propagationStopped = !0;
            }),
            (e.prototype.isPropagationStopped = function() {
              return this.propagationStopped;
            }),
            (e.prototype.recycle = function() {
              e.recyclables.length < e.MAX_POOL_SIZE &&
                ((this.wheelDeltaX = 0),
                (this.wheelDeltaY = 0),
                (this.propagationStopped = !1),
                e.recyclables.push(this));
            }),
            (e.MAX_POOL_SIZE = 100),
            (e.recyclables = []),
            e
          );
        })(r(101).PPMouseEvent);
        e.PPWheelEvent = i;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = new (r(48)).CubicBezierEasingFunc(0.4, 0, 0.2, 1),
          i = (function() {
            function t(t) {
              (this.parentElement = t),
                (this.interval = null),
                (t.style.boxSizing = "border-box"),
                (this.highlightElement = document.createElement("div")),
                (this.highlightElement.style.position = "absolute"),
                (this.highlightElement.style.top = "0"),
                (this.highlightElement.style.left = "0"),
                (this.highlightElement.style.right = "0"),
                (this.highlightElement.style.bottom = "0"),
                (this.highlightElement.style.background =
                  "rgba(246, 166, 35, 0.2)"),
                (this.highlightElement.style.borderRadius = "3px"),
                (this.highlightElement.style.border = "solid 1px #F6A623");
            }
            return (
              (t.prototype.highlight = function() {
                null === this.interval &&
                  ((this.startTime = Date.now()),
                  this.parentElement.appendChild(this.highlightElement),
                  this.animate(),
                  (this.interval = setInterval(
                    this.animate.bind(this),
                    1e3 / 60
                  )));
              }),
              (t.prototype.animate = function() {
                var t = Date.now() - this.startTime;
                t < 0
                  ? (this.highlightElement.style.opacity = "0")
                  : t < 330
                    ? (this.highlightElement.style.opacity =
                        "" + n.computeValueProgress(t / 330))
                    : t < 660
                      ? (this.highlightElement.style.opacity =
                          "" + (1 - n.computeValueProgress((t - 330) / 330)))
                      : (this.parentElement.removeChild(this.highlightElement),
                        clearInterval(this.interval),
                        (this.interval = null));
              }),
              t
            );
          })();
        e.LayerHighlighter = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this, e, r) || this;
            return (n.rectLayer = e), n;
          }
          return (
            n(e, t),
            (e.prototype.createShapeElement = function() {
              return document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect"
              );
            }),
            (e.prototype.createMaskElement = function() {
              return document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect"
              );
            }),
            (e.prototype.updateModelToShapeElement = function(t) {
              t.setAttribute("width", this.rectLayer.w.curVal() + ""),
                t.setAttribute("height", this.rectLayer.h.curVal() + "");
              var e = Math.min(
                this.rectLayer.radius.curVal(),
                this.rectLayer.w.curVal() / 2,
                this.rectLayer.h.curVal() / 2
              );
              t.setAttribute("rx", e + ""), t.setAttribute("ry", e + "");
            }),
            (e.prototype.updateModelToMaskElement = function(t) {
              var e = this.rectLayer,
                r = Math.min(
                  e.radius.curVal(),
                  e.w.curVal() / 2,
                  e.h.curVal() / 2
                );
              t.setAttribute("width", e.w.curVal() + ""),
                t.setAttribute("height", e.h.curVal() + ""),
                t.setAttribute("rx", r + ""),
                t.setAttribute("ry", r + ""),
                t.setAttribute(
                  "x",
                  e.x.curVal() - e.w.curVal() * e.origin.x + ""
                ),
                t.setAttribute(
                  "y",
                  e.y.curVal() - e.h.curVal() * e.origin.y + ""
                );
            }),
            e
          );
        })(r(102).ShapeLayerRenderer);
        e.RectLayerRenderer = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r) {
            var n = t.call(this, e, r) || this;
            return (n.ovalLayer = e), n;
          }
          return (
            n(e, t),
            (e.prototype.createShapeElement = function() {
              return document.createElementNS(
                "http://www.w3.org/2000/svg",
                "ellipse"
              );
            }),
            (e.prototype.createMaskElement = function() {
              return document.createElementNS(
                "http://www.w3.org/2000/svg",
                "ellipse"
              );
            }),
            (e.prototype.updateModelToShapeElement = function(t) {
              this.positionElement.style.opacity = "1";
              var e = this.ovalLayer.fillColor.toString(
                (this.ovalLayer.fillOpacity.curVal() *
                  this.ovalLayer.o.curVal()) /
                  100
              );
              t.setAttribute("fill", e),
                t.setAttribute("cx", this.ovalLayer.w.curVal() / 2 + "px"),
                t.setAttribute("cy", this.ovalLayer.h.curVal() / 2 + "px"),
                t.setAttribute("rx", this.ovalLayer.w.curVal() / 2 + "px"),
                t.setAttribute("ry", this.ovalLayer.h.curVal() / 2 + "px");
            }),
            (e.prototype.updateModelToMaskElement = function(t) {
              var e = this.ovalLayer;
              t.setAttribute("rx", this.ovalLayer.w.curVal() / 2 + ""),
                t.setAttribute("ry", this.ovalLayer.h.curVal() / 2 + ""),
                t.setAttribute(
                  "cx",
                  e.x.curVal() - e.w.curVal() * (e.origin.x - 0.5) + ""
                ),
                t.setAttribute(
                  "cy",
                  e.y.curVal() - e.h.curVal() * (e.origin.y - 0.5) + ""
                );
            }),
            e
          );
        })(r(102).ShapeLayerRenderer);
        e.OvalLayerRenderer = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function(t) {
          function e(e, r, n) {
            var i = t.call(this, e, r) || this;
            return (i.imageLayer = e), (i.resourceLoader = n), i;
          }
          return (
            n(e, t),
            (e.prototype.createElement = function() {
              return this.resourceLoader.createImageElement(
                this.imageLayer.resourceId,
                this.imageLayer.src
              );
            }),
            (e.prototype.updateToElement = function(e) {
              t.prototype.updateToElement.call(this, e),
                this.imageLayer.src && (e.src = this.imageLayer.src);
              var r = Math.min(
                this.imageLayer.radius.curVal(),
                this.imageLayer.w.curVal() / 2,
                this.imageLayer.h.curVal() / 2
              );
              e.style.borderRadius = r + "px";
            }),
            e
          );
        })(r(39).BaseLayerRenderer);
        e.ImageLayerRenderer = i;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(39),
          o = r(24),
          s = r(35),
          a = r(105),
          u = r(3),
          c = (function(t) {
            function e(e, r, n) {
              var i = t.call(this, e, r) || this;
              return (i.videoLayer = e), (i.resourceLoader = n), i;
            }
            return (
              n(e, t),
              (e.prototype.updateClockScale = function(e) {
                t.prototype.updateClockScale.call(this, e),
                  (this.videoElm.playbackRate = e);
              }),
              (e.prototype.createElement = function() {
                var t = this;
                return (
                  (this.videoElm = this.resourceLoader.createVideoElement(
                    this.videoLayer.resourceId
                  )),
                  (this.videoElm.style.objectFit = "fill"),
                  this.videoElm.setAttribute("playsinline", "true"),
                  s.BrowserDetector.isMobile() && (this.videoElm.muted = !0),
                  this.videoElm.addEventListener(
                    "play",
                    this.onPlay.bind(this)
                  ),
                  this.videoElm.addEventListener(
                    "pause",
                    this.onPause.bind(this)
                  ),
                  this.videoLayer.autoPlay ||
                    (s.BrowserDetector.isMobile() &&
                      (a.EventUtils.once(this.videoElm, "playing", function() {
                        t.videoElm.pause();
                      }),
                      this.videoElm.play())),
                  this.videoElm
                );
              }),
              (e.prototype.updateToElement = function(e) {
                for (t.prototype.updateToElement.call(this, e); ; ) {
                  var r = this.videoLayer.dequeueCommand();
                  if (!r) break;
                  switch (r.type) {
                    case o.VideoLayerCommandType.PLAY:
                      (this.videoElm.loop = r.repeating),
                        !this.videoElm.loop &&
                        this.videoElm.paused &&
                        this.videoElm.currentTime >= this.videoElm.duration
                          ? u.Logger.i("Ignoring play when it is at the end.")
                          : this.videoElm.play();
                      break;
                    case o.VideoLayerCommandType.PAUSE:
                      this.videoElm.pause();
                      break;
                    case o.VideoLayerCommandType.SEEK:
                      this.videoElm.currentTime = r.seekTime;
                  }
                }
              }),
              (e.prototype.onPlay = function() {
                this.timeUpdateInterval ||
                  (this.timeUpdateInterval = window.setInterval(
                    this.onTimeUpdate.bind(this),
                    20
                  ));
              }),
              (e.prototype.onPause = function() {
                this.timeUpdateInterval &&
                  (window.clearInterval(this.timeUpdateInterval),
                  (this.timeUpdateInterval = null));
              }),
              (e.prototype.onTimeUpdate = function() {
                document.contains(this.videoElm) ||
                  (this.timeUpdateInterval &&
                    (window.clearInterval(this.timeUpdateInterval),
                    (this.timeUpdateInterval = null))),
                  this.videoLayer.currentTime.setImmediate(
                    this.videoElm.currentTime
                  );
              }),
              e
            );
          })(i.BaseLayerRenderer);
        e.VideoLayerRenderer = c;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(105),
          i = r(3),
          o = (function() {
            function t(t, e) {
              (this.totalResourceCount = 0),
                (this.doneResourceCount = 0),
                (this.errorResourceCount = 0),
                (this.resourceProvider = t),
                (this.logPrefix = e);
            }
            return (
              (t.prototype.isReady = function() {
                return this.doneResourceCount == this.totalResourceCount;
              }),
              (t.prototype.setOnReady = function(t) {
                this.doneResourceCount == this.totalResourceCount
                  ? t(this.errorResourceCount)
                  : (this.onReady = t);
              }),
              (t.prototype.getErrorCount = function() {
                return this.errorResourceCount;
              }),
              (t.prototype.createImageElement = function(t, e) {
                var r = document.createElement("img");
                return (
                  (r.src = e || this.resourceProvider.getImageUrl(t)),
                  this.totalResourceCount++,
                  n.EventUtils.once(
                    r,
                    "load",
                    this.onResourceLoadingDone.bind(this)
                  ),
                  n.EventUtils.once(
                    r,
                    "error",
                    this.onResourceLoadingError.bind(this)
                  ),
                  r
                );
              }),
              (t.prototype.createVideoElement = function(t) {
                var e = document.createElement("video");
                return (
                  this.setVideoSource(e, this.resourceProvider.getImageUrl(t)),
                  e.load(),
                  this.totalResourceCount++,
                  e.readyState > 3
                    ? this.onResourceLoadingDone()
                    : (n.EventUtils.once(
                        e,
                        "canplay",
                        this.onResourceLoadingDone.bind(this)
                      ),
                      n.EventUtils.once(
                        e,
                        "error",
                        this.onResourceLoadingError.bind(this)
                      )),
                  e
                );
              }),
              (t.prototype.setVideoSource = function(t, e) {
                t.src = e;
                var r = document.createElement("source");
                (r.src = e), t.appendChild(r);
              }),
              (t.prototype.onResourceLoadingError = function() {
                this.errorResourceCount++, this.onResourceLoadingDone();
              }),
              (t.prototype.onResourceLoadingDone = function() {
                this.doneResourceCount++,
                  i.Logger.d(
                    "Resource loaded for " +
                      this.logPrefix +
                      " - " +
                      this.doneResourceCount +
                      "/" +
                      this.totalResourceCount
                  ),
                  this.doneResourceCount == this.totalResourceCount &&
                    this.onReady &&
                    this.onReady(this.errorResourceCount);
              }),
              t
            );
          })();
        e.ResourceLoader = o;
      },
      function(t, e, r) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              };
            return function(e, r) {
              function n() {
                this.constructor = e;
              }
              t(e, r),
                (e.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = r(104),
          o = r(20),
          s = (function(t) {
            function e(e, r, n, i) {
              var s = t.call(this, e, r, n) || this;
              return (
                (s.focusRequestListener = {
                  onFocusRequested: function(t) {
                    s.inputElement &&
                      (t ? s.inputElement.focus() : s.inputElement.blur());
                  }
                }),
                (s.textInputLayer = e),
                (s.inputFocusManager = i),
                (s.placeHolderAttrs = new o.PPTextAttributes()),
                s.placeHolderAttrs.copyFrom(s.textInputLayer.textAttributes),
                e.placeHolderFontSize &&
                  (s.placeHolderAttrs.fontSize = e.placeHolderFontSize),
                e.placeHolderColor
                  ? (s.placeHolderColor = e.placeHolderColor.toString(
                      e.placeHolderOpacity
                    ))
                  : (s.placeHolderColor = e.textColor.toString(
                      e.textOpacity.curVal()
                    )),
                (e.focusRequestListener = s.focusRequestListener),
                s
              );
            }
            return (
              n(e, t),
              (e.prototype.createTextElement = function() {
                var t = this;
                return (
                  (this.inputElement = document.createElement("input")),
                  (this.inputElement.style.padding = "0"),
                  (this.inputElement.style.background = "none"),
                  (this.inputElement.style.border = "none"),
                  (this.inputElement.style.width = "100%"),
                  (this.inputElement.style.caretColor = "#FF525A"),
                  ("TEXT_PASSWORD" !== this.textInputLayer.keyboardType &&
                    "NUMBER_PASSWORD" !== this.textInputLayer.keyboardType) ||
                    (this.inputElement.type = "password"),
                  this.inputElement.addEventListener("keyup", function(e) {
                    "Escape" === e.key && t.inputElement.blur(),
                      "Enter" === e.key &&
                        (t.textInputLayer.notifyReturnKey(t.clock.getNow()),
                        t.textInputLayer.autoFocusOut && t.inputElement.blur());
                  }),
                  this.inputElement.addEventListener("input", function() {
                    (t.textInputLayer.textAttributes.text =
                      t.inputElement.value),
                      t.updateDecoratorElement(t.decoratorElement);
                  }),
                  this.inputElement.addEventListener("focus", function() {
                    (t.inputElement.scrollLeft = t.inputElement.scrollWidth),
                      t.textInputLayer.notifyFocusStatus(!0, t.clock.getNow()),
                      t.inputFocusManager.onFocusChange(t.textInputLayer, !0);
                  }),
                  this.inputElement.addEventListener("blur", function() {
                    (t.textInputLayer.textAttributes.text =
                      t.inputElement.value),
                      t.updateDecoratorElement(t.decoratorElement),
                      t.textInputLayer.notifyFocusStatus(!1, t.clock.getNow()),
                      t.inputFocusManager.onFocusChange(t.textInputLayer, !1);
                  }),
                  this.inputElement
                );
              }),
              (e.prototype.updateText = function(t) {
                this.inputElement.value = t;
              }),
              (e.prototype.createDecoratorElement = function() {
                var t = document.createElement("div");
                return (
                  (t.innerHTML = this.textToHtml(
                    this.textInputLayer.placeHolderText
                  )),
                  (t.style.whiteSpace = "nowrap"),
                  (t.style.overflow = "hidden"),
                  (t.style.width = "100%"),
                  t
                );
              }),
              (e.prototype.updateDecoratorElement = function(t) {
                "" == this.textInputLayer.textAttributes.text
                  ? ((t.style.visibility = "visible"),
                    this.applyTextAttributesToElement(
                      this.placeHolderAttrs,
                      t,
                      this.placeHolderColor
                    ))
                  : (t.style.visibility = "hidden");
              }),
              e
            );
          })(i.AbstractTextLayerRenderer);
        e.TextInputLayerRenderer = s;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function() {
          function t(t) {
            (this.cachedResultMap = {}), (this.parentElement = t);
          }
          return (
            (t.prototype.isAvailable = function(t) {
              var e = this.buildCacheKey(t);
              return (
                this.cachedResultMap.hasOwnProperty(e) ||
                  (this.cachedResultMap[e] = this.computeFontAvailability(t)),
                this.cachedResultMap[e]
              );
            }),
            (t.prototype.computeFontAvailability = function(t) {
              var e = this,
                r = document.createElement("span");
              (r.innerHTML = "wiwiwiwiwiwiwiwiwiwiwiwiwiwiwiwiwiwiwiwiwiwi"),
                (r.style.position = "absolute"),
                (r.style.width = "auto"),
                (r.style.fontSize = "128px"),
                (r.style.left = "-99999px"),
                (r.style.fontStyle = t.style),
                (r.style.fontWeight = t.weight);
              var n = function(t) {
                  (r.style.fontFamily = t), e.parentElement.appendChild(r);
                  var n = r.clientWidth;
                  return e.parentElement.removeChild(r), n;
                },
                i = function(e) {
                  return n(t.family + "," + e) !== n(e);
                };
              return i("monospace") || i("serif") || i("sans-serif");
            }),
            (t.prototype.buildCacheKey = function(t) {
              return t.family + ":" + t.style + ":" + t.weight;
            }),
            t
          );
        })();
        e.PPFontChecker = n;
      },
      function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(80),
          i = (function() {
            function t(t) {
              t.registerObserver(this);
            }
            return (
              (t.prototype.onFocusChange = function(t, e) {
                this.focusedLayer = e ? t : null;
              }),
              (t.prototype.onTouchBegin = function(t) {
                this.focusedLayer &&
                  this.focusedLayer.focusOutOnTapOutside &&
                  (t.containsLayer(this.focusedLayer.id) ||
                    t.containsLayer(n.PPSoftKeyboard.KEYBOARD_LAYER_ID) ||
                    (this.focusedLayer.requestFocus(!1),
                    t.markAsEventConsumed()));
              }),
              t
            );
          })();
        e.InputFocusManager = i;
      }
    ]);
  },
  function(t, e, r) {
    "use strict";
    t.exports = r(16).polyfill();
  },
  function(t, e, r) {
    (function(e, r) {
      /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
      !(function(r, n) {
        t.exports = (function() {
          "use strict";
          function t(t) {
            return "function" == typeof t;
          }
          function n() {
            var t = setTimeout;
            return function() {
              return t(i, 1);
            };
          }
          function i() {
            for (var t = 0; t < E; t += 2)
              (0, A[t])(A[t + 1]), (A[t] = void 0), (A[t + 1] = void 0);
            E = 0;
          }
          function o(t, e) {
            var r = this,
              n = new this.constructor(a);
            void 0 === n[N] && v(n);
            var i = r._state;
            if (i) {
              var o = arguments[i - 1];
              _(function() {
                return g(i, n, o, r._result);
              });
            } else d(r, n, t, e);
            return n;
          }
          function s(t) {
            if (t && "object" == typeof t && t.constructor === this) return t;
            var e = new this(a);
            return l(e, t), e;
          }
          function a() {}
          function u(t) {
            try {
              return t.then;
            } catch (t) {
              return (M.error = t), M;
            }
          }
          function c(e, r, n) {
            r.constructor === e.constructor &&
            n === o &&
            r.constructor.resolve === s
              ? (function(t, e) {
                  e._state === L
                    ? p(t, e._result)
                    : e._state === I
                      ? f(t, e._result)
                      : d(
                          e,
                          void 0,
                          function(e) {
                            return l(t, e);
                          },
                          function(e) {
                            return f(t, e);
                          }
                        );
                })(e, r)
              : n === M
                ? (f(e, M.error), (M.error = null))
                : void 0 === n
                  ? p(e, r)
                  : t(n)
                    ? (function(t, e, r) {
                        _(function(t) {
                          var n = !1,
                            i = (function(t, e, r, n) {
                              try {
                                t.call(e, r, n);
                              } catch (t) {
                                return t;
                              }
                            })(
                              r,
                              e,
                              function(r) {
                                n || ((n = !0), e !== r ? l(t, r) : p(t, r));
                              },
                              function(e) {
                                n || ((n = !0), f(t, e));
                              },
                              t._label
                            );
                          !n && i && ((n = !0), f(t, i));
                        }, t);
                      })(e, r, n)
                    : p(e, r);
          }
          function l(t, e) {
            t === e
              ? f(t, new TypeError("You cannot resolve a promise with itself"))
              : (function(t) {
                  var e = typeof t;
                  return null !== t && ("object" === e || "function" === e);
                })(e)
                ? c(t, e, u(e))
                : p(t, e);
          }
          function h(t) {
            t._onerror && t._onerror(t._result), y(t);
          }
          function p(t, e) {
            t._state === C &&
              ((t._result = e),
              (t._state = L),
              0 !== t._subscribers.length && _(y, t));
          }
          function f(t, e) {
            t._state === C && ((t._state = I), (t._result = e), _(h, t));
          }
          function d(t, e, r, n) {
            var i = t._subscribers,
              o = i.length;
            (t._onerror = null),
              (i[o] = e),
              (i[o + L] = r),
              (i[o + I] = n),
              0 === o && t._state && _(y, t);
          }
          function y(t) {
            var e = t._subscribers,
              r = t._state;
            if (0 !== e.length) {
              for (
                var n = void 0, i = void 0, o = t._result, s = 0;
                s < e.length;
                s += 3
              )
                (n = e[s]), (i = e[s + r]), n ? g(r, n, i, o) : i(o);
              t._subscribers.length = 0;
            }
          }
          function g(e, r, n, i) {
            var o = t(n),
              s = void 0,
              a = void 0,
              u = void 0,
              c = void 0;
            if (o) {
              if (
                ((s = (function(t, e) {
                  try {
                    return t(e);
                  } catch (t) {
                    return (M.error = t), M;
                  }
                })(n, i)) === M
                  ? ((c = !0), (a = s.error), (s.error = null))
                  : (u = !0),
                r === s)
              )
                return void f(
                  r,
                  new TypeError(
                    "A promises callback cannot return that same promise."
                  )
                );
            } else (s = i), (u = !0);
            r._state !== C ||
              (o && u
                ? l(r, s)
                : c
                  ? f(r, a)
                  : e === L
                    ? p(r, s)
                    : e === I && f(r, s));
          }
          function v(t) {
            (t[N] = D++),
              (t._state = void 0),
              (t._result = void 0),
              (t._subscribers = []);
          }
          var m = Array.isArray
              ? Array.isArray
              : function(t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                },
            E = 0,
            P = void 0,
            T = void 0,
            _ = function(t, e) {
              (A[E] = t), (A[E + 1] = e), 2 === (E += 2) && (T ? T(i) : S());
            },
            b = "undefined" != typeof window ? window : void 0,
            O = b || {},
            w = O.MutationObserver || O.WebKitMutationObserver,
            R =
              "undefined" == typeof self &&
              void 0 !== e &&
              "[object process]" === {}.toString.call(e),
            x =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel,
            A = new Array(1e3),
            S = void 0;
          S = R
            ? function() {
                return e.nextTick(i);
              }
            : w
              ? (function() {
                  var t = 0,
                    e = new w(i),
                    r = document.createTextNode("");
                  return (
                    e.observe(r, { characterData: !0 }),
                    function() {
                      r.data = t = ++t % 2;
                    }
                  );
                })()
              : x
                ? (function() {
                    var t = new MessageChannel();
                    return (
                      (t.port1.onmessage = i),
                      function() {
                        return t.port2.postMessage(0);
                      }
                    );
                  })()
                : void 0 === b
                  ? (function() {
                      try {
                        var t = Function("return this")().require("vertx");
                        return void 0 !== (P = t.runOnLoop || t.runOnContext)
                          ? function() {
                              P(i);
                            }
                          : n();
                      } catch (t) {
                        return n();
                      }
                    })()
                  : n();
          var N = Math.random()
              .toString(36)
              .substring(2),
            C = void 0,
            L = 1,
            I = 2,
            M = { error: null },
            D = 0,
            V = (function() {
              function t(t, e) {
                (this._instanceConstructor = t),
                  (this.promise = new t(a)),
                  this.promise[N] || v(this.promise),
                  m(e)
                    ? ((this.length = e.length),
                      (this._remaining = e.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? p(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(e),
                          0 === this._remaining &&
                            p(this.promise, this._result)))
                    : f(
                        this.promise,
                        new Error("Array Methods must be provided an Array")
                      );
              }
              return (
                (t.prototype._enumerate = function(t) {
                  for (var e = 0; this._state === C && e < t.length; e++)
                    this._eachEntry(t[e], e);
                }),
                (t.prototype._eachEntry = function(t, e) {
                  var r = this._instanceConstructor,
                    n = r.resolve;
                  if (n === s) {
                    var i = u(t);
                    if (i === o && t._state !== C)
                      this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof i)
                      this._remaining--, (this._result[e] = t);
                    else if (r === F) {
                      var l = new r(a);
                      c(l, t, i), this._willSettleAt(l, e);
                    } else
                      this._willSettleAt(
                        new r(function(e) {
                          return e(t);
                        }),
                        e
                      );
                  } else this._willSettleAt(n(t), e);
                }),
                (t.prototype._settledAt = function(t, e, r) {
                  var n = this.promise;
                  n._state === C &&
                    (this._remaining--,
                    t === I ? f(n, r) : (this._result[e] = r)),
                    0 === this._remaining && p(n, this._result);
                }),
                (t.prototype._willSettleAt = function(t, e) {
                  var r = this;
                  d(
                    t,
                    void 0,
                    function(t) {
                      return r._settledAt(L, e, t);
                    },
                    function(t) {
                      return r._settledAt(I, e, t);
                    }
                  );
                }),
                t
              );
            })(),
            F = (function() {
              function e(t) {
                (this[N] = D++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  a !== t &&
                    ("function" != typeof t &&
                      (function() {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor"
                        );
                      })(),
                    this instanceof e
                      ? (function(t, e) {
                          try {
                            e(
                              function(e) {
                                l(t, e);
                              },
                              function(e) {
                                f(t, e);
                              }
                            );
                          } catch (e) {
                            f(t, e);
                          }
                        })(this, t)
                      : (function() {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                          );
                        })());
              }
              return (
                (e.prototype.catch = function(t) {
                  return this.then(null, t);
                }),
                (e.prototype.finally = function(e) {
                  var r = this,
                    n = r.constructor;
                  return t(e)
                    ? r.then(
                        function(t) {
                          return n.resolve(e()).then(function() {
                            return t;
                          });
                        },
                        function(t) {
                          return n.resolve(e()).then(function() {
                            throw t;
                          });
                        }
                      )
                    : r.then(e, e);
                }),
                e
              );
            })();
          return (
            (F.prototype.then = o),
            (F.all = function(t) {
              return new V(this, t).promise;
            }),
            (F.race = function(t) {
              var e = this;
              return new e(
                m(t)
                  ? function(r, n) {
                      for (var i = t.length, o = 0; o < i; o++)
                        e.resolve(t[o]).then(r, n);
                    }
                  : function(t, e) {
                      return e(
                        new TypeError("You must pass an array to race.")
                      );
                    }
              );
            }),
            (F.resolve = s),
            (F.reject = function(t) {
              var e = new this(a);
              return f(e, t), e;
            }),
            (F._setScheduler = function(t) {
              T = t;
            }),
            (F._setAsap = function(t) {
              _ = t;
            }),
            (F._asap = _),
            (F.polyfill = function() {
              var t = void 0;
              if (void 0 !== r) t = r;
              else if ("undefined" != typeof self) t = self;
              else
                try {
                  t = Function("return this")();
                } catch (t) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var e = t.Promise;
              if (e) {
                var n = null;
                try {
                  n = Object.prototype.toString.call(e.resolve());
                } catch (t) {}
                if ("[object Promise]" === n && !e.cast) return;
              }
              t.Promise = F;
            }),
            (F.Promise = F),
            F
          );
        })();
      })();
    }.call(this, r(17), r(8)));
  },
  function(t, e) {
    function r() {
      throw new Error("setTimeout has not been defined");
    }
    function n() {
      throw new Error("clearTimeout has not been defined");
    }
    function i(t) {
      if (c === setTimeout) return setTimeout(t, 0);
      if ((c === r || !c) && setTimeout)
        return (c = setTimeout), setTimeout(t, 0);
      try {
        return c(t, 0);
      } catch (e) {
        try {
          return c.call(null, t, 0);
        } catch (e) {
          return c.call(this, t, 0);
        }
      }
    }
    function o() {
      d &&
        p &&
        ((d = !1), p.length ? (f = p.concat(f)) : (y = -1), f.length && s());
    }
    function s() {
      if (!d) {
        var t = i(o);
        d = !0;
        for (var e = f.length; e; ) {
          for (p = f, f = []; ++y < e; ) p && p[y].run();
          (y = -1), (e = f.length);
        }
        (p = null),
          (d = !1),
          (function(t) {
            if (l === clearTimeout) return clearTimeout(t);
            if ((l === n || !l) && clearTimeout)
              return (l = clearTimeout), clearTimeout(t);
            try {
              l(t);
            } catch (e) {
              try {
                return l.call(null, t);
              } catch (e) {
                return l.call(this, t);
              }
            }
          })(t);
      }
    }
    function a(t, e) {
      (this.fun = t), (this.array = e);
    }
    function u() {}
    var c,
      l,
      h = (t.exports = {});
    !(function() {
      try {
        c = "function" == typeof setTimeout ? setTimeout : r;
      } catch (t) {
        c = r;
      }
      try {
        l = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (t) {
        l = n;
      }
    })();
    var p,
      f = [],
      d = !1,
      y = -1;
    (h.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      f.push(new a(t, e)), 1 !== f.length || d || i(s);
    }),
      (a.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (h.title = "browser"),
      (h.browser = !0),
      (h.env = {}),
      (h.argv = []),
      (h.version = ""),
      (h.versions = {}),
      (h.on = u),
      (h.addListener = u),
      (h.once = u),
      (h.off = u),
      (h.removeListener = u),
      (h.removeAllListeners = u),
      (h.emit = u),
      (h.prependListener = u),
      (h.prependOnceListener = u),
      (h.listeners = function(t) {
        return [];
      }),
      (h.binding = function(t) {
        throw new Error("process.binding is not supported");
      }),
      (h.cwd = function() {
        return "/";
      }),
      (h.chdir = function(t) {
        throw new Error("process.chdir is not supported");
      }),
      (h.umask = function() {
        return 0;
      });
  },
  function(t, e, r) {
    r(19), (t.exports = self.fetch.bind(self));
  },
  function(t, e, r) {
    "use strict";
    function n(t) {
      if (
        ("string" != typeof t && (t = String(t)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
      )
        throw new TypeError("Invalid character in header field name");
      return t.toLowerCase();
    }
    function i(t) {
      return "string" != typeof t && (t = String(t)), t;
    }
    function o(t) {
      var e = {
        next: function() {
          var e = t.shift();
          return { done: void 0 === e, value: e };
        }
      };
      return (
        g.iterable &&
          (e[Symbol.iterator] = function() {
            return e;
          }),
        e
      );
    }
    function s(t) {
      (this.map = {}),
        t instanceof s
          ? t.forEach(function(t, e) {
              this.append(e, t);
            }, this)
          : Array.isArray(t)
            ? t.forEach(function(t) {
                this.append(t[0], t[1]);
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e]);
              }, this);
    }
    function a(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
      t.bodyUsed = !0;
    }
    function u(t) {
      return new Promise(function(e, r) {
        (t.onload = function() {
          e(t.result);
        }),
          (t.onerror = function() {
            r(t.error);
          });
      });
    }
    function c(t) {
      var e = new FileReader(),
        r = u(e);
      return e.readAsArrayBuffer(t), r;
    }
    function l(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }
    function h() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function(t) {
          (this._bodyInit = t),
            t
              ? "string" == typeof t
                ? (this._bodyText = t)
                : g.blob && Blob.prototype.isPrototypeOf(t)
                  ? (this._bodyBlob = t)
                  : g.formData && FormData.prototype.isPrototypeOf(t)
                    ? (this._bodyFormData = t)
                    : g.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : g.arrayBuffer &&
                        g.blob &&
                        (function(t) {
                          return t && DataView.prototype.isPrototypeOf(t);
                        })(t)
                        ? ((this._bodyArrayBuffer = l(t.buffer)),
                          (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : g.arrayBuffer &&
                          (ArrayBuffer.prototype.isPrototypeOf(t) || m(t))
                          ? (this._bodyArrayBuffer = l(t))
                          : (this._bodyText = t = Object.prototype.toString.call(
                              t
                            ))
              : (this._bodyText = ""),
            this.headers.get("content-type") ||
              ("string" == typeof t
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : g.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(t) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
        }),
        g.blob &&
          ((this.blob = function() {
            var t = a(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function() {
            return this._bodyArrayBuffer
              ? a(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(c);
          })),
        (this.text = function() {
          var t = a(this);
          if (t) return t;
          if (this._bodyBlob)
            return (function(t) {
              var e = new FileReader(),
                r = u(e);
              return e.readAsText(t), r;
            })(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function(t) {
                for (
                  var e = new Uint8Array(t), r = new Array(e.length), n = 0;
                  n < e.length;
                  n++
                )
                  r[n] = String.fromCharCode(e[n]);
                return r.join("");
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }),
        g.formData &&
          (this.formData = function() {
            return this.text().then(f);
          }),
        (this.json = function() {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    function p(t, e) {
      var r = (e = e || {}).body;
      if (t instanceof p) {
        if (t.bodyUsed) throw new TypeError("Already read");
        (this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new s(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          (this.signal = t.signal),
          r || null == t._bodyInit || ((r = t._bodyInit), (t.bodyUsed = !0));
      } else this.url = String(t);
      if (
        ((this.credentials =
          e.credentials || this.credentials || "same-origin"),
        (!e.headers && this.headers) || (this.headers = new s(e.headers)),
        (this.method = (function(t) {
          var e = t.toUpperCase();
          return E.indexOf(e) > -1 ? e : t;
        })(e.method || this.method || "GET")),
        (this.mode = e.mode || this.mode || null),
        (this.signal = e.signal || this.signal),
        (this.referrer = null),
        ("GET" === this.method || "HEAD" === this.method) && r)
      )
        throw new TypeError("Body not allowed for GET or HEAD requests");
      this._initBody(r);
    }
    function f(t) {
      var e = new FormData();
      return (
        t
          .trim()
          .split("&")
          .forEach(function(t) {
            if (t) {
              var r = t.split("="),
                n = r.shift().replace(/\+/g, " "),
                i = r.join("=").replace(/\+/g, " ");
              e.append(decodeURIComponent(n), decodeURIComponent(i));
            }
          }),
        e
      );
    }
    function d(t, e) {
      e || (e = {}),
        (this.type = "default"),
        (this.status = void 0 === e.status ? 200 : e.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = "statusText" in e ? e.statusText : "OK"),
        (this.headers = new s(e.headers)),
        (this.url = e.url || ""),
        this._initBody(t);
    }
    function y(t, e) {
      return new Promise(function(r, n) {
        function i() {
          a.abort();
        }
        var o = new p(t, e);
        if (o.signal && o.signal.aborted)
          return n(new T("Aborted", "AbortError"));
        var a = new XMLHttpRequest();
        (a.onload = function() {
          var t = {
            status: a.status,
            statusText: a.statusText,
            headers: (function(t) {
              var e = new s();
              return (
                t
                  .replace(/\r?\n[\t ]+/g, " ")
                  .split(/\r?\n/)
                  .forEach(function(t) {
                    var r = t.split(":"),
                      n = r.shift().trim();
                    if (n) {
                      var i = r.join(":").trim();
                      e.append(n, i);
                    }
                  }),
                e
              );
            })(a.getAllResponseHeaders() || "")
          };
          t.url =
            "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
          var e = "response" in a ? a.response : a.responseText;
          r(new d(e, t));
        }),
          (a.onerror = function() {
            n(new TypeError("Network request failed"));
          }),
          (a.ontimeout = function() {
            n(new TypeError("Network request failed"));
          }),
          (a.onabort = function() {
            n(new T("Aborted", "AbortError"));
          }),
          a.open(o.method, o.url, !0),
          "include" === o.credentials
            ? (a.withCredentials = !0)
            : "omit" === o.credentials && (a.withCredentials = !1),
          "responseType" in a && g.blob && (a.responseType = "blob"),
          o.headers.forEach(function(t, e) {
            a.setRequestHeader(e, t);
          }),
          o.signal &&
            (o.signal.addEventListener("abort", i),
            (a.onreadystatechange = function() {
              4 === a.readyState && o.signal.removeEventListener("abort", i);
            })),
          a.send(void 0 === o._bodyInit ? null : o._bodyInit);
      });
    }
    r.r(e),
      r.d(e, "Headers", function() {
        return s;
      }),
      r.d(e, "Request", function() {
        return p;
      }),
      r.d(e, "Response", function() {
        return d;
      }),
      r.d(e, "DOMException", function() {
        return T;
      }),
      r.d(e, "fetch", function() {
        return y;
      });
    var g = {
      searchParams: "URLSearchParams" in self,
      iterable: "Symbol" in self && "iterator" in Symbol,
      blob:
        "FileReader" in self &&
        "Blob" in self &&
        (function() {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        })(),
      formData: "FormData" in self,
      arrayBuffer: "ArrayBuffer" in self
    };
    if (g.arrayBuffer)
      var v = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ],
        m =
          ArrayBuffer.isView ||
          function(t) {
            return t && v.indexOf(Object.prototype.toString.call(t)) > -1;
          };
    (s.prototype.append = function(t, e) {
      (t = n(t)), (e = i(e));
      var r = this.map[t];
      this.map[t] = r ? r + ", " + e : e;
    }),
      (s.prototype.delete = function(t) {
        delete this.map[n(t)];
      }),
      (s.prototype.get = function(t) {
        return (t = n(t)), this.has(t) ? this.map[t] : null;
      }),
      (s.prototype.has = function(t) {
        return this.map.hasOwnProperty(n(t));
      }),
      (s.prototype.set = function(t, e) {
        this.map[n(t)] = i(e);
      }),
      (s.prototype.forEach = function(t, e) {
        for (var r in this.map)
          this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
      }),
      (s.prototype.keys = function() {
        var t = [];
        return (
          this.forEach(function(e, r) {
            t.push(r);
          }),
          o(t)
        );
      }),
      (s.prototype.values = function() {
        var t = [];
        return (
          this.forEach(function(e) {
            t.push(e);
          }),
          o(t)
        );
      }),
      (s.prototype.entries = function() {
        var t = [];
        return (
          this.forEach(function(e, r) {
            t.push([r, e]);
          }),
          o(t)
        );
      }),
      g.iterable && (s.prototype[Symbol.iterator] = s.prototype.entries);
    var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    (p.prototype.clone = function() {
      return new p(this, { body: this._bodyInit });
    }),
      h.call(p.prototype),
      h.call(d.prototype),
      (d.prototype.clone = function() {
        return new d(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new s(this.headers),
          url: this.url
        });
      }),
      (d.error = function() {
        var t = new d(null, { status: 0, statusText: "" });
        return (t.type = "error"), t;
      });
    var P = [301, 302, 303, 307, 308];
    d.redirect = function(t, e) {
      if (-1 === P.indexOf(e)) throw new RangeError("Invalid status code");
      return new d(null, { status: e, headers: { location: t } });
    };
    var T = self.DOMException;
    try {
      new T();
    } catch (t) {
      ((T = function(t, e) {
        (this.message = t), (this.name = e);
        var r = Error(t);
        this.stack = r.stack;
      }).prototype = Object.create(Error.prototype)),
        (T.prototype.constructor = T);
    }
    (y.polyfill = !0),
      self.fetch ||
        ((self.fetch = y),
        (self.Headers = s),
        (self.Request = p),
        (self.Response = d));
  },
  function(t, e, r) {},
  ,
  ,
  ,
  ,
  function(t, e, r) {
    function n(t, e) {
      for (var r = t.size, n = d.getPositions(e), i = 0; i < n.length; i++)
        for (var o = n[i][0], s = n[i][1], a = -1; a <= 7; a++)
          if (!(o + a <= -1 || r <= o + a))
            for (var u = -1; u <= 7; u++)
              s + u <= -1 ||
                r <= s + u ||
                ((a >= 0 && a <= 6 && (0 === u || 6 === u)) ||
                (u >= 0 && u <= 6 && (0 === a || 6 === a)) ||
                (a >= 2 && a <= 4 && u >= 2 && u <= 4)
                  ? t.set(o + a, s + u, !0, !0)
                  : t.set(o + a, s + u, !1, !0));
    }
    function i(t, e) {
      for (var r = f.getPositions(e), n = 0; n < r.length; n++)
        for (var i = r[n][0], o = r[n][1], s = -2; s <= 2; s++)
          for (var a = -2; a <= 2; a++)
            -2 === s || 2 === s || -2 === a || 2 === a || (0 === s && 0 === a)
              ? t.set(i + s, o + a, !0, !0)
              : t.set(i + s, o + a, !1, !0);
    }
    function o(t, e, r) {
      var n,
        i,
        o = t.size,
        s = E.getEncodedBits(e, r);
      for (n = 0; n < 15; n++)
        (i = 1 == ((s >> n) & 1)),
          n < 6
            ? t.set(n, 8, i, !0)
            : n < 8
              ? t.set(n + 1, 8, i, !0)
              : t.set(o - 15 + n, 8, i, !0),
          n < 8
            ? t.set(8, o - n - 1, i, !0)
            : n < 9
              ? t.set(8, 15 - n - 1 + 1, i, !0)
              : t.set(8, 15 - n - 1, i, !0);
      t.set(o - 8, 8, 1, !0);
    }
    function s(t, e, r) {
      var n = new h();
      r.forEach(function(e) {
        n.put(e.mode.bit, 4),
          n.put(e.getLength(), P.getCharCountIndicator(e.mode, t)),
          e.write(n);
      });
      var i =
        8 * (c.getSymbolTotalCodewords(t) - g.getTotalCodewordsCount(t, e));
      for (
        n.getLengthInBits() + 4 <= i && n.put(0, 4);
        n.getLengthInBits() % 8 != 0;

      )
        n.putBit(0);
      for (var o = (i - n.getLengthInBits()) / 8, s = 0; s < o; s++)
        n.put(s % 2 ? 17 : 236, 8);
      return (function(t, e, r) {
        for (
          var n = c.getSymbolTotalCodewords(e),
            i = g.getTotalCodewordsCount(e, r),
            o = n - i,
            s = g.getBlocksCount(e, r),
            a = s - (n % s),
            l = Math.floor(n / s),
            h = Math.floor(o / s),
            p = h + 1,
            f = l - h,
            d = new v(f),
            y = 0,
            m = new Array(s),
            E = new Array(s),
            P = 0,
            T = new u(t.buffer),
            _ = 0;
          _ < s;
          _++
        ) {
          var b = _ < a ? h : p;
          (m[_] = T.slice(y, y + b)),
            (E[_] = d.encode(m[_])),
            (y += b),
            (P = Math.max(P, b));
        }
        var O,
          w,
          R = new u(n),
          x = 0;
        for (O = 0; O < P; O++)
          for (w = 0; w < s; w++) O < m[w].length && (R[x++] = m[w][O]);
        for (O = 0; O < f; O++) for (w = 0; w < s; w++) R[x++] = E[w][O];
        return R;
      })(n, t, e);
    }
    function a(t, e, r) {
      var a;
      if (_(t)) a = T.fromArray(t);
      else {
        if ("string" != typeof t) throw new Error("Invalid data");
        var u = e;
        if (!u) {
          var l = T.rawSplit(t);
          u = m.getBestVersionForData(l, r);
        }
        a = T.fromString(t, u);
      }
      var h = m.getBestVersionForData(a, r);
      if (!h)
        throw new Error(
          "The amount of data is too big to be stored in a QR Code"
        );
      if (e) {
        if (e < h)
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
              h +
              ".\n"
          );
      } else e = h;
      var f = s(e, r, a),
        d = c.getSymbolSize(e),
        g = new p(d);
      n(g, e),
        (function(t) {
          for (var e = t.size, r = 8; r < e - 8; r++) {
            var n = r % 2 == 0;
            t.set(r, 6, n, !0), t.set(6, r, n, !0);
          }
        })(g),
        i(g, e),
        o(g, r, 0),
        e >= 7 &&
          (function(t, e) {
            for (
              var r, n, i, o = t.size, s = m.getEncodedBits(e), a = 0;
              a < 18;
              a++
            )
              (r = Math.floor(a / 3)),
                (n = (a % 3) + o - 8 - 3),
                (i = 1 == ((s >> a) & 1)),
                t.set(r, n, i, !0),
                t.set(n, r, i, !0);
          })(g, e),
        (function(t, e) {
          for (
            var r = t.size, n = -1, i = r - 1, o = 7, s = 0, a = r - 1;
            a > 0;
            a -= 2
          )
            for (6 === a && a--; ; ) {
              for (var u = 0; u < 2; u++)
                if (!t.isReserved(i, a - u)) {
                  var c = !1;
                  s < e.length && (c = 1 == ((e[s] >>> o) & 1)),
                    t.set(i, a - u, c),
                    -1 == --o && (s++, (o = 7));
                }
              if ((i += n) < 0 || r <= i) {
                (i -= n), (n = -n);
                break;
              }
            }
        })(g, f);
      var v = y.getBestMask(g, o.bind(null, g, r));
      return (
        y.applyMask(v, g),
        o(g, r, v),
        {
          modules: g,
          version: e,
          errorCorrectionLevel: r,
          maskPattern: v,
          segments: a
        }
      );
    }
    var u = r(5),
      c = r(3),
      l = r(7),
      h = r(26),
      p = r(27),
      f = r(28),
      d = r(29),
      y = r(30),
      g = r(9),
      v = r(31),
      m = r(10),
      E = r(34),
      P = r(4),
      T = r(35),
      _ = r(6);
    e.create = function(t, e) {
      if (void 0 === t || "" === t) throw new Error("No input text");
      var r,
        n = l.M;
      return (
        void 0 !== e &&
          ((n = l.from(e.errorCorrectionLevel, l.M)),
          (r = m.from(e.version)),
          e.toSJISFunc && c.setToSJISFunction(e.toSJISFunc)),
        a(t, r, n)
      );
    };
  },
  function(t, e) {
    function r() {
      (this.buffer = []), (this.length = 0);
    }
    (r.prototype = {
      get: function(t) {
        var e = Math.floor(t / 8);
        return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
      },
      put: function(t, e) {
        for (var r = 0; r < e; r++) this.putBit(1 == ((t >>> (e - r - 1)) & 1));
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0),
          t && (this.buffer[e] |= 128 >>> this.length % 8),
          this.length++;
      }
    }),
      (t.exports = r);
  },
  function(t, e, r) {
    function n(t) {
      if (!t || t < 1)
        throw new Error("BitMatrix size must be defined and greater than 0");
      (this.size = t),
        (this.data = new i(t * t)),
        this.data.fill(0),
        (this.reservedBit = new i(t * t)),
        this.reservedBit.fill(0);
    }
    var i = r(5);
    (n.prototype.set = function(t, e, r, n) {
      var i = t * this.size + e;
      (this.data[i] = r), n && (this.reservedBit[i] = !0);
    }),
      (n.prototype.get = function(t, e) {
        return this.data[t * this.size + e];
      }),
      (n.prototype.xor = function(t, e, r) {
        this.data[t * this.size + e] ^= r;
      }),
      (n.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e];
      }),
      (t.exports = n);
  },
  function(t, e, r) {
    var n = r(3).getSymbolSize;
    (e.getRowColCoords = function(t) {
      if (1 === t) return [];
      for (
        var e = Math.floor(t / 7) + 2,
          r = n(t),
          i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
          o = [r - 7],
          s = 1;
        s < e - 1;
        s++
      )
        o[s] = o[s - 1] - i;
      return o.push(6), o.reverse();
    }),
      (e.getPositions = function(t) {
        for (
          var r = [], n = e.getRowColCoords(t), i = n.length, o = 0;
          o < i;
          o++
        )
          for (var s = 0; s < i; s++)
            (0 === o && 0 === s) ||
              (0 === o && s === i - 1) ||
              (o === i - 1 && 0 === s) ||
              r.push([n[o], n[s]]);
        return r;
      });
  },
  function(t, e, r) {
    var n = r(3).getSymbolSize;
    e.getPositions = function(t) {
      var e = n(t);
      return [[0, 0], [e - 7, 0], [0, e - 7]];
    };
  },
  function(t, e) {
    function r(t, r, n) {
      switch (t) {
        case e.Patterns.PATTERN000:
          return (r + n) % 2 == 0;
        case e.Patterns.PATTERN001:
          return r % 2 == 0;
        case e.Patterns.PATTERN010:
          return n % 3 == 0;
        case e.Patterns.PATTERN011:
          return (r + n) % 3 == 0;
        case e.Patterns.PATTERN100:
          return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
        case e.Patterns.PATTERN101:
          return ((r * n) % 2) + ((r * n) % 3) == 0;
        case e.Patterns.PATTERN110:
          return (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
        case e.Patterns.PATTERN111:
          return (((r * n) % 3) + ((r + n) % 2)) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + t);
      }
    }
    e.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var n = 3,
      i = 3,
      o = 40,
      s = 10;
    (e.getPenaltyN1 = function(t) {
      for (
        var e = t.size, r = 0, i = 0, o = 0, s = null, a = null, u = 0;
        u < e;
        u++
      ) {
        (i = o = 0), (s = a = null);
        for (var c = 0; c < e; c++) {
          var l = t.get(u, c);
          l === s ? i++ : (i >= 5 && (r += n + (i - 5)), (s = l), (i = 1)),
            (l = t.get(c, u)) === a
              ? o++
              : (o >= 5 && (r += n + (o - 5)), (a = l), (o = 1));
        }
        i >= 5 && (r += n + (i - 5)), o >= 5 && (r += n + (o - 5));
      }
      return r;
    }),
      (e.getPenaltyN2 = function(t) {
        for (var e = t.size, r = 0, n = 0; n < e - 1; n++)
          for (var o = 0; o < e - 1; o++) {
            var s =
              t.get(n, o) +
              t.get(n, o + 1) +
              t.get(n + 1, o) +
              t.get(n + 1, o + 1);
            (4 !== s && 0 !== s) || r++;
          }
        return r * i;
      }),
      (e.getPenaltyN3 = function(t) {
        for (var e = t.size, r = 0, n = 0, i = 0, s = 0; s < e; s++) {
          n = i = 0;
          for (var a = 0; a < e; a++)
            (n = ((n << 1) & 2047) | t.get(s, a)),
              a >= 10 && (1488 === n || 93 === n) && r++,
              (i = ((i << 1) & 2047) | t.get(a, s)),
              a >= 10 && (1488 === i || 93 === i) && r++;
        }
        return r * o;
      }),
      (e.getPenaltyN4 = function(t) {
        for (var e = 0, r = t.data.length, n = 0; n < r; n++) e += t.data[n];
        return Math.abs(Math.ceil((100 * e) / r / 5) - 10) * s;
      }),
      (e.applyMask = function(t, e) {
        for (var n = e.size, i = 0; i < n; i++)
          for (var o = 0; o < n; o++)
            e.isReserved(o, i) || e.xor(o, i, r(t, o, i));
      }),
      (e.getBestMask = function(t, r) {
        for (
          var n = Object.keys(e.Patterns).length, i = 0, o = 1 / 0, s = 0;
          s < n;
          s++
        ) {
          r(s), e.applyMask(s, t);
          var a =
            e.getPenaltyN1(t) +
            e.getPenaltyN2(t) +
            e.getPenaltyN3(t) +
            e.getPenaltyN4(t);
          e.applyMask(s, t), a < o && ((o = a), (i = s));
        }
        return i;
      });
  },
  function(t, e, r) {
    function n(t) {
      (this.genPoly = void 0),
        (this.degree = t),
        this.degree && this.initialize(this.degree);
    }
    var i = r(5),
      o = r(32);
    (n.prototype.initialize = function(t) {
      (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
    }),
      (n.prototype.encode = function(t) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        var e = new i(this.degree);
        e.fill(0);
        var r = i.concat([t, e], t.length + this.degree),
          n = o.mod(r, this.genPoly),
          s = this.degree - n.length;
        if (s > 0) {
          var a = new i(this.degree);
          return a.fill(0), n.copy(a, s), a;
        }
        return n;
      }),
      (t.exports = n);
  },
  function(t, e, r) {
    var n = r(5),
      i = r(33);
    (e.mul = function(t, e) {
      var r = new n(t.length + e.length - 1);
      r.fill(0);
      for (var o = 0; o < t.length; o++)
        for (var s = 0; s < e.length; s++) r[o + s] ^= i.mul(t[o], e[s]);
      return r;
    }),
      (e.mod = function(t, e) {
        for (var r = new n(t); r.length - e.length >= 0; ) {
          for (var o = r[0], s = 0; s < e.length; s++) r[s] ^= i.mul(e[s], o);
          for (var a = 0; a < r.length && 0 === r[a]; ) a++;
          r = r.slice(a);
        }
        return r;
      }),
      (e.generateECPolynomial = function(t) {
        for (var r = new n([1]), o = 0; o < t; o++) r = e.mul(r, [1, i.exp(o)]);
        return r;
      });
  },
  function(t, e, r) {
    var n = r(5),
      i = new n(512),
      o = new n(256);
    !(function() {
      for (var t = 1, e = 0; e < 255; e++)
        (i[e] = t), (o[t] = e), 256 & (t <<= 1) && (t ^= 285);
      for (e = 255; e < 512; e++) i[e] = i[e - 255];
    })(),
      (e.log = function(t) {
        if (t < 1) throw new Error("log(" + t + ")");
        return o[t];
      }),
      (e.exp = function(t) {
        return i[t];
      }),
      (e.mul = function(t, e) {
        return 0 === t || 0 === e ? 0 : i[o[t] + o[e]];
      });
  },
  function(t, e, r) {
    var n = r(3),
      i = n.getBCHDigit(1335);
    e.getEncodedBits = function(t, e) {
      for (var r = (t.bit << 3) | e, o = r << 10; n.getBCHDigit(o) - i >= 0; )
        o ^= 1335 << (n.getBCHDigit(o) - i);
      return 21522 ^ ((r << 10) | o);
    };
  },
  function(t, e, r) {
    function n(t) {
      return unescape(encodeURIComponent(t)).length;
    }
    function i(t, e, r) {
      for (var n, i = []; null !== (n = t.exec(r)); )
        i.push({ data: n[0], index: n.index, mode: e, length: n[0].length });
      return i;
    }
    function o(t) {
      var e,
        r,
        n = i(y.NUMERIC, l.NUMERIC, t),
        o = i(y.ALPHANUMERIC, l.ALPHANUMERIC, t);
      return (
        g.isKanjiModeEnabled()
          ? ((e = i(y.BYTE, l.BYTE, t)), (r = i(y.KANJI, l.KANJI, t)))
          : ((e = i(y.BYTE_KANJI, l.BYTE, t)), (r = [])),
        n
          .concat(o, e, r)
          .sort(function(t, e) {
            return t.index - e.index;
          })
          .map(function(t) {
            return { data: t.data, mode: t.mode, length: t.length };
          })
      );
    }
    function s(t, e) {
      switch (e) {
        case l.NUMERIC:
          return h.getBitsLength(t);
        case l.ALPHANUMERIC:
          return p.getBitsLength(t);
        case l.KANJI:
          return d.getBitsLength(t);
        case l.BYTE:
          return f.getBitsLength(t);
      }
    }
    function a(t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var i = t[r];
        switch (i.mode) {
          case l.NUMERIC:
            e.push([
              i,
              { data: i.data, mode: l.ALPHANUMERIC, length: i.length },
              { data: i.data, mode: l.BYTE, length: i.length }
            ]);
            break;
          case l.ALPHANUMERIC:
            e.push([i, { data: i.data, mode: l.BYTE, length: i.length }]);
            break;
          case l.KANJI:
            e.push([i, { data: i.data, mode: l.BYTE, length: n(i.data) }]);
            break;
          case l.BYTE:
            e.push([{ data: i.data, mode: l.BYTE, length: n(i.data) }]);
        }
      }
      return e;
    }
    function u(t, e) {
      for (
        var r = {}, n = { start: {} }, i = ["start"], o = 0;
        o < t.length;
        o++
      ) {
        for (var a = t[o], u = [], c = 0; c < a.length; c++) {
          var h = a[c],
            p = "" + o + c;
          u.push(p), (r[p] = { node: h, lastCount: 0 }), (n[p] = {});
          for (var f = 0; f < i.length; f++) {
            var d = i[f];
            r[d] && r[d].node.mode === h.mode
              ? ((n[d][p] =
                  s(r[d].lastCount + h.length, h.mode) -
                  s(r[d].lastCount, h.mode)),
                (r[d].lastCount += h.length))
              : (r[d] && (r[d].lastCount = h.length),
                (n[d][p] =
                  s(h.length, h.mode) +
                  4 +
                  l.getCharCountIndicator(h.mode, e)));
          }
        }
        i = u;
      }
      for (f = 0; f < i.length; f++) n[i[f]].end = 0;
      return { map: n, table: r };
    }
    function c(t, e) {
      var r,
        n = l.getBestModeForData(t);
      if ((r = l.from(e, n)) !== l.BYTE && r.bit < n.bit)
        throw new Error(
          '"' +
            t +
            '" cannot be encoded with mode ' +
            l.toString(r) +
            ".\n Suggested mode is: " +
            l.toString(n)
        );
      switch ((r !== l.KANJI || g.isKanjiModeEnabled() || (r = l.BYTE), r)) {
        case l.NUMERIC:
          return new h(t);
        case l.ALPHANUMERIC:
          return new p(t);
        case l.KANJI:
          return new d(t);
        case l.BYTE:
          return new f(t);
      }
    }
    var l = r(4),
      h = r(36),
      p = r(37),
      f = r(38),
      d = r(39),
      y = r(11),
      g = r(3),
      v = r(40);
    (e.fromArray = function(t) {
      return t.reduce(function(t, e) {
        return (
          "string" == typeof e
            ? t.push(c(e, null))
            : e.data && t.push(c(e.data, e.mode)),
          t
        );
      }, []);
    }),
      (e.fromString = function(t, r) {
        for (
          var n = u(a(o(t, g.isKanjiModeEnabled())), r),
            i = v.find_path(n.map, "start", "end"),
            s = [],
            c = 1;
          c < i.length - 1;
          c++
        )
          s.push(n.table[i[c]].node);
        return e.fromArray(
          (function(t) {
            return t.reduce(function(t, e) {
              var r = t.length - 1 >= 0 ? t[t.length - 1] : null;
              return r && r.mode === e.mode
                ? ((t[t.length - 1].data += e.data), t)
                : (t.push(e), t);
            }, []);
          })(s)
        );
      }),
      (e.rawSplit = function(t) {
        return e.fromArray(o(t, g.isKanjiModeEnabled()));
      });
  },
  function(t, e, r) {
    function n(t) {
      (this.mode = i.NUMERIC), (this.data = t.toString());
    }
    var i = r(4);
    (n.getBitsLength = function(t) {
      return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
    }),
      (n.prototype.getLength = function() {
        return this.data.length;
      }),
      (n.prototype.getBitsLength = function() {
        return n.getBitsLength(this.data.length);
      }),
      (n.prototype.write = function(t) {
        var e, r, n;
        for (e = 0; e + 3 <= this.data.length; e += 3)
          (r = this.data.substr(e, 3)), (n = parseInt(r, 10)), t.put(n, 10);
        var i = this.data.length - e;
        i > 0 &&
          ((r = this.data.substr(e)),
          (n = parseInt(r, 10)),
          t.put(n, 3 * i + 1));
      }),
      (t.exports = n);
  },
  function(t, e, r) {
    function n(t) {
      (this.mode = i.ALPHANUMERIC), (this.data = t);
    }
    var i = r(4),
      o = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
    (n.getBitsLength = function(t) {
      return 11 * Math.floor(t / 2) + (t % 2) * 6;
    }),
      (n.prototype.getLength = function() {
        return this.data.length;
      }),
      (n.prototype.getBitsLength = function() {
        return n.getBitsLength(this.data.length);
      }),
      (n.prototype.write = function(t) {
        var e;
        for (e = 0; e + 2 <= this.data.length; e += 2) {
          var r = 45 * o.indexOf(this.data[e]);
          (r += o.indexOf(this.data[e + 1])), t.put(r, 11);
        }
        this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
      }),
      (t.exports = n);
  },
  function(t, e, r) {
    function n(t) {
      (this.mode = o.BYTE), (this.data = new i(t));
    }
    var i = r(5),
      o = r(4);
    (n.getBitsLength = function(t) {
      return 8 * t;
    }),
      (n.prototype.getLength = function() {
        return this.data.length;
      }),
      (n.prototype.getBitsLength = function() {
        return n.getBitsLength(this.data.length);
      }),
      (n.prototype.write = function(t) {
        for (var e = 0, r = this.data.length; e < r; e++)
          t.put(this.data[e], 8);
      }),
      (t.exports = n);
  },
  function(t, e, r) {
    function n(t) {
      (this.mode = i.KANJI), (this.data = t);
    }
    var i = r(4),
      o = r(3);
    (n.getBitsLength = function(t) {
      return 13 * t;
    }),
      (n.prototype.getLength = function() {
        return this.data.length;
      }),
      (n.prototype.getBitsLength = function() {
        return n.getBitsLength(this.data.length);
      }),
      (n.prototype.write = function(t) {
        var e;
        for (e = 0; e < this.data.length; e++) {
          var r = o.toSJIS(this.data[e]);
          if (r >= 33088 && r <= 40956) r -= 33088;
          else {
            if (!(r >= 57408 && r <= 60351))
              throw new Error(
                "Invalid SJIS character: " +
                  this.data[e] +
                  "\nMake sure your charset is UTF-8"
              );
            r -= 49472;
          }
          (r = 192 * ((r >>> 8) & 255) + (255 & r)), t.put(r, 13);
        }
      }),
      (t.exports = n);
  },
  function(t, e, r) {
    "use strict";
    var n = {
      single_source_shortest_paths: function(t, e, r) {
        var i = {},
          o = {};
        o[e] = 0;
        var s,
          a,
          u,
          c,
          l,
          h,
          p,
          f = n.PriorityQueue.make();
        for (f.push(e, 0); !f.empty(); )
          for (u in ((a = (s = f.pop()).value), (c = s.cost), (l = t[a] || {})))
            l.hasOwnProperty(u) &&
              ((h = c + l[u]),
              (p = o[u]),
              (void 0 === o[u] || p > h) &&
                ((o[u] = h), f.push(u, h), (i[u] = a)));
        if (void 0 !== r && void 0 === o[r]) {
          var d = ["Could not find a path from ", e, " to ", r, "."].join("");
          throw new Error(d);
        }
        return i;
      },
      extract_shortest_path_from_predecessor_list: function(t, e) {
        for (var r = [], n = e; n; ) r.push(n), t[n], (n = t[n]);
        return r.reverse(), r;
      },
      find_path: function(t, e, r) {
        var i = n.single_source_shortest_paths(t, e, r);
        return n.extract_shortest_path_from_predecessor_list(i, r);
      },
      PriorityQueue: {
        make: function(t) {
          var e,
            r = n.PriorityQueue,
            i = {};
          for (e in ((t = t || {}), r)) r.hasOwnProperty(e) && (i[e] = r[e]);
          return (i.queue = []), (i.sorter = t.sorter || r.default_sorter), i;
        },
        default_sorter: function(t, e) {
          return t.cost - e.cost;
        },
        push: function(t, e) {
          var r = { value: t, cost: e };
          this.queue.push(r), this.queue.sort(this.sorter);
        },
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return 0 === this.queue.length;
        }
      }
    };
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(12);
    (e.render = function(t, e, r) {
      var i = r,
        o = e;
      void 0 !== i || (e && e.getContext) || ((i = e), (e = void 0)),
        e ||
          (o = (function() {
            try {
              return document.createElement("canvas");
            } catch (t) {
              throw new Error("You need to specify a canvas element");
            }
          })()),
        (i = n.getOptions(i));
      var s = (t.modules.size + 2 * i.margin) * i.scale,
        a = o.getContext("2d"),
        u = a.createImageData(s, s);
      return (
        n.qrToImageData(u.data, t, i.margin, i.scale, i.color),
        (function(t, e, r) {
          t.clearRect(0, 0, e.width, e.height),
            e.style || (e.style = {}),
            (e.height = r),
            (e.width = r),
            (e.style.height = r + "px"),
            (e.style.width = r + "px");
        })(a, o, s),
        a.putImageData(u, 0, 0),
        o
      );
    }),
      (e.renderToDataURL = function(t, r, n) {
        var i = n;
        void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)),
          i || (i = {});
        var o = e.render(t, r, i),
          s = i.type || "image/png",
          a = i.rendererOpts || {};
        return o.toDataURL(s, a.quality);
      });
  },
  function(t, e, r) {
    function n(t) {
      return (
        'fill="rgb(' +
        [t.r, t.g, t.b].join(",") +
        ')" fill-opacity="' +
        (t.a / 255).toFixed(2) +
        '"'
      );
    }
    var i = r(12);
    e.render = function(t, e) {
      var r = i.getOptions(e),
        o = t.modules.size,
        s = t.modules.data,
        a = (o + 2 * r.margin) * r.scale,
        u = '<?xml version="1.0" encoding="utf-8"?>\n';
      (u +=
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'),
        (u += '<svg version="1.1" baseProfile="full"'),
        (u += ' width="' + a + '" height="' + a + '"'),
        (u += ' viewBox="0 0 ' + a + " " + a + '"'),
        (u += ' xmlns="http://www.w3.org/2000/svg"'),
        (u += ' xmlns:xlink="http://www.w3.org/1999/xlink"'),
        (u += ' xmlns:ev="http://www.w3.org/2001/xml-events">\n'),
        (u +=
          '<rect x="0" y="0" width="' +
          a +
          '" height="' +
          a +
          '" ' +
          n(r.color.light) +
          " />\n"),
        (u +=
          '<defs><rect id="p" width="' +
          r.scale +
          '" height="' +
          r.scale +
          '" /></defs>\n'),
        (u += "<g " + n(r.color.dark) + ">\n");
      for (var c = 0; c < o; c++)
        for (var l = 0; l < o; l++)
          if (s[c * o + l]) {
            u +=
              '<use x="' +
              (r.margin + l) * r.scale +
              '" y="' +
              (r.margin + c) * r.scale +
              '" xlink:href="#p" />\n';
          }
      return (u += "</g>\n") + "</svg>";
    };
  },
  function(t, e, r) {
    "use strict";
    function n(t) {
      switch (t) {
        case "FingerTrigger":
        case "RotateTrigger":
        case "FingerCount":
          return "Multi-Touch Interactions";
        case "TiltTrigger":
          return "Tilt Sensor";
        case "3DTouchTrigger":
          return "3D Touch";
        case "MultipleVideo":
          return "Multiple Videos";
        case "VideoSound":
          return "Video Sound";
        case "CompassTrigger":
          return "Compass Sensor";
        case "SoundTrigger":
          return "Sound Sensor";
        case "Mask":
        default:
          return t;
      }
    }
    function i(t, e) {
      return t.indexOf(e) > -1 ? t : (t.push(e), t);
    }
    function o(t) {
      return document.getElementsByTagName("souschef-prototype")[0].$.viewer.dataset.sharedKey + "/" + t;
    }
    function s(t) {
      return window.localStorage.getItem(o(t));
    }
    function a(t, e, r) {
      return C(this, void 0, void 0, function() {
        var n,
          i,
          o = this;
        return L(this, function(s) {
          return "pending" !== r
            ? [2]
            : ((n = 0),
              (i = setInterval(function() {
                return C(o, void 0, void 0, function() {
                  var r, o;
                  return L(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return (
                          n++,
                          (o = u),
                          [
                            4,
                            fetch(
                              "https://share.protopie.io/status/" + t + "/" + e
                            )
                          ]
                        );
                      case 1:
                        return [4, o.apply(void 0, [s.sent()])];
                      case 2:
                        if ("active" === (r = s.sent()))
                          return clearInterval(i), [2];
                        if ("pending" === r && n >= M)
                          throw (clearInterval(i),
                          new Error(
                            "Pie uploading is delayed.. Please reload whole page."
                          ));
                        return [2];
                    }
                  });
                });
              }, I)),
              [2]);
        });
      });
    }
    function u(t) {
      return C(this, void 0, void 0, function() {
        return L(this, function(e) {
          if (200 !== t.status) throw new Error("Server is not available.");
          return [2, t.text()];
        });
      });
    }
    function c(t) {
      return C(this, void 0, void 0, function() {
        return L(this, function(e) {
          if (200 !== t.status)
            throw new Error("Could not access to Pie data.");
          return [2, t.json()];
        });
      });
    }
    function l(t, e, r) {
      void 0 === r && (r = !1);
      var n = r ? new N(t) : new R(t);
      return (
        n.onChangeDropup(function(t) {
          e.setClockScale(parseFloat(t)), e.run();
        }),
        n.onClickReload(function(t) {
          var r = t.target;
          e.run(), r.blur();
        }),
        n.onClickFullScreen(function(t, r) {
          r ? e.exitFullScreen() : e.enterFullScreen();
        }),
        n.onClickTouchHint(function(t, r) {
          e.setTouchHintEnabled(r);
        }),
        n
      );
    }
    r.r(e);
    var h = (r(15),
      r(18),
      '<h4 class="Popup__header">This browser you\'re using may not support following features.</h4>'),
      p =
        '<p class="Popup__comment">Chrome and Firefox browsers work better on the desktop</p>',
      f = (function() {
        function t(t, e) {
          if (!e.length) return this;
          var r = t.dataset.hideComment;
          this.elem = t;
          var o =
            '<ul class="Popup__list">' +
            e
              .map(n)
              .reduce(i, [])
              .map(function(t) {
                return "<li>" + t + "</li>";
              })
              .join("") +
            "</ul>";
          (this.elem.innerHTML = r ? h + o : h + o + p),
            this.appendCloseButton();
        }
        return (
          (t.prototype.open = function() {
            var t = this;
            this.elem &&
              ((this.elem.style.display = "block"),
              setTimeout(function() {
                t.elem.classList.add("Popup--opened");
              }, 10));
          }),
          (t.prototype.close = function() {
            var t = this;
            this.elem &&
              (this.elem.classList.remove("Popup--opened"),
              setTimeout(function() {
                t.elem.style.display = "none";
              }, 300));
          }),
          (t.prototype.toggle = function() {
            this.elem &&
              (this.elem.classList.contains("Popup--opened")
                ? this.close()
                : this.open());
          }),
          (t.prototype.appendChild = function(t) {
            this.elem && this.elem.appendChild(t);
          }),
          (t.prototype.appendCloseButton = function() {
            var t,
              e = document.createElement("button");
            (t = e.classList).add.apply(t, [
              "Popup__button",
              "Button",
              "Button--close"
            ]),
              e.addEventListener("click", this.close.bind(this)),
              this.elem.appendChild(e);
          }),
          t
        );
      })(),
      d = (r(20), r(1)),
      y = r(13),
      g = r(2),
      v = r.n(g),
      m = (function() {
        function t(t) {
          var e = this;
          (this.img = document.createElement("img")),
            (this.img.height = 180),
            (this.img.width = 180),
            (this.img.style.display = "none"),
            (this.img.style.opacity = "0"),
            this.img.classList.add("Information__qrcode"),
            y.toDataURL(t, function(t, r) {
              if (t) throw t;
              e.img.src = r;
            });
        }
        return (
          (t.prototype.insertAfter = function(t) {
            t.parentNode.insertBefore(this.img, t.nextSibling);
          }),
          (t.prototype.open = function() {
            var t = this.img;
            v()({
              targets: t,
              opacity: 1,
              duration: 300,
              easing: "easeInQuad",
              begin: function() {
                t.style.display = "block";
              }
            });
          }),
          (t.prototype.close = function() {
            var t = this.img;
            v()({
              targets: t,
              opacity: 0,
              duration: 300,
              easing: "easeInQuad",
              complete: function() {
                t.style.display = "none";
              }
            });
          }),
          (t.prototype.isOpened = function() {
            return "block" === this.img.style.display;
          }),
          (t.prototype.toggle = function() {
            this.isOpened() ? this.close() : this.open();
          }),
          t
        );
      })(),
      E = r(14),
      P = r(0),
      T = (function() {
        function t(t, e) {
          var r = this;
          (this.callbacks = []),
            (this.elem = document.getElementsByTagName("souschef-prototype")[0].$.viewer),
            (this.wrapper = document.getElementsByTagName("souschef-prototype")[0].$.viewerWrapper),
            (this.model = t),
            (this.engine = new E.PPEngine(this.elem, {
              imageUrlBase: "/images"
            })),
            this.engine.setTouchHintEnabled(e),
            (this.isMobile = !!this.elem.dataset.mobileView),
            this.setOnStartEvents(),
            this.setMockup(),
            window.addEventListener("resize", function() {
              return r.resizeAuto();
            }),
            this.isMobile || this.setCursor();
        }
        return (
          (t.prototype.run = function() {
            var t = this.elem.dataset.baseurl;
            return this.engine.run(this.model, {
              getImageUrl: function(e) {
                return t + "/resources/" + e;
              }
            });
          }),
          (t.prototype.setClockScale = function(t) {
            this.engine.setClockScale(t), this.run();
          }),
          (t.prototype.onStart = function(t) {
            this.callbacks.push(t), this.setOnStartEvents();
          }),
          (t.prototype.offStart = function() {
            (this.callbacks = []), this.setOnStartEvents();
          }),
          (t.prototype.enterFullScreen = function() {
            var t = this;
            if (this.isMobile || !P.enabled)
              throw new Error(
                "Your Browser does not support Full Screen Mode."
              );
            var e = this.elem.parentElement;
            e.classList.add("ViewerMock--none"),
              P.request(e),
              P.on("change", function() {
                P.isFullscreen || t.onExitFullScreen(), t.resizeAuto();
              });
          }),
          (t.prototype.exitFullScreen = function() {
            if (!P.isFullscreen) throw new Error("You are not on Full screen.");
            P.exit(), this.onExitFullScreen(), this.resizeAuto();
          }),
          (t.prototype.setTouchHintEnabled = function(t) {
            this.engine.setTouchHintEnabled(t);
          }),
          (t.prototype.onExitFullScreen = function() {
            this.elem.parentElement.classList.remove("ViewerMock--none"),
              (this.elem.style.transform = "");
          }),
          (t.prototype.setOnStartEvents = function() {
            var t = this;
            this.engine.onStart = function() {
              t.callbacks.forEach(function(t) {
                return t();
              }),
                t.resizeAuto();
            };
          }),
          (t.prototype.setCursor = function() {
            this.model.cursorType &&
              "desktop" === this.model.cursorType &&
              this.elem.classList.add("Viewer--cursorDesktop");
          }),
          (t.prototype.setMockup = function() {
            var t = this.elem.parentElement;
            if (this.isMobile) t.classList.add("ViewerMock--none");
            else {
              var e = (function(t) {
                switch (t) {
                  case "Galaxy Note5":
                  case "Galaxy S7":
                  case "Galaxy S8":
                  case "Google Pixel":
                  case "Google Pixel 2":
                  case "iPhone 7 Plus":
                  case "iPhone 7":
                  case "iPhone 8 Plus":
                  case "iPhone 8":
                  case "iPhone SE":
                  case "iPhone X":
                  case "iPad":
                  case "iPad Pro":
                  case "Nexus 6P":
                    return t;
                  case "iPhone 5":
                    return "iPhone SE";
                  case "iPhone 6s":
                    return "iPhone 7";
                  case "iPhone 6+":
                    return "iPhone 7 Plus";
                  case "Galaxy S6":
                    return "Galaxy S7";
                  default:
                    return "custom";
                }
              })(this.model.device.name).replace(/ /g, "");
              t.classList.add("ViewerMock--" + e);
            }
          }),
          (t.prototype.resizeAuto = function() {
            this.isMobile || P.isFullscreen
              ? this.resize(this.elem, this.elem.parentElement, {
                  transformTo: "",
                  maxScale: 10
                })
              : this.resize(this.elem.parentElement, this.wrapper, {
                  transformTo: "",
                  padding: 110,
                  maxScale: 1
                });
          }),
          (t.prototype.resize = function(t, e, r) {
            void 0 === r && (r = {});
            var n = r.padding || 0,
              i = r.maxScale || 1,
              o = r.transformTo || "",
              s = (e.clientWidth - n) / t.clientWidth,
              a = (e.clientHeight - n) / t.clientHeight,
              u = Math.min.apply(Math, [s, a, i]);
            Object(d.d)(t, "scale(" + u + ") " + o),
              this.engine.updateCanvasPosition();
          }),
          t
        );
      })(),
      _ = (function() {
        function t(t) {
          var e = this;
          (this.changeHandlers = []), (this.elem = t);
          var r = t.querySelector("[data-dropup-button]"),
            n = t.querySelector("[data-dropup-label]");
          this.menu = t.querySelector("[data-dropup-menu]");
          var i = Array.prototype.slice.call(
              t.querySelectorAll("[data-dropup-item]")
            ),
            o = i.filter(function(t) {
              return void 0 !== t.dataset.dropupSelected;
            })[0];
          (n.innerText = o.innerText),
            (this.value = o.dataset.dropupItem),
            window.addEventListener("click", function(t) {
              var n = t.target;
              r.contains(n) ? (e.opened() ? e.close() : e.open()) : e.close();
            }),
            i.forEach(function(t) {
              t.addEventListener("click", function() {
                e.close(),
                  (n.innerText = t.innerHTML),
                  e.value !== t.dataset.dropupItem &&
                    ((e.value = t.dataset.dropupItem),
                    e.changeHandlers.forEach(function(t) {
                      return t(e.value);
                    }));
              });
            });
        }
        return (
          (t.prototype.open = function() {
            var t = this.menu;
            v()({
              targets: t,
              bottom: "24px",
              opacity: 1,
              duration: 300,
              easing: "easeInOutCirc",
              begin: function() {
                t.style.display = "block";
              }
            });
          }),
          (t.prototype.close = function() {
            var t = this.menu;
            v()({
              targets: t,
              bottom: 0,
              opacity: 0,
              duration: 300,
              easing: "easeInOutCirc",
              complete: function() {
                t.style.display = "none";
              }
            });
          }),
          (t.prototype.opened = function() {
            return "block" === this.menu.style.display;
          }),
          (t.prototype.onChange = function(t) {
            this.changeHandlers.push(t);
          }),
          (t.prototype.val = function(t) {
            if (!t) return this.value;
            var e = this.elem.querySelector("[data-dropup-label]"),
              r = Array.prototype.slice
                .call(this.elem.querySelectorAll("[data-dropup-item]"))
                .filter(function(e) {
                  return e.dataset.dropupItem === t;
                })[0];
            (e.innerText = r.innerText), (this.value = t);
          }),
          t
        );
      })(),
      b =
        '\n  <svg role="img" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="Play-Screen-:-White-:-Global" transform="translate(-1250.000000, -967.000000)" fill-rule="nonzero" fill="#575E6E">\n        <g id="Group-6" transform="translate(1052.000000, 962.000000)">\n          <path d="M199,22 L215,22 L215,6 L199,6 L199,22 Z M198,5 L216,5 L216,23 L198,23 L198,5 Z M205,5 L205,6 L209,6 L209,5 L205,5 Z M205,22 L205,23 L209,23 L209,22 L205,22 Z M199,12 L198,12 L198,16 L199,16 L199,12 Z M216,12 L215,12 L215,16 L216,16 L216,12 Z" id="ic_full"></path>\n        </g>\n      </g>\n    </g>\n  </svg>\n',
      O =
        '\n  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" aria-label="Touch Hint Off Icon">\n    <g fill="#5E6977" fill-rule="nonzero">\n      <path d="M18.023 16.966l2-1.999L12 12l2.967 8.022 2.045-2.045 3.018 3.019 1.011-1.011z"/>\n      <path d="M12.674 16.846l.397.918a9 9 0 1 1 4.68-4.663l-.917-.401a8 8 0 1 0-4.16 4.146z"/>\n    </g>\n  </svg>\n',
      w =
        '\n  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" aria-label="Touch Hint On Icon">\n    <g fill="#5E6977" fill-rule="evenodd">\n      <path fill-opacity=".5" d="M17.293 12.9l-4.97-1.838a1 1 0 0 0-1.285 1.285l1.834 4.958a8.5 8.5 0 1 1 4.42-4.405z"/>\n      <path fill-rule="nonzero" d="M18.023 16.966l2-1.999L12 12l2.967 8.022 2.045-2.045 3.018 3.019 1.011-1.011z"/>\n      <path fill-rule="nonzero" d="M12.674 16.846l.397.918a9 9 0 1 1 4.68-4.663l-.917-.401a8 8 0 1 0-4.16 4.146z"/>\n    </g>\n  </svg>\n',
      R = (function() {
        function t(e, r) {
          var n = this;
          (this.dropupHandlers = []),
            (this.reloadHandlers = []),
            (this.fullScreenHandlers = []),
            (this.touchHintHandlers = []),
            (this.elem = e),
            (this.elem.innerHTML = this.getTemplate(r || b));
          var i = new _(this.elem.querySelector("[data-dropup]"));
          i.onChange(function(e) {
            (t.dropupValue = i.val()),
              n.dropupHandlers.forEach(function(t) {
                return t(e);
              });
          }),
            (t.dropupValue = i.val()),
            this.elem
              .querySelector("[data-reload]")
              .addEventListener("click", function(t) {
                n.reloadHandlers.forEach(function(e) {
                  return e(t);
                });
              }),
            this.elem
              .querySelector("[data-fullscreen]")
              .addEventListener("click", function(t) {
                n.fullScreenHandlers.forEach(function(e) {
                  return e(t, P.isFullscreen);
                });
              }),
            this.elem
              .querySelector("[data-touch-hint]")
              .addEventListener("click", function(e) {
                t.setTouchHintEnabled(!t.touchHintEnabled),
                  (function(t, e) {
                    window.localStorage.setItem(o(t), e);
                  })("touchHintEnabled", t.touchHintEnabled + ""),
                  n.renderTouchHint(),
                  n.touchHintHandlers.forEach(function(r) {
                    return r(e, t.touchHintEnabled);
                  });
              }),
            P.on("change", function() {
              i.val(t.dropupValue);
            });
        }
        return (
          (t.setTouchHintEnabled = function(e) {
            t.touchHintEnabled = e;
          }),
          (t.prototype.onChangeDropup = function(t) {
            this.dropupHandlers.push(t);
          }),
          (t.prototype.onClickReload = function(t) {
            this.reloadHandlers.push(t);
          }),
          (t.prototype.onClickFullScreen = function(t) {
            this.fullScreenHandlers.push(t);
          }),
          (t.prototype.onClickTouchHint = function(t) {
            this.touchHintHandlers.push(t);
          }),
          (t.prototype.renderTouchHint = function() {
            this.elem.querySelector(
              "[data-touch-hint]"
            ).innerHTML = t.touchHintEnabled ? w : O;
          }),
          (t.prototype.getTemplate = function(e) {
            return (
              '\n      <div class="Dropup FunctionBar__item" data-dropup>\n        <button class="Button Button--icon" data-dropup-button>\n          <svg style="margin-top: 3px;" role="img" aria-label="Clock Icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n            <path fill="#575E6E" fill-rule="nonzero" d="M9 9h5v1H8V4h1v5zm0 9A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm0-1A8 8 0 1 0 9 1a8 8 0 0 0 0 16z"/>\n          </svg>\n          <span data-dropup-label>x 1</span>\n        </button>\n        <ul class="Dropup__menu" data-dropup-menu style="display: none;">\n          <li class="Dropup__menu__item">\n            <button data-dropup-item="0.1">x 0.1</button>\n          </li>\n          <li class="Dropup__menu__item">\n            <button data-dropup-item="0.25">x 0.25</button>\n          </li>\n          <li class="Dropup__menu__item">\n            <button data-dropup-item="0.5">x 0.5</button>\n          </li>\n          <li class="Dropup__menu__item">\n            <button data-dropup-item="0.75">x 0.75</button>\n          </li>\n          <li class="Dropup__menu__item">\n            <button data-dropup-item="1" data-dropup-selected>x 1</button>\n          </li>\n          <li class="Dropup__menu__item">\n            <button data-dropup-item="2">x 2</button>\n          </li>\n        </ul>\n      </div>\n      <button class="Button Button--icon FunctionBar__item" data-touch-hint>\n        ' +
              (t.touchHintEnabled ? w : O) +
              '\n      </button>\n      <button class="Button Button--icon FunctionBar__item" data-reload>\n        <svg role="img" aria-label="Reload Icon" xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">\n          <path fill="#575E6E" fill-rule="nonzero" d="M17.064 13a9 9 0 1 1-.022-8.043L19.001 3v5h-5l2.293-2.293A8.002 8.002 0 0 0 1 9a8 8 0 0 0 14.93 4h1.134z"/>\n        </svg>\n      </button>\n      <button class="Button Button--icon FunctionBar__item" data-fullscreen>\n        ' +
              e +
              "\n      </button>\n    "
            );
          }),
          t
        );
      })(),
      x = (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          };
        return function(e, r) {
          function n() {
            this.constructor = e;
          }
          t(e, r),
            (e.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()));
        };
      })(),
      A = 3,
      S =
        '\n  <svg role="img" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="Play-Screen-:-White-:-Global" transform="translate(-1251.000000, -1002.000000)" fill-rule="nonzero" fill="#575E6E">\n        <g id="Group-6" transform="translate(1052.000000, 962.000000)">\n          <path d="M217,52 L217,51 L210,51 L210,58 L211,58 L211,52 L217,52 Z M211,40 L210,40 L210,47 L217,47 L217,46 L211,46 L211,40 Z M199,46 L199,47 L206,47 L206,40 L205,40 L205,46 L199,46 Z M199,52 L199,51 L206,51 L206,58 L205,58 L205,52 L199,52 Z" id="ic_exit"></path>\n        </g>\n      </g>\n    </g>\n  </svg>\n',
      N = (function(t) {
        function e(e) {
          var r = t.call(this, e, S) || this;
          (r.triggerOffset = A), (r.hiding = null), (r.hidden = !0), r.hide();
          var n = e.querySelector("[data-dropup-menu]");
          return (
            window.addEventListener("mousemove", function(t) {
              var e = t.clientX,
                i = t.clientY;
              if (P.isFullscreen) {
                var o = n.getBoundingClientRect(),
                  s = o.left,
                  a = o.right,
                  u = o.top,
                  c = o.bottom,
                  l = window.innerHeight - r.triggerOffset < i,
                  h = s < e && e < a && u < i && i < c;
                r.hidden
                  ? (l || h) &&
                    (r.hiding = setTimeout(function() {
                      return r.open();
                    }, 300))
                  : l ||
                    h ||
                    (r.hiding
                      ? (clearTimeout(r.hiding), (r.hiding = null))
                      : r.close());
              }
            }),
            P.on("change", function() {
              P.isFullscreen ? r.open() : r.close();
            }),
            r
          );
        }
        return (
          x(e, t),
          (e.prototype.open = function() {
            if (this.hidden) {
              var t = this.elem;
              (this.hidden = !1),
                (this.triggerOffset = 75),
                v()({
                  targets: t,
                  bottom: "23px",
                  duration: 300,
                  easing: "easeInOutQuad",
                  begin: function() {
                    t.style.display = "block";
                  }
                });
            }
          }),
          (e.prototype.close = function() {
            if (!this.hidden) {
              var t = this.elem;
              (this.hidden = !0),
                (this.triggerOffset = A),
                v()({
                  targets: t,
                  bottom: "-49px",
                  duration: 300,
                  easing: "easeInOutQuad",
                  complete: function() {
                    t.style.display = "none";
                  }
                });
            }
          }),
          (e.prototype.hide = function() {
            this.elem.style.display = "none";
          }),
          e
        );
      })(R),
      C = function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            t.done
              ? i(t.value)
              : new r(function(e) {
                  e(t.value);
                }).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      },
      L = function(t, e) {
        function r(t) {
          return function(e) {
            return n([t, e]);
          };
        }
        function n(r) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; u; )
            try {
              if (
                ((i = 1),
                o &&
                  (s =
                    2 & r[0]
                      ? o.return
                      : r[0]
                        ? o.throw || ((s = o.return) && s.call(o), 0)
                        : o.next) &&
                  !(s = s.call(o, r[1])).done)
              )
                return s;
              switch (((o = 0), s && (r = [2 & r[0], s.value]), r[0])) {
                case 0:
                case 1:
                  s = r;
                  break;
                case 4:
                  return u.label++, { value: r[1], done: !1 };
                case 5:
                  u.label++, (o = r[1]), (r = [0]);
                  continue;
                case 7:
                  (r = u.ops.pop()), u.trys.pop();
                  continue;
                default:
                  if (
                    !(s = (s = u.trys).length > 0 && s[s.length - 1]) &&
                    (6 === r[0] || 2 === r[0])
                  ) {
                    u = 0;
                    continue;
                  }
                  if (3 === r[0] && (!s || (r[1] > s[0] && r[1] < s[3]))) {
                    u.label = r[1];
                    break;
                  }
                  if (6 === r[0] && u.label < s[1]) {
                    (u.label = s[1]), (s = r);
                    break;
                  }
                  if (s && u.label < s[2]) {
                    (u.label = s[2]), u.ops.push(r);
                    break;
                  }
                  s[2] && u.ops.pop(), u.trys.pop();
                  continue;
              }
              r = e.call(t, u);
            } catch (t) {
              (r = [6, t]), (o = 0);
            } finally {
              i = s = 0;
            }
          if (5 & r[0]) throw r[1];
          return { value: r[0] ? r[1] : void 0, done: !0 };
        }
        var i,
          o,
          s,
          a,
          u = {
            label: 0,
            sent: function() {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: []
          };
        return (
          (a = { next: r(0), throw: r(1), return: r(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function() {
              return this;
            }),
          a
        );
      };
    Object(d.b)(function() {
      return C(void 0, void 0, void 0, function() {
        var t,
          e,
          r,
          n,
          i,
          o,
          u,
          h,
          p,
          y,
          g,
          v,
          E,
          P,
          _,
          b,
          O,
          w,
          x,
          A,
          S,
          N = this;
        return L(this, function(I) {
          switch (I.label) {
            case 0:
              Object(d.a)(),
                (t = document.getElementsByTagName("souschef-prototype")[0].$.viewer.dataset),
                (e = t.baseurl),
                (r = t.revision),
                (n = t.sharedKey),
                (i = t.mobileView),
                (o = !!i),
                (u = document.getElementsByTagName("souschef-prototype")[0].$.overlay),
                (h = u.dataset.pieStatus),
                (I.label = 1);
            case 1:
              return I.trys.push([1, 5, , 6]), [4, a(n, r, h)];
            case 2:
              return (
                I.sent(),
                (p = "true" === (s("touchHintEnabled") || "true")),
                (g = c),
                [
                  4,
                  fetch(
                    e + "/models/model-" + r + ".json"
                  )
                ]
              );
            case 3:
              return [4, g.apply(void 0, [I.sent()])];
            case 4:
              return (
                (y = I.sent()),
                (v = new T(y, p)),
                R.setTouchHintEnabled(p),
                (E = v.run().unsupportedFeatures),
                (P = new f(document.getElementsByTagName("souschef-prototype")[0].$.popup, E)),
                v.onStart(function() {
                  (u.style.opacity = "0"),
                    setTimeout(function() {
                      (u.style.display = "none"),
                        setTimeout(function() {
                          E.length && P.open();
                        }, 300);
                    }, 300);
                }),
                o ||
                  ((_ = document.getElementsByTagName("souschef-prototype")[0].$.helpButton),
                  E.length
                    ? _.addEventListener("click", function() {
                        return P.toggle();
                      })
                    : (_.style.display = "none"),
                  (b = l(this.shadowRoot.getElementById("functionBar"), v)),
                  (O = l(
                    this.shadowRoot.getElementById("fullScreenFunctionBar"),
                    v,
                    !0
                  )),
                  b.onClickTouchHint(function() {
                    O.renderTouchHint();
                  }),
                  O.onClickTouchHint(function() {
                    b.renderTouchHint();
                  }),
                  (w = this.shadowRoot.getElementById("moreButton")) &&
                    w.addEventListener("click", function() {
                      this.shadowRoot.getElementById("description").innerHTML =
                        w.dataset.fullText;
                    }),
                  (x = new m(Object(d.c)())).insertAfter(
                    this.shadowRoot.getElementById("buttonGroup")
                  ),
                  document
                    .getElementById("qrcodeOpener")
                    .addEventListener("click", function() {
                      return x.toggle();
                    }),
                  (A = this.shadowRoot.getElementById("downloader")).addEventListener(
                    "click",
                    function() {
                      return C(N, void 0, void 0, function() {
                        var t, e;
                        return L(this, function(r) {
                          switch (r.label) {
                            case 0:
                              return (
                                A.classList.add("Button--loading"),
                                (A.disabled = !0),
                                [4, fetch(A.dataset.downloadUrl)]
                              );
                            case 1:
                              if (200 !== (t = r.sent()).status)
                                throw new Error("Pie is not downloadable.");
                              return [4, t.text()];
                            case 2:
                              return (
                                (e = r.sent()),
                                location.replace(e),
                                A.classList.remove("Button--loading"),
                                (A.disabled = !1),
                                [2]
                              );
                          }
                        });
                      });
                    }
                  ),
                  Array.prototype.slice
                    .call(document.querySelectorAll("[data-shareurl]"))
                    .forEach(function(t) {
                      t.addEventListener("click", function() {
                        window.open(
                          t.dataset.shareurl + Object(d.c)(),
                          "Share pie",
                          "toolbar=0,location=0,menubar=0,height=400,width=600"
                        );
                      });
                    })),
                [3, 6]
              );
            case 5:
              return (
                (S = I.sent()),
                (u.style.display = "none"),
                // alert(S.message),
                [3, 6]
              );
            case 6:
              return [2];
          }
        });
      });
    });
    var I = 3e3,
      M = 100;
  }
]);
