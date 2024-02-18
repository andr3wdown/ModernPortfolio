export class ProjectCard extends HTMLElement{
    get template(){
        return /*html*/`
            <style>${this.style}</style>
            <div class="project-card">
                <div class="project-image">
                    <img src="${this.getAttribute('image')}" alt="project image">
                </div>
                <div class="project-info">
                    <h3>${this.getAttribute('title')}</h3>
                    <p>${this.getAttribute('description')}</p>
                </div>
            </div>
        `;
    };
    get style(){
        return /*css*/`
            .project-card{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 20px;
                padding: 20px;
                background-color: var(--background-color);
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                transition: 0.3s all;
            }
            .project-card:hover{
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            }
            .project-image img{
                width: 100%;
                border-radius: 10px;
            }
            `;
        }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;
    }
}