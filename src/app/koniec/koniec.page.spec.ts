import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoniecPage } from './koniec.page';

describe('KoniecPage', () => {
  let component: KoniecPage;
  let fixture: ComponentFixture<KoniecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoniecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoniecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
