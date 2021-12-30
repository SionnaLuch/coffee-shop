import { templates} from '../settings.js';
import { utils } from '../utils.js';

class Home {
  constructor(id, data) {
    const thisHome = this;
    thisHome.id = id;
    thisHome.data = data;

    thisHome.render();
  }
  render(){
    const thisHome = this;
    const generatedHTML = templates.productWidget(thisHome.data);
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const menuContainerHome = document.querySelector('.product-list-home');
    console.log(menuContainerHome);
    menuContainerHome.appendChild(thisHome.element);
  }
}
export default Home;

