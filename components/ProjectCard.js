export class ProjectCard extends HTMLElement{
    get template(){
        let image = /*html*/`
            <div class="project-image ${this.getAttribute('alignment')}-img">
                <img src="${this.getAttribute('image')}" alt="project image">
            </div>
        `;
        let info = /*html*/`
            <div class="project-info ${this.getAttribute('alignment')}-info">
                <h3>${this.getAttribute('title')}</h3>
                <slot></slot>
                    
            </div>
                
        `;

        return /*html*/`
            <style>${this.style}</style>
            <div class="project-card">
                ${this.getAttribute('alignment') === 'left' ? image : info}
                ${this.getAttribute('alignment') === 'left' ? info : image}
                
                
            </div>
        `;
    };
    get style(){
        return /*css*/`
            :host{
                z-index: -1;
            }
            :host(:nth-child(even))   {

                display: block;
                transform: translateX(100%);
                transition: transform 1s;
            }
            :host(:nth-child(odd))   {
                display: block;
                transform: translateX(-70%);
                transition: transform 1s;
            }

            :host(.visible:nth-child(even)) {
                transform: translateX(-75px);
            }
            :host(.visible:nth-child(odd)) {
                transform: translateX(75px);
            }
            
            .project-card{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;
                margin: 20px;
                padding: 20px;
                background: var(--card-color);
                background: var(--card-gradient);
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                transition: 0.3s all;
                min-height: 300px;
                border: 1px solid #00000000;
            }
            .project-card:hover{
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                border: 1px solid white;
                cursor: pointer;
            }
            .right-img{
                margin-right: 25px;
                margin-left: 50px;
            }
            .left-img{
                margin-right: 50px;
                margin-left: 25px;
            }



            .project-image img{
                width: 250px;
                border-radius: 10px;
            }
           
            .project-info{
                height: 250px;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                
                
            }

            .right-info{
                align-items: flex-start;
                margin-left: 25px;
            }
            .left-info{
                align-items: flex-end;
                margin-right: 25px;
            }


            h3{
                font-size: 32px;
                font-weight: 500;
                margin-bottom: 20px;
                margin-top: 0px;
            
            }
            `;
        }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;
    }
    connectedCallback() {
        var observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.classList.add('visible');
                }
            });
        });

        observer.observe(this);
    }
}