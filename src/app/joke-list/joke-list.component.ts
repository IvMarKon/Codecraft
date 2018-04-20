import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ElementRef,
  AfterContentInit,
  ContentChild,
  ContentChildren
} from '@angular/core';

import {
  JokeComponent
} from '../joke/joke.component';

import {
  Joke
} from '../joke/joke.component';
import {
  log
} from 'util';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {

  @ViewChildren(JokeComponent) jokeViewChild: JokeComponent; // how to find child component
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList < JokeComponent > ;
  @ViewChildren('header') headerEl: QueryList<ElementRef>;

  @ContentChildren(JokeComponent) jokeContentChild:  QueryList < JokeComponent > ;

  jokes: Joke[] = [];

  constructor() {
    this.jokes.push(new Joke('Setup 1', 'Punch 1'));
    this.jokes.push(new Joke('Setup 2', 'Punch 2'));
    this.jokes.push(new Joke('Setup 3', 'Punch 3'));
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  createJoke(joke) {
    this.jokes.unshift(joke);
  }

  addJoke() {
    this.jokes.unshift(new Joke('Default Joke', 'Default Punch'));
  }

  deleteJoke() {
    this.jokes.shift();
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is`, this.jokeViewChild);
    console.log(this.jokeViewChildren.toArray());
    this.headerEl.first.nativeElement.textContent = 'Best Joke Machine';
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is`, this.jokeContentChild.toArray());
  }
}
