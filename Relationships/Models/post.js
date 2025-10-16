const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}

const userSchema = new Schema({
  username: String,
  email: String
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData=async()=>{
    let user =await User.findOne({username:"Aisha"});
    // let user=new User({
    //     username:"Aisha",
    //     email:"aisha@gmail.com"
    // });
    let post2=new Post({
        content:"By bY ",
        likes:32,
    });

    post2.user=user;

    await post2.save();
};

addData();