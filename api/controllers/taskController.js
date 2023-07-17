const { randomUUID } = require("crypto");
const db = require("../models/index");

module.exports = {
  read: async (req, res, next) => {
    try {
      const result = await db.Task.findAll();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const result = await db.Task.create({
        title: req.body.title,
        contents: req.body.contents,
        id: randomUUID,
      });
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const result = await db.Task.update(
        {
          name: req.body.name,
          contents: req.body.contents,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const result = await db.Task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({
        result: result,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
