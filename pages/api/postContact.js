import sequelize from "../../database/models";

export default async function handler(req,res){
    if(req.method==='POST'){
        const name=req.body.Name;
        const email=req.body.Email_id;
        const desc=req.body.Desc;
        const question=await sequelize.models.Question.create({Name:name,Email_Id:email,Desc:desc});
        return res.status(200).json({"success":"true"});
    }else{
        return res.status(404).redirect("/404");
    }
}