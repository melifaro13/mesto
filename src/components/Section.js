export class Section {
    constructor({items, renderer}, containerSelector) {
        this.rendererItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this.rendererItems.forEach((item) => { 
            const element = this._renderer(item);
            this.addItem(element);
        }); 
    }
}