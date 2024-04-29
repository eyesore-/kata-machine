type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: Node<T> = { value: item };

        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        ++this.length;
    }
    deque(): T | undefined {
        if (!this.head) return;

        const head = this.head;
        this.head = this.head.next;
        --this.length;
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
