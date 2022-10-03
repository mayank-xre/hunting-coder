const sequelize=require("../../database/models")
const bcrypt=require("bcrypt")
const saltRounds = 10;
export default async function handler(req,res){
    if(req.method==='POST'){
        const Salt = bcrypt.genSaltSync(saltRounds);
        const PassHash = bcrypt.hashSync(req.body.PassWord, Salt);
        const User=sequelize.models.Writer.create({
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            AuthName:req.body.AuthName,
            PassHash:PassHash
        });
        res.status(200).json({"Status":"Success"})
    }
    else{
        res.status(405).json({"Error":"Internal Server Error"});
    }
}