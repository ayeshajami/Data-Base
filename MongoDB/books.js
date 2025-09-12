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
});

const Book=mongoose.model("Book",bookSchema);