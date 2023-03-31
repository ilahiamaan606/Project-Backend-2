const redis = require("redis")
require("dotenv").config()

const redisClient = redis.createClient({
   host: process.env.REDIS_HOSTNAME,
   port: process.env.REDIS_PORT,
   password: process.env.REDIS_PASSWORD
});

redisClient.on("connect", async () => {

   console.log("connected to redis");

});

redisClient.on("error", function (err) {
   console.log(err.message)

});

redisClient.connect();

module.exports = {
   redisClient
}

