import { Component, OnInit, ViewChild } from '@angular/core';

import { JokeComponent } from '../joke/joke.component';

import { Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent implements OnInit {

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent; // how to find child component

  jokes: Joke[] = [];

  constructor() {
    this.jokes.push(new Joke('Setup 1', 'Punch 1'));
    this.jokes.push(new Joke('Setup 2', 'Punch 2'));
    this.jokes.push(new Joke('Setup 3', 'Punch 3'));
    console.log(this);
  }

  createJoke(joke) {
    this.jokes.unshift(joke);
  }

  addJoke() {
    this.jokes.unshift(new Joke('Default Joke', 'Default Punch'));
  }

  deleteJoke(){
    this.jokes.shift();
  }

  ngOnInit() {
  }
}
