const mongoose=require('mongoose');
//config the mongodb the web app




mongoose.connect('mongodb://localhost/TODO');//making a database in the mongodb db with name TODO
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in conectin the mongoDB'));
db.once('open',function(){
    console.log("sucess conected to the mongodb");
})

module.exports=db;