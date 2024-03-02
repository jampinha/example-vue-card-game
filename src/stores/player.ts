import { Deck } from '@/misc/classes/Deck'
import { Hand } from '@/misc/classes/Hand'
import { CardComposer } from '@/misc/classes/Card'
import { defineStore } from 'pinia'

interface PlayerState {
  deck: Deck
  hand: Hand
}

export const usePlayerStore = defineStore('player', {
  state: (): PlayerState => ({
    deck: new Deck(),
    hand: new Hand()
  }),
  actions: {
    deckGenerate() {
      const cards = CardComposer(30)
      this.deck = new Deck()
      cards.map((card) => this.deck.insert(card))
    },
    handInitialize() {
      this.hand = new Hand();
      this.pullCard()
      this.pullCard()
      this.pullCard()
    },
    pullCard() {
      if (this.deck.length === 0) return

      const pop = this.deck.pop()
      if (pop) this.hand.insert(pop);
    }
  },
  getters: {
    deckCards(state) {
      return state.deck.length
    }
  }
})
