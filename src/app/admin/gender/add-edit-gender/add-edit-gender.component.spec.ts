import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGenderComponent } from './add-edit-gender.component';

describe('AddEditGenderComponent', () => {
  let component: AddEditGenderComponent;
  let fixture: ComponentFixture<AddEditGenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditGenderComponent]
    });
    fixture = TestBed.createComponent(AddEditGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
