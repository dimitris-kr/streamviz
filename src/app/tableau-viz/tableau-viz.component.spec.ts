import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauVizComponent } from './tableau-viz.component';

describe('TableauVizComponent', () => {
  let component: TableauVizComponent;
  let fixture: ComponentFixture<TableauVizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauVizComponent]
    });
    fixture = TestBed.createComponent(TableauVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
