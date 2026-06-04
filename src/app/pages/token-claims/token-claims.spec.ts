import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenClaims } from './token-claims';

describe('TokenClaims', () => {
  let component: TokenClaims;
  let fixture: ComponentFixture<TokenClaims>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenClaims],
    }).compileComponents();

    fixture = TestBed.createComponent(TokenClaims);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
