function Te(e) {
  var l, s, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var g = e.length;
    for (l = 0; l < g; l++) e[l] && (s = Te(e[l])) && (o && (o += " "), o += s);
  } else for (s in e) e[s] && (o && (o += " "), o += s);
  return o;
}
function Ue() {
  for (var e, l, s = 0, o = "", g = arguments.length; s < g; s++) (e = arguments[s]) && (l = Te(e)) && (o && (o += " "), o += l);
  return o;
}
const xe = "-", Ne = (e) => {
  const l = We(e), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (c) => {
      const v = c.split(xe);
      return v[0] === "" && v.length !== 1 && v.shift(), Ye(v, l) || Ve(c);
    },
    getConflictingClassGroupIds: (c, v) => {
      const a = s[c] || [];
      return v && o[c] ? [...a, ...o[c]] : a;
    }
  };
}, Ye = (e, l) => {
  var c;
  if (e.length === 0)
    return l.classGroupId;
  const s = e[0], o = l.nextPart.get(s), g = o ? Ye(e.slice(1), o) : void 0;
  if (g)
    return g;
  if (l.validators.length === 0)
    return;
  const y = e.join(xe);
  return (c = l.validators.find(({
    validator: v
  }) => v(y))) == null ? void 0 : c.classGroupId;
}, Me = /^\[(.+)\]$/, Ve = (e) => {
  if (Me.test(e)) {
    const l = Me.exec(e)[1], s = l == null ? void 0 : l.substring(0, l.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, We = (e) => {
  const {
    theme: l,
    classGroups: s
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const g in s)
    we(s[g], o, g, l);
  return o;
}, we = (e, l, s, o) => {
  e.forEach((g) => {
    if (typeof g == "string") {
      const y = g === "" ? l : Se(l, g);
      y.classGroupId = s;
      return;
    }
    if (typeof g == "function") {
      if (Ze(g)) {
        we(g(o), l, s, o);
        return;
      }
      l.validators.push({
        validator: g,
        classGroupId: s
      });
      return;
    }
    Object.entries(g).forEach(([y, c]) => {
      we(c, Se(l, y), s, o);
    });
  });
}, Se = (e, l) => {
  let s = e;
  return l.split(xe).forEach((o) => {
    s.nextPart.has(o) || s.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(o);
  }), s;
}, Ze = (e) => e.isThemeGetter, Be = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const g = (y, c) => {
    s.set(y, c), l++, l > e && (l = 0, o = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(y) {
      let c = s.get(y);
      if (c !== void 0)
        return c;
      if ((c = o.get(y)) !== void 0)
        return g(y, c), c;
    },
    set(y, c) {
      s.has(y) ? s.set(y, c) : g(y, c);
    }
  };
}, ye = "!", ve = ":", Je = ve.length, qe = (e) => {
  const {
    prefix: l,
    experimentalParseClassName: s
  } = e;
  let o = (g) => {
    const y = [];
    let c = 0, v = 0, a = 0, C;
    for (let R = 0; R < g.length; R++) {
      let p = g[R];
      if (c === 0 && v === 0) {
        if (p === ve) {
          y.push(g.slice(a, R)), a = R + Je;
          continue;
        }
        if (p === "/") {
          C = R;
          continue;
        }
      }
      p === "[" ? c++ : p === "]" ? c-- : p === "(" ? v++ : p === ")" && v--;
    }
    const S = y.length === 0 ? g : g.substring(a), P = Qe(S), J = P !== S, U = C && C > a ? C - a : void 0;
    return {
      modifiers: y,
      hasImportantModifier: J,
      baseClassName: P,
      maybePostfixModifierPosition: U
    };
  };
  if (l) {
    const g = l + ve, y = o;
    o = (c) => c.startsWith(g) ? y(c.substring(g.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (s) {
    const g = o;
    o = (y) => s({
      className: y,
      parseClassName: g
    });
  }
  return o;
}, Qe = (e) => e.endsWith(ye) ? e.substring(0, e.length - 1) : e.startsWith(ye) ? e.substring(1) : e, Xe = (e) => {
  const l = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const g = [];
    let y = [];
    return o.forEach((c) => {
      c[0] === "[" || l[c] ? (g.push(...y.sort(), c), y = []) : y.push(c);
    }), g.push(...y.sort()), g;
  };
}, Ke = (e) => ({
  cache: Be(e.cacheSize),
  parseClassName: qe(e),
  sortModifiers: Xe(e),
  ...Ne(e)
}), et = /\s+/, tt = (e, l) => {
  const {
    parseClassName: s,
    getClassGroupId: o,
    getConflictingClassGroupIds: g,
    sortModifiers: y
  } = l, c = [], v = e.trim().split(et);
  let a = "";
  for (let C = v.length - 1; C >= 0; C -= 1) {
    const S = v[C], {
      isExternal: P,
      modifiers: J,
      hasImportantModifier: U,
      baseClassName: R,
      maybePostfixModifierPosition: p
    } = s(S);
    if (P) {
      a = S + (a.length > 0 ? " " + a : a);
      continue;
    }
    let f = !!p, x = o(f ? R.substring(0, p) : R);
    if (!x) {
      if (!f) {
        a = S + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (x = o(R), !x) {
        a = S + (a.length > 0 ? " " + a : a);
        continue;
      }
      f = !1;
    }
    const T = y(J).join(":"), $ = U ? T + ye : T, H = $ + x;
    if (c.includes(H))
      continue;
    c.push(H);
    const _ = g(x, f);
    for (let E = 0; E < _.length; ++E) {
      const F = _[E];
      c.push($ + F);
    }
    a = S + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function rt() {
  let e = 0, l, s, o = "";
  for (; e < arguments.length; )
    (l = arguments[e++]) && (s = Ce(l)) && (o && (o += " "), o += s);
  return o;
}
const Ce = (e) => {
  if (typeof e == "string")
    return e;
  let l, s = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (l = Ce(e[o])) && (s && (s += " "), s += l);
  return s;
};
function ot(e, ...l) {
  let s, o, g, y = c;
  function c(a) {
    const C = l.reduce((S, P) => P(S), e());
    return s = Ke(C), o = s.cache.get, g = s.cache.set, y = v, v(a);
  }
  function v(a) {
    const C = o(a);
    if (C)
      return C;
    const S = tt(a, s);
    return g(a, S), S;
  }
  return function() {
    return y(rt.apply(null, arguments));
  };
}
const V = (e) => {
  const l = (s) => s[e] || [];
  return l.isThemeGetter = !0, l;
}, Ae = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Oe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, nt = /^\d+\/\d+$/, st = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, at = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, it = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ct = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, oe = (e) => nt.test(e), z = (e) => !!e && !Number.isNaN(Number(e)), te = (e) => !!e && Number.isInteger(Number(e)), ge = (e) => e.endsWith("%") && z(e.slice(0, -1)), K = (e) => st.test(e), dt = () => !0, ut = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  at.test(e) && !it.test(e)
), Ie = () => !1, ft = (e) => lt.test(e), mt = (e) => ct.test(e), ht = (e) => !d(e) && !u(e), pt = (e) => ne(e, Pe, Ie), d = (e) => Ae.test(e), re = (e) => ne(e, Re, ut), be = (e) => ne(e, vt, z), De = (e) => ne(e, Le, Ie), gt = (e) => ne(e, _e, mt), de = (e) => ne(e, Ee, ft), u = (e) => Oe.test(e), ie = (e) => se(e, Re), bt = (e) => se(e, xt), ze = (e) => se(e, Le), wt = (e) => se(e, Pe), yt = (e) => se(e, _e), ue = (e) => se(e, Ee, !0), ne = (e, l, s) => {
  const o = Ae.exec(e);
  return o ? o[1] ? l(o[1]) : s(o[2]) : !1;
}, se = (e, l, s = !1) => {
  const o = Oe.exec(e);
  return o ? o[1] ? l(o[1]) : s : !1;
}, Le = (e) => e === "position" || e === "percentage", _e = (e) => e === "image" || e === "url", Pe = (e) => e === "length" || e === "size" || e === "bg-size", Re = (e) => e === "length", vt = (e) => e === "number", xt = (e) => e === "family-name", Ee = (e) => e === "shadow", kt = () => {
  const e = V("color"), l = V("font"), s = V("text"), o = V("font-weight"), g = V("tracking"), y = V("leading"), c = V("breakpoint"), v = V("container"), a = V("spacing"), C = V("radius"), S = V("shadow"), P = V("inset-shadow"), J = V("text-shadow"), U = V("drop-shadow"), R = V("blur"), p = V("perspective"), f = V("aspect"), x = V("ease"), T = V("animate"), $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [
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
  ], _ = () => [...H(), u, d], E = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", "contain", "none"], m = () => [u, d, a], I = () => [oe, "full", "auto", ...m()], A = () => [te, "none", "subgrid", u, d], M = () => ["auto", {
    span: ["full", te, u, d]
  }, te, u, d], j = () => [te, "auto", u, d], W = () => ["auto", "min", "max", "fr", u, d], h = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], n = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], r = () => ["auto", ...m()], i = () => [oe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], t = () => [e, u, d], b = () => [...H(), ze, De, {
    position: [u, d]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], k = () => ["auto", "cover", "contain", wt, pt, {
    size: [u, d]
  }], O = () => [ge, ie, re], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    C,
    u,
    d
  ], Y = () => ["", z, ie, re], N = () => ["solid", "dashed", "dotted", "double"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [z, ge, ze, De], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    R,
    u,
    d
  ], B = () => ["none", z, u, d], G = () => ["none", z, u, d], Z = () => [z, u, d], q = () => [oe, "full", ...m()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [K],
      breakpoint: [K],
      color: [dt],
      container: [K],
      "drop-shadow": [K],
      ease: ["in", "out", "in-out"],
      font: [ht],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [K],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [K],
      shadow: [K],
      spacing: ["px", z],
      text: [K],
      "text-shadow": [K],
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
        aspect: ["auto", "square", oe, d, u, f]
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
        columns: [z, d, u, v]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
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
        object: _()
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
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        z: [te, "auto", u, d]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [oe, "full", "auto", v, ...m()]
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
        flex: [z, oe, "auto", "initial", "none", d]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", z, u, d]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", z, u, d]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [te, "first", "last", "none", u, d]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: M()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: M()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
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
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: m()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": m()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": m()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...h(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...n(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...n()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...h()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...n(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...n(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": h()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...n(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...n()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: m()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: m()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: m()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: m()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: m()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: m()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: m()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: m()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: m()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: r()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: r()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: r()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: r()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: r()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: r()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: r()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: r()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: r()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": m()
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
        "space-y": m()
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
        size: i()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [v, "screen", ...i()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          v,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...i()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          v,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [c]
          },
          ...i()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...i()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...i()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...i()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, ie, re]
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
        font: [o, u, be]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ge, d]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [bt, d, l]
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
        tracking: [g, u, d]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [z, "none", u, be]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          y,
          ...m()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", u, d]
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
        list: ["disc", "decimal", "none", u, d]
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
        placeholder: t()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: t()
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
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [z, "from-font", "auto", u, re]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: t()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [z, "auto", u, d]
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
        indent: m()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", u, d]
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
        content: ["none", u, d]
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
        bg: b()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: w()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: k()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, te, u, d],
          radial: ["", u, d],
          conic: [te, u, d]
        }, yt, gt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: t()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: t()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: t()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: t()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Y()
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
        "divide-y": Y()
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
        border: [...N(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...N(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: t()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": t()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": t()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": t()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": t()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": t()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": t()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": t()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": t()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: t()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...N(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z, u, d]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", z, ie, re]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: t()
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
          S,
          ue,
          de
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: t()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", P, ue, de]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": t()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Y()
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
        ring: t()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [z, re]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": t()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Y()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": t()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", J, ue, de]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": t()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [z, u, d]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
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
        "mask-linear": [z]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": L()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": t()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": t()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": t()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": t()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": t()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": t()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": t()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": t()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": t()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": t()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": t()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": t()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": t()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": t()
      }],
      "mask-image-radial": [{
        "mask-radial": [u, d]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": t()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": t()
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
        "mask-radial-at": H()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [z]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": L()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": t()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": t()
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
        mask: b()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: w()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: k()
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
        mask: ["none", u, d]
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
          u,
          d
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: X()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [z, u, d]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [z, u, d]
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
          U,
          ue,
          de
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": t()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", z, u, d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [z, u, d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", z, u, d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z, u, d]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", z, u, d]
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
          u,
          d
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": X()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [z, u, d]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [z, u, d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", z, u, d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [z, u, d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", z, u, d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [z, u, d]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z, u, d]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", z, u, d]
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
        "border-spacing": m()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": m()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": m()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", u, d]
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
        duration: [z, "initial", u, d]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, u, d]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [z, u, d]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", T, u, d]
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
        perspective: [p, u, d]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": _()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: B()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": B()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": B()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": B()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: G()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": G()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": G()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": G()
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
        skew: Z()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Z()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Z()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [u, d, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: _()
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
        translate: q()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": q()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": q()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": q()
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
        accent: t()
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
        caret: t()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", u, d]
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
        "scroll-m": m()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": m()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": m()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": m()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": m()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": m()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": m()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": m()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": m()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": m()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": m()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": m()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": m()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": m()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": m()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": m()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": m()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": m()
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
        "will-change": ["auto", "scroll", "contents", "transform", u, d]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...t()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, ie, re, be]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...t()]
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
}, $t = /* @__PURE__ */ ot(kt);
function Ct(...e) {
  return $t(Ue(e));
}
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ge = { exports: {} };
(function(e, l) {
  (function(s, o) {
    e.exports = o();
  })(ke, function() {
    var s = 1e3, o = 6e4, g = 36e5, y = "millisecond", c = "second", v = "minute", a = "hour", C = "day", S = "week", P = "month", J = "quarter", U = "year", R = "date", p = "Invalid Date", f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(h) {
      var n = ["th", "st", "nd", "rd"], r = h % 100;
      return "[" + h + (n[(r - 20) % 10] || n[r] || n[0]) + "]";
    } }, $ = function(h, n, r) {
      var i = String(h);
      return !i || i.length >= n ? h : "" + Array(n + 1 - i.length).join(r) + h;
    }, H = { s: $, z: function(h) {
      var n = -h.utcOffset(), r = Math.abs(n), i = Math.floor(r / 60), t = r % 60;
      return (n <= 0 ? "+" : "-") + $(i, 2, "0") + ":" + $(t, 2, "0");
    }, m: function h(n, r) {
      if (n.date() < r.date()) return -h(r, n);
      var i = 12 * (r.year() - n.year()) + (r.month() - n.month()), t = n.clone().add(i, P), b = r - t < 0, w = n.clone().add(i + (b ? -1 : 1), P);
      return +(-(i + (r - t) / (b ? t - w : w - t)) || 0);
    }, a: function(h) {
      return h < 0 ? Math.ceil(h) || 0 : Math.floor(h);
    }, p: function(h) {
      return { M: P, y: U, w: S, d: C, D: R, h: a, m: v, s: c, ms: y, Q: J }[h] || String(h || "").toLowerCase().replace(/s$/, "");
    }, u: function(h) {
      return h === void 0;
    } }, _ = "en", E = {};
    E[_] = T;
    var F = "$isDayjsObject", m = function(h) {
      return h instanceof j || !(!h || !h[F]);
    }, I = function h(n, r, i) {
      var t;
      if (!n) return _;
      if (typeof n == "string") {
        var b = n.toLowerCase();
        E[b] && (t = b), r && (E[b] = r, t = b);
        var w = n.split("-");
        if (!t && w.length > 1) return h(w[0]);
      } else {
        var k = n.name;
        E[k] = n, t = k;
      }
      return !i && t && (_ = t), t || !i && _;
    }, A = function(h, n) {
      if (m(h)) return h.clone();
      var r = typeof n == "object" ? n : {};
      return r.date = h, r.args = arguments, new j(r);
    }, M = H;
    M.l = I, M.i = m, M.w = function(h, n) {
      return A(h, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var j = function() {
      function h(r) {
        this.$L = I(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[F] = !0;
      }
      var n = h.prototype;
      return n.parse = function(r) {
        this.$d = function(i) {
          var t = i.date, b = i.utc;
          if (t === null) return /* @__PURE__ */ new Date(NaN);
          if (M.u(t)) return /* @__PURE__ */ new Date();
          if (t instanceof Date) return new Date(t);
          if (typeof t == "string" && !/Z$/i.test(t)) {
            var w = t.match(f);
            if (w) {
              var k = w[2] - 1 || 0, O = (w[7] || "0").substring(0, 3);
              return b ? new Date(Date.UTC(w[1], k, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, O)) : new Date(w[1], k, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, O);
            }
          }
          return new Date(t);
        }(r), this.init();
      }, n.init = function() {
        var r = this.$d;
        this.$y = r.getFullYear(), this.$M = r.getMonth(), this.$D = r.getDate(), this.$W = r.getDay(), this.$H = r.getHours(), this.$m = r.getMinutes(), this.$s = r.getSeconds(), this.$ms = r.getMilliseconds();
      }, n.$utils = function() {
        return M;
      }, n.isValid = function() {
        return this.$d.toString() !== p;
      }, n.isSame = function(r, i) {
        var t = A(r);
        return this.startOf(i) <= t && t <= this.endOf(i);
      }, n.isAfter = function(r, i) {
        return A(r) < this.startOf(i);
      }, n.isBefore = function(r, i) {
        return this.endOf(i) < A(r);
      }, n.$g = function(r, i, t) {
        return M.u(r) ? this[i] : this.set(t, r);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(r, i) {
        var t = this, b = !!M.u(i) || i, w = M.p(r), k = function(B, G) {
          var Z = M.w(t.$u ? Date.UTC(t.$y, G, B) : new Date(t.$y, G, B), t);
          return b ? Z : Z.endOf(C);
        }, O = function(B, G) {
          return M.w(t.toDate()[B].apply(t.toDate("s"), (b ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), t);
        }, D = this.$W, Y = this.$M, N = this.$D, Q = "set" + (this.$u ? "UTC" : "");
        switch (w) {
          case U:
            return b ? k(1, 0) : k(31, 11);
          case P:
            return b ? k(1, Y) : k(0, Y + 1);
          case S:
            var L = this.$locale().weekStart || 0, X = (D < L ? D + 7 : D) - L;
            return k(b ? N - X : N + (6 - X), Y);
          case C:
          case R:
            return O(Q + "Hours", 0);
          case a:
            return O(Q + "Minutes", 1);
          case v:
            return O(Q + "Seconds", 2);
          case c:
            return O(Q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(r) {
        return this.startOf(r, !1);
      }, n.$set = function(r, i) {
        var t, b = M.p(r), w = "set" + (this.$u ? "UTC" : ""), k = (t = {}, t[C] = w + "Date", t[R] = w + "Date", t[P] = w + "Month", t[U] = w + "FullYear", t[a] = w + "Hours", t[v] = w + "Minutes", t[c] = w + "Seconds", t[y] = w + "Milliseconds", t)[b], O = b === C ? this.$D + (i - this.$W) : i;
        if (b === P || b === U) {
          var D = this.clone().set(R, 1);
          D.$d[k](O), D.init(), this.$d = D.set(R, Math.min(this.$D, D.daysInMonth())).$d;
        } else k && this.$d[k](O);
        return this.init(), this;
      }, n.set = function(r, i) {
        return this.clone().$set(r, i);
      }, n.get = function(r) {
        return this[M.p(r)]();
      }, n.add = function(r, i) {
        var t, b = this;
        r = Number(r);
        var w = M.p(i), k = function(Y) {
          var N = A(b);
          return M.w(N.date(N.date() + Math.round(Y * r)), b);
        };
        if (w === P) return this.set(P, this.$M + r);
        if (w === U) return this.set(U, this.$y + r);
        if (w === C) return k(1);
        if (w === S) return k(7);
        var O = (t = {}, t[v] = o, t[a] = g, t[c] = s, t)[w] || 1, D = this.$d.getTime() + r * O;
        return M.w(D, this);
      }, n.subtract = function(r, i) {
        return this.add(-1 * r, i);
      }, n.format = function(r) {
        var i = this, t = this.$locale();
        if (!this.isValid()) return t.invalidDate || p;
        var b = r || "YYYY-MM-DDTHH:mm:ssZ", w = M.z(this), k = this.$H, O = this.$m, D = this.$M, Y = t.weekdays, N = t.months, Q = t.meridiem, L = function(G, Z, q, ee) {
          return G && (G[Z] || G(i, b)) || q[Z].slice(0, ee);
        }, X = function(G) {
          return M.s(k % 12 || 12, G, "0");
        }, B = Q || function(G, Z, q) {
          var ee = G < 12 ? "AM" : "PM";
          return q ? ee.toLowerCase() : ee;
        };
        return b.replace(x, function(G, Z) {
          return Z || function(q) {
            switch (q) {
              case "YY":
                return String(i.$y).slice(-2);
              case "YYYY":
                return M.s(i.$y, 4, "0");
              case "M":
                return D + 1;
              case "MM":
                return M.s(D + 1, 2, "0");
              case "MMM":
                return L(t.monthsShort, D, N, 3);
              case "MMMM":
                return L(N, D);
              case "D":
                return i.$D;
              case "DD":
                return M.s(i.$D, 2, "0");
              case "d":
                return String(i.$W);
              case "dd":
                return L(t.weekdaysMin, i.$W, Y, 2);
              case "ddd":
                return L(t.weekdaysShort, i.$W, Y, 3);
              case "dddd":
                return Y[i.$W];
              case "H":
                return String(k);
              case "HH":
                return M.s(k, 2, "0");
              case "h":
                return X(1);
              case "hh":
                return X(2);
              case "a":
                return B(k, O, !0);
              case "A":
                return B(k, O, !1);
              case "m":
                return String(O);
              case "mm":
                return M.s(O, 2, "0");
              case "s":
                return String(i.$s);
              case "ss":
                return M.s(i.$s, 2, "0");
              case "SSS":
                return M.s(i.$ms, 3, "0");
              case "Z":
                return w;
            }
            return null;
          }(G) || w.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(r, i, t) {
        var b, w = this, k = M.p(i), O = A(r), D = (O.utcOffset() - this.utcOffset()) * o, Y = this - O, N = function() {
          return M.m(w, O);
        };
        switch (k) {
          case U:
            b = N() / 12;
            break;
          case P:
            b = N();
            break;
          case J:
            b = N() / 3;
            break;
          case S:
            b = (Y - D) / 6048e5;
            break;
          case C:
            b = (Y - D) / 864e5;
            break;
          case a:
            b = Y / g;
            break;
          case v:
            b = Y / o;
            break;
          case c:
            b = Y / s;
            break;
          default:
            b = Y;
        }
        return t ? b : M.a(b);
      }, n.daysInMonth = function() {
        return this.endOf(P).$D;
      }, n.$locale = function() {
        return E[this.$L];
      }, n.locale = function(r, i) {
        if (!r) return this.$L;
        var t = this.clone(), b = I(r, i, !0);
        return b && (t.$L = b), t;
      }, n.clone = function() {
        return M.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, h;
    }(), W = j.prototype;
    return A.prototype = W, [["$ms", y], ["$s", c], ["$m", v], ["$H", a], ["$W", C], ["$M", P], ["$y", U], ["$D", R]].forEach(function(h) {
      W[h[1]] = function(n) {
        return this.$g(n, h[0], h[1]);
      };
    }), A.extend = function(h, n) {
      return h.$i || (h(n, j, A), h.$i = !0), A;
    }, A.locale = I, A.isDayjs = m, A.unix = function(h) {
      return A(1e3 * h);
    }, A.en = E[_], A.Ls = E, A.p = {}, A;
  });
})(Ge);
var Mt = Ge.exports;
const ae = /* @__PURE__ */ $e(Mt);
var He = { exports: {} };
(function(e, l) {
  (function(s, o) {
    e.exports = o();
  })(ke, function() {
    var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, o = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, g = /\d/, y = /\d\d/, c = /\d\d?/, v = /\d*[^-_:/,()\s\d]+/, a = {}, C = function(f) {
      return (f = +f) + (f > 68 ? 1900 : 2e3);
    }, S = function(f) {
      return function(x) {
        this[f] = +x;
      };
    }, P = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
      (this.zone || (this.zone = {})).offset = function(x) {
        if (!x || x === "Z") return 0;
        var T = x.match(/([+-]|\d\d)/g), $ = 60 * T[1] + (+T[2] || 0);
        return $ === 0 ? 0 : T[0] === "+" ? -$ : $;
      }(f);
    }], J = function(f) {
      var x = a[f];
      return x && (x.indexOf ? x : x.s.concat(x.f));
    }, U = function(f, x) {
      var T, $ = a.meridiem;
      if ($) {
        for (var H = 1; H <= 24; H += 1) if (f.indexOf($(H, 0, x)) > -1) {
          T = H > 12;
          break;
        }
      } else T = f === (x ? "pm" : "PM");
      return T;
    }, R = { A: [v, function(f) {
      this.afternoon = U(f, !1);
    }], a: [v, function(f) {
      this.afternoon = U(f, !0);
    }], Q: [g, function(f) {
      this.month = 3 * (f - 1) + 1;
    }], S: [g, function(f) {
      this.milliseconds = 100 * +f;
    }], SS: [y, function(f) {
      this.milliseconds = 10 * +f;
    }], SSS: [/\d{3}/, function(f) {
      this.milliseconds = +f;
    }], s: [c, S("seconds")], ss: [c, S("seconds")], m: [c, S("minutes")], mm: [c, S("minutes")], H: [c, S("hours")], h: [c, S("hours")], HH: [c, S("hours")], hh: [c, S("hours")], D: [c, S("day")], DD: [y, S("day")], Do: [v, function(f) {
      var x = a.ordinal, T = f.match(/\d+/);
      if (this.day = T[0], x) for (var $ = 1; $ <= 31; $ += 1) x($).replace(/\[|\]/g, "") === f && (this.day = $);
    }], w: [c, S("week")], ww: [y, S("week")], M: [c, S("month")], MM: [y, S("month")], MMM: [v, function(f) {
      var x = J("months"), T = (J("monthsShort") || x.map(function($) {
        return $.slice(0, 3);
      })).indexOf(f) + 1;
      if (T < 1) throw new Error();
      this.month = T % 12 || T;
    }], MMMM: [v, function(f) {
      var x = J("months").indexOf(f) + 1;
      if (x < 1) throw new Error();
      this.month = x % 12 || x;
    }], Y: [/[+-]?\d+/, S("year")], YY: [y, function(f) {
      this.year = C(f);
    }], YYYY: [/\d{4}/, S("year")], Z: P, ZZ: P };
    function p(f) {
      var x, T;
      x = f, T = a && a.formats;
      for (var $ = (f = x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, M, j) {
        var W = j && j.toUpperCase();
        return M || T[j] || s[j] || T[W].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(h, n, r) {
          return n || r.slice(1);
        });
      })).match(o), H = $.length, _ = 0; _ < H; _ += 1) {
        var E = $[_], F = R[E], m = F && F[0], I = F && F[1];
        $[_] = I ? { regex: m, parser: I } : E.replace(/^\[|\]$/g, "");
      }
      return function(A) {
        for (var M = {}, j = 0, W = 0; j < H; j += 1) {
          var h = $[j];
          if (typeof h == "string") W += h.length;
          else {
            var n = h.regex, r = h.parser, i = A.slice(W), t = n.exec(i)[0];
            r.call(M, t), A = A.replace(t, "");
          }
        }
        return function(b) {
          var w = b.afternoon;
          if (w !== void 0) {
            var k = b.hours;
            w ? k < 12 && (b.hours += 12) : k === 12 && (b.hours = 0), delete b.afternoon;
          }
        }(M), M;
      };
    }
    return function(f, x, T) {
      T.p.customParseFormat = !0, f && f.parseTwoDigitYear && (C = f.parseTwoDigitYear);
      var $ = x.prototype, H = $.parse;
      $.parse = function(_) {
        var E = _.date, F = _.utc, m = _.args;
        this.$u = F;
        var I = m[1];
        if (typeof I == "string") {
          var A = m[2] === !0, M = m[3] === !0, j = A || M, W = m[2];
          M && (W = m[2]), a = this.$locale(), !A && W && (a = T.Ls[W]), this.$d = function(i, t, b, w) {
            try {
              if (["x", "X"].indexOf(t) > -1) return new Date((t === "X" ? 1e3 : 1) * i);
              var k = p(t)(i), O = k.year, D = k.month, Y = k.day, N = k.hours, Q = k.minutes, L = k.seconds, X = k.milliseconds, B = k.zone, G = k.week, Z = /* @__PURE__ */ new Date(), q = Y || (O || D ? 1 : Z.getDate()), ee = O || Z.getFullYear(), le = 0;
              O && !D || (le = D > 0 ? D - 1 : Z.getMonth());
              var ce, fe = N || 0, me = Q || 0, he = L || 0, pe = X || 0;
              return B ? new Date(Date.UTC(ee, le, q, fe, me, he, pe + 60 * B.offset * 1e3)) : b ? new Date(Date.UTC(ee, le, q, fe, me, he, pe)) : (ce = new Date(ee, le, q, fe, me, he, pe), G && (ce = w(ce).week(G).toDate()), ce);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(E, I, F, T), this.init(), W && W !== !0 && (this.$L = this.locale(W).$L), j && E != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
        } else if (I instanceof Array) for (var h = I.length, n = 1; n <= h; n += 1) {
          m[1] = I[n - 1];
          var r = T.apply(this, m);
          if (r.isValid()) {
            this.$d = r.$d, this.$L = r.$L, this.init();
            break;
          }
          n === h && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else H.call(this, _);
      };
    };
  });
})(He);
var St = He.exports;
const Dt = /* @__PURE__ */ $e(St);
var Fe = { exports: {} };
(function(e, l) {
  (function(s, o) {
    e.exports = o();
  })(ke, function() {
    var s = "minute", o = /[+-]\d\d(?::?\d\d)?/g, g = /([+-]|\d\d)/g;
    return function(y, c, v) {
      var a = c.prototype;
      v.utc = function(p) {
        var f = { date: p, utc: !0, args: arguments };
        return new c(f);
      }, a.utc = function(p) {
        var f = v(this.toDate(), { locale: this.$L, utc: !0 });
        return p ? f.add(this.utcOffset(), s) : f;
      }, a.local = function() {
        return v(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var C = a.parse;
      a.parse = function(p) {
        p.utc && (this.$u = !0), this.$utils().u(p.$offset) || (this.$offset = p.$offset), C.call(this, p);
      };
      var S = a.init;
      a.init = function() {
        if (this.$u) {
          var p = this.$d;
          this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
        } else S.call(this);
      };
      var P = a.utcOffset;
      a.utcOffset = function(p, f) {
        var x = this.$utils().u;
        if (x(p)) return this.$u ? 0 : x(this.$offset) ? P.call(this) : this.$offset;
        if (typeof p == "string" && (p = function(_) {
          _ === void 0 && (_ = "");
          var E = _.match(o);
          if (!E) return null;
          var F = ("" + E[0]).match(g) || ["-", 0, 0], m = F[0], I = 60 * +F[1] + +F[2];
          return I === 0 ? 0 : m === "+" ? I : -I;
        }(p), p === null)) return this;
        var T = Math.abs(p) <= 16 ? 60 * p : p;
        if (T === 0) return this.utc(f);
        var $ = this.clone();
        if (f) return $.$offset = T, $.$u = !1, $;
        var H = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return ($ = this.local().add(T + H, s)).$offset = T, $.$x.$localOffset = H, $;
      };
      var J = a.format;
      a.format = function(p) {
        var f = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return J.call(this, f);
      }, a.valueOf = function() {
        var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * p;
      }, a.isUTC = function() {
        return !!this.$u;
      }, a.toISOString = function() {
        return this.toDate().toISOString();
      }, a.toString = function() {
        return this.toDate().toUTCString();
      };
      var U = a.toDate;
      a.toDate = function(p) {
        return p === "s" && this.$offset ? v(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : U.call(this);
      };
      var R = a.diff;
      a.diff = function(p, f, x) {
        if (p && this.$u === p.$u) return R.call(this, p, f, x);
        var T = this.local(), $ = v(p).local();
        return R.call(T, $, f, x);
      };
    };
  });
})(Fe);
var zt = Fe.exports;
const Tt = /* @__PURE__ */ $e(zt);
ae.extend(Dt);
ae.extend(Tt);
const je = "DD-MM-YYYY", At = "YYYY-MM-DD", Ot = "DD-MM-YYYY HH:mm:ss", It = "YYYY-MM-DDTHH:mm:ssZ", Lt = (e, l = je) => ae(e).format(l), _t = (e) => ae(e).utc(), Pt = (e) => ae(e).isValid(), Rt = (e, l = je) => ae(e, l);
export {
  je as D,
  Ct as a,
  At as b,
  Ue as c,
  Ot as d,
  It as e,
  Lt as f,
  ae as g,
  Pt as i,
  Rt as p,
  _t as t
};
