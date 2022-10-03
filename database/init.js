const sequelize = require("./models");

async function InitTables() {
    await sequelize.models.Writer.sync();
    await sequelize.models.Blog.sync();
    await sequelize.models.Question.sync();
}
InitTables();

let blogsamp=sequelize.models.Blog.create({WritersId:1,
    FileHash:"234",
    KeyTag:"how_to_learn_next"});
blogsamp=sequelize.models.Blog.create({WritersId:1,
    FileHash:"235",
    KeyTag:"how_to_learn_flask"});
blogsamp=sequelize.models.Blog.create({WritersId:1,
    FileHash:"236",
    KeyTag:"how_to_learn_javascript"});