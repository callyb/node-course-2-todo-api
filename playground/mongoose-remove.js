const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findByIdAndRemove("59d135d8c9db0b683bb01ff6").then(todo => {
//   console.log(todo);
// });

Todo.findOneAndRemove({ _id: "59d135d8c9db0b683bb01ff6" }).then(todo => {
  console.log(todo);
});
