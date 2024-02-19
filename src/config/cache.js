import redis from 'redis'

let client = redis.createClient({
    socket: {
        port: 6379,
        host: "127.0.0.1",
    }
});
//host.docker.internal
export default client;
