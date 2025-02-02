import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  clickedHeader  = output()

  openGenresSideMenu() {
    this.clickedHeader.emit()
  }

}
