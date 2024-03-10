import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePostsPageComponent } from './game-posts-page.component';

describe('GamePostsPageComponent', () => {
  let component: GamePostsPageComponent;
  let fixture: ComponentFixture<GamePostsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamePostsPageComponent]
    });
    fixture = TestBed.createComponent(GamePostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
