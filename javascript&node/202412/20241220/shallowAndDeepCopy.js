const myZard = {
    name: "Zard",
    age: 21,
    job: 'singer',
    album: [
        "A1",
        "A2",
        "A3"
    ],
    hitSong: {
        title: "HOHO",
        song: "HAHA"
    },
    sing: () => {
        document.write('LALALALALALL');
    }
}

console.log( typeof JSON.stringify(myZard));
console.log( JSON.stringify(myZard));

const deepCopy = JSON.parse(JSON.stringify(myZard));
console.log( typeof deepCopy )
console.log( deepCopy )

deepCopy['new'] = "hahaha I love LJM";

console.log(myZard);
console.log(deepCopy);

const {hitSong: { song }} = myZard;
console.log( song );