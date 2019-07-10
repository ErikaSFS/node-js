const express = require("express");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o App
const app = express();

//iniciando p banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi" , 
{ useNewUrlParser: true });


requireDir("./src/models");

const Product = mongoose.model('Product');

//iniciando a primeira rota
app.get("/", (req , res) => {
    Product.create({ title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'});

    return res.send("Hello World!!");
});



app.listen(3001);