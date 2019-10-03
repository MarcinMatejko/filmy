import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelectorPage } from './option-selector.page';

describe('OptionSelectorComponent', () => {
  let component: OptionSelectorPage;
  let fixture: ComponentFixture<OptionSelectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSelectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
