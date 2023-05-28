const express = require("express");

const router = express.Router();


let products =[
    {
        id: 1,
        name: "Pastel Frango",
        description: "Frango com catupiry",
        time: "10 minutos",
        price: 15  
    }
]

router .get("/products",(req,res)=>{ //listar os produtos cadastrados
    const moreThan = req.query.moreThan ? Number(req.query.more_than) : 0;
    res.json({
        products
    })
});
router .get("/products/:id", (req,res)=>{
   const id =  Number(req.params.id);                                     //req acessa id do products
   const product = products.find((product)=>{
        return product.id === id;
   });
   res.json({
    product 
   })
});

router .post("/products",(req,res)=>{
    const newProduct = {  //coloquei em uma variavel para poder usar na hora de mostar o produto adicionado
        id: products.length +1,
        name: req.body.name,
        description: req.body.description,
        time: req.body.time,
        price: req.body.price
    }
    products.push(newProduct)    //iserir o produto novo no array
    res.json({
        product: newProduct //retorna a produto que foi cadastrado 
    })
});
router .put("/products/:id",(req,res)=>{
    const id = Number(req.params.id);  //convertir a string em numnber
    const product = products.find((product)=>{
        return product.id === id;  //retorna produto que id foi igual id do params
    })   
    if(!product){
       return res.status(404).json({
            message: "Produto não encontrado"
    });
    }
    product.name =  req.body.name;
    product.description = req.body.description;  //vai atualizar valores dos produtos
    product.time = req.body.time;
    product.price = req.body.price;
    res.json({
        product//
 })
});

router .delete("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    products = products.filter((product)=>{
        return product.id !== id;
    })
    res.status(204).send();
})

module.exports = {
    router
}