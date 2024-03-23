const authModel = require("../models/authModel");
const { hashPassword, comparePassword } = require("../helper/authHelper.js");
const JWT = require("jsonwebtoken");

const registerOwner = async (req, res) => {
  try {
    const formData = req.body;
    const existingUser = await authModel.findOne({ email: formData.email });

    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "User already registered. Please login.",
      });
    }

    const hashedPassword = await hashPassword(formData.password);
    formData.password = hashedPassword;

    const newUser = new authModel(formData);
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User registered successfully.",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering owner:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

const loginOwner = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const user = await authModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User is not registered.",
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid password.",
      });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful.",
      email,
      token,
      _id: user._id,
      role: user.role,
    });
  } catch (error) {
    console.error("Error logging in owner:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

const registerSitter = async (req, res) => {
  // Implement registration logic for sitter
};

const loginSitter = async (req, res) => {
  // Implement login logic for sitter
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const user = await authModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User is not registered.",
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid password.",
      });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful.",
      email,
      token,
      _id: user._id,
      role: user.role,
    });
  } catch (error) {
    console.error("Error logging in owner:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

module.exports = {
  registerOwner,
  registerSitter,
  loginSitter,
  loginOwner,
};
