import { _decorator, Component, instantiate, Node, Prefab, UITransform, v2, Vec2, callFunc ,Vec3, macro, Label, AudioClip, AudioEngine} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(Prefab)
    shots: Prefab = null;
    
    @property(Prefab)
    asteroids: Prefab = null;

    @property(Label)
    scoreLabel: Label=null;

    @property({
        type:AudioClip
    })
    clash=null;

    @property
    posX:number = 0;
    posY:number = 0;
    score:number = 100;

    start() {

    }

    addScore()
    {
        this.score == 100;
        this.scoreLabel.string = "SCORE :" +this.score.toString();
        }
    spawn(event)
    {
        var newShots = instantiate(this.shots);
        newShots.setPosition(this.node.getChildByName('rocket').position.x,this.node.getChildByName('rocket').position.y);
        this.node.addChild(newShots);

        var uiTransform=this.node.getComponent(UITransform);
        var mousePosition = event.getLocation();
        mousePosition = uiTransform.convertToNodeSpaceAR(mousePosition);
        this.posX = mousePosition.x;
        this.posY = mousePosition.y;

        var actionBy = moveTo(0.5,Vec2(this.posX, this.posY));
        var destruction = callFunc(function(){
            newShots.destroy();
        },this);
        var sequence = sequence(actionBy,destruction);
        newShots.runAction(sequence);
        audioEngine.playEffect(this.clash,false);
    }

    createAsteroid()
    {
        var newAsteroids = instantiate(this.asteroids);
        var positions = [
            v2(-214,554),v2(-151,554),v2(-84,554),v2(-24,554),
            v2(27,554),v2(75,554),v2(135,554),v2(176,554)
        ];

        var asteroidsPosition = Math.floor(Math.random()*positions.length);
        newAsteroids.setPosition(positions[asteroidsPosition]);
        this.node.addChild(newAsteroids);
    }

    update(deltaTime: number) {
        this.node.on('mousedown',this.spawn,this);
        this.schedule(this.createAsteroid,1,macro.REPEAT_FOREVER,3);
    }
}


