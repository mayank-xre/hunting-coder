import sequelize from "../../database/models"
import * as fs from "fs"
//import { Op } from "sequelize";

export default async function handler(req,res){
    /*const count=await sequelize.models.Blog.count();
    const search=await sequelize.models.Blog.findAll({
        where:{
            id:{
                [Op.gte]:count-3,
                [Op.lt]:count
            }
        }
    });*/
    const search=await sequelize.models.Blog.findAll();
    let Blogs=[];
    console.log(search.length)
    for(let i=0;i<search.length;i++){
        try{
            const data=await fs.promises.readFile(`blogdata/${search[i].FileHash}.json`,"utf-8");
            Blogs.push(JSON.parse(data));
        }
        catch(err){
            console.log(err);
            return res.status(500).json({"error":"Internal Server Error"});
        }
    }
    return res.status(200).json(Blogs);
}

