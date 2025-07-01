{
  // Variables and Functions
  let name = "Node.js";
  const version = 20;

  // Function declare
  function greet(user) {
    return `Hello, ${user}!`;
  }

  // Arrow function (ES6+)
  const add = (a, b) => a + b;

  console.log(greet("Developer"));
  console.log(add(5, 3));
}

{
  //   Objects and Arrays
  const user = {
    name: "Alice",
    age: 25,
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    },
  };

  // array
  const color = ["red", "green", "blue"];

  // array methods (es6+)
  color.forEach((color) => console.log(color));
  const lengths = color.map((color) => color.length);
  console.log(lengths);
}

{
  // Asynchronous JavaScript

  // 1. Callbacks (tradisional)
  function fetchData(callback) {
    setTimeout(() => {
      callback("Data received!");
    }, 1000);
  }

  // 2. Promises (ES6+)
  const fetchDataPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 1000);
    });
  };

  // Async/Await (ES8+)
  async function getData() {
    const result = await fetchDataPromise();
    console.log(result);
  }

  // Call using async/await
  getData();

  // Call using callback
  fetchData((data) => {
    console.log(data);
  });
}

{
  // Destructuring & Template Literals (ES6+)

  const user = {
    name: "World!",
  };
  const { name } = user;
  console.log(`Hello, ${name}`);
}
