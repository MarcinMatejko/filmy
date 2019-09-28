import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkcjaPage } from './akcja.page';

describe('AkcjaPage', () => {
  let component: AkcjaPage;
  let fixture: ComponentFixture<AkcjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkcjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkcjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
