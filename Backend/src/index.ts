import dotenv from "dotenv";
import tableRoutes from "./routes/tableRoutes";
import app from "./app";
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
