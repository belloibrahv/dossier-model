require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"), (req, res, next) => {
  next();
});

// List all models
app.get("/api/v1/list_models", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      models: ["Laptops", "Television", "Bags", "Books", "Animal"],
    },
  });
});

// Get indivvdual models
app.get("/api/v1/view_model/:id", (req, res) => {
  res.status(204).json({
    status: "success",
    data: {
      Laptops: ["Memory", "Hard Drive", "Battery Capacity", "Size"],
    },
  });

  console.log(`view ${req.params.id} model`);
});

// Add new models
app.post("/api/v1/new_model/:id", (req, res) => {
  console.log(
    `This is id which would used to reference the data in the DB ${req.params.id}`
  );
  console.log(req);
  res.send(`New model created`);
});

// Update existing model
app.put("/api/v1/edit_model/:id", (req, res) => {
  console.log(`Modify ${req.params.id} model`);
  res.send(`Modify ${req.params.id} model`);
});

// Delete individual model
app.delete("/api/v1/remove_model/:id", (req, res) => {
  console.log(`${req.params.id} removed from the models table`);
  res.send(`${req.params.id} removed from the models table`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App up and running on port ${port}`);
});
