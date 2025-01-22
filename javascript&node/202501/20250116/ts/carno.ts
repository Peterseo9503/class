interface XYValues {
    xyValues: [
        [boolean, boolean],
        [boolean, boolean]
    ];
}

class Carno implements XYValues{
    public xyValues: [
        [boolean, boolean],
        [boolean, boolean]
    ]
    constructor(public id: string) {
        this.xyValues=[
            [false, false],
            [false, false]
        ]
     }

    event(): void {
        const containerElem = document.getElementById("container") as HTMLDivElement;
        containerElem.addEventListener('click', (event) => {
            const regExp: RegExp = /Box/;
            const targetElem = event.target as HTMLElement;
            if (regExp.test(targetElem.id)) {
                // console.log(targetElem)
                // console.log(targetElem.id);
                targetElem.classList.toggle("clicked");
                console.log(targetElem.dataset);
                this.setValue()
            }
        })
    }
    setValue(): void {
        
    }
    getValue(): number[][] {
        return []
    }
    run(): void {
        this.event();
    }
}

const carno = new Carno("carno");
carno.run();