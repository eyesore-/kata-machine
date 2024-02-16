type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node: Node<T> = { value: item };
        if (this.length === 0) {
            this.head = node;
        } else {
            node.prev = this.head;
            this.head = node;
        }

        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) return;

        const head = this.head;
        this.head = head.prev;

        this.length--;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
