import * as fs from "fs"
const sequelize=require("../../database/models")
const {Op}=require("sequelize")
export default async function handler(req, res) {
    const slug=req.query.slug;
    const Blogs=sequelize.models.Blog;
    const search=await Blogs.findAll(
        {
            where:{
                KeyTag:{
                    [Op.eq]:slug
                }
            }
        }
    );
    fs.readFile(`blogdata/${search[0].FileHash}.json`,"utf-8",(err, data)=>{
        if(err){
            return res.status(404)//.json({"Error":"Internal Server Error"})
        }
        return res.status(200).json(JSON.parse(data))
    })
}  