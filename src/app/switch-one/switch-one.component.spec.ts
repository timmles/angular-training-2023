import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOneComponent } from './switch-one.component';

describe('SwitchOneComponent', () => {
  let component: SwitchOneComponent;
  let fixture: ComponentFixture<SwitchOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchOneComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
