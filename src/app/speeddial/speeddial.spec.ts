import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Speeddial } from './speeddial';

describe('Speeddial', () => {
  let component: Speeddial;
  let fixture: ComponentFixture<Speeddial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Speeddial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Speeddial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
