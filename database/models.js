const {Sequelize, DataTypes}=require("sequelize");
//console.log(process.env.DB_HOST)
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
        allowNull:false,
    },
    PassHash:{
        type:DataTypes.STRING(100),
        allowNull:false   
    },
    Session_Id:{
        type:DataTypes.STRING,
        allowNull:true
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