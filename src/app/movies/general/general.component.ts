import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  constructor(private scroller: ViewportScroller) {
  }

  insights = ["In the first graph we can see how many movies each streaming platform offers. Prime Video appears to have the most movies, while HBO max is a close second.",
    "The second graph represents the relation between the average IMDB score and the year that the movie was produced. The conclusion is, that there is a negative correlation between them, which means the newer the movie is, the lower rating it will have.",
    "The third graph shows the relation between the average IMDB score and the genre of the movie. Here it was also observed that a correlation exists. This is explained by the fact that, the more friendly and peaceful the content of the movie is (categories included here are documentary, history, sport) the better the average rating is. Categories with more violent and scary content, like horror movies or thrillers have worse ratings.",
  "In comparison to all the data presented, we can observe that Netflix does not excel in any category when it comes to its movies. It lacks the largest quantity of content and also does not receive the best reviews, especially in its more recent material, as evident in the second graph. However, it still remains the dominant platform. This implies that it must have significant strengths in the realm of TV series."]

  goTo(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }
}
