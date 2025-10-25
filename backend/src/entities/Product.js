import { EntitySchema } from "typeorm";
import { User } from "./User.js"; // Import your User entity

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
    price: {
      type: "decimal",
      precision: 10,
      scale: 2,
      default: 0,
    },
    inStock: {
      type: "int",
      default: 0,
    },
    unit: { type: "varchar", default: "pcs" },
    description: {
      type: "varchar",
      nullable: true,
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
  relations: {
    user: {
      type: "many-to-one",
      target: "User", // refers to User entity name
      joinColumn: true, // creates `userId` foreign key column
      nullable: false, // make sure product must belong to a user
      onDelete: "CASCADE", // delete products when user is deleted
    },
  },
});
