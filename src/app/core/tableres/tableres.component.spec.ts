import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableresComponent } from './tableres.component';

describe('TableresComponent', () => {
  let component: TableresComponent;
  let fixture: ComponentFixture<TableresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
