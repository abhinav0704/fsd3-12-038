import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} logged in`);
};

const start = () => {
  console.log("System starts");
};

const working = (name) => {
  console.log(`${name} add items to cart`);
};
const checkout = (name) => {
  console.log(`${name} logged out`);
};
// const exit =()=>{  // for nameless fn ()=>{}
//     console.log("System shut down");
// }

const task = new EventEmitter(); //event emiiter ka obj banaya hai naam rkha task
task.once("greet", start);
task.on("greet", login);

task.on("greet", working);
task.on("greet", checkout);
task.once("exit", () => {
  console.log("System shutting down");
});

task.emit("greet", "Aakash gupta");

task.emit("greet", "Aarav");
task.off("greet", working);
task.emit("greet", "Aadi");
task.emit("exit", "Manager");

// login("Aakash Gupta");
// start();
