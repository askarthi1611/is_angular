import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsplitComponent } from './asplit.component';

describe('AsplitComponent', () => {
  let component: AsplitComponent;
  let fixture: ComponentFixture<AsplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsplitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
