/* eslint-disable sort-exports/sort-exports */
import { inject, Injectable } from '@angular/core';
import { GpllGameApiService } from '@itdl/game-portal/features/game/api';
import { Game } from '@itdl/game-portal/features/game/entities';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import buildQuery from 'odata-query';
import { tap } from 'rxjs';

import { GameActions } from './game.actions';

export interface IGameXSState {
    createdGame: Game | null;
    games: Game[];
    gamesByCode: Game[];
    game: Game | null;
}

const defaults: IGameXSState = {
    createdGame: null,
    games: [],
    gamesByCode: [],
    game: null,
};

@State<IGameXSState>({
    name: 'gameState',
    defaults,
})
@Injectable()
export class GameXSState {
    private readonly gameApiService = inject(GpllGameApiService);

    @Action(GameActions.FetchGames)
    public fetchGames({ dispatch }: StateContext<IGameXSState>) {
        return this.gameApiService.getAll().pipe(tap((games) => dispatch(new GameActions.StoreGames(games))));
    }

    @Action(GameActions.StoreGames)
    public storeGames({ patchState }: StateContext<IGameXSState>, { games }: GameActions.StoreGames) {
        patchState({ games: [...games] });
    }

    @Action(GameActions.CreateGame)
    public createGame({ dispatch }: StateContext<IGameXSState>, { gameDefinitionId, name }: GameActions.CreateGame) {
        return this.gameApiService
            .create({ name, gameDefinitionId })
            .pipe(tap((game) => dispatch(new GameActions.StoreCreatedGame(game))));
    }

    @Action(GameActions.StoreCreatedGame)
    public storeCreatedGame(
        { patchState, getState }: StateContext<IGameXSState>,
        { game }: GameActions.StoreCreatedGame,
    ) {
        patchState({ createdGame: game });
        patchState({ games: [...getState().games, game] });
    }

    @Action(GameActions.FetchGamesByGameDefinitionId)
    public fetchGamesByGameDefinitionId(
        { dispatch }: StateContext<IGameXSState>,
        { gameDefinitionId }: GameActions.FetchGamesByGameDefinitionId,
    ) {
        return this.gameApiService
            .getAllOData(buildQuery({ filter: { gameDefinitionId } }))
            .pipe(tap((games) => dispatch(new GameActions.StoreGames(games))));
    }

    @Action(GameActions.FetchGamesByGameCode)
    public fetchGameByGameCode(
        { dispatch }: StateContext<IGameXSState>,
        { gameCode }: GameActions.FetchGamesByGameCode,
    ) {
        return this.gameApiService
            .getAllOData(buildQuery({ filter: `code eq '${gameCode}'` }))
            .pipe(tap((games) => dispatch(new GameActions.StoreGames(games))));
    }

    @Action(GameActions.StoreGame)
    public storeGame({ patchState }: StateContext<IGameXSState>, { game }: GameActions.StoreGame) {
        patchState({ game });
    }

    @Selector()
    public static games(state: IGameXSState) {
        return state.games;
    }

    @Selector()
    public static gameCode(state: IGameXSState) {
        if (!state.game) throw new Error('Game is not defined');
        return state.game.code;
    }
}
