const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const travelerRoutes = require("./routes/travelers");
const tripRoutes = require("./routes/trips");
const businessRoutes = require("./routes/businesses");
const reviewRoutes = require("./routes/reviews");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectDB();

app.get("/api", (req, res) => {
  res.send("Passport & Purpose API is running");
});

app.use("/api/travelers", travelerRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/businesses", businessRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});