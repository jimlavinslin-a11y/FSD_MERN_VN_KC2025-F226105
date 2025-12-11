const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoute.js");
const PORT = 3000

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
app.use("/books", bookRoutes);

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/bookdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(3000, () => console.log(`Server running on http://localhost:${PORT}`));
