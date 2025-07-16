// // Example: Basic Async/Await
// {
//   async function getData() {
//     console.log("Starting...");
//     const result = await someAsyncOperation();
//     console.log(`Result: ${result}`);

//     return result;
//   }

//   function someAsyncOperation() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Operation completed");
//       }, 1000);
//     });
//   }

//   getData().then((data) => console.log("Final data : ", data));
// }

// // Example: Reading a File with Async/Await
// {
//   const fs = require("fs").promises;

//   async function readFile() {
//     try {
//       const data = await fs.readFile("myfile.txt", "utf-8");
//       console.log(data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   readFile();
// }

// // Example: Error Handling with Async/Await
// {
//   // Simulate an API call that fails
//   async function fetchData() {
//     try {
//       // fetch the data
//       const response = await simulateHttpRequest();
//       console.log(response);

//       // check the data status
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }

//       // return the data to json response
//       const user = await response.json();
//       console.log(`User data: ${user}`);

//       // return the data
//       return user;
//     } catch (error) {
//       console.error(`Error in fetchUserData: ${error.message}`);
//       throw error;
//     }
//   }

//   // Simulate an HTTP request that fails
//   function simulateHttpRequest() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({
//           ok: false,
//           status: 404,
//           json: () => Promise.resolve({ error: "Not found" }),
//         });
//       }, 1000);
//     });
//   }

//   // Using catch with an async function
//   fetchData().catch((error) =>
//     console.log(`Caught outside of async function: ${error.message}`)
//   );
// }

// // Example: Sequential vs Parallel Operations
// {
//   function fetchData(id) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Data ${id}`);
//       }, 1000);
//     });
//   }

//   // Sequential operation - takes ~3 seconds
//   async function fetchSequential() {
//     console.time("sequential");
//     const data1 = await fetchData(1);
//     const data2 = await fetchData(2);
//     const data3 = await fetchData(3);
//     console.timeEnd("sequential");
//     return [data1, data2, data3];
//   }

//   // Parallel operation - takes ~1 second
//   async function fetchParallel() {
//     console.time("parallel");
//     const results = await Promise.all([
//       fetchData(1),
//       fetchData(2),
//       fetchData(3),
//     ]);
//     console.timeEnd("parallel");
//     return results;
//   }

//   // Demo
//   async function runDemo() {
//     console.log("Running Sequentially...");
//     const seqResults = await fetchSequential();
//     console.log(seqResults);

//     console.log("Running Parallel...");
//     const parResults = await fetchParallel();
//     console.log(parResults);
//   }

//   runDemo();
// }

// Async/Await vs Promises vs Callbacks
// {
//   // With Callbacks
//   function getUser(userId, callback) {
//     setTimeout(() => {
//       callback(null, { id: userId, name: "Alberth" });
//     }, 1000);
//   }

//   function getUserPosts(user, callback) {
//     setTimeout(() => {
//       callback(null, ["Post 1", "Post 2"]);
//     }, 1000);
//   }

//   getUser(1, (error, user) => {
//     if (error) {
//       console.error(error);
//       return;
//     }

//     console.log("User : ", user);

//     getUserPosts(user, (error, posts) => {
//       if (error) {
//         console.error(error);
//         return;
//       }

//       console.log(`Posts : ${posts}`);
//     });
//   });
// }

{
  // With Promises
  function getUserPromise(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, name: "Alberth" });
      }, 1000);
    });
  }

  function getUserPostsPromise(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Post1", "Post 2"]);
      }, 1000);
    });
  }

  // getUserPromise(1)
  //   .then((user) => {
  //     console.log("User: ", user);
  //     return getUserPostsPromise(user);
  //   })
  //   .then((posts) => {
  //     console.log("Post: ", posts);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // With Async/Await
  async function getUserAndPosts() {
    try {
      const user = await getUserPromise(1);
      console.log("User:", user);

      const posts = await getUserPostsPromise(user);
      console.log("Posts:", posts);
    } catch (error) {
      console.error(error);
    }
  }

  getUserAndPosts();
}
