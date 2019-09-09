import { async, TestBed } from '@angular/core/testing';
import { SharedUtilBModule } from './shared-util-b.module';

describe('SharedUtilBModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilBModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilBModule).toBeDefined();
  });
});
