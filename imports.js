import {App} from './components/App.js';
import {Navbar} from './components/Navbar.js';
import { CursorFollower } from './components/CursorFollower.js';
import { NavbarButtonDisplay } from './components/NavbarButtonDisplay.js';
import { ArticleElement } from './components/ArticleElement.js';
import { ProjectCard } from './components/ProjectCard.js';

const main = () => {
    customElements.define('app-root', App);
    customElements.define('nav-bar', Navbar);
    customElements.define('cursor-follower', CursorFollower);
    customElements.define('navbar-button', NavbarButtonDisplay);
    customElements.define('article-element', ArticleElement);
    customElements.define('project-card', ProjectCard);
}
main();