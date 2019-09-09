import { async, TestBed } from '@angular/core/testing';
import { SharedUtilAModule } from './shared-util-a.module';

describe('SharedUtilAModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilAModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilAModule).toBeDefined();
  });
});
