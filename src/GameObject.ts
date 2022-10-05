import { GameObjectBehavior } from "./GameObjectBehavior"
import * as PIXI from 'pixi.js';
export class GameObject extends PIXI.Container {



    private id: string;
    private behaviors: Map<string, GameObjectBehavior>;
    constructor(id: string) {
        super();
        this.id = id;
        this.init();
    }

    private init() {
        this.behaviors = new Map<string, GameObjectBehavior>(); /// new parentesis
    }

    public getId(): string {
        return this.id;
    }

    public update(delta: number) {
        this.behaviors.forEach((behaviour) => {
            behaviour.update(delta);
        })
    }

    public addBehavior(id: string, behaviour: GameObjectBehavior) {
        this.behaviors.set(id, behaviour);
    }

    public removeBehavior(id: string) {
        if (!this.behaviors.has(id)) {
            return;
        }

        this.behaviors.get(id).destroy();
        this.behaviors.delete(id);
    }
}