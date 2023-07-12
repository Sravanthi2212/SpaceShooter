import { _decorator, Component, Node } from 'cc';
import { movement} from './movement';
const { ccclass, property } = _decorator;

@ccclass('fireFall')
export class fireFall extends Component {

    @property(movement)
    movement: movement = null;

    start() {

    }

    update(deltaTime: number) {
        var posX = this.node.position.x;
       var posY = this.node.position.y;
       this.node.setPosition(posX, posY -= 20*deltaTime);
       
       }
    }



