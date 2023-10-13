const jwt = require("jsonwebtoken");
const { httpResponse } = require("../utils/httpResponse");
const bcrypt = require("bcrypt");
const { createToken } = require("../helper/jwt");
const User = require("../models/User");
const maxAge = 3 * 24 * 60 * 60;

// Registering a user
module.exports.signup = async (req, res) => {
  const email = req.body.email;
  const userData = {
    email: email,
    password: req.body.password,
    ...req.body,
  };

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res
        .status(400)
        .json(httpResponse("error", {}, "This Email is already in use"));
    } else {
      const newUser = await User.create(userData);

      // Create JWT
      const token = createToken(
        { id: newUser._id },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });

      res
        .status(201)
        .json(httpResponse("sucess", newUser, "User Registered successfully"));
    }
  } catch (err) {
    res.status(500).json(httpResponse("error", {}, err.message));
  }

  return;
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      // check if password is correct
      const auth = await bcrypt.compare(password, user.password);

      if (auth) {
        const userJwtData = {
          name: user.name,
          role: user.role,
          email: user.email,
          id: user._id,
        };

        const accessToken = createToken(
          userJwtData,
          process.env.ACCESS_TOKEN_SECRET,
          "2h"
        );

        const refreshToken = createToken(
          userJwtData,
          process.env.REFRESH_TOKEN_SECRET,
          "12h"
        );

        res.cookie("tokenExp", "1", {
          httpOnly: true,
          sameSite: "strict",
          secure: true,
          path: "/",
          expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
        });
        // console.log(accessToken, refreshToken);
        res.cookie("token", accessToken, {
          httpOnly: true,
          sameSite: "strict",
          secure: true,
          path: "/",
          expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
        });

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
          secure: true,
          path: "/",
          expires: new Date(new Date().getTime() + 12 * 60 * 60 * 1000),
        });

        let tempUser = { ...user.toJSON() };
        delete tempUser.password;

        res
          .status(200)
          .json(httpResponse("success", tempUser, "Successfully logged in"));
      } else {
        res.status(401).json(httpResponse("failed", {}, "Incorrect password"));
      }
      // throw Error('incorrect password')
    } else {
      res
        .status(401)
        .json(
          httpResponse("failed", {}, "User with this email does not exist")
        );
    }
  } catch (err) {
    // TODO: SEND WHY THE ERROR HAPPENED
    console.log(err);
    res.status(500).json(httpResponse("error", {}, err.toString()));
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
    });

    res.clearCookie("refreshToken", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
    });

    res.clearCookie("tokenExp", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
    });

    res.clearCookie("name", "", {
      path: "/",
    });
    res.clearCookie("userId", "", {
      path: "/",
    });

    res.clearCookie("role", "", {
      path: "/",
    });
    res.clearCookie("name", "", {
      path: "/",
    });

    res
      .status(200)
      .json(httpResponse("success", {}, "Successfully logged out."));
  } catch (err) {
    console.log(err);
    res.status(500).json(httpResponse("fail", {}, "Logout Failed"));
  }
};

module.exports.getLoggedInUser = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id, { password: 0 });
    if (userFound) {
      res.status(200).json(httpResponse("success", userFound, "User found"));
    } else {
      res.status(401).json(httpResponse("fail", {}, "User not found"));
    }
  } catch (err) {
    res.status(500).json(httpResponse("error", {}, err.toString()));
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(httpResponse("success", result, "User found"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Profile Update Failed"));
  }
};
