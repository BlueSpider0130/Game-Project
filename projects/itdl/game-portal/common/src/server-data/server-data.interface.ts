import { GameDefinition } from '@itdl/game-portal/features/game-definition/entities';

export interface IServerData {
    weatherForecasts: any[];
    gamedefs: GameDefinition[];
}
