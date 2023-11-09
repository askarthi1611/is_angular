import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColpComponent } from './table-colp.component';

describe('TableColpComponent', () => {
  let component: TableColpComponent;
  let fixture: ComponentFixture<TableColpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableColpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableColpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
