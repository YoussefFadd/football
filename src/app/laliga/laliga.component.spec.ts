import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaligaComponent } from './laliga.component';

describe('LaligaComponent', () => {
  let component: LaligaComponent;
  let fixture: ComponentFixture<LaligaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaligaComponent]
    });
    fixture = TestBed.createComponent(LaligaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
