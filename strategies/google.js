import passport from "passport";
import { Strategy } from "passport-google-oauth2";
import mockUsers from "../users.js";

export default passport.use(
  new Strategy(
    {
      clientID: "<YOUR_GOOGLE_CLIENT_ID>",
      clientSecret: "<YOUR_GOOGLE_CLIENT_SECRET>",
      callbackURL: "http://localhost:3000/api/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      mockUsers.some((u) => u.id === profile.id) ||
        mockUsers.push({
          id: profile.id,
          displayName: profile.displayName,
          email: profile.email,
        });
      return done(null, profile);
    }
  )
);
