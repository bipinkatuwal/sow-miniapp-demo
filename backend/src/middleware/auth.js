import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    // get token from header
    const authHeader = req.header("Authorization");

    console.log(authHeader);

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing",
      });
    }

    // Check if header follows Bearer scheme
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format. Use 'Bearer <token>'",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      if (!decodedToken.userId || !decodedToken.email) {
        return res.status(401).json({
          success: false,
          message: "Invalid token payload",
        });
      }

      req.userId = decodedToken.userId;
      req.email = decodedToken.email;

      next();
    } catch (jwtError) {
      console.error("JWT Verification failed:", {
        error: jwtError.message,
        token: token.substring(0, 10) + "...", // Log first 10 chars for debugging
      });

      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during authentication",
    });
  }
};
