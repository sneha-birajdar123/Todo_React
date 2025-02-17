import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

const todoModel = mongoose.model("todos", todoSchema, "todos")
export default todoModel