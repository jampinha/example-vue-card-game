import type { LinkedList } from '@/misc/interfaces/IList'

export class Node<T> {
  next: Node<T> | null = null
  prev: Node<T> | null = null

  constructor(public data: T) {}
}

export class GameList<T> implements LinkedList<T> {
  public head: Node<T> | null = null
  public readonly first: Node<T> | null = null
  public last: Node<T> | null = null
  public length: number = 0

  constructor() {
    this.first = this.head
  }

  insert(item: T): void {
    const node = new Node(item)
    let iterator = this.head

    if (this.head === null) {
      this.head = node
      this.length++
    }

    else {
      while (iterator !== null && iterator.next !== null) {
        iterator = iterator.next
      }

      if (iterator && !iterator.next) {
        iterator.next = node
        node.prev = iterator
        this.last = node
        this.length++
      }
    }
  }

  search(item: T): T | null {
    let iterator = this.head

    while (iterator !== null) {
      if (iterator.data === item) {
        return iterator.data
      } else iterator = iterator.next
    }

    return null
  }

  remove(item: T): T | null {
    let iterator = this.head

    while (iterator !== null) {
      if (iterator.data === item) {
        iterator.prev = iterator.next
        const removed = iterator
        this.length--
        return removed.data
      }

      iterator = iterator.next
    }

    return null
  }

  filter(fn: (item: T) => boolean): T[] {
    const arr: T[] = []
    let current = this.head

    while (current !== null) {
      if (fn(current.data)) arr.push(current.data)
      current = current.next
    }

    return arr
  }

  erase(): void {
    if (this.head === null) return
  }

  list(): T[] {
    let iterator = this.head
    const list: T[] = []

    while(iterator !== null) {
      list.push(iterator.data)
      iterator = iterator.next
    }

    return list
  }
}

// const GameList = (): Card[] => []

// REFERENCES
// https://www.mycompiler.io/view/5HnpuPu2yfI
// https://dev.to/glebirovich/typescript-data-structures-linked-list-3o8i
