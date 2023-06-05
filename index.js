const express = require('express');
const bodyParser = require('body-parser');

let path = require('path')
let urlencodedparser = bodyParser.urlencoded({extended:true})

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs')














app.get('/', (req,res)=>{
  
    
    res.render('home')
  
})
  


app.get('/search', (req,res)=>{
  
    
    res.render('search')
  
})
  
app.get('/contact', (req,res)=>{
  
    
    res.render('contact')
  
})
app.get('/detail', (req,res)=>{
  
    var id = req.query.id;

    res.render('detail', {id})
  
})




app.use((req,res)=>{
res.redirect('/')
})


const server = app.listen(process.env.PORT || 5000, () => {
const port = server.address().port;
console.log(`Express is working on port ${port}`);
});
  