import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import Todo, { TodoType } from "../models/todo";

const router = express.Router();

// get all todos

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const todos = await Todo.aggregate([
      { $match: { userId: req.userId } },
      { $sort: { isChecked: 1, createdAt: -1 } },
    ]);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Todos..!" });
  }
});

// delete todo

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newTodos = await Todo.findByIdAndDelete(id);
    res.status(200).json(newTodos);
  } catch (error) {
    res.status(500).json({ message: "Error deleting Todo...!" });
  }
});

//update todo isChecked

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById({
      _id: req.params.id,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    const updateTodo = todo;
    updateTodo.isChecked = !todo.isChecked;
    await todo.updateOne(updateTodo);
    res.status(201).json(updateTodo);
  } catch (error) {
    res.status(500).json({ message: "Error updating Todo...!" });
  }
});

// add new todo
router.post("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const newTodo: TodoType = req.body;
    newTodo.userId = req.userId;
    const todo = new Todo(newTodo);
    todo.date = new Date();
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    console.log("Error creating todo..!", error);
    res.status(501).json({ message: "Something went wrong" });
  }
});

export default router;
