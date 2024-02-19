export class App extends HTMLElement{
    get template () {
        return /*html*/`
            <style>${this.style}</style>
            <cursor-follower></cursor-follower>
            <nav-bar scroll-index=0></nav-bar>
            <div class="content-container">
                <div class="header-container">
                    <div class="header-anchor"></div>
                    <header>
                        <h1>Welcome to my site</h1>
                        <h2>Chong Lee</h2>
                        <hr>
                        <hr>
                    </header>
                </div>
                <main>
                    <article-element class="about-element">
                        <h3 slot="title">About me</h3>
                        <p slot="text"> Welcome to my online spot! I'm Chong Lee, and I like messing around with code and design.

                                        I'm into Python, C#, and JavaScript. HTML and CSS? Yeah, I use them to make websites that look cool and work smoothly. I have some experience with ReactJS. I use Unity to create fun games. From wild ideas to playable stuff, I'm all about bringing cool things to life. I also use Blender and Photoshop to create 3D models and cool designs.

                                        This place isn't about being perfect. It's more like my creative playground where I try new things and showcase what I've made. Feel free to check things out. Enjoy your stay!</p>
                    </article-element>
                    <div class="project-card-container">
                        <h3 class="project-title">Projects</h3>
                        <project-card image="https://via.placeholder.com/250" alignment="left" title="Project 1">
                            <p style="font-style: italic; color: lightgray;">2019</p>
                            <p>Project 1 is a cool project that I made. It's about something that I like</p>
                        </project-card>
                        <project-card image="https://via.placeholder.com/250" alignment="right" title="Project 2">
                            <p style="font-style: italic; color: lightgray;">2019</p>
                            <p>Project 2 is a cool project that I made. It's about something that I like </p>
                        </project-card>
                        <project-card image="https://via.placeholder.com/250" alignment="left" title="Project 3">
                            <p style="font-style: italic; color: lightgray;">2019</p>
                            <p>Project 3 is a cool project that I made. It's about something that I like</p>
                        </project-card>
                        <project-card image="https://via.placeholder.com/250" alignment="right" title="Project 4">
                            <p style="font-style: italic; color: lightgray;">2019</p>
                            <p>Project 4 is a cool project that I made. It's about something that I like</p>
                        </project-card>
                        <project-card image="https://via.placeholder.com/250" alignment="left" title="Project 5">
                            <p style="font-style: italic; color: lightgray;">2019</p>
                            <p>Project 5 is a cool project that I made. It's about something that I like</p>
                        </project-card>
                    </div>
                    <article-element class="blog-element">
                        <h3 slot="title">Blog</h3>
                        <p slot="text"> Welcome to my online spot! I'm Chong Lee, and I like messing around with code and design.

                                        I'm into Python, C#, and JavaScript. HTML and CSS? Yeah, I use them to make websites that look cool and work smoothly. I have some experience with ReactJS. I use Unity to create fun games. From wild ideas to playable stuff, I'm all about bringing cool things to life. I also use Blender and Photoshop to create 3D models and cool designs.

                                        This place isn't about being perfect. It's more like my creative playground where I try new things and showcase what I've made. Feel free to check things out. Enjoy your stay!</p>
                    </article-element>
                    <article-element class="more-element">
                        <h3 slot="title">More</h3>
                        <p slot="text"> Welcome to my online spot! I'm Chong Lee, and I like messing around with code and design.

                                        I'm into Python, C#, and JavaScript. HTML and CSS? Yeah, I use them to make websites that look cool and work smoothly. I have some experience with ReactJS. I use Unity to create fun games. From wild ideas to playable stuff, I'm all about bringing cool things to life. I also use Blender and Photoshop to create 3D models and cool designs.

                                        This place isn't about being perfect. It's more like my creative playground where I try new things and showcase what I've made. Feel free to check things out. Enjoy your stay!</p>
                    </article-element>
                </main>
                <footer>
                    <p>© 2024 Chong Lee</p>
                </footer>
            </div>

        `;
    }
    get style(){
        return /*css*/`
            h1, h2, p{
                opacity: 0;
                animation: fadein 2.3s forwards;
            }
            main{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: start;
            }
            .content-container{
                z-index: 1;
                display: flex;
                flex-direction: column;
                padding-left: calc(40% + 6.25em);
                padding-right: 6.25em;
                width: calc(100% - 40% - 12.5em);
                min-height: 100vh;
                font-family: var(--font-family);
            }
            .header-container{
                min-height: 28.75em;
            }
            h1{
                font-weight: 300;
                font-size: 4.0em;
            }
            h2{
                font-weight: 1000;
                font-size: 2.0em;
                background: -webkit-linear-gradient(90deg, rgba(58,155,180,1) 0%, rgba(29,33,253,1) 50%, rgba(252,176,69,1) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                justify-content: right;
                align-items: flex-end;
            }
            h3{
                font-size: 3.0em;
                font-weight: 500;
            }
            header{
                margin-top: 15.625em;
                margin-bottom: 3.125em;
                display: grid;
                grid-template-areas: "h1 h2" "hr hr";
                animation-timing-function: linear;
                animation: slidedown 1s forwards;
            }
            hr{
                width: 100%;

            }
            .project-card-container{
                width: 100%;
                padding-bottom: 6.25em;
            }
            @keyframes slidedown{
                0%{
                    opacity: 1;
                    margin-top: -6.25em;
                }
                100%{
                    opacity: 1;
                    margin-top: 9.375em;
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

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;
        this.lastScroll = 0;
        this.scrollDifference = 0;
        this.scrollIndex = 0;
        setTimeout(() => {
            this.shadowRoot.querySelector('header').scrollIntoView(
                {
                    behavior: 'smooth'
                }
            );
        }, 200);


    }
    
    connectedCallback() {
        this.addAnchors();
        window.addEventListener('scroll', this.onScroll);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        this.scrollDifference = window.scrollY - this.lastScroll;
        this.lastScroll = window.scrollY;
    }
    get scrollDirection (){
        return this.scrollDifference > 0 ? "down" : "up";
    }
    get screenBottom(){
        return window.scrollY + window.innerHeight;
    }

    addAnchors(){
        let anchors = ['.about-element','.project-card-container','.blog-element','.more-element'];
        for(let i = 0; i < anchors.length; i++){
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.handleAnchorVisible(i);
                    }
                    if(!entry.isIntersecting){
                        this.handleAnchorInvisible(i);
                    }
                });
            });
            
            const child = this.shadowRoot.querySelector(anchors[i]);
            this.observer.observe(child);
        }
    }
    handleAnchorVisible(index){
        
        if(this.scrollDifference > 0){
            this.scrollIndex = index;
            this.shadowRoot.querySelector('nav-bar').setAttribute('scroll-index', this.scrollIndex);
            console.log("Anchor became visible:", this.scrollIndex);
        }
    }
    handleAnchorInvisible(index){
        
        if(this.scrollDifference < 0){
            this.scrollIndex = index - 1;
            this.shadowRoot.querySelector('nav-bar').setAttribute('scroll-index', this.scrollIndex);
            console.log("Anchor became invisible:", this.scrollIndex);
        }
        
    }
}
