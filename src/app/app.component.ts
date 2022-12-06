import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-three';
  display = false;
  buttonClicks = [];

  setDisplay() {
    if (this.display) { this.display = false; } else { this.display = true; }
    // this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
  }



}
