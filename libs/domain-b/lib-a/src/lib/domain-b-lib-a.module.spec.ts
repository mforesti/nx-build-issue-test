import { async, TestBed } from '@angular/core/testing';
import { DomainBLibAModule } from './domain-b-lib-a.module';

describe('DomainBLibAModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainBLibAModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DomainBLibAModule).toBeDefined();
  });
});
