import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.css']
})
export class Top100Component {

  insights = ["When filtering by platform with the icon filters, it is apparent that HBO max has the most entries in the top 100 list, with a considerable difference from the second place"]
  constructor(private scroller: ViewportScroller) {}

  goTo(anchor:string){
    this.scroller.scrollToAnchor(anchor);
  }
}
