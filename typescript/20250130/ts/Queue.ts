class Queue<T> {
    protected data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined{
        return this.data.shift();
    }
}

const numberQueue = new Queue<number>();
const myQueue = new Queue<{name: string, age: number}>();


