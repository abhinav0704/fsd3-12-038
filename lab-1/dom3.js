import { EventEmitter } from "events";
const button = new EventEmitter();
button.on("click",(uname)=>{
    console.log(`button clicked by ${uname}`);

});

button.emit("click","Nitin")
button.emit("click","Prince")
button.emit("click","Radha")
button.emit("click")