import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomediaPage } from './komedia.page';

describe('KomediaPage', () => {
  let component: KomediaPage;
  let fixture: ComponentFixture<KomediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
