import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  citation: string = '';
  age!:number;
  result!:number;

  add(): void {
    this.result = this.age + 1;
  }
}
