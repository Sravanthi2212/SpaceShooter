import { _decorator, Component, Node ,v2, UITransform} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('movement')
export class movement extends Component {

    positionXY(event)
    {
        var playerPosition = v2(this.node.position.x,this.node.position.y);     //cc
        var mousePosition = event.getLocation();

        
        const uiTransform = this.node.getComponent(UITransform);


        mousePosition = uiTransform.convertToNodeSpaceAR(mousePosition);
        console.log(mousePosition);

    }
    onLoad() {
        this.node.parent.on('mousemove',this.positionXY,this);
    }
    
    
    start() {

    }

    //update(deltaTime: number) { }
}


