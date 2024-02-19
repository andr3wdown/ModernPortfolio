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
                transform: translateX(-4.6875em);
            }
            :host(.visible:nth-child(odd)) {
                transform: translateX(4.6875em);
            }

            .project-card{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;
                margin: 1.25em;
                padding: 1.25em;
                background: var(--card-color);
                background: var(--card-gradient);
                border-radius: 0.625em;
                box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.1);
                transition: 0.3s all;
                min-height: 18.75em;
                border: 1px solid #00000000;
            }
            .project-card:hover{
                box-shadow: 0 0 1.25em rgba(0, 0, 0, 0.5);
                border: 1px solid white;
                cursor: pointer;
            }
            .right-img{
                margin-right: 1.5625em;
                margin-left: 3.125em;
            }
            .left-img{
                margin-right: 3.125em;
                margin-left: 1.5625em;
            }

            .project-image img{
                width: 15.625em;
                border-radius: 0.625em;
            }

            .project-info{
                height: 15.625em;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;


            }

            .right-info{
                align-items: flex-start;
                margin-left: 1.5625em;
            }
            .left-info{
                align-items: flex-end;
                margin-right: 1.5625em;
            }


            h3{
                font-size: 2.0em;
                font-weight: 500;
                margin-bottom: 0.625em;
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
