import { EntitySchema } from "typeorm";

export const Product = new EntitySchema({
  name: "Product",
  tableName: "products",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    productName: {
      type: "varchar",
      nullable: false,
    },
    inPrice: {
      type: "decimal",
      precision: 10,
      scale: 2,
      default: 0,
    },
    inStock: {
      type: "int",
      default: 0,
    },
    description: {
      type: "varchar",
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
