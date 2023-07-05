import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {

  constructor(private scroller: ViewportScroller) {}

  goTo(anchor:string){
    this.scroller.scrollToAnchor(anchor);
  }
}
