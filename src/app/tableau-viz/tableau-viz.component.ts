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
  @Input() fixedH = "1500";
  // Dashboard properties
  public VizIndex = 'Tableau-Viz-' + this.dashboardIndex;

  // Handle dashboard resizing
  public getScreenWidth: any;
  public getScreenHeight : any;
  private calculateDashboardSize = () => {
    const bufferSize = 25;
    this.getScreenWidth = window.innerWidth-bufferSize;
    this.getScreenHeight = parseInt(this.fixedH);
    let maxWidth = 1150;
    if(window.innerWidth < 767){
      this.getScreenHeight = parseInt(this.fixedH) * 2;
    }
    if(window.innerWidth > maxWidth){
      this.getScreenWidth = maxWidth;
    }
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.calculateDashboardSize();
  }

  ngOnInit(): void {
    this.calculateDashboardSize();
  }

}
