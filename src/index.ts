import express from "express";
import modules from "./modules";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join("public")));
app.use(modules);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
