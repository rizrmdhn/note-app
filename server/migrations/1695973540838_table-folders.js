exports.up = (pgm) => {
  pgm.createTable("folders", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
      unique: true,
    },
    name: {
      type: "text",
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
    "folders",
    "fk_folders.ownerId_users.id",
    `FOREIGN KEY("ownerId") REFERENCES users(id) ON DELETE CASCADE`
  );
};

exports.down = (pgm) => {
  pgm.dropTable("folders");
};
