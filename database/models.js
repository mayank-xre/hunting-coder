const {Sequelize, DataTypes}=require("sequelize");
const path = require('path')
//require('dotenv').config({path: path.relative(process.cwd(), path.join(__dirname,'.env'))});
console.log(process.env.DB_HOST)
//require('dotenv').config({ path: require('find-config')('.env') })
const sequelize=new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/HuntingCode`);
const Writer=sequelize.define('Writer',{
    FirstName:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    LastName:{
        type:DataTypes.STRING(100),
    },
    Email:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    AuthName:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    PassHash:{
        type:DataTypes.STRING(100),
        allowNull:false   
    }
},{
    tableName:'Writers'
});
const Blog=sequelize.define("Blog",{
    WrtiersId:{
        type:DataTypes.INTEGER
    },
    FileHash:{
        type:DataTypes.STRING(100)
    },
    KeyTag:{
        type:DataTypes.STRING(100)
    }
},{
    tableName:'Blogs'
})
const Question=sequelize.define("Question",{
    Name:{
        type:DataTypes.STRING(100)
    },
    Email_Id:{
        type:DataTypes.STRING(100)
    },
    Desc:{
        type:DataTypes.STRING
    }
},{
    tableName:'Questions'
})
module.exports=sequelize;