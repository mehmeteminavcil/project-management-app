import express, { Request, Response } from "express";
import Note, { NoteType } from "../models/note";
import verifyToken from "../middleware/auth";

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

export default router;
