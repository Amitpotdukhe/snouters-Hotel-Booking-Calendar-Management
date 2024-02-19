import redis from 'redis'

let client = redis.createClient({
    socket: {
        port: 6379,
        host: "host.docker.internal",
    }
});
//host.docker.internal
export default client;
