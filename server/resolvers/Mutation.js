const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import secretOrKey from "../config/keys";
import {websites, user} from "../data";

function post(input) {
  const links = websites;
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
  var user = user;

  bcrypt.genSalt(10, function(salt) => {
    bcrypt.hash(user.password, salt, (hash) => {
      user.password = hash;
    });
  });

  bcrpyt.compare(input.password, user.password).then(isMatch => {
    if(isMatch) {
      const payload = { id: user.id, username: user.username, email: user.email };
      jwt.sign(
        payload,
        secretOrKey,
        { expires in: 3600 },
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
  const token = jwt.sign({ password: "happydays" }, "secret");

  if (input.email != user.email) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(input.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

module.exports = {
  post,
  login
}
