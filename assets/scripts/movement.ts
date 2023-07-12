import { _decorator, Component, Node ,v2, UITransform, misc, PhysicsSystem2D, Collider2D, Contact2DType, systemEvent, SystemEvent, macro, instantiate} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('movement')
export class movement extends Component {

    shiftRight: number = 0;
    shiftLeft: number = 0;
    shot: number = 0;


    shift(event){
        switch(event.keyCode){
            case macro.KEY.right: this.shiftRight = 1;
            break;
            case macro.KEY.left: this.shiftLeft = 1;
            break;
            case macro.KEY.up: this.shot = 1;
            break;
            
        }
    }

    stop(event){
        switch(event.keyCode){
            case macro.KEY.right: this.shiftRight = 0;
            break;
            case macro.KEY.left: this.shiftLeft = 0;
            break;
            case macro.KEY.up: this.shot = 0;
            break;
        }
    }
    /*positionXY(event)
    {
        var playerPosition = v2(this.node.position.x,this.node.position.y);     //cc
        var mousePosition = event.getLocation();

        
        const uiTransform = this.node.getComponent(UITransform);


        mousePosition = uiTransform.convertToNodeSpaceAR(mousePosition);
        var angle = mousePosition.signAngle(playerPosition);
        var angleD = misc.radiansToDegrees(angle);  //cc

       // angleD = (angleD * -1)-45;
        this.node.angle = angleD;

    }
    onLoad() {
        this.node.parent.on('mousemove',this.positionXY,this);
    }*/
    
    
    start() {
        PhysicsSystem2D.instance.enable = true;

        let collider = this.getComponent(Collider2D);
        if(collider)
        collider.on(Contact2DType.BEGIN_CONTACT,this.onCollisionEnter, this);
        
        systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.shift,this);
        systemEvent.on(SystemEvent.EventType.KEY_UP,this.shift,this);
        systemEvent.on(SystemEvent.EventType.MOUSE_DOWN,this.createAsteroid,this);
    }

    update(deltaTime: number) { 
       /* this.node.parent.on('mousemove',this.positionXY,this);*/
    }
    
    
    /*createAsteroid()
    {
        var newAsteroids = instantiate(this.asteroids);
        var positions = [
            v2(-214,554),v2(-151,554),v2(-84,554),v2(-24,554),
            v2(27,554),v2(75,554),v2(135,554),v2(176,554)
        ];
        var asteroidsPosition = Math.floor(Math.random()*positions.length);
        newAsteroids.setPosition(positions[asteroidsPosition]);
        this.node.addChild(newAsteroids);
    }*/
}


