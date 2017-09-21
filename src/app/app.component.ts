import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{taxi.name}} details!</h2>
    <div><label>id: </label>{{taxi.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="taxi.name" placeholder="name">
    </div>
    `
})

// const TAXIS: Taxi[] = [
//   {id: 11, name: 'Khanyisa\'s taxi'},
//   {id: 12, name: 'Russel\'s taxi'},
//   {id: 13, name: 'Gershwin\'s taxi'},
//   {id: 14, name: 'Jayjay\'s taxi'},
//   {id: 15, name: 'Wanga\'s taxi'},
//   {id: 16, name: 'Wessley\'s taxi'},
//   {id: 17, name: 'Ryan\'s taxi'},
//   {id: 18, name: 'Elzanne\'s taxi'},
//   {id: 19, name: 'Matthew\'s taxi'},
//   {id: 20, name: 'Brendo\'s taxi'},
//   {id: 21, name: 'Cammiel\'s taxi'},
//   {id: 22, name: 'Kate\'s taxi'},
// ];

export class AppComponent {
  title = 'Welcome to J\'Uber';
  taxi: Taxi = {id: 1 , name: 'Matabisi\'s taxi'};
  taxis = TAXIS;
}

export class Taxi {
  id: number;
  name: string;
}
