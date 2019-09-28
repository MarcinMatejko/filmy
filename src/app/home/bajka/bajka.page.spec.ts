import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajkaPage } from './bajka.page';

describe('BajkaPage', () => {
  let component: BajkaPage;
  let fixture: ComponentFixture<BajkaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajkaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
