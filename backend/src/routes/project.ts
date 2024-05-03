import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import verifyToken from "../middleware/auth";
import Project, { ProjectType } from "../models/project";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
});

//get users project
router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const userProjects = await Project.find({ "team.userId": userId });
    res.json(userProjects);
  } catch (error) {
    console.error("Error fetching user projects:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// create new project
router.post(
  "/",
  verifyToken,
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newProject: ProjectType = req.body;

      const imageUrls = await uploadImages(imageFiles);
      newProject.imageUrls = imageUrls;
      newProject.userId = req.userId;

      const project = new Project(newProject);
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ message: "Error creating project" });
    }
  }
);

// Image upload function
async function uploadImages(imageFiles: Express.Multer.File[]) {
  try {
    const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = "data:" + image.mimetype + ";base64," + b64;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      return res.url;
    });
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw new Error("Error uploading images");
  }
}

export default router;
