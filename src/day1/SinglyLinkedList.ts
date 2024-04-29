type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;

    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const head: Node<T> = { value: item, next: this.head };
        if (!this.tail) {
            this.head = this.tail = head;
        } else {
            this.head = head;
        }
        ++this.length;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const node: Node<T> = { value: item };
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        ++this.length;
    }
    remove(item: T): T | undefined {
        if (!this.head) return;
        if (this.head.value === item) {
            const val = this.head.value;
            this.head = this.head.next;
            --this.length;
            if (!this.length) this.tail = undefined;
            return val;
        }

        let curr = this.head.next;
        while (curr?.next !== item) {
            if (!curr?.next) return;
            curr = curr.next;
        }

        const val = curr.next!.value;
        curr.next = curr.next?.next;
        --this.length;

        return val;
    }
    get(idx: number): T | undefined {
        let i = 0;
        let curr = this.head;

        if (!curr) return;

        while (i < idx) {
            curr = curr.next;
            if (!curr) return;
            ++i;
        }

        return curr.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx === 0) {
            const val = this.head?.value;
            this.head = this.head?.next;
            --this.length;
            if (this.length === 0) this.tail = undefined;
            return val;
        }

        let i = 1;
        let curr = this.head;

        if (!curr) return;

        while (i < idx) {
            curr = curr.next;
            if (!curr) return;
            ++i;
        }

        const val = curr.next?.value;
        curr.next = curr.next?.next;
        --this.length;
        return val;
    }
}
