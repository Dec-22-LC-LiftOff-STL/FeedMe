import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewLayoutComponent } from './create-new-layout.component';

describe('CreateNewLayoutComponent', () => {
  let component: CreateNewLayoutComponent;
  let fixture: ComponentFixture<CreateNewLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
