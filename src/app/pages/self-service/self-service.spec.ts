import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfService } from './self-service';

describe('SelfService', () => {
  let component: SelfService;
  let fixture: ComponentFixture<SelfService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfService],
    }).compileComponents();

    fixture = TestBed.createComponent(SelfService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
