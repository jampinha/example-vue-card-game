import type { GameCard } from '../interfaces/ICard'
import type { Card } from './Card'
import { List } from './List'

export class CardList extends List<Card> {
  private limit: number | null = null

  constructor(limit?: number) {
    super()

    if (limit) {
      if (limit < 0) throw TypeError('limit must be a positive integer')
      this.limit = limit
    }
  }

  isFull(): boolean {
    return this.length() === this.limit
  }

  toCards(): GameCard[] {
    if (!this.head) return []

    const arr: GameCard[] = []
    arr.push(this.head.data.print())
    let current = this.head.next

    while (current) {
      arr.push(current.data.print())
      current = current.next
    }

    return arr
  }
}
