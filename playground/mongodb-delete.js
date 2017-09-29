const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  // db
  //   .collection("Todos")
  //   .deleteMany({ text: "Eat Lunch" })
  //   .then(result => {
  //     console.log(result);
  //   });
  // deleteOne
  // db
  //   .collection("Todos")
  //   .deleteOne({ text: "Eat Lunch" })
  //   .then(result => {
  //     console.log(result);
  //   });
  // findOneAndDelete
  // db
  //   .collection("Todos")
  //   .findOneAndDelete({ completed: false })
  //   .then(result => {
  //     console.log(result);
  //   });

  // look for duplicates (names) use deleteMany

  // db
  //   .collection("Users")
  //   .deleteMany({ name: "Carole" })
  //   .then(result => {
  //     console.log(result);
  //   });

  // use findOneAndDelete to delete any 'Mike' by id...(findOneAndDelete)

  db
    .collection("Users")
    .findOneAndDelete({ _id: new ObjectID("59ce144c172ffb6685c5adf3") })
    .then(result => {
      console.log(JSON.stringify(result, undefined, 2));
    });
  // db.close();
});
