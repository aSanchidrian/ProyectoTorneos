const express=require("express")
const fs=require("fs")
const router=express.Router()
console.log("index.js")
const removeExtension=(filename)=>{
    return filename.split('.').shift()
}
fs.readdirSync(__dirname).filter((file)=>{
    const name=removeExtension(file)
    console.log("enlafuncion")
    if(name!=='index'){
        router.use('/'+name, require('./'+name))
    }
})

module.exports=router