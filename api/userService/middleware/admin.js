const isAdmin = (req, res, next) => {
  const { rank } = req.user;

  if(rank !== 'admin') return res.status(403).json({ message: "forbidden" });

  next();
}

module.exports = isAdmin;