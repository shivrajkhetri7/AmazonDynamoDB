const dotenv = require("dotenv");
const express = require("express");
const { validateData } = require("./middleware");
const bodyParser = require("body-parser");
const { insertDocument } = require("./controller");

dotenv.config();

const PORT = process.env.PORT;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/insert", async (req, res) => {
  const { roll_number } = req?.body;
  if (!roll_number) {
    throw Error("roll_number should be there ");
  }
  try {
    const response = await insertDocument(req?.body);
    res.json({ response });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
