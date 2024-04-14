const IoRedis = require("ioredis");
const publisher = new IoRedis();
let i = 1; 
setInterval(() => {
    const currentTime = new Date().toISOString(); 
    publisher.publish("messages", `Hi, I am message ${i++}. Current time: ${currentTime}`);
    console.log({ message: "Message published successfully" });
}, 2000);