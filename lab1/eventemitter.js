// import { EventEmitter } from "node:events";

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

task.emit("greet", "Abhinav");

task.emit("greet", "Abhishek");
task.off("greet", working);
task.emit("greet", "Anubhav");
task.emit("exit", "Manager");
// event-emitter.js
export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }

  once(event, listener) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      listener(...args);
    };
    this.on(event, wrapper);
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((l) => l !== listener);
    }
  }
}

// login("Abhinav");
// start();
// event-emitter.js
