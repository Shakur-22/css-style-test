import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dropmenu } from './dropmenu';

describe('Dropmenu', () => {
  let component: dropmenu;
  let fixture: ComponentFixture<dropmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dropmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(dropmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
