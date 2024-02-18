export class CursorFollower extends HTMLElement{
    get template(){
        return /*html*/`
            <style>${this.style}</style>
            <div class="movable-container">
                <div class="movable"></div>
            </div>
         
        `;
    
    };
    get style(){
        return /*css*/`
            .movable-container{
                pointer-events: none;
                position: fixed;
                z-index: 2;
                width:  100vw;
                height: 100vh;
            }
            .movable{
                pointer-events: none;
                z-index: 2;
                fill: none;
                stroke: white;
                border: 1px solid white;
                width: 50px;
                height: 50px;
                border-radius: 25px;
                animation: fadein 3s forwards;
            
            }
            @keyframes fadein {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `;
    };
    
    constructor(){
        super();
        
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;

        this.mouse_pos = {x: 0, y: 0};
        this.movable_pos = {x: 0, y: 0};
        this.previous_mouse = {x: 0, y: 0};
        this.current_scale = 1;
        this.current_angle = 0;
        this.SPEED = 0.2;
        this.SCALE_SPEED = 0.1;
        this.OFFSET = 35;

        this.movable = this.shadowRoot.querySelector('.movable');

        document.onmousemove = (e) => {
            this.mouse_pos.x = e.clientX - this.OFFSET;
            this.mouse_pos.y = e.clientY - this.OFFSET;
        };
        this.update();
    };

    clamp = (value, min, max) => {
        if(value > max){
            value = max;
        }
        else if(value < min){
            value = min;
        }
        return value;
    };
    mouse_move() {

        this.movable_pos.x += (this.mouse_pos.x - this.movable_pos.x) * this.SPEED;
        this.movable_pos.y += (this.mouse_pos.y - this.movable_pos.y) * this.SPEED;
    
        const delta_x = this.mouse_pos.x - this.previous_mouse.x;
        const delta_y = this.mouse_pos.y - this.previous_mouse.y;
        this.previous_mouse.x = this.mouse_pos.x;
        this.previous_mouse.y = this.mouse_pos.y;
    
        let magnitude = this.clamp(Math.sqrt((delta_x**2) + (delta_y**2)), 0, 50);
        let scale_factor = (magnitude / 50) * 0.6;
    
        let angle = Math.atan2(delta_y, delta_x) * 180 / Math.PI;
        if(magnitude > 5){
            this.current_angle = angle;
        }
    
        this.current_scale += (scale_factor - this.current_scale) * this.SCALE_SPEED;
    
        this.movable.style.transform = `translate(${this.movable_pos.x}px, ${this.movable_pos.y}px) rotate(${this.current_angle}deg) scale(${1 + this.current_scale},${1 - this.current_scale})`;
    };
    update() {
        this.mouse_move();
        requestAnimationFrame(this.update.bind(this));   
    };
    
}