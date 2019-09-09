import { async, TestBed } from '@angular/core/testing';
import { DomainALibAModule } from './domain-a-lib-a.module';

describe('DomainALibAModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainALibAModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DomainALibAModule).toBeDefined();
  });
});
