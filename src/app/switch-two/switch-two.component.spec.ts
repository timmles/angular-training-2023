import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTwoComponent } from './switch-two.component';

describe('SwitchTwoComponent', () => {
  let component: SwitchTwoComponent;
  let fixture: ComponentFixture<SwitchTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchTwoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
