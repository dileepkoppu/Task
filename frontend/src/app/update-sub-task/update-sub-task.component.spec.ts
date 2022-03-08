import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubTaskComponent } from './update-sub-task.component';

describe('UpdateSubTaskComponent', () => {
  let component: UpdateSubTaskComponent;
  let fixture: ComponentFixture<UpdateSubTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
