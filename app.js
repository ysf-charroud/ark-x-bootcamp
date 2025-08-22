import express from "express";
import dotenv from "dotenv";
import { body, matchedData, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    email: "johnDoe@mail.com",
    password: "password123",
    name: "john doe",
  },
];

const loginValidation = [
  body("email").isEmail().withMessage("Invalid email format").normalizeEmail().escape(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long").escape(),
];

app.get("/login", loginValidation, (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  const { email, password } = matchedData(req);
  users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: "1h" });
  res.json({ token });

});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

body.innerHtml = "done";
