import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LandingAppComponent } from './landing-app.component';

describe('LandingAppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [LandingAppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(LandingAppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'landing'`, () => {
        const fixture = TestBed.createComponent(LandingAppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('landing');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(LandingAppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('landing app is running!');
    });
});
