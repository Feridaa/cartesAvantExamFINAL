import { options } from "./app.js";
import Card from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

export class Deck {
  #cards = [];

  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }

  createFullDeck = () => {
    this.values.forEach((elementV) => {
      this.suits.forEach((elementS) => {
        this.#cards.push(new Card(elementV, elementS));
      });
    });
  };

  shuffle = () => {
    // _.shuffle([1, 2, 3, 4]);
    this.#cards = shuffle(this.#cards);
  };

  displayCards = () => {
    this.#cards.forEach((element) => {
      element.display();
    });
  };
}
