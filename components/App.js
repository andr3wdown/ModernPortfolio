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
                    <div class="text-article">
                        <h3>Title</h3>
                        <p>In eleifend et erat et ullamcorper. Nunc mi est, vehicula eu sapien et, mollis fermentum nunc. Praesent vel nisl sit amet justo lacinia luctus. Aliquam malesuada porttitor neque eu laoreet. In vehicula diam in hendrerit tristique. Suspendisse potenti. In sed justo sed lectus sodales congue. Vivamus sollicitudin tristique urna, at vestibulum nunc ullamcorper ut. Quisque vitae nulla nec dui tincidunt feugiat at id nulla. Nunc blandit vulputate volutpat. Maecenas tincidunt volutpat sapien, id aliquet enim pharetra et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor, risus a rhoncus vestibulum, dui enim pulvinar ipsum, sed placerat quam tellus id leo. Mauris nibh risus, ullamcorper ut ipsum dapibus, varius rhoncus odio. Pellentesque posuere nulla tellus, in scelerisque dui egestas rhoncus. Aenean quis eleifend dolor.</p>
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
            div *{
                opacity: 0;
                animation: fadein 2.8s forwards;
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
                animation: slidedown 1.2s forwards;
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