import { Component, inject } from '@angular/core';
import { GameDefinition } from '@itdl/game-portal/features/game-definition/entities';
import { GameDefinitionXSState } from '@itdl/game-portal/features/game-definition/ng-xs';
import { isNotNullOrUndefined } from '@itdl/shared/common';
import { Store } from '@ngxs/store';
import { rxState } from '@rx-angular/state';

// Leaflet.Icon.Default.imagePath = 'assets/';
type State = {
    gameDefinition: GameDefinition;
};
@Component({
    selector: 'gpll-geo-guesser-game',
    templateUrl: './geo-guesser-game.component.html',
    styleUrls: ['./geo-guesser-game.component.scss'],
})
export class GpllGeoGuesserGameComponent {
    private readonly store = inject(Store);
    private readonly state = rxState<State>(({ connect }) =>
        connect(
            'gameDefinition',
            this.store.select(GameDefinitionXSState.currentGameDefinition).pipe(isNotNullOrUndefined()),
        ),
    );

    public readonly gameDefinition$ = this.state.select('gameDefinition');
}
