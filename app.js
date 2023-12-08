// function foo(callback) {
//   setTimeout(() => {
//     callback("hello");
//   }, 2000);
// }

// foo((text) => {
//   console.log(text);
// });

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   print("hello, guys");
// });

// function print(text) {
//   console.log(text);
// }

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("success");
//     } else {
//       reject("fail");
//     }
//   }, 5000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("next code");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Error: fetch failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function printData() {
  console.log(await fetchData());
}

printData();

// setTimeout(() => {
//   console.log("hello");
// }, 1000);
