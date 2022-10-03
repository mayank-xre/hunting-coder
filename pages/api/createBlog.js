import sequelize from "../../database/models"
import * as fs from "fs"
import csprng from "csprng";
const cookie=require('cookie')
const rand = require('csprng');

export default async function handler(req,res){
    if(req.method==="POST"){
        const Content=req.body.Content;
        const Title=req.body.Title;
        const MetaDesc=req.body.MetaDesc;
        const KeyTag=req.body.KeyTag;
        const rawCookie=req.headers.cookie;
        const Cookies=cookie.parse(rawCookie)
        const User=await sequelize.models.Writer.findOne({
            where:{
                Session_Id:Cookies.Session_Id
            } 
        });
        if(!User){
            return res.status(200).json({"Error":"Please Login"});
        }
        const Id=rand(160,36);
        const data={
            KeyTag:KeyTag,
            Title:Title,
            Content:Content,
            MetaDesc:MetaDesc,
            Author:(User.getDataValue("FirstName")+User.getDataValue('LastName')),
            Id:Id
        }
        fs.writeFile(`blogdata/${Id}.json`,JSON.stringify(data),(err)=>{
            if(err){
                console.log(err);
                return res.status(200).json({"Error":"Internal Server error"})
            }
        })
        const Blog=await sequelize.models.Blog.create({
            WritersId:User.id,
            FileHash:Id,
            KeyTag:KeyTag
        })
        return res.status(200).json({"Status":"Success"});
    }
    else{
        return res.status(200).json({"Error":"Cant Access"});
    }
}