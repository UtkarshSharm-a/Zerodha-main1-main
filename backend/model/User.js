const { UserModel } = require("../schemas/UserModel")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


//// Register //////////
const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        message: "This email is already used",
        success: false,
      });
    }

    const hashPassword=await bcryptjs.hash(password,16);

    await UserModel.create({
      username,
      email,
      password:hashPassword
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log("Registration error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};


///// login///////
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid email and password",
        success: false
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email and password",
        success: false
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password); // ✅ FIXED

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email and password",
        success: false
      });
    }

    const token = jwt.sign({ id: user._id }, "sbubfbu", { expiresIn: "1d" });

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      message: `Welcome back ${user.username}`,
      success: true
    });

  } catch (error) {
    console.log("Login error:", error);
  }
};

////logout///
 const LogOut=async(req,res)=>{
  return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
    message:"Logout successfully",
    success:true
  })
}

// ✅ Export only Login, Register , logout
module.exports = { Register, Login, LogOut };