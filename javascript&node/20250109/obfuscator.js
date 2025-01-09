const UglifyJS = require("uglify-js");

const code = `
  function greet(name) {
    console.log("Hello, " + name);
  }
  greet("World");
`;

const result = UglifyJS.minify(code, {
  mangle: {
    toplevel: true,
  },
});

console.log(result.code);