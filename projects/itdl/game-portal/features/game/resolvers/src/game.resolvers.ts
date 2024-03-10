import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Game } from '@itdl/game-portal/features/game/entities';
import { GameActions } from '@itdl/game-portal/features/game/ng-xs';
import { GameDefinitionXSState } from '@itdl/game-portal/features/game-definition/ng-xs';
import { Store } from '@ngxs/store';

export const gamesByGameDefResolver: ResolveFn<Game[]> = () => {
    const store = inject(Store);
    const gameDefinition = store.selectSnapshot(GameDefinitionXSState.currentGameDefinition);
    if (!gameDefinition) throw new Error('No game definition selected');

    return store.dispatch(new GameActions.FetchGamesByGameDefinitionId(gameDefinition.id));
};
