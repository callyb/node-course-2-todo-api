require("./config/config");

const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({
        todos
      });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/users", (req, res) => {
  User.find().then(
    users => {
      res.send({
        users
      });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

// GET /todos/34567
app.get("/todos/:id", (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({
        todo
      });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.delete("/todos/:id", (req, res) => {
  // get the id
  var id = req.params.id;

  // validate the id -> not valid? return 404
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  //  remove todo by id (use function)
  Todo.findByIdAndRemove(id)
    // success
    .then(todo => {
      //if no doc, send 404
      if (!todo) {
        return res.status(404).send();
      }
      //if doc, send back doc with a 200
      res.send({ todo });
    })
    // error
    .catch(e => {
      res.status(400).send();
    });
});

app.patch("/todos/:id", (req, res) => {
  var id = req.params.id;
  // pick() takes an object and pulls name/value pairs off it so only those pairs can be edited
  var body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    //getTime() = no. of milliseconds since midnight, Jan 1st 1970
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send90;
    });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
