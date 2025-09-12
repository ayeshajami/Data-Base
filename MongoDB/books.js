const mongoose = require('mongoose');


main()
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch(err => {
    console.error(" MongoDB connection error:", err);
  });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazone");
}
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
        
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:0,
    },
});

const Book=mongoose.model("Book",bookSchema);

let book1= new Book({
    title:"Mathematics",
    author:"RD Sharma",
    price:1200
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
