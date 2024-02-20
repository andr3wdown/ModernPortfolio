export class Scaler extends HTMLElement{

    get font_size(){
        let scale_factor = 16 / 1920;    
        return scale_factor * window.innerWidth; 
    }

    update(){
        document.documentElement.style.setProperty('font-size', `${this.font_size}px`);
        requestAnimationFrame(this.update.bind(this));
    }

    constructor(){
        super();
        this.update();
    }
}