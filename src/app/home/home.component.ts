import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  banners = [1, 2, 3, 4].map((n) => "assets/banner-" + n + ".jpg");

  platforms: string[] = ["Disney+", "HBO Max", "HULU", "Netflix", "Prime Video"];

  platform_icons: string[] = ["disney_plus", "hbo_max", "hulu", "netflix", "prime_video"].map((n) => "assets/" + n + ".png");

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.pauseOnHover = false;

  }
}
