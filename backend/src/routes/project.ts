import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import Project, { ProjectType } from "../models/project";
import multer from "multer";
import cloudinary from "cloudinary";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
});

// create new project
router.post(
  "/",

  verifyToken,
  upload.fields([
    { name: "logoImgFile", maxCount: 1 },
    { name: "bannerImgFile", maxCount: 1 },
    { name: "imageFiles", maxCount: 6 },
  ]),
  async (req: Request, res: Response) => {
    try {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };

      const imageFiles = files["imageFiles"] || [];
      const logoImgFiles = files["logoImgFile"] || [];
      const bannerImgFiles = files["bannerImgFile"] || [];

      const newProject: ProjectType = req.body;

      // upload images
      const imageUrls = await uploadImages(imageFiles);
      newProject.imageUrls = imageUrls;

      const logoUrl = await uploadImages(logoImgFiles);
      newProject.logoUrl = logoUrl;

      const bannerUrl = await uploadImages(bannerImgFiles);
      newProject.bannerUrl = bannerUrl;

      newProject.userId = req.userId;
      const project = new Project(newProject);
      console.log(req.body);
      console.log("--------------------------------------");
      console.log(project);
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ message: "Error creating project" });
    }
  }
);
// get users project
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
export default router;

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });
  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}
