import { ISingleLinkedList, ISingleLinkedListItem } from '../interfaces'
import { SingleLinkedList } from '../single-linked'

describe('single linked List', () => {
	it('should create', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)

		expect(linkedList).toMatchSnapshot()
	})

	it('should create from array', () => {
		const linkedList = SingleLinkedList.of(1, 2, 3, 4, 5)
		expect(linkedList).toMatchSnapshot()
	})

	it('should create empty', () => {
		const linkedList = SingleLinkedList.of()

		expect(linkedList).toMatchSnapshot()
	})

	it('should push one item', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		const pushed = linkedList.push(2)
		expect(pushed).toMatchSnapshot()
		expect(linkedList).toMatchSnapshot()
	})

	it('should push many items', () => {
		const linkedList = SingleLinkedList.of()
		linkedList.push(1)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)

		expect(linkedList).toMatchSnapshot()
	})

	it('should push many items with seed', () => {
		const linkedList = SingleLinkedList.of(1)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)

		expect(linkedList).toMatchSnapshot()
	})

	it('should push after item', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		const item = linkedList.push(2)
		linkedList.push(4)
		linkedList.pushAfter(item, 3)
		expect(linkedList).toMatchSnapshot()
	})

	it('should push after many items', () => {
		const linkedList = SingleLinkedList.of()
		let item = linkedList.push(1)
		item = linkedList.push(2)
		item = linkedList.pushAfter(item, 3)
		item = linkedList.pushAfter(item, 4)
		item = linkedList.pushAfter(item, 5)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove item in the middle', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		const toRemove = linkedList.tail()
		linkedList.push(4)
		linkedList.push(5)

		linkedList.remove(toRemove)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove head', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		const toRemove = linkedList.head()

		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove tail', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		const toRemove = linkedList.tail()

		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove all items', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		let toRemove = linkedList.tail()
		linkedList.remove(toRemove!)
		toRemove = linkedList.tail()
		linkedList.remove(toRemove!)
		toRemove = linkedList.tail()
		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

	it('should pop item', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		const popped = linkedList.pop()
		expect(popped).toMatchSnapshot()
		expect(linkedList).toMatchSnapshot()
	})

	it('should pop all items', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		let popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		expect(popped).toMatchSnapshot()
		expect(linkedList).toMatchSnapshot()
	})

	it('should over pop', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		let popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		expect(popped).toMatchSnapshot()
		expect(linkedList).toMatchSnapshot()
	})

	it('should return true for head', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)

		expect(linkedList.hasHead()).toEqual(true)
	})

	it('should return false for head', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.pop()

		expect(linkedList.hasHead()).toEqual(false)
	})
})
