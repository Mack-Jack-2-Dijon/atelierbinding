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
  element = false;
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  result1:boolean = true;

  sub(): void {
    this.result1 = !this.result1;
  }
  add(): void {
    this.result = this.age + 1;
  }
  
    
    
    
  
    
  
  }

  

