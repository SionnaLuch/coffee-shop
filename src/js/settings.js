export const select = {
  templateOf: {
    productList:'#template-product'
  },
};
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};
export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
};