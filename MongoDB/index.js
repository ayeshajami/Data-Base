const mongoose = require('mongoose');


main()
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch(err => {
    console.error(" MongoDB connection error:", err);
  });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User = mongoose.model("User",userSchema);


User.findByIdAndDelete("68c400bdd3e0519b4e83d4d9").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

// User.findOneAndUpdate({name: "Sultan" } , {age:40},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({age:{$gt:15}}).then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Amna",email:"amna@gmail.com",age:15},
//      {name:"Sara",email:"sara@gmail.com",age:23},
//       {name:"Ali",email:"ali@gmail.com",age:17},

// ]).then((res)=>{
//     console.log(res);
// });


// const user2= new User({
// name:"Sultan",
// email:"Sultan@gmail.com",
// age:21,
// });

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
