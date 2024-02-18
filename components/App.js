export class App extends HTMLElement{
    get template () {
        return /*html*/`
            <style>${this.style}</style>
            <cursor-follower></cursor-follower>
            <nav-bar></nav-bar>
            <div class="content-container">
                <div class="header-container">
                    <header>
                        <h1>Welcome to my site</h1>
                        <h2>Chong Lee</h2>
                        <hr>
                        <hr>
                    </header>
                </div>
                
                <main>
                    <article-element>
                        <h3 slot="title">About me</h3>
                        <p slot="text"> Welcome to my online spot! I'm Chong Lee, and I like messing around with code and design.

                                        I'm into Python, C#, and JavaScript. HTML and CSS? Yeah, I use them to make websites that look cool and work smoothly. I have some experience with ReactJS. I use Unity to create fun games. From wild ideas to playable stuff, I'm all about bringing cool things to life. I also use Blender and Photoshop to create 3D models and cool designs.

                                        This place isn't about being perfect. It's more like my creative playground where I try new things and showcase what I've made. Feel free to check things out. Enjoy your stay!</p>
                    </article-element>
                    <div class="project-card-container">
                        <project-card image="https://via.placeholder.com/150" title="Project 1" description="This is a description of the project"></project-card>
                        <project-card image="https://via.placeholder.com/150" title="Project 2" description="This is a description of the project"></project-card>
                        <project-card image="https://via.placeholder.com/150" title="Project 3" description="This is a description of the project"></project-card>
                        <project-card image="https://via.placeholder.com/150" title="Project 4" description="This is a description of the project"></project-card>
                    </div>
                </main>
                <footer>
                    <p>© 2024 Chong Lee</p>
                </footer>
            </div>
            
        `;
    }
    get style(){
        return /*css*/`
            *{
                z-index: 1;
            }
            h1, h2, p{
                opacity: 0;
                animation: fadein 2.3s forwards;
            }
            main{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: start;
                min-height: 400vh;
            }
            .content-container{
                display: flex;
                flex-direction: column;
                padding-left: calc(40% + 100px);
                padding-right: 100px;
                width: calc(100% - 40% - 200px);
                min-height: 100vh;
                font-family: var(--font-family);
            }
            .header-container{
                min-height: 460px;
            }
            h1{
                font-weight: 300;
                font-size: 64px;
            }
            h2{
                font-weight: 1000;
                font-size: 32px;
                background: -webkit-linear-gradient(90deg, rgba(58,155,180,1) 0%, rgba(29,33,253,1) 50%, rgba(252,176,69,1) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                justify-content: right;
                align-items: flex-end;
            }
            header{
                margin-top: 250px;
                margin-bottom: 50px;
                display: grid;
                grid-template-areas: "h1 h2" "hr hr";
                animation-timing-function: linear;
                animation: slidedown 1s forwards;
            }
            hr{
                width: 100%;
        
            }
            @keyframes slidedown{
                0%{
                    opacity: 1;
                    margin-top: -100px;
                }
                100%{
                    opacity: 1;
                    margin-top:150px;
                }
            }
            @keyframes fadein{
                0%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            
            }
        `;
    
    }
    connectedCallback() {
        window.addEventListener('scroll', this.onScroll);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        //let scrollPosition = window.scrollY;
        console.log(this.screenBottom);
    }
    get screenBottom(){
        return window.scrollY + window.innerHeight;
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;
        let temp = this.shadowRoot.querySelector('footer').getBoundingClientRect().top + window.scrollY;
        console.log(temp);  
        let headerHeight = this.shadowRoot.querySelector('.header-container').getBoundingClientRect().height;
        console.log(headerHeight);
    }
}