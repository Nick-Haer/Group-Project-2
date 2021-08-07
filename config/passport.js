const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

//adding code to validate the password the user enters as a valid one, part of the password middleware.

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.users
        .findOne({
          where: {
            email: email
          }
        })
        .then(function(dbUser) {
          if (!dbUser) {
            return done(null, false, {
              message: "Sorry, that email needs to get gud."
            });
          } else if (!dbUser.validPassword(password)) {
            return done(null, false, {
              message: "You shall not pass! Sorry, that password doesn't match."
            });
          }
          return done(null, dbUser);
        });
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
