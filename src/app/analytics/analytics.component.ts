import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {

  insights = ["The map shows how many and which platforms are available in each country.",
  "The bar chart on the top right compares the pricing of each platform's subscription plans. Overall, Netflix and HBO max are the most expensive, while Disney+ has lower rates.",
  "The first line chart indicates that Netflix consistently has the highest number of subscribers throughout the years. Prime Video is at a close second, but it is worth noting that it is part of the Amazon Prime subscription (free delivery of Amazon orders etc.) and therefore the numbers represent the subscribers and revenue of the app as a whole. However, the most rapid growth was achieved by Disney+, which reached 162.4 subscribers in a 2 year period since its launch.",
  "The second line chart shows that the highest revenue belongs to HBO max, which could be attributed to it being part of a greater package of TV services. On the other hand, in the past couple of years a stagnancy in revenue can be observed for the rest of the platforms."]
  constructor(private scroller: ViewportScroller) {}

  goTo(anchor:string){
    this.scroller.scrollToAnchor(anchor);
  }
}
