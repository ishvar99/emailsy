const keys=require('../config/keys')
const passport =require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
 clientID: keys.GoogleClientID,
 clientSecret: keys.GoogleClientSecret,
 callbackURL: "/auth/google/callback"
},
function(accessToken) {
console.log(accessToken);
}
));