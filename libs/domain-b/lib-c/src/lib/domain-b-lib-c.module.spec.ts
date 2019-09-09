import { async, TestBed } from '@angular/core/testing';
import { DomainBLibCModule } from './domain-b-lib-c.module';

describe('DomainBLibCModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainBLibCModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DomainBLibCModule).toBeDefined();
  });
});
