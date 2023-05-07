const express=require('express');
const posts=require('./posts');

const app=express();

app.get('/',(req,res)=>{
    res.send('Api is running');
});

app.get('/posts',(req,res)=>{
    res.json(posts);
    // res.send(posts);
})

app.listen(process.env.port || 3000, ()=> console.log('server is running'));