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
  @Input() fixedHMob = "1500";
  @Input() maxW = "1150";
  // Dashboard properties
  public VizIndex = 'Tableau-Viz-' + this.dashboardIndex;

  // Handle dashboard resizing
  public getScreenWidth: any;
  public getScreenHeight : any;
  private calculateDashboardSize = () => {
    const bufferSize = 27;
    // this.getScreenWidth = window.innerWidth;


    let maxWidth = parseInt(this.maxW)
    if(window.innerWidth < maxWidth) {
      this.getScreenWidth = 380;
      this.getScreenHeight = parseInt(this.fixedHMob)+bufferSize;
    } else {
      this.getScreenWidth = maxWidth;
      this.getScreenHeight = parseInt(this.fixedH)+bufferSize;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth < parseInt(this.maxW) + 200 && window.innerWidth > parseInt(this.maxW) - 200) {
      this.calculateDashboardSize();
    }
  }

  ngOnInit(): void {
    this.calculateDashboardSize();
  }

}
