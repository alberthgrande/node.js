const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {

    const randomNumber = Math.random();
    console.log("Random number:", randomNumber);

    const success = randomNumber > 0.5;

    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject(new Error("Operation failed!"));
    }

  }, 1000);
});

myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });