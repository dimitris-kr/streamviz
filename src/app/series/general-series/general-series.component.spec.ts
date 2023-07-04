import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSeriesComponent } from './general-series.component';

describe('GeneralSeriesComponent', () => {
  let component: GeneralSeriesComponent;
  let fixture: ComponentFixture<GeneralSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSeriesComponent]
    });
    fixture = TestBed.createComponent(GeneralSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
