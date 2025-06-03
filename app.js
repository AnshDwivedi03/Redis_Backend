import express from 'express';
import axios from 'axios';
import { createClient } from 'redis';
const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();
const app=express();



app.get('/data', async(req,res)=>{
   
    const rediswala = await client.get('todos');
    if (rediswala) return res.json(JSON.parse(rediswala));
    
    const hihi = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await client.set('todos', JSON.stringify(hihi.data));
    await client.expire('todos', 30);
    return res.json(hihi.data);
    
});





app.get('/',(req,res)=>{
    res.send("hiii");
});
app.get('/product',(req,res)=>{
    res.send("hiii le lo");
});

app.listen(4000,()=>{
console.log("server started");
});