import { _decorator, Component, Node ,ActionsInterval,director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('asteroid')
export class asteroid extends Component {
    action:ActionInterval;

    addScore = 0;

    onCollisionEnter(other,self)
    {
        if(other.tag == 2)
        {
            this.node.destroy();
            other.node.destroy();
            this.addScore += 100;
        }
        if(other.tag == 1)
        {
            director.loadScene("Game");
        }
    }

    moveToPlayer(){
        var moveAction = moveTo(this.node.parent.getChildByName('rocket').position.x,this.node.parent.getChildByName('rocket').position.y);
        return moveAction;
    }
    start() {

    }

    update(deltaTime: number) {
        this.action = this.moveToPlayer();
        this.node.runAction(this.action);

        var manager= director.getCollisionManager();
        manager.enabled=true;

        director.preloadScene("Game");

  }
    }



