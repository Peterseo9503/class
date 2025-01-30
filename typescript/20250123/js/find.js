const findArray= ["a", "b", "c"];
//value로 오브젝트 키 받아오기 


const obj = {
    name: "SEO DONG HYUN",
    age: 15
}

console.log(Object.keys( obj ).find( v=> obj[v]==15 ));

// console.log(findArray.find(value => value == "b"));
