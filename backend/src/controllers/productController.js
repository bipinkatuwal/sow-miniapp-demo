import { AppDataSource } from "../config/database.js";
import { Product } from "../entities/Product.js";
import { User } from "../entities/User.js";

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
    const user = req.user; // from middleware

    const product = await productRepository.findOne({
      where: {
        id: parseInt(id),
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

    if (productName !== undefined) product.productName = productName.trim();
    if (inPrice !== undefined) product.inPrice = parseFloat(inPrice);
    if (price !== undefined) product.price = parseFloat(price);
    if (inStock !== undefined) product.inStock = parseInt(inStock);
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
