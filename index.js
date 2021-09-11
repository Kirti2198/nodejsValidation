const express=require('express');
const app=express();
const port=process.env.port || 3000;
const router= require("./routes/vendors");
app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`app running on port ${port}`);
});


