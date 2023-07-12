import { _decorator, Component, Game, Node } from 'cc';
import{ movement} from './movement';
const { ccclass, property } = _decorator;

@ccclass('fireShot')
export class fireShot extends Component {
@property(movement)
movement: movement= null;

    start() {

    }

    update(deltaTime: number) {
        var posX = this.node.position.x;
        var posY = this.node.position.y;
        this.node.setPosition(posX,posY +=40*deltaTime);
    
    }
}


