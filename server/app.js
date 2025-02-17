// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = 5000;

// app.use(express.static(path.join(__dirname, "dist")));

// app.get("/sneha", (req, res) => {
//   try {
//     res.status(200).json({ message: "Hello omer!" });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`server is running at port ${PORT}`);
// });




import express from "express";
import mongoose from "mongoose";
import config from "config";
import router from "./routes/todoRoute.js";
import cors from "cors"

const app = express()
const PORT = config.get("PORT")
app.use(express.json())
app.use(cors())


app.get("/sneha", (req, res) => {
    try {
        res.status(200).json({msg: "Hello world"})
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

app.use(router)


app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})


