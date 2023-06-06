import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BarComponent } from './d3-bar.component';

describe('D3BarComponent', () => {
  let component: D3BarComponent;
  let fixture: ComponentFixture<D3BarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3BarComponent]
    });
    fixture = TestBed.createComponent(D3BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
