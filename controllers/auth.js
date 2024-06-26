// importing libraries
const passport = require("passport"),
  bcrypt = require("bcrypt");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// importing models
const User = require("../models/user");

exports.getLandingPage = (req, res, next) => {
  res.render("landing");
};

exports.getAdminLoginPage = (req, res, next) => {
  res.render("admin/adminLogin");
};

exports.getAdminLogout = async (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
};

exports.getAdminSignUp = (req, res, next) => {
  res.render("signup");
};

exports.postAdminSignUp = async (req, res, next) => {
  try {
    if (req.body.adminCode === process.env.ADMIN_SECRET) {
      const newAdmin = new User({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        isAdmin: true,
      });
      const user = await User.register(newAdmin, req.body.password);
      await passport.authenticate("local")(req, res, () => {
        req.flash(
          "success",
          "Hello, " + user.username + " Welcome to Admin Dashboard"
        );
        res.redirect("/admin");
      });
    } else {
      req.flash("error", "Secret code does not matching!");
      return res.redirect("back");
    }
  } catch (err) {
    console.log(err);
    req.flash(
      "error",
      "Given info matches someone registered as User. Please provide different info for registering as Admin"
    );
    return res.redirect("user-signup");
  }
};

exports.getUserLoginPage = (req, res, next) => {
  res.render("user/userLogin");
};

exports.getUserLogout = async (req, res, next) => {
  await req.session.destroy();
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
};

exports.getUserSignUp = (req, res, next) => {
  res.render("user/userSignup");
};

exports.postUserSignUp = async (req, res, next) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      gender: req.body.gender,
      address: req.body.address,
      password: await bcrypt.hash(req.body.password, 10),
    });

    const user = await User.register(newUser, req.body.password);
    await passport.authenticate("local")(req, res, () => {
      req.flash("success", "Hello, " + user.username + " Welcome");
      res.redirect("/user/1");
    });
  } catch (err) {
    console.log(err);
    req.flash(
      "error",
      "Given info matches someone registered as User. Please provide different info for registering as User"
    );
    return res.redirect("/auth/user-signup");
  }
};
