import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMeNowPageComponent } from './feed-me-now-page.component';

describe('FeedMeNowPageComponent', () => {
  let component: FeedMeNowPageComponent;
  let fixture: ComponentFixture<FeedMeNowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedMeNowPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedMeNowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
