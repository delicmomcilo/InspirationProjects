// Used to prevent framer-motion from crashing the application.
if(navigator.userAgent.indexOf('MSIE')!==-1
  || navigator.appVersion.indexOf('Trident/') > -1) {

  console.log('IE detected, pollyfilling proxy');
  (function() {
    function m() {
      function u() {return null}

      function l(a) {return a ? "object" === typeof a || "function" === typeof a : !1}

      function n(a) {if (null !== a && !l(a)) throw new TypeError("Object prototype may only be an Object or null: " + a);}

      function v(a, c, A) {
        function k() {}

        if (!l(a) || !l(c)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
        var g = c;
        c = { get: null, set: null, apply: null, construct: null };
        for (var h in g) {
          if (!(h in c)) throw new TypeError("Proxy polyfill does not support trap '" + h + "'");
          c[h] =
            g[h]
        }
        "function" === typeof g && (c.apply = g.apply.bind(g));
        g = B(a);
        var p = !1, q = !1;
        if ("function" === typeof a) {
          var e = function() {
            var b = this && this.constructor === e, d = Array.prototype.slice.call(arguments);
            k(b ? "construct" : "apply");
            return b && c.construct ? c.construct.call(this, a, d) : !b && c.apply ? c.apply(a, this, d) : b ? (d.unshift(a), new (a.bind.apply(a, d))) : a.apply(this, d)
          };
          p = !0
        } else a instanceof Array ? (e = [], q = !0) : e = w || null !== g ? C(g) : {};
        var x = c.get ? function(b) {
            k("get");
            return c.get(this, b, e)
          } : function(b) {
            k("get");
            return this[b]
          },
          D = c.set ? function(b, d) {
            k("set");
            c.set(this, b, d, e)
          } : function(b, d) {
            k("set");
            this[b] = d
          }, y = {};
        f.getOwnPropertyNames(a).forEach(function(b) {
          if (!((p || q) && b in e)) {
            var d = f.getOwnPropertyDescriptor(a, b);
            f.defineProperty(e, b, { enumerable: !!d.enumerable, get: x.bind(a, b), set: D.bind(a, b) });
            y[b] = !0
          }
        });
        h = !0;
        if (p || q) {
          var E = f.setPrototypeOf || ([].__proto__ === Array.prototype ? function(b, d) {
            n(d);
            b.__proto__ = d;
            return b
          } : u);
          g && E(e, g) || (h = !1)
        }
        if (c.get || !h) for (var r in a) y[r] || f.defineProperty(e, r, { get: x.bind(a, r) });
        f.seal(a);
        f.seal(e);
        return A ? {
          proxy: e, revoke: function() {
            a = null;
            k = function(b) {throw new TypeError("Cannot perform '" + b + "' on a proxy that has been revoked");}
          }
        } : e
      }

      var f = Object, w = !!f.create || !({ __proto__: null } instanceof f), C = f.create || (w ? function(a) {
        n(a);
        return { __proto__: a }
      } : function(a) {
        function c() {}

        n(a);
        if (null === a) throw new SyntaxError("Native Object.create is required to create objects with null prototype");
        c.prototype = a;
        return new c
      }), B = f.getPrototypeOf || ([].__proto__ === Array.prototype ? function(a) {
        a = a.__proto__;
        return l(a) ? a : null
      } : u);
      var t = function(a, c) {
        if (void 0 === (this && this instanceof t ? this.constructor : void 0)) throw new TypeError("Constructor Proxy requires 'new'");
        return v(a, c)
      };
      t.revocable = function(a, c) {return v(a, c, !0)};
      return t
    };var z = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) || "undefined" !== typeof navigator && "ReactNative" === navigator.product ? global : self;
    z.Proxy || (z.Proxy = m(), z.Proxy.revocable = z.Proxy.revocable);
  })();
}