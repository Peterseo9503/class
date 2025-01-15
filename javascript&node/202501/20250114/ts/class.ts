// class Person{
//     name: string;

//     constructor(name: string){
//         this.name = name;
//     }

//     walk(): void{
//         console.log(`${this.name} is walking`);
//     }
// }
// const person: Person = new Person("Seo");
// person.walk();

class Person{
    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string){
        this.x = x;
        this.y = y;
        this.z = z;
    }

}

class Seo extends Person{
    constructor(x :string,y: string,z: string){
        super(x,y,z)
        console.log( this.x );
        console.log( this.y );
        // console.log( this.z );
    }
}
const seo = new Seo("x","y","z");

class Person2{
    constructor(public x: string){}
}
const person = new Person2("x");
console.log(person.x);

class Test{
    constructor( private x: string ){}
}
const test = new Test("test");
// test.x;

class Foo{
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;
    constructor(MSG: string){
        this.MSG = "initial";
    }

    log(){
        // this.MAX_LEN= 10;
    }
}

class Foo3{
    static instanceCounter = 0;
    constructor(){
        Foo3.instanceCounter++;
    }
}
var foo1 = new Foo3();
var foo2 = new Foo3();
var foo3 = new Foo3();
console.log(Foo3.instanceCounter);


abstract class Animal{

    abstract makeSound(): void;

    move(): void{
        console.log( 'roaming the earth...' );
    }
}

class Dog extends Animal{
    public name: string;
    constructor(name: string){
        super();
        this.name = name;
    }
    makeSound():void {
        console.log("Vow~~");
    }
}
const dog = new Dog("General");
dog.makeSound();
dog.name;
dog.move();