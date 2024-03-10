import { Game } from '@itdl/game-portal/features/game/entities';
import { Entity } from '@itdl/game-portal/http';

export class GameDefinition extends Entity<number> {
    name!: string;
    description!: string;
    imageUrl!: string;
    imageAltUrl!: string;
    gamePageAppUrl!: string;
    games: Game[] = [];
}
