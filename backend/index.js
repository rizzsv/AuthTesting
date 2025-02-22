import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js"
import authRoutes from "./routes/auth.route.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json()); //alows us to parse incoming req.body
app.use("/api/auth", authRoutes )


app.listen(5000, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
})

//OnQydQvrQJ7QH6Zh

