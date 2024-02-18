export class ArticleElement extends HTMLElement{
    get template(){
        return /*html*/`
            <style>${this.style}</style>
            <div class="article-container">
                <h3>${this.title}</h3>
                <p>${this.content}</p>
            </div>
        `;
    };
    get style(){
        return /*css*/`
            .article-container{
                font-family: var(--font-family);
                font-size: 24px;
                line-height: 1.5;
                margin-bottom: 50px;
                animation: fadein 2.3s forwards;
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
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;
    }
}