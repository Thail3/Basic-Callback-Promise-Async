function shower() {
  console.log("Start shower");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      //   console.log("End shower");
      resolve("End shower");
    }, 500);
  });
}
function brush() {
  console.log("Start brush");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      //   console.log("End brush");
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
      console.log("Finish getting dress");
      resolve("Finish getting dress");
    }, 300);
  });
}

//? throw คือการบอกว่าตอนนี้โค้ดนี้มีปัญหา เพื่อบอกให้เราทราบ
const morning = async () => {
  try {
    const showerResult = await shower();
    console.log(showerResult);
    const brushResult = await brush();
    console.log(brushResult);
    //   throw new Error("Something wrong");
    const eatBreakfastAndGetDress = await Promise.all([eating(), getDress()]);
    console.log(eatBreakfastAndGetDress);
  } catch (err) {
    console.log("got error", err);
  }
};

morning();
