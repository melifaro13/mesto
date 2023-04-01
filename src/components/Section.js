export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._rendererItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    setItems(items) {
        this._rendererItems = items;
    }

    renderItems() {
        this._rendererItems.forEach((item) => { 
            const element = this._renderer(item);
            this.addItem(element);
        }); 
    }

    addNewItem(element) {
        this._container.prepend(element);
    }

    addItem(element) {
        this._container.append(element);
    }
}