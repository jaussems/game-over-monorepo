import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, SideMenuComponent],
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menuOpen = signal(true)

  openSideMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

}
