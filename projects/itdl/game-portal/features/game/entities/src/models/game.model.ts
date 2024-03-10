import { Entity } from '@itdl/game-portal/http';

export class Game extends Entity {
    name!: string;
    gameDefinitionId!: number;
    code!: string;
}
