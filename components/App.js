export class App extends HTMLElement{
    get template () {
        return /*html*/`
            <style>${this.style}</style>
            <nav-bar></nav-bar>
            <div class="content-container">
                <header>
                    <h1>Welcome to my site</h1>
                    <h2>Chong Lee</h2>
                    <hr>
                    <hr>
                </header>
                
            </div>
        `;
    
    }
    get style(){
        return /*css*/`
            div *{
                opacity: 0;
                animation: fadein 2.7s forwards;
            }
            .content-container{
                display: flex;
                flex-direction: column;
                padding-left: calc(40% + 100px);
                padding-right: 100px;
                width: calc(100% - 40% - 200px);
                height: 200vh;
                font-family: var(--font-family);
            }
            h1{
                font-weight: 100;
                font-size: 64px;
            }
            h2{
                font-weight: 1000;
                font-size: 32px;
                background: -webkit-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                justify-content: right;
                align-items: flex-end;
            }
            header{
                margin-top: 150px;
                margin-bottom: 50px;
                display: grid;
                grid-template-areas: "h1 h2" "hr hr";
            }
            hr{
                width: 100%;
        
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
    }
}