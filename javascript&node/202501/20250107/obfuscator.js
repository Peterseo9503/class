const Terser = require("terser");

const code = `
  function greet(name) {
    console.log("Hello, " + name);
  }
  greet("World");
`;

const result = Terser.minify(code, {
  mangle: {
    toplevel: true, // 최상위 변수 및 함수 이름도 난독화
  },
  compress: {
    passes: 3, // 압축 반복 횟수
  },
});

console.log(result.code);