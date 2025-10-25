import { AppDataSource } from "../config/database.js";
import { User } from "../entities/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check email and password are valid
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const userRepository = AppDataSource.getRepository(User);

    // find user
    const user = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentails",
      });
    }

    // check password
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentails",
      });
    }

    // generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    return res.json({
      success: true,
      token,
      user: {
        userId: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error: ", error);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
