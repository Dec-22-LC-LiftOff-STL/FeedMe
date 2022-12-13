import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMeLaterPageComponent } from './feed-me-later-page.component';

describe('FeedMeLaterPageComponent', () => {
  let component: FeedMeLaterPageComponent;
  let fixture: ComponentFixture<FeedMeLaterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedMeLaterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedMeLaterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
