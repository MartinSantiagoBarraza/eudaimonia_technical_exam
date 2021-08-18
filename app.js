const express = require("express");
const { Router } = require("express");
const router = Router();
const app = express();

// Define home page

app.get("/", (req, res) => {
  res.send("Hola!");
});

// Check if it is a natural number

const checkNaturalNumber = (req, res, next) => {
  if (number > 0) {
    return console.log(
      res.status(200).send("It's a natural number, you can continue")
    );
  }
  next();
};

// Check if it's a prime number

const checkPrimeNumber = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return res.send("It's not a prime number");
    } else {
      return number > 1;
    }
  }
};

// Invoke functions

router.get("/", checkNaturalNumber, checkPrimeNumber);

// Initialize server

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
