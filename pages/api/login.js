const sequelize = require("../../database/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const rand = require('csprng');
const cookie = require("cookie");
const saltRounds = 10;
export default async function handler(req, res) {
    if (req.method === "POST") {
        const Pass = req.body.PassWord;
        const Email = req.body.Email;
        const User = await sequelize.models.Writer.findOne({
            where: {
                Email: Email
            }
        });
        if (User) {
            if (bcrypt.compareSync(Pass, User.getDataValue("PassHash"))) {
                const token = jwt.sign({ Session_Id: rand(160, 36) }, process.env.PRIVATE_KEY, { expiresIn: "3h" });
                res.setHeader(
                    "Set-Cookie",
                    cookie.serialize(
                        "Session_Id",
                        token,
                        {
                            httpOnly: true,
                            maxAge: 3 * 60 * 60,
                            sameSite: "strict",
                            path: "/"
                        }
                    )
                );
                User.Session_Id=token;
                await User.save();
                return res.status(200).json({ "Status": "Success" });
            }
            else {
                return res.status(200).json({ "Error": "Invalid Credentials" })
            }
        }
        return res.status(200).json({ "Error": "Invalid Credentials" })
    }
    else {
        res.status(200).json({ "Error": "Method not Allowed" });
    }
}