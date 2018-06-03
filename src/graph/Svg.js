export default class GraphSvg {
    constructor(el) {
        if (el instanceof SVGGraphicsElement) {
            this.node = el;
        }
        else {
            this.node = document.createElementNS('http://www.w3.org/2000/svg', el);
        }
    }
    append(el) {
        if (!(el instanceof GraphSvg)) {
            el = new GraphSvg(el);
        }
        this.node.appendChild(el.node);
        return el;
    }
    attr(attribute, value) {
        this.node.setAttribute(attribute, value);
        return this;
    }
    select(selector) {
        const res = this.node.querySelector(selector);
        if (res instanceof SVGGraphicsElement) {
            return new GraphSvg(res);
        }
        else if (res) {
            throw new TypeError('The selected element is not of type "SVGGraphicsElement"');
        }
        return null;
    }
    selectAll(selector) {
        const res = this.node.querySelectorAll(selector);
        if (res instanceof SVGGraphicsElement) {
            return Array.from(res).map(node => new GraphSvg(node));
        }
        else if (res) {
            throw new TypeError('The selected element is not of type "SVGGraphicsElement"');
        }
        return null;
    }
    text(s) {
        const el = document.createTextNode(s);
        this.node.appendChild(el);
        return this;
    }
    addClass(c) {
        this.node.classList.add(c);
        return this;
    }
}
//# sourceMappingURL=Svg.js.map