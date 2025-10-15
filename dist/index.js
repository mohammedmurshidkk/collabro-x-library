import { jsx as B, jsxs as $e, Fragment as or } from "react/jsx-runtime";
import * as C from "react";
import V, { useState as Be, useCallback as he, forwardRef as Zi, useContext as Ur, useLayoutEffect as Qr, useRef as Ne, useMemo as rt, createContext as zi, Component as Zc, Fragment as Rr, useEffect as Kr } from "react";
import * as Ji from "react-dom";
import zc, { createPortal as Jc } from "react-dom";
import { ChevronDown as _c, CalendarIcon as jc, ChevronLeftIcon as $c, ChevronRightIcon as Uc, ChevronDownIcon as Qc } from "lucide-react";
function Po(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function _i(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Po(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Po(e[o], null);
        }
      };
  };
}
function bt(...e) {
  return C.useCallback(_i(...e), e);
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  const t = /* @__PURE__ */ qc(e), n = C.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = C.Children.toArray(i), c = s.find(tu);
    if (c) {
      const u = c.props.children, l = s.map((d) => d === c ? C.Children.count(u) > 1 ? C.Children.only(null) : C.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ B(t, { ...a, ref: o, children: C.isValidElement(u) ? C.cloneElement(u, void 0, l) : null });
    }
    return /* @__PURE__ */ B(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Kc = /* @__PURE__ */ qr("Slot");
// @__NO_SIDE_EFFECTS__
function qc(e) {
  const t = C.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (C.isValidElement(o)) {
      const a = ru(o), s = nu(i, o.props);
      return o.type !== C.Fragment && (s.ref = r ? _i(r, a) : a), C.cloneElement(o, s);
    }
    return C.Children.count(o) > 1 ? C.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var eu = Symbol("radix.slottable");
function tu(e) {
  return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === eu;
}
function nu(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const c = i(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ru(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ji(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ji(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function $i() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ji(e)) && (r && (r += " "), r += t);
  return r;
}
const Do = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ro = $i, Ui = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Ro(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((u) => {
    const l = n == null ? void 0 : n[u], d = i == null ? void 0 : i[u];
    if (l === null) return null;
    const g = Do(l) || Do(d);
    return o[u][g];
  }), s = n && Object.entries(n).reduce((u, l) => {
    let [d, g] = l;
    return g === void 0 || (u[d] = g), u;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, l) => {
    let { class: d, className: g, ...p } = l;
    return Object.entries(p).every((v) => {
      let [f, m] = v;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...s
      }[f]) : {
        ...i,
        ...s
      }[f] === m;
    }) ? [
      ...u,
      d,
      g
    ] : u;
  }, []);
  return Ro(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, eo = "-", ou = (e) => {
  const t = au(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(eo);
      return s[0] === "" && s.length !== 1 && s.shift(), Qi(s, t) || iu(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = n[a] || [];
      return s && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, Qi = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Qi(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(eo);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, Go = /^\[(.+)\]$/, iu = (e) => {
  if (Go.test(e)) {
    const t = Go.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, au = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Gr(n[o], r, o, t);
  return r;
}, Gr = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : ko(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (su(o)) {
        Gr(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Gr(a, ko(t, i), n, r);
    });
  });
}, ko = (e, t) => {
  let n = e;
  return t.split(eo).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, su = (e) => e.isThemeGetter, cu = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}, kr = "!", Nr = ":", uu = Nr.length, lu = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, c = 0, u;
    for (let v = 0; v < o.length; v++) {
      let f = o[v];
      if (a === 0 && s === 0) {
        if (f === Nr) {
          i.push(o.slice(c, v)), c = v + uu;
          continue;
        }
        if (f === "/") {
          u = v;
          continue;
        }
      }
      f === "[" ? a++ : f === "]" ? a-- : f === "(" ? s++ : f === ")" && s--;
    }
    const l = i.length === 0 ? o : o.substring(c), d = du(l), g = d !== l, p = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: g,
      baseClassName: d,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const o = t + Nr, i = r;
    r = (a) => a.startsWith(o) ? i(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, du = (e) => e.endsWith(kr) ? e.substring(0, e.length - 1) : e.startsWith(kr) ? e.substring(1) : e, fu = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let i = [];
    return r.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...i.sort(), a), i = []) : i.push(a);
    }), o.push(...i.sort()), o;
  };
}, mu = (e) => ({
  cache: cu(e.cacheSize),
  parseClassName: lu(e),
  sortModifiers: fu(e),
  ...ou(e)
}), gu = /\s+/, hu = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], s = e.trim().split(gu);
  let c = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const l = s[u], {
      isExternal: d,
      modifiers: g,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: f
    } = n(l);
    if (d) {
      c = l + (c.length > 0 ? " " + c : c);
      continue;
    }
    let m = !!f, b = r(m ? v.substring(0, f) : v);
    if (!b) {
      if (!m) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (b = r(v), !b) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      m = !1;
    }
    const I = i(g).join(":"), y = p ? I + kr : I, x = y + b;
    if (a.includes(x))
      continue;
    a.push(x);
    const h = o(b, m);
    for (let E = 0; E < h.length; ++E) {
      const A = h[E];
      a.push(y + A);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function pu() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ki(t)) && (r && (r += " "), r += n);
  return r;
}
const Ki = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ki(e[r])) && (n && (n += " "), n += t);
  return n;
};
function bu(e, ...t) {
  let n, r, o, i = a;
  function a(c) {
    const u = t.reduce((l, d) => d(l), e());
    return n = mu(u), r = n.cache.get, o = n.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = r(c);
    if (u)
      return u;
    const l = hu(c, n);
    return o(c, l), l;
  }
  return function() {
    return i(pu.apply(null, arguments));
  };
}
const Ae = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, qi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ea = /^\((?:(\w[\w-]*):)?(.+)\)$/i, vu = /^\d+\/\d+$/, yu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Cu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Iu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, xu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, wu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Mt = (e) => vu.test(e), ee = (e) => !!e && !Number.isNaN(Number(e)), lt = (e) => !!e && Number.isInteger(Number(e)), ir = (e) => e.endsWith("%") && ee(e.slice(0, -1)), nt = (e) => yu.test(e), Au = () => !0, Su = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Cu.test(e) && !Iu.test(e)
), ta = () => !1, Eu = (e) => xu.test(e), Mu = (e) => wu.test(e), Ou = (e) => !Y(e) && !X(e), Pu = (e) => Xt(e, oa, ta), Y = (e) => qi.test(e), xt = (e) => Xt(e, ia, Su), ar = (e) => Xt(e, Nu, ee), No = (e) => Xt(e, na, ta), Du = (e) => Xt(e, ra, Mu), hn = (e) => Xt(e, aa, Eu), X = (e) => ea.test(e), jt = (e) => Ht(e, ia), Ru = (e) => Ht(e, Fu), Fo = (e) => Ht(e, na), Gu = (e) => Ht(e, oa), ku = (e) => Ht(e, ra), pn = (e) => Ht(e, aa, !0), Xt = (e, t, n) => {
  const r = qi.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ht = (e, t, n = !1) => {
  const r = ea.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, na = (e) => e === "position" || e === "percentage", ra = (e) => e === "image" || e === "url", oa = (e) => e === "length" || e === "size" || e === "bg-size", ia = (e) => e === "length", Nu = (e) => e === "number", Fu = (e) => e === "family-name", aa = (e) => e === "shadow", Tu = () => {
  const e = Ae("color"), t = Ae("font"), n = Ae("text"), r = Ae("font-weight"), o = Ae("tracking"), i = Ae("leading"), a = Ae("breakpoint"), s = Ae("container"), c = Ae("spacing"), u = Ae("radius"), l = Ae("shadow"), d = Ae("inset-shadow"), g = Ae("text-shadow"), p = Ae("drop-shadow"), v = Ae("blur"), f = Ae("perspective"), m = Ae("aspect"), b = Ae("ease"), I = Ae("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], h = () => [...x(), X, Y], E = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], S = () => [X, Y, c], O = () => [Mt, "full", "auto", ...S()], D = () => [lt, "none", "subgrid", X, Y], N = () => ["auto", {
    span: ["full", lt, X, Y]
  }, lt, X, Y], F = () => [lt, "auto", X, Y], L = () => ["auto", "min", "max", "fr", X, Y], R = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...S()], G = () => [Mt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], w = () => [e, X, Y], k = () => [...x(), Fo, No, {
    position: [X, Y]
  }], T = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", Gu, Pu, {
    size: [X, Y]
  }], Z = () => [ir, jt, xt], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    X,
    Y
  ], $ = () => ["", ee, jt, xt], re = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [ee, ir, Fo, No], me = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    X,
    Y
  ], ue = () => ["none", ee, X, Y], ie = () => ["none", ee, X, Y], pe = () => [ee, X, Y], W = () => [Mt, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [nt],
      breakpoint: [nt],
      color: [Au],
      container: [nt],
      "drop-shadow": [nt],
      ease: ["in", "out", "in-out"],
      font: [Ou],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [nt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [nt],
      shadow: [nt],
      spacing: ["px", ee],
      text: [nt],
      "text-shadow": [nt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Mt, Y, X, m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ee, Y, X, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: h()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [lt, "auto", X, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Mt, "full", "auto", s, ...S()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ee, Mt, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ee, X, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ee, X, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [lt, "first", "last", "none", X, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: N()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: N()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": L()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": L()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...R(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...R()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": R()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": S()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": S()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: G()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...G()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...G()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, jt, xt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, X, ar]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ir, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ru, Y, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, X, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ee, "none", X, ar]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X, Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", X, Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: w()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: w()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ee, "from-font", "auto", X, xt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: w()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ee, "auto", X, Y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", X, Y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: k()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: T()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, lt, X, Y],
          radial: ["", X, Y],
          conic: [lt, X, Y]
        }, ku, Du]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: w()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: w()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: H()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": H()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": H()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": H()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": H()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": H()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": H()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": H()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": H()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": H()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": H()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": H()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": H()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": H()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": H()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": $()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...re(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...re(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: w()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": w()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": w()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": w()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": w()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": w()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": w()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": w()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": w()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: w()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...re(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ee, X, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ee, jt, xt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: w()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          l,
          pn,
          hn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: w()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, pn, hn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": w()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: w()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ee, xt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": w()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": w()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, pn, hn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": w()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ee, X, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ee]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": w()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": w()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": w()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": w()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": w()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": w()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": w()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": w()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ee]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": w()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: k()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: T()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: z()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", X, Y]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          X,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: me()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ee, X, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ee, X, Y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          pn,
          hn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": w()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ee, X, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ee, X, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ee, X, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ee, X, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ee, X, Y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          X,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": me()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ee, X, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ee, X, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ee, X, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ee, X, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ee, X, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ee, X, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ee, X, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ee, X, Y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, Y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ee, "initial", X, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, X, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ee, X, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", I, X, Y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [f, X, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": h()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ue()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ue()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ue()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ue()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: h()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: W()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": W()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": W()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": W()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: w()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: w()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, Y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", X, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...w()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ee, jt, xt, ar]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...w()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Wu = /* @__PURE__ */ bu(Tu);
function q(...e) {
  return Wu($i(e));
}
const sr = ({ className: e = "" }) => /* @__PURE__ */ $e(
  "svg",
  {
    className: `animate-spin h-4 w-4 text-current ${e}`,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ B(
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
      /* @__PURE__ */ B(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
), Fr = Ui(
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
), sa = C.memo(
  C.forwardRef(
    ({
      className: e,
      variant: t,
      size: n,
      asChild: r = !1,
      loading: o = !1,
      loaderPosition: i = "right",
      leftIcon: a,
      rightIcon: s,
      children: c,
      ...u
    }, l) => {
      const d = r ? Kc : "button", g = !!a || !!s;
      let p;
      if (o)
        if (r)
          p = /* @__PURE__ */ B(sr, {});
        else {
          const v = /* @__PURE__ */ $e(or, { children: [
            i === "left" && /* @__PURE__ */ B(sr, { className: "mr-1.5" }),
            c,
            i === "right" && /* @__PURE__ */ B(sr, { className: "ml-1.5" })
          ] });
          p = /* @__PURE__ */ $e(or, { children: [
            a,
            /* @__PURE__ */ B(
              "span",
              {
                className: q("flex items-center", { "mx-auto": g }),
                children: v
              }
            ),
            s
          ] });
        }
      else
        p = /* @__PURE__ */ $e(or, { children: [
          a,
          /* @__PURE__ */ B("span", { className: q("flex items-center", { "mx-auto": g }), children: c }),
          s
        ] });
      return /* @__PURE__ */ B(
        d,
        {
          className: q(Fr({ variant: t, size: n, className: e }), {
            "justify-between": g
          }),
          ref: l,
          disabled: o || u.disabled,
          ...u,
          children: p
        }
      );
    }
  )
);
sa.displayName = "Button";
const ca = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg"
}, ua = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg"
}, Bu = {
  sm: "h-10 text-sm",
  md: "h-12 text-base",
  lg: "h-14 text-lg"
}, la = C.forwardRef(
  ({
    className: e,
    type: t,
    label: n,
    error: r,
    errorMessage: o,
    size: i = "md",
    placeholder: a,
    onFocus: s,
    onBlur: c,
    onChange: u,
    value: l,
    defaultValue: d,
    ...g
  }, p) => {
    const v = C.useId(), [f, m] = C.useState(!1), b = l !== void 0, [I, y] = C.useState(
      d ?? l ?? ""
    ), h = f || (b ? l !== "" : I !== "");
    return /* @__PURE__ */ $e("div", { className: "w-full", children: [
      /* @__PURE__ */ $e("div", { className: "relative group", "data-floating": h, children: [
        /* @__PURE__ */ B(
          "input",
          {
            id: v,
            type: t,
            ref: p,
            onFocus: (O) => {
              m(!0), s == null || s(O);
            },
            onBlur: (O) => {
              m(!1), c == null || c(O);
            },
            onChange: (O) => {
              b || y(O.target.value), u == null || u(O);
            },
            value: l,
            defaultValue: d,
            placeholder: h ? a : "",
            className: q(
              "peer flex w-full rounded-md border bg-white px-3 py-2 transition-colors file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none disabled:cursor-not-allowed",
              "placeholder:text-[#C3C7C8] placeholder:font-light",
              // Base styles
              "border-border text-gray-900",
              // Hover styles
              "hover:border-focus",
              // Focus styles
              "focus:border-focus",
              Bu[i],
              // Error styles
              r && "border-destructive focus:border-destructive",
              // Disabled styles
              "disabled:border-disabled-border disabled:bg-disabled-background disabled:text-disabled",
              e
            ),
            ...g
          }
        ),
        /* @__PURE__ */ B(
          "label",
          {
            htmlFor: v,
            className: q(
              "absolute left-3 loader z-10 origin-[0] transform px-1 duration-300",
              // Base placeholder styles
              "top-1/2 -translate-y-1/2",
              h ? ca[i] : ua[i],
              // Float label up when data-floating is true
              "group-data-[floating=true]:top-0 group-data-[floating=true]:-translate-y-1/2 group-data-[floating=true]:scale-75",
              // Background color only when floating
              h && (g.disabled ? "bg-disabled-background" : "bg-white"),
              // Color states
              g.disabled ? "text-disabled" : r ? "text-destructive" : h ? f ? "text-focus" : "text-label" : "text-placeholder"
            ),
            children: n
          }
        )
      ] }),
      r && o && /* @__PURE__ */ B("p", { className: "mt-1 text-sm text-destructive", children: o })
    ] });
  }
);
la.displayName = "Input";
function St(e) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, St(e);
}
function Vu(e, t) {
  if (St(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (St(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function da(e) {
  var t = Vu(e, "string");
  return St(t) == "symbol" ? t : t + "";
}
function qt(e, t, n) {
  return (t = da(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function To(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? To(Object(n), !0).forEach(function(r) {
      qt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : To(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Yu(e) {
  if (Array.isArray(e)) return e;
}
function Xu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], c = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, o = l;
    } finally {
      try {
        if (!c && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function Tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fa(e, t) {
  if (e) {
    if (typeof e == "string") return Tr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tr(e, t) : void 0;
  }
}
function Hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(e, t) {
  return Yu(e) || Xu(e, t) || fa(e, t) || Hu();
}
function Lu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function ut(e, t) {
  if (e == null) return {};
  var n, r, o = Lu(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var Zu = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function zu(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, c = e.menuIsOpen, u = e.onChange, l = e.onInputChange, d = e.onMenuClose, g = e.onMenuOpen, p = e.value, v = ut(e, Zu), f = Be(s !== void 0 ? s : n), m = at(f, 2), b = m[0], I = m[1], y = Be(c !== void 0 ? c : o), x = at(y, 2), h = x[0], E = x[1], A = Be(p !== void 0 ? p : a), S = at(A, 2), O = S[0], D = S[1], N = he(function(w, k) {
    typeof u == "function" && u(w, k), D(w);
  }, [u]), F = he(function(w, k) {
    var T;
    typeof l == "function" && (T = l(w, k)), I(T !== void 0 ? T : w);
  }, [l]), L = he(function() {
    typeof g == "function" && g(), E(!0);
  }, [g]), R = he(function() {
    typeof d == "function" && d(), E(!1);
  }, [d]), P = s !== void 0 ? s : b, M = c !== void 0 ? c : h, G = p !== void 0 ? p : O;
  return j(j({}, v), {}, {
    inputValue: P,
    menuIsOpen: M,
    onChange: N,
    onInputChange: F,
    onMenuClose: R,
    onMenuOpen: L,
    value: G
  });
}
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, U.apply(null, arguments);
}
function Ju(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Wo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, da(r.key), r);
  }
}
function _u(e, t, n) {
  return t && Wo(e.prototype, t), n && Wo(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Wr(e, t) {
  return Wr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Wr(e, t);
}
function ju(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Wr(e, t);
}
function Nn(e) {
  return Nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Nn(e);
}
function ma() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ma = function() {
    return !!e;
  })();
}
function $u(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uu(e, t) {
  if (t && (St(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return $u(e);
}
function Qu(e) {
  var t = ma();
  return function() {
    var n, r = Nn(e);
    if (t) {
      var o = Nn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Uu(this, n);
  };
}
function Ku(e) {
  if (Array.isArray(e)) return Tr(e);
}
function qu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function el() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function to(e) {
  return Ku(e) || qu(e) || fa(e) || el();
}
function tl(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function nl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var rl = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(nl(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = tl(o);
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
}(), Me = "-ms-", Fn = "-moz-", se = "-webkit-", ga = "comm", no = "rule", ro = "decl", ol = "@import", ha = "@keyframes", il = "@layer", al = Math.abs, Ln = String.fromCharCode, sl = Object.assign;
function cl(e, t) {
  return Ee(e, 0) ^ 45 ? (((t << 2 ^ Ee(e, 0)) << 2 ^ Ee(e, 1)) << 2 ^ Ee(e, 2)) << 2 ^ Ee(e, 3) : 0;
}
function pa(e) {
  return e.trim();
}
function ul(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, n) {
  return e.replace(t, n);
}
function Br(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function tn(e, t, n) {
  return e.slice(t, n);
}
function Ze(e) {
  return e.length;
}
function oo(e) {
  return e.length;
}
function bn(e, t) {
  return t.push(e), e;
}
function ll(e, t) {
  return e.map(t).join("");
}
var Zn = 1, Tt = 1, ba = 0, Pe = 0, xe = 0, Lt = "";
function zn(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Zn, column: Tt, length: a, return: "" };
}
function $t(e, t) {
  return sl(zn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function dl() {
  return xe;
}
function fl() {
  return xe = Pe > 0 ? Ee(Lt, --Pe) : 0, Tt--, xe === 10 && (Tt = 1, Zn--), xe;
}
function Fe() {
  return xe = Pe < ba ? Ee(Lt, Pe++) : 0, Tt++, xe === 10 && (Tt = 1, Zn++), xe;
}
function Ue() {
  return Ee(Lt, Pe);
}
function Mn() {
  return Pe;
}
function un(e, t) {
  return tn(Lt, e, t);
}
function nn(e) {
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
function va(e) {
  return Zn = Tt = 1, ba = Ze(Lt = e), Pe = 0, [];
}
function ya(e) {
  return Lt = "", e;
}
function On(e) {
  return pa(un(Pe - 1, Vr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ml(e) {
  for (; (xe = Ue()) && xe < 33; )
    Fe();
  return nn(e) > 2 || nn(xe) > 3 ? "" : " ";
}
function gl(e, t) {
  for (; --t && Fe() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return un(e, Mn() + (t < 6 && Ue() == 32 && Fe() == 32));
}
function Vr(e) {
  for (; Fe(); )
    switch (xe) {
      case e:
        return Pe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vr(xe);
        break;
      case 40:
        e === 41 && Vr(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Pe;
}
function hl(e, t) {
  for (; Fe() && e + xe !== 57; )
    if (e + xe === 84 && Ue() === 47)
      break;
  return "/*" + un(t, Pe - 1) + "*" + Ln(e === 47 ? e : Fe());
}
function pl(e) {
  for (; !nn(Ue()); )
    Fe();
  return un(e, Pe);
}
function bl(e) {
  return ya(Pn("", null, null, null, [""], e = va(e), 0, [0], e));
}
function Pn(e, t, n, r, o, i, a, s, c) {
  for (var u = 0, l = 0, d = a, g = 0, p = 0, v = 0, f = 1, m = 1, b = 1, I = 0, y = "", x = o, h = i, E = r, A = y; m; )
    switch (v = I, I = Fe()) {
      case 40:
        if (v != 108 && Ee(A, d - 1) == 58) {
          Br(A += ce(On(I), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += On(I);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += ml(v);
        break;
      case 92:
        A += gl(Mn() - 1, 7);
        continue;
      case 47:
        switch (Ue()) {
          case 42:
          case 47:
            bn(vl(hl(Fe(), Mn()), t, n), c);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * f:
        s[u++] = Ze(A) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (I) {
          case 0:
          case 125:
            m = 0;
          case 59 + l:
            b == -1 && (A = ce(A, /\f/g, "")), p > 0 && Ze(A) - d && bn(p > 32 ? Vo(A + ";", r, n, d - 1) : Vo(ce(A, " ", "") + ";", r, n, d - 2), c);
            break;
          case 59:
            A += ";";
          default:
            if (bn(E = Bo(A, t, n, u, l, o, s, y, x = [], h = [], d), i), I === 123)
              if (l === 0)
                Pn(A, t, E, E, x, i, d, s, h);
              else
                switch (g === 99 && Ee(A, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pn(e, E, E, r && bn(Bo(e, E, E, 0, 0, o, s, y, o, x = [], d), h), o, h, d, s, r ? x : h);
                    break;
                  default:
                    Pn(A, E, E, E, [""], h, 0, s, h);
                }
        }
        u = l = p = 0, f = b = 1, y = A = "", d = a;
        break;
      case 58:
        d = 1 + Ze(A), p = v;
      default:
        if (f < 1) {
          if (I == 123)
            --f;
          else if (I == 125 && f++ == 0 && fl() == 125)
            continue;
        }
        switch (A += Ln(I), I * f) {
          case 38:
            b = l > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[u++] = (Ze(A) - 1) * b, b = 1;
            break;
          case 64:
            Ue() === 45 && (A += On(Fe())), g = Ue(), l = d = Ze(y = A += pl(Mn())), I++;
            break;
          case 45:
            v === 45 && Ze(A) == 2 && (f = 0);
        }
    }
  return i;
}
function Bo(e, t, n, r, o, i, a, s, c, u, l) {
  for (var d = o - 1, g = o === 0 ? i : [""], p = oo(g), v = 0, f = 0, m = 0; v < r; ++v)
    for (var b = 0, I = tn(e, d + 1, d = al(f = a[v])), y = e; b < p; ++b)
      (y = pa(f > 0 ? g[b] + " " + I : ce(I, /&\f/g, g[b]))) && (c[m++] = y);
  return zn(e, t, n, o === 0 ? no : s, c, u, l);
}
function vl(e, t, n) {
  return zn(e, t, n, ga, Ln(dl()), tn(e, 2, -2), 0);
}
function Vo(e, t, n, r) {
  return zn(e, t, n, ro, tn(e, 0, r), tn(e, r + 1, -1), r);
}
function kt(e, t) {
  for (var n = "", r = oo(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function yl(e, t, n, r) {
  switch (e.type) {
    case il:
      if (e.children.length) break;
    case ol:
    case ro:
      return e.return = e.return || e.value;
    case ga:
      return "";
    case ha:
      return e.return = e.value + "{" + kt(e.children, r) + "}";
    case no:
      e.value = e.props.join(",");
  }
  return Ze(n = kt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Cl(e) {
  var t = oo(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Il(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function xl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var wl = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Ue(), o === 38 && i === 12 && (n[r] = 1), !nn(i); )
    Fe();
  return un(t, Pe);
}, Al = function(t, n) {
  var r = -1, o = 44;
  do
    switch (nn(o)) {
      case 0:
        o === 38 && Ue() === 12 && (n[r] = 1), t[r] += wl(Pe - 1, n, r);
        break;
      case 2:
        t[r] += On(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Ue() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Ln(o);
    }
  while (o = Fe());
  return t;
}, Sl = function(t, n) {
  return ya(Al(va(t), n));
}, Yo = /* @__PURE__ */ new WeakMap(), El = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Yo.get(r)) && !o) {
      Yo.set(t, !0);
      for (var i = [], a = Sl(n, i), s = r.props, c = 0, u = 0; c < a.length; c++)
        for (var l = 0; l < s.length; l++, u++)
          t.props[u] = i[c] ? a[c].replace(/&\f/g, s[l]) : s[l] + " " + a[c];
    }
  }
}, Ml = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ca(e, t) {
  switch (cl(e, t)) {
    case 5103:
      return se + "print-" + e + e;
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
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + Fn + e + Me + e + e;
    case 6828:
    case 4268:
      return se + e + Me + e + e;
    case 6165:
      return se + e + Me + "flex-" + e + e;
    case 5187:
      return se + e + ce(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + Me + "flex-$1$2") + e;
    case 5443:
      return se + e + Me + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    case 4675:
      return se + e + Me + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return se + e + Me + ce(e, "shrink", "negative") + e;
    case 5292:
      return se + e + Me + ce(e, "basis", "preferred-size") + e;
    case 6060:
      return se + "box-" + ce(e, "-grow", "") + se + e + Me + ce(e, "grow", "positive") + e;
    case 4554:
      return se + ce(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return ce(ce(ce(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return ce(ce(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + Me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, se + "$1$2") + e;
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
      if (Ze(e) - 1 - t > 6) switch (Ee(e, t + 1)) {
        case 109:
          if (Ee(e, t + 4) !== 45) break;
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + Fn + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Br(e, "stretch") ? Ca(ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, Ze(e) - 3 - (~Br(e, "!important") && 10))) {
        case 107:
          return ce(e, ":", ":" + se) + e;
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (Ee(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + Me + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return se + e + Me + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + Me + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + Me + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + Me + e + e;
  }
  return e;
}
var Ol = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ro:
      t.return = Ca(t.value, t.length);
      break;
    case ha:
      return kt([$t(t, {
        value: ce(t.value, "@", "@" + se)
      })], o);
    case no:
      if (t.length) return ll(t.props, function(i) {
        switch (ul(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return kt([$t(t, {
              props: [ce(i, /:(read-\w+)/, ":" + Fn + "$1")]
            })], o);
          case "::placeholder":
            return kt([$t(t, {
              props: [ce(i, /:(plac\w+)/, ":" + se + "input-$1")]
            }), $t(t, {
              props: [ce(i, /:(plac\w+)/, ":" + Fn + "$1")]
            }), $t(t, {
              props: [ce(i, /:(plac\w+)/, Me + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Pl = [Ol], Dl = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var m = f.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Pl, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var m = f.getAttribute("data-emotion").split(" "), b = 1; b < m.length; b++)
        i[m[b]] = !0;
      s.push(f);
    }
  );
  var c, u = [El, Ml];
  {
    var l, d = [yl, Il(function(f) {
      l.insert(f);
    })], g = Cl(u.concat(o, d)), p = function(m) {
      return kt(bl(m), g);
    };
    c = function(m, b, I, y) {
      l = I, p(m ? m + "{" + b.styles + "}" : b.styles), y && (v.inserted[b.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new rl({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return v.sheet.hydrate(s), v;
}, io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function Rl() {
  if (Xo) return le;
  Xo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case r:
            case i:
            case o:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case l:
                case v:
                case p:
                case a:
                  return h;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function x(h) {
    return y(h) === u;
  }
  return le.AsyncMode = c, le.ConcurrentMode = u, le.ContextConsumer = s, le.ContextProvider = a, le.Element = t, le.ForwardRef = l, le.Fragment = r, le.Lazy = v, le.Memo = p, le.Portal = n, le.Profiler = i, le.StrictMode = o, le.Suspense = d, le.isAsyncMode = function(h) {
    return x(h) || y(h) === c;
  }, le.isConcurrentMode = x, le.isContextConsumer = function(h) {
    return y(h) === s;
  }, le.isContextProvider = function(h) {
    return y(h) === a;
  }, le.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, le.isForwardRef = function(h) {
    return y(h) === l;
  }, le.isFragment = function(h) {
    return y(h) === r;
  }, le.isLazy = function(h) {
    return y(h) === v;
  }, le.isMemo = function(h) {
    return y(h) === p;
  }, le.isPortal = function(h) {
    return y(h) === n;
  }, le.isProfiler = function(h) {
    return y(h) === i;
  }, le.isStrictMode = function(h) {
    return y(h) === o;
  }, le.isSuspense = function(h) {
    return y(h) === d;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === i || h === o || h === d || h === g || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === p || h.$$typeof === a || h.$$typeof === s || h.$$typeof === l || h.$$typeof === m || h.$$typeof === b || h.$$typeof === I || h.$$typeof === f);
  }, le.typeOf = y, le;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho;
function Gl() {
  return Ho || (Ho = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function y(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === r || W === u || W === i || W === o || W === d || W === g || typeof W == "object" && W !== null && (W.$$typeof === v || W.$$typeof === p || W.$$typeof === a || W.$$typeof === s || W.$$typeof === l || W.$$typeof === m || W.$$typeof === b || W.$$typeof === I || W.$$typeof === f);
    }
    function x(W) {
      if (typeof W == "object" && W !== null) {
        var Ce = W.$$typeof;
        switch (Ce) {
          case t:
            var Se = W.type;
            switch (Se) {
              case c:
              case u:
              case r:
              case i:
              case o:
              case d:
                return Se;
              default:
                var De = Se && Se.$$typeof;
                switch (De) {
                  case s:
                  case l:
                  case v:
                  case p:
                  case a:
                    return De;
                  default:
                    return Ce;
                }
            }
          case n:
            return Ce;
        }
      }
    }
    var h = c, E = u, A = s, S = a, O = t, D = l, N = r, F = v, L = p, R = n, P = i, M = o, G = d, w = !1;
    function k(W) {
      return w || (w = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(W) || x(W) === c;
    }
    function T(W) {
      return x(W) === u;
    }
    function z(W) {
      return x(W) === s;
    }
    function Z(W) {
      return x(W) === a;
    }
    function H(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function $(W) {
      return x(W) === l;
    }
    function re(W) {
      return x(W) === r;
    }
    function oe(W) {
      return x(W) === v;
    }
    function Q(W) {
      return x(W) === p;
    }
    function me(W) {
      return x(W) === n;
    }
    function ue(W) {
      return x(W) === i;
    }
    function ie(W) {
      return x(W) === o;
    }
    function pe(W) {
      return x(W) === d;
    }
    de.AsyncMode = h, de.ConcurrentMode = E, de.ContextConsumer = A, de.ContextProvider = S, de.Element = O, de.ForwardRef = D, de.Fragment = N, de.Lazy = F, de.Memo = L, de.Portal = R, de.Profiler = P, de.StrictMode = M, de.Suspense = G, de.isAsyncMode = k, de.isConcurrentMode = T, de.isContextConsumer = z, de.isContextProvider = Z, de.isElement = H, de.isForwardRef = $, de.isFragment = re, de.isLazy = oe, de.isMemo = Q, de.isPortal = me, de.isProfiler = ue, de.isStrictMode = ie, de.isSuspense = pe, de.isValidElementType = y, de.typeOf = x;
  }()), de;
}
process.env.NODE_ENV === "production" ? Yr.exports = Rl() : Yr.exports = Gl();
var kl = Yr.exports, Ia = kl, Nl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Fl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, xa = {};
xa[Ia.ForwardRef] = Nl;
xa[Ia.Memo] = Fl;
var Tl = !0;
function Wl(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var wa = function(t, n, r) {
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
  Tl === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Bl = function(t, n, r) {
  wa(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Vl(e) {
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
var Yl = {
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
}, Xl = /[A-Z]|^ms/g, Hl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Aa = function(t) {
  return t.charCodeAt(1) === 45;
}, Lo = function(t) {
  return t != null && typeof t != "boolean";
}, cr = /* @__PURE__ */ xl(function(e) {
  return Aa(e) ? e : e.replace(Xl, "-$&").toLowerCase();
}), Zo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Hl, function(r, o, i) {
          return ze = {
            name: o,
            styles: i,
            next: ze
          }, o;
        });
  }
  return Yl[t] !== 1 && !Aa(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function rn(e, t, n) {
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
        return ze = {
          name: o.name,
          styles: o.styles,
          next: ze
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ze = {
              name: a.name,
              styles: a.styles,
              next: ze
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Ll(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = ze, u = n(e);
        return ze = c, rn(e, t, u);
      }
      break;
    }
  }
  var l = n;
  return l;
}
function Ll(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += rn(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var s = a;
        Lo(s) && (r += cr(i) + ":" + Zo(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var c = 0; c < a.length; c++)
          Lo(a[c]) && (r += cr(i) + ":" + Zo(i, a[c]) + ";");
      else {
        var u = rn(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += cr(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var zo = /label:\s*([^\s;{]+)\s*(;|$)/g, ze;
function Sa(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  ze = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += rn(n, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += rn(n, t, e[s]), r) {
      var c = i;
      o += c[s];
    }
  zo.lastIndex = 0;
  for (var u = "", l; (l = zo.exec(o)) !== null; )
    u += "-" + l[1];
  var d = Vl(o) + u;
  return {
    name: d,
    styles: o,
    next: ze
  };
}
var Zl = function(t) {
  return t();
}, zl = C.useInsertionEffect ? C.useInsertionEffect : !1, Jl = zl || Zl, Ea = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Dl({
    key: "css"
  }) : null
);
Ea.Provider;
var _l = function(t) {
  return /* @__PURE__ */ Zi(function(n, r) {
    var o = Ur(Ea);
    return t(n, o, r);
  });
}, jl = /* @__PURE__ */ C.createContext({}), so = {}.hasOwnProperty, Xr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $l = function(t, n) {
  var r = {};
  for (var o in n)
    so.call(n, o) && (r[o] = n[o]);
  return r[Xr] = t, r;
}, Ul = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return wa(n, r, o), Jl(function() {
    return Bl(n, r, o);
  }), null;
}, Ql = /* @__PURE__ */ _l(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Xr], i = [r], a = "";
  typeof e.className == "string" ? a = Wl(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Sa(i, void 0, C.useContext(jl));
  a += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    so.call(e, u) && u !== "css" && u !== Xr && (c[u] = e[u]);
  return c.className = a, n && (c.ref = n), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(Ul, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ C.createElement(o, c));
}), Kl = Ql, _ = function(t, n) {
  var r = arguments;
  if (n == null || !so.call(n, "css"))
    return C.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Kl, i[1] = $l(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return C.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(_ || (_ = {}));
function co() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Sa(t);
}
function ql() {
  var e = co.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
function ed(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const td = ["top", "right", "bottom", "left"], gt = Math.min, ke = Math.max, Tn = Math.round, vn = Math.floor, Qe = (e) => ({
  x: e,
  y: e
}), nd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rd = {
  start: "end",
  end: "start"
};
function Hr(e, t, n) {
  return ke(e, gt(t, n));
}
function st(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ct(e) {
  return e.split("-")[0];
}
function Zt(e) {
  return e.split("-")[1];
}
function uo(e) {
  return e === "x" ? "y" : "x";
}
function lo(e) {
  return e === "y" ? "height" : "width";
}
const od = /* @__PURE__ */ new Set(["top", "bottom"]);
function _e(e) {
  return od.has(ct(e)) ? "y" : "x";
}
function fo(e) {
  return uo(_e(e));
}
function id(e, t, n) {
  n === void 0 && (n = !1);
  const r = Zt(e), o = fo(e), i = lo(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Wn(a)), [a, Wn(a)];
}
function ad(e) {
  const t = Wn(e);
  return [Lr(e), t, Lr(t)];
}
function Lr(e) {
  return e.replace(/start|end/g, (t) => rd[t]);
}
const Jo = ["left", "right"], _o = ["right", "left"], sd = ["top", "bottom"], cd = ["bottom", "top"];
function ud(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? _o : Jo : t ? Jo : _o;
    case "left":
    case "right":
      return t ? sd : cd;
    default:
      return [];
  }
}
function ld(e, t, n, r) {
  const o = Zt(e);
  let i = ud(ct(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Lr)))), i;
}
function Wn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nd[t]);
}
function dd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ma(e) {
  return typeof e != "number" ? dd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bn(e) {
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
function jo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = _e(t), a = fo(t), s = lo(a), c = ct(t), u = i === "y", l = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, g = r[s] / 2 - o[s] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: l,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: l,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Zt(t)) {
    case "start":
      p[a] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      p[a] += g * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const fd = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: l,
    y: d
  } = jo(u, r, c), g = r, p = {}, v = 0;
  for (let f = 0; f < s.length; f++) {
    const {
      name: m,
      fn: b
    } = s[f], {
      x: I,
      y,
      data: x,
      reset: h
    } = await b({
      x: l,
      y: d,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: p,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = I ?? l, d = y ?? d, p = {
      ...p,
      [m]: {
        ...p[m],
        ...x
      }
    }, h && v <= 50 && (v++, typeof h == "object" && (h.placement && (g = h.placement), h.rects && (u = h.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : h.rects), {
      x: l,
      y: d
    } = jo(u, g, c)), f = -1);
  }
  return {
    x: l,
    y: d,
    placement: g,
    strategy: o,
    middlewareData: p
  };
};
async function on(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: d = "floating",
    altBoundary: g = !1,
    padding: p = 0
  } = st(t, e), v = Ma(p), m = s[g ? d === "floating" ? "reference" : "floating" : d], b = Bn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: c
  })), I = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), x = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, h = Bn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: I,
    offsetParent: y,
    strategy: c
  }) : I);
  return {
    top: (b.top - h.top + v.top) / x.y,
    bottom: (h.bottom - b.bottom + v.bottom) / x.y,
    left: (b.left - h.left + v.left) / x.x,
    right: (h.right - b.right + v.right) / x.x
  };
}
const md = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = t, {
      element: u,
      padding: l = 0
    } = st(e, t) || {};
    if (u == null)
      return {};
    const d = Ma(l), g = {
      x: n,
      y: r
    }, p = fo(o), v = lo(p), f = await a.getDimensions(u), m = p === "y", b = m ? "top" : "left", I = m ? "bottom" : "right", y = m ? "clientHeight" : "clientWidth", x = i.reference[v] + i.reference[p] - g[p] - i.floating[v], h = g[p] - i.reference[p], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let A = E ? E[y] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement(E))) && (A = s.floating[y] || i.floating[v]);
    const S = x / 2 - h / 2, O = A / 2 - f[v] / 2 - 1, D = gt(d[b], O), N = gt(d[I], O), F = D, L = A - f[v] - N, R = A / 2 - f[v] / 2 + S, P = Hr(F, R, L), M = !c.arrow && Zt(o) != null && R !== P && i.reference[v] / 2 - (R < F ? D : N) - f[v] / 2 < 0, G = M ? R < F ? R - F : R - L : 0;
    return {
      [p]: g[p] + G,
      data: {
        [p]: P,
        centerOffset: R - P - G,
        ...M && {
          alignmentOffset: G
        }
      },
      reset: M
    };
  }
}), gd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: u
      } = t, {
        mainAxis: l = !0,
        crossAxis: d = !0,
        fallbackPlacements: g,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: f = !0,
        ...m
      } = st(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = ct(o), I = _e(s), y = ct(s) === s, x = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), h = g || (y || !f ? [Wn(s)] : ad(s)), E = v !== "none";
      !g && E && h.push(...ld(s, f, v, x));
      const A = [s, ...h], S = await on(t, m), O = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (l && O.push(S[b]), d) {
        const R = id(o, a, x);
        O.push(S[R[0]], S[R[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: O
      }], !O.every((R) => R <= 0)) {
        var N, F;
        const R = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, P = A[R];
        if (P && (!(d === "alignment" ? I !== _e(P) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((w) => _e(w.placement) === I ? w.overflows[0] > 0 : !0)))
          return {
            data: {
              index: R,
              overflows: D
            },
            reset: {
              placement: P
            }
          };
        let M = (F = D.filter((G) => G.overflows[0] <= 0).sort((G, w) => G.overflows[1] - w.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!M)
          switch (p) {
            case "bestFit": {
              var L;
              const G = (L = D.filter((w) => {
                if (E) {
                  const k = _e(w.placement);
                  return k === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  k === "y";
                }
                return !0;
              }).map((w) => [w.placement, w.overflows.filter((k) => k > 0).reduce((k, T) => k + T, 0)]).sort((w, k) => w[1] - k[1])[0]) == null ? void 0 : L[0];
              G && (M = G);
              break;
            }
            case "initialPlacement":
              M = s;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function $o(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Uo(e) {
  return td.some((t) => e[t] >= 0);
}
const hd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = st(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await on(t, {
            ...o,
            elementContext: "reference"
          }), a = $o(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Uo(a)
            }
          };
        }
        case "escaped": {
          const i = await on(t, {
            ...o,
            altBoundary: !0
          }), a = $o(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Uo(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Oa = /* @__PURE__ */ new Set(["left", "top"]);
async function pd(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = ct(n), s = Zt(n), c = _e(n) === "y", u = Oa.has(a) ? -1 : 1, l = i && c ? -1 : 1, d = st(t, e);
  let {
    mainAxis: g,
    crossAxis: p,
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
  return s && typeof v == "number" && (p = s === "end" ? v * -1 : v), c ? {
    x: p * l,
    y: g * u
  } : {
    x: g * u,
    y: p * l
  };
}
const bd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, c = await pd(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, vd = function(e) {
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
        crossAxis: a = !1,
        limiter: s = {
          fn: (m) => {
            let {
              x: b,
              y: I
            } = m;
            return {
              x: b,
              y: I
            };
          }
        },
        ...c
      } = st(e, t), u = {
        x: n,
        y: r
      }, l = await on(t, c), d = _e(ct(o)), g = uo(d);
      let p = u[g], v = u[d];
      if (i) {
        const m = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", I = p + l[m], y = p - l[b];
        p = Hr(I, p, y);
      }
      if (a) {
        const m = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", I = v + l[m], y = v - l[b];
        v = Hr(I, v, y);
      }
      const f = s.fn({
        ...t,
        [g]: p,
        [d]: v
      });
      return {
        ...f,
        data: {
          x: f.x - n,
          y: f.y - r,
          enabled: {
            [g]: i,
            [d]: a
          }
        }
      };
    }
  };
}, yd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = st(e, t), l = {
        x: n,
        y: r
      }, d = _e(o), g = uo(d);
      let p = l[g], v = l[d];
      const f = st(s, t), m = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...f
      };
      if (c) {
        const y = g === "y" ? "height" : "width", x = i.reference[g] - i.floating[y] + m.mainAxis, h = i.reference[g] + i.reference[y] - m.mainAxis;
        p < x ? p = x : p > h && (p = h);
      }
      if (u) {
        var b, I;
        const y = g === "y" ? "width" : "height", x = Oa.has(ct(o)), h = i.reference[d] - i.floating[y] + (x && ((b = a.offset) == null ? void 0 : b[d]) || 0) + (x ? 0 : m.crossAxis), E = i.reference[d] + i.reference[y] + (x ? 0 : ((I = a.offset) == null ? void 0 : I[d]) || 0) - (x ? m.crossAxis : 0);
        v < h ? v = h : v > E && (v = E);
      }
      return {
        [g]: p,
        [d]: v
      };
    }
  };
}, Cd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...u
      } = st(e, t), l = await on(t, u), d = ct(o), g = Zt(o), p = _e(o) === "y", {
        width: v,
        height: f
      } = i.floating;
      let m, b;
      d === "top" || d === "bottom" ? (m = d, b = g === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = d, m = g === "end" ? "top" : "bottom");
      const I = f - l.top - l.bottom, y = v - l.left - l.right, x = gt(f - l[m], I), h = gt(v - l[b], y), E = !t.middlewareData.shift;
      let A = x, S = h;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = y), (r = t.middlewareData.shift) != null && r.enabled.y && (A = I), E && !g) {
        const D = ke(l.left, 0), N = ke(l.right, 0), F = ke(l.top, 0), L = ke(l.bottom, 0);
        p ? S = v - 2 * (D !== 0 || N !== 0 ? D + N : ke(l.left, l.right)) : A = f - 2 * (F !== 0 || L !== 0 ? F + L : ke(l.top, l.bottom));
      }
      await c({
        ...t,
        availableWidth: S,
        availableHeight: A
      });
      const O = await a.getDimensions(s.floating);
      return v !== O.width || f !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Jn() {
  return typeof window < "u";
}
function zt(e) {
  return Pa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qe(e) {
  var t;
  return (t = (Pa(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pa(e) {
  return Jn() ? e instanceof Node || e instanceof Te(e).Node : !1;
}
function Ye(e) {
  return Jn() ? e instanceof Element || e instanceof Te(e).Element : !1;
}
function Ke(e) {
  return Jn() ? e instanceof HTMLElement || e instanceof Te(e).HTMLElement : !1;
}
function Qo(e) {
  return !Jn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
const Id = /* @__PURE__ */ new Set(["inline", "contents"]);
function ln(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Id.has(o);
}
const xd = /* @__PURE__ */ new Set(["table", "td", "th"]);
function wd(e) {
  return xd.has(zt(e));
}
const Ad = [":popover-open", ":modal"];
function _n(e) {
  return Ad.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Sd = ["transform", "translate", "scale", "rotate", "perspective"], Ed = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Md = ["paint", "layout", "strict", "content"];
function mo(e) {
  const t = go(), n = Ye(e) ? Xe(e) : e;
  return Sd.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Ed.some((r) => (n.willChange || "").includes(r)) || Md.some((r) => (n.contain || "").includes(r));
}
function Od(e) {
  let t = ht(e);
  for (; Ke(t) && !Wt(t); ) {
    if (mo(t))
      return t;
    if (_n(t))
      return null;
    t = ht(t);
  }
  return null;
}
function go() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Pd = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Wt(e) {
  return Pd.has(zt(e));
}
function Xe(e) {
  return Te(e).getComputedStyle(e);
}
function jn(e) {
  return Ye(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ht(e) {
  if (zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qo(e) && e.host || // Fallback.
    qe(e)
  );
  return Qo(t) ? t.host : t;
}
function Da(e) {
  const t = ht(e);
  return Wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ke(t) && ln(t) ? t : Da(t);
}
function an(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Da(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Te(o);
  if (i) {
    const s = Zr(a);
    return t.concat(a, a.visualViewport || [], ln(o) ? o : [], s && n ? an(s) : []);
  }
  return t.concat(o, an(o, [], n));
}
function Zr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ra(e) {
  const t = Xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ke(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Tn(n) !== i || Tn(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function ho(e) {
  return Ye(e) ? e : e.contextElement;
}
function Nt(e) {
  const t = ho(e);
  if (!Ke(t))
    return Qe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ra(t);
  let a = (i ? Tn(n.width) : n.width) / r, s = (i ? Tn(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Dd = /* @__PURE__ */ Qe(0);
function Ga(e) {
  const t = Te(e);
  return !go() || !t.visualViewport ? Dd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Rd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Te(e) ? !1 : t;
}
function Et(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ho(e);
  let a = Qe(1);
  t && (r ? Ye(r) && (a = Nt(r)) : a = Nt(e));
  const s = Rd(i, n, r) ? Ga(i) : Qe(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, l = o.width / a.x, d = o.height / a.y;
  if (i) {
    const g = Te(i), p = r && Ye(r) ? Te(r) : r;
    let v = g, f = Zr(v);
    for (; f && r && p !== v; ) {
      const m = Nt(f), b = f.getBoundingClientRect(), I = Xe(f), y = b.left + (f.clientLeft + parseFloat(I.paddingLeft)) * m.x, x = b.top + (f.clientTop + parseFloat(I.paddingTop)) * m.y;
      c *= m.x, u *= m.y, l *= m.x, d *= m.y, c += y, u += x, v = Te(f), f = Zr(v);
    }
  }
  return Bn({
    width: l,
    height: d,
    x: c,
    y: u
  });
}
function $n(e, t) {
  const n = jn(e).scrollLeft;
  return t ? t.left + n : Et(qe(e)).left + n;
}
function ka(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - $n(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Gd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = qe(r), s = t ? _n(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Qe(1);
  const l = Qe(0), d = Ke(r);
  if ((d || !d && !i) && ((zt(r) !== "body" || ln(a)) && (c = jn(r)), Ke(r))) {
    const p = Et(r);
    u = Nt(r), l.x = p.x + r.clientLeft, l.y = p.y + r.clientTop;
  }
  const g = a && !d && !i ? ka(a, c) : Qe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + l.x + g.x,
    y: n.y * u.y - c.scrollTop * u.y + l.y + g.y
  };
}
function kd(e) {
  return Array.from(e.getClientRects());
}
function Nd(e) {
  const t = qe(e), n = jn(e), r = e.ownerDocument.body, o = ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + $n(e);
  const s = -n.scrollTop;
  return Xe(r).direction === "rtl" && (a += ke(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const Ko = 25;
function Fd(e, t) {
  const n = Te(e), r = qe(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = go();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const u = $n(r);
  if (u <= 0) {
    const l = r.ownerDocument, d = l.body, g = getComputedStyle(d), p = l.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, v = Math.abs(r.clientWidth - d.clientWidth - p);
    v <= Ko && (i -= v);
  } else u <= Ko && (i += u);
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
const Td = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Wd(e, t) {
  const n = Et(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ke(e) ? Nt(e) : Qe(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function qo(e, t, n) {
  let r;
  if (t === "viewport")
    r = Fd(e, n);
  else if (t === "document")
    r = Nd(qe(e));
  else if (Ye(t))
    r = Wd(t, n);
  else {
    const o = Ga(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Bn(r);
}
function Na(e, t) {
  const n = ht(e);
  return n === t || !Ye(n) || Wt(n) ? !1 : Xe(n).position === "fixed" || Na(n, t);
}
function Bd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = an(e, [], !1).filter((s) => Ye(s) && zt(s) !== "body"), o = null;
  const i = Xe(e).position === "fixed";
  let a = i ? ht(e) : e;
  for (; Ye(a) && !Wt(a); ) {
    const s = Xe(a), c = mo(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && Td.has(o.position) || ln(a) && !c && Na(e, a)) ? r = r.filter((l) => l !== a) : o = s, a = ht(a);
  }
  return t.set(e, r), r;
}
function Vd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? _n(t) ? [] : Bd(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((u, l) => {
    const d = qo(t, l, o);
    return u.top = ke(d.top, u.top), u.right = gt(d.right, u.right), u.bottom = gt(d.bottom, u.bottom), u.left = ke(d.left, u.left), u;
  }, qo(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Yd(e) {
  const {
    width: t,
    height: n
  } = Ra(e);
  return {
    width: t,
    height: n
  };
}
function Xd(e, t, n) {
  const r = Ke(t), o = qe(t), i = n === "fixed", a = Et(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Qe(0);
  function u() {
    c.x = $n(o);
  }
  if (r || !r && !i)
    if ((zt(t) !== "body" || ln(o)) && (s = jn(t)), r) {
      const p = Et(t, !0, i, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const l = o && !r && !i ? ka(o, s) : Qe(0), d = a.left + s.scrollLeft - c.x - l.x, g = a.top + s.scrollTop - c.y - l.y;
  return {
    x: d,
    y: g,
    width: a.width,
    height: a.height
  };
}
function ur(e) {
  return Xe(e).position === "static";
}
function ei(e, t) {
  if (!Ke(e) || Xe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qe(e) === n && (n = n.ownerDocument.body), n;
}
function Fa(e, t) {
  const n = Te(e);
  if (_n(e))
    return n;
  if (!Ke(e)) {
    let o = ht(e);
    for (; o && !Wt(o); ) {
      if (Ye(o) && !ur(o))
        return o;
      o = ht(o);
    }
    return n;
  }
  let r = ei(e, t);
  for (; r && wd(r) && ur(r); )
    r = ei(r, t);
  return r && Wt(r) && ur(r) && !mo(r) ? n : r || Od(e) || n;
}
const Hd = async function(e) {
  const t = this.getOffsetParent || Fa, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Xd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ld(e) {
  return Xe(e).direction === "rtl";
}
const Zd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gd,
  getDocumentElement: qe,
  getClippingRect: Vd,
  getOffsetParent: Fa,
  getElementRects: Hd,
  getClientRects: kd,
  getDimensions: Yd,
  getScale: Nt,
  isElement: Ye,
  isRTL: Ld
};
function Ta(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zd(e, t) {
  let n = null, r;
  const o = qe(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const u = e.getBoundingClientRect(), {
      left: l,
      top: d,
      width: g,
      height: p
    } = u;
    if (s || t(), !g || !p)
      return;
    const v = vn(d), f = vn(o.clientWidth - (l + g)), m = vn(o.clientHeight - (d + p)), b = vn(l), y = {
      rootMargin: -v + "px " + -f + "px " + -m + "px " + -b + "px",
      threshold: ke(0, gt(1, c)) || 1
    };
    let x = !0;
    function h(E) {
      const A = E[0].intersectionRatio;
      if (A !== c) {
        if (!x)
          return a();
        A ? a(!1, A) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Ta(u, e.getBoundingClientRect()) && a(), x = !1;
    }
    try {
      n = new IntersectionObserver(h, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(h, y);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function Wa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = ho(e), l = o || i ? [...u ? an(u) : [], ...an(t)] : [];
  l.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const d = u && s ? zd(u, n) : null;
  let g = -1, p = null;
  a && (p = new ResizeObserver((b) => {
    let [I] = b;
    I && I.target === u && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var y;
      (y = p) == null || y.observe(t);
    })), n();
  }), u && !c && p.observe(u), p.observe(t));
  let v, f = c ? Et(e) : null;
  c && m();
  function m() {
    const b = Et(e);
    f && !Ta(f, b) && n(), f = b, v = requestAnimationFrame(m);
  }
  return n(), () => {
    var b;
    l.forEach((I) => {
      o && I.removeEventListener("scroll", n), i && I.removeEventListener("resize", n);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, c && cancelAnimationFrame(v);
  };
}
const Jd = bd, _d = vd, jd = gd, $d = Cd, Ud = hd, ti = md, Qd = yd, Kd = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Zd,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return fd(e, t, {
    ...o,
    platform: i
  });
};
var zr = Qr, qd = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Vn = function() {
};
function ef(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function tf(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(ef(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var ni = function(t) {
  return df(t) ? t.filter(Boolean) : St(t) === "object" && t !== null ? [t] : [];
}, Ba = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = ut(t, qd);
  return j({}, n);
}, Ie = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function Un(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function nf(e) {
  return Un(e) ? window.innerHeight : e.clientHeight;
}
function Va(e) {
  return Un(e) ? window.pageYOffset : e.scrollTop;
}
function Yn(e, t) {
  if (Un(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function rf(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function of(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function yn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Vn, o = Va(e), i = t - o, a = 10, s = 0;
  function c() {
    s += a;
    var u = of(s, o, i, n);
    Yn(e, u), s < n ? window.requestAnimationFrame(c) : r(e);
  }
  c();
}
function ri(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? Yn(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && Yn(e, Math.max(t.offsetTop - o, 0));
}
function af(e) {
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
function oi() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function sf() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Ya = !1, cf = {
  get passive() {
    return Ya = !0;
  }
}, Cn = typeof window < "u" ? window : {};
Cn.addEventListener && Cn.removeEventListener && (Cn.addEventListener("p", Vn, cf), Cn.removeEventListener("p", Vn, !1));
var uf = Ya;
function lf(e) {
  return e != null;
}
function df(e) {
  return Array.isArray(e);
}
function In(e, t, n) {
  return e ? t : n;
}
var ff = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = Object.entries(t).filter(function(a) {
    var s = at(a, 1), c = s[0];
    return !r.includes(c);
  });
  return i.reduce(function(a, s) {
    var c = at(s, 2), u = c[0], l = c[1];
    return a[u] = l, a;
  }, {});
}, mf = ["children", "innerProps"], gf = ["children", "innerProps"];
function hf(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, c = rf(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent) return u;
  var l = c.getBoundingClientRect(), d = l.height, g = n.getBoundingClientRect(), p = g.bottom, v = g.height, f = g.top, m = n.offsetParent.getBoundingClientRect(), b = m.top, I = a ? window.innerHeight : nf(c), y = Va(c), x = parseInt(getComputedStyle(n).marginBottom, 10), h = parseInt(getComputedStyle(n).marginTop, 10), E = b - h, A = I - f, S = E + y, O = d - y - f, D = p - I + y + x, N = y + f - h, F = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (A >= v)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (O >= v && !a)
        return i && yn(c, D, F), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && O >= r || a && A >= r) {
        i && yn(c, D, F);
        var L = a ? A - x : O - x;
        return {
          placement: "bottom",
          maxHeight: L
        };
      }
      if (o === "auto" || a) {
        var R = t, P = a ? E : S;
        return P >= r && (R = Math.min(P - x - s, t)), {
          placement: "top",
          maxHeight: R
        };
      }
      if (o === "bottom")
        return i && Yn(c, D), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (E >= v)
        return {
          placement: "top",
          maxHeight: t
        };
      if (S >= v && !a)
        return i && yn(c, N, F), {
          placement: "top",
          maxHeight: t
        };
      if (!a && S >= r || a && E >= r) {
        var M = t;
        return (!a && S >= r || a && E >= r) && (M = a ? E - h : S - h), i && yn(c, N, F), {
          placement: "top",
          maxHeight: M
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return u;
}
function pf(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Xa = function(t) {
  return t === "auto" ? "bottom" : t;
}, bf = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, c = i.colors;
  return j((r = {
    label: "menu"
  }, qt(r, pf(o), "100%"), qt(r, "position", "absolute"), qt(r, "width", "100%"), qt(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: c.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, Ha = /* @__PURE__ */ zi(null), vf = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, c = t.theme, u = Ur(Ha) || {}, l = u.setPortalPlacement, d = Ne(null), g = Be(o), p = at(g, 2), v = p[0], f = p[1], m = Be(null), b = at(m, 2), I = b[0], y = b[1], x = c.spacing.controlHeight;
  return zr(function() {
    var h = d.current;
    if (h) {
      var E = a === "fixed", A = s && !E, S = hf({
        maxHeight: o,
        menuEl: h,
        minHeight: r,
        placement: i,
        shouldScroll: A,
        isFixedPosition: E,
        controlHeight: x
      });
      f(S.maxHeight), y(S.placement), l == null || l(S.placement);
    }
  }, [o, i, a, s, r, l, x]), n({
    ref: d,
    placerProps: j(j({}, t), {}, {
      placement: I || Xa(i),
      maxHeight: v
    })
  });
}, yf = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return _("div", U({}, Ie(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, Cf = yf, If = function(t, n) {
  var r = t.maxHeight, o = t.theme.spacing.baseUnit;
  return j({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, xf = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return _("div", U({}, Ie(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, La = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return j({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, wf = La, Af = La, Sf = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = ut(t, mf);
  return _("div", U({}, Ie(j(j({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, Ef = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = ut(t, gf);
  return _("div", U({}, Ie(j(j({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, Mf = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, Of = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, c = Ne(null), u = Ne(null), l = Be(Xa(a)), d = at(l, 2), g = d[0], p = d[1], v = rt(function() {
    return {
      setPortalPlacement: p
    };
  }, []), f = Be(null), m = at(f, 2), b = m[0], I = m[1], y = he(function() {
    if (o) {
      var A = af(o), S = s === "fixed" ? 0 : window.pageYOffset, O = A[g] + S;
      (O !== (b == null ? void 0 : b.offset) || A.left !== (b == null ? void 0 : b.rect.left) || A.width !== (b == null ? void 0 : b.rect.width)) && I({
        offset: O,
        rect: A
      });
    }
  }, [o, s, g, b == null ? void 0 : b.offset, b == null ? void 0 : b.rect.left, b == null ? void 0 : b.rect.width]);
  zr(function() {
    y();
  }, [y]);
  var x = he(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && c.current && (u.current = Wa(o, c.current, y, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, y]);
  zr(function() {
    x();
  }, [x]);
  var h = he(function(A) {
    c.current = A, x();
  }, [x]);
  if (!n && s !== "fixed" || !b) return null;
  var E = _("div", U({
    ref: h
  }, Ie(j(j({}, t), {}, {
    offset: b.offset,
    position: s,
    rect: b.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return _(Ha.Provider, {
    value: v
  }, n ? /* @__PURE__ */ Jc(E, n) : E);
}, Pf = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, Df = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return _("div", U({}, Ie(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, Rf = function(t, n) {
  var r = t.theme.spacing, o = t.isMulti, i = t.hasValue, a = t.selectProps.controlShouldRenderValue;
  return j({
    alignItems: "center",
    display: o && i && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, Gf = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return _("div", U({}, Ie(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, kf = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, Nf = function(t) {
  var n = t.children, r = t.innerProps;
  return _("div", U({}, Ie(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, ii, Ff = ["size"], Tf = ["innerProps", "isRtl", "size"];
function Wf() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Bf = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: Wf
}, Za = function(t) {
  var n = t.size, r = ut(t, Ff);
  return _("svg", U({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: Bf
  }, r));
}, po = function(t) {
  return _(Za, U({
    size: 20
  }, t), _("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, za = function(t) {
  return _(Za, U({
    size: 20
  }, t), _("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Ja = function(t, n) {
  var r = t.isFocused, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return j({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: i * 2,
    ":hover": {
      color: r ? a.neutral80 : a.neutral40
    }
  });
}, Vf = Ja, Yf = function(t) {
  var n = t.children, r = t.innerProps;
  return _("div", U({}, Ie(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || _(za, null));
}, Xf = Ja, Hf = function(t) {
  var n = t.children, r = t.innerProps;
  return _("div", U({}, Ie(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || _(po, null));
}, Lf = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return j({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? a.neutral10 : a.neutral20,
    marginBottom: i * 2,
    marginTop: i * 2
  });
}, Zf = function(t) {
  var n = t.innerProps;
  return _("span", U({}, n, Ie(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, zf = ql(ii || (ii = ed([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), Jf = function(t, n) {
  var r = t.isFocused, o = t.size, i = t.theme, a = i.colors, s = i.spacing.baseUnit;
  return j({
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
    color: r ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, lr = function(t) {
  var n = t.delay, r = t.offset;
  return _("span", {
    css: /* @__PURE__ */ co({
      animation: "".concat(zf, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, _f = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = ut(t, Tf);
  return _("div", U({}, Ie(j(j({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), _(lr, {
    delay: 0,
    offset: r
  }), _(lr, {
    delay: 160,
    offset: !0
  }), _(lr, {
    delay: 320,
    offset: !r
  }));
}, jf = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.theme, a = i.colors, s = i.borderRadius, c = i.spacing;
  return j({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: c.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? a.neutral5 : a.neutral0,
    borderColor: r ? a.neutral10 : o ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: o ? a.primary : a.neutral30
    }
  });
}, $f = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.innerRef, a = t.innerProps, s = t.menuIsOpen;
  return _("div", U({
    ref: i
  }, Ie(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": o,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": r || void 0
  }), n);
}, Uf = $f, Qf = ["data"], Kf = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, qf = function(t) {
  var n = t.children, r = t.cx, o = t.getStyles, i = t.getClassNames, a = t.Heading, s = t.headingProps, c = t.innerProps, u = t.label, l = t.theme, d = t.selectProps;
  return _("div", U({}, Ie(t, "group", {
    group: !0
  }), c), _(a, U({}, s, {
    selectProps: d,
    theme: l,
    getStyles: o,
    getClassNames: i,
    cx: r
  }), u), _("div", null, n));
}, em = function(t, n) {
  var r = t.theme, o = r.colors, i = r.spacing;
  return j({
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
}, tm = function(t) {
  var n = Ba(t);
  n.data;
  var r = ut(n, Qf);
  return _("div", U({}, Ie(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, nm = qf, rm = ["innerRef", "isDisabled", "isHidden", "inputClassName"], om = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return j(j({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, im), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, _a = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, im = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": j({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, _a)
}, am = function(t) {
  return j({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, _a);
}, sm = function(t) {
  var n = t.cx, r = t.value, o = Ba(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, c = o.inputClassName, u = ut(o, rm);
  return _("div", U({}, Ie(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), _("input", U({
    className: n({
      input: !0
    }, c),
    ref: i,
    style: am(s),
    disabled: a
  }, u)));
}, cm = sm, um = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors;
  return j({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: i / 2,
    margin: o.baseUnit / 2
  });
}, lm = function(t, n) {
  var r = t.theme, o = r.borderRadius, i = r.colors, a = t.cropWithEllipsis;
  return j({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: o / 2,
    color: i.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, dm = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors, s = t.isFocused;
  return j({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: i / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, ja = function(t) {
  var n = t.children, r = t.innerProps;
  return _("div", r, n);
}, fm = ja, mm = ja;
function gm(e) {
  var t = e.children, n = e.innerProps;
  return _("div", U({
    role: "button"
  }, n), t || _(po, {
    size: 14
  }));
}
var hm = function(t) {
  var n = t.children, r = t.components, o = t.data, i = t.innerProps, a = t.isDisabled, s = t.removeProps, c = t.selectProps, u = r.Container, l = r.Label, d = r.Remove;
  return _(u, {
    data: o,
    innerProps: j(j({}, Ie(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), i),
    selectProps: c
  }, _(l, {
    data: o,
    innerProps: j({}, Ie(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: c
  }, n), _(d, {
    data: o,
    innerProps: j(j({}, Ie(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, s),
    selectProps: c
  }));
}, pm = hm, bm = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.theme, s = a.spacing, c = a.colors;
  return j({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: i ? c.primary : o ? c.primary25 : "transparent",
    color: r ? c.neutral20 : i ? c.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : i ? c.primary : c.primary50
    }
  });
}, vm = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.innerRef, s = t.innerProps;
  return _("div", U({}, Ie(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": o,
    "option--is-selected": i
  }), {
    ref: a,
    "aria-disabled": r
  }, s), n);
}, ym = vm, Cm = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return j({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, Im = function(t) {
  var n = t.children, r = t.innerProps;
  return _("div", U({}, Ie(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, xm = Im, wm = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing, a = o.colors;
  return j({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? a.neutral40 : a.neutral80,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, Am = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return _("div", U({}, Ie(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, Sm = Am, $a = {
  ClearIndicator: Hf,
  Control: Uf,
  DropdownIndicator: Yf,
  DownChevron: za,
  CrossIcon: po,
  Group: nm,
  GroupHeading: tm,
  IndicatorsContainer: Nf,
  IndicatorSeparator: Zf,
  Input: cm,
  LoadingIndicator: _f,
  Menu: Cf,
  MenuList: xf,
  MenuPortal: Of,
  LoadingMessage: Ef,
  NoOptionsMessage: Sf,
  MultiValue: pm,
  MultiValueContainer: fm,
  MultiValueLabel: mm,
  MultiValueRemove: gm,
  Option: ym,
  Placeholder: xm,
  SelectContainer: Df,
  SingleValue: Sm,
  ValueContainer: Gf
}, Em = function(t) {
  return j(j({}, $a), t.components);
}, ai = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Mm(e, t) {
  return !!(e === t || ai(e) && ai(t));
}
function Om(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Mm(e[n], t[n]))
      return !1;
  return !0;
}
function Pm(e, t) {
  t === void 0 && (t = Om);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, o);
    return n = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
function Dm() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Rm = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: Dm
}, Gm = function(t) {
  return _("span", U({
    css: Rm
  }, t));
}, si = Gm, km = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, o = t.tabSelectsValue, i = t.context, a = t.isInitialFocus;
    switch (i) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return a ? "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, o = r === void 0 ? "" : r, i = t.labels, a = t.isDisabled;
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
        return a ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, c = t.isDisabled, u = t.isSelected, l = t.isAppleDevice, d = function(f, m) {
      return f && f.length ? "".concat(f.indexOf(m) + 1, " of ").concat(f.length) : "";
    };
    if (n === "value" && s)
      return "value ".concat(a, " focused, ").concat(d(s, r), ".");
    if (n === "menu" && l) {
      var g = c ? " disabled" : "", p = "".concat(u ? " selected" : "").concat(g);
      return "".concat(a).concat(p, ", ").concat(d(o, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, Nm = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, c = t.selectProps, u = t.id, l = t.isAppleDevice, d = c.ariaLiveMessages, g = c.getOptionLabel, p = c.inputValue, v = c.isMulti, f = c.isOptionDisabled, m = c.isSearchable, b = c.menuIsOpen, I = c.options, y = c.screenReaderStatus, x = c.tabSelectsValue, h = c.isLoading, E = c["aria-label"], A = c["aria-live"], S = rt(function() {
    return j(j({}, km), d || {});
  }, [d]), O = rt(function() {
    var P = "";
    if (n && S.onChange) {
      var M = n.option, G = n.options, w = n.removedValue, k = n.removedValues, T = n.value, z = function(me) {
        return Array.isArray(me) ? null : me;
      }, Z = w || M || z(T), H = Z ? g(Z) : "", $ = G || k || void 0, re = $ ? $.map(g) : [], oe = j({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: Z && f(Z, s),
        label: H,
        labels: re
      }, n);
      P = S.onChange(oe);
    }
    return P;
  }, [n, S, f, s, g]), D = rt(function() {
    var P = "", M = r || o, G = !!(r && s && s.includes(r));
    if (M && S.onFocus) {
      var w = {
        focused: M,
        label: g(M),
        isDisabled: f(M, s),
        isSelected: G,
        options: i,
        context: M === r ? "menu" : "value",
        selectValue: s,
        isAppleDevice: l
      };
      P = S.onFocus(w);
    }
    return P;
  }, [r, o, g, f, S, i, s, l]), N = rt(function() {
    var P = "";
    if (b && I.length && !h && S.onFilter) {
      var M = y({
        count: i.length
      });
      P = S.onFilter({
        inputValue: p,
        resultsMessage: M
      });
    }
    return P;
  }, [i, p, b, S, I, y, h]), F = (n == null ? void 0 : n.action) === "initial-input-focus", L = rt(function() {
    var P = "";
    if (S.guidance) {
      var M = o ? "value" : b ? "menu" : "input";
      P = S.guidance({
        "aria-label": E,
        context: M,
        isDisabled: r && f(r, s),
        isMulti: v,
        isSearchable: m,
        tabSelectsValue: x,
        isInitialFocus: F
      });
    }
    return P;
  }, [E, r, o, v, f, m, b, S, s, x, F]), R = _(Rr, null, _("span", {
    id: "aria-selection"
  }, O), _("span", {
    id: "aria-focused"
  }, D), _("span", {
    id: "aria-results"
  }, N), _("span", {
    id: "aria-guidance"
  }, L));
  return _(Rr, null, _(si, {
    id: u
  }, F && R), _(si, {
    "aria-live": A,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, a && !F && R));
}, Fm = Nm, Jr = [{
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
}], Tm = new RegExp("[" + Jr.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Ua = {};
for (var dr = 0; dr < Jr.length; dr++)
  for (var fr = Jr[dr], mr = 0; mr < fr.letters.length; mr++)
    Ua[fr.letters[mr]] = fr.base;
var Qa = function(t) {
  return t.replace(Tm, function(n) {
    return Ua[n];
  });
}, Wm = Pm(Qa), ci = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, Bm = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, Vm = function(t) {
  return function(n, r) {
    if (n.data.__isNew__) return !0;
    var o = j({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Bm,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, c = o.trim, u = o.matchFrom, l = c ? ci(r) : r, d = c ? ci(s(n)) : s(n);
    return i && (l = l.toLowerCase(), d = d.toLowerCase()), a && (l = Wm(l), d = Qa(d)), u === "start" ? d.substr(0, l.length) === l : d.indexOf(l) > -1;
  };
}, Ym = ["innerRef"];
function Xm(e) {
  var t = e.innerRef, n = ut(e, Ym), r = ff(n, "onExited", "in", "enter", "exit", "appear");
  return _("input", U({
    ref: t
  }, r, {
    css: /* @__PURE__ */ co({
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
var Hm = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function Lm(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = Ne(!1), s = Ne(!1), c = Ne(0), u = Ne(null), l = he(function(m, b) {
    if (u.current !== null) {
      var I = u.current, y = I.scrollTop, x = I.scrollHeight, h = I.clientHeight, E = u.current, A = b > 0, S = x - h - y, O = !1;
      S > b && a.current && (r && r(m), a.current = !1), A && s.current && (i && i(m), s.current = !1), A && b > S ? (n && !a.current && n(m), E.scrollTop = x, O = !0, a.current = !0) : !A && -b > y && (o && !s.current && o(m), E.scrollTop = 0, O = !0, s.current = !0), O && Hm(m);
    }
  }, [n, r, o, i]), d = he(function(m) {
    l(m, m.deltaY);
  }, [l]), g = he(function(m) {
    c.current = m.changedTouches[0].clientY;
  }, []), p = he(function(m) {
    var b = c.current - m.changedTouches[0].clientY;
    l(m, b);
  }, [l]), v = he(function(m) {
    if (m) {
      var b = uf ? {
        passive: !1
      } : !1;
      m.addEventListener("wheel", d, b), m.addEventListener("touchstart", g, b), m.addEventListener("touchmove", p, b);
    }
  }, [p, g, d]), f = he(function(m) {
    m && (m.removeEventListener("wheel", d, !1), m.removeEventListener("touchstart", g, !1), m.removeEventListener("touchmove", p, !1));
  }, [p, g, d]);
  return Kr(function() {
    if (t) {
      var m = u.current;
      return v(m), function() {
        f(m);
      };
    }
  }, [t, v, f]), function(m) {
    u.current = m;
  };
}
var ui = ["boxSizing", "height", "overflow", "paddingRight", "position"], li = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function di(e) {
  e.cancelable && e.preventDefault();
}
function fi(e) {
  e.stopPropagation();
}
function mi() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function gi() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var hi = !!(typeof window < "u" && window.document && window.document.createElement), Ut = 0, Ot = {
  capture: !1,
  passive: !1
};
function Zm(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = Ne({}), i = Ne(null), a = he(function(c) {
    if (hi) {
      var u = document.body, l = u && u.style;
      if (r && ui.forEach(function(v) {
        var f = l && l[v];
        o.current[v] = f;
      }), r && Ut < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, g = document.body ? document.body.clientWidth : 0, p = window.innerWidth - g + d || 0;
        Object.keys(li).forEach(function(v) {
          var f = li[v];
          l && (l[v] = f);
        }), l && (l.paddingRight = "".concat(p, "px"));
      }
      u && gi() && (u.addEventListener("touchmove", di, Ot), c && (c.addEventListener("touchstart", mi, Ot), c.addEventListener("touchmove", fi, Ot))), Ut += 1;
    }
  }, [r]), s = he(function(c) {
    if (hi) {
      var u = document.body, l = u && u.style;
      Ut = Math.max(Ut - 1, 0), r && Ut < 1 && ui.forEach(function(d) {
        var g = o.current[d];
        l && (l[d] = g);
      }), u && gi() && (u.removeEventListener("touchmove", di, Ot), c && (c.removeEventListener("touchstart", mi, Ot), c.removeEventListener("touchmove", fi, Ot)));
    }
  }, [r]);
  return Kr(function() {
    if (t) {
      var c = i.current;
      return a(c), function() {
        s(c);
      };
    }
  }, [t, a, s]), function(c) {
    i.current = c;
  };
}
function zm() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Jm = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, _m = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: zm
};
function jm(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, c = e.onTopLeave, u = Lm({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: c
  }), l = Zm({
    isEnabled: n
  }), d = function(p) {
    u(p), l(p);
  };
  return _(Rr, null, n && _("div", {
    onClick: Jm,
    css: _m
  }), t(d));
}
function $m() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Um = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: $m
}, Qm = function(t) {
  var n = t.name, r = t.onFocus;
  return _("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: Um,
    value: "",
    onChange: function() {
    }
  });
}, Km = Qm;
function bo(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function qm() {
  return bo(/^iPhone/i);
}
function Ka() {
  return bo(/^Mac/i);
}
function eg() {
  return bo(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ka() && navigator.maxTouchPoints > 1;
}
function tg() {
  return qm() || eg();
}
function ng() {
  return Ka() || tg();
}
var rg = function(t) {
  return t.label;
}, og = function(t) {
  return t.label;
}, ig = function(t) {
  return t.value;
}, ag = function(t) {
  return !!t.isDisabled;
}, sg = {
  clearIndicator: Xf,
  container: Pf,
  control: jf,
  dropdownIndicator: Vf,
  group: Kf,
  groupHeading: em,
  indicatorsContainer: kf,
  indicatorSeparator: Lf,
  input: om,
  loadingIndicator: Jf,
  loadingMessage: Af,
  menu: bf,
  menuList: If,
  menuPortal: Mf,
  multiValue: um,
  multiValueLabel: lm,
  multiValueRemove: dm,
  noOptionsMessage: wf,
  option: bm,
  placeholder: Cm,
  singleValue: wm,
  valueContainer: Rf
}, cg = {
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
}, ug = 4, qa = 4, lg = 38, dg = qa * 2, fg = {
  baseUnit: qa,
  controlHeight: lg,
  menuGutter: dg
}, gr = {
  borderRadius: ug,
  colors: cg,
  spacing: fg
}, mg = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: oi(),
  captureMenuScroll: !oi(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Vm(),
  formatGroupLabel: rg,
  getOptionLabel: og,
  getOptionValue: ig,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: ag,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !sf(),
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
function pi(e, t, n, r) {
  var o = ns(e, t, n), i = rs(e, t, n), a = ts(e, t), s = Xn(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: i,
    label: a,
    value: s,
    index: r
  };
}
function Dn(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return pi(e, a, t, s);
      }).filter(function(a) {
        return vi(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = pi(e, n, t, r);
    return vi(e, i) ? i : void 0;
  }).filter(lf);
}
function es(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, to(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function bi(e, t) {
  return e.reduce(function(n, r) {
    return r.type === "group" ? n.push.apply(n, to(r.options.map(function(o) {
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
function gg(e, t) {
  return es(Dn(e, t));
}
function vi(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!is(e) || !i) && os(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function hg(e, t) {
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
function pg(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var hr = function(t, n) {
  var r, o = (r = t.find(function(i) {
    return i.data === n;
  })) === null || r === void 0 ? void 0 : r.id;
  return o || null;
}, ts = function(t, n) {
  return t.getOptionLabel(n);
}, Xn = function(t, n) {
  return t.getOptionValue(n);
};
function ns(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function rs(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Xn(e, t);
  return n.some(function(o) {
    return Xn(e, o) === r;
  });
}
function os(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var is = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, bg = 1, as = /* @__PURE__ */ function(e) {
  ju(n, e);
  var t = Qu(n);
  function n(r) {
    var o;
    if (Ju(this, n), o = t.call(this, r), o.state = {
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
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.controlRef = null, o.getControlRef = function(c) {
      o.controlRef = c;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(c) {
      o.focusedOptionRef = c;
    }, o.menuListRef = null, o.getMenuListRef = function(c) {
      o.menuListRef = c;
    }, o.inputRef = null, o.getInputRef = function(c) {
      o.inputRef = c;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(c, u) {
      var l = o.props, d = l.onChange, g = l.name;
      u.name = g, o.ariaOnChange(c, u), d(c, u);
    }, o.setValue = function(c, u, l) {
      var d = o.props, g = d.closeMenuOnSelect, p = d.isMulti, v = d.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: v
      }), g && (o.setState({
        inputIsHiddenAfterUpdate: !p
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(c, {
        action: u,
        option: l
      });
    }, o.selectOption = function(c) {
      var u = o.props, l = u.blurInputOnSelect, d = u.isMulti, g = u.name, p = o.state.selectValue, v = d && o.isOptionSelected(c, p), f = o.isOptionDisabled(c, p);
      if (v) {
        var m = o.getOptionValue(c);
        o.setValue(p.filter(function(b) {
          return o.getOptionValue(b) !== m;
        }), "deselect-option", c);
      } else if (!f)
        d ? o.setValue([].concat(to(p), [c]), "select-option", c) : o.setValue(c, "select-option");
      else {
        o.ariaOnChange(c, {
          action: "select-option",
          option: c,
          name: g
        });
        return;
      }
      l && o.blurInput();
    }, o.removeValue = function(c) {
      var u = o.props.isMulti, l = o.state.selectValue, d = o.getOptionValue(c), g = l.filter(function(v) {
        return o.getOptionValue(v) !== d;
      }), p = In(u, g, g[0] || null);
      o.onChange(p, {
        action: "remove-value",
        removedValue: c
      }), o.focusInput();
    }, o.clearValue = function() {
      var c = o.state.selectValue;
      o.onChange(In(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: c
      });
    }, o.popValue = function() {
      var c = o.props.isMulti, u = o.state.selectValue, l = u[u.length - 1], d = u.slice(0, u.length - 1), g = In(c, d, d[0] || null);
      l && o.onChange(g, {
        action: "pop-value",
        removedValue: l
      });
    }, o.getFocusedOptionId = function(c) {
      return hr(o.state.focusableOptionsWithIds, c);
    }, o.getFocusableOptionsWithIds = function() {
      return bi(Dn(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++)
        u[l] = arguments[l];
      return tf.apply(void 0, [o.props.classNamePrefix].concat(u));
    }, o.getOptionLabel = function(c) {
      return ts(o.props, c);
    }, o.getOptionValue = function(c) {
      return Xn(o.props, c);
    }, o.getStyles = function(c, u) {
      var l = o.props.unstyled, d = sg[c](u, l);
      d.boxSizing = "border-box";
      var g = o.props.styles[c];
      return g ? g(d, u) : d;
    }, o.getClassNames = function(c, u) {
      var l, d;
      return (l = (d = o.props.classNames)[c]) === null || l === void 0 ? void 0 : l.call(d, u);
    }, o.getElementId = function(c) {
      return "".concat(o.state.instancePrefix, "-").concat(c);
    }, o.getComponents = function() {
      return Em(o.props);
    }, o.buildCategorizedOptions = function() {
      return Dn(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return es(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(c, u) {
      o.setState({
        ariaSelection: j({
          value: c
        }, u)
      });
    }, o.onMenuMouseDown = function(c) {
      c.button === 0 && (c.stopPropagation(), c.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(c) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(c) {
      if (!c.defaultPrevented) {
        var u = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? c.target.tagName !== "INPUT" && c.target.tagName !== "TEXTAREA" && o.onMenuClose() : u && o.openMenu("first") : (u && (o.openAfterFocus = !0), o.focusInput()), c.target.tagName !== "INPUT" && c.target.tagName !== "TEXTAREA" && c.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(c) {
      if (!(c && c.type === "mousedown" && c.button !== 0) && !o.props.isDisabled) {
        var u = o.props, l = u.isMulti, d = u.menuIsOpen;
        o.focusInput(), d ? (o.setState({
          inputIsHiddenAfterUpdate: !l
        }), o.onMenuClose()) : o.openMenu("first"), c.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(c) {
      c && c.type === "mousedown" && c.button !== 0 || (o.clearValue(), c.preventDefault(), o.openAfterFocus = !1, c.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(c) {
      typeof o.props.closeMenuOnScroll == "boolean" ? c.target instanceof HTMLElement && Un(c.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(c) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(c) {
      var u = c.touches, l = u && u.item(0);
      l && (o.initialTouchX = l.clientX, o.initialTouchY = l.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(c) {
      var u = c.touches, l = u && u.item(0);
      if (l) {
        var d = Math.abs(l.clientX - o.initialTouchX), g = Math.abs(l.clientY - o.initialTouchY), p = 5;
        o.userIsDragging = d > p || g > p;
      }
    }, o.onTouchEnd = function(c) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(c.target) && o.menuListRef && !o.menuListRef.contains(c.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(c) {
      o.userIsDragging || o.onControlMouseDown(c);
    }, o.onClearIndicatorTouchEnd = function(c) {
      o.userIsDragging || o.onClearIndicatorMouseDown(c);
    }, o.onDropdownIndicatorTouchEnd = function(c) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(c);
    }, o.handleInputChange = function(c) {
      var u = o.props.inputValue, l = c.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(l, {
        action: "input-change",
        prevInputValue: u
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(c) {
      o.props.onFocus && o.props.onFocus(c), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(c) {
      var u = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(c), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: u
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(c) {
      if (!(o.blockOptionHover || o.state.focusedOption === c)) {
        var u = o.getFocusableOptions(), l = u.indexOf(c);
        o.setState({
          focusedOption: c,
          focusedOptionId: l > -1 ? o.getFocusedOptionId(c) : null
        });
      }
    }, o.shouldHideSelectedOptions = function() {
      return is(o.props);
    }, o.onValueInputFocus = function(c) {
      c.preventDefault(), c.stopPropagation(), o.focus();
    }, o.onKeyDown = function(c) {
      var u = o.props, l = u.isMulti, d = u.backspaceRemovesValue, g = u.escapeClearsValue, p = u.inputValue, v = u.isClearable, f = u.isDisabled, m = u.menuIsOpen, b = u.onKeyDown, I = u.tabSelectsValue, y = u.openMenuOnFocus, x = o.state, h = x.focusedOption, E = x.focusedValue, A = x.selectValue;
      if (!f && !(typeof b == "function" && (b(c), c.defaultPrevented))) {
        switch (o.blockOptionHover = !0, c.key) {
          case "ArrowLeft":
            if (!l || p) return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!l || p) return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (p) return;
            if (E)
              o.removeValue(E);
            else {
              if (!d) return;
              l ? o.popValue() : v && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || c.shiftKey || !m || !I || !h || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            y && o.isOptionSelected(h, A))
              return;
            o.selectOption(h);
            break;
          case "Enter":
            if (c.keyCode === 229)
              break;
            if (m) {
              if (!h || o.isComposing) return;
              o.selectOption(h);
              break;
            }
            return;
          case "Escape":
            m ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: p
            }), o.onMenuClose()) : v && g && o.clearValue();
            break;
          case " ":
            if (p)
              return;
            if (!m) {
              o.openMenu("first");
              break;
            }
            if (!h) return;
            o.selectOption(h);
            break;
          case "ArrowUp":
            m ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            m ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!m) return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!m) return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!m) return;
            o.focusOption("first");
            break;
          case "End":
            if (!m) return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        c.preventDefault();
      }
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++bg), o.state.selectValue = ni(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.getFocusableOptionsWithIds(), a = o.buildFocusableOptions(), s = a.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = i, o.state.focusedOption = a[s], o.state.focusedOptionId = hr(i, a[s]);
    }
    return o;
  }
  return _u(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && ri(this.menuListRef, this.focusedOptionRef), ng() && this.setState({
        isAppleDevice: !0
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var i = this.props, a = i.isDisabled, s = i.menuIsOpen, c = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (c && !a && o.isDisabled || // ensure focus is on the Input when the menu opens
      c && s && !o.menuIsOpen) && this.focusInput(), c && a && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !c && !a && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (ri(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
      var i = this, a = this.state, s = a.selectValue, c = a.isFocused, u = this.buildFocusableOptions(), l = o === "first" ? 0 : u.length - 1;
      if (!this.props.isMulti) {
        var d = u.indexOf(s[0]);
        d > -1 && (l = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(c && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: u[l],
        focusedOptionId: this.getFocusedOptionId(u[l])
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var i = this.state, a = i.selectValue, s = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var c = a.indexOf(s);
        s || (c = -1);
        var u = a.length - 1, l = -1;
        if (a.length) {
          switch (o) {
            case "previous":
              c === 0 ? l = 0 : c === -1 ? l = u : l = c - 1;
              break;
            case "next":
              c > -1 && c < u && (l = c + 1);
              break;
          }
          this.setState({
            inputIsHidden: l !== -1,
            focusedValue: a[l]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var c = 0, u = s.indexOf(a);
        a || (u = -1), o === "up" ? c = u > 0 ? u - 1 : s.length - 1 : o === "down" ? c = (u + 1) % s.length : o === "pageup" ? (c = u - i, c < 0 && (c = 0)) : o === "pagedown" ? (c = u + i, c > s.length - 1 && (c = s.length - 1)) : o === "last" && (c = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[c],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(s[c])
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(gr) : j(j({}, gr), this.props.theme) : gr;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, c = this.getValue, u = this.selectOption, l = this.setValue, d = this.props, g = d.isMulti, p = d.isRtl, v = d.options, f = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: c,
        hasValue: f,
        isMulti: g,
        isRtl: p,
        options: v,
        selectOption: u,
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
      var o = this.props, i = o.isClearable, a = o.isMulti;
      return i === void 0 ? a : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, i) {
      return ns(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return rs(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return os(this.props, o, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: i,
          inputValue: a,
          selectValue: s
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
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, c = o.inputValue, u = o.tabIndex, l = o.form, d = o.menuIsOpen, g = o.required, p = this.getComponents(), v = p.Input, f = this.state, m = f.inputIsHidden, b = f.ariaSelection, I = this.commonProps, y = s || this.getElementId("input"), x = j(j(j({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": g,
          role: "combobox",
          "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, d && {
          "aria-controls": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (b == null ? void 0 : b.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ C.createElement(v, U({}, I, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: y,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: m,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: l,
          type: "text",
          value: c
        }, x)) : /* @__PURE__ */ C.createElement(Xm, U({
          id: y,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Vn,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: u,
          inputMode: "none",
          form: l,
          value: ""
        }, x));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, c = i.MultiValueLabel, u = i.MultiValueRemove, l = i.SingleValue, d = i.Placeholder, g = this.commonProps, p = this.props, v = p.controlShouldRenderValue, f = p.isDisabled, m = p.isMulti, b = p.inputValue, I = p.placeholder, y = this.state, x = y.selectValue, h = y.focusedValue, E = y.isFocused;
      if (!this.hasValue() || !v)
        return b ? null : /* @__PURE__ */ C.createElement(d, U({}, g, {
          key: "placeholder",
          isDisabled: f,
          isFocused: E,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), I);
      if (m)
        return x.map(function(S, O) {
          var D = S === h, N = "".concat(o.getOptionLabel(S), "-").concat(o.getOptionValue(S));
          return /* @__PURE__ */ C.createElement(a, U({}, g, {
            components: {
              Container: s,
              Label: c,
              Remove: u
            },
            isFocused: D,
            isDisabled: f,
            key: N,
            index: O,
            removeProps: {
              onClick: function() {
                return o.removeValue(S);
              },
              onTouchEnd: function() {
                return o.removeValue(S);
              },
              onMouseDown: function(L) {
                L.preventDefault();
              }
            },
            data: S
          }), o.formatOptionLabel(S, "value"));
        });
      if (b)
        return null;
      var A = x[0];
      return /* @__PURE__ */ C.createElement(l, U({}, g, {
        data: A,
        isDisabled: f
      }), this.formatOptionLabel(A, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), i = o.ClearIndicator, a = this.commonProps, s = this.props, c = s.isDisabled, u = s.isLoading, l = this.state.isFocused;
      if (!this.isClearable() || !i || c || !this.hasValue() || u)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ C.createElement(i, U({}, a, {
        innerProps: d,
        isFocused: l
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), i = o.LoadingIndicator, a = this.commonProps, s = this.props, c = s.isDisabled, u = s.isLoading, l = this.state.isFocused;
      if (!i || !u) return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ C.createElement(i, U({}, a, {
        innerProps: d,
        isDisabled: c,
        isFocused: l
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator, a = o.IndicatorSeparator;
      if (!i || !a) return null;
      var s = this.commonProps, c = this.props.isDisabled, u = this.state.isFocused;
      return /* @__PURE__ */ C.createElement(a, U({}, s, {
        isDisabled: c,
        isFocused: u
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator;
      if (!i) return null;
      var a = this.commonProps, s = this.props.isDisabled, c = this.state.isFocused, u = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ C.createElement(i, U({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: c
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, c = i.Menu, u = i.MenuList, l = i.MenuPortal, d = i.LoadingMessage, g = i.NoOptionsMessage, p = i.Option, v = this.commonProps, f = this.state.focusedOption, m = this.props, b = m.captureMenuScroll, I = m.inputValue, y = m.isLoading, x = m.loadingMessage, h = m.minMenuHeight, E = m.maxMenuHeight, A = m.menuIsOpen, S = m.menuPlacement, O = m.menuPosition, D = m.menuPortalTarget, N = m.menuShouldBlockScroll, F = m.menuShouldScrollIntoView, L = m.noOptionsMessage, R = m.onMenuScrollToTop, P = m.onMenuScrollToBottom;
      if (!A) return null;
      var M = function(H, $) {
        var re = H.type, oe = H.data, Q = H.isDisabled, me = H.isSelected, ue = H.label, ie = H.value, pe = f === oe, W = Q ? void 0 : function() {
          return o.onOptionHover(oe);
        }, Ce = Q ? void 0 : function() {
          return o.selectOption(oe);
        }, Se = "".concat(o.getElementId("option"), "-").concat($), De = {
          id: Se,
          onClick: Ce,
          onMouseMove: W,
          onMouseOver: W,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.state.isAppleDevice ? void 0 : me
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ C.createElement(p, U({}, v, {
          innerProps: De,
          data: oe,
          isDisabled: Q,
          isSelected: me,
          key: Se,
          label: ue,
          type: re,
          value: ie,
          isFocused: pe,
          innerRef: pe ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(H.data, "menu"));
      }, G;
      if (this.hasOptions())
        G = this.getCategorizedOptions().map(function(Z) {
          if (Z.type === "group") {
            var H = Z.data, $ = Z.options, re = Z.index, oe = "".concat(o.getElementId("group"), "-").concat(re), Q = "".concat(oe, "-heading");
            return /* @__PURE__ */ C.createElement(a, U({}, v, {
              key: oe,
              data: H,
              options: $,
              Heading: s,
              headingProps: {
                id: Q,
                data: Z.data
              },
              label: o.formatGroupLabel(Z.data)
            }), Z.options.map(function(me) {
              return M(me, "".concat(re, "-").concat(me.index));
            }));
          } else if (Z.type === "option")
            return M(Z, "".concat(Z.index));
        });
      else if (y) {
        var w = x({
          inputValue: I
        });
        if (w === null) return null;
        G = /* @__PURE__ */ C.createElement(d, v, w);
      } else {
        var k = L({
          inputValue: I
        });
        if (k === null) return null;
        G = /* @__PURE__ */ C.createElement(g, v, k);
      }
      var T = {
        minMenuHeight: h,
        maxMenuHeight: E,
        menuPlacement: S,
        menuPosition: O,
        menuShouldScrollIntoView: F
      }, z = /* @__PURE__ */ C.createElement(vf, U({}, v, T), function(Z) {
        var H = Z.ref, $ = Z.placerProps, re = $.placement, oe = $.maxHeight;
        return /* @__PURE__ */ C.createElement(c, U({}, v, T, {
          innerRef: H,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: y,
          placement: re
        }), /* @__PURE__ */ C.createElement(jm, {
          captureEnabled: b,
          onTopArrive: R,
          onBottomArrive: P,
          lockEnabled: N
        }, function(Q) {
          return /* @__PURE__ */ C.createElement(u, U({}, v, {
            innerRef: function(ue) {
              o.getMenuListRef(ue), Q(ue);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": v.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: y,
            maxHeight: oe,
            focusedOption: f
          }), G);
        }));
      });
      return D || O === "fixed" ? /* @__PURE__ */ C.createElement(l, U({}, v, {
        appendTo: D,
        controlElement: this.controlRef,
        menuPlacement: S,
        menuPosition: O
      }), z) : z;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, a = i.delimiter, s = i.isDisabled, c = i.isMulti, u = i.name, l = i.required, d = this.state.selectValue;
      if (l && !this.hasValue() && !s)
        return /* @__PURE__ */ C.createElement(Km, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (c)
          if (a) {
            var g = d.map(function(f) {
              return o.getOptionValue(f);
            }).join(a);
            return /* @__PURE__ */ C.createElement("input", {
              name: u,
              type: "hidden",
              value: g
            });
          } else {
            var p = d.length > 0 ? d.map(function(f, m) {
              return /* @__PURE__ */ C.createElement("input", {
                key: "i-".concat(m),
                name: u,
                type: "hidden",
                value: o.getOptionValue(f)
              });
            }) : /* @__PURE__ */ C.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ C.createElement("div", null, p);
          }
        else {
          var v = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ C.createElement("input", {
            name: u,
            type: "hidden",
            value: v
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, a = i.ariaSelection, s = i.focusedOption, c = i.focusedValue, u = i.isFocused, l = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ C.createElement(Fm, U({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: c,
        isFocused: u,
        selectValue: l,
        focusableOptions: d,
        isAppleDevice: this.state.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, c = o.ValueContainer, u = this.props, l = u.className, d = u.id, g = u.isDisabled, p = u.menuIsOpen, v = this.state.isFocused, f = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ C.createElement(s, U({}, f, {
        className: l,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: g,
        isFocused: v
      }), this.renderLiveRegion(), /* @__PURE__ */ C.createElement(i, U({}, f, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: g,
        isFocused: v,
        menuIsOpen: p
      }), /* @__PURE__ */ C.createElement(c, U({}, f, {
        isDisabled: g
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ C.createElement(a, U({}, f, {
        isDisabled: g
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, c = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, l = i.isFocused, d = i.prevWasFocused, g = i.instancePrefix, p = o.options, v = o.value, f = o.menuIsOpen, m = o.inputValue, b = o.isMulti, I = ni(v), y = {};
      if (a && (v !== a.value || p !== a.options || f !== a.menuIsOpen || m !== a.inputValue)) {
        var x = f ? gg(o, I) : [], h = f ? bi(Dn(o, I), "".concat(g, "-option")) : [], E = s ? hg(i, I) : null, A = pg(i, x), S = hr(h, A);
        y = {
          selectValue: I,
          focusedOption: A,
          focusedOptionId: S,
          focusableOptionsWithIds: h,
          focusedValue: E,
          clearFocusValueOnUpdate: !1
        };
      }
      var O = c != null && o !== a ? {
        inputIsHidden: c,
        inputIsHiddenAfterUpdate: void 0
      } : {}, D = u, N = l && d;
      return l && !N && (D = {
        value: In(b, I, I[0] || null),
        options: I,
        action: "initial-input-focus"
      }, N = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (D = null), j(j(j({}, y), O), {}, {
        prevProps: o,
        ariaSelection: D,
        prevWasFocused: N
      });
    }
  }]), n;
}(Zc);
as.defaultProps = mg;
var vg = /* @__PURE__ */ Zi(function(e, t) {
  var n = zu(e);
  return /* @__PURE__ */ C.createElement(as, U({
    ref: t
  }, n));
}), yg = vg;
const te = {
  colors: {
    primary: "#E83A7A",
    "primary-foreground": "#FFFFFF",
    secondary: "#00B2EC",
    "secondary-foreground": "#FFFFFF",
    accent: "#F3F4F6",
    "accent-foreground": "#1F2937",
    // New/updated colors for Input
    border: "#E8ECEE",
    focus: "#09327B",
    // for hover and focus
    destructive: "#E82C78",
    // for error
    label: "#153171",
    placeholder: "#616161",
    // Disabled state colors
    disabled: "#9CA3AF",
    // text
    "disabled-border": "#E5E7EB",
    "disabled-background": "#F3F4F6"
  },
  borderRadius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    medium: "16px",
    lg: "18px",
    xl: "20px"
  },
  fontWeights: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  componentHeight: {
    sm: "40px",
    md: "48px",
    lg: "56px"
  }
}, X0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  theme: te
}, Symbol.toStringTag, { value: "Module" })), Cg = (e) => /* @__PURE__ */ B($a.DropdownIndicator, { ...e, children: /* @__PURE__ */ B(_c, { className: "h-4 w-4 text-gray-500" }) }), Ig = {
  sm: { minHeight: te.componentHeight.sm, fontSize: te.fontSize.sm },
  md: { minHeight: te.componentHeight.md, fontSize: te.fontSize.base },
  lg: { minHeight: te.componentHeight.lg, fontSize: te.fontSize.lg }
}, xg = C.forwardRef(
  ({
    className: e,
    containerClassName: t,
    label: n,
    errorMessage: r,
    isInvalid: o,
    placeholder: i = "Select Option",
    size: a = "md",
    floating: s = !0,
    isDisabled: c,
    onFocus: u,
    onBlur: l,
    ...d
  }, g) => {
    const p = C.useId(), v = o || !!r, f = Ig[a], [m, b] = Be(!1), I = d.value || d.defaultValue, y = Array.isArray(I) ? I.length > 0 : !!I, x = s && (m || y), h = (O) => {
      b(!0), u == null || u(O);
    }, E = (O) => {
      b(!1), l == null || l(O);
    }, A = c ? "text-disabled" : v ? "text-destructive" : x ? m ? "text-focus" : "text-label" : "text-placeholder", S = {
      control: (O, D) => ({
        ...O,
        minHeight: f.minHeight,
        borderRadius: te.borderRadius.md,
        borderColor: D.isDisabled ? te.colors["disabled-border"] : v ? te.colors.destructive : D.isFocused ? te.colors.focus : te.colors.border,
        boxShadow: "none",
        "&:hover": {
          borderColor: v ? te.colors.destructive : te.colors.focus
        },
        backgroundColor: D.isDisabled ? te.colors["disabled-background"] : te.colors["primary-foreground"],
        // white
        color: te.colors.label,
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        fontSize: f.fontSize
      }),
      valueContainer: (O) => ({
        ...O,
        padding: "0"
      }),
      input: (O) => ({
        ...O,
        color: te.colors.label,
        margin: "0",
        padding: "0",
        fontSize: f.fontSize
      }),
      placeholder: (O, D) => ({
        ...O,
        color: D.isDisabled ? te.colors.disabled : "#C3C7C8",
        fontWeight: te.fontWeights.light,
        fontSize: f.fontSize,
        display: x ? "block" : "none"
      }),
      singleValue: (O, D) => ({
        ...O,
        color: D.isDisabled ? te.colors.disabled : te.colors.label,
        fontSize: f.fontSize
      }),
      indicatorSeparator: (O) => ({
        ...O,
        display: "none"
      }),
      dropdownIndicator: (O, D) => ({
        ...O,
        color: te.colors.placeholder,
        transition: "transform 0.2s ease",
        transform: D.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        padding: "0"
      }),
      menu: (O) => ({
        ...O,
        borderRadius: te.borderRadius.md,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        // shadow-md
        marginTop: "0.5rem",
        // mt-2
        backgroundColor: te.colors["primary-foreground"],
        // white
        zIndex: 9999
      }),
      option: (O, D) => ({
        ...O,
        backgroundColor: D.isSelected ? te.colors.accent : "transparent",
        color: D.isSelected ? te.colors["accent-foreground"] : te.colors.label,
        "&:active": {
          backgroundColor: te.colors.accent
        },
        cursor: "pointer",
        padding: "0.5rem 0.75rem",
        // py-2 px-3
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: f.fontSize,
        borderRadius: te.borderRadius.md,
        boxShadow: D.isFocused ? `inset 0 0 0 1px ${te.colors.focus}` : "none"
      }),
      multiValue: (O) => ({
        ...O,
        backgroundColor: te.colors.secondary,
        borderRadius: te.borderRadius.sm
      }),
      multiValueLabel: (O, D) => ({
        ...O,
        color: D.isDisabled ? te.colors.disabled : te.colors["secondary-foreground"]
      }),
      multiValueRemove: (O) => ({
        ...O,
        color: te.colors["secondary-foreground"],
        "&:hover": {
          backgroundColor: te.colors.secondary,
          color: te.colors.destructive
        }
      })
    };
    return /* @__PURE__ */ $e("div", { className: q("w-full", t), children: [
      /* @__PURE__ */ $e("div", { className: "relative group", "data-floating": x, children: [
        /* @__PURE__ */ B(
          yg,
          {
            ref: g,
            id: p,
            className: q("w-full", e),
            styles: S,
            components: {
              DropdownIndicator: Cg
            },
            placeholder: x ? i : "",
            onFocus: h,
            onBlur: E,
            isDisabled: c,
            ...d
          }
        ),
        n && s && /* @__PURE__ */ B(
          "label",
          {
            htmlFor: p,
            className: q(
              "absolute left-3 z-10 origin-[0] transform px-1 duration-300",
              "top-1/2 -translate-y-1/2",
              x ? ca[a] : ua[a],
              "group-data-[floating=true]:top-0 group-data-[floating=true]:-translate-y-1/2 group-data-[floating=true]:scale-75",
              x && (c ? "bg-disabled-background" : "bg-white"),
              A
            ),
            children: n
          }
        )
      ] }),
      v && r && /* @__PURE__ */ B("p", { className: "mt-1 text-sm text-destructive", children: r })
    ] });
  }
);
xg.displayName = "Select";
var ss = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(io, function() {
    var n = 1e3, r = 6e4, o = 36e5, i = "millisecond", a = "second", s = "minute", c = "hour", u = "day", l = "week", d = "month", g = "quarter", p = "year", v = "date", f = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var P = ["th", "st", "nd", "rd"], M = R % 100;
      return "[" + R + (P[(M - 20) % 10] || P[M] || P[0]) + "]";
    } }, y = function(R, P, M) {
      var G = String(R);
      return !G || G.length >= P ? R : "" + Array(P + 1 - G.length).join(M) + R;
    }, x = { s: y, z: function(R) {
      var P = -R.utcOffset(), M = Math.abs(P), G = Math.floor(M / 60), w = M % 60;
      return (P <= 0 ? "+" : "-") + y(G, 2, "0") + ":" + y(w, 2, "0");
    }, m: function R(P, M) {
      if (P.date() < M.date()) return -R(M, P);
      var G = 12 * (M.year() - P.year()) + (M.month() - P.month()), w = P.clone().add(G, d), k = M - w < 0, T = P.clone().add(G + (k ? -1 : 1), d);
      return +(-(G + (M - w) / (k ? w - T : T - w)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: d, y: p, w: l, d: u, D: v, h: c, m: s, s: a, ms: i, Q: g }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, h = "en", E = {};
    E[h] = I;
    var A = "$isDayjsObject", S = function(R) {
      return R instanceof F || !(!R || !R[A]);
    }, O = function R(P, M, G) {
      var w;
      if (!P) return h;
      if (typeof P == "string") {
        var k = P.toLowerCase();
        E[k] && (w = k), M && (E[k] = M, w = k);
        var T = P.split("-");
        if (!w && T.length > 1) return R(T[0]);
      } else {
        var z = P.name;
        E[z] = P, w = z;
      }
      return !G && w && (h = w), w || !G && h;
    }, D = function(R, P) {
      if (S(R)) return R.clone();
      var M = typeof P == "object" ? P : {};
      return M.date = R, M.args = arguments, new F(M);
    }, N = x;
    N.l = O, N.i = S, N.w = function(R, P) {
      return D(R, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
    };
    var F = function() {
      function R(M) {
        this.$L = O(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[A] = !0;
      }
      var P = R.prototype;
      return P.parse = function(M) {
        this.$d = function(G) {
          var w = G.date, k = G.utc;
          if (w === null) return /* @__PURE__ */ new Date(NaN);
          if (N.u(w)) return /* @__PURE__ */ new Date();
          if (w instanceof Date) return new Date(w);
          if (typeof w == "string" && !/Z$/i.test(w)) {
            var T = w.match(m);
            if (T) {
              var z = T[2] - 1 || 0, Z = (T[7] || "0").substring(0, 3);
              return k ? new Date(Date.UTC(T[1], z, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, Z)) : new Date(T[1], z, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, Z);
            }
          }
          return new Date(w);
        }(M), this.init();
      }, P.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, P.$utils = function() {
        return N;
      }, P.isValid = function() {
        return this.$d.toString() !== f;
      }, P.isSame = function(M, G) {
        var w = D(M);
        return this.startOf(G) <= w && w <= this.endOf(G);
      }, P.isAfter = function(M, G) {
        return D(M) < this.startOf(G);
      }, P.isBefore = function(M, G) {
        return this.endOf(G) < D(M);
      }, P.$g = function(M, G, w) {
        return N.u(M) ? this[G] : this.set(w, M);
      }, P.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, P.valueOf = function() {
        return this.$d.getTime();
      }, P.startOf = function(M, G) {
        var w = this, k = !!N.u(G) || G, T = N.p(M), z = function(ue, ie) {
          var pe = N.w(w.$u ? Date.UTC(w.$y, ie, ue) : new Date(w.$y, ie, ue), w);
          return k ? pe : pe.endOf(u);
        }, Z = function(ue, ie) {
          return N.w(w.toDate()[ue].apply(w.toDate("s"), (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ie)), w);
        }, H = this.$W, $ = this.$M, re = this.$D, oe = "set" + (this.$u ? "UTC" : "");
        switch (T) {
          case p:
            return k ? z(1, 0) : z(31, 11);
          case d:
            return k ? z(1, $) : z(0, $ + 1);
          case l:
            var Q = this.$locale().weekStart || 0, me = (H < Q ? H + 7 : H) - Q;
            return z(k ? re - me : re + (6 - me), $);
          case u:
          case v:
            return Z(oe + "Hours", 0);
          case c:
            return Z(oe + "Minutes", 1);
          case s:
            return Z(oe + "Seconds", 2);
          case a:
            return Z(oe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, P.endOf = function(M) {
        return this.startOf(M, !1);
      }, P.$set = function(M, G) {
        var w, k = N.p(M), T = "set" + (this.$u ? "UTC" : ""), z = (w = {}, w[u] = T + "Date", w[v] = T + "Date", w[d] = T + "Month", w[p] = T + "FullYear", w[c] = T + "Hours", w[s] = T + "Minutes", w[a] = T + "Seconds", w[i] = T + "Milliseconds", w)[k], Z = k === u ? this.$D + (G - this.$W) : G;
        if (k === d || k === p) {
          var H = this.clone().set(v, 1);
          H.$d[z](Z), H.init(), this.$d = H.set(v, Math.min(this.$D, H.daysInMonth())).$d;
        } else z && this.$d[z](Z);
        return this.init(), this;
      }, P.set = function(M, G) {
        return this.clone().$set(M, G);
      }, P.get = function(M) {
        return this[N.p(M)]();
      }, P.add = function(M, G) {
        var w, k = this;
        M = Number(M);
        var T = N.p(G), z = function($) {
          var re = D(k);
          return N.w(re.date(re.date() + Math.round($ * M)), k);
        };
        if (T === d) return this.set(d, this.$M + M);
        if (T === p) return this.set(p, this.$y + M);
        if (T === u) return z(1);
        if (T === l) return z(7);
        var Z = (w = {}, w[s] = r, w[c] = o, w[a] = n, w)[T] || 1, H = this.$d.getTime() + M * Z;
        return N.w(H, this);
      }, P.subtract = function(M, G) {
        return this.add(-1 * M, G);
      }, P.format = function(M) {
        var G = this, w = this.$locale();
        if (!this.isValid()) return w.invalidDate || f;
        var k = M || "YYYY-MM-DDTHH:mm:ssZ", T = N.z(this), z = this.$H, Z = this.$m, H = this.$M, $ = w.weekdays, re = w.months, oe = w.meridiem, Q = function(ie, pe, W, Ce) {
          return ie && (ie[pe] || ie(G, k)) || W[pe].slice(0, Ce);
        }, me = function(ie) {
          return N.s(z % 12 || 12, ie, "0");
        }, ue = oe || function(ie, pe, W) {
          var Ce = ie < 12 ? "AM" : "PM";
          return W ? Ce.toLowerCase() : Ce;
        };
        return k.replace(b, function(ie, pe) {
          return pe || function(W) {
            switch (W) {
              case "YY":
                return String(G.$y).slice(-2);
              case "YYYY":
                return N.s(G.$y, 4, "0");
              case "M":
                return H + 1;
              case "MM":
                return N.s(H + 1, 2, "0");
              case "MMM":
                return Q(w.monthsShort, H, re, 3);
              case "MMMM":
                return Q(re, H);
              case "D":
                return G.$D;
              case "DD":
                return N.s(G.$D, 2, "0");
              case "d":
                return String(G.$W);
              case "dd":
                return Q(w.weekdaysMin, G.$W, $, 2);
              case "ddd":
                return Q(w.weekdaysShort, G.$W, $, 3);
              case "dddd":
                return $[G.$W];
              case "H":
                return String(z);
              case "HH":
                return N.s(z, 2, "0");
              case "h":
                return me(1);
              case "hh":
                return me(2);
              case "a":
                return ue(z, Z, !0);
              case "A":
                return ue(z, Z, !1);
              case "m":
                return String(Z);
              case "mm":
                return N.s(Z, 2, "0");
              case "s":
                return String(G.$s);
              case "ss":
                return N.s(G.$s, 2, "0");
              case "SSS":
                return N.s(G.$ms, 3, "0");
              case "Z":
                return T;
            }
            return null;
          }(ie) || T.replace(":", "");
        });
      }, P.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, P.diff = function(M, G, w) {
        var k, T = this, z = N.p(G), Z = D(M), H = (Z.utcOffset() - this.utcOffset()) * r, $ = this - Z, re = function() {
          return N.m(T, Z);
        };
        switch (z) {
          case p:
            k = re() / 12;
            break;
          case d:
            k = re();
            break;
          case g:
            k = re() / 3;
            break;
          case l:
            k = ($ - H) / 6048e5;
            break;
          case u:
            k = ($ - H) / 864e5;
            break;
          case c:
            k = $ / o;
            break;
          case s:
            k = $ / r;
            break;
          case a:
            k = $ / n;
            break;
          default:
            k = $;
        }
        return w ? k : N.a(k);
      }, P.daysInMonth = function() {
        return this.endOf(d).$D;
      }, P.$locale = function() {
        return E[this.$L];
      }, P.locale = function(M, G) {
        if (!M) return this.$L;
        var w = this.clone(), k = O(M, G, !0);
        return k && (w.$L = k), w;
      }, P.clone = function() {
        return N.w(this.$d, this);
      }, P.toDate = function() {
        return new Date(this.valueOf());
      }, P.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, P.toISOString = function() {
        return this.$d.toISOString();
      }, P.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), L = F.prototype;
    return D.prototype = L, [["$ms", i], ["$s", a], ["$m", s], ["$H", c], ["$W", u], ["$M", d], ["$y", p], ["$D", v]].forEach(function(R) {
      L[R[1]] = function(P) {
        return this.$g(P, R[0], R[1]);
      };
    }), D.extend = function(R, P) {
      return R.$i || (R(P, F, D), R.$i = !0), D;
    }, D.locale = O, D.isDayjs = S, D.unix = function(R) {
      return D(1e3 * R);
    }, D.en = E[h], D.Ls = E, D.p = {}, D;
  });
})(ss);
var wg = ss.exports;
const Jt = /* @__PURE__ */ ao(wg);
var cs = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(io, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d/, i = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, c = {}, u = function(m) {
      return (m = +m) + (m > 68 ? 1900 : 2e3);
    }, l = function(m) {
      return function(b) {
        this[m] = +b;
      };
    }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z") return 0;
        var I = b.match(/([+-]|\d\d)/g), y = 60 * I[1] + (+I[2] || 0);
        return y === 0 ? 0 : I[0] === "+" ? -y : y;
      }(m);
    }], g = function(m) {
      var b = c[m];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, p = function(m, b) {
      var I, y = c.meridiem;
      if (y) {
        for (var x = 1; x <= 24; x += 1) if (m.indexOf(y(x, 0, b)) > -1) {
          I = x > 12;
          break;
        }
      } else I = m === (b ? "pm" : "PM");
      return I;
    }, v = { A: [s, function(m) {
      this.afternoon = p(m, !1);
    }], a: [s, function(m) {
      this.afternoon = p(m, !0);
    }], Q: [o, function(m) {
      this.month = 3 * (m - 1) + 1;
    }], S: [o, function(m) {
      this.milliseconds = 100 * +m;
    }], SS: [i, function(m) {
      this.milliseconds = 10 * +m;
    }], SSS: [/\d{3}/, function(m) {
      this.milliseconds = +m;
    }], s: [a, l("seconds")], ss: [a, l("seconds")], m: [a, l("minutes")], mm: [a, l("minutes")], H: [a, l("hours")], h: [a, l("hours")], HH: [a, l("hours")], hh: [a, l("hours")], D: [a, l("day")], DD: [i, l("day")], Do: [s, function(m) {
      var b = c.ordinal, I = m.match(/\d+/);
      if (this.day = I[0], b) for (var y = 1; y <= 31; y += 1) b(y).replace(/\[|\]/g, "") === m && (this.day = y);
    }], w: [a, l("week")], ww: [i, l("week")], M: [a, l("month")], MM: [i, l("month")], MMM: [s, function(m) {
      var b = g("months"), I = (g("monthsShort") || b.map(function(y) {
        return y.slice(0, 3);
      })).indexOf(m) + 1;
      if (I < 1) throw new Error();
      this.month = I % 12 || I;
    }], MMMM: [s, function(m) {
      var b = g("months").indexOf(m) + 1;
      if (b < 1) throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, l("year")], YY: [i, function(m) {
      this.year = u(m);
    }], YYYY: [/\d{4}/, l("year")], Z: d, ZZ: d };
    function f(m) {
      var b, I;
      b = m, I = c && c.formats;
      for (var y = (m = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(D, N, F) {
        var L = F && F.toUpperCase();
        return N || I[F] || n[F] || I[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, P, M) {
          return P || M.slice(1);
        });
      })).match(r), x = y.length, h = 0; h < x; h += 1) {
        var E = y[h], A = v[E], S = A && A[0], O = A && A[1];
        y[h] = O ? { regex: S, parser: O } : E.replace(/^\[|\]$/g, "");
      }
      return function(D) {
        for (var N = {}, F = 0, L = 0; F < x; F += 1) {
          var R = y[F];
          if (typeof R == "string") L += R.length;
          else {
            var P = R.regex, M = R.parser, G = D.slice(L), w = P.exec(G)[0];
            M.call(N, w), D = D.replace(w, "");
          }
        }
        return function(k) {
          var T = k.afternoon;
          if (T !== void 0) {
            var z = k.hours;
            T ? z < 12 && (k.hours += 12) : z === 12 && (k.hours = 0), delete k.afternoon;
          }
        }(N), N;
      };
    }
    return function(m, b, I) {
      I.p.customParseFormat = !0, m && m.parseTwoDigitYear && (u = m.parseTwoDigitYear);
      var y = b.prototype, x = y.parse;
      y.parse = function(h) {
        var E = h.date, A = h.utc, S = h.args;
        this.$u = A;
        var O = S[1];
        if (typeof O == "string") {
          var D = S[2] === !0, N = S[3] === !0, F = D || N, L = S[2];
          N && (L = S[2]), c = this.$locale(), !D && L && (c = I.Ls[L]), this.$d = function(G, w, k, T) {
            try {
              if (["x", "X"].indexOf(w) > -1) return new Date((w === "X" ? 1e3 : 1) * G);
              var z = f(w)(G), Z = z.year, H = z.month, $ = z.day, re = z.hours, oe = z.minutes, Q = z.seconds, me = z.milliseconds, ue = z.zone, ie = z.week, pe = /* @__PURE__ */ new Date(), W = $ || (Z || H ? 1 : pe.getDate()), Ce = Z || pe.getFullYear(), Se = 0;
              Z && !H || (Se = H > 0 ? H - 1 : pe.getMonth());
              var De, yt = re || 0, Ct = oe || 0, It = Q || 0, He = me || 0;
              return ue ? new Date(Date.UTC(Ce, Se, W, yt, Ct, It, He + 60 * ue.offset * 1e3)) : k ? new Date(Date.UTC(Ce, Se, W, yt, Ct, It, He)) : (De = new Date(Ce, Se, W, yt, Ct, It, He), ie && (De = T(De).week(ie).toDate()), De);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(E, O, A, I), this.init(), L && L !== !0 && (this.$L = this.locale(L).$L), F && E != this.format(O) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
        } else if (O instanceof Array) for (var R = O.length, P = 1; P <= R; P += 1) {
          S[1] = O[P - 1];
          var M = I.apply(this, S);
          if (M.isValid()) {
            this.$d = M.$d, this.$L = M.$L, this.init();
            break;
          }
          P === R && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else x.call(this, h);
      };
    };
  });
})(cs);
var Ag = cs.exports;
const Sg = /* @__PURE__ */ ao(Ag);
var us = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(io, function() {
    var n = "minute", r = /[+-]\d\d(?::?\d\d)?/g, o = /([+-]|\d\d)/g;
    return function(i, a, s) {
      var c = a.prototype;
      s.utc = function(f) {
        var m = { date: f, utc: !0, args: arguments };
        return new a(m);
      }, c.utc = function(f) {
        var m = s(this.toDate(), { locale: this.$L, utc: !0 });
        return f ? m.add(this.utcOffset(), n) : m;
      }, c.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var u = c.parse;
      c.parse = function(f) {
        f.utc && (this.$u = !0), this.$utils().u(f.$offset) || (this.$offset = f.$offset), u.call(this, f);
      };
      var l = c.init;
      c.init = function() {
        if (this.$u) {
          var f = this.$d;
          this.$y = f.getUTCFullYear(), this.$M = f.getUTCMonth(), this.$D = f.getUTCDate(), this.$W = f.getUTCDay(), this.$H = f.getUTCHours(), this.$m = f.getUTCMinutes(), this.$s = f.getUTCSeconds(), this.$ms = f.getUTCMilliseconds();
        } else l.call(this);
      };
      var d = c.utcOffset;
      c.utcOffset = function(f, m) {
        var b = this.$utils().u;
        if (b(f)) return this.$u ? 0 : b(this.$offset) ? d.call(this) : this.$offset;
        if (typeof f == "string" && (f = function(h) {
          h === void 0 && (h = "");
          var E = h.match(r);
          if (!E) return null;
          var A = ("" + E[0]).match(o) || ["-", 0, 0], S = A[0], O = 60 * +A[1] + +A[2];
          return O === 0 ? 0 : S === "+" ? O : -O;
        }(f), f === null)) return this;
        var I = Math.abs(f) <= 16 ? 60 * f : f;
        if (I === 0) return this.utc(m);
        var y = this.clone();
        if (m) return y.$offset = I, y.$u = !1, y;
        var x = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return (y = this.local().add(I + x, n)).$offset = I, y.$x.$localOffset = x, y;
      };
      var g = c.format;
      c.format = function(f) {
        var m = f || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return g.call(this, m);
      }, c.valueOf = function() {
        var f = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * f;
      }, c.isUTC = function() {
        return !!this.$u;
      }, c.toISOString = function() {
        return this.toDate().toISOString();
      }, c.toString = function() {
        return this.toDate().toUTCString();
      };
      var p = c.toDate;
      c.toDate = function(f) {
        return f === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : p.call(this);
      };
      var v = c.diff;
      c.diff = function(f, m, b) {
        if (f && this.$u === f.$u) return v.call(this, f, m, b);
        var I = this.local(), y = s(f).local();
        return v.call(I, y, m, b);
      };
    };
  });
})(us);
var Eg = us.exports;
const Mg = /* @__PURE__ */ ao(Eg);
Jt.extend(Sg);
Jt.extend(Mg);
const ls = "DD-MM-YYYY", H0 = "YYYY-MM-DD", L0 = "DD-MM-YYYY HH:mm:ss", Z0 = "YYYY-MM-DDTHH:mm:ssZ", pr = (e, t = ls) => Jt(e).format(t), z0 = (e) => Jt(e).utc(), Og = (e) => Jt(e).isValid(), Pg = (e, t = ls) => Jt(e, t), br = (e) => e.replace(/dd/g, "DD").replace(/d/g, "D").replace(/yyyy/g, "YYYY").replace(/yy/g, "YY"), Dg = C.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    label: r = "",
    onBlur: o,
    onFocus: i,
    className: a,
    onKeyDown: s,
    format: c = "dd-MM-yyyy",
    minDate: u,
    maxDate: l,
    ...d
  }, g) => {
    const p = C.useId(), [v, f] = C.useState(!1), [m, b] = C.useState(n), I = e !== void 0, y = I ? e : m, [x, h] = C.useState(y), [E, A] = C.useState(
      y ? pr(y, br(c)) : ""
    );
    C.useEffect(() => {
      A(y ? pr(y, br(c)) : "");
    }, [y, c]);
    const S = (F) => {
      I || b(F), t == null || t(F), f(!1);
    };
    return /* @__PURE__ */ B("div", { className: "flex w-full flex-col gap-1.5", children: /* @__PURE__ */ $e("div", { className: "relative", children: [
      /* @__PURE__ */ B(
        la,
        {
          ...d,
          ref: g,
          id: p,
          label: r,
          value: E,
          onChange: (F) => {
            A(F.target.value);
          },
          onBlur: (F) => {
            const L = br(c), R = Pg(F.target.value, L);
            Og(R.toDate()) ? (I || b(R.toDate()), t == null || t(R.toDate()), h(R.toDate())) : F.target.value === "" ? (I || b(void 0), t == null || t(void 0)) : A(y ? pr(y, L) : ""), o == null || o(F);
          },
          onFocus: (F) => {
            f(!0), i == null || i(F);
          },
          className: q("pr-12", a),
          onKeyDown: (F) => {
            F.key === "ArrowDown" && (F.preventDefault(), f(!0)), s == null || s(F);
          }
        }
      ),
      /* @__PURE__ */ B("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ $e(Pp, { open: v, onOpenChange: f, children: [
        /* @__PURE__ */ B(Dp, { children: /* @__PURE__ */ B(jc, { className: "size-6", color: "#CCD2D6" }) }),
        /* @__PURE__ */ B(
          Ks,
          {
            className: "w-auto overflow-hidden p-0",
            align: "end",
            alignOffset: -8,
            sideOffset: 10,
            children: /* @__PURE__ */ B(
              G0,
              {
                mode: "single",
                selected: y,
                onSelect: S,
                month: x,
                onMonthChange: h,
                captionLayout: "dropdown",
                fromYear: (u == null ? void 0 : u.getFullYear()) ?? 1900,
                toYear: (l == null ? void 0 : l.getFullYear()) ?? 2100,
                disabled: { before: u, after: l }
              }
            )
          }
        )
      ] }) })
    ] }) });
  }
);
Dg.displayName = "Datepicker";
function mt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function ds(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = C.createContext(a), c = n.length;
    n = [...n, a];
    const u = (d) => {
      var b;
      const { scope: g, children: p, ...v } = d, f = ((b = g == null ? void 0 : g[e]) == null ? void 0 : b[c]) || s, m = C.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ B(f.Provider, { value: m, children: p });
    };
    u.displayName = i + "Provider";
    function l(d, g) {
      var f;
      const p = ((f = g == null ? void 0 : g[e]) == null ? void 0 : f[c]) || s, v = C.useContext(p);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, l];
  }
  const o = () => {
    const i = n.map((a) => C.createContext(a));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || i;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, Rg(o, ...t)];
}
function Rg(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: u }) => {
        const d = c(i)[`__scope${u}`];
        return { ...s, ...d };
      }, {});
      return C.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Gg = [
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
], et = Gg.reduce((e, t) => {
  const n = /* @__PURE__ */ qr(`Primitive.${t}`), r = C.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ B(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function kg(e, t) {
  e && Ji.flushSync(() => e.dispatchEvent(t));
}
function Bt(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }), C.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ng(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Bt(e);
  C.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Fg = "DismissableLayer", _r = "dismissableLayer.update", Tg = "dismissableLayer.pointerDownOutside", Wg = "dismissableLayer.focusOutside", yi, fs = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ms = C.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, u = C.useContext(fs), [l, d] = C.useState(null), g = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = C.useState({}), v = bt(t, (A) => d(A)), f = Array.from(u.layers), [m] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = f.indexOf(m), I = l ? f.indexOf(l) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = I >= b, h = Yg((A) => {
      const S = A.target, O = [...u.branches].some((D) => D.contains(S));
      !x || O || (o == null || o(A), a == null || a(A), A.defaultPrevented || s == null || s());
    }, g), E = Xg((A) => {
      const S = A.target;
      [...u.branches].some((D) => D.contains(S)) || (i == null || i(A), a == null || a(A), A.defaultPrevented || s == null || s());
    }, g);
    return Ng((A) => {
      I === u.layers.size - 1 && (r == null || r(A), !A.defaultPrevented && s && (A.preventDefault(), s()));
    }, g), C.useEffect(() => {
      if (l)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (yi = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), Ci(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = yi);
        };
    }, [l, g, n, u]), C.useEffect(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), Ci());
    }, [l, u]), C.useEffect(() => {
      const A = () => p({});
      return document.addEventListener(_r, A), () => document.removeEventListener(_r, A);
    }, []), /* @__PURE__ */ B(
      et.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: y ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: mt(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: mt(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: mt(
          e.onPointerDownCapture,
          h.onPointerDownCapture
        )
      }
    );
  }
);
ms.displayName = Fg;
var Bg = "DismissableLayerBranch", Vg = C.forwardRef((e, t) => {
  const n = C.useContext(fs), r = C.useRef(null), o = bt(t, r);
  return C.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ B(et.div, { ...e, ref: o });
});
Vg.displayName = Bg;
function Yg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Bt(e), r = C.useRef(!1), o = C.useRef(() => {
  });
  return C.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          gs(
            Tg,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Xg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Bt(e), r = C.useRef(!1);
  return C.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && gs(Wg, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ci() {
  const e = new CustomEvent(_r);
  document.dispatchEvent(e);
}
function gs(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? kg(o, i) : o.dispatchEvent(i);
}
var vr = 0;
function Hg() {
  C.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ii()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ii()), vr++, () => {
      vr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), vr--;
    };
  }, []);
}
function Ii() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var yr = "focusScope.autoFocusOnMount", Cr = "focusScope.autoFocusOnUnmount", xi = { bubbles: !1, cancelable: !0 }, Lg = "FocusScope", hs = C.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = C.useState(null), u = Bt(o), l = Bt(i), d = C.useRef(null), g = bt(t, (f) => c(f)), p = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (r) {
      let f = function(y) {
        if (p.paused || !s) return;
        const x = y.target;
        s.contains(x) ? d.current = x : ft(d.current, { select: !0 });
      }, m = function(y) {
        if (p.paused || !s) return;
        const x = y.relatedTarget;
        x !== null && (s.contains(x) || ft(d.current, { select: !0 }));
      }, b = function(y) {
        if (document.activeElement === document.body)
          for (const h of y)
            h.removedNodes.length > 0 && ft(s);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const I = new MutationObserver(b);
      return s && I.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), I.disconnect();
      };
    }
  }, [r, s, p.paused]), C.useEffect(() => {
    if (s) {
      Ai.add(p);
      const f = document.activeElement;
      if (!s.contains(f)) {
        const b = new CustomEvent(yr, xi);
        s.addEventListener(yr, u), s.dispatchEvent(b), b.defaultPrevented || (Zg($g(ps(s)), { select: !0 }), document.activeElement === f && ft(s));
      }
      return () => {
        s.removeEventListener(yr, u), setTimeout(() => {
          const b = new CustomEvent(Cr, xi);
          s.addEventListener(Cr, l), s.dispatchEvent(b), b.defaultPrevented || ft(f ?? document.body, { select: !0 }), s.removeEventListener(Cr, l), Ai.remove(p);
        }, 0);
      };
    }
  }, [s, u, l, p]);
  const v = C.useCallback(
    (f) => {
      if (!n && !r || p.paused) return;
      const m = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, b = document.activeElement;
      if (m && b) {
        const I = f.currentTarget, [y, x] = zg(I);
        y && x ? !f.shiftKey && b === x ? (f.preventDefault(), n && ft(y, { select: !0 })) : f.shiftKey && b === y && (f.preventDefault(), n && ft(x, { select: !0 })) : b === I && f.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ B(et.div, { tabIndex: -1, ...a, ref: g, onKeyDown: v });
});
hs.displayName = Lg;
function Zg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ft(r, { select: t }), document.activeElement !== n) return;
}
function zg(e) {
  const t = ps(e), n = wi(t, e), r = wi(t.reverse(), e);
  return [n, r];
}
function ps(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function wi(e, t) {
  for (const n of e)
    if (!Jg(n, { upTo: t })) return n;
}
function Jg(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function _g(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ft(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && _g(e) && t && e.select();
  }
}
var Ai = jg();
function jg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Si(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Si(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Si(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function $g(e) {
  return e.filter((t) => t.tagName !== "A");
}
var pt = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {
}, Ug = C[" useId ".trim().toString()] || (() => {
}), Qg = 0;
function Kg(e) {
  const [t, n] = C.useState(Ug());
  return pt(() => {
    n((r) => r ?? String(Qg++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var qg = typeof document < "u", eh = function() {
}, Rn = qg ? Qr : eh;
function Hn(e, t) {
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
        if (!Hn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Hn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ei(e, t) {
  const n = bs(e);
  return Math.round(t * n) / n;
}
function Ir(e) {
  const t = C.useRef(e);
  return Rn(() => {
    t.current = e;
  }), t;
}
function th(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: u
  } = e, [l, d] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, p] = C.useState(r);
  Hn(g, r) || p(r);
  const [v, f] = C.useState(null), [m, b] = C.useState(null), I = C.useCallback((w) => {
    w !== E.current && (E.current = w, f(w));
  }, []), y = C.useCallback((w) => {
    w !== A.current && (A.current = w, b(w));
  }, []), x = i || v, h = a || m, E = C.useRef(null), A = C.useRef(null), S = C.useRef(l), O = c != null, D = Ir(c), N = Ir(o), F = Ir(u), L = C.useCallback(() => {
    if (!E.current || !A.current)
      return;
    const w = {
      placement: t,
      strategy: n,
      middleware: g
    };
    N.current && (w.platform = N.current), Kd(E.current, A.current, w).then((k) => {
      const T = {
        ...k,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      R.current && !Hn(S.current, T) && (S.current = T, Ji.flushSync(() => {
        d(T);
      }));
    });
  }, [g, t, n, N, F]);
  Rn(() => {
    u === !1 && S.current.isPositioned && (S.current.isPositioned = !1, d((w) => ({
      ...w,
      isPositioned: !1
    })));
  }, [u]);
  const R = C.useRef(!1);
  Rn(() => (R.current = !0, () => {
    R.current = !1;
  }), []), Rn(() => {
    if (x && (E.current = x), h && (A.current = h), x && h) {
      if (D.current)
        return D.current(x, h, L);
      L();
    }
  }, [x, h, L, D, O]);
  const P = C.useMemo(() => ({
    reference: E,
    floating: A,
    setReference: I,
    setFloating: y
  }), [I, y]), M = C.useMemo(() => ({
    reference: x,
    floating: h
  }), [x, h]), G = C.useMemo(() => {
    const w = {
      position: n,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return w;
    const k = Ei(M.floating, l.x), T = Ei(M.floating, l.y);
    return s ? {
      ...w,
      transform: "translate(" + k + "px, " + T + "px)",
      ...bs(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: k,
      top: T
    };
  }, [n, s, M.floating, l.x, l.y]);
  return C.useMemo(() => ({
    ...l,
    update: L,
    refs: P,
    elements: M,
    floatingStyles: G
  }), [l, L, P, M, G]);
}
const nh = (e) => {
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
      return r && t(r) ? r.current != null ? ti({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ti({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, rh = (e, t) => ({
  ...Jd(e),
  options: [e, t]
}), oh = (e, t) => ({
  ..._d(e),
  options: [e, t]
}), ih = (e, t) => ({
  ...Qd(e),
  options: [e, t]
}), ah = (e, t) => ({
  ...jd(e),
  options: [e, t]
}), sh = (e, t) => ({
  ...$d(e),
  options: [e, t]
}), ch = (e, t) => ({
  ...Ud(e),
  options: [e, t]
}), uh = (e, t) => ({
  ...nh(e),
  options: [e, t]
});
var lh = "Arrow", vs = C.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ B(
    et.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ B("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
vs.displayName = lh;
var dh = vs;
function fh(e) {
  const [t, n] = C.useState(void 0);
  return pt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          a = u.inlineSize, s = u.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        n({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var vo = "Popper", [ys, Cs] = ds(vo), [mh, Is] = ys(vo), xs = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = C.useState(null);
  return /* @__PURE__ */ B(mh, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
xs.displayName = vo;
var ws = "PopperAnchor", As = C.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Is(ws, n), a = C.useRef(null), s = bt(t, a), c = C.useRef(null);
    return C.useEffect(() => {
      const u = c.current;
      c.current = (r == null ? void 0 : r.current) || a.current, u !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ B(et.div, { ...o, ref: s });
  }
);
As.displayName = ws;
var yo = "PopperContent", [gh, hh] = ys(yo), Ss = C.forwardRef(
  (e, t) => {
    var Q, me, ue, ie, pe, W;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: l = 0,
      sticky: d = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: v,
      ...f
    } = e, m = Is(yo, n), [b, I] = C.useState(null), y = bt(t, (Ce) => I(Ce)), [x, h] = C.useState(null), E = fh(x), A = (E == null ? void 0 : E.width) ?? 0, S = (E == null ? void 0 : E.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), D = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, N = Array.isArray(u) ? u : [u], F = N.length > 0, L = {
      padding: D,
      boundary: N.filter(bh),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: F
    }, { refs: R, floatingStyles: P, placement: M, isPositioned: G, middlewareData: w } = th({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...Ce) => Wa(...Ce, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        rh({ mainAxis: o + S, alignmentAxis: a }),
        c && oh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? ih() : void 0,
          ...L
        }),
        c && ah({ ...L }),
        sh({
          ...L,
          apply: ({ elements: Ce, rects: Se, availableWidth: De, availableHeight: yt }) => {
            const { width: Ct, height: It } = Se.reference, He = Ce.floating.style;
            He.setProperty("--radix-popper-available-width", `${De}px`), He.setProperty("--radix-popper-available-height", `${yt}px`), He.setProperty("--radix-popper-anchor-width", `${Ct}px`), He.setProperty("--radix-popper-anchor-height", `${It}px`);
          }
        }),
        x && uh({ element: x, padding: s }),
        vh({ arrowWidth: A, arrowHeight: S }),
        g && ch({ strategy: "referenceHidden", ...L })
      ]
    }), [k, T] = Os(M), z = Bt(v);
    pt(() => {
      G && (z == null || z());
    }, [G, z]);
    const Z = (Q = w.arrow) == null ? void 0 : Q.x, H = (me = w.arrow) == null ? void 0 : me.y, $ = ((ue = w.arrow) == null ? void 0 : ue.centerOffset) !== 0, [re, oe] = C.useState();
    return pt(() => {
      b && oe(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ B(
      "div",
      {
        ref: R.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...P,
          transform: G ? P.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: re,
          "--radix-popper-transform-origin": [
            (ie = w.transformOrigin) == null ? void 0 : ie.x,
            (pe = w.transformOrigin) == null ? void 0 : pe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((W = w.hide) == null ? void 0 : W.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ B(
          gh,
          {
            scope: n,
            placedSide: k,
            onArrowChange: h,
            arrowX: Z,
            arrowY: H,
            shouldHideArrow: $,
            children: /* @__PURE__ */ B(
              et.div,
              {
                "data-side": k,
                "data-align": T,
                ...f,
                ref: y,
                style: {
                  ...f.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ss.displayName = yo;
var Es = "PopperArrow", ph = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ms = C.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = hh(Es, r), a = ph[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ B(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
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
        children: /* @__PURE__ */ B(
          dh,
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
Ms.displayName = Es;
function bh(e) {
  return e !== null;
}
var vh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var m, b, I;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((m = o.arrow) == null ? void 0 : m.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [u, l] = Os(n), d = { start: "0%", center: "50%", end: "100%" }[l], g = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + s / 2, p = (((I = o.arrow) == null ? void 0 : I.y) ?? 0) + c / 2;
    let v = "", f = "";
    return u === "bottom" ? (v = a ? d : `${g}px`, f = `${-c}px`) : u === "top" ? (v = a ? d : `${g}px`, f = `${r.floating.height + c}px`) : u === "right" ? (v = `${-c}px`, f = a ? d : `${p}px`) : u === "left" && (v = `${r.floating.width + c}px`, f = a ? d : `${p}px`), { data: { x: v, y: f } };
  }
});
function Os(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var yh = xs, Ps = As, Ch = Ss, Ih = Ms, xh = "Portal", Ds = C.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, i] = C.useState(!1);
  pt(() => i(!0), []);
  const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? zc.createPortal(/* @__PURE__ */ B(et.div, { ...r, ref: t }), a) : null;
});
Ds.displayName = xh;
function wh(e, t) {
  return C.useReducer((n, r) => t[n][r] ?? n, e);
}
var Co = (e) => {
  const { present: t, children: n } = e, r = Ah(t), o = typeof n == "function" ? n({ present: r.isPresent }) : C.Children.only(n), i = bt(r.ref, Sh(o));
  return typeof n == "function" || r.isPresent ? C.cloneElement(o, { ref: i }) : null;
};
Co.displayName = "Presence";
function Ah(e) {
  const [t, n] = C.useState(), r = C.useRef(null), o = C.useRef(e), i = C.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = wh(a, {
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
  return C.useEffect(() => {
    const u = xn(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), pt(() => {
    const u = r.current, l = o.current;
    if (l !== e) {
      const g = i.current, p = xn(u);
      e ? c("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(l && g !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), pt(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (p) => {
        const f = xn(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && f && (c("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, g = (p) => {
        p.target === t && (i.current = xn(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: C.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function xn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Sh(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Eh = C[" useInsertionEffect ".trim().toString()] || pt;
function Mh({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, a] = Oh({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, c = s ? e : o;
  {
    const l = C.useRef(e !== void 0);
    C.useEffect(() => {
      const d = l.current;
      d !== s && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), l.current = s;
    }, [s, r]);
  }
  const u = C.useCallback(
    (l) => {
      var d;
      if (s) {
        const g = Ph(l) ? l(e) : l;
        g !== e && ((d = a.current) == null || d.call(a, g));
      } else
        i(l);
    },
    [s, e, i, a]
  );
  return [c, u];
}
function Oh({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = C.useState(e), o = C.useRef(n), i = C.useRef(t);
  return Eh(() => {
    i.current = t;
  }, [t]), C.useEffect(() => {
    var a;
    o.current !== n && ((a = i.current) == null || a.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Ph(e) {
  return typeof e == "function";
}
var Dh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pt = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), An = {}, xr = 0, Rs = function(e) {
  return e && (e.host || Rs(e.parentNode));
}, Rh = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Rs(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gh = function(e, t, n, r) {
  var o = Rh(t, Array.isArray(e) ? e : [e]);
  An[n] || (An[n] = /* @__PURE__ */ new WeakMap());
  var i = An[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(g) {
      if (s.has(g))
        l(g);
      else
        try {
          var p = g.getAttribute(r), v = p !== null && p !== "false", f = (Pt.get(g) || 0) + 1, m = (i.get(g) || 0) + 1;
          Pt.set(g, f), i.set(g, m), a.push(g), f === 1 && v && wn.set(g, !0), m === 1 && g.setAttribute(n, "true"), v || g.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", g, b);
        }
    });
  };
  return l(t), s.clear(), xr++, function() {
    a.forEach(function(d) {
      var g = Pt.get(d) - 1, p = i.get(d) - 1;
      Pt.set(d, g), i.set(d, p), g || (wn.has(d) || d.removeAttribute(r), wn.delete(d)), p || d.removeAttribute(n);
    }), xr--, xr || (Pt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), An = {});
  };
}, kh = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Dh(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Gh(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Je = function() {
  return Je = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Je.apply(this, arguments);
};
function Gs(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Nh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Gn = "right-scroll-bar-position", kn = "width-before-scroll-bar", Fh = "with-scroll-bars-hidden", Th = "--removed-body-scroll-bar-size";
function wr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Wh(e, t) {
  var n = Be(function() {
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
var Bh = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Mi = /* @__PURE__ */ new WeakMap();
function Vh(e, t) {
  var n = Wh(null, function(r) {
    return e.forEach(function(o) {
      return wr(o, r);
    });
  });
  return Bh(function() {
    var r = Mi.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || wr(s, null);
      }), i.forEach(function(s) {
        o.has(s) || wr(s, a);
      });
    }
    Mi.set(n, e);
  }, [e]), n;
}
function Yh(e) {
  return e;
}
function Xh(e, t) {
  t === void 0 && (t = Yh);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var c = function() {
        var l = a;
        a = [], l.forEach(i);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(l) {
          a.push(l), u();
        },
        filter: function(l) {
          return a = a.filter(l), n;
        }
      };
    }
  };
  return o;
}
function Hh(e) {
  e === void 0 && (e = {});
  var t = Xh(null);
  return t.options = Je({ async: !0, ssr: !1 }, e), t;
}
var ks = function(e) {
  var t = e.sideCar, n = Gs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Je({}, n));
};
ks.isSideCarExport = !0;
function Lh(e, t) {
  return e.useMedium(t), ks;
}
var Ns = Hh(), Ar = function() {
}, Qn = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Ar,
    onWheelCapture: Ar,
    onTouchMoveCapture: Ar
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, g = e.sideCar, p = e.noRelative, v = e.noIsolation, f = e.inert, m = e.allowPinchZoom, b = e.as, I = b === void 0 ? "div" : b, y = e.gapMode, x = Gs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), h = g, E = Vh([n, t]), A = Je(Je({}, x), o);
  return C.createElement(
    C.Fragment,
    null,
    l && C.createElement(h, { sideCar: Ns, removeScrollBar: u, shards: d, noRelative: p, noIsolation: v, inert: f, setCallbacks: i, allowPinchZoom: !!m, lockRef: n, gapMode: y }),
    a ? C.cloneElement(C.Children.only(s), Je(Je({}, A), { ref: E })) : C.createElement(I, Je({}, A, { className: c, ref: E }), s)
  );
});
Qn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qn.classNames = {
  fullWidth: kn,
  zeroRight: Gn
};
var Zh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function zh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Zh();
  return t && e.setAttribute("nonce", t), e;
}
function Jh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _h(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var jh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = zh()) && (Jh(t, n), _h(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $h = function() {
  var e = jh();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Fs = function() {
  var e = $h(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Uh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Sr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Qh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Sr(n), Sr(r), Sr(o)];
}, Kh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Uh;
  var t = Qh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, qh = Fs(), Ft = "data-scroll-locked", ep = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Fh, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Ft, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Gn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(kn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Gn, " .").concat(Gn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(kn, " .").concat(kn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ft, `] {
    `).concat(Th, ": ").concat(s, `px;
  }
`);
}, Oi = function() {
  var e = parseInt(document.body.getAttribute(Ft) || "0", 10);
  return isFinite(e) ? e : 0;
}, tp = function() {
  C.useEffect(function() {
    return document.body.setAttribute(Ft, (Oi() + 1).toString()), function() {
      var e = Oi() - 1;
      e <= 0 ? document.body.removeAttribute(Ft) : document.body.setAttribute(Ft, e.toString());
    };
  }, []);
}, np = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  tp();
  var i = C.useMemo(function() {
    return Kh(o);
  }, [o]);
  return C.createElement(qh, { styles: ep(i, !t, o, n ? "" : "!important") });
}, jr = !1;
if (typeof window < "u")
  try {
    var Sn = Object.defineProperty({}, "passive", {
      get: function() {
        return jr = !0, !0;
      }
    });
    window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
  } catch {
    jr = !1;
  }
var Dt = jr ? { passive: !1 } : !1, rp = function(e) {
  return e.tagName === "TEXTAREA";
}, Ts = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rp(e) && n[t] === "visible")
  );
}, op = function(e) {
  return Ts(e, "overflowY");
}, ip = function(e) {
  return Ts(e, "overflowX");
}, Pi = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ws(e, r);
    if (o) {
      var i = Bs(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ap = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, sp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ws = function(e, t) {
  return e === "v" ? op(t) : ip(t);
}, Bs = function(e, t) {
  return e === "v" ? ap(t) : sp(t);
}, cp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, up = function(e, t, n, r, o) {
  var i = cp(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), u = !1, l = a > 0, d = 0, g = 0;
  do {
    if (!s)
      break;
    var p = Bs(e, s), v = p[0], f = p[1], m = p[2], b = f - m - i * v;
    (v || b) && Ws(e, s) && (d += b, g += v);
    var I = s.parentNode;
    s = I && I.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? I.host : I;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(g) < 1) && (u = !0), u;
}, En = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Di = function(e) {
  return [e.deltaX, e.deltaY];
}, Ri = function(e) {
  return e && "current" in e ? e.current : e;
}, lp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fp = 0, Rt = [];
function mp(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(fp++)[0], i = C.useState(Fs)[0], a = C.useRef(e);
  C.useEffect(function() {
    a.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = Nh([e.lockRef.current], (e.shards || []).map(Ri), !0).filter(Boolean);
      return f.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = C.useCallback(function(f, m) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
      return !a.current.allowPinchZoom;
    var b = En(f), I = n.current, y = "deltaX" in f ? f.deltaX : I[0] - b[0], x = "deltaY" in f ? f.deltaY : I[1] - b[1], h, E = f.target, A = Math.abs(y) > Math.abs(x) ? "h" : "v";
    if ("touches" in f && A === "h" && E.type === "range")
      return !1;
    var S = Pi(A, E);
    if (!S)
      return !0;
    if (S ? h = A : (h = A === "v" ? "h" : "v", S = Pi(A, E)), !S)
      return !1;
    if (!r.current && "changedTouches" in f && (y || x) && (r.current = h), !h)
      return !0;
    var O = r.current || h;
    return up(O, m, f, O === "h" ? y : x);
  }, []), c = C.useCallback(function(f) {
    var m = f;
    if (!(!Rt.length || Rt[Rt.length - 1] !== i)) {
      var b = "deltaY" in m ? Di(m) : En(m), I = t.current.filter(function(h) {
        return h.name === m.type && (h.target === m.target || m.target === h.shadowParent) && lp(h.delta, b);
      })[0];
      if (I && I.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!I) {
        var y = (a.current.shards || []).map(Ri).filter(Boolean).filter(function(h) {
          return h.contains(m.target);
        }), x = y.length > 0 ? s(m, y[0]) : !a.current.noIsolation;
        x && m.cancelable && m.preventDefault();
      }
    }
  }, []), u = C.useCallback(function(f, m, b, I) {
    var y = { name: f, delta: m, target: b, should: I, shadowParent: gp(b) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== y;
      });
    }, 1);
  }, []), l = C.useCallback(function(f) {
    n.current = En(f), r.current = void 0;
  }, []), d = C.useCallback(function(f) {
    u(f.type, Di(f), f.target, s(f, e.lockRef.current));
  }, []), g = C.useCallback(function(f) {
    u(f.type, En(f), f.target, s(f, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Rt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", c, Dt), document.addEventListener("touchmove", c, Dt), document.addEventListener("touchstart", l, Dt), function() {
      Rt = Rt.filter(function(f) {
        return f !== i;
      }), document.removeEventListener("wheel", c, Dt), document.removeEventListener("touchmove", c, Dt), document.removeEventListener("touchstart", l, Dt);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(i, { styles: dp(o) }) : null,
    p ? C.createElement(np, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function gp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const hp = Lh(Ns, mp);
var Vs = C.forwardRef(function(e, t) {
  return C.createElement(Qn, Je({}, e, { ref: t, sideCar: hp }));
});
Vs.classNames = Qn.classNames;
var Kn = "Popover", [Ys] = ds(Kn, [
  Cs
]), dn = Cs(), [pp, vt] = Ys(Kn), Xs = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !1
  } = e, s = dn(t), c = C.useRef(null), [u, l] = C.useState(!1), [d, g] = Mh({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Kn
  });
  return /* @__PURE__ */ B(yh, { ...s, children: /* @__PURE__ */ B(
    pp,
    {
      scope: t,
      contentId: Kg(),
      triggerRef: c,
      open: d,
      onOpenChange: g,
      onOpenToggle: C.useCallback(() => g((p) => !p), [g]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: C.useCallback(() => l(!0), []),
      onCustomAnchorRemove: C.useCallback(() => l(!1), []),
      modal: a,
      children: n
    }
  ) });
};
Xs.displayName = Kn;
var Hs = "PopoverAnchor", Ls = C.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = vt(Hs, n), i = dn(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: s } = o;
    return C.useEffect(() => (a(), () => s()), [a, s]), /* @__PURE__ */ B(Ps, { ...i, ...r, ref: t });
  }
);
Ls.displayName = Hs;
var Zs = "PopoverTrigger", zs = C.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = vt(Zs, n), i = dn(n), a = bt(t, o.triggerRef), s = /* @__PURE__ */ B(
      et.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Us(o.open),
        ...r,
        ref: a,
        onClick: mt(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ B(Ps, { asChild: !0, ...i, children: s });
  }
);
zs.displayName = Zs;
var Io = "PopoverPortal", [bp, vp] = Ys(Io, {
  forceMount: void 0
}), Js = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = vt(Io, t);
  return /* @__PURE__ */ B(bp, { scope: t, forceMount: n, children: /* @__PURE__ */ B(Co, { present: n || i.open, children: /* @__PURE__ */ B(Ds, { asChild: !0, container: o, children: r }) }) });
};
Js.displayName = Io;
var Vt = "PopoverContent", _s = C.forwardRef(
  (e, t) => {
    const n = vp(Vt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = vt(Vt, e.__scopePopover);
    return /* @__PURE__ */ B(Co, { present: r || i.open, children: i.modal ? /* @__PURE__ */ B(Cp, { ...o, ref: t }) : /* @__PURE__ */ B(Ip, { ...o, ref: t }) });
  }
);
_s.displayName = Vt;
var yp = /* @__PURE__ */ qr("PopoverContent.RemoveScroll"), Cp = C.forwardRef(
  (e, t) => {
    const n = vt(Vt, e.__scopePopover), r = C.useRef(null), o = bt(t, r), i = C.useRef(!1);
    return C.useEffect(() => {
      const a = r.current;
      if (a) return kh(a);
    }, []), /* @__PURE__ */ B(Vs, { as: yp, allowPinchZoom: !0, children: /* @__PURE__ */ B(
      js,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: mt(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), i.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: mt(
          e.onPointerDownOutside,
          (a) => {
            const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || c;
            i.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: mt(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Ip = C.forwardRef(
  (e, t) => {
    const n = vt(Vt, e.__scopePopover), r = C.useRef(!1), o = C.useRef(!1);
    return /* @__PURE__ */ B(
      js,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, s;
          (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var c, u;
          (c = e.onInteractOutside) == null || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), js = C.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: u,
      onInteractOutside: l,
      ...d
    } = e, g = vt(Vt, n), p = dn(n);
    return Hg(), /* @__PURE__ */ B(
      hs,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ B(
          ms,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: l,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onDismiss: () => g.onOpenChange(!1),
            children: /* @__PURE__ */ B(
              Ch,
              {
                "data-state": Us(g.open),
                role: "dialog",
                id: g.contentId,
                ...p,
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
), $s = "PopoverClose", xp = C.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = vt($s, n);
    return /* @__PURE__ */ B(
      et.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: mt(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
xp.displayName = $s;
var wp = "PopoverArrow", Ap = C.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dn(n);
    return /* @__PURE__ */ B(Ih, { ...o, ...r, ref: t });
  }
);
Ap.displayName = wp;
function Us(e) {
  return e ? "open" : "closed";
}
var Sp = Xs, Ep = Ls, Mp = zs, Op = Js, Qs = _s;
const Pp = Sp, Dp = Mp, J0 = Ep, Ks = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ B(Op, { children: /* @__PURE__ */ B(
  Qs,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: q(
      "z-50 w-72 rounded-md border bg-white p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
      e
    ),
    ...r
  }
) }));
Ks.displayName = Qs.displayName;
function Rp(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Er = {}, en = {};
function At(e, t) {
  try {
    const r = (Er[e] || (Er[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in en ? en[r] : Gi(r, r.split(":"));
  } catch {
    if (e in en) return en[e];
    const n = e == null ? void 0 : e.match(Gp);
    return n ? Gi(e, n.slice(1)) : NaN;
  }
}
const Gp = /([+-]\d\d):?(\d\d)?/;
function Gi(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return en[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class je extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(At(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), qs(this), $r(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new je(...n, t) : new je(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new je(+this, t);
  }
  getTimezoneOffset() {
    const t = -At(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), $r(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new je(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ki = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!ki.test(e)) return;
  const t = e.replace(ki, "$1UTC");
  je.prototype[t] && (e.startsWith("get") ? je.prototype[e] = function() {
    return this.internal[t]();
  } : (je.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), kp(this), +this;
  }, je.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), $r(this), +this;
  }));
});
function $r(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-At(e.timeZone, e) * 60));
}
function kp(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), qs(e);
}
function qs(e) {
  const t = At(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), i = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - i, s = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && s && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const u = /* @__PURE__ */ new Date(+e);
  u.setUTCSeconds(0);
  const l = o > 0 ? u.getSeconds() : (u.getSeconds() - 60) % 60, d = Math.round(-(At(e.timeZone, e) * 60)) % 60;
  (d || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + l));
  const g = At(e.timeZone, e), p = g > 0 ? Math.floor(g) : Math.ceil(g), f = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, m = p !== n, b = f - c;
  if (m && b) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + b);
    const I = At(e.timeZone, e), y = I > 0 ? Math.floor(I) : Math.ceil(I), x = p - y;
    x && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + x), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + x));
  }
}
class Oe extends je {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Oe(...n, t) : new Oe(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Rp(this.timeZone, this)})`;
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
    return new Oe(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Oe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ec = 6048e5, Np = 864e5, Ni = Symbol.for("constructDateFrom");
function we(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Ni in e ? e[Ni](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ge(e, t) {
  return we(t || e, e);
}
function tc(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(t) ? we(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function nc(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return we(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), i = we(e, r.getTime());
  i.setMonth(r.getMonth() + t + 1, 0);
  const a = i.getDate();
  return o >= a ? i : (r.setFullYear(
    i.getFullYear(),
    i.getMonth(),
    o
  ), r);
}
let Fp = {};
function fn() {
  return Fp;
}
function Yt(e, t) {
  var s, c, u, l;
  const n = fn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((l = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : l.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function sn(e, t) {
  return Yt(e, { ...t, weekStartsOn: 1 });
}
function rc(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = we(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const i = sn(o), a = we(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const s = sn(a);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function Fi(e) {
  const t = ge(e), n = new Date(
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
function _t(e, ...t) {
  const n = we.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function cn(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function oc(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = cn(r), a = cn(o), s = +i - Fi(i), c = +a - Fi(a);
  return Math.round((s - c) / Np);
}
function Tp(e, t) {
  const n = rc(e, t), r = we(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), sn(r);
}
function Wp(e, t, n) {
  return tc(e, t * 7, n);
}
function Bp(e, t, n) {
  return nc(e, t * 12, n);
}
function Vp(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = we.bind(null, o));
    const i = ge(o, r);
    (!n || n < i || isNaN(+i)) && (n = i);
  }), we(r, n || NaN);
}
function Yp(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = we.bind(null, o));
    const i = ge(o, r);
    (!n || n > i || isNaN(+i)) && (n = i);
  }), we(r, n || NaN);
}
function Xp(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +cn(r) == +cn(o);
}
function ic(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Hp(e) {
  return !(!ic(e) && typeof e != "number" || isNaN(+ge(e)));
}
function Lp(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return i * 12 + a;
}
function Zp(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function ac(e, t) {
  const [n, r] = _t(e, t.start, t.end);
  return { start: n, end: r };
}
function zp(e, t) {
  const { start: n, end: r } = ac(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const i = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let s = 1;
  const c = [];
  for (; +a <= i; )
    c.push(we(n, a)), a.setMonth(a.getMonth() + s);
  return o ? c.reverse() : c;
}
function Jp(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function _p(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function sc(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function jp(e, t) {
  const { start: n, end: r } = ac(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const i = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setMonth(0, 1);
  let s = 1;
  const c = [];
  for (; +a <= i; )
    c.push(we(n, a)), a.setFullYear(a.getFullYear() + s);
  return o ? c.reverse() : c;
}
function cc(e, t) {
  var s, c, u, l;
  const n = fn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((l = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : l.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), i = o.getDay(), a = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function $p(e, t) {
  return cc(e, { ...t, weekStartsOn: 1 });
}
const Up = {
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
}, Qp = (e, t, n) => {
  let r;
  const o = Up[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Mr(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Kp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qp = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, eb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tb = {
  date: Mr({
    formats: Kp,
    defaultWidth: "full"
  }),
  time: Mr({
    formats: qp,
    defaultWidth: "full"
  }),
  dateTime: Mr({
    formats: eb,
    defaultWidth: "full"
  })
}, nb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rb = (e, t, n, r) => nb[e];
function Qt(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const ob = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ib = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ab = {
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
}, sb = {
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
}, cb = {
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
}, ub = {
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
}, lb = (e, t) => {
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
}, db = {
  ordinalNumber: lb,
  era: Qt({
    values: ob,
    defaultWidth: "wide"
  }),
  quarter: Qt({
    values: ib,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qt({
    values: ab,
    defaultWidth: "wide"
  }),
  day: Qt({
    values: sb,
    defaultWidth: "wide"
  }),
  dayPeriod: Qt({
    values: cb,
    defaultWidth: "wide",
    formattingValues: ub,
    defaultFormattingWidth: "wide"
  })
};
function Kt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? mb(s, (d) => d.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      fb(s, (d) => d.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const l = t.slice(a.length);
    return { value: u, rest: l };
  };
}
function fb(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function mb(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function gb(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const s = t.slice(o.length);
    return { value: a, rest: s };
  };
}
const hb = /^(\d+)(th|st|nd|rd)?/i, pb = /\d+/i, bb = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, vb = {
  any: [/^b/i, /^(a|c)/i]
}, yb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Cb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ib = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, xb = {
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
}, wb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ab = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Sb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Eb = {
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
}, Mb = {
  ordinalNumber: gb({
    matchPattern: hb,
    parsePattern: pb,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Kt({
    matchPatterns: bb,
    defaultMatchWidth: "wide",
    parsePatterns: vb,
    defaultParseWidth: "any"
  }),
  quarter: Kt({
    matchPatterns: yb,
    defaultMatchWidth: "wide",
    parsePatterns: Cb,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Kt({
    matchPatterns: Ib,
    defaultMatchWidth: "wide",
    parsePatterns: xb,
    defaultParseWidth: "any"
  }),
  day: Kt({
    matchPatterns: wb,
    defaultMatchWidth: "wide",
    parsePatterns: Ab,
    defaultParseWidth: "any"
  }),
  dayPeriod: Kt({
    matchPatterns: Sb,
    defaultMatchWidth: "any",
    parsePatterns: Eb,
    defaultParseWidth: "any"
  })
}, xo = {
  code: "en-US",
  formatDistance: Qp,
  formatLong: tb,
  formatRelative: rb,
  localize: db,
  match: Mb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ob(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return oc(n, sc(n)) + 1;
}
function uc(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +sn(n) - +Tp(n);
  return Math.round(r / ec) + 1;
}
function lc(e, t) {
  var l, d, g, p;
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = fn(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = we((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = Yt(a, t), c = we((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const u = Yt(c, t);
  return +n >= +s ? r + 1 : +n >= +u ? r : r - 1;
}
function Pb(e, t) {
  var s, c, u, l;
  const n = fn(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((l = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, o = lc(e, t), i = we((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), Yt(i, t);
}
function dc(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +Yt(n, t) - +Pb(n, t);
  return Math.round(r / ec) + 1;
}
function fe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const dt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return fe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : fe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return fe(e.getDate(), t.length);
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
    return fe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return fe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return fe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return fe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return fe(o, t.length);
  }
}, Gt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ti = {
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
    return dt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = lc(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return fe(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : fe(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = rc(e);
    return fe(n, t.length);
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
    return fe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return fe(r, 2);
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
        return fe(r, 2);
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
        return dt.M(e, t);
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
        return fe(r + 1, 2);
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
    const o = dc(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : fe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = uc(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : fe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : dt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Ob(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : fe(r, t.length);
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
        return fe(i, 2);
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
        return fe(i, t.length);
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
        return fe(o, t.length);
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
    switch (r === 12 ? o = Gt.noon : r === 0 ? o = Gt.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Gt.evening : r >= 12 ? o = Gt.afternoon : r >= 4 ? o = Gt.morning : o = Gt.night, t) {
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
    return dt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : dt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : fe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : fe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : dt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : dt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return dt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Bi(r);
      case "XXXX":
      case "XX":
        return wt(r);
      case "XXXXX":
      case "XXX":
      default:
        return wt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Bi(r);
      case "xxxx":
      case "xx":
        return wt(r);
      case "xxxxx":
      case "xxx":
      default:
        return wt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Wi(r, ":");
      case "OOOO":
      default:
        return "GMT" + wt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Wi(r, ":");
      case "zzzz":
      default:
        return "GMT" + wt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return fe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return fe(+e, t.length);
  }
};
function Wi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + fe(i, 2);
}
function Bi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2) : wt(e, t);
}
function wt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = fe(Math.trunc(r / 60), 2), i = fe(r % 60, 2);
  return n + o + t + i;
}
const Vi = (e, t) => {
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
}, fc = (e, t) => {
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
}, Db = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Vi(e, t);
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
  return i.replace("{{date}}", Vi(r, t)).replace("{{time}}", fc(o, t));
}, Rb = {
  p: fc,
  P: Db
}, Gb = /^D+$/, kb = /^Y+$/, Nb = ["D", "DD", "YY", "YYYY"];
function Fb(e) {
  return Gb.test(e);
}
function Tb(e) {
  return kb.test(e);
}
function Wb(e, t, n) {
  const r = Bb(e, t, n);
  if (console.warn(r), Nb.includes(e)) throw new RangeError(r);
}
function Bb(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Vb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Yb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xb = /^'([^]*?)'?$/, Hb = /''/g, Lb = /[a-zA-Z]/;
function Zb(e, t, n) {
  var l, d, g, p, v, f, m, b;
  const r = fn(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? xo, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((f = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : f.weekStartsOn) ?? r.weekStartsOn ?? ((b = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = ge(e, n == null ? void 0 : n.in);
  if (!Hp(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Yb).map((I) => {
    const y = I[0];
    if (y === "p" || y === "P") {
      const x = Rb[y];
      return x(I, o.formatLong);
    }
    return I;
  }).join("").match(Vb).map((I) => {
    if (I === "''")
      return { isToken: !1, value: "'" };
    const y = I[0];
    if (y === "'")
      return { isToken: !1, value: zb(I) };
    if (Ti[y])
      return { isToken: !0, value: I };
    if (y.match(Lb))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: I };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return c.map((I) => {
    if (!I.isToken) return I.value;
    const y = I.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Tb(y) || !(n != null && n.useAdditionalDayOfYearTokens) && Fb(y)) && Wb(y, t, String(e));
    const x = Ti[y[0]];
    return x(s, y, o.localize, u);
  }).join("");
}
function zb(e) {
  const t = e.match(Xb);
  return t ? t[1].replace(Hb, "'") : e;
}
function Jb(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), i = we(n, 0);
  return i.setFullYear(r, o + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
}
function _b(e, t) {
  return ge(e, t == null ? void 0 : t.in).getMonth();
}
function jb(e, t) {
  return ge(e, t == null ? void 0 : t.in).getFullYear();
}
function $b(e, t) {
  return +ge(e) > +ge(t);
}
function Ub(e, t) {
  return +ge(e) < +ge(t);
}
function Qb(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Kb(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function qb(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in), o = r.getFullYear(), i = r.getDate(), a = we(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const s = Jb(a);
  return r.setMonth(t, Math.min(i, s)), r;
}
function ev(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? we(e, NaN) : (r.setFullYear(t), r);
}
const Yi = 5, tv = 4;
function nv(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), i = t.addDays(o, Yi * 7 - 1);
  return t.getMonth(e) === t.getMonth(i) ? Yi : tv;
}
function mc(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -1 * 6) : t.addDays(n, -1 * (r - 1));
}
function rv(e, t) {
  const n = mc(e, t), r = nv(e, t);
  return t.addDays(n, r * 7 - 1);
}
class We {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? Oe.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, i) => {
      var a;
      return (a = this.overrides) != null && a.newDate ? this.overrides.newDate(r, o, i) : this.options.timeZone ? new Oe(r, o, i, this.options.timeZone) : new Date(r, o, i);
    }, this.addDays = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addDays ? this.overrides.addDays(r, o) : tc(r, o);
    }, this.addMonths = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addMonths ? this.overrides.addMonths(r, o) : nc(r, o);
    }, this.addWeeks = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addWeeks ? this.overrides.addWeeks(r, o) : Wp(r, o);
    }, this.addYears = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.addYears ? this.overrides.addYears(r, o) : Bp(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : oc(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Lp(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : zp(r);
    }, this.eachYearOfInterval = (r) => {
      var s;
      const o = (s = this.overrides) != null && s.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : jp(r), i = new Set(o.map((c) => this.getYear(c)));
      if (i.size === o.length)
        return o;
      const a = [];
      return i.forEach((c) => {
        a.push(new Date(c, 0, 1));
      }), a;
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : rv(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : $p(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Zp(r);
    }, this.endOfWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.endOfWeek ? this.overrides.endOfWeek(r, o) : cc(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : _p(r);
    }, this.format = (r, o, i) => {
      var s;
      const a = (s = this.overrides) != null && s.format ? this.overrides.format(r, o, this.options) : Zb(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : uc(r);
    }, this.getMonth = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.getMonth ? this.overrides.getMonth(r, this.options) : _b(r, this.options);
    }, this.getYear = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.getYear ? this.overrides.getYear(r, this.options) : jb(r, this.options);
    }, this.getWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.getWeek ? this.overrides.getWeek(r, this.options) : dc(r, this.options);
    }, this.isAfter = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isAfter ? this.overrides.isAfter(r, o) : $b(r, o);
    }, this.isBefore = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isBefore ? this.overrides.isBefore(r, o) : Ub(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : ic(r);
    }, this.isSameDay = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isSameDay ? this.overrides.isSameDay(r, o) : Xp(r, o);
    }, this.isSameMonth = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isSameMonth ? this.overrides.isSameMonth(r, o) : Qb(r, o);
    }, this.isSameYear = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.isSameYear ? this.overrides.isSameYear(r, o) : Kb(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Vp(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Yp(r);
    }, this.setMonth = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.setMonth ? this.overrides.setMonth(r, o) : qb(r, o);
    }, this.setYear = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.setYear ? this.overrides.setYear(r, o) : ev(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : mc(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : cn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : sn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Jp(r);
    }, this.startOfWeek = (r, o) => {
      var i;
      return (i = this.overrides) != null && i.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Yt(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : sc(r);
    }, this.options = { locale: xo, ...t }, this.overrides = n;
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
    return t && We.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, i = n == null ? void 0 : n.code;
    if (i && We.yearFirstLocales.has(i))
      try {
        return new Intl.DateTimeFormat(i, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const a = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, a);
  }
}
We.yearFirstLocales = /* @__PURE__ */ new Set([
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
const tt = new We();
class gc {
  constructor(t, n, r = tt) {
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
class ov {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class iv {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function av(e) {
  return V.createElement("button", { ...e });
}
function sv(e) {
  return V.createElement("span", { ...e });
}
function cv(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    V.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && V.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && V.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && V.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && V.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function uv(e) {
  const { day: t, modifiers: n, ...r } = e;
  return V.createElement("td", { ...r });
}
function lv(e) {
  const { day: t, modifiers: n, ...r } = e, o = V.useRef(null);
  return V.useEffect(() => {
    var i;
    n.focused && ((i = o.current) == null || i.focus());
  }, [n.focused]), V.createElement("button", { ref: o, ...r });
}
var J;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(J || (J = {}));
var ye;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ye || (ye = {}));
var Ve;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ve || (Ve = {}));
var Ge;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ge || (Ge = {}));
function dv(e) {
  const { options: t, className: n, components: r, classNames: o, ...i } = e, a = [o[J.Dropdown], n].join(" "), s = t == null ? void 0 : t.find(({ value: c }) => c === i.value);
  return V.createElement(
    "span",
    { "data-disabled": i.disabled, className: o[J.DropdownRoot] },
    V.createElement(r.Select, { className: a, ...i }, t == null ? void 0 : t.map(({ value: c, label: u, disabled: l }) => V.createElement(r.Option, { key: c, value: c, disabled: l }, u))),
    V.createElement(
      "span",
      { className: o[J.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      V.createElement(r.Chevron, { orientation: "down", size: 18, className: o[J.Chevron] })
    )
  );
}
function fv(e) {
  return V.createElement("div", { ...e });
}
function mv(e) {
  return V.createElement("div", { ...e });
}
function gv(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r }, e.children);
}
function hv(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r });
}
function pv(e) {
  return V.createElement("table", { ...e });
}
function bv(e) {
  return V.createElement("div", { ...e });
}
const hc = zi(void 0);
function mn() {
  const e = Ur(hc);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function vv(e) {
  const { components: t } = mn();
  return V.createElement(t.Dropdown, { ...e });
}
function yv(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...i } = e, { components: a, classNames: s, labels: { labelPrevious: c, labelNext: u } } = mn(), l = he((g) => {
    o && (n == null || n(g));
  }, [o, n]), d = he((g) => {
    r && (t == null || t(g));
  }, [r, t]);
  return V.createElement(
    "nav",
    { ...i },
    V.createElement(
      a.PreviousMonthButton,
      { type: "button", className: s[J.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: d },
      V.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: s[J.Chevron], orientation: "left" })
    ),
    V.createElement(
      a.NextMonthButton,
      { type: "button", className: s[J.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": u(o), onClick: l },
      V.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[J.Chevron] })
    )
  );
}
function Cv(e) {
  const { components: t } = mn();
  return V.createElement(t.Button, { ...e });
}
function Iv(e) {
  return V.createElement("option", { ...e });
}
function xv(e) {
  const { components: t } = mn();
  return V.createElement(t.Button, { ...e });
}
function wv(e) {
  const { rootRef: t, ...n } = e;
  return V.createElement("div", { ...n, ref: t });
}
function Av(e) {
  return V.createElement("select", { ...e });
}
function Sv(e) {
  const { week: t, ...n } = e;
  return V.createElement("tr", { ...n });
}
function Ev(e) {
  return V.createElement("th", { ...e });
}
function Mv(e) {
  return V.createElement(
    "thead",
    { "aria-hidden": !0 },
    V.createElement("tr", { ...e })
  );
}
function Ov(e) {
  const { week: t, ...n } = e;
  return V.createElement("th", { ...n });
}
function Pv(e) {
  return V.createElement("th", { ...e });
}
function Dv(e) {
  return V.createElement("tbody", { ...e });
}
function Rv(e) {
  const { components: t } = mn();
  return V.createElement(t.Dropdown, { ...e });
}
const Gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: av,
  CaptionLabel: sv,
  Chevron: cv,
  Day: uv,
  DayButton: lv,
  Dropdown: dv,
  DropdownNav: fv,
  Footer: mv,
  Month: gv,
  MonthCaption: hv,
  MonthGrid: pv,
  Months: bv,
  MonthsDropdown: vv,
  Nav: yv,
  NextMonthButton: Cv,
  Option: Iv,
  PreviousMonthButton: xv,
  Root: wv,
  Select: Av,
  Week: Sv,
  WeekNumber: Ov,
  WeekNumberHeader: Pv,
  Weekday: Ev,
  Weekdays: Mv,
  Weeks: Dv,
  YearsDropdown: Rv
}, Symbol.toStringTag, { value: "Module" }));
function ot(e, t, n = !1, r = tt) {
  let { from: o, to: i } = e;
  const { differenceInCalendarDays: a, isSameDay: s } = r;
  return o && i ? (a(i, o) < 0 && ([o, i] = [i, o]), a(t, o) >= (n ? 1 : 0) && a(i, t) >= (n ? 1 : 0)) : !n && i ? s(i, t) : !n && o ? s(o, t) : !1;
}
function pc(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function wo(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function bc(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function vc(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function yc(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Cc(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function it(e, t, n = tt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: i, isAfter: a } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return o(e, s);
    if (Cc(s, n))
      return s.includes(e);
    if (wo(s))
      return ot(s, e, !1, n);
    if (yc(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (pc(s)) {
      const c = i(s.before, e), u = i(s.after, e), l = c > 0, d = u < 0;
      return a(s.before, s.after) ? d && l : l || d;
    }
    return bc(s) ? i(e, s.after) > 0 : vc(s) ? i(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function kv(e, t, n, r, o) {
  const { disabled: i, hidden: a, modifiers: s, showOutsideDays: c, broadcastCalendar: u, today: l } = t, { isSameDay: d, isSameMonth: g, startOfMonth: p, isBefore: v, endOfMonth: f, isAfter: m } = o, b = n && p(n), I = r && f(r), y = {
    [ye.focused]: [],
    [ye.outside]: [],
    [ye.disabled]: [],
    [ye.hidden]: [],
    [ye.today]: []
  }, x = {};
  for (const h of e) {
    const { date: E, displayMonth: A } = h, S = !!(A && !g(E, A)), O = !!(b && v(E, b)), D = !!(I && m(E, I)), N = !!(i && it(E, i, o)), F = !!(a && it(E, a, o)) || O || D || // Broadcast calendar will show outside days as default
    !u && !c && S || u && c === !1 && S, L = d(E, l ?? o.today());
    S && y.outside.push(h), N && y.disabled.push(h), F && y.hidden.push(h), L && y.today.push(h), s && Object.keys(s).forEach((R) => {
      const P = s == null ? void 0 : s[R];
      P && it(E, P, o) && (x[R] ? x[R].push(h) : x[R] = [h]);
    });
  }
  return (h) => {
    const E = {
      [ye.focused]: !1,
      [ye.disabled]: !1,
      [ye.hidden]: !1,
      [ye.outside]: !1,
      [ye.today]: !1
    }, A = {};
    for (const S in y) {
      const O = y[S];
      E[S] = O.some((D) => D === h);
    }
    for (const S in x)
      A[S] = x[S].some((O) => O === h);
    return {
      ...E,
      // custom modifiers should override all the previous ones
      ...A
    };
  };
}
function Nv(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [i]) => (n[i] ? o.push(n[i]) : t[ye[i]] ? o.push(t[ye[i]]) : t[Ve[i]] && o.push(t[Ve[i]]), o), [t[J.Day]]);
}
function Fv(e) {
  return {
    ...Gv,
    ...e
  };
}
function Tv(e) {
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
function Ao() {
  const e = {};
  for (const t in J)
    e[J[t]] = `rdp-${J[t]}`;
  for (const t in ye)
    e[ye[t]] = `rdp-${ye[t]}`;
  for (const t in Ve)
    e[Ve[t]] = `rdp-${Ve[t]}`;
  for (const t in Ge)
    e[Ge[t]] = `rdp-${Ge[t]}`;
  return e;
}
function Ic(e, t, n) {
  return (n ?? new We(t)).formatMonthYear(e);
}
const Wv = Ic;
function Bv(e, t, n) {
  return (n ?? new We(t)).format(e, "d");
}
function Vv(e, t = tt) {
  return t.format(e, "LLLL");
}
function Yv(e, t, n) {
  return (n ?? new We(t)).format(e, "cccccc");
}
function Xv(e, t = tt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Hv() {
  return "";
}
function xc(e, t = tt) {
  return t.format(e, "yyyy");
}
const Lv = xc, Zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ic,
  formatDay: Bv,
  formatMonthCaption: Wv,
  formatMonthDropdown: Vv,
  formatWeekNumber: Xv,
  formatWeekNumberHeader: Hv,
  formatWeekdayName: Yv,
  formatYearCaption: Lv,
  formatYearDropdown: xc
}, Symbol.toStringTag, { value: "Module" }));
function zv(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Zv,
    ...e
  };
}
function Jv(e, t, n, r, o) {
  const { startOfMonth: i, startOfYear: a, endOfYear: s, eachMonthOfInterval: c, getMonth: u } = o;
  return c({
    start: a(e),
    end: s(e)
  }).map((g) => {
    const p = r.formatMonthDropdown(g, o), v = u(g), f = t && g < i(t) || n && g > i(n) || !1;
    return { value: v, label: p, disabled: f };
  });
}
function _v(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[J.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function jv(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), i = [];
  for (let a = 0; a < 7; a++) {
    const s = e.addDays(o, a);
    i.push(s);
  }
  return i;
}
function $v(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: i, endOfYear: a, eachYearOfInterval: s, getYear: c } = r, u = i(e), l = a(t), d = s({ start: u, end: l });
  return o && d.reverse(), d.map((g) => {
    const p = n.formatYearDropdown(g, r);
    return {
      value: c(g),
      label: p,
      disabled: !1
    };
  });
}
function wc(e, t, n, r) {
  let o = (r ?? new We(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Uv = wc;
function Ac(e, t, n) {
  return (n ?? new We(t)).formatMonthYear(e);
}
const Qv = Ac;
function Kv(e, t, n, r) {
  let o = (r ?? new We(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function qv(e) {
  return "Choose the Month";
}
function e0() {
  return "";
}
function t0(e) {
  return "Go to the Next Month";
}
function n0(e) {
  return "Go to the Previous Month";
}
function r0(e, t, n) {
  return (n ?? new We(t)).format(e, "cccc");
}
function o0(e, t) {
  return `Week ${e}`;
}
function i0(e) {
  return "Week Number";
}
function a0(e) {
  return "Choose the Year";
}
const s0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Qv,
  labelDay: Uv,
  labelDayButton: wc,
  labelGrid: Ac,
  labelGridcell: Kv,
  labelMonthDropdown: qv,
  labelNav: e0,
  labelNext: t0,
  labelPrevious: n0,
  labelWeekNumber: o0,
  labelWeekNumberHeader: i0,
  labelWeekday: r0,
  labelYearDropdown: a0
}, Symbol.toStringTag, { value: "Module" })), gn = (e) => e instanceof HTMLElement ? e : null, Or = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], c0 = (e) => gn(e.querySelector("[data-animated-month]")), Pr = (e) => gn(e.querySelector("[data-animated-caption]")), Dr = (e) => gn(e.querySelector("[data-animated-weeks]")), u0 = (e) => gn(e.querySelector("[data-animated-nav]")), l0 = (e) => gn(e.querySelector("[data-animated-weekdays]"));
function d0(e, t, { classNames: n, months: r, focused: o, dateLib: i }) {
  const a = Ne(null), s = Ne(r), c = Ne(!1);
  Qr(() => {
    const u = s.current;
    if (s.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || u.length === 0 || r.length !== u.length)
      return;
    const l = i.isSameMonth(r[0].date, u[0].date), d = i.isAfter(r[0].date, u[0].date), g = d ? n[Ge.caption_after_enter] : n[Ge.caption_before_enter], p = d ? n[Ge.weeks_after_enter] : n[Ge.weeks_before_enter], v = a.current, f = e.current.cloneNode(!0);
    if (f instanceof HTMLElement ? (Or(f).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const x = c0(y);
      x && y.contains(x) && y.removeChild(x);
      const h = Pr(y);
      h && h.classList.remove(g);
      const E = Dr(y);
      E && E.classList.remove(p);
    }), a.current = f) : a.current = null, c.current || l || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const m = v instanceof HTMLElement ? Or(v) : [], b = Or(e.current);
    if (b != null && b.every((I) => I instanceof HTMLElement) && m && m.every((I) => I instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const I = u0(e.current);
      I && (I.style.zIndex = "1"), b.forEach((y, x) => {
        const h = m[x];
        if (!h)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const E = Pr(y);
        E && E.classList.add(g);
        const A = Dr(y);
        A && A.classList.add(p);
        const S = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), I && (I.style.zIndex = ""), E && E.classList.remove(g), A && A.classList.remove(p), y.style.position = "", y.style.overflow = "", y.contains(h) && y.removeChild(h);
        };
        h.style.pointerEvents = "none", h.style.position = "absolute", h.style.overflow = "hidden", h.setAttribute("aria-hidden", "true");
        const O = l0(h);
        O && (O.style.opacity = "0");
        const D = Pr(h);
        D && (D.classList.add(d ? n[Ge.caption_before_exit] : n[Ge.caption_after_exit]), D.addEventListener("animationend", S));
        const N = Dr(h);
        N && N.classList.add(d ? n[Ge.weeks_before_exit] : n[Ge.weeks_after_exit]), y.insertBefore(h, y.firstChild);
      });
    }
  });
}
function f0(e, t, n, r) {
  const o = e[0], i = e[e.length - 1], { ISOWeek: a, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: u, differenceInCalendarDays: l, differenceInCalendarMonths: d, endOfBroadcastWeek: g, endOfISOWeek: p, endOfMonth: v, endOfWeek: f, isAfter: m, startOfBroadcastWeek: b, startOfISOWeek: I, startOfWeek: y } = r, x = c ? b(o, r) : a ? I(o) : y(o), h = c ? g(i) : a ? p(v(i)) : f(v(i)), E = l(h, x), A = d(i, o) + 1, S = [];
  for (let N = 0; N <= E; N++) {
    const F = u(x, N);
    if (t && m(F, t))
      break;
    S.push(F);
  }
  const D = (c ? 35 : 42) * A;
  if (s && S.length < D) {
    const N = D - S.length;
    for (let F = 0; F < N; F++) {
      const L = u(S[S.length - 1], 1);
      S.push(L);
    }
  }
  return S;
}
function m0(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((i, a) => i.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function g0(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, i = [];
  for (let a = 0; a < o; a++) {
    const s = r.addMonths(e, a);
    if (t && s > t)
      break;
    i.push(s);
  }
  return i;
}
function Xi(e, t, n, r) {
  const { month: o, defaultMonth: i, today: a = r.today(), numberOfMonths: s = 1 } = e;
  let c = o || i || a;
  const { differenceInCalendarMonths: u, addMonths: l, startOfMonth: d } = r;
  if (n && u(n, c) < s - 1) {
    const g = -1 * (s - 1);
    c = l(n, g);
  }
  return t && u(c, t) < 0 && (c = t), d(c);
}
function h0(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: i, endOfISOWeek: a, endOfMonth: s, endOfWeek: c, getISOWeek: u, getWeek: l, startOfBroadcastWeek: d, startOfISOWeek: g, startOfWeek: p } = r, v = e.reduce((f, m) => {
    const b = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? g(m) : p(m), I = n.broadcastCalendar ? i(m) : n.ISOWeek ? a(s(m)) : c(s(m)), y = t.filter((A) => A >= b && A <= I), x = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < x) {
      const A = t.filter((S) => {
        const O = x - y.length;
        return S > I && S <= o(I, O);
      });
      y.push(...A);
    }
    const h = y.reduce((A, S) => {
      const O = n.ISOWeek ? u(S) : l(S), D = A.find((F) => F.weekNumber === O), N = new gc(S, m, r);
      return D ? D.days.push(N) : A.push(new iv(O, [N])), A;
    }, []), E = new ov(m, h);
    return f.push(E), f;
  }, []);
  return n.reverseMonths ? v.reverse() : v;
}
function p0(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: i, startOfMonth: a, endOfMonth: s, addYears: c, endOfYear: u, newDate: l, today: d } = t, { fromYear: g, toYear: p, fromMonth: v, toMonth: f } = e;
  !n && v && (n = v), !n && g && (n = t.newDate(g, 0, 1)), !r && f && (r = f), !r && p && (r = l(p, 11, 31));
  const m = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : g ? n = l(g, 0, 1) : !n && m && (n = o(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = l(p, 11, 31) : !r && m && (r = u(e.today ?? d())), [
    n && i(n),
    r && i(r)
  ];
}
function b0(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: i = 1 } = n, { startOfMonth: a, addMonths: s, differenceInCalendarMonths: c } = r, u = o ? i : 1, l = a(e);
  if (!t)
    return s(l, u);
  if (!(c(t, e) < i))
    return s(l, u);
}
function v0(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: i } = n, { startOfMonth: a, addMonths: s, differenceInCalendarMonths: c } = r, u = o ? i ?? 1 : 1, l = a(e);
  if (!t)
    return s(l, -u);
  if (!(c(l, t) <= 0))
    return s(l, -u);
}
function y0(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function qn(e, t) {
  const [n, r] = Be(e);
  return [t === void 0 ? n : t, r];
}
function C0(e, t) {
  const [n, r] = p0(e, t), { startOfMonth: o, endOfMonth: i } = t, a = Xi(e, n, r, t), [s, c] = qn(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  Kr(() => {
    const E = Xi(e, n, r, t);
    c(E);
  }, [e.timeZone]);
  const u = g0(s, r, e, t), l = f0(u, e.endMonth ? i(e.endMonth) : void 0, e, t), d = h0(u, l, e, t), g = y0(d), p = m0(d), v = v0(s, n, e, t), f = b0(s, r, e, t), { disableNavigation: m, onMonthChange: b } = e, I = (E) => g.some((A) => A.days.some((S) => S.isEqualTo(E))), y = (E) => {
    if (m)
      return;
    let A = o(E);
    n && A < o(n) && (A = o(n)), r && A > o(r) && (A = o(r)), c(A), b == null || b(A);
  };
  return {
    months: d,
    weeks: g,
    days: p,
    navStart: n,
    navEnd: r,
    previousMonth: v,
    nextMonth: f,
    goToMonth: y,
    goToDay: (E) => {
      I(E) || y(E.date);
    }
  };
}
var Le;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Le || (Le = {}));
function Hi(e) {
  return !e[ye.disabled] && !e[ye.hidden] && !e[ye.outside];
}
function I0(e, t, n, r) {
  let o, i = -1;
  for (const a of e) {
    const s = t(a);
    Hi(s) && (s[ye.focused] && i < Le.FocusedModifier ? (o = a, i = Le.FocusedModifier) : r != null && r.isEqualTo(a) && i < Le.LastFocused ? (o = a, i = Le.LastFocused) : n(a.date) && i < Le.Selected ? (o = a, i = Le.Selected) : s[ye.today] && i < Le.Today && (o = a, i = Le.Today));
  }
  return o || (o = e.find((a) => Hi(t(a)))), o;
}
function x0(e, t, n, r, o, i, a) {
  const { ISOWeek: s, broadcastCalendar: c } = i, { addDays: u, addMonths: l, addWeeks: d, addYears: g, endOfBroadcastWeek: p, endOfISOWeek: v, endOfWeek: f, max: m, min: b, startOfBroadcastWeek: I, startOfISOWeek: y, startOfWeek: x } = a;
  let E = {
    day: u,
    week: d,
    month: l,
    year: g,
    startOfWeek: (A) => c ? I(A, a) : s ? y(A) : x(A),
    endOfWeek: (A) => c ? p(A) : s ? v(A) : f(A)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? E = m([r, E]) : t === "after" && o && (E = b([o, E])), E;
}
function Sc(e, t, n, r, o, i, a, s = 0) {
  if (s > 365)
    return;
  const c = x0(e, t, n.date, r, o, i, a), u = !!(i.disabled && it(c, i.disabled, a)), l = !!(i.hidden && it(c, i.hidden, a)), d = c, g = new gc(c, d, a);
  return !u && !l ? g : Sc(e, t, g, r, o, i, a, s + 1);
}
function w0(e, t, n, r, o) {
  const { autoFocus: i } = e, [a, s] = Be(), c = I0(t.days, n, r || (() => !1), a), [u, l] = Be(i ? c : void 0);
  return {
    isFocusTarget: (f) => !!(c != null && c.isEqualTo(f)),
    setFocused: l,
    focused: u,
    blur: () => {
      s(u), l(void 0);
    },
    moveFocus: (f, m) => {
      if (!u)
        return;
      const b = Sc(f, m, u, t.navStart, t.navEnd, e, o);
      b && (e.disableNavigation && !t.days.some((y) => y.isEqualTo(b)) || (t.goToDay(b), l(b)));
    }
  };
}
function A0(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [i, a] = qn(n, o ? n : void 0), s = o ? n : i, { isSameDay: c } = t, u = (p) => (s == null ? void 0 : s.some((v) => c(v, p))) ?? !1, { min: l, max: d } = e;
  return {
    selected: s,
    select: (p, v, f) => {
      let m = [...s ?? []];
      if (u(p)) {
        if ((s == null ? void 0 : s.length) === l || r && (s == null ? void 0 : s.length) === 1)
          return;
        m = s == null ? void 0 : s.filter((b) => !c(b, p));
      } else
        (s == null ? void 0 : s.length) === d ? m = [p] : m = [...m, p];
      return o || a(m), o == null || o(m, p, v, f), m;
    },
    isSelected: u
  };
}
function S0(e, t, n = 0, r = 0, o = !1, i = tt) {
  const { from: a, to: s } = t || {}, { isSameDay: c, isAfter: u, isBefore: l } = i;
  let d;
  if (!a && !s)
    d = { from: e, to: n > 0 ? void 0 : e };
  else if (a && !s)
    c(a, e) ? n === 0 ? d = { from: a, to: e } : o ? d = { from: a, to: void 0 } : d = void 0 : l(e, a) ? d = { from: e, to: a } : d = { from: a, to: e };
  else if (a && s)
    if (c(a, e) && c(s, e))
      o ? d = { from: a, to: s } : d = void 0;
    else if (c(a, e))
      d = { from: a, to: n > 0 ? void 0 : e };
    else if (c(s, e))
      d = { from: e, to: n > 0 ? void 0 : e };
    else if (l(e, a))
      d = { from: e, to: s };
    else if (u(e, a))
      d = { from: a, to: e };
    else if (u(e, s))
      d = { from: a, to: e };
    else
      throw new Error("Invalid range");
  if (d != null && d.from && (d != null && d.to)) {
    const g = i.differenceInCalendarDays(d.to, d.from);
    r > 0 && g > r ? d = { from: e, to: void 0 } : n > 1 && g < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function E0(e, t, n = tt) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const i = n.differenceInCalendarDays(e.to, e.from), a = Math.min(i, 6);
  for (let s = 0; s <= a; s++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Li(e, t, n = tt) {
  return ot(e, t.from, !1, n) || ot(e, t.to, !1, n) || ot(t, e.from, !1, n) || ot(t, e.to, !1, n);
}
function M0(e, t, n = tt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? ot(e, s, !1, n) : Cc(s, n) ? s.some((c) => ot(e, c, !1, n)) : wo(s) ? s.from && s.to ? Li(e, { from: s.from, to: s.to }, n) : !1 : yc(s) ? E0(e, s.dayOfWeek, n) : pc(s) ? n.isAfter(s.before, s.after) ? Li(e, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : it(e.from, s, n) || it(e.to, s, n) : bc(s) || vc(s) ? it(e.from, s, n) || it(e.to, s, n) : !1))
    return !0;
  const a = r.filter((s) => typeof s == "function");
  if (a.length) {
    let s = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let u = 0; u <= c; u++) {
      if (a.some((l) => l(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function O0(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: i, onSelect: a } = e, [s, c] = qn(o, a ? o : void 0), u = a ? o : s;
  return {
    selected: u,
    select: (g, p, v) => {
      const { min: f, max: m } = e, b = g ? S0(g, u, f, m, i, t) : void 0;
      return r && n && (b != null && b.from) && b.to && M0({ from: b.from, to: b.to }, n, t) && (b.from = g, b.to = void 0), a || c(b), a == null || a(b, g, p, v), b;
    },
    isSelected: (g) => u && ot(u, g, !1, t)
  };
}
function P0(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [i, a] = qn(n, o ? n : void 0), s = o ? n : i, { isSameDay: c } = t;
  return {
    selected: s,
    select: (d, g, p) => {
      let v = d;
      return !r && s && s && c(d, s) && (v = void 0), o || a(v), o == null || o(v, d, g, p), v;
    },
    isSelected: (d) => s ? c(s, d) : !1
  };
}
function D0(e, t) {
  const n = P0(e, t), r = A0(e, t), o = O0(e, t);
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
function R0(e) {
  var Oo;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Oe(t.today, t.timeZone)), t.month && (t.month = new Oe(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Oe(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Oe(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Oe(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Oe(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Oo = t.selected) == null ? void 0 : Oo.map((ne) => new Oe(ne, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Oe(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Oe(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: i, locale: a, classNames: s } = rt(() => {
    const ne = { ...xo, ...t.locale };
    return {
      dateLib: new We({
        locale: ne,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: Fv(t.components),
      formatters: zv(t.formatters),
      labels: { ...s0, ...t.labels },
      locale: ne,
      classNames: { ...Ao(), ...t.classNames }
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
  ]), { captionLayout: c, mode: u, navLayout: l, numberOfMonths: d = 1, onDayBlur: g, onDayClick: p, onDayFocus: v, onDayKeyDown: f, onDayMouseEnter: m, onDayMouseLeave: b, onNextClick: I, onPrevClick: y, showWeekNumber: x, styles: h } = t, { formatCaption: E, formatDay: A, formatMonthDropdown: S, formatWeekNumber: O, formatWeekNumberHeader: D, formatWeekdayName: N, formatYearDropdown: F } = r, L = C0(t, i), { days: R, months: P, navStart: M, navEnd: G, previousMonth: w, nextMonth: k, goToMonth: T } = L, z = kv(R, t, M, G, i), { isSelected: Z, select: H, selected: $ } = D0(t, i) ?? {}, { blur: re, focused: oe, isFocusTarget: Q, moveFocus: me, setFocused: ue } = w0(t, L, z, Z ?? (() => !1), i), { labelDayButton: ie, labelGridcell: pe, labelGrid: W, labelMonthDropdown: Ce, labelNav: Se, labelPrevious: De, labelNext: yt, labelWeekday: Ct, labelWeekNumber: It, labelWeekNumberHeader: He, labelYearDropdown: So } = o, Oc = rt(() => jv(i, t.ISOWeek), [i, t.ISOWeek]), Eo = u !== void 0 || p !== void 0, er = he(() => {
    w && (T(w), y == null || y(w));
  }, [w, T, y]), tr = he(() => {
    k && (T(k), I == null || I(k));
  }, [T, k, I]), Pc = he((ne, ve) => (K) => {
    K.preventDefault(), K.stopPropagation(), ue(ne), H == null || H(ne.date, ve, K), p == null || p(ne.date, ve, K);
  }, [H, p, ue]), Dc = he((ne, ve) => (K) => {
    ue(ne), v == null || v(ne.date, ve, K);
  }, [v, ue]), Rc = he((ne, ve) => (K) => {
    re(), g == null || g(ne.date, ve, K);
  }, [re, g]), Gc = he((ne, ve) => (K) => {
    const be = {
      ArrowLeft: [
        K.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        K.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [K.shiftKey ? "year" : "week", "after"],
      ArrowUp: [K.shiftKey ? "year" : "week", "before"],
      PageUp: [K.shiftKey ? "year" : "month", "before"],
      PageDown: [K.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (be[K.key]) {
      K.preventDefault(), K.stopPropagation();
      const [Re, ae] = be[K.key];
      me(Re, ae);
    }
    f == null || f(ne.date, ve, K);
  }, [me, f, t.dir]), kc = he((ne, ve) => (K) => {
    m == null || m(ne.date, ve, K);
  }, [m]), Nc = he((ne, ve) => (K) => {
    b == null || b(ne.date, ve, K);
  }, [b]), Fc = he((ne) => (ve) => {
    const K = Number(ve.target.value), be = i.setMonth(i.startOfMonth(ne), K);
    T(be);
  }, [i, T]), Tc = he((ne) => (ve) => {
    const K = Number(ve.target.value), be = i.setYear(i.startOfMonth(ne), K);
    T(be);
  }, [i, T]), { className: Wc, style: Bc } = rt(() => ({
    className: [s[J.Root], t.className].filter(Boolean).join(" "),
    style: { ...h == null ? void 0 : h[J.Root], ...t.style }
  }), [s, t.className, t.style, h]), Vc = Tv(t), Mo = Ne(null);
  d0(Mo, !!t.animate, {
    classNames: s,
    months: P,
    focused: oe,
    dateLib: i
  });
  const Yc = {
    dayPickerProps: t,
    selected: $,
    select: H,
    isSelected: Z,
    months: P,
    nextMonth: k,
    previousMonth: w,
    goToMonth: T,
    getModifiers: z,
    components: n,
    classNames: s,
    styles: h,
    labels: o,
    formatters: r
  };
  return V.createElement(
    hc.Provider,
    { value: Yc },
    V.createElement(
      n.Root,
      { rootRef: t.animate ? Mo : void 0, className: Wc, style: Bc, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Vc },
      V.createElement(
        n.Months,
        { className: s[J.Months], style: h == null ? void 0 : h[J.Months] },
        !t.hideNavigation && !l && V.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: s[J.Nav], style: h == null ? void 0 : h[J.Nav], "aria-label": Se(), onPreviousClick: er, onNextClick: tr, previousMonth: w, nextMonth: k }),
        P.map((ne, ve) => V.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: s[J.Month],
            style: h == null ? void 0 : h[J.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ve,
            displayIndex: ve,
            calendarMonth: ne
          },
          l === "around" && !t.hideNavigation && ve === 0 && V.createElement(
            n.PreviousMonthButton,
            { type: "button", className: s[J.PreviousMonthButton], tabIndex: w ? void 0 : -1, "aria-disabled": w ? void 0 : !0, "aria-label": De(w), onClick: er, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(n.Chevron, { disabled: w ? void 0 : !0, className: s[J.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          V.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: s[J.MonthCaption], style: h == null ? void 0 : h[J.MonthCaption], calendarMonth: ne, displayIndex: ve }, c != null && c.startsWith("dropdown") ? V.createElement(
            n.DropdownNav,
            { className: s[J.Dropdowns], style: h == null ? void 0 : h[J.Dropdowns] },
            (() => {
              const K = c === "dropdown" || c === "dropdown-months" ? V.createElement(n.MonthsDropdown, { key: "month", className: s[J.MonthsDropdown], "aria-label": Ce(), classNames: s, components: n, disabled: !!t.disableNavigation, onChange: Fc(ne.date), options: Jv(ne.date, M, G, r, i), style: h == null ? void 0 : h[J.Dropdown], value: i.getMonth(ne.date) }) : V.createElement("span", { key: "month" }, S(ne.date, i)), be = c === "dropdown" || c === "dropdown-years" ? V.createElement(n.YearsDropdown, { key: "year", className: s[J.YearsDropdown], "aria-label": So(i.options), classNames: s, components: n, disabled: !!t.disableNavigation, onChange: Tc(ne.date), options: $v(M, G, r, i, !!t.reverseYears), style: h == null ? void 0 : h[J.Dropdown], value: i.getYear(ne.date) }) : V.createElement("span", { key: "year" }, F(ne.date, i));
              return i.getMonthYearOrder() === "year-first" ? [be, K] : [K, be];
            })(),
            V.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, E(ne.date, i.options, i))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            V.createElement(n.CaptionLabel, { className: s[J.CaptionLabel], role: "status", "aria-live": "polite" }, E(ne.date, i.options, i))
          )),
          l === "around" && !t.hideNavigation && ve === d - 1 && V.createElement(
            n.NextMonthButton,
            { type: "button", className: s[J.NextMonthButton], tabIndex: k ? void 0 : -1, "aria-disabled": k ? void 0 : !0, "aria-label": yt(k), onClick: tr, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(n.Chevron, { disabled: k ? void 0 : !0, className: s[J.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ve === d - 1 && l === "after" && !t.hideNavigation && V.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: s[J.Nav], style: h == null ? void 0 : h[J.Nav], "aria-label": Se(), onPreviousClick: er, onNextClick: tr, previousMonth: w, nextMonth: k }),
          V.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": u === "multiple" || u === "range", "aria-label": W(ne.date, i.options, i) || void 0, className: s[J.MonthGrid], style: h == null ? void 0 : h[J.MonthGrid] },
            !t.hideWeekdays && V.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: s[J.Weekdays], style: h == null ? void 0 : h[J.Weekdays] },
              x && V.createElement(n.WeekNumberHeader, { "aria-label": He(i.options), className: s[J.WeekNumberHeader], style: h == null ? void 0 : h[J.WeekNumberHeader], scope: "col" }, D()),
              Oc.map((K) => V.createElement(n.Weekday, { "aria-label": Ct(K, i.options, i), className: s[J.Weekday], key: String(K), style: h == null ? void 0 : h[J.Weekday], scope: "col" }, N(K, i.options, i)))
            ),
            V.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: s[J.Weeks], style: h == null ? void 0 : h[J.Weeks] }, ne.weeks.map((K) => V.createElement(
              n.Week,
              { className: s[J.Week], key: K.weekNumber, style: h == null ? void 0 : h[J.Week], week: K },
              x && // biome-ignore lint/a11y/useSemanticElements: react component
              V.createElement(n.WeekNumber, { week: K, style: h == null ? void 0 : h[J.WeekNumber], "aria-label": It(K.weekNumber, {
                locale: a
              }), className: s[J.WeekNumber], scope: "row", role: "rowheader" }, O(K.weekNumber, i)),
              K.days.map((be) => {
                const { date: Re } = be, ae = z(be);
                if (ae[ye.focused] = !ae.hidden && !!(oe != null && oe.isEqualTo(be)), ae[Ve.selected] = (Z == null ? void 0 : Z(Re)) || ae.selected, wo($)) {
                  const { from: nr, to: rr } = $;
                  ae[Ve.range_start] = !!(nr && rr && i.isSameDay(Re, nr)), ae[Ve.range_end] = !!(nr && rr && i.isSameDay(Re, rr)), ae[Ve.range_middle] = ot($, Re, !0, i);
                }
                const Xc = _v(ae, h, t.modifiersStyles), Hc = Nv(ae, s, t.modifiersClassNames), Lc = !Eo && !ae.hidden ? pe(Re, ae, i.options, i) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  V.createElement(n.Day, { key: `${i.format(Re, "yyyy-MM-dd")}_${i.format(be.displayMonth, "yyyy-MM")}`, day: be, modifiers: ae, className: Hc.join(" "), style: Xc, role: "gridcell", "aria-selected": ae.selected || void 0, "aria-label": Lc, "data-day": i.format(Re, "yyyy-MM-dd"), "data-month": be.outside ? i.format(Re, "yyyy-MM") : void 0, "data-selected": ae.selected || void 0, "data-disabled": ae.disabled || void 0, "data-hidden": ae.hidden || void 0, "data-outside": be.outside || void 0, "data-focused": ae.focused || void 0, "data-today": ae.today || void 0 }, !ae.hidden && Eo ? V.createElement(n.DayButton, { className: s[J.DayButton], style: h == null ? void 0 : h[J.DayButton], type: "button", day: be, modifiers: ae, disabled: ae.disabled || void 0, tabIndex: Q(be) ? 0 : -1, "aria-label": ie(Re, ae, i.options, i), onClick: Pc(be, ae), onBlur: Rc(be, ae), onFocus: Dc(be, ae), onKeyDown: Gc(be, ae), onMouseEnter: kc(be, ae), onMouseLeave: Nc(be, ae) }, A(Re, i.options, i)) : !ae.hidden && A(be.date, i.options, i))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      V.createElement(n.Footer, { className: s[J.Footer], style: h == null ? void 0 : h[J.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function G0({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "ghost",
  formatters: i,
  components: a,
  ...s
}) {
  const c = Ao();
  return /* @__PURE__ */ B(
    R0,
    {
      showOutsideDays: n,
      className: q(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (u) => u.toLocaleString("default", { month: "short" }),
        ...i
      },
      classNames: {
        root: q("w-fit", c.root),
        months: q(
          "relative flex flex-col gap-4 md:flex-row",
          c.months
        ),
        month: q("flex w-full flex-col gap-4", c.month),
        nav: q(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          c.nav
        ),
        button_previous: q(
          Fr({ variant: o, size: "icon" }),
          "h-8 w-8 select-none p-0 aria-disabled:opacity-50",
          c.button_previous
        ),
        button_next: q(
          Fr({ variant: o, size: "icon" }),
          "h-8 w-8 select-none p-0 aria-disabled:opacity-50",
          c.button_next
        ),
        month_caption: q(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          c.month_caption
        ),
        dropdowns: q(
          "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
          c.dropdowns
        ),
        dropdown_root: q(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          c.dropdown_root
        ),
        dropdown: q(
          "bg-popover absolute inset-0 opacity-0",
          c.dropdown
        ),
        caption_label: q(
          "select-none font-medium",
          r === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          c.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: q("flex", c.weekdays),
        weekday: q(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          c.weekday
        ),
        week: q("mt-2 flex w-full", c.week),
        week_number_header: q(
          "w-[--cell-size] select-none",
          c.week_number_header
        ),
        week_number: q(
          "text-muted-foreground select-none text-[0.8rem]",
          c.week_number
        ),
        day: q(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          c.day
        ),
        range_start: q(
          "bg-accent rounded-l-md",
          c.range_start
        ),
        range_middle: q("rounded-none", c.range_middle),
        range_end: q("bg-accent rounded-r-md", c.range_end),
        today: q(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          c.today
        ),
        outside: q(
          "text-muted-foreground aria-selected:text-muted-foreground",
          c.outside
        ),
        disabled: q(
          "text-muted-foreground opacity-50",
          c.disabled
        ),
        hidden: q("invisible", c.hidden),
        ...t
      },
      components: {
        Root: ({ className: u, rootRef: l, ...d }) => /* @__PURE__ */ B(
          "div",
          {
            "data-slot": "calendar",
            ref: l,
            className: q(u),
            ...d
          }
        ),
        Chevron: ({ className: u, orientation: l, ...d }) => l === "left" ? /* @__PURE__ */ B($c, { className: q("size-4", u), ...d }) : l === "right" ? /* @__PURE__ */ B(
          Uc,
          {
            className: q("size-4", u),
            ...d
          }
        ) : /* @__PURE__ */ B(Qc, { className: q("size-4", u), ...d }),
        DayButton: k0,
        WeekNumber: ({ children: u, ...l }) => /* @__PURE__ */ B("td", { ...l, children: /* @__PURE__ */ B("div", { className: "flex size-[--cell-size] items-center justify-center text-center", children: u }) }),
        ...a
      },
      ...s
    }
  );
}
function k0({
  className: e,
  day: t,
  modifiers: n,
  style: r,
  type: o,
  ...i
}) {
  const a = Ao(), s = C.useRef(null);
  return C.useEffect(() => {
    var c;
    n.focused && ((c = s.current) == null || c.focus());
  }, [n.focused]), /* @__PURE__ */ B(
    sa,
    {
      ref: s,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: q(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        a.day,
        e
      ),
      ...i
    }
  );
}
var N0 = "Label", Ec = C.forwardRef((e, t) => /* @__PURE__ */ B(
  et.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ec.displayName = N0;
var Mc = Ec;
const F0 = Ui(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), T0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ B(
  Mc,
  {
    ref: n,
    className: q(F0(), e),
    ...t
  }
));
T0.displayName = Mc.displayName;
export {
  sa as Button,
  G0 as Calendar,
  k0 as CalendarDayButton,
  L0 as DATETIME_FORMAT,
  Z0 as DATETIME_FORMAT_ISO,
  ls as DATE_FORMAT,
  H0 as DATE_FORMAT_ISO,
  Dg as Datepicker,
  la as Input,
  T0 as Label,
  Pp as Popover,
  J0 as PopoverAnchor,
  Ks as PopoverContent,
  Dp as PopoverTrigger,
  xg as Select,
  Fr as buttonVariants,
  q as cn,
  Jt as dayjs,
  pr as formatDate,
  Og as isValidDate,
  Pg as parseDate,
  X0 as theme,
  z0 as toUTC
};
