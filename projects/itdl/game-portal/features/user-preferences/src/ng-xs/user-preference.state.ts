import { Injectable } from '@angular/core';
import { Theme } from '@itdl/game-portal/ui';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { ToggleThemeAction } from './user-preference.actions';

export interface IUserPreferenceState {
    theme: Theme;
}

const defaults: IUserPreferenceState = {
    theme: 'dark',
};

@State<IUserPreferenceState>({
    name: 'userPreferences',
    defaults,
})
@Injectable()
export class UserPreferenceState {
    @Action(ToggleThemeAction)
    public toggleTheme({ patchState, getState }: StateContext<IUserPreferenceState>) {
        const theme = getState().theme;
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        patchState({ theme: newTheme });
    }

    @Selector()
    public static theme(state: IUserPreferenceState) {
        return state.theme;
    }
}
