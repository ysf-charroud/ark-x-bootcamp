import express from "express";
import users from "./users.js";
import session from "express-session";
import bcrypt from "bcrypt";
const app = express();

app.use(express.json());
app.use(
  session({
    secret: "my secret key",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2, // 2 days
    },
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.send("hello world");
});

app.get("/register", (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password)
    return res
      .status(403)
      .json({ message: "username and password are required" });
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({
    message: "user created successfuly",
    newUser: { username },
  });
});

app.get("/login", (req, res) => {
  const { username, password } = req.body || {};
  if (!username && !password)
    return res
      .status(403)
      .json({ message: "username and password are required" });

  const user = users.find(
    ({ username: u, password: p }) => u == username && p == password
  );
  if (!user)
    return res.status(403).json({ message: "username or password incorrect" });

  req.session.username = user.username;
  res.send("login successful");
});

app.listen(3000, () => {
  console.log("server is running on port " + 3000);
});
