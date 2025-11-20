//your JS code here. If required.
function helloPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1 second
  });
}

helloPromise().then((message) => {
  document.getElementById("output").innerText = message;
});
