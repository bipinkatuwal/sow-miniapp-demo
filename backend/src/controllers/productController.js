import { AppDataSource } from "../config/database.js";
import { Product } from "../entities/Product.js";

export const getProducts = async (req, res) => {
  try {
    const productRepository = AppDataSource.getRepository(Product);

    const products = await productRepository.find({
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
