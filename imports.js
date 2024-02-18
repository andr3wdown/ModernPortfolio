import {App} from './components/App.js';
import {Navbar} from './components/Navbar.js';

const main = () => {
    customElements.define('app-root', App);
    customElements.define('nav-bar', Navbar);
}
main();