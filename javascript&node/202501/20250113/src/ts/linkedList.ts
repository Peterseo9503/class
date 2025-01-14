class DoubleLinkedList{
    id: string;
    _value: any | null;
    _pLink: DoubleLinkedList | null;
    _nLink: DoubleLinkedList | null;
    
    constructor( id: string,value: any | null ){
        this.id = id;
        this._value = value;
        this._pLink = null;
        this._nLink = null;
    }
    get pLink(){ return this._pLink; }
    set pLink(pLinkValue){ this._pLink = pLinkValue };

    get nLink(){ return this._nLink; }
    set nLink(nLinkValue){ this._nLink = nLinkValue }

    get value(){  return this._value}
}


// class ControlDoubleLinkedList{

//     id: string;
//     constructor(id){
//         this.id =id;
//     }

// }


// const dLL1 = new DoubleLinkedList("dLL1", "sdh");
// const dLL2 = new DoubleLinkedList("dLL2", "ljm");
// const dLL3 = new DoubleLinkedList("dLL3", "sws");

// dLL1.nLink = dLL2;
// dLL2.pLink = dLL1;
// dLL2.nLink = dLL3;
// dLL3.pLink = dLL2;

// console.log(dLL1.nLink.nLink.pLink.value);

