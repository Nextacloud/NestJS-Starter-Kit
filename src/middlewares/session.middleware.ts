import * as redis from 'redis';
import * as expressSession from 'express-session';
import * as ConnectRedis from 'connect-redis';

export function session() {
  const RedisStore = ConnectRedis(expressSession);
  const redisClient = redis.createClient();

  return expressSession({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.APP_KEY,
    resave: false,
    cookie: { httpOnly: true },
    saveUninitialized: true,
  });
}

export function sessionNotFound(req, res, next) {
  if (!req.session) {
    return next(new Error('Session storage not found!'));
  }
  next();
}
