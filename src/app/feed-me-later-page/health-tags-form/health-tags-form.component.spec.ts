import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTagsFormComponent } from './health-tags-form.component';

describe('HealthTagsFormComponent', () => {
  let component: HealthTagsFormComponent;
  let fixture: ComponentFixture<HealthTagsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthTagsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthTagsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
