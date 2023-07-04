import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top100SeriesComponent } from './top100-series.component';

describe('Top100SeriesComponent', () => {
  let component: Top100SeriesComponent;
  let fixture: ComponentFixture<Top100SeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top100SeriesComponent]
    });
    fixture = TestBed.createComponent(Top100SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
