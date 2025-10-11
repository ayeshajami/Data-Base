const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}
const orderSchema = new Schema({
 item:String,
 price:Number,
});

const Order=mongoose.model("Order",orderSchema);

const addOrder=async()=>{
   let res= await Order.insertMany([
        {item:"Samosa",price:12},
        {item:"Burger",price:50},
        {item:"Noodles",price:70}
    ]);
    console.log(res);
};

addOrder();