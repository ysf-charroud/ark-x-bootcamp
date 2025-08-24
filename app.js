import express from "express";
import passport from "passport";
import session from "express-session";
import "./strategies/local.js";
import "./strategies/google.js";
import AuthMiddleware from "./authMiddleware.js";
const app = express();

app.use(express.json());
app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 60000, // 1 minute
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/login/google", (req, res) => {
  res.send("<a href='/auth/google'>Login with Google</a>");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/google",
    successRedirect: "/protected",
  })
);

app.get("/login", passport.authenticate("local"), (req, res) => {
  res.send("Login successful");
});

app.get("/protected", AuthMiddleware, (req, res) => {
  res.send(`This is a protected route ${req.user.displayName} `);
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Logout failed");
    }
    res.send("Logout successful");
  });
});
app.listen(3000, () => {
  console.log("server is running on port " + 3000);
});
