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
        maxLength:20,
    },
        
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[50,"price is too low"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
    genre: [String],

});

const Book=mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("68c486771d031c1b3fb888e8",{price:100},{runValidators:true}).then((res)=>{console.log(res)}).catch((err)=>{
    console.log(err);
});
//  let book1= new Book({
//     title:"Mathematics",
//     author:"RD Sharma",
//     price:1200,
//     category:"fiction",
//     genre:["comics","superheroes","fiction"],
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
