const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/keys");
const data = require( "../data");

function post(input) {
  const links = data.websites;
  var lastLinkId = links.length;

  const newLink = {
    id: lastLinkId + 1,
    url: input.url,
    title: input.description
  };
  links.push(newLink);
  return links;
}

function login(input) {
  var user = data.user;

  bcrypt.genSalt(10, function(salt) {
    bcrypt.hash(user.password, salt, (hash) => {
      user.password = hash;
    });
  });

  bcrpyt.compare(input.password, user.password).then(isMatch => {
    if(isMatch) {
      const payload = { id: user.id, username: user.username, email: user.email };
      jwt.sign(
        payload,
        config.secretOrKey,
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            token: "Bearer " + token
          });
        }
      );
    } else {
      errors.password = "Password incorrect";
      return res.status(404).json(errors);
    }
  });
}

module.exports = {
  post,
  login
}
