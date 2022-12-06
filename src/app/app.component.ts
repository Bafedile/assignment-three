import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-three';
  display = false;
  buttonClicks = [1];
  value = 0;
  setDisplay() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
 
    this.buttonClicks.push(this.value);
  }

  getColor(){
   return this.value >=5?'blue':'white';
  }


}
