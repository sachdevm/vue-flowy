(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-flowy"] = factory();
	else
		root["vue-flowy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlowy.vue?vue&type=template&id=6244c0f8
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowyChart",attrs:{"id":_vm._uid}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueFlowy.vue?vue&type=template&id=6244c0f8

// CONCATENATED MODULE: ./src/Graph.js
const GRAPH_NODE = '\x00'
const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

function edgeArgsToId(directed, v, w, name) {
  if (!directed && v > w) {
    const tmp = v
    v = w
    w = tmp
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (name || DEFAULT_EDGE_NAME)
}

class Graph {
  constructor(options) {
    this.directed = options.directed || true
    this.multiGraph = options.multiGraph || false
    this.compound = options.compound || false

    // v -> label
    this._nodes = {}

    if (this.compound === true) {
      this.parent = {}
      this.children = {}
      this.children[GRAPH_NODE] = {}
    }

    // v -> edgeObj
    this.in = {}

    // u -> v -> Number
    this.preds = {}

    // v -> edgeObj
    this.out = {}

    // v -> w -> Number
    this.sucs = {}

    // e -> edgeObj
    this.edgeObjs = {}

    // e -> label
    this.edgeLabels = {}
  }

  setGraph(label) {
    this.label = label
  }

  setNode(v, value) {
    if (this._nodes[v]) {
      if (value) {
        this._nodes[v] = value
      }
      return this
    }

    this._nodes[v] = value || null

    if (this.compound === true) {
      this.parent[v] = GRAPH_NODE
      this.children[v] = {}
      this.children[GRAPH_NODE][v] = true
    }
    this.in[v] = {}
    this.preds[v] = {}
    this.out[v] = {}
    this.sucs[v] = {}
    this.nodeCount++
    return this
  }

  setEdge(from, to, options) {
    this.setNode(from)
    this.setNode(to)

    const e = edgeArgsToId(this.directed, from, to, name)

    if (this.edgeLabels[e]) {
      if (options) {
        this.edgeLabels[e] = options
      }
      return this
    }

    this.out[from]
    this.in[to]
    this.edgeCount++
  }

  getNode(id) {
    return this._nodes[id]
  }

  get nodes() {
    return Object.values(this._nodes)
  }
}

// CONCATENATED MODULE: ./node_modules/dagre-d3-renderer/lib/intersect/intersect-rect.js
function intersectRect (node, point) {
  const x = node.x
  const y = node.y

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  const dx = point.x - x
  const dy = point.y - y
  let w = node.width / 2
  let h = node.height / 2

  let sx, sy
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h
    }
    sx = dy === 0 ? 0 : h * dx / dy
    sy = h
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w
    }
    sx = w
    sy = dx === 0 ? 0 : w * dy / dx
  }

  return {x: x + sx, y: y + sy}
}

/* harmony default export */ var intersect_rect = (intersectRect);

// CONCATENATED MODULE: ./node_modules/dagre-d3-renderer/lib/intersect/intersect-ellipse.js
function intersectEllipse (node, rx, ry, point) {
  // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html

  const cx = node.x
  const cy = node.y

  const px = cx - point.x
  const py = cy - point.y

  const det = Math.sqrt(rx * rx * py * py + ry * ry * px * px)

  let dx = Math.abs(rx * ry * px / det)
  if (point.x < cx) {
    dx = -dx
  }
  let dy = Math.abs(rx * ry * py / det)
  if (point.y < cy) {
    dy = -dy
  }

  return {x: cx + dx, y: cy + dy}
}

/* harmony default export */ var intersect_ellipse = (intersectEllipse);

// CONCATENATED MODULE: ./node_modules/dagre-d3-renderer/lib/intersect/intersect-circle.js


function intersectCircle (node, rx, point) {
  return intersect_ellipse(node, rx, rx, point)
}

/* harmony default export */ var intersect_circle = (intersectCircle);

// CONCATENATED MODULE: ./node_modules/dagre-d3-renderer/lib/intersect/intersect-line.js
/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */
function intersectLine (p1, p2, q1, q2) {
  // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
  // p7 and p473.

  // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
  // b1 y + c1 = 0.
  const a1 = p2.y - p1.y
  const b1 = p1.x - p2.x
  const c1 = (p2.x * p1.y) - (p1.x * p2.y)

  // Compute r3 and r4.
  const r3 = ((a1 * q1.x) + (b1 * q1.y) + c1)
  const r4 = ((a1 * q2.x) + (b1 * q2.y) + c1)

  // Check signs of r3 and r4. If both point 3 and point 4 lie on
  // same side of line 1, the line segments do not intersect.
  if ((r3 !== 0) && (r4 !== 0) && sameSign(r3, r4)) {
    return /* DONT_INTERSECT */
  }

  // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
  const a2 = q2.y - q1.y
  const b2 = q1.x - q2.x
  const c2 = (q2.x * q1.y) - (q1.x * q2.y)

  // Compute r1 and r2
  const r1 = (a2 * p1.x) + (b2 * p1.y) + c2
  const r2 = (a2 * p2.x) + (b2 * p2.y) + c2

  // Check signs of r1 and r2. If both point 1 and point 2 lie
  // on same side of second line segment, the line segments do
  // not intersect.
  if ((r1 !== 0) && (r2 !== 0) && (sameSign(r1, r2))) {
    return /* DONT_INTERSECT */
  }

  // Line segments intersect: compute intersection point.
  const denom = (a1 * b2) - (a2 * b1)
  if (denom === 0) {
    return /* COLLINEAR */
  }

  const offset = Math.abs(denom / 2)

  // The denom/2 is to get rounding instead of truncating. It
  // is added or subtracted to the numerator, depending upon the
  // sign of the numerator.
  let num = (b1 * c2) - (b2 * c1)
  const x = (num < 0) ? ((num - offset) / denom) : ((num + offset) / denom)

  num = (a2 * c1) - (a1 * c2)
  const y = (num < 0) ? ((num - offset) / denom) : ((num + offset) / denom)

  return { x, y }
}

function sameSign (r1, r2) {
  return r1 * r2 > 0
}

/* harmony default export */ var intersect_line = (intersectLine);

// CONCATENATED MODULE: ./node_modules/dagre-d3-renderer/lib/intersect/intersect-polygon.js


/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */
function intersectPolygon (node, polyPoints, point) {
  const x1 = node.x
  const y1 = node.y

  const intersections = []

  let minX = Number.POSITIVE_INFINITY
  let minY = Number.POSITIVE_INFINITY
  polyPoints.forEach(function (entry) {
    minX = Math.min(minX, entry.x)
    minY = Math.min(minY, entry.y)
  })

  const left = x1 - node.width / 2 - minX
  const top = y1 - node.height / 2 - minY

  for (let i = 0; i < polyPoints.length; i += 1) {
    const p1 = polyPoints[i]
    const p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0]
    const intersect = intersect_line(node, point,
      {x: left + p1.x, y: top + p1.y}, {x: left + p2.x, y: top + p2.y})
    if (intersect) {
      intersections.push(intersect)
    }
  }

  if (!intersections.length) {
    console.log('NO INTERSECTION FOUND, RETURN NODE CENTER', node)
    return node
  }

  if (intersections.length > 1) {
    // More intersections, find the one nearest to edge end point
    intersections.sort(function (p, q) {
      const pdx = p.x - point.x
      const pdy = p.y - point.y
      const distp = Math.sqrt(pdx * pdx + pdy * pdy)

      const qdx = q.x - point.x
      const qdy = q.y - point.y
      const distq = Math.sqrt(qdx * qdx + qdy * qdy)

      return (distp < distq) ? -1 : (distp === distq ? 0 : 1)
    })
  }
  return intersections[0]
}

/* harmony default export */ var intersect_polygon = (intersectPolygon);

// CONCATENATED MODULE: ./node_modules/dagre-d3-renderer/lib/shapes.js





function rect (parent, bbox, node) {
  const shapeSvg = parent.insert('rect', ':first-child')
    .attr('rx', node.rx)
    .attr('ry', node.ry)
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('width', bbox.width)
    .attr('height', bbox.height)

  node.intersect = function (point) {
    return intersect_rect(node, point)
  }

  return shapeSvg
}

function ellipse (parent, bbox, node) {
  const rx = bbox.width / 2
  const ry = bbox.height / 2
  const shapeSvg = parent.insert('ellipse', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('rx', rx)
    .attr('ry', ry)

  node.intersect = function (point) {
    return intersect_ellipse(node, rx, ry, point)
  }

  return shapeSvg
}

function circle (parent, bbox, node) {
  const r = Math.max(bbox.width, bbox.height) / 2
  const shapeSvg = parent.insert('circle', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('r', r)

  node.intersect = function (point) {
    return intersect_circle(node, r, point)
  }

  return shapeSvg
}

// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function diamond (parent, bbox, node) {
  const w = (bbox.width * Math.SQRT2) / 2
  const h = (bbox.height * Math.SQRT2) / 2
  const points = [
    { x: 0, y: -h },
    { x: -w, y: 0 },
    { x: 0, y: h },
    { x: w, y: 0 }
  ]
  const shapeSvg = parent.insert('polygon', ':first-child')
    .attr('points', points.map(function (p) { return p.x + ',' + p.y }).join(' '))

  node.intersect = function (p) {
    return intersect_polygon(node, points, p)
  }

  return shapeSvg
}

/* harmony default export */ var shapes = ({
  rect,
  ellipse,
  circle,
  diamond
});

// CONCATENATED MODULE: ./src/Renderer.js


class Renderer_Renderer {

  constructor() {
    // this.shapes = 
  }

  render(svg, g) {
    console.log(svg)
    const outputGroup = this.createOrSelectGroup(svg, 'output')
    const edgePathsGroup = this.createOrSelectGroup(outputGroup, 'edgePaths')
    const edgeLabels = this.createEdgeLabels(this.createOrSelectGroup(outputGroup, 'edgeLabels'), g)
    const nodes = this.createNodes(this.createOrSelectGroup(outputGroup, 'nodes'), g)
  }

  createNodes(selection, g) {
    const simpleNodes = g.nodes().filter(function(v) {return !util.isSubgraph(g, v)})
    let svgNodes = selection.selectAll('g.node')

    for (const node of nodes) {
      const shape = shapes[node.shape]
    }
  }

  createOrSelectGroup(root, name) {
    let selection = root.querySelector('g.' + name)
    if (!selection) {
      selection = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      selection.classList.add(name)
      root.appendChild(selection)
    }
    return selection
  }
}
// CONCATENATED MODULE: ./src/FlowElement.js
class FlowElement {
  constructor(id, options) {
    this.id = id
    this.options = options
    this.edges = []
  }

  leadsTo(destinationElement, options) {
    this.edges.push({ otherId: destinationElement.id, options })
    return destinationElement
  }
}

// CONCATENATED MODULE: ./src/FlowChart.js
// import {} from "d3"
// import {Graph} from "graphlibrary"
// import dagreD3 from "dagre-d3-renderer"




class FlowChart_FlowChart {
  constructor(options) {
    this.elements = []
  }

  addElement(id, options) {
    const el = new FlowElement(id, options)
    this.elements.push(el)
    return el
  }

  render(element) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('id', 'f' + element.id)
    element.appendChild(svg)
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    svg.appendChild(group)

    // d3
    //   .select(element)
    //   .append("svg")
    //   .attr("id", )
    //   .attr("xmlns", "http://www.w3.org/2000/svg")

    // Create the input mermaid.graph
    const g = new Graph({
      multiGraph: true,
      compound: true
    })

    g.setGraph({
      rankdir: 'LR',
      marginx: 20,
      marginy: 20
    })

    // first create all nodes
    for (const i in this.elements) {
      const el = this.elements[i]
      const elData = {}

      elData.label = el.id

      if (el.options && el.options.label) {
        elData.label = el.options.label
      }
      g.setNode(el.id, elData)
    }

    // now apply some styles to all nodes
    for (const node of g.nodes) {
      node.rx = node.ry = 5
    }

    // now create all edges
    for (const i in this.elements) {
      const el = this.elements[i]
      for (const k in el.edges) {
        const edge = el.edges[k]
        const edgeData = {}

        if (edge.options && edge.options.label) {
          edgeData.label = edge.options.label
        }

        g.setEdge(el.id, edge.otherId, edgeData)
      }
    }

    const renderer = new Renderer_Renderer() // eslint-disable-line new-cap

    const e = svg.querySelector('g')
    renderer.render(e, g)
    const svgElement = document.getElementById('f' + element.id)
    const groupElement = svgElement.querySelector('g')
    svgElement.style.width = groupElement.getBoundingClientRect().width + 40
    svgElement.style.height = groupElement.getBoundingClientRect().height + 40
  }
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlowy.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var VueFlowyvue_type_script_lang_js = ({
  name: 'VueFlowy',
  props: {
    chart: {
      type: FlowChart_FlowChart,
      required: true
    }
  },
  data() {
    return {
      chartElement: null
    }
  },
  watch: {
    'chart.elements': function(newVal, oldVal) {
      this.chart.render(this.chartElement)
    }
  },
  mounted() {
    this.chartElement = document.getElementById(this._uid)
  }
});

// CONCATENATED MODULE: ./src/VueFlowy.vue?vue&type=script&lang=js
 /* harmony default export */ var src_VueFlowyvue_type_script_lang_js = (VueFlowyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/VueFlowy.vue?vue&type=style&index=0&lang=scss
var VueFlowyvue_type_style_index_0_lang_scss = __webpack_require__("E1aB");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/VueFlowy.vue






/* normalize component */

var component = normalizeComponent(
  src_VueFlowyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueFlowy = (component.exports);
// CONCATENATED MODULE: ./src/main.js



const main_plugin = {
  install: Vue => {
    Vue.component(VueFlowy.name, VueFlowy)
  }
}

VueFlowy.install = main_plugin.install

/* harmony default export */ var main = ({ VueFlowy: VueFlowy, FlowChart: FlowChart_FlowChart });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "E1aB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yF/8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "yF/8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-flowy.umd.js.map