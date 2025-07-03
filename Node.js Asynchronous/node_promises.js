// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation (e.g., API call, file read)
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Operation completed successfully");
    } else {
      reject(new Error("Operation failed"));
    }
  }, 1000);
});

// using the promise
myPromise
  .then((result) => console.log("Success : ", result))
  .catch((error) => console.error("Error: ", error.message));

{
  const fs = require("fs").promises;
  const promise1 = Promise.resolve("First result");
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Second Result"))
  );
  const promise3 = fs.readFile("myfile.txt", "utf-8"); // read local file instead of fetch

  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("Results : ", results);
    })
    .catch((error) => {
      console.error("Error in one of the promises: ", error);
    });
}

{
  // Promise Chaining
  function getUser(userId) {
    return new Promise((resolve, rejects) => {
      // simulating database call

      setTimeout(() => {
        resolve({
          userId: userId,
          name: "Alberth",
        });
      }, 1000);
    });
  }

  function getUserPosts(user) {
    return new Promise((resolve, rejects) => {
      // simulating api call
      setTimeout(() => {
        resolve(["Post 1", "Post 2", "Post 3"]);
      }, 1000);
    });
  }

  // change the promise
  getUser(123)
    .then((user) => {
      console.log("User:", user);
      //   return getUserPosts(user);
    })
    .then((posts) => {
      console.log("Post:", posts);
      return getUserPosts(posts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  async function main() {
    const user = await getUser(123);
    console.log("User:", user);

    const posts = await getUserPosts(user);
    console.log("Posts:", posts);
  }

  main();
}

{
  function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
      (response) => response.json()
    );
  }

  function getUserPosts(userId) {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ).then((response) => response.json());
  }

  getUser(1)
    .then((user) => {
      console.log("User:", user);
      // Now we have the user — so we can use user.id to get their posts
      return getUserPosts(user.id);
    })
    .then((posts) => {
      console.log("Posts:", posts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

{
  // Get ALL users
  function getAllUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    );
  }

  // Get ALL posts
  function getAllPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  }

  // Fetch both at the same time
  Promise.all([getAllUsers(), getAllPosts()])
    .then(([users, posts]) => {
      console.log("All Users:", users);
      console.log("All Posts:", posts);

      // For example, attach posts to each user
      const usersWithPosts = users.map((user) => {
        return {
          ...user,
          posts: posts.filter((post) => post.userId === user.id),
        };
      });

      console.log("Users with their posts:", usersWithPosts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
