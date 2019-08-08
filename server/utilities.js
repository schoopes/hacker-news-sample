const SQL = require('sequelize');

module.exports.createStore = () => {
  const Op = SQL.Op;

  const db = new SQL('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './store.sqlite',
    logging: false,
  });

  const users = db.define('user', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    email: SQL.STRING,
    token: SQL.STRING,
  });

  const links = db.define('link', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    url: SQL.STRING,
    title: SQL.STRING,
    points: SQL.INTEGER,
    userId: SQL.INTEGER,
    posted: SQL.BOOLEAN
  });

  const comments = db.define('comment', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    body: SQL.STRING,
    userId: SQL.INTEGER,
    linkId: SQL.INTEGER,
  });

  return { users, links, comments };
};
