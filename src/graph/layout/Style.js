export default class Style {
    constructor() {
        this.shape = 'rect';
    }
    setPadding({ left = 10, top = 10, right = 10, bottom = 10 }) {
        this.padding = { left, top, right, bottom };
    }
    setBorderRadius(radius = { rx: 0, ry: 0 }) {
        this.radius = radius;
    }
    setShape(shapeType) {
        this.shape = shapeType;
    }
    setBorder({ left = 0, top = 0, right = 0, bottom = 0 }) {
        this.border = { left, top, right, bottom };
    }
}
//# sourceMappingURL=Style.js.map