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

// CONCATENATED MODULE: ./src/graph/Node.js
class GraphNode {
  constructor(id, options) {
    this.defaults = {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      rx: 0,
      ry: 0,
      shape: 'rect'
    }

    this.id = id
    this.setOptions(options)
  }

  setOptions(options = {}) {
    if (!options.label) {
      options.label = this.id
    }

    Object.assign(this, this.defaults, options)
  }

  setDefaults() {

  }
}

// CONCATENATED MODULE: ./src/graph/Layout.js


class Layout {
  /**
   * 
   * @param {Graph} graph 
   */
  constructor(graph) {
    /** @type {Graph} */
    this.graph = graph
    this.runLayout()
    console.log('new layout for graph', graph)
  }

  runLayout() {
    // this.makeSpaceForEdgeLabels()
    this.position()
  }

  makeSpaceForEdgeLabels() {
    this.graph.rankSep /= 2
    this.graph.edges.forEach((edge) => {
      edge.minLen *= 2

      if (edge.labelPos.toLowerCase() === 'c') {
        return
      }

      if (this.graph.rankDir === 'TB' || this.graph.rankDir === 'BT') {
        edge.width += edge.labelOffset
      } else {
        edge.height += edge.labelOffset
      }
    })
  }

  position() {
    this.positionY()
  }

  positionY() {
    const layering = this.buildLayerMatrix()
  }

  buildLayerMatrix() {
    const max = Math.max(...this.graph.nodes.map((node) => {
      const rank = node.rank
      if (rank) {
        return rank
      }
    }))
    console.log('max', max)
    // const layering = 
  }
}
// CONCATENATED MODULE: ./src/graph/Edge.js
const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

const defaults = {}

class Edge {
  constructor(id, from, to, options) {
    this.id = id
    this.from = from
    this.to = to
    this.setOptions(options)
  }

  static generateId(from, to, directed = false) {
    if (!directed && from > to) {
      const tmp = from
      from = to
      to = tmp
    }
    return from + EDGE_KEY_DELIM + to + EDGE_KEY_DELIM + DEFAULT_EDGE_NAME
  }

  setOptions(options) {
    Object.assign(this, defaults, options)
  }
}
// CONCATENATED MODULE: ./src/Graph.js




const GRAPH_NODE = '\x00'

class Graph_Graph {
  constructor({
      directed: directed = true,
      multiGraph: multiGraph = false,
      compound: compound = false,
      rankDir: rankdir = 'LR',
      marginX: marginX = 20,
      marginY: marginY = 20
    }) {
    this.defaultNodeData = {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      rx: 0,
      ry: 0,
      shape: 'rect'
    }

    this._nodes = {}
    this._edges = {}

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
  }

  setNode(id, options) {
    console.log('setting node', id, options)
    if (this._nodes[id]) {
      if (options) {
        this._nodes[id].setOptions(options)
      }
      return this
    }

    this._nodes[id] = new GraphNode(id, options)

    if (this.compound === true) {
      this.parent[id] = GRAPH_NODE
      this.children[id] = {}
      this.children[GRAPH_NODE][id] = true
    }

    this.in[id] = {}
    this.preds[id] = {}
    this.out[id] = {}
    this.sucs[id] = {}
    return this
  }

  setEdge(from, to, options) {
    console.log('setting edge', from, to, options)

    const edgeId = Edge.generateId(from, to, this.directed)

    if (this._edges[edgeId]) {
      if (options) {
        this._edges[edgeId].setOptions(options)
      }
      return this
    }

    // first ensure the nodes exist
    this.setNode(from)
    this.setNode(to)

    const edge = new Edge(edgeId, from, to, options)

    this._edges[edgeId] = edge

    this.out[from][edgeId] = edge
    this.in[to][edgeId] = edge
    return this
  }

  getNode(id) {
    return this._nodes[id]
  }

  getChildren(id) {
    if (!id) {
      id = GRAPH_NODE
    }

    if (this.compound) {
      const childArray = this.children[id]
      if (childArray) {
        return Object.keys(childArray)
      }
    } else if (id === GRAPH_NODE) {
      return this.nodes
    } else {
      return []
    }
  }

  isSubgraph(id) {
    return this.getChildren(id).length !== 0
  }

  layout() {
    console.log('layouting graph')
    const layoutGraph = new Layout(this)
  }

  /**
   * @returns {Array<{label: string}>} all nodes of the graph
   */
  get nodes() {
    return Object.values(this._nodes)
  }

  /**
   * @returns {Array<string>} array of all node IDs
   */
  get nodeIds() {
    return Object.keys(this._nodes)
  }
}

// CONCATENATED MODULE: ./src/graph/Svg.js
class GraphSvg {

  constructor(tag) {
    /**
     * @type {HTMLElement}
     */
    this.node = document.createElementNS('http://www.w3.org/2000/svg', tag)
  }

  /**
   * 
   * @param {string|GraphSvg} tag 
   * @returns {GraphSvg}
   */
  append(el) {
    if (!(el instanceof GraphSvg)) {
      console.log('creating element out of', el)
      el = new GraphSvg(el)
    }
    this.node.appendChild(el.node)
    return el
  }

  attr(attribute, value) {
    this.node.setAttribute(attribute, value)
    return this
  }

  select(selector) {
    const res = this.node.querySelector(selector)
    if (res) {
      return new GraphSvg(res)
    }

    return null
  }

  selectAll(selector) {
    const res = this.node.querySelectorAll(selector)
    if (res) {
      return Array.from(res).map((node) => new GraphSvg(node))
    }

    return null
  }

  text(s) {
    const el = document.createTextNode(s)
    this.node.appendChild(el)
    return this
  }

  /**
   * 
   * @param {string} c 
   */
  addClass(c) {
    this.node.classList.add(c)
    return this
  }
}
// CONCATENATED MODULE: ./src/graph/Shape.js


class Shape_Shape {

  /**
   * 
   * @param {string} shapeType 
   * @param {Object} bbox 
   * @param {Object} options 
   */
  constructor(shapeType, bbox, options) {
    /** @type {GraphSvg} */
    this.shape = this[shapeType](bbox, options)
    console.log('inside bbox', this.shape.node.getBBox())
  }
  /**
   * 
   * @param {Object} bbox 
   * @param {Object} options 
   */
  rect(bbox, options) {
    console.log('bbox', bbox)
    return new GraphSvg('rect')
      .attr('rx', options.rx)
      .attr('ry', options.ry)
      .attr('x', -bbox.width / 2)
      .attr('y', -bbox.height / 2)
      .attr('width', bbox.width)
      .attr('height', bbox.height)
      .attr('rx', options.rx)
  }
}
// CONCATENATED MODULE: ./src/graph/Label.js


class Label_GraphLabel {
  constructor(labelData) {
    this.group = new GraphSvg('g')
    this.labelData = labelData

    this.textLabel()
  }

  textLabel() {
    const text = this.group.append('text').text(this.labelData.label)
  }
}
// CONCATENATED MODULE: ./src/Renderer.js





class Renderer_Renderer {
  constructor(graph) {
    this.graph = graph
  }

  render(svg) {
    // TODO: remove all children of svg

    const edgePathsGroup = this.createOrSelectGroup(svg, 'edgePaths')
    const edgeLabels = this.createEdgeLabels(
      this.createOrSelectGroup(svg, 'edgeLabels'),
      this.graph
    )
    const nodes = this.createNodes(
      this.createOrSelectGroup(svg, 'nodes'),
      this.graph
    )

    // graph.layout()
  }

  /**
   *
   * @param {HTMLElement} selection
   * @param {Graph} graph
   */
  createNodes(selection, graph) {
    console.log('createNodes selection is', selection, 'graph is', graph)
    const simpleNodes = graph.nodeIds.filter(id => {
      return !graph.isSubgraph(id)
    })

    // we have to append all simpleNodes to the graph now
    graph.nodes.forEach(graphNode => {
      const nodeGroup = selection.append('g').addClass('node')

      console.log('adding node', graphNode)
      const labelGroup = nodeGroup.append('g').addClass('label')
      const label = labelGroup.append(
        new Label_GraphLabel({ label: graphNode.label }).group
      )
      const labelBBox = label.node.getBBox()
      console.log('label', label, 'labelGroup', labelGroup)
      
      // nodeGroup.node.style.opacity = 0

      const shape = nodeGroup.append(
        new Shape_Shape(graphNode.shape, labelBBox, graphNode).shape
      )
      nodeGroup.append(labelGroup)
    })
    // let svgNodes = selection.querySelectorAll('g.node')
    // svgNodes.forEach((svgNode) => {

    //   svgNode.classList.add('update')
    // })

    // for (const node of nodes) {
    //   const shape = shapes[node.shape]
    // }
  }

  createLabel(selection) {}

  /**
   *
   * @param {GraphSvg} selection
   * @param {Graph} g
   */
  createEdgeLabels(selection, g) {
    let svgEdgeLabels = selection.selectAll('g.edgeLabel')
    console.log(svgEdgeLabels)
    svgEdgeLabels.forEach(n => {
      const groupElement = SvgGenerator.create('g')
      groupElement.classList.add('edgeLabel')
      // groupElement.style.opacity = 0
      n.classList.add('update')
      n.appendChild(groupElement)
    })
  }

  /**
   *
   * @param {GraphSvg} root
   * @param {string} name
   */
  createOrSelectGroup(root, name) {
    return root.select('g.' + name) || root.append('g').addClass(name)
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
    const svg = new GraphSvg('svg')
    svg.node.id = 'f' + element.id
    element.appendChild(svg.node)
    const group = svg.append('g')

    // Create the input graph
    const graph = new Graph_Graph({
      multiGraph: true,
      compound: true
    })

    // first create all nodes
    for (const i in this.elements) {
      const el = this.elements[i]
      graph.setNode(el.id, el.options)
    }

    // now apply some styles to all nodes
    for (const node of graph.nodes) {
      node.rx = node.ry = 5
    }

    // now create all edges
    for (const i in this.elements) {
      const el = this.elements[i]
      for (const k in el.edges) {
        const edge = el.edges[k]

        graph.setEdge(el.id, edge.otherId, edge.options)
      }
    }

    const renderer = new Renderer_Renderer(graph)

    renderer.render(group)

    // const svgElement = document.getElementById('f' + element.id)
    // const groupElement = svgElement.querySelector('g')
    // svgElement.style.width = groupElement.getBoundingClientRect().width + 40
    // svgElement.style.height = groupElement.getBoundingClientRect().height + 40
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