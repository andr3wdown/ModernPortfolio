export class NavbarButtonDisplay extends HTMLElement{
    get template(){
        return /*html*/`
            <style>${this.style}</style>
            <div class="button-container">
                ${this.toggled === 1 ? this.toggled_svg : this.untoggled_svg}
                <p><slot></slot></p>
            </div>
             `
    };           

    get style(){
        return /*css*/ `
            p{
                animation: fadein 2.3s forwards;
            }
            .button-container{
                font-size: 32px;
                font-weight: 100;
                margin-left: 0px;
                transition: 0.3s all;
                min-width: 240px;
                display: flex;
                justify-content: start;
                align-items: center;
            }
            .button-container p{
                text-decoration: underline rgba(255, 255, 255, 0);
                transition: 0.3s all;
            }
            .button-container:hover p{
                text-decoration: underline white;
                margin-left: 30px;
            }
            .button-container svg{
                opacity: 1;
                transition: 0.3s all;
                margin-right: 20px;
            }
            .button-container:hover svg{
                opacity: 1;
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
    };
    render(){
        this.shadowRoot.innerHTML = this.template;
        this.shadowRoot.querySelector('.button-container').addEventListener('click', () => {
            this.toggled = this.toggled === 1 ? 0 : 1;
            this.setAttribute('toggled', this.toggled);
        });
    };

    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.toggled = this.getAttribute('toggled') * 1;
        this.toggled_svg = /*html*/`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="60" stroke-dashoffset="60" stroke-linecap="round" stroke-width="2" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.1s" values="0;1"/></path></svg>`;
        this.untoggled_svg = /*html*/`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="60" stroke-dashoffset="60" stroke-linecap="round" stroke-width="2" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;0"/></path></svg>`;
        this.render();  
    };
    static observedAttributes = ['toggled'];
    
    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'toggled'){
            this.toggled = newValue * 1;
            console.log(`toggled: ${this.toggled}`);
            this.render();
        }
    };
}