const redis = require("redis")
require("dotenv").config()


const redisClient = redis.createClient({
    password: "Oh1WqmxwXR8QDotwAn8xvbDqNykmKJma",
    socket: {
        host: "redis-18021.c212.ap-south-1-1.ec2.cloud.redislabs.com",
        port: 18021
    }
});



// const redisClient = redis.createClient({
//    host: process.env.REDIS_HOSTNAME,
//    port: process.env.REDIS_PORT,
//    password: process.env.REDIS_PASSWORD
// });

redisClient.on("connect", async () => {

   console.log("connected to redis");

});

redisClient.on("error", function (err) {
   console.log(err.message)

});

redisClient.connect();


//connection check
// async function abc(){
//    await redisClient.set('key', 'value');

//   const value= await redisClient.get('key');

//   console.log(value)
// }


module.exports = {
   redisClient
}

