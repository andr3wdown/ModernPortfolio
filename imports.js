import {App} from './components/App.js';
import {Navbar} from './components/Navbar.js';
import { CursorFollower } from './components/CursorFollower.js';

const main = () => {
    customElements.define('app-root', App);
    customElements.define('nav-bar', Navbar);
    customElements.define('cursor-follower', CursorFollower);
}
main();