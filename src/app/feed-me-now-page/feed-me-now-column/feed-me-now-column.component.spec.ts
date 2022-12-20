import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMeNowColumnComponent } from './feed-me-now-column.component';

describe('FeedMeNowColumnComponent', () => {
  let component: FeedMeNowColumnComponent;
  let fixture: ComponentFixture<FeedMeNowColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedMeNowColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedMeNowColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
