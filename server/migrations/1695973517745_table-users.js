exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
      unique: true,
    },
    username: {
      type: "VARCHAR(50)",
      unique: true,
      notNull: true,
    },
    password: {
      type: "TEXT",
      notNull: true,
    },
    fullname: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    email: {
      type: "VARCHAR(50)",
      unique: true,
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};
