import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaManagement } from './mfa-management';

describe('MfaManagement', () => {
  let component: MfaManagement;
  let fixture: ComponentFixture<MfaManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(MfaManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
