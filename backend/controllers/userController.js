const User = require("../models/user");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    res.json({ message: "User created successfully" });
  } catch (error) {
    res.json({ message: "Something went wrong", error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email,password });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login Successfully" });
  } catch (error) {
    res.status(401).json({ message: "Something went wrong"});
  }
};

module.exports = { signup, login };
