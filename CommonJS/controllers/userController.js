const User = require("../models/userModels");

// create user
exports.createUser = async (req, res) => {
  try {
    req.body.email = req.body.email.toLowerCase();
    const user = new User(req.body);
    const saved = await user.save();

    res.status(201).json({ message: "User created successfully", saved });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single user
exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    req.body.email = req.body.email.toLowerCase();
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
