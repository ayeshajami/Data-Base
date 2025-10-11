const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer=async()=>{
    let cust1=new Customer({
        name:"John Doe",
    });

    let order1=await Order.findOne({item:"Burger"});
    let order2=await Order.findOne({item:"Samosa"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

   let result= await cust1.save();
   console.log(result);
   
};

addCustomer();

// const addOrder = async () => {
//   try {
//     const res = await Order.insertMany([
//       { item: "Samosa", price: 12 },
//       { item: "Burger", price: 50 },
//       { item: "Noodles", price: 70 },
//     ]);
//     console.log("Orders inserted:", res);
//   } catch (err) {
//     console.error("Error inserting orders:", err);
//   } finally {
//     mongoose.connection.close(); // close connection after operation
//   }
// };

// addOrder();
