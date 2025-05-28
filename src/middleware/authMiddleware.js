const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ error: "Token tidak ditemukan" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "rahasia");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token tidak valid" });
  }
};
