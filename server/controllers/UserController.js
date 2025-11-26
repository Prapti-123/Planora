const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️ Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2️ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3️ Hash Password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4️ Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 5️ Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 6️ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // in production use true
      sameSite: "none", // important for cross-site cookies
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // 7️ Return response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginUser = async (req, res) => {
    try{
    const { email, password } = req.body;

    // 1️ Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 2️ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // 3️ Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 4️ Generate JWT Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5️ Set JWT token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,      // set true in production
      sameSite: "lax",  // for cross-origin cookie
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // 6️ Send response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", "", {
      httpOnly: true,
      secure: true, // in production use true
      sameSite: "none",
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.checkAuth = async (req, res) => {
   res.json({ loggedin: true, user: req.user });
};


// exports.testingProtectedRoute = async (req, res) => {
//   try {
//     res.status(200).json({ message: "You have accessed a protected route", user: req.user });
//   } catch (error) {
//     console.error("Protected Route Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }
