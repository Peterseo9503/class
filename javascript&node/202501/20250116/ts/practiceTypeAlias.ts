interface Person{
    name: string,
    age?: number
}

type PersonType = {
    name: string,
    age?: number
}


const person3 = {} as Person;
const person2 = {} as PersonType;

type Str = "LEE";
type Union = string | null;
type Name = 'Lee' | 'Kim';
const myName = "Lee" as Name;

class GQueue<T>{
    protected data: Array<T>= [];
    push(item: T){
        this.data.push(item);;
    }
    pop(): T | undefined{
        return this.data.shift();
    }
}

const NumberQu = new GQueue<number>();
