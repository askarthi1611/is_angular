import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GittabComponent } from './gittab.component';

describe('GittabComponent', () => {
  let component: GittabComponent;
  let fixture: ComponentFixture<GittabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GittabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GittabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
