import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-tableau-viz',
  templateUrl: './tableau-viz.component.html',
  styleUrls: ['./tableau-viz.component.css']
})
export class TableauVizComponent {

  // Inherit attributes from the parent component
  @Input() dashboardIndex = "0";
  @Input() toolbar = 'hidden';
  @Input() vizUrl = '';

  // Dashboard properties
  public VizIndex = 'Tableau-Viz-' + this.dashboardIndex;

  // Handle dashboard resizing
  public getScreenWidth: any;
  public getScreenHeight: any;
  private calculateDashboardSize = () => {
    const bufferSize = 25;
    this.getScreenWidth = window.innerWidth-bufferSize;
    this.getScreenHeight = (window.innerWidth-bufferSize)*3/4;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.calculateDashboardSize();
  }

}
