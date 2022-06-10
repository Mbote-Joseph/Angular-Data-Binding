import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Data-Binding';
  course = 'Angular Course';
  imageUrl = '../assets/Logo.svg';
  count = 0;
  name = '';

  goBack(): void {
    this.count = this.count + 1;
    console.log(`Go Back Clicked ${this.count} times!`);
  }
}
