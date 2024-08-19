const express = require('express');
const app = express();
const PORT = 3000;

app.get("/menu",(req, res)=>{
    const newItem = req.query.new;
    res.send(`Menu: Small Lemondae, Medium Lemonade, Large Lemonade ,${newItem}`);
});

app.post("/order",(req, res)=>{
    const size = req.query.size;//"Small Lemonade"
    res.send(`Thankyou the Order Received ${size}`);
});


app.put("/order",(req, res)=>{
    const size = req.query.size;//"Small Lemonade"
    res.send(`Your Order has been updated to ${size}`);
});

app.delete("/order",(req, res)=>{
    res.send("Your Order has been deleted");
});

app.listen(PORT, ()=>{
    console.log(`Lemnade Stand listening at http://localhost:${PORT}`);
});