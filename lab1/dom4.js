import { EventEmitter } from 'events';
const form = new EventEmitter();
form.on("submit",(user,password)=>{
    console.log('form submitted');
    console.log(`user name: ${user}`);
    console.log(`user submitted: ${password}`);
});
form.emit("submit","abhi.com","987654321");