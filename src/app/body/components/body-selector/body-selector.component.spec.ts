import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySelectorComponent } from './body-selector.component';

describe('BodySelectorComponent', () => {
  let component: BodySelectorComponent;
  let fixture: ComponentFixture<BodySelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodySelectorComponent]
    });
    fixture = TestBed.createComponent(BodySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
