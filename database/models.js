const {Sequelize, DataTypes}=require("sequelize");
const sequelize=new Sequelize("postgres://postgres:pass@localhost:5432/HuntingCode");
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
module.exports=sequelize;