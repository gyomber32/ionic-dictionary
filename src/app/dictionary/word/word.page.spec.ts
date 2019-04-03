import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPage } from './word.page';

describe('WordPage', () => {
  let component: WordPage;
  let fixture: ComponentFixture<WordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
