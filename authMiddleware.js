const authMiddleware = (req, res, next) => {
  if (!req.session.username) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};

export default authMiddleware;
