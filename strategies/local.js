import passport from "passport";
import { Strategy } from "passport-local";
import mockUsers from "../users.js";
import bcrypt from "bcrypt";
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const user = mockUsers.find((u) => u.id === id);
  if (!user) {
    return done(new Error("User not found"), false);
  }
  return done(null, user);
});

export default passport.use(
  new Strategy(async function (username, password, done) {
    try {
      const user = mockUsers.find((u) => u.username === username);
      if (!user || !await bcrypt.compare(password, user.password)) {
        return done(null, false, { message: "username or password incorrect" });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);
