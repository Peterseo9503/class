"use strict";
class Carno {
    constructor(id) {
        this.id = id;
        this.xyValues = [
            [false, false],
            [false, false]
        ];
    }
    event() {
        const containerElem = document.getElementById("container");
        containerElem.addEventListener('click', (event) => {
            const regExp = /Box/;
            const targetElem = event.target;
            if (regExp.test(targetElem.id)) {
                // console.log(targetElem)
                // console.log(targetElem.id);
                targetElem.classList.toggle("clicked");
                console.log(targetElem.dataset);
                this.setValue();
            }
        });
    }
    setValue() {
        
    }
    getValue() {
        return [];
    }
    run() {
        this.event();
    }
}
const carno = new Carno("carno");
carno.run();
