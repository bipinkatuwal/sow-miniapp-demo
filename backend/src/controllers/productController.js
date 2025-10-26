import { AppDataSource } from "../config/database.js";
import { Product } from "../entities/Product.js";

const productRepository = AppDataSource.getRepository(Product);
export const getProducts = async (req, res) => {
  try {
    const products = await productRepository.find({
      relations: ["user"], // include user details
      order: { id: "ASC" },
    });

    res.json(products);
  } catch (error) {
    console.error("Product error: ", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, inPrice, inStock, price, description, unit } =
      req.body;

    const user = req.userId; // from middleware

    const product = await productRepository.findOne({
      where: {
        id: id,
        user: {
          id: user,
        },
      },
      relations: ["user"],
    });

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    // check ownership
    if (product.user.id !== user)
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update the product",
      });

    if (productName !== undefined && typeof productName !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid productName. It must be a string.",
      });
    }

    if (inPrice !== undefined) {
      const parsedInPrice = parseFloat(inPrice);
      if (isNaN(parsedInPrice) || parsedInPrice < 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid inPrice. It must be a positive number.",
        });
      }
      product.inPrice = parsedInPrice;
    }

    if (price !== undefined) {
      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice) || parsedPrice < 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid price. It must be a positive number.",
        });
      }
      product.price = parsedPrice;
    }

    if (inStock !== undefined) {
      const parsedStock = parseInt(inStock);
      if (isNaN(parsedStock) || parsedStock < 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid inStock. It must be a non-negative integer.",
        });
      }
      product.inStock = parsedStock;
    }

    if (description !== undefined && typeof description !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid description. It must be a string.",
      });
    }

    if (unit !== undefined && typeof unit !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid unit. It must be a string.",
      });
    }

    if (productName !== undefined) product.productName = productName.trim();
    if (description !== undefined) product.description = description.trim();
    if (unit !== undefined) product.unit = unit.trim();

    await productRepository.save(product);

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
