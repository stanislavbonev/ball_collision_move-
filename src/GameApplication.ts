import * as PIXI from 'pixi.js';
import { Button1 } from './Button1';
import { Button2 } from './Button2';
import { Game } from './Game'


export class GameApplication extends PIXI.Application {

    private game: Game;

    public static STAGE_WIDTH: number = 800;
    public static STAGE_HEIGHT: number = 600;

    private static app: GameApplication;
    private mainContainer: PIXI.Container;

    private ball: PIXI.Sprite;
    private velocity: number = 10;
    private btn1Down: boolean = false;
    private btn2Down: boolean = false;
    private hitRightBorder: boolean = false;
    private hitLeftBorder: boolean = false;
    private hitDownBorder: boolean = false;
    private hitUpBorder: boolean = false;


    private myTicker: PIXI.Ticker;

    private fram: number;

    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
    }
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        GameApplication.app = this;
        this.mainContainer = new PIXI.Container();
        this.loader = new PIXI.Loader();
        this.loader.onComplete.add(this.onLoadComplete, this);



        // this.myCallback = this.myCallback.bind(this); !!!!!!!


        window.onload = () => {
            const gameContainer: HTMLCanvasElement = document.getElementById("gameContainer") as HTMLCanvasElement;
            gameContainer.appendChild(this.view);
            this.stage.addChild(this.mainContainer);

            this.resizeCanvas();
            this.createGame();

            this.loadAssets();
            this.showText();
            this.createButton();
            this.createContainers();


            // this.timeout();
            this.view.style.position = 'absolute';
            this.view.style.left = '50%';
            this.view.style.top = '50%';
            this.view.style.transform = 'translate3d( -50%, -50%, 0 )';
        };
    }

    private createGame() {
        this.game = new Game();
        this.mainContainer.addChild(this.game)
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0x989c99,
            width: GameApplication.STAGE_WIDTH,
            height: GameApplication.STAGE_HEIGHT,
        }
    }

    private resizeCanvas(): void {
        this.onResize();

        window.addEventListener('resize', this.onResize);
    }

    private onResize() {
        this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
    }

    private loadAssets() {

    }

    private showText() {


    }

    private createContainers() {



    }
    private createButton() {



    }

    private onLoadComplete() {
    }

}




