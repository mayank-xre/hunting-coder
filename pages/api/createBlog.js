import sequelize from "../../database/models"
import * as fs from "fs"

export default function handler(req,res){
    const search=sequelize.models.Blog.findAll();
    let Blogs=[];
    search.forEach(blog => {
        fs.readFile(("blogdata/"+`${blog.FileHash}.json`),"utf-8",(err,data)=>{
            if(err){
                return res.status(500).json({"error":"Internal server error"})
            }
            Blogs.push(JSON.parse(data));
        })
    });
    res.status(200).json(Blogs);
}