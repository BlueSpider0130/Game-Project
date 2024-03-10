import { Directive, Input, OnInit } from '@angular/core';
import { GameContainerSocketActions } from '@itdl/game-portal/features/game-container/actions';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Directive({
    selector: '[gpllCreateGameContainerAction]',
    standalone: true,
})
export class CreateGameContainerActionDirective implements OnInit {
    @Input() public readonly gameDefName!: string;
    @Input() public readonly gameId!: string;

    @Dispatch() createContainer = (gameDefName: string, gameId: string) =>
        new GameContainerSocketActions.Run(gameDefName, gameId);

    ngOnInit(): void {
        this.createContainer(this.gameDefName, this.gameId);
    }
}
