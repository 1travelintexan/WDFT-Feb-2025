const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    res.status(400).json({ message: "No authorization header" });
  }
  const arr = req.headers.authorization.split(" ");
  if (arr[0] === "Bearer" && arr[1]) {
    const theToken = arr[1];
    try {
      const decodedToken = jwt.verify(theToken, process.env.TOKEN_SECRET);
      //this is attaching a payload property to the request object
      //remember that payload did not exist before this line
      req.payload = decodedToken;
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid token" });
    }
  } else {
    res.status(400).json({ message: "No token" });
  }
}

//export the fuction so other files can use it
module.exports = { isAuthenticated };
