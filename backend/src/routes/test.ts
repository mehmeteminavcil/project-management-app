import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import Test, { TestType } from "../models/test";
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

router.post(
  "/",
  verifyToken,
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newTest: TestType = req.body;
      console.log(req.body);
      //
      const imageUrls = await uploadImages(imageFiles);
      //
      newTest.imageUrls = imageUrls;
      newTest.userId = req.userId;

      const test = new Test(newTest);
      console.log(test);
      await test.save();
      res.status(201).send(test);
    } catch (e) {
      console.log("Error creating test : ", e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

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
