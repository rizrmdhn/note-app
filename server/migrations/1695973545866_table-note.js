exports.up = (pgm) => {
  pgm.createTable("notes", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
      unique: true,
    },
    title: {
      type: "text",
      notNull: true,
    },
    content: {
      type: "text",
      notNull: true,
    },
    tags: {
      type: "text[]",
    },
    folderId: {
      type: "VARCHAR(50)",
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
    "notes",
    "fk_notes.folderId_folders.id",
    `FOREIGN KEY("folderId") REFERENCES folders(id) ON DELETE CASCADE`
  );

  pgm.addConstraint(
    "notes",
    "fk_notes.ownerId_users.id",
    `FOREIGN KEY("ownerId") REFERENCES users(id) ON DELETE CASCADE`
  );
};

exports.down = (pgm) => {
  pgm.dropTable("notes");
};
