import { Component } from '@angular/core';
import { Joke } from './joke/joke.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super app!';
  joke: Joke = new Joke('Content Joke', 'Content punch!!!');
}
