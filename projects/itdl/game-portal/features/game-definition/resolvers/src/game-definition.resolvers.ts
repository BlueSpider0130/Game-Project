import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { GameDefinition } from '@itdl/game-portal/features/game-definition/entities';
import { GameDefinitionActions } from '@itdl/game-portal/features/game-definition/ng-xs';
import { Store } from '@ngxs/store';

export const gameDefinitionByNameResolver: ResolveFn<GameDefinition> = (route: ActivatedRouteSnapshot) => {
    const gameDefinitionName = route.params['gameDefinitionName'];
    return inject(Store).dispatch(new GameDefinitionActions.FetchByName(gameDefinitionName));
};

export const gameDefinitionsResolver: ResolveFn<GameDefinition[]> = () =>
    inject(Store).dispatch(new GameDefinitionActions.FetchAll());
