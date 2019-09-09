import { async, TestBed } from '@angular/core/testing';
import { DomainALibBModule } from './domain-a-lib-b.module';

describe('DomainALibBModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainALibBModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DomainALibBModule).toBeDefined();
  });
});
