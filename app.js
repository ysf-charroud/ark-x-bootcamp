import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/search", (req, res) => {
  const { max_price, min_price } = req.query;
  let filteredProducts = products.filter((product) => {
    if (max_price && product.price > parseFloat(max_price)) return false;
    if (min_price && product.price < parseFloat(min_price)) return false;
    return true;
  });
  res.json(filteredProducts);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price)
    return res.status(400).send("Name and price are required");

  const newProduct = {
    id: products.length + 1,
    name,
    price: parseFloat(price),
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");

  const { name, price } = req.body;
  if (!name || !price)
    return res.status(400).send("Name and price are required");

  product.name = name;
  product.price = parseFloat(price);

  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (productIndex === -1) return res.status(404).send("Product not found");

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct[0]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
