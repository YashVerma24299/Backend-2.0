export const isUser = (req, res, next) => {
  if (req.query.role === "user") {
    return next();
  }
  res.send("User access only");
};

export const isAdmin = (req, res, next) => {
  if (req.query.role === "admin") {
    return next();
  }
  res.send("Admin access only");
};
