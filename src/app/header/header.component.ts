import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showInfo: boolean = false;

  onInfo() {
    this.showInfo = true;
  }

  onInfoLeave() {
    this.showInfo = false;
  }
}
