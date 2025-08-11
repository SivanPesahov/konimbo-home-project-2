import dotenv from "dotenv";
import { Request, Response } from "express";
import app from "./app";
import tableRoutes from "./routes/tableRoutes";

// -- for deployment
// const path = require("path");

dotenv.config();

async function main() {
  app.use("/api/table", tableRoutes);

  // -- for deployment
  // app.get("*", (req: Request, res: Response) => {
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
  // });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main().catch((err) => console.error(err));
