import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomantycznaPage } from './romantyczna.page';

describe('RomantycznaPage', () => {
  let component: RomantycznaPage;
  let fixture: ComponentFixture<RomantycznaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomantycznaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomantycznaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
