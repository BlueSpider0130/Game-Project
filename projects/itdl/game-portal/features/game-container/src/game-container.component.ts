import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { IGameContainerState } from '@itdl/game-portal/features/game-container/entities';
import { GameContainerXSState } from '@itdl/game-portal/features/game-container/ng-xs';
import { isNotNullOrUndefined } from '@itdl/shared/common';
import { Store } from '@ngxs/store';
import { RxState } from '@rx-angular/state';
import { delay, interval, map, merge, scan, startWith, takeUntil } from 'rxjs';

type State = { gameContainerState: IGameContainerState; gameState: string | null };

@Component({
    selector: 'gpll-game-container',
    templateUrl: './game-container.component.html',
    styleUrls: ['./game-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RxState],
})
export class GpllGameContainerComponent {
    @ContentChild('onContainerRunning') onContainerRunning!: TemplateRef<unknown>;
    @ContentChild('onContainerCreated') onContainerCreated!: TemplateRef<unknown>;

    @Input() public readonly isPanelHidden!: string;

    public readonly isRunningClass$ = this.state.select('gameContainerState').pipe(
        delay(1500),
        map((gameContainerState) => (gameContainerState.isRunning ? 'text-green-400' : 'text-red-400')),
    );

    public readonly isCreated$ = this.state
        .select('gameContainerState')
        .pipe(map((gameContainerState) => gameContainerState.isCreated));

    public readonly blinking$ = interval(250).pipe(
        startWith(1),
        map(() => ''),
        scan((_, __, index) => (index % 2 === 0 ? '' : 'text-cyan-400')),
        takeUntil(this.isRunningClass$),
    );

    public readonly isRunning$ = this.isRunningClass$.pipe(map((isRunning) => isRunning === 'text-green-400'));
    public readonly isRunningIndicator$ = merge(this.isRunningClass$, this.blinking$);
    public readonly gameState$ = this.state.select('gameState').pipe(isNotNullOrUndefined());

    constructor(private readonly store: Store, private readonly state: RxState<State>) {
        this.state.connect('gameContainerState', this.store.select(GameContainerXSState.gameContainerState));
        this.state.connect('gameState', this.store.select(GameContainerXSState.currentGameState));
    }
}
