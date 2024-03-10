/* eslint-disable sort-exports/sort-exports */
import { inject, Injectable } from '@angular/core';
import {
    GameContainerState,
    GameContext,
    IGameContainerState,
    IGameContext,
} from '@itdl/game-portal/features/game-container/entities';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

import { GameContainerStoreActions } from './game-container.store.actions';

export interface IGameContainerXSState {
    state: IGameContainerState;
    gameContext: IGameContext;
    currentGameState: string | null;
}

const defaults: IGameContainerXSState = {
    state: new GameContainerState(),
    gameContext: new GameContext(),
    currentGameState: null,
};

@State<IGameContainerXSState>({
    name: 'gameContainerState',
    defaults,
})
@Injectable()
export class GameContainerXSState {
    private readonly store = inject(Store);

    @Action(GameContainerStoreActions.Store)
    public storeGameContainerState(
        { patchState }: StateContext<IGameContainerXSState>,
        { state }: GameContainerStoreActions.Store,
    ) {
        patchState({ state });
    }

    @Action(GameContainerStoreActions.StoreContainerGameContext)
    public storeGameContext(
        { patchState }: StateContext<IGameContainerXSState>,
        { gameContext }: GameContainerStoreActions.StoreContainerGameContext,
    ) {
        patchState({ gameContext });
    }

    @Action(GameContainerStoreActions.StoreGameStateChanged)
    public storeGameState(
        { patchState }: StateContext<IGameContainerXSState>,
        { gameStateChange }: GameContainerStoreActions.StoreGameStateChanged,
    ) {
        patchState({ currentGameState: gameStateChange });
    }

    @Selector()
    public static gameContainerState(state: IGameContainerXSState) {
        return state.state;
    }

    @Selector()
    public static currentGameState(state: IGameContainerXSState) {
        return state.currentGameState;
    }
}
