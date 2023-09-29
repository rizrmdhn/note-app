/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable("categories", {
    id: {
      type: "VARCHAR(50)",
      unique: true,
      primaryKey: true,
    },
    name: {
      type: "VARCHAR(50)",
      unique: true,
      notNull: true,
    },
    ownerId: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    private: {
      type: "boolean",
      notNull: true,
      default: true,
    },
    public: {
      type: "boolean",
      notNull: true,
      default: false,
    },
    friendOnly: {
      type: "boolean",
      notNull: true,
      default: false,
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updatedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    deletedAt: {
      type: "timestamp",
    },
    isDeleted: {
      type: "boolean",
      notNull: true,
      default: false,
    },
  });

  pgm.addConstraint(
    "categories",
    "fk_categories.ownerId_users.id",
    `FOREIGN KEY("ownerId") REFERENCES users(id) ON DELETE CASCADE`
  );

  pgm.addConstraint(
    "folders",
    "fk_folders.categoriesId_categories.id",
    `FOREIGN KEY("categoriesId") REFERENCES categories(id) ON DELETE CASCADE`
  );
};

exports.down = (pgm) => {
  pgm.dropTable("categories");
};
