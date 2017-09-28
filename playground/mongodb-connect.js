const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server");

  //   db.collection("Todos").insertOne({
  //     text: "Something to do",
  //     completed: false
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert Todo", err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   });
  //
  //   db.close();
  // });

  // insert new doc into Users collection (name, age, location)

  // db.collection("Users").insertOne({
  //   name: "Carole",
  //   age: 53,
  //   location: "Tynemouth"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert User", err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
