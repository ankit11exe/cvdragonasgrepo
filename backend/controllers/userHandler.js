const User = require("../models/user");


//For getting the all users
exports.getUsers = async (req,res)=> {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

//For Single user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) 
    {
        return (
            res.status(404)
            .send("!!!User not found!!!"));
    }
    res.json(user);}
    catch (err){
        res.status(400).send(err.message);
    }
};


//For creating a new user
exports.createUser = async (req,res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err){
        res.status(400).send(err.message);
    }
};

//Updating the existing user
exports.updateUser = async (req,res) => {
    try{
        let { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new:true});

        if (!updatedUser) {
            return (
                res.status(404)
                .send("!!!User not found!!!"));
        }

        res.json(updatedUser);
    }
    catch (err){
        res.status(400).send(err.message);
    }
};

//Deleting the exisiting user
exports.deleteUser = async(req,res) => {
    try{
        let { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return (
                res.status(404)
                .send("!!!User not found!!!"));
        }
        res.send("User deleted");
    }
    catch (err){
        res.status(500).send(err.message);
    }
    
};




