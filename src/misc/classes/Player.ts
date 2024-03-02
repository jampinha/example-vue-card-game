import { Card } from './Card'

export class BattlePlayer {
  private hand: unknown
  private deck: unknown

  constructor() {}

  pullCard(): Card {
    return new Card('New card', 0, 0)
  }
}
