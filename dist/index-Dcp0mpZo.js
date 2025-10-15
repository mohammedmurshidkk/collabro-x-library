import { jsx as O, jsxs as Ye, Fragment as Ln } from "react/jsx-runtime";
import * as y from "react";
import P, { useState as Ge, useCallback as re, forwardRef as pi, useContext as Gr, useLayoutEffect as Dr, useRef as Me, useMemo as Ue, createContext as vi, Component as nu, Fragment as hr, useEffect as Nr } from "react";
import * as yi from "react-dom";
import ru, { createPortal as ou } from "react-dom";
import { c as iu, a as Z, f as zn, p as au, i as su } from "./index-CWEEbVEr.js";
import { ChevronDown as uu, CalendarIcon as cu, ChevronLeftIcon as lu, ChevronRightIcon as du, ChevronDownIcon as fu } from "lucide-react";
import { theme as J } from "./theme.js";
function io(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ci(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = io(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : io(e[o], null);
        }
      };
  };
}
function lt(...e) {
  return y.useCallback(Ci(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  const t = /* @__PURE__ */ mu(e), n = y.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = y.Children.toArray(i), u = a.find(bu);
    if (u) {
      const c = u.props.children, l = a.map((d) => d === u ? y.Children.count(c) > 1 ? y.Children.only(null) : y.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ O(t, { ...s, ref: o, children: y.isValidElement(c) ? y.cloneElement(c, void 0, l) : null });
    }
    return /* @__PURE__ */ O(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var gu = /* @__PURE__ */ Fr("Slot");
// @__NO_SIDE_EFFECTS__
function mu(e) {
  const t = y.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (y.isValidElement(o)) {
      const s = vu(o), a = pu(i, o.props);
      return o.type !== y.Fragment && (a.ref = r ? Ci(r, s) : s), y.cloneElement(o, a);
    }
    return y.Children.count(o) > 1 ? y.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var hu = Symbol("radix.slottable");
function bu(e) {
  return y.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === hu;
}
function pu(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const u = i(...a);
      return o(...a), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vu(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const ao = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, so = iu, Ii = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return so(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const l = n == null ? void 0 : n[c], d = i == null ? void 0 : i[c];
    if (l === null) return null;
    const f = ao(l) || ao(d);
    return o[c][f];
  }), a = n && Object.entries(n).reduce((c, l) => {
    let [d, f] = l;
    return f === void 0 || (c[d] = f), c;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, l) => {
    let { class: d, className: f, ...g } = l;
    return Object.entries(g).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...i,
        ...a
      }[m]) : {
        ...i,
        ...a
      }[m] === b;
    }) ? [
      ...c,
      d,
      f
    ] : c;
  }, []);
  return so(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Jn = ({ className: e = "" }) => /* @__PURE__ */ Ye(
  "svg",
  {
    className: `animate-spin h-4 w-4 text-current ${e}`,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ O(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ O(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
), br = Ii(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        "primary-outline": "border border-primary bg-transparent text-primary hover:bg-primary/10",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "secondary-outline": "border border-secondary bg-transparent text-secondary hover:bg-secondary/10",
        ghost: "hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 min-w-36 px-4 py-2 text-sm",
        sm: "h-9 min-w-28 rounded-md px-3 text-xs",
        lg: "h-11 min-w-36 rounded-md px-8 text-base",
        xl: "h-12 min-w-40 px-10 py-2 text-lg",
        icon: "h-10 w-10 text-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
), xi = y.memo(
  y.forwardRef(
    ({
      className: e,
      variant: t,
      size: n,
      asChild: r = !1,
      loading: o = !1,
      loaderPosition: i = "right",
      leftIcon: s,
      rightIcon: a,
      children: u,
      ...c
    }, l) => {
      const d = r ? gu : "button", f = !!s || !!a;
      let g;
      if (o)
        if (r)
          g = /* @__PURE__ */ O(Jn, {});
        else {
          const v = /* @__PURE__ */ Ye(Ln, { children: [
            i === "left" && /* @__PURE__ */ O(Jn, { className: "mr-1.5" }),
            u,
            i === "right" && /* @__PURE__ */ O(Jn, { className: "ml-1.5" })
          ] });
          g = /* @__PURE__ */ Ye(Ln, { children: [
            s,
            /* @__PURE__ */ O(
              "span",
              {
                className: Z("flex items-center", { "mx-auto": f }),
                children: v
              }
            ),
            a
          ] });
        }
      else
        g = /* @__PURE__ */ Ye(Ln, { children: [
          s,
          /* @__PURE__ */ O("span", { className: Z("flex items-center", { "mx-auto": f }), children: u }),
          a
        ] });
      return /* @__PURE__ */ O(
        d,
        {
          className: Z(br({ variant: t, size: n, className: e }), {
            "justify-between": f
          }),
          ref: l,
          disabled: o || c.disabled,
          ...c,
          children: g
        }
      );
    }
  )
);
xi.displayName = "Button";
const wi = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg"
}, Ai = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg"
}, yu = {
  sm: "h-10 text-sm",
  md: "h-12 text-base",
  lg: "h-14 text-lg"
}, Ei = y.forwardRef(
  ({
    className: e,
    type: t,
    label: n,
    error: r,
    errorMessage: o,
    size: i = "md",
    placeholder: s,
    onFocus: a,
    onBlur: u,
    onChange: c,
    value: l,
    defaultValue: d,
    ...f
  }, g) => {
    const v = y.useId(), [m, b] = y.useState(!1), p = l !== void 0, [I, C] = y.useState(
      d ?? l ?? ""
    ), h = m || (p ? l !== "" : I !== "");
    return /* @__PURE__ */ Ye("div", { className: "w-full", children: [
      /* @__PURE__ */ Ye("div", { className: "relative group", "data-floating": h, children: [
        /* @__PURE__ */ O(
          "input",
          {
            id: v,
            type: t,
            ref: g,
            onFocus: (S) => {
              b(!0), a == null || a(S);
            },
            onBlur: (S) => {
              b(!1), u == null || u(S);
            },
            onChange: (S) => {
              p || C(S.target.value), c == null || c(S);
            },
            value: l,
            defaultValue: d,
            placeholder: h ? s : "",
            className: Z(
              "peer flex w-full rounded-md border bg-white px-3 py-2 transition-colors file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none disabled:cursor-not-allowed",
              "placeholder:text-[#C3C7C8] placeholder:font-light",
              // Base styles
              "border-border text-gray-900",
              // Hover styles
              "hover:border-focus",
              // Focus styles
              "focus:border-focus",
              yu[i],
              // Error styles
              r && "border-destructive focus:border-destructive",
              // Disabled styles
              "disabled:border-disabled-border disabled:bg-disabled-background disabled:text-disabled",
              e
            ),
            ...f
          }
        ),
        /* @__PURE__ */ O(
          "label",
          {
            htmlFor: v,
            className: Z(
              "absolute left-3 loader z-10 origin-[0] transform px-1 duration-300",
              // Base placeholder styles
              "top-1/2 -translate-y-1/2",
              h ? wi[i] : Ai[i],
              // Float label up when data-floating is true
              "group-data-[floating=true]:top-0 group-data-[floating=true]:-translate-y-1/2 group-data-[floating=true]:scale-75",
              // Background color only when floating
              h && (f.disabled ? "bg-disabled-background" : "bg-white"),
              // Color states
              f.disabled ? "text-disabled" : r ? "text-destructive" : h ? m ? "text-focus" : "text-label" : "text-placeholder"
            ),
            children: n
          }
        )
      ] }),
      r && o && /* @__PURE__ */ O("p", { className: "mt-1 text-sm text-destructive", children: o })
    ] });
  }
);
Ei.displayName = "Input";
function mt(e) {
  "@babel/helpers - typeof";
  return mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mt(e);
}
function Cu(e, t) {
  if (mt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (mt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Si(e) {
  var t = Cu(e, "string");
  return mt(t) == "symbol" ? t : t + "";
}
function Vt(e, t, n) {
  return (t = Si(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function uo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uo(Object(n), !0).forEach(function(r) {
      Vt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Iu(e) {
  if (Array.isArray(e)) return e;
}
function xu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], u = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        u = !1;
      } else for (; !(u = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); u = !0) ;
    } catch (l) {
      c = !0, o = l;
    } finally {
      try {
        if (!u && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw o;
      }
    }
    return a;
  }
}
function pr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Mi(e, t) {
  if (e) {
    if (typeof e == "string") return pr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pr(e, t) : void 0;
  }
}
function wu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ke(e, t) {
  return Iu(e) || xu(e, t) || Mi(e, t) || wu();
}
function Au(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function tt(e, t) {
  if (e == null) return {};
  var n, r, o = Au(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var Eu = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Su(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, s = i === void 0 ? null : i, a = e.inputValue, u = e.menuIsOpen, c = e.onChange, l = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, g = e.value, v = tt(e, Eu), m = Ge(a !== void 0 ? a : n), b = Ke(m, 2), p = b[0], I = b[1], C = Ge(u !== void 0 ? u : o), x = Ke(C, 2), h = x[0], A = x[1], w = Ge(g !== void 0 ? g : s), E = Ke(w, 2), S = E[0], M = E[1], T = re(function(R, L) {
    typeof c == "function" && c(R, L), M(R);
  }, [c]), G = re(function(R, L) {
    var _;
    typeof l == "function" && (_ = l(R, L)), I(_ !== void 0 ? _ : R);
  }, [l]), Y = re(function() {
    typeof f == "function" && f(), A(!0);
  }, [f]), k = re(function() {
    typeof d == "function" && d(), A(!1);
  }, [d]), H = a !== void 0 ? a : p, V = u !== void 0 ? u : h, j = g !== void 0 ? g : S;
  return W(W({}, v), {}, {
    inputValue: H,
    menuIsOpen: V,
    onChange: T,
    onInputChange: G,
    onMenuClose: k,
    onMenuOpen: Y,
    value: j
  });
}
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, B.apply(null, arguments);
}
function Mu(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function co(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Si(r.key), r);
  }
}
function Ou(e, t, n) {
  return t && co(e.prototype, t), n && co(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function vr(e, t) {
  return vr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, vr(e, t);
}
function Pu(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && vr(e, t);
}
function pn(e) {
  return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, pn(e);
}
function Oi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Oi = function() {
    return !!e;
  })();
}
function Ru(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gu(e, t) {
  if (t && (mt(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ru(e);
}
function Du(e) {
  var t = Oi();
  return function() {
    var n, r = pn(e);
    if (t) {
      var o = pn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Gu(this, n);
  };
}
function Nu(e) {
  if (Array.isArray(e)) return pr(e);
}
function Fu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Wu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wr(e) {
  return Nu(e) || Fu(e) || Mi(e) || Wu();
}
function Bu(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Tu(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Vu = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Tu(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Bu(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), he = "-ms-", vn = "-moz-", $ = "-webkit-", Pi = "comm", Br = "rule", Tr = "decl", ku = "@import", Ri = "@keyframes", Xu = "@layer", Yu = Math.abs, Sn = String.fromCharCode, Hu = Object.assign;
function Zu(e, t) {
  return me(e, 0) ^ 45 ? (((t << 2 ^ me(e, 0)) << 2 ^ me(e, 1)) << 2 ^ me(e, 2)) << 2 ^ me(e, 3) : 0;
}
function Gi(e) {
  return e.trim();
}
function Lu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function yr(e, t) {
  return e.indexOf(t);
}
function me(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xt(e, t, n) {
  return e.slice(t, n);
}
function Be(e) {
  return e.length;
}
function Vr(e) {
  return e.length;
}
function qt(e, t) {
  return t.push(e), e;
}
function zu(e, t) {
  return e.map(t).join("");
}
var Mn = 1, Et = 1, Di = 0, Ie = 0, le = 0, Rt = "";
function On(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Mn, column: Et, length: s, return: "" };
}
function Ft(e, t) {
  return Hu(On("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ju() {
  return le;
}
function ju() {
  return le = Ie > 0 ? me(Rt, --Ie) : 0, Et--, le === 10 && (Et = 1, Mn--), le;
}
function Oe() {
  return le = Ie < Di ? me(Rt, Ie++) : 0, Et++, le === 10 && (Et = 1, Mn++), le;
}
function He() {
  return me(Rt, Ie);
}
function ln() {
  return Ie;
}
function jt(e, t) {
  return Xt(Rt, e, t);
}
function Yt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ni(e) {
  return Mn = Et = 1, Di = Be(Rt = e), Ie = 0, [];
}
function Fi(e) {
  return Rt = "", e;
}
function dn(e) {
  return Gi(jt(Ie - 1, Cr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _u(e) {
  for (; (le = He()) && le < 33; )
    Oe();
  return Yt(e) > 2 || Yt(le) > 3 ? "" : " ";
}
function Uu(e, t) {
  for (; --t && Oe() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return jt(e, ln() + (t < 6 && He() == 32 && Oe() == 32));
}
function Cr(e) {
  for (; Oe(); )
    switch (le) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Cr(le);
        break;
      case 40:
        e === 41 && Cr(e);
        break;
      case 92:
        Oe();
        break;
    }
  return Ie;
}
function $u(e, t) {
  for (; Oe() && e + le !== 57; )
    if (e + le === 84 && He() === 47)
      break;
  return "/*" + jt(t, Ie - 1) + "*" + Sn(e === 47 ? e : Oe());
}
function Qu(e) {
  for (; !Yt(He()); )
    Oe();
  return jt(e, Ie);
}
function Ku(e) {
  return Fi(fn("", null, null, null, [""], e = Ni(e), 0, [0], e));
}
function fn(e, t, n, r, o, i, s, a, u) {
  for (var c = 0, l = 0, d = s, f = 0, g = 0, v = 0, m = 1, b = 1, p = 1, I = 0, C = "", x = o, h = i, A = r, w = C; b; )
    switch (v = I, I = Oe()) {
      case 40:
        if (v != 108 && me(w, d - 1) == 58) {
          yr(w += Q(dn(I), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += dn(I);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += _u(v);
        break;
      case 92:
        w += Uu(ln() - 1, 7);
        continue;
      case 47:
        switch (He()) {
          case 42:
          case 47:
            qt(qu($u(Oe(), ln()), t, n), u);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * m:
        a[c++] = Be(w) * p;
      case 125 * m:
      case 59:
      case 0:
        switch (I) {
          case 0:
          case 125:
            b = 0;
          case 59 + l:
            p == -1 && (w = Q(w, /\f/g, "")), g > 0 && Be(w) - d && qt(g > 32 ? fo(w + ";", r, n, d - 1) : fo(Q(w, " ", "") + ";", r, n, d - 2), u);
            break;
          case 59:
            w += ";";
          default:
            if (qt(A = lo(w, t, n, c, l, o, a, C, x = [], h = [], d), i), I === 123)
              if (l === 0)
                fn(w, t, A, A, x, i, d, a, h);
              else
                switch (f === 99 && me(w, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fn(e, A, A, r && qt(lo(e, A, A, 0, 0, o, a, C, o, x = [], d), h), o, h, d, a, r ? x : h);
                    break;
                  default:
                    fn(w, A, A, A, [""], h, 0, a, h);
                }
        }
        c = l = g = 0, m = p = 1, C = w = "", d = s;
        break;
      case 58:
        d = 1 + Be(w), g = v;
      default:
        if (m < 1) {
          if (I == 123)
            --m;
          else if (I == 125 && m++ == 0 && ju() == 125)
            continue;
        }
        switch (w += Sn(I), I * m) {
          case 38:
            p = l > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            a[c++] = (Be(w) - 1) * p, p = 1;
            break;
          case 64:
            He() === 45 && (w += dn(Oe())), f = He(), l = d = Be(C = w += Qu(ln())), I++;
            break;
          case 45:
            v === 45 && Be(w) == 2 && (m = 0);
        }
    }
  return i;
}
function lo(e, t, n, r, o, i, s, a, u, c, l) {
  for (var d = o - 1, f = o === 0 ? i : [""], g = Vr(f), v = 0, m = 0, b = 0; v < r; ++v)
    for (var p = 0, I = Xt(e, d + 1, d = Yu(m = s[v])), C = e; p < g; ++p)
      (C = Gi(m > 0 ? f[p] + " " + I : Q(I, /&\f/g, f[p]))) && (u[b++] = C);
  return On(e, t, n, o === 0 ? Br : a, u, c, l);
}
function qu(e, t, n) {
  return On(e, t, n, Pi, Sn(Ju()), Xt(e, 2, -2), 0);
}
function fo(e, t, n, r) {
  return On(e, t, n, Tr, Xt(e, 0, r), Xt(e, r + 1, -1), r);
}
function xt(e, t) {
  for (var n = "", r = Vr(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function ec(e, t, n, r) {
  switch (e.type) {
    case Xu:
      if (e.children.length) break;
    case ku:
    case Tr:
      return e.return = e.return || e.value;
    case Pi:
      return "";
    case Ri:
      return e.return = e.value + "{" + xt(e.children, r) + "}";
    case Br:
      e.value = e.props.join(",");
  }
  return Be(n = xt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function tc(e) {
  var t = Vr(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function nc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function rc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var oc = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = He(), o === 38 && i === 12 && (n[r] = 1), !Yt(i); )
    Oe();
  return jt(t, Ie);
}, ic = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Yt(o)) {
      case 0:
        o === 38 && He() === 12 && (n[r] = 1), t[r] += oc(Ie - 1, n, r);
        break;
      case 2:
        t[r] += dn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = He() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Sn(o);
    }
  while (o = Oe());
  return t;
}, ac = function(t, n) {
  return Fi(ic(Ni(t), n));
}, go = /* @__PURE__ */ new WeakMap(), sc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !go.get(r)) && !o) {
      go.set(t, !0);
      for (var i = [], s = ac(n, i), a = r.props, u = 0, c = 0; u < s.length; u++)
        for (var l = 0; l < a.length; l++, c++)
          t.props[c] = i[u] ? s[u].replace(/&\f/g, a[l]) : a[l] + " " + s[u];
    }
  }
}, uc = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Wi(e, t) {
  switch (Zu(e, t)) {
    case 5103:
      return $ + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return $ + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + e + vn + e + he + e + e;
    case 6828:
    case 4268:
      return $ + e + he + e + e;
    case 6165:
      return $ + e + he + "flex-" + e + e;
    case 5187:
      return $ + e + Q(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return $ + e + he + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return $ + e + he + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return $ + e + he + Q(e, "shrink", "negative") + e;
    case 5292:
      return $ + e + he + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return $ + "box-" + Q(e, "-grow", "") + $ + e + he + Q(e, "grow", "positive") + e;
    case 4554:
      return $ + Q(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, $ + "$1$`$1");
    case 4968:
      return Q(Q(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Be(e) - 1 - t > 6) switch (me(e, t + 1)) {
        case 109:
          if (me(e, t + 4) !== 45) break;
        case 102:
          return Q(e, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + vn + (me(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~yr(e, "stretch") ? Wi(Q(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (me(e, t + 1) !== 115) break;
    case 6444:
      switch (me(e, Be(e) - 3 - (~yr(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + $) + e;
        case 101:
          return Q(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $ + (me(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (me(e, t + 11)) {
        case 114:
          return $ + e + he + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $ + e + he + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $ + e + he + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return $ + e + he + e + e;
  }
  return e;
}
var cc = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Tr:
      t.return = Wi(t.value, t.length);
      break;
    case Ri:
      return xt([Ft(t, {
        value: Q(t.value, "@", "@" + $)
      })], o);
    case Br:
      if (t.length) return zu(t.props, function(i) {
        switch (Lu(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return xt([Ft(t, {
              props: [Q(i, /:(read-\w+)/, ":" + vn + "$1")]
            })], o);
          case "::placeholder":
            return xt([Ft(t, {
              props: [Q(i, /:(plac\w+)/, ":" + $ + "input-$1")]
            }), Ft(t, {
              props: [Q(i, /:(plac\w+)/, ":" + vn + "$1")]
            }), Ft(t, {
              props: [Q(i, /:(plac\w+)/, he + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, lc = [cc], dc = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(m) {
      var b = m.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || lc, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var b = m.getAttribute("data-emotion").split(" "), p = 1; p < b.length; p++)
        i[b[p]] = !0;
      a.push(m);
    }
  );
  var u, c = [sc, uc];
  {
    var l, d = [ec, nc(function(m) {
      l.insert(m);
    })], f = tc(c.concat(o, d)), g = function(b) {
      return xt(Ku(b), f);
    };
    u = function(b, p, I, C) {
      l = I, g(b ? b + "{" + p.styles + "}" : p.styles), C && (v.inserted[p.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Vu({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(a), v;
}, Ir = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function fc() {
  if (mo) return K;
  mo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var A = h.$$typeof;
      switch (A) {
        case t:
          switch (h = h.type, h) {
            case u:
            case c:
            case r:
            case i:
            case o:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case l:
                case v:
                case g:
                case s:
                  return h;
                default:
                  return A;
              }
          }
        case n:
          return A;
      }
    }
  }
  function x(h) {
    return C(h) === c;
  }
  return K.AsyncMode = u, K.ConcurrentMode = c, K.ContextConsumer = a, K.ContextProvider = s, K.Element = t, K.ForwardRef = l, K.Fragment = r, K.Lazy = v, K.Memo = g, K.Portal = n, K.Profiler = i, K.StrictMode = o, K.Suspense = d, K.isAsyncMode = function(h) {
    return x(h) || C(h) === u;
  }, K.isConcurrentMode = x, K.isContextConsumer = function(h) {
    return C(h) === a;
  }, K.isContextProvider = function(h) {
    return C(h) === s;
  }, K.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, K.isForwardRef = function(h) {
    return C(h) === l;
  }, K.isFragment = function(h) {
    return C(h) === r;
  }, K.isLazy = function(h) {
    return C(h) === v;
  }, K.isMemo = function(h) {
    return C(h) === g;
  }, K.isPortal = function(h) {
    return C(h) === n;
  }, K.isProfiler = function(h) {
    return C(h) === i;
  }, K.isStrictMode = function(h) {
    return C(h) === o;
  }, K.isSuspense = function(h) {
    return C(h) === d;
  }, K.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === c || h === i || h === o || h === d || h === f || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === g || h.$$typeof === s || h.$$typeof === a || h.$$typeof === l || h.$$typeof === b || h.$$typeof === p || h.$$typeof === I || h.$$typeof === m);
  }, K.typeOf = C, K;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function gc() {
  return ho || (ho = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === c || D === i || D === o || D === d || D === f || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === g || D.$$typeof === s || D.$$typeof === a || D.$$typeof === l || D.$$typeof === b || D.$$typeof === p || D.$$typeof === I || D.$$typeof === m);
    }
    function x(D) {
      if (typeof D == "object" && D !== null) {
        var xe = D.$$typeof;
        switch (xe) {
          case t:
            var we = D.type;
            switch (we) {
              case u:
              case c:
              case r:
              case i:
              case o:
              case d:
                return we;
              default:
                var rt = we && we.$$typeof;
                switch (rt) {
                  case a:
                  case l:
                  case v:
                  case g:
                  case s:
                    return rt;
                  default:
                    return xe;
                }
            }
          case n:
            return xe;
        }
      }
    }
    var h = u, A = c, w = a, E = s, S = t, M = l, T = r, G = v, Y = g, k = n, H = i, V = o, j = d, R = !1;
    function L(D) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(D) || x(D) === u;
    }
    function _(D) {
      return x(D) === c;
    }
    function pe(D) {
      return x(D) === a;
    }
    function ee(D) {
      return x(D) === s;
    }
    function ae(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function fe(D) {
      return x(D) === l;
    }
    function ve(D) {
      return x(D) === r;
    }
    function ce(D) {
      return x(D) === v;
    }
    function ye(D) {
      return x(D) === g;
    }
    function ge(D) {
      return x(D) === n;
    }
    function Ce(D) {
      return x(D) === i;
    }
    function nt(D) {
      return x(D) === o;
    }
    function _e(D) {
      return x(D) === d;
    }
    q.AsyncMode = h, q.ConcurrentMode = A, q.ContextConsumer = w, q.ContextProvider = E, q.Element = S, q.ForwardRef = M, q.Fragment = T, q.Lazy = G, q.Memo = Y, q.Portal = k, q.Profiler = H, q.StrictMode = V, q.Suspense = j, q.isAsyncMode = L, q.isConcurrentMode = _, q.isContextConsumer = pe, q.isContextProvider = ee, q.isElement = ae, q.isForwardRef = fe, q.isFragment = ve, q.isLazy = ce, q.isMemo = ye, q.isPortal = ge, q.isProfiler = Ce, q.isStrictMode = nt, q.isSuspense = _e, q.isValidElementType = C, q.typeOf = x;
  }()), q;
}
process.env.NODE_ENV === "production" ? Ir.exports = fc() : Ir.exports = gc();
var mc = Ir.exports, Bi = mc, hc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ti = {};
Ti[Bi.ForwardRef] = hc;
Ti[Bi.Memo] = bc;
var pc = !0;
function vc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Vi = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  pc === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, yc = function(t, n, r) {
  Vi(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Cc(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ic = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xc = /[A-Z]|^ms/g, wc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ki = function(t) {
  return t.charCodeAt(1) === 45;
}, bo = function(t) {
  return t != null && typeof t != "boolean";
}, jn = /* @__PURE__ */ rc(function(e) {
  return ki(e) ? e : e.replace(xc, "-$&").toLowerCase();
}), po = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(wc, function(r, o, i) {
          return Te = {
            name: o,
            styles: i,
            next: Te
          }, o;
        });
  }
  return Ic[t] !== 1 && !ki(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ht(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return Te = {
          name: o.name,
          styles: o.styles,
          next: Te
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Te = {
              name: s.name,
              styles: s.styles,
              next: Te
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return Ac(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var u = Te, c = n(e);
        return Te = u, Ht(e, t, c);
      }
      break;
    }
  }
  var l = n;
  return l;
}
function Ac(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ht(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        bo(a) && (r += jn(i) + ":" + po(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var u = 0; u < s.length; u++)
          bo(s[u]) && (r += jn(i) + ":" + po(i, s[u]) + ";");
      else {
        var c = Ht(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += jn(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var vo = /label:\s*([^\s;{]+)\s*(;|$)/g, Te;
function Xi(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Te = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Ht(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Ht(n, t, e[a]), r) {
      var u = i;
      o += u[a];
    }
  vo.lastIndex = 0;
  for (var c = "", l; (l = vo.exec(o)) !== null; )
    c += "-" + l[1];
  var d = Cc(o) + c;
  return {
    name: d,
    styles: o,
    next: Te
  };
}
var Ec = function(t) {
  return t();
}, Sc = y.useInsertionEffect ? y.useInsertionEffect : !1, Mc = Sc || Ec, Yi = /* @__PURE__ */ y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ dc({
    key: "css"
  }) : null
);
Yi.Provider;
var Oc = function(t) {
  return /* @__PURE__ */ pi(function(n, r) {
    var o = Gr(Yi);
    return t(n, o, r);
  });
}, Pc = /* @__PURE__ */ y.createContext({}), kr = {}.hasOwnProperty, xr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Rc = function(t, n) {
  var r = {};
  for (var o in n)
    kr.call(n, o) && (r[o] = n[o]);
  return r[xr] = t, r;
}, Gc = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Vi(n, r, o), Mc(function() {
    return yc(n, r, o);
  }), null;
}, Dc = /* @__PURE__ */ Oc(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[xr], i = [r], s = "";
  typeof e.className == "string" ? s = vc(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Xi(i, void 0, y.useContext(Pc));
  s += t.key + "-" + a.name;
  var u = {};
  for (var c in e)
    kr.call(e, c) && c !== "css" && c !== xr && (u[c] = e[c]);
  return u.className = s, n && (u.ref = n), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(Gc, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ y.createElement(o, u));
}), Nc = Dc, F = function(t, n) {
  var r = arguments;
  if (n == null || !kr.call(n, "css"))
    return y.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Nc, i[1] = Rc(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return y.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(F || (F = {}));
function Xr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Xi(t);
}
function Fc() {
  var e = Xr.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
function Wc(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const Bc = ["top", "right", "bottom", "left"], st = Math.min, Se = Math.max, yn = Math.round, en = Math.floor, Ze = (e) => ({
  x: e,
  y: e
}), Tc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Vc = {
  start: "end",
  end: "start"
};
function wr(e, t, n) {
  return Se(e, st(t, n));
}
function qe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function et(e) {
  return e.split("-")[0];
}
function Gt(e) {
  return e.split("-")[1];
}
function Yr(e) {
  return e === "x" ? "y" : "x";
}
function Hr(e) {
  return e === "y" ? "height" : "width";
}
const kc = /* @__PURE__ */ new Set(["top", "bottom"]);
function ke(e) {
  return kc.has(et(e)) ? "y" : "x";
}
function Zr(e) {
  return Yr(ke(e));
}
function Xc(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gt(e), o = Zr(e), i = Hr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Cn(s)), [s, Cn(s)];
}
function Yc(e) {
  const t = Cn(e);
  return [Ar(e), t, Ar(t)];
}
function Ar(e) {
  return e.replace(/start|end/g, (t) => Vc[t]);
}
const yo = ["left", "right"], Co = ["right", "left"], Hc = ["top", "bottom"], Zc = ["bottom", "top"];
function Lc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Co : yo : t ? yo : Co;
    case "left":
    case "right":
      return t ? Hc : Zc;
    default:
      return [];
  }
}
function zc(e, t, n, r) {
  const o = Gt(e);
  let i = Lc(et(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ar)))), i;
}
function Cn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Tc[t]);
}
function Jc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hi(e) {
  return typeof e != "number" ? Jc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function In(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Io(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ke(t), s = Zr(t), a = Hr(s), u = et(t), c = i === "y", l = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (u) {
    case "top":
      g = {
        x: l,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: l,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gt(t)) {
    case "start":
      g[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const jc = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: l,
    y: d
  } = Io(c, r, u), f = r, g = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: p
    } = a[m], {
      x: I,
      y: C,
      data: x,
      reset: h
    } = await p({
      x: l,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = I ?? l, d = C ?? d, g = {
      ...g,
      [b]: {
        ...g[b],
        ...x
      }
    }, h && v <= 50 && (v++, typeof h == "object" && (h.placement && (f = h.placement), h.rects && (c = h.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : h.rects), {
      x: l,
      y: d
    } = Io(c, f, u)), m = -1);
  }
  return {
    x: l,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Zt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = qe(t, e), v = Hi(g), b = a[f ? d === "floating" ? "reference" : "floating" : d], p = In(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: l,
    strategy: u
  })), I = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, h = In(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: I,
    offsetParent: C,
    strategy: u
  }) : I);
  return {
    top: (p.top - h.top + v.top) / x.y,
    bottom: (h.bottom - p.bottom + v.bottom) / x.y,
    left: (p.left - h.left + v.left) / x.x,
    right: (h.right - p.right + v.right) / x.x
  };
}
const _c = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: u
    } = t, {
      element: c,
      padding: l = 0
    } = qe(e, t) || {};
    if (c == null)
      return {};
    const d = Hi(l), f = {
      x: n,
      y: r
    }, g = Zr(o), v = Hr(g), m = await s.getDimensions(c), b = g === "y", p = b ? "top" : "left", I = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", x = i.reference[v] + i.reference[g] - f[g] - i.floating[v], h = f[g] - i.reference[g], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let w = A ? A[C] : 0;
    (!w || !await (s.isElement == null ? void 0 : s.isElement(A))) && (w = a.floating[C] || i.floating[v]);
    const E = x / 2 - h / 2, S = w / 2 - m[v] / 2 - 1, M = st(d[p], S), T = st(d[I], S), G = M, Y = w - m[v] - T, k = w / 2 - m[v] / 2 + E, H = wr(G, k, Y), V = !u.arrow && Gt(o) != null && k !== H && i.reference[v] / 2 - (k < G ? M : T) - m[v] / 2 < 0, j = V ? k < G ? k - G : k - Y : 0;
    return {
      [g]: f[g] + j,
      data: {
        [g]: H,
        centerOffset: k - H - j,
        ...V && {
          alignmentOffset: j
        }
      },
      reset: V
    };
  }
}), Uc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: u,
        elements: c
      } = t, {
        mainAxis: l = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...b
      } = qe(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const p = et(o), I = ke(a), C = et(a) === a, x = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), h = f || (C || !m ? [Cn(a)] : Yc(a)), A = v !== "none";
      !f && A && h.push(...zc(a, m, v, x));
      const w = [a, ...h], E = await Zt(t, b), S = [];
      let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (l && S.push(E[p]), d) {
        const k = Xc(o, s, x);
        S.push(E[k[0]], E[k[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: S
      }], !S.every((k) => k <= 0)) {
        var T, G;
        const k = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, H = w[k];
        if (H && (!(d === "alignment" ? I !== ke(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((R) => ke(R.placement) === I ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: k,
              overflows: M
            },
            reset: {
              placement: H
            }
          };
        let V = (G = M.filter((j) => j.overflows[0] <= 0).sort((j, R) => j.overflows[1] - R.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!V)
          switch (g) {
            case "bestFit": {
              var Y;
              const j = (Y = M.filter((R) => {
                if (A) {
                  const L = ke(R.placement);
                  return L === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((L) => L > 0).reduce((L, _) => L + _, 0)]).sort((R, L) => R[1] - L[1])[0]) == null ? void 0 : Y[0];
              j && (V = j);
              break;
            }
            case "initialPlacement":
              V = a;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function xo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function wo(e) {
  return Bc.some((t) => e[t] >= 0);
}
const $c = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = qe(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Zt(t, {
            ...o,
            elementContext: "reference"
          }), s = xo(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: wo(s)
            }
          };
        }
        case "escaped": {
          const i = await Zt(t, {
            ...o,
            altBoundary: !0
          }), s = xo(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: wo(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Zi = /* @__PURE__ */ new Set(["left", "top"]);
async function Qc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = et(n), a = Gt(n), u = ke(n) === "y", c = Zi.has(s) ? -1 : 1, l = i && u ? -1 : 1, d = qe(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof v == "number" && (g = a === "end" ? v * -1 : v), u ? {
    x: g * l,
    y: f * c
  } : {
    x: f * c,
    y: g * l
  };
}
const Kc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, u = await Qc(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, qc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: p,
              y: I
            } = b;
            return {
              x: p,
              y: I
            };
          }
        },
        ...u
      } = qe(e, t), c = {
        x: n,
        y: r
      }, l = await Zt(t, u), d = ke(et(o)), f = Yr(d);
      let g = c[f], v = c[d];
      if (i) {
        const b = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", I = g + l[b], C = g - l[p];
        g = wr(I, g, C);
      }
      if (s) {
        const b = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", I = v + l[b], C = v - l[p];
        v = wr(I, v, C);
      }
      const m = a.fn({
        ...t,
        [f]: g,
        [d]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [f]: i,
            [d]: s
          }
        }
      };
    }
  };
}, el = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = qe(e, t), l = {
        x: n,
        y: r
      }, d = ke(o), f = Yr(d);
      let g = l[f], v = l[d];
      const m = qe(a, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const C = f === "y" ? "height" : "width", x = i.reference[f] - i.floating[C] + b.mainAxis, h = i.reference[f] + i.reference[C] - b.mainAxis;
        g < x ? g = x : g > h && (g = h);
      }
      if (c) {
        var p, I;
        const C = f === "y" ? "width" : "height", x = Zi.has(et(o)), h = i.reference[d] - i.floating[C] + (x && ((p = s.offset) == null ? void 0 : p[d]) || 0) + (x ? 0 : b.crossAxis), A = i.reference[d] + i.reference[C] + (x ? 0 : ((I = s.offset) == null ? void 0 : I[d]) || 0) - (x ? b.crossAxis : 0);
        v < h ? v = h : v > A && (v = A);
      }
      return {
        [f]: g,
        [d]: v
      };
    }
  };
}, tl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: u = () => {
        },
        ...c
      } = qe(e, t), l = await Zt(t, c), d = et(o), f = Gt(o), g = ke(o) === "y", {
        width: v,
        height: m
      } = i.floating;
      let b, p;
      d === "top" || d === "bottom" ? (b = d, p = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = d, b = f === "end" ? "top" : "bottom");
      const I = m - l.top - l.bottom, C = v - l.left - l.right, x = st(m - l[b], I), h = st(v - l[p], C), A = !t.middlewareData.shift;
      let w = x, E = h;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = C), (r = t.middlewareData.shift) != null && r.enabled.y && (w = I), A && !f) {
        const M = Se(l.left, 0), T = Se(l.right, 0), G = Se(l.top, 0), Y = Se(l.bottom, 0);
        g ? E = v - 2 * (M !== 0 || T !== 0 ? M + T : Se(l.left, l.right)) : w = m - 2 * (G !== 0 || Y !== 0 ? G + Y : Se(l.top, l.bottom));
      }
      await u({
        ...t,
        availableWidth: E,
        availableHeight: w
      });
      const S = await s.getDimensions(a.floating);
      return v !== S.width || m !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pn() {
  return typeof window < "u";
}
function Dt(e) {
  return Li(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ze(e) {
  var t;
  return (t = (Li(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Li(e) {
  return Pn() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function Ne(e) {
  return Pn() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function Le(e) {
  return Pn() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function Ao(e) {
  return !Pn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
const nl = /* @__PURE__ */ new Set(["inline", "contents"]);
function _t(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !nl.has(o);
}
const rl = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ol(e) {
  return rl.has(Dt(e));
}
const il = [":popover-open", ":modal"];
function Rn(e) {
  return il.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const al = ["transform", "translate", "scale", "rotate", "perspective"], sl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ul = ["paint", "layout", "strict", "content"];
function Lr(e) {
  const t = zr(), n = Ne(e) ? Fe(e) : e;
  return al.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || sl.some((r) => (n.willChange || "").includes(r)) || ul.some((r) => (n.contain || "").includes(r));
}
function cl(e) {
  let t = ut(e);
  for (; Le(t) && !St(t); ) {
    if (Lr(t))
      return t;
    if (Rn(t))
      return null;
    t = ut(t);
  }
  return null;
}
function zr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ll = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function St(e) {
  return ll.has(Dt(e));
}
function Fe(e) {
  return Pe(e).getComputedStyle(e);
}
function Gn(e) {
  return Ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ut(e) {
  if (Dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ao(e) && e.host || // Fallback.
    ze(e)
  );
  return Ao(t) ? t.host : t;
}
function zi(e) {
  const t = ut(e);
  return St(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Le(t) && _t(t) ? t : zi(t);
}
function Lt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = zi(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Pe(o);
  if (i) {
    const a = Er(s);
    return t.concat(s, s.visualViewport || [], _t(o) ? o : [], a && n ? Lt(a) : []);
  }
  return t.concat(o, Lt(o, [], n));
}
function Er(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ji(e) {
  const t = Fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Le(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = yn(n) !== i || yn(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Jr(e) {
  return Ne(e) ? e : e.contextElement;
}
function wt(e) {
  const t = Jr(e);
  if (!Le(t))
    return Ze(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ji(t);
  let s = (i ? yn(n.width) : n.width) / r, a = (i ? yn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const dl = /* @__PURE__ */ Ze(0);
function ji(e) {
  const t = Pe(e);
  return !zr() || !t.visualViewport ? dl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Pe(e) ? !1 : t;
}
function ht(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Jr(e);
  let s = Ze(1);
  t && (r ? Ne(r) && (s = wt(r)) : s = wt(e));
  const a = fl(i, n, r) ? ji(i) : Ze(0);
  let u = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, l = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Pe(i), g = r && Ne(r) ? Pe(r) : r;
    let v = f, m = Er(v);
    for (; m && r && g !== v; ) {
      const b = wt(m), p = m.getBoundingClientRect(), I = Fe(m), C = p.left + (m.clientLeft + parseFloat(I.paddingLeft)) * b.x, x = p.top + (m.clientTop + parseFloat(I.paddingTop)) * b.y;
      u *= b.x, c *= b.y, l *= b.x, d *= b.y, u += C, c += x, v = Pe(m), m = Er(v);
    }
  }
  return In({
    width: l,
    height: d,
    x: u,
    y: c
  });
}
function Dn(e, t) {
  const n = Gn(e).scrollLeft;
  return t ? t.left + n : ht(ze(e)).left + n;
}
function _i(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Dn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function gl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = ze(r), a = t ? Rn(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ze(1);
  const l = Ze(0), d = Le(r);
  if ((d || !d && !i) && ((Dt(r) !== "body" || _t(s)) && (u = Gn(r)), Le(r))) {
    const g = ht(r);
    c = wt(r), l.x = g.x + r.clientLeft, l.y = g.y + r.clientTop;
  }
  const f = s && !d && !i ? _i(s, u) : Ze(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + l.x + f.x,
    y: n.y * c.y - u.scrollTop * c.y + l.y + f.y
  };
}
function ml(e) {
  return Array.from(e.getClientRects());
}
function hl(e) {
  const t = ze(e), n = Gn(e), r = e.ownerDocument.body, o = Se(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Se(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Dn(e);
  const a = -n.scrollTop;
  return Fe(r).direction === "rtl" && (s += Se(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Eo = 25;
function bl(e, t) {
  const n = Pe(e), r = ze(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, u = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = zr();
    (!l || l && t === "fixed") && (a = o.offsetLeft, u = o.offsetTop);
  }
  const c = Dn(r);
  if (c <= 0) {
    const l = r.ownerDocument, d = l.body, f = getComputedStyle(d), g = l.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, v = Math.abs(r.clientWidth - d.clientWidth - g);
    v <= Eo && (i -= v);
  } else c <= Eo && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: u
  };
}
const pl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function vl(e, t) {
  const n = ht(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Le(e) ? wt(e) : Ze(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, u = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: u,
    y: c
  };
}
function So(e, t, n) {
  let r;
  if (t === "viewport")
    r = bl(e, n);
  else if (t === "document")
    r = hl(ze(e));
  else if (Ne(t))
    r = vl(t, n);
  else {
    const o = ji(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return In(r);
}
function Ui(e, t) {
  const n = ut(e);
  return n === t || !Ne(n) || St(n) ? !1 : Fe(n).position === "fixed" || Ui(n, t);
}
function yl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Lt(e, [], !1).filter((a) => Ne(a) && Dt(a) !== "body"), o = null;
  const i = Fe(e).position === "fixed";
  let s = i ? ut(e) : e;
  for (; Ne(s) && !St(s); ) {
    const a = Fe(s), u = Lr(s);
    !u && a.position === "fixed" && (o = null), (i ? !u && !o : !u && a.position === "static" && !!o && pl.has(o.position) || _t(s) && !u && Ui(e, s)) ? r = r.filter((l) => l !== s) : o = a, s = ut(s);
  }
  return t.set(e, r), r;
}
function Cl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Rn(t) ? [] : yl(t, this._c) : [].concat(n), r], a = s[0], u = s.reduce((c, l) => {
    const d = So(t, l, o);
    return c.top = Se(d.top, c.top), c.right = st(d.right, c.right), c.bottom = st(d.bottom, c.bottom), c.left = Se(d.left, c.left), c;
  }, So(t, a, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Il(e) {
  const {
    width: t,
    height: n
  } = Ji(e);
  return {
    width: t,
    height: n
  };
}
function xl(e, t, n) {
  const r = Le(t), o = ze(t), i = n === "fixed", s = ht(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ze(0);
  function c() {
    u.x = Dn(o);
  }
  if (r || !r && !i)
    if ((Dt(t) !== "body" || _t(o)) && (a = Gn(t)), r) {
      const g = ht(t, !0, i, t);
      u.x = g.x + t.clientLeft, u.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const l = o && !r && !i ? _i(o, a) : Ze(0), d = s.left + a.scrollLeft - u.x - l.x, f = s.top + a.scrollTop - u.y - l.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function _n(e) {
  return Fe(e).position === "static";
}
function Mo(e, t) {
  if (!Le(e) || Fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ze(e) === n && (n = n.ownerDocument.body), n;
}
function $i(e, t) {
  const n = Pe(e);
  if (Rn(e))
    return n;
  if (!Le(e)) {
    let o = ut(e);
    for (; o && !St(o); ) {
      if (Ne(o) && !_n(o))
        return o;
      o = ut(o);
    }
    return n;
  }
  let r = Mo(e, t);
  for (; r && ol(r) && _n(r); )
    r = Mo(r, t);
  return r && St(r) && _n(r) && !Lr(r) ? n : r || cl(e) || n;
}
const wl = async function(e) {
  const t = this.getOffsetParent || $i, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Al(e) {
  return Fe(e).direction === "rtl";
}
const El = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gl,
  getDocumentElement: ze,
  getClippingRect: Cl,
  getOffsetParent: $i,
  getElementRects: wl,
  getClientRects: ml,
  getDimensions: Il,
  getScale: wt,
  isElement: Ne,
  isRTL: Al
};
function Qi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Sl(e, t) {
  let n = null, r;
  const o = ze(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), i();
    const c = e.getBoundingClientRect(), {
      left: l,
      top: d,
      width: f,
      height: g
    } = c;
    if (a || t(), !f || !g)
      return;
    const v = en(d), m = en(o.clientWidth - (l + f)), b = en(o.clientHeight - (d + g)), p = en(l), C = {
      rootMargin: -v + "px " + -m + "px " + -b + "px " + -p + "px",
      threshold: Se(0, st(1, u)) || 1
    };
    let x = !0;
    function h(A) {
      const w = A[0].intersectionRatio;
      if (w !== u) {
        if (!x)
          return s();
        w ? s(!1, w) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      w === 1 && !Qi(c, e.getBoundingClientRect()) && s(), x = !1;
    }
    try {
      n = new IntersectionObserver(h, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(h, C);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ki(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, c = Jr(e), l = o || i ? [...c ? Lt(c) : [], ...Lt(t)] : [];
  l.forEach((p) => {
    o && p.addEventListener("scroll", n, {
      passive: !0
    }), i && p.addEventListener("resize", n);
  });
  const d = c && a ? Sl(c, n) : null;
  let f = -1, g = null;
  s && (g = new ResizeObserver((p) => {
    let [I] = p;
    I && I.target === c && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), c && !u && g.observe(c), g.observe(t));
  let v, m = u ? ht(e) : null;
  u && b();
  function b() {
    const p = ht(e);
    m && !Qi(m, p) && n(), m = p, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var p;
    l.forEach((I) => {
      o && I.removeEventListener("scroll", n), i && I.removeEventListener("resize", n);
    }), d == null || d(), (p = g) == null || p.disconnect(), g = null, u && cancelAnimationFrame(v);
  };
}
const Ml = Kc, Ol = qc, Pl = Uc, Rl = tl, Gl = $c, Oo = _c, Dl = el, Nl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: El,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return jc(e, t, {
    ...o,
    platform: i
  });
};
var Sr = Dr, Fl = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], xn = function() {
};
function Wl(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function Bl(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var s in t)
      t.hasOwnProperty(s) && t[s] && i.push("".concat(Wl(e, s)));
  return i.filter(function(a) {
    return a;
  }).map(function(a) {
    return String(a).trim();
  }).join(" ");
}
var Po = function(t) {
  return zl(t) ? t.filter(Boolean) : mt(t) === "object" && t !== null ? [t] : [];
}, qi = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = tt(t, Fl);
  return W({}, n);
}, ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, s = t.getClassNames, a = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, s(n, t), a)
  };
};
function Nn(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function Tl(e) {
  return Nn(e) ? window.innerHeight : e.clientHeight;
}
function ea(e) {
  return Nn(e) ? window.pageYOffset : e.scrollTop;
}
function wn(e, t) {
  if (Nn(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Vl(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function kl(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function tn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : xn, o = ea(e), i = t - o, s = 10, a = 0;
  function u() {
    a += s;
    var c = kl(a, o, i, n);
    wn(e, c), a < n ? window.requestAnimationFrame(u) : r(e);
  }
  u();
}
function Ro(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? wn(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && wn(e, Math.max(t.offsetTop - o, 0));
}
function Xl(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function Go() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Yl() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var ta = !1, Hl = {
  get passive() {
    return ta = !0;
  }
}, nn = typeof window < "u" ? window : {};
nn.addEventListener && nn.removeEventListener && (nn.addEventListener("p", xn, Hl), nn.removeEventListener("p", xn, !1));
var Zl = ta;
function Ll(e) {
  return e != null;
}
function zl(e) {
  return Array.isArray(e);
}
function rn(e, t, n) {
  return e ? t : n;
}
var Jl = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = Object.entries(t).filter(function(s) {
    var a = Ke(s, 1), u = a[0];
    return !r.includes(u);
  });
  return i.reduce(function(s, a) {
    var u = Ke(a, 2), c = u[0], l = u[1];
    return s[c] = l, s;
  }, {});
}, jl = ["children", "innerProps"], _l = ["children", "innerProps"];
function Ul(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, s = e.isFixedPosition, a = e.controlHeight, u = Vl(n), c = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent) return c;
  var l = u.getBoundingClientRect(), d = l.height, f = n.getBoundingClientRect(), g = f.bottom, v = f.height, m = f.top, b = n.offsetParent.getBoundingClientRect(), p = b.top, I = s ? window.innerHeight : Tl(u), C = ea(u), x = parseInt(getComputedStyle(n).marginBottom, 10), h = parseInt(getComputedStyle(n).marginTop, 10), A = p - h, w = I - m, E = A + C, S = d - C - m, M = g - I + C + x, T = C + m - h, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (w >= v)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (S >= v && !s)
        return i && tn(u, M, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!s && S >= r || s && w >= r) {
        i && tn(u, M, G);
        var Y = s ? w - x : S - x;
        return {
          placement: "bottom",
          maxHeight: Y
        };
      }
      if (o === "auto" || s) {
        var k = t, H = s ? A : E;
        return H >= r && (k = Math.min(H - x - a, t)), {
          placement: "top",
          maxHeight: k
        };
      }
      if (o === "bottom")
        return i && wn(u, M), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (A >= v)
        return {
          placement: "top",
          maxHeight: t
        };
      if (E >= v && !s)
        return i && tn(u, T, G), {
          placement: "top",
          maxHeight: t
        };
      if (!s && E >= r || s && A >= r) {
        var V = t;
        return (!s && E >= r || s && A >= r) && (V = s ? A - h : E - h), i && tn(u, T, G), {
          placement: "top",
          maxHeight: V
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return c;
}
function $l(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var na = function(t) {
  return t === "auto" ? "bottom" : t;
}, Ql = function(t, n) {
  var r, o = t.placement, i = t.theme, s = i.borderRadius, a = i.spacing, u = i.colors;
  return W((r = {
    label: "menu"
  }, Vt(r, $l(o), "100%"), Vt(r, "position", "absolute"), Vt(r, "width", "100%"), Vt(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: u.neutral0,
    borderRadius: s,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: a.menuGutter,
    marginTop: a.menuGutter
  });
}, ra = /* @__PURE__ */ vi(null), Kl = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, s = t.menuPosition, a = t.menuShouldScrollIntoView, u = t.theme, c = Gr(ra) || {}, l = c.setPortalPlacement, d = Me(null), f = Ge(o), g = Ke(f, 2), v = g[0], m = g[1], b = Ge(null), p = Ke(b, 2), I = p[0], C = p[1], x = u.spacing.controlHeight;
  return Sr(function() {
    var h = d.current;
    if (h) {
      var A = s === "fixed", w = a && !A, E = Ul({
        maxHeight: o,
        menuEl: h,
        minHeight: r,
        placement: i,
        shouldScroll: w,
        isFixedPosition: A,
        controlHeight: x
      });
      m(E.maxHeight), C(E.placement), l == null || l(E.placement);
    }
  }, [o, i, s, a, r, l, x]), n({
    ref: d,
    placerProps: W(W({}, t), {}, {
      placement: I || na(i),
      maxHeight: v
    })
  });
}, ql = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return F("div", B({}, ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, ed = ql, td = function(t, n) {
  var r = t.maxHeight, o = t.theme.spacing.baseUnit;
  return W({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, nd = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return F("div", B({}, ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, oa = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return W({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, rd = oa, od = oa, id = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = tt(t, jl);
  return F("div", B({}, ue(W(W({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, ad = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = tt(t, _l);
  return F("div", B({}, ue(W(W({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, sd = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, ud = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, s = t.menuPlacement, a = t.menuPosition, u = Me(null), c = Me(null), l = Ge(na(s)), d = Ke(l, 2), f = d[0], g = d[1], v = Ue(function() {
    return {
      setPortalPlacement: g
    };
  }, []), m = Ge(null), b = Ke(m, 2), p = b[0], I = b[1], C = re(function() {
    if (o) {
      var w = Xl(o), E = a === "fixed" ? 0 : window.pageYOffset, S = w[f] + E;
      (S !== (p == null ? void 0 : p.offset) || w.left !== (p == null ? void 0 : p.rect.left) || w.width !== (p == null ? void 0 : p.rect.width)) && I({
        offset: S,
        rect: w
      });
    }
  }, [o, a, f, p == null ? void 0 : p.offset, p == null ? void 0 : p.rect.left, p == null ? void 0 : p.rect.width]);
  Sr(function() {
    C();
  }, [C]);
  var x = re(function() {
    typeof c.current == "function" && (c.current(), c.current = null), o && u.current && (c.current = Ki(o, u.current, C, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, C]);
  Sr(function() {
    x();
  }, [x]);
  var h = re(function(w) {
    u.current = w, x();
  }, [x]);
  if (!n && a !== "fixed" || !p) return null;
  var A = F("div", B({
    ref: h
  }, ue(W(W({}, t), {}, {
    offset: p.offset,
    position: a,
    rect: p.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return F(ra.Provider, {
    value: v
  }, n ? /* @__PURE__ */ ou(A, n) : A);
}, cd = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, ld = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return F("div", B({}, ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, dd = function(t, n) {
  var r = t.theme.spacing, o = t.isMulti, i = t.hasValue, s = t.selectProps.controlShouldRenderValue;
  return W({
    alignItems: "center",
    display: o && i && s ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, fd = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return F("div", B({}, ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, gd = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, md = function(t) {
  var n = t.children, r = t.innerProps;
  return F("div", B({}, ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, Do, hd = ["size"], bd = ["innerProps", "isRtl", "size"];
function pd() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var vd = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: pd
}, ia = function(t) {
  var n = t.size, r = tt(t, hd);
  return F("svg", B({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: vd
  }, r));
}, jr = function(t) {
  return F(ia, B({
    size: 20
  }, t), F("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, aa = function(t) {
  return F(ia, B({
    size: 20
  }, t), F("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, sa = function(t, n) {
  var r = t.isFocused, o = t.theme, i = o.spacing.baseUnit, s = o.colors;
  return W({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? s.neutral60 : s.neutral20,
    padding: i * 2,
    ":hover": {
      color: r ? s.neutral80 : s.neutral40
    }
  });
}, yd = sa, Cd = function(t) {
  var n = t.children, r = t.innerProps;
  return F("div", B({}, ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || F(aa, null));
}, Id = sa, xd = function(t) {
  var n = t.children, r = t.innerProps;
  return F("div", B({}, ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || F(jr, null));
}, wd = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing.baseUnit, s = o.colors;
  return W({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? s.neutral10 : s.neutral20,
    marginBottom: i * 2,
    marginTop: i * 2
  });
}, Ad = function(t) {
  var n = t.innerProps;
  return F("span", B({}, n, ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, Ed = Fc(Do || (Do = Wc([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), Sd = function(t, n) {
  var r = t.isFocused, o = t.size, i = t.theme, s = i.colors, a = i.spacing.baseUnit;
  return W({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? s.neutral60 : s.neutral20,
    padding: a * 2
  });
}, Un = function(t) {
  var n = t.delay, r = t.offset;
  return F("span", {
    css: /* @__PURE__ */ Xr({
      animation: "".concat(Ed, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, Md = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, s = tt(t, bd);
  return F("div", B({}, ue(W(W({}, s), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), F(Un, {
    delay: 0,
    offset: r
  }), F(Un, {
    delay: 160,
    offset: !0
  }), F(Un, {
    delay: 320,
    offset: !r
  }));
}, Od = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.theme, s = i.colors, a = i.borderRadius, u = i.spacing;
  return W({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: u.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? s.neutral5 : s.neutral0,
    borderColor: r ? s.neutral10 : o ? s.primary : s.neutral20,
    borderRadius: a,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(s.primary) : void 0,
    "&:hover": {
      borderColor: o ? s.primary : s.neutral30
    }
  });
}, Pd = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.innerRef, s = t.innerProps, a = t.menuIsOpen;
  return F("div", B({
    ref: i
  }, ue(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": o,
    "control--menu-is-open": a
  }), s, {
    "aria-disabled": r || void 0
  }), n);
}, Rd = Pd, Gd = ["data"], Dd = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, Nd = function(t) {
  var n = t.children, r = t.cx, o = t.getStyles, i = t.getClassNames, s = t.Heading, a = t.headingProps, u = t.innerProps, c = t.label, l = t.theme, d = t.selectProps;
  return F("div", B({}, ue(t, "group", {
    group: !0
  }), u), F(s, B({}, a, {
    selectProps: d,
    theme: l,
    getStyles: o,
    getClassNames: i,
    cx: r
  }), c), F("div", null, n));
}, Fd = function(t, n) {
  var r = t.theme, o = r.colors, i = r.spacing;
  return W({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: i.baseUnit * 3,
    paddingRight: i.baseUnit * 3,
    textTransform: "uppercase"
  });
}, Wd = function(t) {
  var n = qi(t);
  n.data;
  var r = tt(n, Gd);
  return F("div", B({}, ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, Bd = Nd, Td = ["innerRef", "isDisabled", "isHidden", "inputClassName"], Vd = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, s = i.spacing, a = i.colors;
  return W(W({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, kd), n ? {} : {
    margin: s.baseUnit / 2,
    paddingBottom: s.baseUnit / 2,
    paddingTop: s.baseUnit / 2,
    color: a.neutral80
  });
}, ua = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, kd = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": W({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, ua)
}, Xd = function(t) {
  return W({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, ua);
}, Yd = function(t) {
  var n = t.cx, r = t.value, o = qi(t), i = o.innerRef, s = o.isDisabled, a = o.isHidden, u = o.inputClassName, c = tt(o, Td);
  return F("div", B({}, ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), F("input", B({
    className: n({
      input: !0
    }, u),
    ref: i,
    style: Xd(a),
    disabled: s
  }, c)));
}, Hd = Yd, Zd = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, s = r.colors;
  return W({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: s.neutral10,
    borderRadius: i / 2,
    margin: o.baseUnit / 2
  });
}, Ld = function(t, n) {
  var r = t.theme, o = r.borderRadius, i = r.colors, s = t.cropWithEllipsis;
  return W({
    overflow: "hidden",
    textOverflow: s || s === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: o / 2,
    color: i.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, zd = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, s = r.colors, a = t.isFocused;
  return W({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: i / 2,
    backgroundColor: a ? s.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: s.dangerLight,
      color: s.danger
    }
  });
}, ca = function(t) {
  var n = t.children, r = t.innerProps;
  return F("div", r, n);
}, Jd = ca, jd = ca;
function _d(e) {
  var t = e.children, n = e.innerProps;
  return F("div", B({
    role: "button"
  }, n), t || F(jr, {
    size: 14
  }));
}
var Ud = function(t) {
  var n = t.children, r = t.components, o = t.data, i = t.innerProps, s = t.isDisabled, a = t.removeProps, u = t.selectProps, c = r.Container, l = r.Label, d = r.Remove;
  return F(c, {
    data: o,
    innerProps: W(W({}, ue(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": s
    })), i),
    selectProps: u
  }, F(l, {
    data: o,
    innerProps: W({}, ue(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: u
  }, n), F(d, {
    data: o,
    innerProps: W(W({}, ue(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, a),
    selectProps: u
  }));
}, $d = Ud, Qd = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.isSelected, s = t.theme, a = s.spacing, u = s.colors;
  return W({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: i ? u.primary : o ? u.primary25 : "transparent",
    color: r ? u.neutral20 : i ? u.neutral0 : "inherit",
    padding: "".concat(a.baseUnit * 2, "px ").concat(a.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : i ? u.primary : u.primary50
    }
  });
}, Kd = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.isSelected, s = t.innerRef, a = t.innerProps;
  return F("div", B({}, ue(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": o,
    "option--is-selected": i
  }), {
    ref: s,
    "aria-disabled": r
  }, a), n);
}, qd = Kd, ef = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return W({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, tf = function(t) {
  var n = t.children, r = t.innerProps;
  return F("div", B({}, ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, nf = tf, rf = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing, s = o.colors;
  return W({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? s.neutral40 : s.neutral80,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, of = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return F("div", B({}, ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, af = of, la = {
  ClearIndicator: xd,
  Control: Rd,
  DropdownIndicator: Cd,
  DownChevron: aa,
  CrossIcon: jr,
  Group: Bd,
  GroupHeading: Wd,
  IndicatorsContainer: md,
  IndicatorSeparator: Ad,
  Input: Hd,
  LoadingIndicator: Md,
  Menu: ed,
  MenuList: nd,
  MenuPortal: ud,
  LoadingMessage: ad,
  NoOptionsMessage: id,
  MultiValue: $d,
  MultiValueContainer: Jd,
  MultiValueLabel: jd,
  MultiValueRemove: _d,
  Option: qd,
  Placeholder: nf,
  SelectContainer: ld,
  SingleValue: af,
  ValueContainer: fd
}, sf = function(t) {
  return W(W({}, la), t.components);
}, No = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function uf(e, t) {
  return !!(e === t || No(e) && No(t));
}
function cf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!uf(e[n], t[n]))
      return !1;
  return !0;
}
function lf(e, t) {
  t === void 0 && (t = cf);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, o);
    return n = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
function df() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var ff = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: df
}, gf = function(t) {
  return F("span", B({
    css: ff
  }, t));
}, Fo = gf, mf = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, o = t.tabSelectsValue, i = t.context, s = t.isInitialFocus;
    switch (i) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return s ? "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, o = r === void 0 ? "" : r, i = t.labels, s = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
      case "select-option":
        return s ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, o = t.options, i = t.label, s = i === void 0 ? "" : i, a = t.selectValue, u = t.isDisabled, c = t.isSelected, l = t.isAppleDevice, d = function(m, b) {
      return m && m.length ? "".concat(m.indexOf(b) + 1, " of ").concat(m.length) : "";
    };
    if (n === "value" && a)
      return "value ".concat(s, " focused, ").concat(d(a, r), ".");
    if (n === "menu" && l) {
      var f = u ? " disabled" : "", g = "".concat(c ? " selected" : "").concat(f);
      return "".concat(s).concat(g, ", ").concat(d(o, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, hf = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, s = t.isFocused, a = t.selectValue, u = t.selectProps, c = t.id, l = t.isAppleDevice, d = u.ariaLiveMessages, f = u.getOptionLabel, g = u.inputValue, v = u.isMulti, m = u.isOptionDisabled, b = u.isSearchable, p = u.menuIsOpen, I = u.options, C = u.screenReaderStatus, x = u.tabSelectsValue, h = u.isLoading, A = u["aria-label"], w = u["aria-live"], E = Ue(function() {
    return W(W({}, mf), d || {});
  }, [d]), S = Ue(function() {
    var H = "";
    if (n && E.onChange) {
      var V = n.option, j = n.options, R = n.removedValue, L = n.removedValues, _ = n.value, pe = function(ge) {
        return Array.isArray(ge) ? null : ge;
      }, ee = R || V || pe(_), ae = ee ? f(ee) : "", fe = j || L || void 0, ve = fe ? fe.map(f) : [], ce = W({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: ee && m(ee, a),
        label: ae,
        labels: ve
      }, n);
      H = E.onChange(ce);
    }
    return H;
  }, [n, E, m, a, f]), M = Ue(function() {
    var H = "", V = r || o, j = !!(r && a && a.includes(r));
    if (V && E.onFocus) {
      var R = {
        focused: V,
        label: f(V),
        isDisabled: m(V, a),
        isSelected: j,
        options: i,
        context: V === r ? "menu" : "value",
        selectValue: a,
        isAppleDevice: l
      };
      H = E.onFocus(R);
    }
    return H;
  }, [r, o, f, m, E, i, a, l]), T = Ue(function() {
    var H = "";
    if (p && I.length && !h && E.onFilter) {
      var V = C({
        count: i.length
      });
      H = E.onFilter({
        inputValue: g,
        resultsMessage: V
      });
    }
    return H;
  }, [i, g, p, E, I, C, h]), G = (n == null ? void 0 : n.action) === "initial-input-focus", Y = Ue(function() {
    var H = "";
    if (E.guidance) {
      var V = o ? "value" : p ? "menu" : "input";
      H = E.guidance({
        "aria-label": A,
        context: V,
        isDisabled: r && m(r, a),
        isMulti: v,
        isSearchable: b,
        tabSelectsValue: x,
        isInitialFocus: G
      });
    }
    return H;
  }, [A, r, o, v, m, b, p, E, a, x, G]), k = F(hr, null, F("span", {
    id: "aria-selection"
  }, S), F("span", {
    id: "aria-focused"
  }, M), F("span", {
    id: "aria-results"
  }, T), F("span", {
    id: "aria-guidance"
  }, Y));
  return F(hr, null, F(Fo, {
    id: c
  }, G && k), F(Fo, {
    "aria-live": w,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, s && !G && k));
}, bf = hf, Mr = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], pf = new RegExp("[" + Mr.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), da = {};
for (var $n = 0; $n < Mr.length; $n++)
  for (var Qn = Mr[$n], Kn = 0; Kn < Qn.letters.length; Kn++)
    da[Qn.letters[Kn]] = Qn.base;
var fa = function(t) {
  return t.replace(pf, function(n) {
    return da[n];
  });
}, vf = lf(fa), Wo = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, yf = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, Cf = function(t) {
  return function(n, r) {
    if (n.data.__isNew__) return !0;
    var o = W({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: yf,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, s = o.ignoreAccents, a = o.stringify, u = o.trim, c = o.matchFrom, l = u ? Wo(r) : r, d = u ? Wo(a(n)) : a(n);
    return i && (l = l.toLowerCase(), d = d.toLowerCase()), s && (l = vf(l), d = fa(d)), c === "start" ? d.substr(0, l.length) === l : d.indexOf(l) > -1;
  };
}, If = ["innerRef"];
function xf(e) {
  var t = e.innerRef, n = tt(e, If), r = Jl(n, "onExited", "in", "enter", "exit", "appear");
  return F("input", B({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Xr({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var wf = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function Af(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, s = Me(!1), a = Me(!1), u = Me(0), c = Me(null), l = re(function(b, p) {
    if (c.current !== null) {
      var I = c.current, C = I.scrollTop, x = I.scrollHeight, h = I.clientHeight, A = c.current, w = p > 0, E = x - h - C, S = !1;
      E > p && s.current && (r && r(b), s.current = !1), w && a.current && (i && i(b), a.current = !1), w && p > E ? (n && !s.current && n(b), A.scrollTop = x, S = !0, s.current = !0) : !w && -p > C && (o && !a.current && o(b), A.scrollTop = 0, S = !0, a.current = !0), S && wf(b);
    }
  }, [n, r, o, i]), d = re(function(b) {
    l(b, b.deltaY);
  }, [l]), f = re(function(b) {
    u.current = b.changedTouches[0].clientY;
  }, []), g = re(function(b) {
    var p = u.current - b.changedTouches[0].clientY;
    l(b, p);
  }, [l]), v = re(function(b) {
    if (b) {
      var p = Zl ? {
        passive: !1
      } : !1;
      b.addEventListener("wheel", d, p), b.addEventListener("touchstart", f, p), b.addEventListener("touchmove", g, p);
    }
  }, [g, f, d]), m = re(function(b) {
    b && (b.removeEventListener("wheel", d, !1), b.removeEventListener("touchstart", f, !1), b.removeEventListener("touchmove", g, !1));
  }, [g, f, d]);
  return Nr(function() {
    if (t) {
      var b = c.current;
      return v(b), function() {
        m(b);
      };
    }
  }, [t, v, m]), function(b) {
    c.current = b;
  };
}
var Bo = ["boxSizing", "height", "overflow", "paddingRight", "position"], To = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function Vo(e) {
  e.cancelable && e.preventDefault();
}
function ko(e) {
  e.stopPropagation();
}
function Xo() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function Yo() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Ho = !!(typeof window < "u" && window.document && window.document.createElement), Wt = 0, pt = {
  capture: !1,
  passive: !1
};
function Ef(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = Me({}), i = Me(null), s = re(function(u) {
    if (Ho) {
      var c = document.body, l = c && c.style;
      if (r && Bo.forEach(function(v) {
        var m = l && l[v];
        o.current[v] = m;
      }), r && Wt < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, g = window.innerWidth - f + d || 0;
        Object.keys(To).forEach(function(v) {
          var m = To[v];
          l && (l[v] = m);
        }), l && (l.paddingRight = "".concat(g, "px"));
      }
      c && Yo() && (c.addEventListener("touchmove", Vo, pt), u && (u.addEventListener("touchstart", Xo, pt), u.addEventListener("touchmove", ko, pt))), Wt += 1;
    }
  }, [r]), a = re(function(u) {
    if (Ho) {
      var c = document.body, l = c && c.style;
      Wt = Math.max(Wt - 1, 0), r && Wt < 1 && Bo.forEach(function(d) {
        var f = o.current[d];
        l && (l[d] = f);
      }), c && Yo() && (c.removeEventListener("touchmove", Vo, pt), u && (u.removeEventListener("touchstart", Xo, pt), u.removeEventListener("touchmove", ko, pt)));
    }
  }, [r]);
  return Nr(function() {
    if (t) {
      var u = i.current;
      return s(u), function() {
        a(u);
      };
    }
  }, [t, s, a]), function(u) {
    i.current = u;
  };
}
function Sf() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Mf = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, Of = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: Sf
};
function Pf(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, s = e.onBottomLeave, a = e.onTopArrive, u = e.onTopLeave, c = Af({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: s,
    onTopArrive: a,
    onTopLeave: u
  }), l = Ef({
    isEnabled: n
  }), d = function(g) {
    c(g), l(g);
  };
  return F(hr, null, n && F("div", {
    onClick: Mf,
    css: Of
  }), t(d));
}
function Rf() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Gf = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: Rf
}, Df = function(t) {
  var n = t.name, r = t.onFocus;
  return F("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: Gf,
    value: "",
    onChange: function() {
    }
  });
}, Nf = Df;
function _r(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ff() {
  return _r(/^iPhone/i);
}
function ga() {
  return _r(/^Mac/i);
}
function Wf() {
  return _r(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ga() && navigator.maxTouchPoints > 1;
}
function Bf() {
  return Ff() || Wf();
}
function Tf() {
  return ga() || Bf();
}
var Vf = function(t) {
  return t.label;
}, kf = function(t) {
  return t.label;
}, Xf = function(t) {
  return t.value;
}, Yf = function(t) {
  return !!t.isDisabled;
}, Hf = {
  clearIndicator: Id,
  container: cd,
  control: Od,
  dropdownIndicator: yd,
  group: Dd,
  groupHeading: Fd,
  indicatorsContainer: gd,
  indicatorSeparator: wd,
  input: Vd,
  loadingIndicator: Sd,
  loadingMessage: od,
  menu: Ql,
  menuList: td,
  menuPortal: sd,
  multiValue: Zd,
  multiValueLabel: Ld,
  multiValueRemove: zd,
  noOptionsMessage: rd,
  option: Qd,
  placeholder: ef,
  singleValue: rf,
  valueContainer: dd
}, Zf = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, Lf = 4, ma = 4, zf = 38, Jf = ma * 2, jf = {
  baseUnit: ma,
  controlHeight: zf,
  menuGutter: Jf
}, qn = {
  borderRadius: Lf,
  colors: Zf,
  spacing: jf
}, _f = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Go(),
  captureMenuScroll: !Go(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Cf(),
  formatGroupLabel: Vf,
  getOptionLabel: kf,
  getOptionValue: Xf,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Yf,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Yl(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function Zo(e, t, n, r) {
  var o = pa(e, t, n), i = va(e, t, n), s = ba(e, t), a = An(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: i,
    label: s,
    value: a,
    index: r
  };
}
function gn(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(s, a) {
        return Zo(e, s, t, a);
      }).filter(function(s) {
        return zo(e, s);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = Zo(e, n, t, r);
    return zo(e, i) ? i : void 0;
  }).filter(Ll);
}
function ha(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, Wr(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function Lo(e, t) {
  return e.reduce(function(n, r) {
    return r.type === "group" ? n.push.apply(n, Wr(r.options.map(function(o) {
      return {
        data: o.data,
        id: "".concat(t, "-").concat(r.index, "-").concat(o.index)
      };
    }))) : n.push({
      data: r.data,
      id: "".concat(t, "-").concat(r.index)
    }), n;
  }, []);
}
function Uf(e, t) {
  return ha(gn(e, t));
}
function zo(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, s = t.label, a = t.value;
  return (!Ca(e) || !i) && ya(e, {
    label: s,
    value: a,
    data: o
  }, r);
}
function $f(e, t) {
  var n = e.focusedValue, r = e.selectValue, o = r.indexOf(n);
  if (o > -1) {
    var i = t.indexOf(n);
    if (i > -1)
      return n;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function Qf(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var er = function(t, n) {
  var r, o = (r = t.find(function(i) {
    return i.data === n;
  })) === null || r === void 0 ? void 0 : r.id;
  return o || null;
}, ba = function(t, n) {
  return t.getOptionLabel(n);
}, An = function(t, n) {
  return t.getOptionValue(n);
};
function pa(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function va(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = An(e, t);
  return n.some(function(o) {
    return An(e, o) === r;
  });
}
function ya(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var Ca = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, Kf = 1, Ia = /* @__PURE__ */ function(e) {
  Pu(n, e);
  var t = Du(n);
  function n(r) {
    var o;
    if (Mu(this, n), o = t.call(this, r), o.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: "",
      isAppleDevice: !1
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.controlRef = null, o.getControlRef = function(u) {
      o.controlRef = u;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(u) {
      o.focusedOptionRef = u;
    }, o.menuListRef = null, o.getMenuListRef = function(u) {
      o.menuListRef = u;
    }, o.inputRef = null, o.getInputRef = function(u) {
      o.inputRef = u;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(u, c) {
      var l = o.props, d = l.onChange, f = l.name;
      c.name = f, o.ariaOnChange(u, c), d(u, c);
    }, o.setValue = function(u, c, l) {
      var d = o.props, f = d.closeMenuOnSelect, g = d.isMulti, v = d.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: v
      }), f && (o.setState({
        inputIsHiddenAfterUpdate: !g
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(u, {
        action: c,
        option: l
      });
    }, o.selectOption = function(u) {
      var c = o.props, l = c.blurInputOnSelect, d = c.isMulti, f = c.name, g = o.state.selectValue, v = d && o.isOptionSelected(u, g), m = o.isOptionDisabled(u, g);
      if (v) {
        var b = o.getOptionValue(u);
        o.setValue(g.filter(function(p) {
          return o.getOptionValue(p) !== b;
        }), "deselect-option", u);
      } else if (!m)
        d ? o.setValue([].concat(Wr(g), [u]), "select-option", u) : o.setValue(u, "select-option");
      else {
        o.ariaOnChange(u, {
          action: "select-option",
          option: u,
          name: f
        });
        return;
      }
      l && o.blurInput();
    }, o.removeValue = function(u) {
      var c = o.props.isMulti, l = o.state.selectValue, d = o.getOptionValue(u), f = l.filter(function(v) {
        return o.getOptionValue(v) !== d;
      }), g = rn(c, f, f[0] || null);
      o.onChange(g, {
        action: "remove-value",
        removedValue: u
      }), o.focusInput();
    }, o.clearValue = function() {
      var u = o.state.selectValue;
      o.onChange(rn(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: u
      });
    }, o.popValue = function() {
      var u = o.props.isMulti, c = o.state.selectValue, l = c[c.length - 1], d = c.slice(0, c.length - 1), f = rn(u, d, d[0] || null);
      l && o.onChange(f, {
        action: "pop-value",
        removedValue: l
      });
    }, o.getFocusedOptionId = function(u) {
      return er(o.state.focusableOptionsWithIds, u);
    }, o.getFocusableOptionsWithIds = function() {
      return Lo(gn(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++)
        c[l] = arguments[l];
      return Bl.apply(void 0, [o.props.classNamePrefix].concat(c));
    }, o.getOptionLabel = function(u) {
      return ba(o.props, u);
    }, o.getOptionValue = function(u) {
      return An(o.props, u);
    }, o.getStyles = function(u, c) {
      var l = o.props.unstyled, d = Hf[u](c, l);
      d.boxSizing = "border-box";
      var f = o.props.styles[u];
      return f ? f(d, c) : d;
    }, o.getClassNames = function(u, c) {
      var l, d;
      return (l = (d = o.props.classNames)[u]) === null || l === void 0 ? void 0 : l.call(d, c);
    }, o.getElementId = function(u) {
      return "".concat(o.state.instancePrefix, "-").concat(u);
    }, o.getComponents = function() {
      return sf(o.props);
    }, o.buildCategorizedOptions = function() {
      return gn(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return ha(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(u, c) {
      o.setState({
        ariaSelection: W({
          value: u
        }, c)
      });
    }, o.onMenuMouseDown = function(u) {
      u.button === 0 && (u.stopPropagation(), u.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(u) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(u) {
      if (!u.defaultPrevented) {
        var c = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && o.onMenuClose() : c && o.openMenu("first") : (c && (o.openAfterFocus = !0), o.focusInput()), u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && u.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(u) {
      if (!(u && u.type === "mousedown" && u.button !== 0) && !o.props.isDisabled) {
        var c = o.props, l = c.isMulti, d = c.menuIsOpen;
        o.focusInput(), d ? (o.setState({
          inputIsHiddenAfterUpdate: !l
        }), o.onMenuClose()) : o.openMenu("first"), u.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(u) {
      u && u.type === "mousedown" && u.button !== 0 || (o.clearValue(), u.preventDefault(), o.openAfterFocus = !1, u.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(u) {
      typeof o.props.closeMenuOnScroll == "boolean" ? u.target instanceof HTMLElement && Nn(u.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(u) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(u) {
      var c = u.touches, l = c && c.item(0);
      l && (o.initialTouchX = l.clientX, o.initialTouchY = l.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(u) {
      var c = u.touches, l = c && c.item(0);
      if (l) {
        var d = Math.abs(l.clientX - o.initialTouchX), f = Math.abs(l.clientY - o.initialTouchY), g = 5;
        o.userIsDragging = d > g || f > g;
      }
    }, o.onTouchEnd = function(u) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(u.target) && o.menuListRef && !o.menuListRef.contains(u.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(u) {
      o.userIsDragging || o.onControlMouseDown(u);
    }, o.onClearIndicatorTouchEnd = function(u) {
      o.userIsDragging || o.onClearIndicatorMouseDown(u);
    }, o.onDropdownIndicatorTouchEnd = function(u) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(u);
    }, o.handleInputChange = function(u) {
      var c = o.props.inputValue, l = u.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(l, {
        action: "input-change",
        prevInputValue: c
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(u) {
      o.props.onFocus && o.props.onFocus(u), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(u) {
      var c = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(u), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: c
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(u) {
      if (!(o.blockOptionHover || o.state.focusedOption === u)) {
        var c = o.getFocusableOptions(), l = c.indexOf(u);
        o.setState({
          focusedOption: u,
          focusedOptionId: l > -1 ? o.getFocusedOptionId(u) : null
        });
      }
    }, o.shouldHideSelectedOptions = function() {
      return Ca(o.props);
    }, o.onValueInputFocus = function(u) {
      u.preventDefault(), u.stopPropagation(), o.focus();
    }, o.onKeyDown = function(u) {
      var c = o.props, l = c.isMulti, d = c.backspaceRemovesValue, f = c.escapeClearsValue, g = c.inputValue, v = c.isClearable, m = c.isDisabled, b = c.menuIsOpen, p = c.onKeyDown, I = c.tabSelectsValue, C = c.openMenuOnFocus, x = o.state, h = x.focusedOption, A = x.focusedValue, w = x.selectValue;
      if (!m && !(typeof p == "function" && (p(u), u.defaultPrevented))) {
        switch (o.blockOptionHover = !0, u.key) {
          case "ArrowLeft":
            if (!l || g) return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!l || g) return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (g) return;
            if (A)
              o.removeValue(A);
            else {
              if (!d) return;
              l ? o.popValue() : v && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || u.shiftKey || !b || !I || !h || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            C && o.isOptionSelected(h, w))
              return;
            o.selectOption(h);
            break;
          case "Enter":
            if (u.keyCode === 229)
              break;
            if (b) {
              if (!h || o.isComposing) return;
              o.selectOption(h);
              break;
            }
            return;
          case "Escape":
            b ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: g
            }), o.onMenuClose()) : v && f && o.clearValue();
            break;
          case " ":
            if (g)
              return;
            if (!b) {
              o.openMenu("first");
              break;
            }
            if (!h) return;
            o.selectOption(h);
            break;
          case "ArrowUp":
            b ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            b ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!b) return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!b) return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!b) return;
            o.focusOption("first");
            break;
          case "End":
            if (!b) return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        u.preventDefault();
      }
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++Kf), o.state.selectValue = Po(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.getFocusableOptionsWithIds(), s = o.buildFocusableOptions(), a = s.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = i, o.state.focusedOption = s[a], o.state.focusedOptionId = er(i, s[a]);
    }
    return o;
  }
  return Ou(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Ro(this.menuListRef, this.focusedOptionRef), Tf() && this.setState({
        isAppleDevice: !0
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var i = this.props, s = i.isDisabled, a = i.menuIsOpen, u = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (u && !s && o.isDisabled || // ensure focus is on the Input when the menu opens
      u && a && !o.menuIsOpen) && this.focusInput(), u && s && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !u && !s && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Ro(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(o, i) {
      this.props.onInputChange(o, i);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(o) {
      var i = this, s = this.state, a = s.selectValue, u = s.isFocused, c = this.buildFocusableOptions(), l = o === "first" ? 0 : c.length - 1;
      if (!this.props.isMulti) {
        var d = c.indexOf(a[0]);
        d > -1 && (l = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(u && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: c[l],
        focusedOptionId: this.getFocusedOptionId(c[l])
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var i = this.state, s = i.selectValue, a = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var u = s.indexOf(a);
        a || (u = -1);
        var c = s.length - 1, l = -1;
        if (s.length) {
          switch (o) {
            case "previous":
              u === 0 ? l = 0 : u === -1 ? l = c : l = u - 1;
              break;
            case "next":
              u > -1 && u < c && (l = u + 1);
              break;
          }
          this.setState({
            inputIsHidden: l !== -1,
            focusedValue: s[l]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, s = this.state.focusedOption, a = this.getFocusableOptions();
      if (a.length) {
        var u = 0, c = a.indexOf(s);
        s || (c = -1), o === "up" ? u = c > 0 ? c - 1 : a.length - 1 : o === "down" ? u = (c + 1) % a.length : o === "pageup" ? (u = c - i, u < 0 && (u = 0)) : o === "pagedown" ? (u = c + i, u > a.length - 1 && (u = a.length - 1)) : o === "last" && (u = a.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: a[u],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(a[u])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(qn) : W(W({}, qn), this.props.theme) : qn;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, s = this.getStyles, a = this.getClassNames, u = this.getValue, c = this.selectOption, l = this.setValue, d = this.props, f = d.isMulti, g = d.isRtl, v = d.options, m = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: s,
        getClassNames: a,
        getValue: u,
        hasValue: m,
        isMulti: f,
        isRtl: g,
        options: v,
        selectOption: c,
        selectProps: d,
        setValue: l,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, i = o.isClearable, s = o.isMulti;
      return i === void 0 ? s : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, i) {
      return pa(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return va(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return ya(this.props, o, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var s = this.props.inputValue, a = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: i,
          inputValue: s,
          selectValue: a
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var o = this.props, i = o.isDisabled, s = o.isSearchable, a = o.inputId, u = o.inputValue, c = o.tabIndex, l = o.form, d = o.menuIsOpen, f = o.required, g = this.getComponents(), v = g.Input, m = this.state, b = m.inputIsHidden, p = m.ariaSelection, I = this.commonProps, C = a || this.getElementId("input"), x = W(W(W({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox",
          "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, d && {
          "aria-controls": this.getElementId("listbox")
        }), !s && {
          "aria-readonly": !0
        }), this.hasValue() ? (p == null ? void 0 : p.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return s ? /* @__PURE__ */ y.createElement(v, B({}, I, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: C,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: b,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: c,
          form: l,
          type: "text",
          value: u
        }, x)) : /* @__PURE__ */ y.createElement(xf, B({
          id: C,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: xn,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: c,
          inputMode: "none",
          form: l,
          value: ""
        }, x));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, i = this.getComponents(), s = i.MultiValue, a = i.MultiValueContainer, u = i.MultiValueLabel, c = i.MultiValueRemove, l = i.SingleValue, d = i.Placeholder, f = this.commonProps, g = this.props, v = g.controlShouldRenderValue, m = g.isDisabled, b = g.isMulti, p = g.inputValue, I = g.placeholder, C = this.state, x = C.selectValue, h = C.focusedValue, A = C.isFocused;
      if (!this.hasValue() || !v)
        return p ? null : /* @__PURE__ */ y.createElement(d, B({}, f, {
          key: "placeholder",
          isDisabled: m,
          isFocused: A,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), I);
      if (b)
        return x.map(function(E, S) {
          var M = E === h, T = "".concat(o.getOptionLabel(E), "-").concat(o.getOptionValue(E));
          return /* @__PURE__ */ y.createElement(s, B({}, f, {
            components: {
              Container: a,
              Label: u,
              Remove: c
            },
            isFocused: M,
            isDisabled: m,
            key: T,
            index: S,
            removeProps: {
              onClick: function() {
                return o.removeValue(E);
              },
              onTouchEnd: function() {
                return o.removeValue(E);
              },
              onMouseDown: function(Y) {
                Y.preventDefault();
              }
            },
            data: E
          }), o.formatOptionLabel(E, "value"));
        });
      if (p)
        return null;
      var w = x[0];
      return /* @__PURE__ */ y.createElement(l, B({}, f, {
        data: w,
        isDisabled: m
      }), this.formatOptionLabel(w, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), i = o.ClearIndicator, s = this.commonProps, a = this.props, u = a.isDisabled, c = a.isLoading, l = this.state.isFocused;
      if (!this.isClearable() || !i || u || !this.hasValue() || c)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ y.createElement(i, B({}, s, {
        innerProps: d,
        isFocused: l
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), i = o.LoadingIndicator, s = this.commonProps, a = this.props, u = a.isDisabled, c = a.isLoading, l = this.state.isFocused;
      if (!i || !c) return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ y.createElement(i, B({}, s, {
        innerProps: d,
        isDisabled: u,
        isFocused: l
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator, s = o.IndicatorSeparator;
      if (!i || !s) return null;
      var a = this.commonProps, u = this.props.isDisabled, c = this.state.isFocused;
      return /* @__PURE__ */ y.createElement(s, B({}, a, {
        isDisabled: u,
        isFocused: c
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator;
      if (!i) return null;
      var s = this.commonProps, a = this.props.isDisabled, u = this.state.isFocused, c = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ y.createElement(i, B({}, s, {
        innerProps: c,
        isDisabled: a,
        isFocused: u
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), s = i.Group, a = i.GroupHeading, u = i.Menu, c = i.MenuList, l = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, g = i.Option, v = this.commonProps, m = this.state.focusedOption, b = this.props, p = b.captureMenuScroll, I = b.inputValue, C = b.isLoading, x = b.loadingMessage, h = b.minMenuHeight, A = b.maxMenuHeight, w = b.menuIsOpen, E = b.menuPlacement, S = b.menuPosition, M = b.menuPortalTarget, T = b.menuShouldBlockScroll, G = b.menuShouldScrollIntoView, Y = b.noOptionsMessage, k = b.onMenuScrollToTop, H = b.onMenuScrollToBottom;
      if (!w) return null;
      var V = function(ae, fe) {
        var ve = ae.type, ce = ae.data, ye = ae.isDisabled, ge = ae.isSelected, Ce = ae.label, nt = ae.value, _e = m === ce, D = ye ? void 0 : function() {
          return o.onOptionHover(ce);
        }, xe = ye ? void 0 : function() {
          return o.selectOption(ce);
        }, we = "".concat(o.getElementId("option"), "-").concat(fe), rt = {
          id: we,
          onClick: xe,
          onMouseMove: D,
          onMouseOver: D,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.state.isAppleDevice ? void 0 : ge
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ y.createElement(g, B({}, v, {
          innerProps: rt,
          data: ce,
          isDisabled: ye,
          isSelected: ge,
          key: we,
          label: Ce,
          type: ve,
          value: nt,
          isFocused: _e,
          innerRef: _e ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(ae.data, "menu"));
      }, j;
      if (this.hasOptions())
        j = this.getCategorizedOptions().map(function(ee) {
          if (ee.type === "group") {
            var ae = ee.data, fe = ee.options, ve = ee.index, ce = "".concat(o.getElementId("group"), "-").concat(ve), ye = "".concat(ce, "-heading");
            return /* @__PURE__ */ y.createElement(s, B({}, v, {
              key: ce,
              data: ae,
              options: fe,
              Heading: a,
              headingProps: {
                id: ye,
                data: ee.data
              },
              label: o.formatGroupLabel(ee.data)
            }), ee.options.map(function(ge) {
              return V(ge, "".concat(ve, "-").concat(ge.index));
            }));
          } else if (ee.type === "option")
            return V(ee, "".concat(ee.index));
        });
      else if (C) {
        var R = x({
          inputValue: I
        });
        if (R === null) return null;
        j = /* @__PURE__ */ y.createElement(d, v, R);
      } else {
        var L = Y({
          inputValue: I
        });
        if (L === null) return null;
        j = /* @__PURE__ */ y.createElement(f, v, L);
      }
      var _ = {
        minMenuHeight: h,
        maxMenuHeight: A,
        menuPlacement: E,
        menuPosition: S,
        menuShouldScrollIntoView: G
      }, pe = /* @__PURE__ */ y.createElement(Kl, B({}, v, _), function(ee) {
        var ae = ee.ref, fe = ee.placerProps, ve = fe.placement, ce = fe.maxHeight;
        return /* @__PURE__ */ y.createElement(u, B({}, v, _, {
          innerRef: ae,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: C,
          placement: ve
        }), /* @__PURE__ */ y.createElement(Pf, {
          captureEnabled: p,
          onTopArrive: k,
          onBottomArrive: H,
          lockEnabled: T
        }, function(ye) {
          return /* @__PURE__ */ y.createElement(c, B({}, v, {
            innerRef: function(Ce) {
              o.getMenuListRef(Ce), ye(Ce);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": v.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: C,
            maxHeight: ce,
            focusedOption: m
          }), j);
        }));
      });
      return M || S === "fixed" ? /* @__PURE__ */ y.createElement(l, B({}, v, {
        appendTo: M,
        controlElement: this.controlRef,
        menuPlacement: E,
        menuPosition: S
      }), pe) : pe;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, s = i.delimiter, a = i.isDisabled, u = i.isMulti, c = i.name, l = i.required, d = this.state.selectValue;
      if (l && !this.hasValue() && !a)
        return /* @__PURE__ */ y.createElement(Nf, {
          name: c,
          onFocus: this.onValueInputFocus
        });
      if (!(!c || a))
        if (u)
          if (s) {
            var f = d.map(function(m) {
              return o.getOptionValue(m);
            }).join(s);
            return /* @__PURE__ */ y.createElement("input", {
              name: c,
              type: "hidden",
              value: f
            });
          } else {
            var g = d.length > 0 ? d.map(function(m, b) {
              return /* @__PURE__ */ y.createElement("input", {
                key: "i-".concat(b),
                name: c,
                type: "hidden",
                value: o.getOptionValue(m)
              });
            }) : /* @__PURE__ */ y.createElement("input", {
              name: c,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ y.createElement("div", null, g);
          }
        else {
          var v = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ y.createElement("input", {
            name: c,
            type: "hidden",
            value: v
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, s = i.ariaSelection, a = i.focusedOption, u = i.focusedValue, c = i.isFocused, l = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ y.createElement(bf, B({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: s,
        focusedOption: a,
        focusedValue: u,
        isFocused: c,
        selectValue: l,
        focusableOptions: d,
        isAppleDevice: this.state.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), i = o.Control, s = o.IndicatorsContainer, a = o.SelectContainer, u = o.ValueContainer, c = this.props, l = c.className, d = c.id, f = c.isDisabled, g = c.menuIsOpen, v = this.state.isFocused, m = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ y.createElement(a, B({}, m, {
        className: l,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: v
      }), this.renderLiveRegion(), /* @__PURE__ */ y.createElement(i, B({}, m, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: v,
        menuIsOpen: g
      }), /* @__PURE__ */ y.createElement(u, B({}, m, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ y.createElement(s, B({}, m, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var s = i.prevProps, a = i.clearFocusValueOnUpdate, u = i.inputIsHiddenAfterUpdate, c = i.ariaSelection, l = i.isFocused, d = i.prevWasFocused, f = i.instancePrefix, g = o.options, v = o.value, m = o.menuIsOpen, b = o.inputValue, p = o.isMulti, I = Po(v), C = {};
      if (s && (v !== s.value || g !== s.options || m !== s.menuIsOpen || b !== s.inputValue)) {
        var x = m ? Uf(o, I) : [], h = m ? Lo(gn(o, I), "".concat(f, "-option")) : [], A = a ? $f(i, I) : null, w = Qf(i, x), E = er(h, w);
        C = {
          selectValue: I,
          focusedOption: w,
          focusedOptionId: E,
          focusableOptionsWithIds: h,
          focusedValue: A,
          clearFocusValueOnUpdate: !1
        };
      }
      var S = u != null && o !== s ? {
        inputIsHidden: u,
        inputIsHiddenAfterUpdate: void 0
      } : {}, M = c, T = l && d;
      return l && !T && (M = {
        value: rn(p, I, I[0] || null),
        options: I,
        action: "initial-input-focus"
      }, T = !d), (c == null ? void 0 : c.action) === "initial-input-focus" && (M = null), W(W(W({}, C), S), {}, {
        prevProps: o,
        ariaSelection: M,
        prevWasFocused: T
      });
    }
  }]), n;
}(nu);
Ia.defaultProps = _f;
var qf = /* @__PURE__ */ pi(function(e, t) {
  var n = Su(e);
  return /* @__PURE__ */ y.createElement(Ia, B({
    ref: t
  }, n));
}), eg = qf;
const tg = (e) => /* @__PURE__ */ O(la.DropdownIndicator, { ...e, children: /* @__PURE__ */ O(uu, { className: "h-4 w-4 text-gray-500" }) }), ng = {
  sm: { minHeight: J.componentHeight.sm, fontSize: J.fontSize.sm },
  md: { minHeight: J.componentHeight.md, fontSize: J.fontSize.base },
  lg: { minHeight: J.componentHeight.lg, fontSize: J.fontSize.lg }
}, rg = y.forwardRef(
  ({
    className: e,
    containerClassName: t,
    label: n,
    errorMessage: r,
    isInvalid: o,
    placeholder: i = "Select Option",
    size: s = "md",
    floating: a = !0,
    isDisabled: u,
    onFocus: c,
    onBlur: l,
    ...d
  }, f) => {
    const g = y.useId(), v = o || !!r, m = ng[s], [b, p] = Ge(!1), I = d.value || d.defaultValue, C = Array.isArray(I) ? I.length > 0 : !!I, x = a && (b || C), h = (S) => {
      p(!0), c == null || c(S);
    }, A = (S) => {
      p(!1), l == null || l(S);
    }, w = u ? "text-disabled" : v ? "text-destructive" : x ? b ? "text-focus" : "text-label" : "text-placeholder", E = {
      control: (S, M) => ({
        ...S,
        minHeight: m.minHeight,
        borderRadius: J.borderRadius.md,
        borderColor: M.isDisabled ? J.colors["disabled-border"] : v ? J.colors.destructive : M.isFocused ? J.colors.focus : J.colors.border,
        boxShadow: "none",
        "&:hover": {
          borderColor: v ? J.colors.destructive : J.colors.focus
        },
        backgroundColor: M.isDisabled ? J.colors["disabled-background"] : J.colors["primary-foreground"],
        // white
        color: J.colors.label,
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        fontSize: m.fontSize
      }),
      valueContainer: (S) => ({
        ...S,
        padding: "0"
      }),
      input: (S) => ({
        ...S,
        color: J.colors.label,
        margin: "0",
        padding: "0",
        fontSize: m.fontSize
      }),
      placeholder: (S, M) => ({
        ...S,
        color: M.isDisabled ? J.colors.disabled : "#C3C7C8",
        fontWeight: J.fontWeights.light,
        fontSize: m.fontSize,
        display: x ? "block" : "none"
      }),
      singleValue: (S, M) => ({
        ...S,
        color: M.isDisabled ? J.colors.disabled : J.colors.label,
        fontSize: m.fontSize
      }),
      indicatorSeparator: (S) => ({
        ...S,
        display: "none"
      }),
      dropdownIndicator: (S, M) => ({
        ...S,
        color: J.colors.placeholder,
        transition: "transform 0.2s ease",
        transform: M.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        padding: "0"
      }),
      menu: (S) => ({
        ...S,
        borderRadius: J.borderRadius.md,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        // shadow-md
        marginTop: "0.5rem",
        // mt-2
        backgroundColor: J.colors["primary-foreground"],
        // white
        zIndex: 9999
      }),
      option: (S, M) => ({
        ...S,
        backgroundColor: M.isSelected ? J.colors.accent : "transparent",
        color: M.isSelected ? J.colors["accent-foreground"] : J.colors.label,
        "&:active": {
          backgroundColor: J.colors.accent
        },
        cursor: "pointer",
        padding: "0.5rem 0.75rem",
        // py-2 px-3
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: m.fontSize,
        borderRadius: J.borderRadius.md,
        boxShadow: M.isFocused ? `inset 0 0 0 1px ${J.colors.focus}` : "none"
      }),
      multiValue: (S) => ({
        ...S,
        backgroundColor: J.colors.secondary,
        borderRadius: J.borderRadius.sm
      }),
      multiValueLabel: (S, M) => ({
        ...S,
        color: M.isDisabled ? J.colors.disabled : J.colors["secondary-foreground"]
      }),
      multiValueRemove: (S) => ({
        ...S,
        color: J.colors["secondary-foreground"],
        "&:hover": {
          backgroundColor: J.colors.secondary,
          color: J.colors.destructive
        }
      })
    };
    return /* @__PURE__ */ Ye("div", { className: Z("w-full", t), children: [
      /* @__PURE__ */ Ye("div", { className: "relative group", "data-floating": x, children: [
        /* @__PURE__ */ O(
          eg,
          {
            ref: f,
            id: g,
            className: Z("w-full", e),
            styles: E,
            components: {
              DropdownIndicator: tg
            },
            placeholder: x ? i : "",
            onFocus: h,
            onBlur: A,
            isDisabled: u,
            ...d
          }
        ),
        n && a && /* @__PURE__ */ O(
          "label",
          {
            htmlFor: g,
            className: Z(
              "absolute left-3 z-10 origin-[0] transform px-1 duration-300",
              "top-1/2 -translate-y-1/2",
              x ? wi[s] : Ai[s],
              "group-data-[floating=true]:top-0 group-data-[floating=true]:-translate-y-1/2 group-data-[floating=true]:scale-75",
              x && (u ? "bg-disabled-background" : "bg-white"),
              w
            ),
            children: n
          }
        )
      ] }),
      v && r && /* @__PURE__ */ O("p", { className: "mt-1 text-sm text-destructive", children: r })
    ] });
  }
);
rg.displayName = "Select";
const tr = (e) => e.replace(/dd/g, "DD").replace(/d/g, "D").replace(/yyyy/g, "YYYY").replace(/yy/g, "YY"), og = y.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    label: r = "",
    onBlur: o,
    onFocus: i,
    className: s,
    onKeyDown: a,
    format: u = "dd-MM-yyyy",
    minDate: c,
    maxDate: l,
    ...d
  }, f) => {
    const g = y.useId(), [v, m] = y.useState(!1), [b, p] = y.useState(n), I = e !== void 0, C = I ? e : b, [x, h] = y.useState(C), [A, w] = y.useState(
      C ? zn(C, tr(u)) : ""
    );
    y.useEffect(() => {
      w(C ? zn(C, tr(u)) : "");
    }, [C, u]);
    const E = (G) => {
      I || p(G), t == null || t(G), m(!1);
    };
    return /* @__PURE__ */ O("div", { className: "flex w-full flex-col gap-1.5", children: /* @__PURE__ */ Ye("div", { className: "relative", children: [
      /* @__PURE__ */ O(
        Ei,
        {
          ...d,
          ref: f,
          id: g,
          label: r,
          value: A,
          onChange: (G) => {
            w(G.target.value);
          },
          onBlur: (G) => {
            const Y = tr(u), k = au(G.target.value, Y);
            su(k.toDate()) ? (I || p(k.toDate()), t == null || t(k.toDate()), h(k.toDate())) : G.target.value === "" ? (I || p(void 0), t == null || t(void 0)) : w(C ? zn(C, Y) : ""), o == null || o(G);
          },
          onFocus: (G) => {
            m(!0), i == null || i(G);
          },
          className: Z("pr-12", s),
          onKeyDown: (G) => {
            G.key === "ArrowDown" && (G.preventDefault(), m(!0)), a == null || a(G);
          }
        }
      ),
      /* @__PURE__ */ O("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ Ye(rh, { open: v, onOpenChange: m, children: [
        /* @__PURE__ */ O(oh, { children: /* @__PURE__ */ O(cu, { className: "size-6", color: "#CCD2D6" }) }),
        /* @__PURE__ */ O(
          cs,
          {
            className: "w-auto overflow-hidden p-0",
            align: "end",
            alignOffset: -8,
            sideOffset: 10,
            children: /* @__PURE__ */ O(
              av,
              {
                mode: "single",
                selected: C,
                onSelect: E,
                month: x,
                onMonthChange: h,
                captionLayout: "dropdown",
                fromYear: (c == null ? void 0 : c.getFullYear()) ?? 1900,
                toYear: (l == null ? void 0 : l.getFullYear()) ?? 2100,
                disabled: { before: c, after: l }
              }
            )
          }
        )
      ] }) })
    ] }) });
  }
);
og.displayName = "Datepicker";
function at(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function xa(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = y.createContext(s), u = n.length;
    n = [...n, s];
    const c = (d) => {
      var p;
      const { scope: f, children: g, ...v } = d, m = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[u]) || a, b = y.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ O(m.Provider, { value: b, children: g });
    };
    c.displayName = i + "Provider";
    function l(d, f) {
      var m;
      const g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[u]) || a, v = y.useContext(g);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, l];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function(a) {
      const u = (a == null ? void 0 : a[e]) || i;
      return y.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: u } }),
        [a, u]
      );
    };
  };
  return o.scopeName = e, [r, ig(o, ...t)];
}
function ig(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: u, scopeName: c }) => {
        const d = u(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ag = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Je = ag.reduce((e, t) => {
  const n = /* @__PURE__ */ Fr(`Primitive.${t}`), r = y.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, u = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ O(u, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function sg(e, t) {
  e && yi.flushSync(() => e.dispatchEvent(t));
}
function Mt(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }), y.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ug(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e);
  y.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var cg = "DismissableLayer", Or = "dismissableLayer.update", lg = "dismissableLayer.pointerDownOutside", dg = "dismissableLayer.focusOutside", Jo, wa = y.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Aa = y.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...u
    } = e, c = y.useContext(wa), [l, d] = y.useState(null), f = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = y.useState({}), v = lt(t, (w) => d(w)), m = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), p = m.indexOf(b), I = l ? m.indexOf(l) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, x = I >= p, h = mg((w) => {
      const E = w.target, S = [...c.branches].some((M) => M.contains(E));
      !x || S || (o == null || o(w), s == null || s(w), w.defaultPrevented || a == null || a());
    }, f), A = hg((w) => {
      const E = w.target;
      [...c.branches].some((M) => M.contains(E)) || (i == null || i(w), s == null || s(w), w.defaultPrevented || a == null || a());
    }, f);
    return ug((w) => {
      I === c.layers.size - 1 && (r == null || r(w), !w.defaultPrevented && a && (w.preventDefault(), a()));
    }, f), y.useEffect(() => {
      if (l)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Jo = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(l)), c.layers.add(l), jo(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Jo);
        };
    }, [l, f, n, c]), y.useEffect(() => () => {
      l && (c.layers.delete(l), c.layersWithOutsidePointerEventsDisabled.delete(l), jo());
    }, [l, c]), y.useEffect(() => {
      const w = () => g({});
      return document.addEventListener(Or, w), () => document.removeEventListener(Or, w);
    }, []), /* @__PURE__ */ O(
      Je.div,
      {
        ...u,
        ref: v,
        style: {
          pointerEvents: C ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: at(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: at(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: at(
          e.onPointerDownCapture,
          h.onPointerDownCapture
        )
      }
    );
  }
);
Aa.displayName = cg;
var fg = "DismissableLayerBranch", gg = y.forwardRef((e, t) => {
  const n = y.useContext(wa), r = y.useRef(null), o = lt(t, r);
  return y.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ O(Je.div, { ...e, ref: o });
});
gg.displayName = fg;
function mg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e), r = y.useRef(!1), o = y.useRef(() => {
  });
  return y.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let u = function() {
          Ea(
            lg,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function hg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e), r = y.useRef(!1);
  return y.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Ea(dg, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function jo() {
  const e = new CustomEvent(Or);
  document.dispatchEvent(e);
}
function Ea(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sg(o, i) : o.dispatchEvent(i);
}
var nr = 0;
function bg() {
  y.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? _o()), document.body.insertAdjacentElement("beforeend", e[1] ?? _o()), nr++, () => {
      nr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), nr--;
    };
  }, []);
}
function _o() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var rr = "focusScope.autoFocusOnMount", or = "focusScope.autoFocusOnUnmount", Uo = { bubbles: !1, cancelable: !0 }, pg = "FocusScope", Sa = y.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, u] = y.useState(null), c = Mt(o), l = Mt(i), d = y.useRef(null), f = lt(t, (m) => u(m)), g = y.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  y.useEffect(() => {
    if (r) {
      let m = function(C) {
        if (g.paused || !a) return;
        const x = C.target;
        a.contains(x) ? d.current = x : it(d.current, { select: !0 });
      }, b = function(C) {
        if (g.paused || !a) return;
        const x = C.relatedTarget;
        x !== null && (a.contains(x) || it(d.current, { select: !0 }));
      }, p = function(C) {
        if (document.activeElement === document.body)
          for (const h of C)
            h.removedNodes.length > 0 && it(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const I = new MutationObserver(p);
      return a && I.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), I.disconnect();
      };
    }
  }, [r, a, g.paused]), y.useEffect(() => {
    if (a) {
      Qo.add(g);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const p = new CustomEvent(rr, Uo);
        a.addEventListener(rr, c), a.dispatchEvent(p), p.defaultPrevented || (vg(wg(Ma(a)), { select: !0 }), document.activeElement === m && it(a));
      }
      return () => {
        a.removeEventListener(rr, c), setTimeout(() => {
          const p = new CustomEvent(or, Uo);
          a.addEventListener(or, l), a.dispatchEvent(p), p.defaultPrevented || it(m ?? document.body, { select: !0 }), a.removeEventListener(or, l), Qo.remove(g);
        }, 0);
      };
    }
  }, [a, c, l, g]);
  const v = y.useCallback(
    (m) => {
      if (!n && !r || g.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, p = document.activeElement;
      if (b && p) {
        const I = m.currentTarget, [C, x] = yg(I);
        C && x ? !m.shiftKey && p === x ? (m.preventDefault(), n && it(C, { select: !0 })) : m.shiftKey && p === C && (m.preventDefault(), n && it(x, { select: !0 })) : p === I && m.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ O(Je.div, { tabIndex: -1, ...s, ref: f, onKeyDown: v });
});
Sa.displayName = pg;
function vg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (it(r, { select: t }), document.activeElement !== n) return;
}
function yg(e) {
  const t = Ma(e), n = $o(t, e), r = $o(t.reverse(), e);
  return [n, r];
}
function Ma(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function $o(e, t) {
  for (const n of e)
    if (!Cg(n, { upTo: t })) return n;
}
function Cg(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ig(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function it(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ig(e) && t && e.select();
  }
}
var Qo = xg();
function xg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ko(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ko(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ko(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function wg(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ct = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {
}, Ag = y[" useId ".trim().toString()] || (() => {
}), Eg = 0;
function Sg(e) {
  const [t, n] = y.useState(Ag());
  return ct(() => {
    n((r) => r ?? String(Eg++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Mg = typeof document < "u", Og = function() {
}, mn = Mg ? Dr : Og;
function En(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!En(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !En(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Oa(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qo(e, t) {
  const n = Oa(e);
  return Math.round(t * n) / n;
}
function ir(e) {
  const t = y.useRef(e);
  return mn(() => {
    t.current = e;
  }), t;
}
function Pg(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: u,
    open: c
  } = e, [l, d] = y.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, g] = y.useState(r);
  En(f, r) || g(r);
  const [v, m] = y.useState(null), [b, p] = y.useState(null), I = y.useCallback((R) => {
    R !== A.current && (A.current = R, m(R));
  }, []), C = y.useCallback((R) => {
    R !== w.current && (w.current = R, p(R));
  }, []), x = i || v, h = s || b, A = y.useRef(null), w = y.useRef(null), E = y.useRef(l), S = u != null, M = ir(u), T = ir(o), G = ir(c), Y = y.useCallback(() => {
    if (!A.current || !w.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    T.current && (R.platform = T.current), Nl(A.current, w.current, R).then((L) => {
      const _ = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: G.current !== !1
      };
      k.current && !En(E.current, _) && (E.current = _, yi.flushSync(() => {
        d(_);
      }));
    });
  }, [f, t, n, T, G]);
  mn(() => {
    c === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [c]);
  const k = y.useRef(!1);
  mn(() => (k.current = !0, () => {
    k.current = !1;
  }), []), mn(() => {
    if (x && (A.current = x), h && (w.current = h), x && h) {
      if (M.current)
        return M.current(x, h, Y);
      Y();
    }
  }, [x, h, Y, M, S]);
  const H = y.useMemo(() => ({
    reference: A,
    floating: w,
    setReference: I,
    setFloating: C
  }), [I, C]), V = y.useMemo(() => ({
    reference: x,
    floating: h
  }), [x, h]), j = y.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return R;
    const L = qo(V.floating, l.x), _ = qo(V.floating, l.y);
    return a ? {
      ...R,
      transform: "translate(" + L + "px, " + _ + "px)",
      ...Oa(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: _
    };
  }, [n, a, V.floating, l.x, l.y]);
  return y.useMemo(() => ({
    ...l,
    update: Y,
    refs: H,
    elements: V,
    floatingStyles: j
  }), [l, Y, H, V, j]);
}
const Rg = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Oo({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Oo({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Gg = (e, t) => ({
  ...Ml(e),
  options: [e, t]
}), Dg = (e, t) => ({
  ...Ol(e),
  options: [e, t]
}), Ng = (e, t) => ({
  ...Dl(e),
  options: [e, t]
}), Fg = (e, t) => ({
  ...Pl(e),
  options: [e, t]
}), Wg = (e, t) => ({
  ...Rl(e),
  options: [e, t]
}), Bg = (e, t) => ({
  ...Gl(e),
  options: [e, t]
}), Tg = (e, t) => ({
  ...Rg(e),
  options: [e, t]
});
var Vg = "Arrow", Pa = y.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ O(
    Je.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ O("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Pa.displayName = Vg;
var kg = Pa;
function Xg(e) {
  const [t, n] = y.useState(void 0);
  return ct(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, c = Array.isArray(u) ? u[0] : u;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Ur = "Popper", [Ra, Ga] = xa(Ur), [Yg, Da] = Ra(Ur), Na = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = y.useState(null);
  return /* @__PURE__ */ O(Yg, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Na.displayName = Ur;
var Fa = "PopperAnchor", Wa = y.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Da(Fa, n), s = y.useRef(null), a = lt(t, s), u = y.useRef(null);
    return y.useEffect(() => {
      const c = u.current;
      u.current = (r == null ? void 0 : r.current) || s.current, c !== u.current && i.onAnchorChange(u.current);
    }), r ? null : /* @__PURE__ */ O(Je.div, { ...o, ref: a });
  }
);
Wa.displayName = Fa;
var $r = "PopperContent", [Hg, Zg] = Ra($r), Ba = y.forwardRef(
  (e, t) => {
    var ye, ge, Ce, nt, _e, D;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: u = !0,
      collisionBoundary: c = [],
      collisionPadding: l = 0,
      sticky: d = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...m
    } = e, b = Da($r, n), [p, I] = y.useState(null), C = lt(t, (xe) => I(xe)), [x, h] = y.useState(null), A = Xg(x), w = (A == null ? void 0 : A.width) ?? 0, E = (A == null ? void 0 : A.height) ?? 0, S = r + (i !== "center" ? "-" + i : ""), M = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, T = Array.isArray(c) ? c : [c], G = T.length > 0, Y = {
      padding: M,
      boundary: T.filter(zg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: G
    }, { refs: k, floatingStyles: H, placement: V, isPositioned: j, middlewareData: R } = Pg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: S,
      whileElementsMounted: (...xe) => Ki(...xe, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Gg({ mainAxis: o + E, alignmentAxis: s }),
        u && Dg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Ng() : void 0,
          ...Y
        }),
        u && Fg({ ...Y }),
        Wg({
          ...Y,
          apply: ({ elements: xe, rects: we, availableWidth: rt, availableHeight: Tn }) => {
            const { width: Vn, height: kn } = we.reference, bt = xe.floating.style;
            bt.setProperty("--radix-popper-available-width", `${rt}px`), bt.setProperty("--radix-popper-available-height", `${Tn}px`), bt.setProperty("--radix-popper-anchor-width", `${Vn}px`), bt.setProperty("--radix-popper-anchor-height", `${kn}px`);
          }
        }),
        x && Tg({ element: x, padding: a }),
        Jg({ arrowWidth: w, arrowHeight: E }),
        f && Bg({ strategy: "referenceHidden", ...Y })
      ]
    }), [L, _] = ka(V), pe = Mt(v);
    ct(() => {
      j && (pe == null || pe());
    }, [j, pe]);
    const ee = (ye = R.arrow) == null ? void 0 : ye.x, ae = (ge = R.arrow) == null ? void 0 : ge.y, fe = ((Ce = R.arrow) == null ? void 0 : Ce.centerOffset) !== 0, [ve, ce] = y.useState();
    return ct(() => {
      p && ce(window.getComputedStyle(p).zIndex);
    }, [p]), /* @__PURE__ */ O(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: j ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            (nt = R.transformOrigin) == null ? void 0 : nt.x,
            (_e = R.transformOrigin) == null ? void 0 : _e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((D = R.hide) == null ? void 0 : D.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ O(
          Hg,
          {
            scope: n,
            placedSide: L,
            onArrowChange: h,
            arrowX: ee,
            arrowY: ae,
            shouldHideArrow: fe,
            children: /* @__PURE__ */ O(
              Je.div,
              {
                "data-side": L,
                "data-align": _,
                ...m,
                ref: C,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: j ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ba.displayName = $r;
var Ta = "PopperArrow", Lg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Va = y.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Zg(Ta, r), s = Lg[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ O(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ O(
          kg,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Va.displayName = Ta;
function zg(e) {
  return e !== null;
}
var Jg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, p, I;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [c, l] = ka(n), d = { start: "0%", center: "50%", end: "100%" }[l], f = (((p = o.arrow) == null ? void 0 : p.x) ?? 0) + a / 2, g = (((I = o.arrow) == null ? void 0 : I.y) ?? 0) + u / 2;
    let v = "", m = "";
    return c === "bottom" ? (v = s ? d : `${f}px`, m = `${-u}px`) : c === "top" ? (v = s ? d : `${f}px`, m = `${r.floating.height + u}px`) : c === "right" ? (v = `${-u}px`, m = s ? d : `${g}px`) : c === "left" && (v = `${r.floating.width + u}px`, m = s ? d : `${g}px`), { data: { x: v, y: m } };
  }
});
function ka(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var jg = Na, Xa = Wa, _g = Ba, Ug = Va, $g = "Portal", Ya = y.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = y.useState(!1);
  ct(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? ru.createPortal(/* @__PURE__ */ O(Je.div, { ...r, ref: t }), s) : null;
});
Ya.displayName = $g;
function Qg(e, t) {
  return y.useReducer((n, r) => t[n][r] ?? n, e);
}
var Qr = (e) => {
  const { present: t, children: n } = e, r = Kg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n), i = lt(r.ref, qg(o));
  return typeof n == "function" || r.isPresent ? y.cloneElement(o, { ref: i }) : null;
};
Qr.displayName = "Presence";
function Kg(e) {
  const [t, n] = y.useState(), r = y.useRef(null), o = y.useRef(e), i = y.useRef("none"), s = e ? "mounted" : "unmounted", [a, u] = Qg(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return y.useEffect(() => {
    const c = on(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), ct(() => {
    const c = r.current, l = o.current;
    if (l !== e) {
      const f = i.current, g = on(c);
      e ? u("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(l && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), ct(() => {
    if (t) {
      let c;
      const l = t.ownerDocument.defaultView ?? window, d = (g) => {
        const m = on(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && m && (u("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, f = (g) => {
        g.target === t && (i.current = on(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(c), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: y.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function on(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function qg(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var em = y[" useInsertionEffect ".trim().toString()] || ct;
function tm({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = nm({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, u = a ? e : o;
  {
    const l = y.useRef(e !== void 0);
    y.useEffect(() => {
      const d = l.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), l.current = a;
    }, [a, r]);
  }
  const c = y.useCallback(
    (l) => {
      var d;
      if (a) {
        const f = rm(l) ? l(e) : l;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else
        i(l);
    },
    [a, e, i, s]
  );
  return [u, c];
}
function nm({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = y.useState(e), o = y.useRef(n), i = y.useRef(t);
  return em(() => {
    i.current = t;
  }, [t]), y.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function rm(e) {
  return typeof e == "function";
}
var om = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, vt = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), sn = {}, ar = 0, Ha = function(e) {
  return e && (e.host || Ha(e.parentNode));
}, im = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ha(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, am = function(e, t, n, r) {
  var o = im(t, Array.isArray(e) ? e : [e]);
  sn[n] || (sn[n] = /* @__PURE__ */ new WeakMap());
  var i = sn[n], s = [], a = /* @__PURE__ */ new Set(), u = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var l = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        l(f);
      else
        try {
          var g = f.getAttribute(r), v = g !== null && g !== "false", m = (vt.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
          vt.set(f, m), i.set(f, b), s.push(f), m === 1 && v && an.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", f, p);
        }
    });
  };
  return l(t), a.clear(), ar++, function() {
    s.forEach(function(d) {
      var f = vt.get(d) - 1, g = i.get(d) - 1;
      vt.set(d, f), i.set(d, g), f || (an.has(d) || d.removeAttribute(r), an.delete(d)), g || d.removeAttribute(n);
    }), ar--, ar || (vt = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), sn = {});
  };
}, sm = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = om(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), am(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ve = function() {
  return Ve = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ve.apply(this, arguments);
};
function Za(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function um(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var hn = "right-scroll-bar-position", bn = "width-before-scroll-bar", cm = "with-scroll-bars-hidden", lm = "--removed-body-scroll-bar-size";
function sr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function dm(e, t) {
  var n = Ge(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var fm = typeof window < "u" ? y.useLayoutEffect : y.useEffect, ei = /* @__PURE__ */ new WeakMap();
function gm(e, t) {
  var n = dm(null, function(r) {
    return e.forEach(function(o) {
      return sr(o, r);
    });
  });
  return fm(function() {
    var r = ei.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || sr(a, null);
      }), i.forEach(function(a) {
        o.has(a) || sr(a, s);
      });
    }
    ei.set(n, e);
  }, [e]), n;
}
function mm(e) {
  return e;
}
function hm(e, t) {
  t === void 0 && (t = mm);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var u = function() {
        var l = s;
        s = [], l.forEach(i);
      }, c = function() {
        return Promise.resolve().then(u);
      };
      c(), n = {
        push: function(l) {
          s.push(l), c();
        },
        filter: function(l) {
          return s = s.filter(l), n;
        }
      };
    }
  };
  return o;
}
function bm(e) {
  e === void 0 && (e = {});
  var t = hm(null);
  return t.options = Ve({ async: !0, ssr: !1 }, e), t;
}
var La = function(e) {
  var t = e.sideCar, n = Za(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return y.createElement(r, Ve({}, n));
};
La.isSideCarExport = !0;
function pm(e, t) {
  return e.useMedium(t), La;
}
var za = bm(), ur = function() {
}, Fn = y.forwardRef(function(e, t) {
  var n = y.useRef(null), r = y.useState({
    onScrollCapture: ur,
    onWheelCapture: ur,
    onTouchMoveCapture: ur
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, u = e.className, c = e.removeScrollBar, l = e.enabled, d = e.shards, f = e.sideCar, g = e.noRelative, v = e.noIsolation, m = e.inert, b = e.allowPinchZoom, p = e.as, I = p === void 0 ? "div" : p, C = e.gapMode, x = Za(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), h = f, A = gm([n, t]), w = Ve(Ve({}, x), o);
  return y.createElement(
    y.Fragment,
    null,
    l && y.createElement(h, { sideCar: za, removeScrollBar: c, shards: d, noRelative: g, noIsolation: v, inert: m, setCallbacks: i, allowPinchZoom: !!b, lockRef: n, gapMode: C }),
    s ? y.cloneElement(y.Children.only(a), Ve(Ve({}, w), { ref: A })) : y.createElement(I, Ve({}, w, { className: u, ref: A }), a)
  );
});
Fn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Fn.classNames = {
  fullWidth: bn,
  zeroRight: hn
};
var vm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ym() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vm();
  return t && e.setAttribute("nonce", t), e;
}
function Cm(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Im(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var xm = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ym()) && (Cm(t, n), Im(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, wm = function() {
  var e = xm();
  return function(t, n) {
    y.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ja = function() {
  var e = wm(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Am = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Em = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cr(n), cr(r), cr(o)];
}, Sm = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Am;
  var t = Em(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Mm = Ja(), At = "data-scroll-locked", Om = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(cm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(At, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(hn, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(bn, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(hn, " .").concat(hn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(bn, " .").concat(bn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(At, `] {
    `).concat(lm, ": ").concat(a, `px;
  }
`);
}, ti = function() {
  var e = parseInt(document.body.getAttribute(At) || "0", 10);
  return isFinite(e) ? e : 0;
}, Pm = function() {
  y.useEffect(function() {
    return document.body.setAttribute(At, (ti() + 1).toString()), function() {
      var e = ti() - 1;
      e <= 0 ? document.body.removeAttribute(At) : document.body.setAttribute(At, e.toString());
    };
  }, []);
}, Rm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Pm();
  var i = y.useMemo(function() {
    return Sm(o);
  }, [o]);
  return y.createElement(Mm, { styles: Om(i, !t, o, n ? "" : "!important") });
}, Pr = !1;
if (typeof window < "u")
  try {
    var un = Object.defineProperty({}, "passive", {
      get: function() {
        return Pr = !0, !0;
      }
    });
    window.addEventListener("test", un, un), window.removeEventListener("test", un, un);
  } catch {
    Pr = !1;
  }
var yt = Pr ? { passive: !1 } : !1, Gm = function(e) {
  return e.tagName === "TEXTAREA";
}, ja = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Gm(e) && n[t] === "visible")
  );
}, Dm = function(e) {
  return ja(e, "overflowY");
}, Nm = function(e) {
  return ja(e, "overflowX");
}, ni = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = _a(e, r);
    if (o) {
      var i = Ua(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Fm = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Wm = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, _a = function(e, t) {
  return e === "v" ? Dm(t) : Nm(t);
}, Ua = function(e, t) {
  return e === "v" ? Fm(t) : Wm(t);
}, Bm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Tm = function(e, t, n, r, o) {
  var i = Bm(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, u = t.contains(a), c = !1, l = s > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var g = Ua(e, a), v = g[0], m = g[1], b = g[2], p = m - b - i * v;
    (v || p) && _a(e, a) && (d += p, f += v);
    var I = a.parentNode;
    a = I && I.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? I.host : I;
  } while (
    // portaled content
    !u && a !== document.body || // self content
    u && (t.contains(a) || t === a)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(f) < 1) && (c = !0), c;
}, cn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ri = function(e) {
  return [e.deltaX, e.deltaY];
}, oi = function(e) {
  return e && "current" in e ? e.current : e;
}, Vm = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, km = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Xm = 0, Ct = [];
function Ym(e) {
  var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), o = y.useState(Xm++)[0], i = y.useState(Ja)[0], s = y.useRef(e);
  y.useEffect(function() {
    s.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = um([e.lockRef.current], (e.shards || []).map(oi), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = y.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !s.current.allowPinchZoom;
    var p = cn(m), I = n.current, C = "deltaX" in m ? m.deltaX : I[0] - p[0], x = "deltaY" in m ? m.deltaY : I[1] - p[1], h, A = m.target, w = Math.abs(C) > Math.abs(x) ? "h" : "v";
    if ("touches" in m && w === "h" && A.type === "range")
      return !1;
    var E = ni(w, A);
    if (!E)
      return !0;
    if (E ? h = w : (h = w === "v" ? "h" : "v", E = ni(w, A)), !E)
      return !1;
    if (!r.current && "changedTouches" in m && (C || x) && (r.current = h), !h)
      return !0;
    var S = r.current || h;
    return Tm(S, b, m, S === "h" ? C : x);
  }, []), u = y.useCallback(function(m) {
    var b = m;
    if (!(!Ct.length || Ct[Ct.length - 1] !== i)) {
      var p = "deltaY" in b ? ri(b) : cn(b), I = t.current.filter(function(h) {
        return h.name === b.type && (h.target === b.target || b.target === h.shadowParent) && Vm(h.delta, p);
      })[0];
      if (I && I.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!I) {
        var C = (s.current.shards || []).map(oi).filter(Boolean).filter(function(h) {
          return h.contains(b.target);
        }), x = C.length > 0 ? a(b, C[0]) : !s.current.noIsolation;
        x && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = y.useCallback(function(m, b, p, I) {
    var C = { name: m, delta: b, target: p, should: I, shadowParent: Hm(p) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== C;
      });
    }, 1);
  }, []), l = y.useCallback(function(m) {
    n.current = cn(m), r.current = void 0;
  }, []), d = y.useCallback(function(m) {
    c(m.type, ri(m), m.target, a(m, e.lockRef.current));
  }, []), f = y.useCallback(function(m) {
    c(m.type, cn(m), m.target, a(m, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return Ct.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", u, yt), document.addEventListener("touchmove", u, yt), document.addEventListener("touchstart", l, yt), function() {
      Ct = Ct.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", u, yt), document.removeEventListener("touchmove", u, yt), document.removeEventListener("touchstart", l, yt);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    v ? y.createElement(i, { styles: km(o) }) : null,
    g ? y.createElement(Rm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Hm(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Zm = pm(za, Ym);
var $a = y.forwardRef(function(e, t) {
  return y.createElement(Fn, Ve({}, e, { ref: t, sideCar: Zm }));
});
$a.classNames = Fn.classNames;
var Wn = "Popover", [Qa] = xa(Wn, [
  Ga
]), Ut = Ga(), [Lm, dt] = Qa(Wn), Ka = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = Ut(t), u = y.useRef(null), [c, l] = y.useState(!1), [d, f] = tm({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Wn
  });
  return /* @__PURE__ */ O(jg, { ...a, children: /* @__PURE__ */ O(
    Lm,
    {
      scope: t,
      contentId: Sg(),
      triggerRef: u,
      open: d,
      onOpenChange: f,
      onOpenToggle: y.useCallback(() => f((g) => !g), [f]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: y.useCallback(() => l(!0), []),
      onCustomAnchorRemove: y.useCallback(() => l(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Ka.displayName = Wn;
var qa = "PopoverAnchor", es = y.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dt(qa, n), i = Ut(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return y.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ O(Xa, { ...i, ...r, ref: t });
  }
);
es.displayName = qa;
var ts = "PopoverTrigger", ns = y.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dt(ts, n), i = Ut(n), s = lt(t, o.triggerRef), a = /* @__PURE__ */ O(
      Je.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ss(o.open),
        ...r,
        ref: s,
        onClick: at(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ O(Xa, { asChild: !0, ...i, children: a });
  }
);
ns.displayName = ts;
var Kr = "PopoverPortal", [zm, Jm] = Qa(Kr, {
  forceMount: void 0
}), rs = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = dt(Kr, t);
  return /* @__PURE__ */ O(zm, { scope: t, forceMount: n, children: /* @__PURE__ */ O(Qr, { present: n || i.open, children: /* @__PURE__ */ O(Ya, { asChild: !0, container: o, children: r }) }) });
};
rs.displayName = Kr;
var Ot = "PopoverContent", os = y.forwardRef(
  (e, t) => {
    const n = Jm(Ot, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = dt(Ot, e.__scopePopover);
    return /* @__PURE__ */ O(Qr, { present: r || i.open, children: i.modal ? /* @__PURE__ */ O(_m, { ...o, ref: t }) : /* @__PURE__ */ O(Um, { ...o, ref: t }) });
  }
);
os.displayName = Ot;
var jm = /* @__PURE__ */ Fr("PopoverContent.RemoveScroll"), _m = y.forwardRef(
  (e, t) => {
    const n = dt(Ot, e.__scopePopover), r = y.useRef(null), o = lt(t, r), i = y.useRef(!1);
    return y.useEffect(() => {
      const s = r.current;
      if (s) return sm(s);
    }, []), /* @__PURE__ */ O($a, { as: jm, allowPinchZoom: !0, children: /* @__PURE__ */ O(
      is,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: at(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: at(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, u = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || u;
            i.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: at(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Um = y.forwardRef(
  (e, t) => {
    const n = dt(Ot, e.__scopePopover), r = y.useRef(!1), o = y.useRef(!1);
    return /* @__PURE__ */ O(
      is,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var u, c;
          (u = e.onInteractOutside) == null || u.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), is = y.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      onFocusOutside: c,
      onInteractOutside: l,
      ...d
    } = e, f = dt(Ot, n), g = Ut(n);
    return bg(), /* @__PURE__ */ O(
      Sa,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ O(
          Aa,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: l,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: c,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ O(
              _g,
              {
                "data-state": ss(f.open),
                role: "dialog",
                id: f.contentId,
                ...g,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), as = "PopoverClose", $m = y.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dt(as, n);
    return /* @__PURE__ */ O(
      Je.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: at(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
$m.displayName = as;
var Qm = "PopoverArrow", Km = y.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ut(n);
    return /* @__PURE__ */ O(Ug, { ...o, ...r, ref: t });
  }
);
Km.displayName = Qm;
function ss(e) {
  return e ? "open" : "closed";
}
var qm = Ka, eh = es, th = ns, nh = rs, us = os;
const rh = qm, oh = th, pv = eh, cs = y.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ O(nh, { children: /* @__PURE__ */ O(
  us,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: Z(
      "z-50 w-72 rounded-md border bg-white p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
      e
    ),
    ...r
  }
) }));
cs.displayName = us.displayName;
function ih(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const lr = {}, kt = {};
function gt(e, t) {
  try {
    const r = (lr[e] || (lr[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in kt ? kt[r] : ii(r, r.split(":"));
  } catch {
    if (e in kt) return kt[e];
    const n = e == null ? void 0 : e.match(ah);
    return n ? ii(e, n.slice(1)) : NaN;
  }
}
const ah = /([+-]\d\d):?(\d\d)?/;
function ii(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return kt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Xe extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(gt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), ls(this), Rr(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Xe(...n, t) : new Xe(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Xe(+this, t);
  }
  getTimezoneOffset() {
    const t = -gt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Rr(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Xe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ai = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!ai.test(e)) return;
  const t = e.replace(ai, "$1UTC");
  Xe.prototype[t] && (e.startsWith("get") ? Xe.prototype[e] = function() {
    return this.internal[t]();
  } : (Xe.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), sh(this), +this;
  }, Xe.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Rr(this), +this;
  }));
});
function Rr(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-gt(e.timeZone, e) * 60));
}
function sh(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ls(e);
}
function ls(e) {
  const t = gt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), i = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - i, a = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && a && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const u = o - n;
  u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
  const c = /* @__PURE__ */ new Date(+e);
  c.setUTCSeconds(0);
  const l = o > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, d = Math.round(-(gt(e.timeZone, e) * 60)) % 60;
  (d || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + l));
  const f = gt(e.timeZone, e), g = f > 0 ? Math.floor(f) : Math.ceil(f), m = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - g, b = g !== n, p = m - u;
  if (b && p) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + p);
    const I = gt(e.timeZone, e), C = I > 0 ? Math.floor(I) : Math.ceil(I), x = g - C;
    x && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + x), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + x));
  }
}
class be extends Xe {
  //#region static
  static tz(t, ...n) {
    return n.length ? new be(...n, t) : new be(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t == null ? void 0 : t.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${ih(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new be(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new be(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ds = 6048e5, uh = 864e5, si = Symbol.for("constructDateFrom");
function de(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && si in e ? e[si](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ne(e, t) {
  return de(t || e, e);
}
function fs(e, t, n) {
  const r = ne(e, n == null ? void 0 : n.in);
  return isNaN(t) ? de(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function gs(e, t, n) {
  const r = ne(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return de(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), i = de(e, r.getTime());
  i.setMonth(r.getMonth() + t + 1, 0);
  const s = i.getDate();
  return o >= s ? i : (r.setFullYear(
    i.getFullYear(),
    i.getMonth(),
    o
  ), r);
}
let ch = {};
function $t() {
  return ch;
}
function Pt(e, t) {
  var a, u, c, l;
  const n = $t(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((l = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : l.weekStartsOn) ?? 0, o = ne(e, t == null ? void 0 : t.in), i = o.getDay(), s = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function zt(e, t) {
  return Pt(e, { ...t, weekStartsOn: 1 });
}
function ms(e, t) {
  const n = ne(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = de(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = zt(o), s = de(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const a = zt(s);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= a.getTime() ? r : r - 1;
}
function ui(e) {
  const t = ne(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Nt(e, ...t) {
  const n = de.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Jt(e, t) {
  const n = ne(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function hs(e, t, n) {
  const [r, o] = Nt(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = Jt(r), s = Jt(o), a = +i - ui(i), u = +s - ui(s);
  return Math.round((a - u) / uh);
}
function lh(e, t) {
  const n = ms(e, t), r = de(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), zt(r);
}
function dh(e, t, n) {
  return fs(e, t * 7, n);
}
function fh(e, t, n) {
  return gs(e, t * 12, n);
}
function gh(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = de.bind(null, o));
    const i = ne(o, r);
    (!n || n < i || isNaN(+i)) && (n = i);
  }), de(r, n || NaN);
}
function mh(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = de.bind(null, o));
    const i = ne(o, r);
    (!n || n > i || isNaN(+i)) && (n = i);
  }), de(r, n || NaN);
}
function hh(e, t, n) {
  const [r, o] = Nt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Jt(r) == +Jt(o);
}
function bs(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function bh(e) {
  return !(!bs(e) && typeof e != "number" || isNaN(+ne(e)));
}
function ph(e, t, n) {
  const [r, o] = Nt(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return i * 12 + s;
}
function vh(e, t) {
  const n = ne(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function ps(e, t) {
  const [n, r] = Nt(e, t.start, t.end);
  return { start: n, end: r };
}
function yh(e, t) {
  const { start: n, end: r } = ps(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const i = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let a = 1;
  const u = [];
  for (; +s <= i; )
    u.push(de(n, s)), s.setMonth(s.getMonth() + a);
  return o ? u.reverse() : u;
}
function Ch(e, t) {
  const n = ne(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Ih(e, t) {
  const n = ne(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function vs(e, t) {
  const n = ne(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function xh(e, t) {
  const { start: n, end: r } = ps(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const i = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let a = 1;
  const u = [];
  for (; +s <= i; )
    u.push(de(n, s)), s.setFullYear(s.getFullYear() + a);
  return o ? u.reverse() : u;
}
function ys(e, t) {
  var a, u, c, l;
  const n = $t(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((l = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : l.weekStartsOn) ?? 0, o = ne(e, t == null ? void 0 : t.in), i = o.getDay(), s = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function wh(e, t) {
  return ys(e, { ...t, weekStartsOn: 1 });
}
const Ah = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Eh = (e, t, n) => {
  let r;
  const o = Ah[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function dr(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Sh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Mh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Oh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ph = {
  date: dr({
    formats: Sh,
    defaultWidth: "full"
  }),
  time: dr({
    formats: Mh,
    defaultWidth: "full"
  }),
  dateTime: dr({
    formats: Oh,
    defaultWidth: "full"
  })
}, Rh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Gh = (e, t, n, r) => Rh[e];
function Bt(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, a = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[a] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, a = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[a] || e.values[s];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const Dh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Nh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Fh = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Wh = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Bh = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Th = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Vh = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, kh = {
  ordinalNumber: Vh,
  era: Bt({
    values: Dh,
    defaultWidth: "wide"
  }),
  quarter: Bt({
    values: Nh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Bt({
    values: Fh,
    defaultWidth: "wide"
  }),
  day: Bt({
    values: Wh,
    defaultWidth: "wide"
  }),
  dayPeriod: Bt({
    values: Bh,
    defaultWidth: "wide",
    formattingValues: Th,
    defaultFormattingWidth: "wide"
  })
};
function Tt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const s = i[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(a) ? Yh(a, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Xh(a, (d) => d.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(u) : u, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const l = t.slice(s.length);
    return { value: c, rest: l };
  };
}
function Xh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Yh(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Hh(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const a = t.slice(o.length);
    return { value: s, rest: a };
  };
}
const Zh = /^(\d+)(th|st|nd|rd)?/i, Lh = /\d+/i, zh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Jh = {
  any: [/^b/i, /^(a|c)/i]
}, jh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _h = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Uh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $h = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Qh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Kh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qh = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, eb = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, tb = {
  ordinalNumber: Hh({
    matchPattern: Zh,
    parsePattern: Lh,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Tt({
    matchPatterns: zh,
    defaultMatchWidth: "wide",
    parsePatterns: Jh,
    defaultParseWidth: "any"
  }),
  quarter: Tt({
    matchPatterns: jh,
    defaultMatchWidth: "wide",
    parsePatterns: _h,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Tt({
    matchPatterns: Uh,
    defaultMatchWidth: "wide",
    parsePatterns: $h,
    defaultParseWidth: "any"
  }),
  day: Tt({
    matchPatterns: Qh,
    defaultMatchWidth: "wide",
    parsePatterns: Kh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Tt({
    matchPatterns: qh,
    defaultMatchWidth: "any",
    parsePatterns: eb,
    defaultParseWidth: "any"
  })
}, qr = {
  code: "en-US",
  formatDistance: Eh,
  formatLong: Ph,
  formatRelative: Gh,
  localize: kh,
  match: tb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function nb(e, t) {
  const n = ne(e, t == null ? void 0 : t.in);
  return hs(n, vs(n)) + 1;
}
function Cs(e, t) {
  const n = ne(e, t == null ? void 0 : t.in), r = +zt(n) - +lh(n);
  return Math.round(r / ds) + 1;
}
function Is(e, t) {
  var l, d, f, g;
  const n = ne(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = $t(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = de((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, i), s.setHours(0, 0, 0, 0);
  const a = Pt(s, t), u = de((t == null ? void 0 : t.in) || e, 0);
  u.setFullYear(r, 0, i), u.setHours(0, 0, 0, 0);
  const c = Pt(u, t);
  return +n >= +a ? r + 1 : +n >= +c ? r : r - 1;
}
function rb(e, t) {
  var a, u, c, l;
  const n = $t(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : u.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((l = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, o = Is(e, t), i = de((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), Pt(i, t);
}
function xs(e, t) {
  const n = ne(e, t == null ? void 0 : t.in), r = +Pt(n, t) - +rb(n, t);
  return Math.round(r / ds) + 1;
}
function te(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const ot = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return te(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : te(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return te(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return te(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return te(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return te(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return te(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return te(o, t.length);
  }
}, It = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ci = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return ot.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Is(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = i % 100;
      return te(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : te(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ms(e);
    return te(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return te(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return te(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return te(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return ot.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return te(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = xs(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : te(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Cs(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : te(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : ot.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = nb(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : te(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return te(i, 2);
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return te(i, t.length);
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return te(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = It.noon : r === 0 ? o = It.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = It.evening : r >= 12 ? o = It.afternoon : r >= 4 ? o = It.morning : o = It.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return ot.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : ot.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : te(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : te(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ot.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : ot.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return ot.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return di(r);
      case "XXXX":
      case "XX":
        return ft(r);
      case "XXXXX":
      case "XXX":
      default:
        return ft(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return di(r);
      case "xxxx":
      case "xx":
        return ft(r);
      case "xxxxx":
      case "xxx":
      default:
        return ft(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + li(r, ":");
      case "OOOO":
      default:
        return "GMT" + ft(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + li(r, ":");
      case "zzzz":
      default:
        return "GMT" + ft(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return te(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return te(+e, t.length);
  }
};
function li(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + te(i, 2);
}
function di(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + te(Math.abs(e) / 60, 2) : ft(e, t);
}
function ft(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = te(Math.trunc(r / 60), 2), i = te(r % 60, 2);
  return n + o + t + i;
}
const fi = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, ws = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, ob = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return fi(e, t);
  let i;
  switch (r) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", fi(r, t)).replace("{{time}}", ws(o, t));
}, ib = {
  p: ws,
  P: ob
}, ab = /^D+$/, sb = /^Y+$/, ub = ["D", "DD", "YY", "YYYY"];
function cb(e) {
  return ab.test(e);
}
function lb(e) {
  return sb.test(e);
}
function db(e, t, n) {
  const r = fb(e, t, n);
  if (console.warn(r), ub.includes(e)) throw new RangeError(r);
}
function fb(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const gb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, mb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, hb = /^'([^]*?)'?$/, bb = /''/g, pb = /[a-zA-Z]/;
function vb(e, t, n) {
  var l, d, f, g, v, m, b, p;
  const r = $t(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? qr, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((p = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : p.weekStartsOn) ?? 0, a = ne(e, n == null ? void 0 : n.in);
  if (!bh(a))
    throw new RangeError("Invalid time value");
  let u = t.match(mb).map((I) => {
    const C = I[0];
    if (C === "p" || C === "P") {
      const x = ib[C];
      return x(I, o.formatLong);
    }
    return I;
  }).join("").match(gb).map((I) => {
    if (I === "''")
      return { isToken: !1, value: "'" };
    const C = I[0];
    if (C === "'")
      return { isToken: !1, value: yb(I) };
    if (ci[C])
      return { isToken: !0, value: I };
    if (C.match(pb))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + C + "`"
      );
    return { isToken: !1, value: I };
  });
  o.localize.preprocessor && (u = o.localize.preprocessor(a, u));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: o
  };
  return u.map((I) => {
    if (!I.isToken) return I.value;
    const C = I.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && lb(C) || !(n != null && n.useAdditionalDayOfYearTokens) && cb(C)) && db(C, t, String(e));
    const x = ci[C[0]];
    return x(a, C, o.localize, c);
  }).join("");
}
function yb(e) {
  const t = e.match(hb);
  return t ? t[1].replace(bb, "'") : e;
}
function Cb(e, t) {
  const n = ne(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), i = de(n, 0);
  return i.setFullYear(r, o + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
}
function Ib(e, t) {
  return ne(e, t == null ? void 0 : t.in).getMonth();
}
function xb(e, t) {
  return ne(e, t == null ? void 0 : t.in).getFullYear();
}
function wb(e, t) {
  return +ne(e) > +ne(t);
}
function Ab(e, t) {
  return +ne(e) < +ne(t);
}
function Eb(e, t, n) {
  const [r, o] = Nt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Sb(e, t, n) {
  const [r, o] = Nt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Mb(e, t, n) {
  const r = ne(e, n == null ? void 0 : n.in), o = r.getFullYear(), i = r.getDate(), s = de(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const a = Cb(s);
  return r.setMonth(t, Math.min(i, a)), r;
}
function Ob(e, t, n) {
  const r = ne(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? de(e, NaN) : (r.setFullYear(t), r);
}
const gi = 5, Pb = 4;
function Rb(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), i = t.addDays(o, gi * 7 - 1);
  return t.getMonth(e) === t.getMonth(i) ? gi : Pb;
}
function As(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -1 * 6) : t.addDays(n, -1 * (r - 1));
}
function Gb(e, t) {
  const n = As(e, t), r = Rb(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Re {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? be.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, i) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, i) : this.options.timeZone ? new be(r, o, i, this.options.timeZone) : new Date(r, o, i);
    }, this.addDays = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addDays ? this.overrides.addDays(r, o) : fs(r, o);
    }, this.addMonths = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addMonths ? this.overrides.addMonths(r, o) : gs(r, o);
    }, this.addWeeks = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addWeeks ? this.overrides.addWeeks(r, o) : dh(r, o);
    }, this.addYears = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addYears ? this.overrides.addYears(r, o) : fh(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : hs(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : ph(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : yh(r);
    }, this.eachYearOfInterval = (r) => {
      var a;
      const o = (a = this.overrides) != null && a.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : xh(r), i = new Set(o.map((u) => this.getYear(u)));
      if (i.size === o.length)
        return o;
      const s = [];
      return i.forEach((u) => {
        s.push(new Date(u, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Gb(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : wh(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : vh(r);
    }, this.endOfWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.endOfWeek ? this.overrides.endOfWeek(r, o) : ys(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Ih(r);
    }, this.format = (r, o, i) => {
      var a;
      const s = (a = this.overrides) != null && a.format ? this.overrides.format(r, o, this.options) : vb(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Cs(r);
    }, this.getMonth = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.getMonth ? this.overrides.getMonth(r, this.options) : Ib(r, this.options);
    }, this.getYear = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.getYear ? this.overrides.getYear(r, this.options) : xb(r, this.options);
    }, this.getWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.getWeek ? this.overrides.getWeek(r, this.options) : xs(r, this.options);
    }, this.isAfter = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isAfter ? this.overrides.isAfter(r, o) : wb(r, o);
    }, this.isBefore = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isBefore ? this.overrides.isBefore(r, o) : Ab(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : bs(r);
    }, this.isSameDay = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isSameDay ? this.overrides.isSameDay(r, o) : hh(r, o);
    }, this.isSameMonth = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isSameMonth ? this.overrides.isSameMonth(r, o) : Eb(r, o);
    }, this.isSameYear = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isSameYear ? this.overrides.isSameYear(r, o) : Sb(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : gh(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : mh(r);
    }, this.setMonth = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.setMonth ? this.overrides.setMonth(r, o) : Mb(r, o);
    }, this.setYear = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.setYear ? this.overrides.setYear(r, o) : Ob(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : As(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Jt(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : zt(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Ch(r);
    }, this.startOfWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Pt(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : vs(r);
    }, this.options = { locale: qr, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    var n;
    const t = (n = this.options.locale) == null ? void 0 : n.code;
    return t && Re.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, i = n == null ? void 0 : n.code;
    if (i && Re.yearFirstLocales.has(i))
      try {
        return new Intl.DateTimeFormat(i, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const s = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, s);
  }
}
Re.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const je = new Re();
class Es {
  constructor(t, n, r = je) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class Db {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class Nb {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Fb(e) {
  return P.createElement("button", { ...e });
}
function Wb(e) {
  return P.createElement("span", { ...e });
}
function Bb(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    P.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && P.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && P.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && P.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && P.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Tb(e) {
  const { day: t, modifiers: n, ...r } = e;
  return P.createElement("td", { ...r });
}
function Vb(e) {
  const { day: t, modifiers: n, ...r } = e, o = P.useRef(null);
  return P.useEffect(() => {
    var i;
    n.focused && ((i = o.current) == null || i.focus());
  }, [n.focused]), P.createElement("button", { ref: o, ...r });
}
var N;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(N || (N = {}));
var se;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(se || (se = {}));
var De;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(De || (De = {}));
var Ee;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ee || (Ee = {}));
function kb(e) {
  const { options: t, className: n, components: r, classNames: o, ...i } = e, s = [o[N.Dropdown], n].join(" "), a = t == null ? void 0 : t.find(({ value: u }) => u === i.value);
  return P.createElement(
    "span",
    { "data-disabled": i.disabled, className: o[N.DropdownRoot] },
    P.createElement(r.Select, { className: s, ...i }, t == null ? void 0 : t.map(({ value: u, label: c, disabled: l }) => P.createElement(r.Option, { key: u, value: u, disabled: l }, c))),
    P.createElement(
      "span",
      { className: o[N.CaptionLabel], "aria-hidden": !0 },
      a == null ? void 0 : a.label,
      P.createElement(r.Chevron, { orientation: "down", size: 18, className: o[N.Chevron] })
    )
  );
}
function Xb(e) {
  return P.createElement("div", { ...e });
}
function Yb(e) {
  return P.createElement("div", { ...e });
}
function Hb(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return P.createElement("div", { ...r }, e.children);
}
function Zb(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return P.createElement("div", { ...r });
}
function Lb(e) {
  return P.createElement("table", { ...e });
}
function zb(e) {
  return P.createElement("div", { ...e });
}
const Ss = vi(void 0);
function Qt() {
  const e = Gr(Ss);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Jb(e) {
  const { components: t } = Qt();
  return P.createElement(t.Dropdown, { ...e });
}
function jb(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...i } = e, { components: s, classNames: a, labels: { labelPrevious: u, labelNext: c } } = Qt(), l = re((f) => {
    o && (n == null || n(f));
  }, [o, n]), d = re((f) => {
    r && (t == null || t(f));
  }, [r, t]);
  return P.createElement(
    "nav",
    { ...i },
    P.createElement(
      s.PreviousMonthButton,
      { type: "button", className: a[N.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": u(r), onClick: d },
      P.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: a[N.Chevron], orientation: "left" })
    ),
    P.createElement(
      s.NextMonthButton,
      { type: "button", className: a[N.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": c(o), onClick: l },
      P.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: a[N.Chevron] })
    )
  );
}
function _b(e) {
  const { components: t } = Qt();
  return P.createElement(t.Button, { ...e });
}
function Ub(e) {
  return P.createElement("option", { ...e });
}
function $b(e) {
  const { components: t } = Qt();
  return P.createElement(t.Button, { ...e });
}
function Qb(e) {
  const { rootRef: t, ...n } = e;
  return P.createElement("div", { ...n, ref: t });
}
function Kb(e) {
  return P.createElement("select", { ...e });
}
function qb(e) {
  const { week: t, ...n } = e;
  return P.createElement("tr", { ...n });
}
function ep(e) {
  return P.createElement("th", { ...e });
}
function tp(e) {
  return P.createElement(
    "thead",
    { "aria-hidden": !0 },
    P.createElement("tr", { ...e })
  );
}
function np(e) {
  const { week: t, ...n } = e;
  return P.createElement("th", { ...n });
}
function rp(e) {
  return P.createElement("th", { ...e });
}
function op(e) {
  return P.createElement("tbody", { ...e });
}
function ip(e) {
  const { components: t } = Qt();
  return P.createElement(t.Dropdown, { ...e });
}
const ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Fb,
  CaptionLabel: Wb,
  Chevron: Bb,
  Day: Tb,
  DayButton: Vb,
  Dropdown: kb,
  DropdownNav: Xb,
  Footer: Yb,
  Month: Hb,
  MonthCaption: Zb,
  MonthGrid: Lb,
  Months: zb,
  MonthsDropdown: Jb,
  Nav: jb,
  NextMonthButton: _b,
  Option: Ub,
  PreviousMonthButton: $b,
  Root: Qb,
  Select: Kb,
  Week: qb,
  WeekNumber: np,
  WeekNumberHeader: rp,
  Weekday: ep,
  Weekdays: tp,
  Weeks: op,
  YearsDropdown: ip
}, Symbol.toStringTag, { value: "Module" }));
function $e(e, t, n = !1, r = je) {
  let { from: o, to: i } = e;
  const { differenceInCalendarDays: s, isSameDay: a } = r;
  return o && i ? (s(i, o) < 0 && ([o, i] = [i, o]), s(t, o) >= (n ? 1 : 0) && s(i, t) >= (n ? 1 : 0)) : !n && i ? a(i, t) : !n && o ? a(o, t) : !1;
}
function Ms(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function eo(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Os(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ps(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Rs(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Gs(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Qe(e, t, n = je) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: i, isAfter: s } = n;
  return r.some((a) => {
    if (typeof a == "boolean")
      return a;
    if (n.isDate(a))
      return o(e, a);
    if (Gs(a, n))
      return a.includes(e);
    if (eo(a))
      return $e(a, e, !1, n);
    if (Rs(a))
      return Array.isArray(a.dayOfWeek) ? a.dayOfWeek.includes(e.getDay()) : a.dayOfWeek === e.getDay();
    if (Ms(a)) {
      const u = i(a.before, e), c = i(a.after, e), l = u > 0, d = c < 0;
      return s(a.before, a.after) ? d && l : l || d;
    }
    return Os(a) ? i(e, a.after) > 0 : Ps(a) ? i(a.before, e) > 0 : typeof a == "function" ? a(e) : !1;
  });
}
function sp(e, t, n, r, o) {
  const { disabled: i, hidden: s, modifiers: a, showOutsideDays: u, broadcastCalendar: c, today: l } = t, { isSameDay: d, isSameMonth: f, startOfMonth: g, isBefore: v, endOfMonth: m, isAfter: b } = o, p = n && g(n), I = r && m(r), C = {
    [se.focused]: [],
    [se.outside]: [],
    [se.disabled]: [],
    [se.hidden]: [],
    [se.today]: []
  }, x = {};
  for (const h of e) {
    const { date: A, displayMonth: w } = h, E = !!(w && !f(A, w)), S = !!(p && v(A, p)), M = !!(I && b(A, I)), T = !!(i && Qe(A, i, o)), G = !!(s && Qe(A, s, o)) || S || M || // Broadcast calendar will show outside days as default
    !c && !u && E || c && u === !1 && E, Y = d(A, l ?? o.today());
    E && C.outside.push(h), T && C.disabled.push(h), G && C.hidden.push(h), Y && C.today.push(h), a && Object.keys(a).forEach((k) => {
      const H = a == null ? void 0 : a[k];
      H && Qe(A, H, o) && (x[k] ? x[k].push(h) : x[k] = [h]);
    });
  }
  return (h) => {
    const A = {
      [se.focused]: !1,
      [se.disabled]: !1,
      [se.hidden]: !1,
      [se.outside]: !1,
      [se.today]: !1
    }, w = {};
    for (const E in C) {
      const S = C[E];
      A[E] = S.some((M) => M === h);
    }
    for (const E in x)
      w[E] = x[E].some((S) => S === h);
    return {
      ...A,
      // custom modifiers should override all the previous ones
      ...w
    };
  };
}
function up(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [i]) => (n[i] ? o.push(n[i]) : t[se[i]] ? o.push(t[se[i]]) : t[De[i]] && o.push(t[De[i]]), o), [t[N.Day]]);
}
function cp(e) {
  return {
    ...ap,
    ...e
  };
}
function lp(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function to() {
  const e = {};
  for (const t in N)
    e[N[t]] = `rdp-${N[t]}`;
  for (const t in se)
    e[se[t]] = `rdp-${se[t]}`;
  for (const t in De)
    e[De[t]] = `rdp-${De[t]}`;
  for (const t in Ee)
    e[Ee[t]] = `rdp-${Ee[t]}`;
  return e;
}
function Ds(e, t, n) {
  return (n ?? new Re(t)).formatMonthYear(e);
}
const dp = Ds;
function fp(e, t, n) {
  return (n ?? new Re(t)).format(e, "d");
}
function gp(e, t = je) {
  return t.format(e, "LLLL");
}
function mp(e, t, n) {
  return (n ?? new Re(t)).format(e, "cccccc");
}
function hp(e, t = je) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function bp() {
  return "";
}
function Ns(e, t = je) {
  return t.format(e, "yyyy");
}
const pp = Ns, vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ds,
  formatDay: fp,
  formatMonthCaption: dp,
  formatMonthDropdown: gp,
  formatWeekNumber: hp,
  formatWeekNumberHeader: bp,
  formatWeekdayName: mp,
  formatYearCaption: pp,
  formatYearDropdown: Ns
}, Symbol.toStringTag, { value: "Module" }));
function yp(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...vp,
    ...e
  };
}
function Cp(e, t, n, r, o) {
  const { startOfMonth: i, startOfYear: s, endOfYear: a, eachMonthOfInterval: u, getMonth: c } = o;
  return u({
    start: s(e),
    end: a(e)
  }).map((f) => {
    const g = r.formatMonthDropdown(f, o), v = c(f), m = t && f < i(t) || n && f > i(n) || !1;
    return { value: v, label: g, disabled: m };
  });
}
function Ip(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[N.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function xp(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), i = [];
  for (let s = 0; s < 7; s++) {
    const a = e.addDays(o, s);
    i.push(a);
  }
  return i;
}
function wp(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: i, endOfYear: s, eachYearOfInterval: a, getYear: u } = r, c = i(e), l = s(t), d = a({ start: c, end: l });
  return o && d.reverse(), d.map((f) => {
    const g = n.formatYearDropdown(f, r);
    return {
      value: u(f),
      label: g,
      disabled: !1
    };
  });
}
function Fs(e, t, n, r) {
  let o = (r ?? new Re(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Ap = Fs;
function Ws(e, t, n) {
  return (n ?? new Re(t)).formatMonthYear(e);
}
const Ep = Ws;
function Sp(e, t, n, r) {
  let o = (r ?? new Re(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function Mp(e) {
  return "Choose the Month";
}
function Op() {
  return "";
}
function Pp(e) {
  return "Go to the Next Month";
}
function Rp(e) {
  return "Go to the Previous Month";
}
function Gp(e, t, n) {
  return (n ?? new Re(t)).format(e, "cccc");
}
function Dp(e, t) {
  return `Week ${e}`;
}
function Np(e) {
  return "Week Number";
}
function Fp(e) {
  return "Choose the Year";
}
const Wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Ep,
  labelDay: Ap,
  labelDayButton: Fs,
  labelGrid: Ws,
  labelGridcell: Sp,
  labelMonthDropdown: Mp,
  labelNav: Op,
  labelNext: Pp,
  labelPrevious: Rp,
  labelWeekNumber: Dp,
  labelWeekNumberHeader: Np,
  labelWeekday: Gp,
  labelYearDropdown: Fp
}, Symbol.toStringTag, { value: "Module" })), Kt = (e) => e instanceof HTMLElement ? e : null, fr = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Bp = (e) => Kt(e.querySelector("[data-animated-month]")), gr = (e) => Kt(e.querySelector("[data-animated-caption]")), mr = (e) => Kt(e.querySelector("[data-animated-weeks]")), Tp = (e) => Kt(e.querySelector("[data-animated-nav]")), Vp = (e) => Kt(e.querySelector("[data-animated-weekdays]"));
function kp(e, t, { classNames: n, months: r, focused: o, dateLib: i }) {
  const s = Me(null), a = Me(r), u = Me(!1);
  Dr(() => {
    const c = a.current;
    if (a.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || c.length === 0 || r.length !== c.length)
      return;
    const l = i.isSameMonth(r[0].date, c[0].date), d = i.isAfter(r[0].date, c[0].date), f = d ? n[Ee.caption_after_enter] : n[Ee.caption_before_enter], g = d ? n[Ee.weeks_after_enter] : n[Ee.weeks_before_enter], v = s.current, m = e.current.cloneNode(!0);
    if (m instanceof HTMLElement ? (fr(m).forEach((C) => {
      if (!(C instanceof HTMLElement))
        return;
      const x = Bp(C);
      x && C.contains(x) && C.removeChild(x);
      const h = gr(C);
      h && h.classList.remove(f);
      const A = mr(C);
      A && A.classList.remove(g);
    }), s.current = m) : s.current = null, u.current || l || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = v instanceof HTMLElement ? fr(v) : [], p = fr(e.current);
    if (p != null && p.every((I) => I instanceof HTMLElement) && b && b.every((I) => I instanceof HTMLElement)) {
      u.current = !0, e.current.style.isolation = "isolate";
      const I = Tp(e.current);
      I && (I.style.zIndex = "1"), p.forEach((C, x) => {
        const h = b[x];
        if (!h)
          return;
        C.style.position = "relative", C.style.overflow = "hidden";
        const A = gr(C);
        A && A.classList.add(f);
        const w = mr(C);
        w && w.classList.add(g);
        const E = () => {
          u.current = !1, e.current && (e.current.style.isolation = ""), I && (I.style.zIndex = ""), A && A.classList.remove(f), w && w.classList.remove(g), C.style.position = "", C.style.overflow = "", C.contains(h) && C.removeChild(h);
        };
        h.style.pointerEvents = "none", h.style.position = "absolute", h.style.overflow = "hidden", h.setAttribute("aria-hidden", "true");
        const S = Vp(h);
        S && (S.style.opacity = "0");
        const M = gr(h);
        M && (M.classList.add(d ? n[Ee.caption_before_exit] : n[Ee.caption_after_exit]), M.addEventListener("animationend", E));
        const T = mr(h);
        T && T.classList.add(d ? n[Ee.weeks_before_exit] : n[Ee.weeks_after_exit]), C.insertBefore(h, C.firstChild);
      });
    }
  });
}
function Xp(e, t, n, r) {
  const o = e[0], i = e[e.length - 1], { ISOWeek: s, fixedWeeks: a, broadcastCalendar: u } = n ?? {}, { addDays: c, differenceInCalendarDays: l, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: g, endOfMonth: v, endOfWeek: m, isAfter: b, startOfBroadcastWeek: p, startOfISOWeek: I, startOfWeek: C } = r, x = u ? p(o, r) : s ? I(o) : C(o), h = u ? f(i) : s ? g(v(i)) : m(v(i)), A = l(h, x), w = d(i, o) + 1, E = [];
  for (let T = 0; T <= A; T++) {
    const G = c(x, T);
    if (t && b(G, t))
      break;
    E.push(G);
  }
  const M = (u ? 35 : 42) * w;
  if (a && E.length < M) {
    const T = M - E.length;
    for (let G = 0; G < T; G++) {
      const Y = c(E[E.length - 1], 1);
      E.push(Y);
    }
  }
  return E;
}
function Yp(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((i, s) => i.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function Hp(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, i = [];
  for (let s = 0; s < o; s++) {
    const a = r.addMonths(e, s);
    if (t && a > t)
      break;
    i.push(a);
  }
  return i;
}
function mi(e, t, n, r) {
  const { month: o, defaultMonth: i, today: s = r.today(), numberOfMonths: a = 1 } = e;
  let u = o || i || s;
  const { differenceInCalendarMonths: c, addMonths: l, startOfMonth: d } = r;
  if (n && c(n, u) < a - 1) {
    const f = -1 * (a - 1);
    u = l(n, f);
  }
  return t && c(u, t) < 0 && (u = t), d(u);
}
function Zp(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: i, endOfISOWeek: s, endOfMonth: a, endOfWeek: u, getISOWeek: c, getWeek: l, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: g } = r, v = e.reduce((m, b) => {
    const p = n.broadcastCalendar ? d(b, r) : n.ISOWeek ? f(b) : g(b), I = n.broadcastCalendar ? i(b) : n.ISOWeek ? s(a(b)) : u(a(b)), C = t.filter((w) => w >= p && w <= I), x = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && C.length < x) {
      const w = t.filter((E) => {
        const S = x - C.length;
        return E > I && E <= o(I, S);
      });
      C.push(...w);
    }
    const h = C.reduce((w, E) => {
      const S = n.ISOWeek ? c(E) : l(E), M = w.find((G) => G.weekNumber === S), T = new Es(E, b, r);
      return M ? M.days.push(T) : w.push(new Nb(S, [T])), w;
    }, []), A = new Db(b, h);
    return m.push(A), m;
  }, []);
  return n.reverseMonths ? v.reverse() : v;
}
function Lp(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: i, startOfMonth: s, endOfMonth: a, addYears: u, endOfYear: c, newDate: l, today: d } = t, { fromYear: f, toYear: g, fromMonth: v, toMonth: m } = e;
  !n && v && (n = v), !n && f && (n = t.newDate(f, 0, 1)), !r && m && (r = m), !r && g && (r = l(g, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : f ? n = l(f, 0, 1) : !n && b && (n = o(u(e.today ?? d(), -100))), r ? r = a(r) : g ? r = l(g, 11, 31) : !r && b && (r = c(e.today ?? d())), [
    n && i(n),
    r && i(r)
  ];
}
function zp(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: i = 1 } = n, { startOfMonth: s, addMonths: a, differenceInCalendarMonths: u } = r, c = o ? i : 1, l = s(e);
  if (!t)
    return a(l, c);
  if (!(u(t, e) < i))
    return a(l, c);
}
function Jp(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: i } = n, { startOfMonth: s, addMonths: a, differenceInCalendarMonths: u } = r, c = o ? i ?? 1 : 1, l = s(e);
  if (!t)
    return a(l, -c);
  if (!(u(l, t) <= 0))
    return a(l, -c);
}
function jp(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Bn(e, t) {
  const [n, r] = Ge(e);
  return [t === void 0 ? n : t, r];
}
function _p(e, t) {
  const [n, r] = Lp(e, t), { startOfMonth: o, endOfMonth: i } = t, s = mi(e, n, r, t), [a, u] = Bn(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Nr(() => {
    const A = mi(e, n, r, t);
    u(A);
  }, [e.timeZone]);
  const c = Hp(a, r, e, t), l = Xp(c, e.endMonth ? i(e.endMonth) : void 0, e, t), d = Zp(c, l, e, t), f = jp(d), g = Yp(d), v = Jp(a, n, e, t), m = zp(a, r, e, t), { disableNavigation: b, onMonthChange: p } = e, I = (A) => f.some((w) => w.days.some((E) => E.isEqualTo(A))), C = (A) => {
    if (b)
      return;
    let w = o(A);
    n && w < o(n) && (w = o(n)), r && w > o(r) && (w = o(r)), u(w), p == null || p(w);
  };
  return {
    months: d,
    weeks: f,
    days: g,
    navStart: n,
    navEnd: r,
    previousMonth: v,
    nextMonth: m,
    goToMonth: C,
    goToDay: (A) => {
      I(A) || C(A.date);
    }
  };
}
var We;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(We || (We = {}));
function hi(e) {
  return !e[se.disabled] && !e[se.hidden] && !e[se.outside];
}
function Up(e, t, n, r) {
  let o, i = -1;
  for (const s of e) {
    const a = t(s);
    hi(a) && (a[se.focused] && i < We.FocusedModifier ? (o = s, i = We.FocusedModifier) : r != null && r.isEqualTo(s) && i < We.LastFocused ? (o = s, i = We.LastFocused) : n(s.date) && i < We.Selected ? (o = s, i = We.Selected) : a[se.today] && i < We.Today && (o = s, i = We.Today));
  }
  return o || (o = e.find((s) => hi(t(s)))), o;
}
function $p(e, t, n, r, o, i, s) {
  const { ISOWeek: a, broadcastCalendar: u } = i, { addDays: c, addMonths: l, addWeeks: d, addYears: f, endOfBroadcastWeek: g, endOfISOWeek: v, endOfWeek: m, max: b, min: p, startOfBroadcastWeek: I, startOfISOWeek: C, startOfWeek: x } = s;
  let A = {
    day: c,
    week: d,
    month: l,
    year: f,
    startOfWeek: (w) => u ? I(w, s) : a ? C(w) : x(w),
    endOfWeek: (w) => u ? g(w) : a ? v(w) : m(w)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? A = b([r, A]) : t === "after" && o && (A = p([o, A])), A;
}
function Bs(e, t, n, r, o, i, s, a = 0) {
  if (a > 365)
    return;
  const u = $p(e, t, n.date, r, o, i, s), c = !!(i.disabled && Qe(u, i.disabled, s)), l = !!(i.hidden && Qe(u, i.hidden, s)), d = u, f = new Es(u, d, s);
  return !c && !l ? f : Bs(e, t, f, r, o, i, s, a + 1);
}
function Qp(e, t, n, r, o) {
  const { autoFocus: i } = e, [s, a] = Ge(), u = Up(t.days, n, r || (() => !1), s), [c, l] = Ge(i ? u : void 0);
  return {
    isFocusTarget: (m) => !!(u != null && u.isEqualTo(m)),
    setFocused: l,
    focused: c,
    blur: () => {
      a(c), l(void 0);
    },
    moveFocus: (m, b) => {
      if (!c)
        return;
      const p = Bs(m, b, c, t.navStart, t.navEnd, e, o);
      p && (e.disableNavigation && !t.days.some((C) => C.isEqualTo(p)) || (t.goToDay(p), l(p)));
    }
  };
}
function Kp(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [i, s] = Bn(n, o ? n : void 0), a = o ? n : i, { isSameDay: u } = t, c = (g) => (a == null ? void 0 : a.some((v) => u(v, g))) ?? !1, { min: l, max: d } = e;
  return {
    selected: a,
    select: (g, v, m) => {
      let b = [...a ?? []];
      if (c(g)) {
        if ((a == null ? void 0 : a.length) === l || r && (a == null ? void 0 : a.length) === 1)
          return;
        b = a == null ? void 0 : a.filter((p) => !u(p, g));
      } else
        (a == null ? void 0 : a.length) === d ? b = [g] : b = [...b, g];
      return o || s(b), o == null || o(b, g, v, m), b;
    },
    isSelected: c
  };
}
function qp(e, t, n = 0, r = 0, o = !1, i = je) {
  const { from: s, to: a } = t || {}, { isSameDay: u, isAfter: c, isBefore: l } = i;
  let d;
  if (!s && !a)
    d = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !a)
    u(s, e) ? n === 0 ? d = { from: s, to: e } : o ? d = { from: s, to: void 0 } : d = void 0 : l(e, s) ? d = { from: e, to: s } : d = { from: s, to: e };
  else if (s && a)
    if (u(s, e) && u(a, e))
      o ? d = { from: s, to: a } : d = void 0;
    else if (u(s, e))
      d = { from: s, to: n > 0 ? void 0 : e };
    else if (u(a, e))
      d = { from: e, to: n > 0 ? void 0 : e };
    else if (l(e, s))
      d = { from: e, to: a };
    else if (c(e, s))
      d = { from: s, to: e };
    else if (c(e, a))
      d = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (d != null && d.from && (d != null && d.to)) {
    const f = i.differenceInCalendarDays(d.to, d.from);
    r > 0 && f > r ? d = { from: e, to: void 0 } : n > 1 && f < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function ev(e, t, n = je) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const i = n.differenceInCalendarDays(e.to, e.from), s = Math.min(i, 6);
  for (let a = 0; a <= s; a++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function bi(e, t, n = je) {
  return $e(e, t.from, !1, n) || $e(e, t.to, !1, n) || $e(t, e.from, !1, n) || $e(t, e.to, !1, n);
}
function tv(e, t, n = je) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((a) => typeof a != "function").some((a) => typeof a == "boolean" ? a : n.isDate(a) ? $e(e, a, !1, n) : Gs(a, n) ? a.some((u) => $e(e, u, !1, n)) : eo(a) ? a.from && a.to ? bi(e, { from: a.from, to: a.to }, n) : !1 : Rs(a) ? ev(e, a.dayOfWeek, n) : Ms(a) ? n.isAfter(a.before, a.after) ? bi(e, {
    from: n.addDays(a.after, 1),
    to: n.addDays(a.before, -1)
  }, n) : Qe(e.from, a, n) || Qe(e.to, a, n) : Os(a) || Ps(a) ? Qe(e.from, a, n) || Qe(e.to, a, n) : !1))
    return !0;
  const s = r.filter((a) => typeof a == "function");
  if (s.length) {
    let a = e.from;
    const u = n.differenceInCalendarDays(e.to, e.from);
    for (let c = 0; c <= u; c++) {
      if (s.some((l) => l(a)))
        return !0;
      a = n.addDays(a, 1);
    }
  }
  return !1;
}
function nv(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: i, onSelect: s } = e, [a, u] = Bn(o, s ? o : void 0), c = s ? o : a;
  return {
    selected: c,
    select: (f, g, v) => {
      const { min: m, max: b } = e, p = f ? qp(f, c, m, b, i, t) : void 0;
      return r && n && (p != null && p.from) && p.to && tv({ from: p.from, to: p.to }, n, t) && (p.from = f, p.to = void 0), s || u(p), s == null || s(p, f, g, v), p;
    },
    isSelected: (f) => c && $e(c, f, !1, t)
  };
}
function rv(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [i, s] = Bn(n, o ? n : void 0), a = o ? n : i, { isSameDay: u } = t;
  return {
    selected: a,
    select: (d, f, g) => {
      let v = d;
      return !r && a && a && u(d, a) && (v = void 0), o || s(v), o == null || o(v, d, f, g), v;
    },
    isSelected: (d) => a ? u(a, d) : !1
  };
}
function ov(e, t) {
  const n = rv(e, t), r = Kp(e, t), o = nv(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function iv(e) {
  var oo;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new be(t.today, t.timeZone)), t.month && (t.month = new be(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new be(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new be(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new be(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new be(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (oo = t.selected) == null ? void 0 : oo.map((z) => new be(z, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new be(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new be(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: i, locale: s, classNames: a } = Ue(() => {
    const z = { ...qr, ...t.locale };
    return {
      dateLib: new Re({
        locale: z,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: cp(t.components),
      formatters: yp(t.formatters),
      labels: { ...Wp, ...t.labels },
      locale: z,
      classNames: { ...to(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]), { captionLayout: u, mode: c, navLayout: l, numberOfMonths: d = 1, onDayBlur: f, onDayClick: g, onDayFocus: v, onDayKeyDown: m, onDayMouseEnter: b, onDayMouseLeave: p, onNextClick: I, onPrevClick: C, showWeekNumber: x, styles: h } = t, { formatCaption: A, formatDay: w, formatMonthDropdown: E, formatWeekNumber: S, formatWeekNumberHeader: M, formatWeekdayName: T, formatYearDropdown: G } = r, Y = _p(t, i), { days: k, months: H, navStart: V, navEnd: j, previousMonth: R, nextMonth: L, goToMonth: _ } = Y, pe = sp(k, t, V, j, i), { isSelected: ee, select: ae, selected: fe } = ov(t, i) ?? {}, { blur: ve, focused: ce, isFocusTarget: ye, moveFocus: ge, setFocused: Ce } = Qp(t, Y, pe, ee ?? (() => !1), i), { labelDayButton: nt, labelGridcell: _e, labelGrid: D, labelMonthDropdown: xe, labelNav: we, labelPrevious: rt, labelNext: Tn, labelWeekday: Vn, labelWeekNumber: kn, labelWeekNumberHeader: bt, labelYearDropdown: ks } = o, Xs = Ue(() => xp(i, t.ISOWeek), [i, t.ISOWeek]), no = c !== void 0 || g !== void 0, Xn = re(() => {
    R && (_(R), C == null || C(R));
  }, [R, _, C]), Yn = re(() => {
    L && (_(L), I == null || I(L));
  }, [_, L, I]), Ys = re((z, ie) => (X) => {
    X.preventDefault(), X.stopPropagation(), Ce(z), ae == null || ae(z.date, ie, X), g == null || g(z.date, ie, X);
  }, [ae, g, Ce]), Hs = re((z, ie) => (X) => {
    Ce(z), v == null || v(z.date, ie, X);
  }, [v, Ce]), Zs = re((z, ie) => (X) => {
    ve(), f == null || f(z.date, ie, X);
  }, [ve, f]), Ls = re((z, ie) => (X) => {
    const oe = {
      ArrowLeft: [
        X.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        X.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [X.shiftKey ? "year" : "week", "after"],
      ArrowUp: [X.shiftKey ? "year" : "week", "before"],
      PageUp: [X.shiftKey ? "year" : "month", "before"],
      PageDown: [X.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (oe[X.key]) {
      X.preventDefault(), X.stopPropagation();
      const [Ae, U] = oe[X.key];
      ge(Ae, U);
    }
    m == null || m(z.date, ie, X);
  }, [ge, m, t.dir]), zs = re((z, ie) => (X) => {
    b == null || b(z.date, ie, X);
  }, [b]), Js = re((z, ie) => (X) => {
    p == null || p(z.date, ie, X);
  }, [p]), js = re((z) => (ie) => {
    const X = Number(ie.target.value), oe = i.setMonth(i.startOfMonth(z), X);
    _(oe);
  }, [i, _]), _s = re((z) => (ie) => {
    const X = Number(ie.target.value), oe = i.setYear(i.startOfMonth(z), X);
    _(oe);
  }, [i, _]), { className: Us, style: $s } = Ue(() => ({
    className: [a[N.Root], t.className].filter(Boolean).join(" "),
    style: { ...h == null ? void 0 : h[N.Root], ...t.style }
  }), [a, t.className, t.style, h]), Qs = lp(t), ro = Me(null);
  kp(ro, !!t.animate, {
    classNames: a,
    months: H,
    focused: ce,
    dateLib: i
  });
  const Ks = {
    dayPickerProps: t,
    selected: fe,
    select: ae,
    isSelected: ee,
    months: H,
    nextMonth: L,
    previousMonth: R,
    goToMonth: _,
    getModifiers: pe,
    components: n,
    classNames: a,
    styles: h,
    labels: o,
    formatters: r
  };
  return P.createElement(
    Ss.Provider,
    { value: Ks },
    P.createElement(
      n.Root,
      { rootRef: t.animate ? ro : void 0, className: Us, style: $s, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Qs },
      P.createElement(
        n.Months,
        { className: a[N.Months], style: h == null ? void 0 : h[N.Months] },
        !t.hideNavigation && !l && P.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: a[N.Nav], style: h == null ? void 0 : h[N.Nav], "aria-label": we(), onPreviousClick: Xn, onNextClick: Yn, previousMonth: R, nextMonth: L }),
        H.map((z, ie) => P.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: a[N.Month],
            style: h == null ? void 0 : h[N.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ie,
            displayIndex: ie,
            calendarMonth: z
          },
          l === "around" && !t.hideNavigation && ie === 0 && P.createElement(
            n.PreviousMonthButton,
            { type: "button", className: a[N.PreviousMonthButton], tabIndex: R ? void 0 : -1, "aria-disabled": R ? void 0 : !0, "aria-label": rt(R), onClick: Xn, "data-animated-button": t.animate ? "true" : void 0 },
            P.createElement(n.Chevron, { disabled: R ? void 0 : !0, className: a[N.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          P.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: a[N.MonthCaption], style: h == null ? void 0 : h[N.MonthCaption], calendarMonth: z, displayIndex: ie }, u != null && u.startsWith("dropdown") ? P.createElement(
            n.DropdownNav,
            { className: a[N.Dropdowns], style: h == null ? void 0 : h[N.Dropdowns] },
            (() => {
              const X = u === "dropdown" || u === "dropdown-months" ? P.createElement(n.MonthsDropdown, { key: "month", className: a[N.MonthsDropdown], "aria-label": xe(), classNames: a, components: n, disabled: !!t.disableNavigation, onChange: js(z.date), options: Cp(z.date, V, j, r, i), style: h == null ? void 0 : h[N.Dropdown], value: i.getMonth(z.date) }) : P.createElement("span", { key: "month" }, E(z.date, i)), oe = u === "dropdown" || u === "dropdown-years" ? P.createElement(n.YearsDropdown, { key: "year", className: a[N.YearsDropdown], "aria-label": ks(i.options), classNames: a, components: n, disabled: !!t.disableNavigation, onChange: _s(z.date), options: wp(V, j, r, i, !!t.reverseYears), style: h == null ? void 0 : h[N.Dropdown], value: i.getYear(z.date) }) : P.createElement("span", { key: "year" }, G(z.date, i));
              return i.getMonthYearOrder() === "year-first" ? [oe, X] : [X, oe];
            })(),
            P.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, A(z.date, i.options, i))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            P.createElement(n.CaptionLabel, { className: a[N.CaptionLabel], role: "status", "aria-live": "polite" }, A(z.date, i.options, i))
          )),
          l === "around" && !t.hideNavigation && ie === d - 1 && P.createElement(
            n.NextMonthButton,
            { type: "button", className: a[N.NextMonthButton], tabIndex: L ? void 0 : -1, "aria-disabled": L ? void 0 : !0, "aria-label": Tn(L), onClick: Yn, "data-animated-button": t.animate ? "true" : void 0 },
            P.createElement(n.Chevron, { disabled: L ? void 0 : !0, className: a[N.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ie === d - 1 && l === "after" && !t.hideNavigation && P.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: a[N.Nav], style: h == null ? void 0 : h[N.Nav], "aria-label": we(), onPreviousClick: Xn, onNextClick: Yn, previousMonth: R, nextMonth: L }),
          P.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": c === "multiple" || c === "range", "aria-label": D(z.date, i.options, i) || void 0, className: a[N.MonthGrid], style: h == null ? void 0 : h[N.MonthGrid] },
            !t.hideWeekdays && P.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: a[N.Weekdays], style: h == null ? void 0 : h[N.Weekdays] },
              x && P.createElement(n.WeekNumberHeader, { "aria-label": bt(i.options), className: a[N.WeekNumberHeader], style: h == null ? void 0 : h[N.WeekNumberHeader], scope: "col" }, M()),
              Xs.map((X) => P.createElement(n.Weekday, { "aria-label": Vn(X, i.options, i), className: a[N.Weekday], key: String(X), style: h == null ? void 0 : h[N.Weekday], scope: "col" }, T(X, i.options, i)))
            ),
            P.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: a[N.Weeks], style: h == null ? void 0 : h[N.Weeks] }, z.weeks.map((X) => P.createElement(
              n.Week,
              { className: a[N.Week], key: X.weekNumber, style: h == null ? void 0 : h[N.Week], week: X },
              x && // biome-ignore lint/a11y/useSemanticElements: react component
              P.createElement(n.WeekNumber, { week: X, style: h == null ? void 0 : h[N.WeekNumber], "aria-label": kn(X.weekNumber, {
                locale: s
              }), className: a[N.WeekNumber], scope: "row", role: "rowheader" }, S(X.weekNumber, i)),
              X.days.map((oe) => {
                const { date: Ae } = oe, U = pe(oe);
                if (U[se.focused] = !U.hidden && !!(ce != null && ce.isEqualTo(oe)), U[De.selected] = (ee == null ? void 0 : ee(Ae)) || U.selected, eo(fe)) {
                  const { from: Hn, to: Zn } = fe;
                  U[De.range_start] = !!(Hn && Zn && i.isSameDay(Ae, Hn)), U[De.range_end] = !!(Hn && Zn && i.isSameDay(Ae, Zn)), U[De.range_middle] = $e(fe, Ae, !0, i);
                }
                const qs = Ip(U, h, t.modifiersStyles), eu = up(U, a, t.modifiersClassNames), tu = !no && !U.hidden ? _e(Ae, U, i.options, i) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  P.createElement(n.Day, { key: `${i.format(Ae, "yyyy-MM-dd")}_${i.format(oe.displayMonth, "yyyy-MM")}`, day: oe, modifiers: U, className: eu.join(" "), style: qs, role: "gridcell", "aria-selected": U.selected || void 0, "aria-label": tu, "data-day": i.format(Ae, "yyyy-MM-dd"), "data-month": oe.outside ? i.format(Ae, "yyyy-MM") : void 0, "data-selected": U.selected || void 0, "data-disabled": U.disabled || void 0, "data-hidden": U.hidden || void 0, "data-outside": oe.outside || void 0, "data-focused": U.focused || void 0, "data-today": U.today || void 0 }, !U.hidden && no ? P.createElement(n.DayButton, { className: a[N.DayButton], style: h == null ? void 0 : h[N.DayButton], type: "button", day: oe, modifiers: U, disabled: U.disabled || void 0, tabIndex: ye(oe) ? 0 : -1, "aria-label": nt(Ae, U, i.options, i), onClick: Ys(oe, U), onBlur: Zs(oe, U), onFocus: Hs(oe, U), onKeyDown: Ls(oe, U), onMouseEnter: zs(oe, U), onMouseLeave: Js(oe, U) }, w(Ae, i.options, i)) : !U.hidden && w(oe.date, i.options, i))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      P.createElement(n.Footer, { className: a[N.Footer], style: h == null ? void 0 : h[N.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function av({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "ghost",
  formatters: i,
  components: s,
  ...a
}) {
  const u = to();
  return /* @__PURE__ */ O(
    iv,
    {
      showOutsideDays: n,
      className: Z(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (c) => c.toLocaleString("default", { month: "short" }),
        ...i
      },
      classNames: {
        root: Z("w-fit", u.root),
        months: Z(
          "relative flex flex-col gap-4 md:flex-row",
          u.months
        ),
        month: Z("flex w-full flex-col gap-4", u.month),
        nav: Z(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          u.nav
        ),
        button_previous: Z(
          br({ variant: o, size: "icon" }),
          "h-8 w-8 select-none p-0 aria-disabled:opacity-50",
          u.button_previous
        ),
        button_next: Z(
          br({ variant: o, size: "icon" }),
          "h-8 w-8 select-none p-0 aria-disabled:opacity-50",
          u.button_next
        ),
        month_caption: Z(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          u.month_caption
        ),
        dropdowns: Z(
          "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
          u.dropdowns
        ),
        dropdown_root: Z(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          u.dropdown_root
        ),
        dropdown: Z(
          "bg-popover absolute inset-0 opacity-0",
          u.dropdown
        ),
        caption_label: Z(
          "select-none font-medium",
          r === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          u.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: Z("flex", u.weekdays),
        weekday: Z(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          u.weekday
        ),
        week: Z("mt-2 flex w-full", u.week),
        week_number_header: Z(
          "w-[--cell-size] select-none",
          u.week_number_header
        ),
        week_number: Z(
          "text-muted-foreground select-none text-[0.8rem]",
          u.week_number
        ),
        day: Z(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          u.day
        ),
        range_start: Z(
          "bg-accent rounded-l-md",
          u.range_start
        ),
        range_middle: Z("rounded-none", u.range_middle),
        range_end: Z("bg-accent rounded-r-md", u.range_end),
        today: Z(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          u.today
        ),
        outside: Z(
          "text-muted-foreground aria-selected:text-muted-foreground",
          u.outside
        ),
        disabled: Z(
          "text-muted-foreground opacity-50",
          u.disabled
        ),
        hidden: Z("invisible", u.hidden),
        ...t
      },
      components: {
        Root: ({ className: c, rootRef: l, ...d }) => /* @__PURE__ */ O(
          "div",
          {
            "data-slot": "calendar",
            ref: l,
            className: Z(c),
            ...d
          }
        ),
        Chevron: ({ className: c, orientation: l, ...d }) => l === "left" ? /* @__PURE__ */ O(lu, { className: Z("size-4", c), ...d }) : l === "right" ? /* @__PURE__ */ O(
          du,
          {
            className: Z("size-4", c),
            ...d
          }
        ) : /* @__PURE__ */ O(fu, { className: Z("size-4", c), ...d }),
        DayButton: sv,
        WeekNumber: ({ children: c, ...l }) => /* @__PURE__ */ O("td", { ...l, children: /* @__PURE__ */ O("div", { className: "flex size-[--cell-size] items-center justify-center text-center", children: c }) }),
        ...s
      },
      ...a
    }
  );
}
function sv({
  className: e,
  day: t,
  modifiers: n,
  style: r,
  type: o,
  ...i
}) {
  const s = to(), a = y.useRef(null);
  return y.useEffect(() => {
    var u;
    n.focused && ((u = a.current) == null || u.focus());
  }, [n.focused]), /* @__PURE__ */ O(
    xi,
    {
      ref: a,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: Z(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        s.day,
        e
      ),
      ...i
    }
  );
}
var uv = "Label", Ts = y.forwardRef((e, t) => /* @__PURE__ */ O(
  Je.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ts.displayName = uv;
var Vs = Ts;
const cv = Ii(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), lv = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O(
  Vs,
  {
    ref: n,
    className: Z(cv(), e),
    ...t
  }
));
lv.displayName = Vs.displayName;
export {
  xi as B,
  av as C,
  og as D,
  Ei as I,
  lv as L,
  rh as P,
  rg as S,
  oh as a,
  br as b,
  cs as c,
  pv as d,
  sv as e
};
