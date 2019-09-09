import { async, TestBed } from '@angular/core/testing';
import { SharedUtilCModule } from './shared-util-c.module';

describe('SharedUtilCModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilCModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilCModule).toBeDefined();
  });
});
