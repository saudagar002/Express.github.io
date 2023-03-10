const express = require('express');
const res = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send('Home Route')
    

})
app.get('/About',(req,res)=>{
    res.send('About Route')


})
app.get('/Service',(req,res)=>{
    res.send('Service Route')


})
app.listen(3000,'127.0.0.1',()=>{
    console.log('Server is Startd ')
})