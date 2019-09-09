import { async, TestBed } from '@angular/core/testing';
import { DomainBLibDModule } from './domain-b-lib-d.module';

describe('DomainBLibDModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainBLibDModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DomainBLibDModule).toBeDefined();
  });
});
