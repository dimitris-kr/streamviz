import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-top100-series',
  templateUrl: './top100-series.component.html',
  styleUrls: ['./top100-series.component.css']
})
export class Top100SeriesComponent {

  insights = ["When filtering by platform with the icon filters, it can be determined that Netflix is the platform with the most entries in the top 100 list, very closely followed by HBO max and HULU."]

  constructor(private scroller: ViewportScroller) {}

  goTo(anchor:string){
    this.scroller.scrollToAnchor(anchor);
  }
}
