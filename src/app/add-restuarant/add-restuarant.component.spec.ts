import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestuarantComponent } from './add-restuarant.component';

describe('AddRestuarantComponent', () => {
  let component: AddRestuarantComponent;
  let fixture: ComponentFixture<AddRestuarantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRestuarantComponent]
    });
    fixture = TestBed.createComponent(AddRestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
