  
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: "Access denied. No token provided" });

    try {
        const data = jwt.verify(token, process.env.SECRET_KEY)
        req.user = data;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" })
    }


}