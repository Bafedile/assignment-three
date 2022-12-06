import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  value = 0;
  getValue() {
    this.value +=1;
    return this.value ;
  }
  getColor() {
    this.getValue();
    return this.value >= 5 ? 'blue' : 'white';

  }
}
