const GitUser = require("../models/GitUser");


exports.searchUser = async (req, res) =>{
    try {
        const {login} = req.body;

        const user = await GitUser.findOne({login});
        
        if(user){
            res.status(200).send({data:user});
        }

        const data = await fetch(`https://api.github.com/users/${login}`);
        const json = await data.json();
        res.status(200).send(json)

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
    } 
    
}

