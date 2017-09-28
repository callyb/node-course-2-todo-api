const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server");

  // db
  //   .collection("Todos")
  //   .find({
  //     _id: new ObjectID("59cceb0f172ffb6685c59a31")
  //   })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );

  // db
  //   .collection("Todos")
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos count: ${count}`);
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );
  // db.close();

  db
    .collection("Users")
    .find({ name: "Carole" })
    .toArray()
    .then(
      docs => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch Users with name Carole", err);
      }
    );
});
