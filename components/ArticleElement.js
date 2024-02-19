export class ArticleElement extends HTMLElement{
    get template(){
        return /*html*/`
            <style>${this.style}</style>
            <div class="article-container">
                <div><slot name="title"></slot></div>
                <div><slot name="text"></slot></div>
            </div>
        `;
    };
    get style(){
        return /*css*/`
            :host{
                padding-bottom: 6.25em;
                position: relative;  
            }
            :host(.visible){
                animation-timing-function: linear;
                animation: fadein 1.25s forwards;
            }
            .article-container{
                font-family: var(--font-family);
                
                margin-bottom: 3.125em;
                
            }

            ::slotted(p) {
                font-size: 1.375em;
                font-weight: 100;
                line-height: 1.5;
            }
            ::slotted(h3) {
                font-size: 3.0em;
                font-weight: 500;

            }
            @keyframes fadein{
                0%{
                    opacity: 0;
                    right: -31.25em;
                }
                100%{
                    opacity: 1;
                    right: 0px;
                }
            }
        `;
    };
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;
        this.initialized = false;
    }
    connectedCallback() {
        var observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.classList.add('visible');
                    this.initialized = true;
                }
            });
        });
        if(!this.initialized){
            observer.observe(this);
        }
        
    }
}
