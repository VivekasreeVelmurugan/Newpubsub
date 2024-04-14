const IoRedis = require("ioredis");
const subscriber = new IoRedis();
subscriber.subscribe("messages");
const subscriberName = "Subscriber 1";
subscriber.on("message", (channel, message) => {
    const currentTime = new Date().toLocaleString();
    console.log(`${subscriberName} received a message from ${channel} at ${currentTime}: ${message}`);
});
 