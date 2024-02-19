export class Navbar extends HTMLElement{
    get template(){
        return /*html*/`
            <style>${this.style}</style>
            <div class="navbar-container">
                <div class="navbar-header">
                    <h1>Contents</h1>

                </div>
                <div class="navbar">
                    <navbar-button toggled="1" first-time="1">About me</navbar-button>
                    <navbar-button toggled="0" first-time="1">Projects</navbar-button>
                    <navbar-button toggled="0" first-time="1">Blog</navbar-button>
                    <navbar-button toggled="0" first-time="1">More</navbar-button>
                </div>

                <div class="navbar-footer">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"/></path></g></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="60" stroke-dashoffset="60" stroke-linecap="round" stroke-width="2" d="M12 5C21 5 21 5 21 12C21 19 21 19 12 19C3 19 3 19 3 12C3 5 3 5 12 5z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="60;0"/></path><path fill="currentColor" fill-opacity="0" d="M10 8.5L16 12L10 15.5z"><set attributeName="fill-opacity" begin="0.7s" to="1"/><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"/></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1"/></circle><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="24;0"/></path></g></svg>
                    </div>
                    <div>
                        <svg class="itch-svg" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="currentColor" d="M4.172 1.787C2.776 2.615.027 5.771 0 6.599v1.375c0 1.735 1.625 3.267 3.099 3.267c1.771 0 3.251-1.469 3.251-3.213c0 1.744 1.421 3.213 3.197 3.213c1.771 0 3.151-1.469 3.151-3.213c0 1.744 1.516 3.213 3.287 3.213h.032c1.776 0 3.291-1.469 3.291-3.213c0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213c1.479 0 3.104-1.532 3.104-3.267V6.599c-.032-.828-2.776-3.984-4.177-4.812c-4.339-.156-7.344-.183-11.823-.183c-4.484.005-10.593.073-11.828.183zm8.505 8.634a3.67 3.67 0 0 1-.625.797v.005a3.727 3.727 0 0 1-2.599 1.057a3.692 3.692 0 0 1-2.599-1.063a3.41 3.41 0 0 1-.6-.787c-.167.297-.4.552-.645.787A3.71 3.71 0 0 1 3.01 12.28h-.005a1.08 1.08 0 0 1-.349-.073a55.156 55.156 0 0 0-.224 3.937v.005c-.005.527-.005.953-.011 1.552c.032 3.115-.307 10.089 1.376 11.803c2.604.604 7.396.88 12.197.885h.005c4.807-.005 9.593-.281 12.197-.885c1.683-1.713 1.344-8.688 1.376-11.803c-.005-.599-.005-1.025-.011-1.552v-.005a52.356 52.356 0 0 0-.224-3.937a1.053 1.053 0 0 1-.349.073h-.005a3.71 3.71 0 0 1-2.599-1.063h.005c-.245-.235-.479-.489-.645-.787h-.005a3.411 3.411 0 0 1-.595.787a3.71 3.71 0 0 1-5.198 0a3.617 3.617 0 0 1-.615-.787l-.011-.016c-.172.308-.38.573-.615.803a3.71 3.71 0 0 1-2.599 1.063h-.005c-.031 0-.068 0-.104-.005c-.036.005-.073.005-.109.005h-.005a3.685 3.685 0 0 1-2.593-1.063a3.418 3.418 0 0 1-.609-.787l-.011-.016zm-2.672 3.454c1.057.005 1.995 0 3.161 1.271c.916-.093 1.875-.14 2.833-.14s1.917.047 2.833.14c1.167-1.271 2.104-1.271 3.161-1.271h.005c.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-.355 4.095-2.177 4.095c-2.708-.1-4.208-2.068-4.208-4.037c-1.5.251-3.251.371-5 .371s-3.5-.12-4.995-.371c0 1.969-1.5 3.937-4.208 4.037c-1.828-.005-3.292-.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-.005 0-2.849 2.62-3.364 3.547l1.864-.073v1.625c0 .079.751.047 1.5.011c.749.036 1.495.068 1.495-.011v-1.625l1.869.073C18.849 19.573 16 16.953 16 16.953"/></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="currentColor" fill-opacity="0"><circle cx="9" cy="12" r="1.5"><animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.4s" values="0;1"/></circle><circle cx="15" cy="12" r="1.5"><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.4s" values="0;1"/></circle></g><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M15.5 17.5L16.5 19.5C16.5 19.5 20.671 18.172 22 16C22 15 22.53 7.853 19 5.5C17.5 4.5 15 4 15 4L14 6H12M8.52799 17.5L7.52799 19.5C7.52799 19.5 3.35699 18.172 2.02799 16C2.02799 15 1.49799 7.853 5.02799 5.5C6.52799 4.5 9.02799 4 9.02799 4L10.028 6H12.028"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;60"/></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5.5 16C10.5 18.5 13.5 18.5 18.5 16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="16;0"/></path></g></svg>
                    </div>
                </div>

            </div>
        `;
    };
    get style(){
        return /*css*/`
            *{
                z-index: 1;
            }
            :host{
                z-index: 1;
            }
            div p, div h1, .itch-svg{
                opacity: 0;
                animation: fadein 2.3s forwards;
            }
            .navbar-container{
                border-right: 1px solid white;
                font-family: var(--font-family);
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;


                background: var(--navbar-color);
                background: var(--navbar-gradient);
            }
            .navbar-header{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20%;
            }
            .navbar{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 60%;
                width: 100%,

            }

            .navbar-footer{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: 20%;
                width: 100%,
            }
            .navbar-footer div{
                transition: 0.3s all;
                border: 1px solid rgba(128, 128, 128, 0);
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4.6875em;
                height: 4.6875em;
                text-align: center;

                border-radius: 1.875em;
                cursor: pointer;

            }
            .navbar-footer div:hover{
                transition: 0.3s all;
                border: 1px solid white;
                background-color: var(--navbar-hover-color);

                border-radius: 50%;
                font-weight: 200;
            }
            .navbar-footer div p{
                font-size: 2.0em;
                font-weight: 100;
            }
            h1{
                font-size: 4.0em;
                font-weight: 300;
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
    static observedAttributes = ['scroll-index']
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;

    }
    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'scroll-index'){
            let elements = this.shadowRoot.querySelector('.navbar').querySelectorAll('navbar-button');
            for(let i = 0; i < elements.length; i++){
                elements[i].setAttribute('toggled', i === newValue * 1 ? 1 : 0);
            }
            oldValue = newValue;
        }
    };
    
}
