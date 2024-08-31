import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivematchesComponent } from './livematches.component';

describe('LivematchesComponent', () => {
  let component: LivematchesComponent;
  let fixture: ComponentFixture<LivematchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivematchesComponent]
    });
    fixture = TestBed.createComponent(LivematchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
