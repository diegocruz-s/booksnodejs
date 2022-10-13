const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/testemongoose";

async function main(){
    await mongoose.connect(uri);
    console.log('Conectou ao DB!');
}

main().catch(err=>{console.log(err)})

module.exports = mongoose;