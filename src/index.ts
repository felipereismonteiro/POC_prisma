import express from "express";
import { SchoolRoute } from "./routes/schoolRoute.js";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

app.use(SchoolRoute);

app.listen(4000, () => console.log(`server running on port: 4000`))