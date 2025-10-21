import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    // get token from header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedToken.userId;
    req.email = decodedToken.email;

    next();
  } catch (error) {
    console.error("Token error", error);
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
