import { EntitySchema } from "typeorm";

export const Translation = new EntitySchema({
  name: "Translation",
  tableName: "translations",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    key: {
      type: "varchar",
      nullable: false,
    },
    languageCode: {
      type: "varchar",
      length: 2,
      nullable: false,
    },
    text: {
      type: "text",
      nullable: false,
    },
  },
  uniques: [
    {
      name: "unique_key_lang",
      columns: ["key", "languageCode"],
    },
  ],
});
