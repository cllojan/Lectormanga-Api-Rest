import express from 'express'
import { Request, Response} from "express"
import router from "./api/router"

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000;


app.get("/", (_req: Request, res: Response) => {
    res.json({
	message:"inicio"
    })
})

app.use("/api",router)

app.listen(PORT, () => {
    console.log(`server ${PORT}`)
})
