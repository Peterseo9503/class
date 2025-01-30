class Buffer<T> {
    public storage: Array<T>
    constructor(public id: string, ) {
        this.storage = [];
    }
    push(item: T): void {
        this.storage.push(item);
    }
    shift(): T | undefined{ return this.storage.shift() }
    setValue( selector: string, item: T ){ 
        for(let i=0; i<this.storage.length; i++){
            // if( this.storage[i].id === selector){
                // this.storage[i].value = item;
            // }
        }
        
     }
    getValue(){}
}

const myLinkedValue: string[] = ["zard", "cdr", "love"];

const myBuffer = new Buffer("myBuffer");

myLinkedValue.forEach( (v,i,a)=>{
    let tempList = new LinkedList(v);
    tempList.value= v;
    myBuffer.push( tempList );
} )


class LinkedList<T> {
    public value: any;
    public next: LinkedList<T> | null;
    // public id: string;
    constructor(public id: string) {
        this.value = null;
        this.next = null;
    }

}