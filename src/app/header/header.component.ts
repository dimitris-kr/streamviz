import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuCollapsed: boolean = false;

  private screenWidth: any;

  yPosition = 0;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.menuCollapsed = this.screenWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.menuCollapsed = this.screenWidth < 768;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY === 0){
      this.yPosition = 0;
    } else {
      this.yPosition = 1;
    }
  }
}
