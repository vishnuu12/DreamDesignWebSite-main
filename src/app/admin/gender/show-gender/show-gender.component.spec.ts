import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGenderComponent } from './show-gender.component';

describe('ShowGenderComponent', () => {
  let component: ShowGenderComponent;
  let fixture: ComponentFixture<ShowGenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowGenderComponent]
    });
    fixture = TestBed.createComponent(ShowGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
