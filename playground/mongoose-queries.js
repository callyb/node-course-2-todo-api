const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var id = "59ce5a65fecbb1d90a4074d5";
//
// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   text: "First test todo"
// }).then(todos => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   text: "First test todo"
// }).then(todo => {
//   console.log("Todo", todo);
// });

// query works but no User
// user found - print to screen
// print error obj to screen - no isvalid

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
//

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => console.log(e));
