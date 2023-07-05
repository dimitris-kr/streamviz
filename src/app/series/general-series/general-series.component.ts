import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-general-series',
  templateUrl: './general-series.component.html',
  styleUrls: ['./general-series.component.css']
})
export class GeneralSeriesComponent {
  constructor(private scroller: ViewportScroller) {}

  insights = ["In the first graph we can see how many TV-series each streaming platform has. By far the platform with the highest number of series is Netflix.",
  "The second graph represents the relation between the average IMDB score and the year that the TV-series was produced. The conclusion is that there is a decrease as the decades pass, but for the most part the average score of each platform is stable.",
  "The third graph shows the relation between the average IMDB score and the series’ genre. One observation made, was that HBO Max holds the first place in most of the categories (10 out of 17), whereas Netflix is consistently low throughout the different categories with only 2 first places.",
  "In comparison to all the data presented, we observe that although Netflix offers a larger quantity of content compared to other platforms, HBO MAX excels in almost all categories in terms of ratings. However, Netflix remains the dominant platform."]
  goTo(anchor:string){
    this.scroller.scrollToAnchor(anchor);
  }
}
