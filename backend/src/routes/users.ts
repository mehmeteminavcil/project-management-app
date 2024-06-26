import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User, { UserType } from "../models/user";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";
import { upload, uploadImages } from "../utils/cloudinaryUtils";

const router = express.Router();

// get user
router.get("/profile", verifyToken, async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// Update user
router.put(
  "/profile",
  verifyToken,
  upload.array("imageFiles", 1),
  async (req: Request, res: Response) => {
    try {
      const updatedUser: UserType = req.body;

      const user = await User.findOneAndUpdate(
        {
          _id: req.userId,
        },
        updatedUser,
        { new: true }
      );
      console.log(req.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found..!" });
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      user.imageUrls = [...updatedImageUrls, ...(updatedUser.imageUrls || [])];

      await user.save();
      console.log(user);
      res.status(201).json(user);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
);

//create  new user

router.post(
  "/signup",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
      let user = await User.findOne({
        email: req.body.email,
      });
      if (user) {
        return res.status(400).json({ message: "User already  exists" });
      }

      user = new User(req.body);
      await user.save();

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });
      return res.status(200).send({ message: "User registered OK!" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Something went wrong!" });
    }
  }
);

//search user and get
router.get("/search-user", async (req, res) => {
  const { email } = req.query;

  try {
    // Use a regular expression to perform a case-insensitive search for emails
    const users = await User.find({
      email: { $regex: new RegExp(email as string, "i") },
    }).select("_id email firstName lastName imageUrls");
    res.json(users);
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;
