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
                font-weight: 1000;
                background: -webkit-linear-gradient(90deg, rgba(58,155,180,1) 0%, rgba(29,33,253,1) 50%, rgba(69,202,252,1) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
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