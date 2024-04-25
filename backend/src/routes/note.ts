import express, { Request, Response } from "express";
import Note, { NoteType } from "../models/note";
import verifyToken from "../middleware/auth";
import { param, validationResult } from "express-validator";
import { resolveSoa } from "dns";

const router = express.Router();

// get all note

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const notes = await Note.aggregate([
      { $match: { userId: req.userId } },
      { $sort: { isChecked: 1, createdAt: -1 } },
    ]);
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes...!" });
  }
});
//get note by id
router.get(
  "/:id",
  [param("id").notEmpty().withMessage("Note ID is required..!")],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const note = await Note.findById({ _id: req.params.id.toString() });
      if (!note) {
        res.status(404).json({ message: "Note not found...!" });
      }
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
);

//update a note

router.put("/:noteId", verifyToken, async (req: Request, res: Response) => {
  try {
    const updatedNote: NoteType = req.body;

    const note = await Note.findOneAndUpdate(
      {
        _id: req.params.noteId,
        userId: req.userId,
      },
      updatedNote,
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found...!" });
    }
    await note.save();
    res.status(201).json(note);
    console.log("ok!");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// add new note
router.post("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const newNote: NoteType = req.body;
    newNote.userId = req.userId;
    const note = new Note(newNote);

    await note.save();
    return res.status(201).send(note);
  } catch (error) {
    console.log("Error creating todo...!", error);
    res.status(501).json({ message: "Something went wrong" });
  }
});

// delete a note

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newTodos = await Note.findByIdAndDelete(id);
    res.status(200).json(newTodos);
  } catch (error) {
    res.status(500).json({ message: "Error deleting Note...!" });
  }
});

export default router;
