// Create a class for the element
class MenuComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        this.getMenuLayout()
            .then(r => {
                shadow.appendChild(this.parseHTML(r));
            })

        this.getMenuStyle()
            .then(r => {
                const menuBg = this.getAttribute('data-bg-color');
                const menuBgStyle = `.menu {background-color: ${menuBg};`;
                const style = document.createElement('style');

                style.textContent = menuBg ? r + menuBgStyle : r;
                shadow.append(style);
            })
    }


    async getMenuLayout() {
        let layout = await fetch('components/menu/menu.html');
        return layout.text();
    }

    async getMenuStyle() {
        let css = await fetch('components/menu/style.css');
        return css.text();
    }

    parseHTML(str) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(str, "text/html");
        return doc.body.firstChild;
    }

}

// Define the new element
customElements.define('menu-component', MenuComponent);