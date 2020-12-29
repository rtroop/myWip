const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const port =3000;

app.set('view engine', 'ejs', {async: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todosDB",
  {useNewUrlParser: true,
   useUnifiedTopology: true
});

const itemsSchema = {
      name:{
        type: String,
        required: [true, "A name is required"]
      }};

      const Item = mongoose.model("Item", itemsSchema);

      const item1 = new Item({
        name: "Welcome to your todo list."
      });
      const item2 = new Item({
        name: "Hit the + button to add a new item."
      });
      const item3 = new Item({
        name: "<--- Hit this to delete an item."
      });

const defaultItems = [item1, item2, item3];



  app.get("/", function(req, res) {
    Item.find({},function(err, foundItems) {
      if (foundItems.length === 0){
        Item.insertMany(defaultItems, function(err){
          if (err){
            console.log(err);
          }else{
            console.log(foundItems)
            // console.log("Those 3 items have been recorded.");
          }
        });
        res.redirect("/");
        }else{
        res.render("list", {listTitle: "Today", newListItems: foundItems});
  }

});
mongoose.connection.close()
});

app.post("/", function(req, res){
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});
//
app.listen(port, () =>
  console.log(`listening at port: ${port}`));
