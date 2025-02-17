import express, { application } from "express";
import todoModel from "../models/todoModel.js";

const router = express.Router()

router.get("/getTodo", async (req, res) => {
    try {
        const todo = await todoModel.find({})
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

router.get("/saveTodo", (req, res) => {
    try {
        const { text } = req.body
        todoModel.create({ text })
        res.status(201).json("Added successfully")
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

router.put("/update", async(req, res) => {
    try {
        let todoId = req.params.id
        let data = req.body
       await todoModel.updateOne({todoId}, {data})
       res.status(200).json({msg: "Updated successfully"})

    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

router.delete("/deleteOne", async(req, res) => {
    try {
        let todoId = req.params.id
       await todoModel.findOne({todoId})
       res.status(200).json({msg: "Deleted successfully"})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})


export default router