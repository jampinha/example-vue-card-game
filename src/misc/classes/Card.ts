import type { CardCategory, CardType } from '@/misc/types/common'

export abstract class AbstractCard {
  constructor(
    protected code: number,
    protected name: string,
    protected info: string,
    protected cost: number,
    protected type: CardType,
    protected category: CardCategory,
  ) {}
}

export class Card {
  constructor(
    public readonly name: string,
    public readonly attack: number,
    public readonly life: number,
  ) {
    if (!name.length) throw TypeError('name must have to be a non empty string')
    if (life < 0 || attack < 0) throw TypeError('life and attack must be a positive integer')

    this.name = name
    this.attack = attack
    this.life = life
  }
}

export const CardFactory = (quantity: number) => {
  const names = ['Murloc', 'Morto-Vivo', 'Fera', 'Mecanoide', 'Dragão', 'Elemental', 'Demônio']

  const cards = []

  for (let i = 0; i < quantity; i++) {
    const index = Math.floor(Math.random() * names.length)
    const name = names[index]
    const attack = Math.floor(Math.random() * 15)
    const health = Math.floor(Math.random() * 15)
    const card = new Card(name, attack, health)
    cards.push(card)
  }

  return cards
}

export const CardComposer = (quantity: number) => {
  const names = ['Murloc', 'Morto-Vivo', 'Fera', 'Mecanoide', 'Dragão', 'Elemental', 'Demônio']

  const cards = []

  for (let i = 0; i < quantity; i++) {
    const index = Math.floor(Math.random() * names.length)
    const name = names[index]
    const attack = Math.floor(Math.random() * 15)
    const health = Math.floor(Math.random() * 15)
    const card = new Card(name, attack, health)
    cards.push(card)
  }

  return cards
}