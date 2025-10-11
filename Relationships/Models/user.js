const mongoose = require("mongoose");
const {Schema}=mongoose;

main().then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

  async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
  }

  const userShema=new Schema({
    username:String,
    addresses:[
        {
            location:String,
            city:String,
        },
    ],
  });

  const User=mongoose.model("User",userSchema);

  const addUser=async()=>{
    let user1=new User({
        username:"Sherlockolmes",
        addresses:[{
            location:"221B Baker Street",
            city:"London",
        },
    ],
    });
    user1.addresses.push({loction:"p32 WallStreet",city:"London"});
    let result= await user1.save();
    console.log(result);
  }

  addUsers();