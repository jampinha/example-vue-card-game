export interface IList<T> {
  compare(x: T, y: T): boolean

  insert(item: T, start?: boolean): void
  remove(item: T): boolean
  filter(f: (item: T) => boolean): Array<T>
  count(f: (item: T) => boolean): number
  length(): number

  isEmpty(): boolean

  toArray(): T[]
}

export interface LinkedList<T> {
  insert(item: T): void
  search(item: T): T | null
  remove(item: T): T | null
  filter(fn: (item: T) => boolean): T[]
  list(): T[]
  erase(): void
}