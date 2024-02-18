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
                padding-bottom: 100px;
            }
            .article-container{
                font-family: var(--font-family);
                position: relative; 
                margin-bottom: 50px;
                animation-timing-function: linear;
                animation: fadein 1.25s forwards;
                
                
            }
            
            ::slotted(p) {
                font-size: 22px;
                font-weight: 100;
                line-height: 1.5;
            }
            ::slotted(h3) {
                font-size: 48px;
                font-weight: 500;
                
            }
            @keyframes fadein{
                0%{
                    opacity: 0;
                    right: -500px;
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
    }
}