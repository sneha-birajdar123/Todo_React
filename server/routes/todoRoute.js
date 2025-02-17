import express from "express"
import getTodo from "../controllers/todoController.js"

const router = express.Router

router.get("/getOne", getTodo)
router.post("/save", saveTodo)
router.post("/update", update)
router.post("/delete", deleteOne)




export default router