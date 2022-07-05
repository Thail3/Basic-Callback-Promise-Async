//? promise จะมี pamarameter resolve และ reject ถ้าทำสำเร็จจะส่ง resolve กลับมา ถ้าทำไม่สำเร็จจะส่ง reject กลับมา

const onSuccess = (resolved) => {
  console.log(resolved);
};

const onFail = (reject) => {
  console.log(reject);
};

// new Promise((resolve, reject) => {
//   console.log("Start promise");
//   setTimeout(() => {
//     reject("Error");
//   }, 500);
//   resolve("End promise");
// })
//   .then(onSuccess)
//   .catch(onFail);

//? ---------------------------------

function shower() {
  console.log("Start shower");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("End shower");
      resolve("End shower");
    }, 500);
  });
}
function brush() {
  console.log("Start brush");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("End brush");
      resolve("End brush");
    }, 200);
  });
}
function eating() {
  console.log("Start eating");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("End eating");
      resolve("End eating");
    }, 700);
  });
}
function getDress() {
  return new Promise((resolve, reject) => {
    console.log("Start getting dress");
    setTimeout(() => {
      //   console.log("Finish getting dress");
      resolve("Finish getting dress");
    }, 300);
  });
}

console.log("wake up");
// Promise.all([shower(), brush(), eating()])
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch(onFail);

// const promises = [shower(), brush()];
// Promise.all(promises)
//   .then(function () {
//     return eating();
//   })
//   .then(function () {
//     return getDress();
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return "All done. I am ready to go to work";
//   })
//   .catch(onFail);

// shower()
//   .then(() => {
//     return brush();
//   })
//   .then(() => {
//     return eating();
//   })
//   .catch(onFail);

//? ---------------------------------

// new Promise((resolve, reject) => {
//   resolve(10);
// })
//   .then((a) => {
//     console.log(`a = ${a}`);
//     return a + 2;
//   })
//   .then((b) => {
//     console.log(`b = ${b}`);
//     return b * 3;
//   })
//   .then((c) => {
//     console.log(`c = ${c}`);
//     return (c += 5);
//   })
//   .then((d) => {
//     console.log(`d = ${d}`);
//   });
