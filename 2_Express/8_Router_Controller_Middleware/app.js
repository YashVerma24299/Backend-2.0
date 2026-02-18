import express from "express";
import publicRoutes from "./routes/publicRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

// app.use(express.json());

// Route groups
app.use("/", publicRoutes);
app.use("/users", userRoutes);
app.use("/admin", adminRoutes);