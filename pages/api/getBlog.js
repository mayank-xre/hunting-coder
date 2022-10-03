import * as fs from "fs"
const sequelize=require("../../database/models")
const {Op}=require("sequelize")
export default async function handler(req, res) {
    const slug=req.query.slug;
    const Blogs=sequelize.models.Blog;
    const search=await Blogs.findOne(
        {
            where:{
                KeyTag:{
                    [Op.eq]:slug
                }
            }
        }
    );
    if(!search){
        return res.status(500).json({"Error":"Internal Server Error"})
    }
    fs.readFile(`blogdata/${search.FileHash}.json`,"utf-8",(err, data)=>{
        if(err){
            return res.status(200).json({"Error":"Internal Server Error"})
        }
        return res.status(200).json(JSON.parse(data))
    })
}  