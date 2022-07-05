// function shower() {
//   console.log("Start shower");
//   setTimeout(function () {
//     console.log("End shower");
//   }, 500);
// }
// function brush() {
//   console.log("Start brush");
//   setTimeout(function () {
//     console.log("End brush");
//   }, 200);
// }
// function eating() {
//   console.log("Start eating");
//   setTimeout(function () {
//     console.log("End eating");
//   }, 700);
// }

// console.log("wake up");
// shower();
// brush();
// eating();

//? Callback function คือ เมื่อเกิดเหตุการณ์ขึ้นซักอย่างนึง ให้ทำสิ่งนั้นให้หน่อย
// function shower(callback) {
//   console.log("Start shower");
//   setTimeout(function () {
//     console.log("End shower");
//     if (callback) callback();
//   }, 500);
// }
// function brush(callback) {
//   console.log("Start brush");
//   setTimeout(function () {
//     console.log("End brush");
//     if (callback) callback();
//   }, 200);
// }
// function eating(callback) {
//   console.log("Start eating");
//   setTimeout(function () {
//     console.log("End eating");
//     if (callback) callback();
//   }, 700);
// }

// console.log("wake up");
// // shower(() => brush(eating));
// shower(() => brush(() => eating())); // callback hell
