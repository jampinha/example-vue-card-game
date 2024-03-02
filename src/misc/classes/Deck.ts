import type { Card } from "./Card";
import { GameList } from "./List";

export class Deck extends GameList<Card> {

  pop(): Card | null {
    if (this.head === null) return null

    const item = this.head.data;
    this.head = this.head.next
    this.length--

    return item;  
  }
}