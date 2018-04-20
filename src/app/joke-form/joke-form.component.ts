import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Joke } from '../joke/joke.component';
@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
  /*encapsulation: ViewEncapsulation.Emulated,
    // .Native Goes back to default HTML styles, use only styles for this element
    // Isolated from global
    // .None takes styles to all cards without encapsulation
  */
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  ngOnInit() {}
}
