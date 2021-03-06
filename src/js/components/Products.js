import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu() {
    const thisProduct = this;
    const generatedHTML = templates.productWidget(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const menuContainerHome = document.querySelector(select.products.productsList);
    console.log(menuContainerHome);
    menuContainerHome.appendChild(thisProduct.element);
    
  }
}

export default Product;