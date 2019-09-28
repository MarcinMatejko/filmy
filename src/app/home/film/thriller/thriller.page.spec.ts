import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillerPage } from './thriller.page';

describe('ThrillerPage', () => {
  let component: ThrillerPage;
  let fixture: ComponentFixture<ThrillerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrillerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrillerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
