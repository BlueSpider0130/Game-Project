import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GamePortalAppComponent } from './game-portal-app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [GamePortalAppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(GamePortalAppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'ClientApp'`, () => {
        const fixture = TestBed.createComponent(GamePortalAppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('ClientApp');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(GamePortalAppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('ClientApp app is running!');
    });
});
