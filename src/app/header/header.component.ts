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

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.menuCollapsed = this.screenWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.menuCollapsed = this.screenWidth < 768;
  }
}
