// Middleware function to validate data
const validateData = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ error: "Data is required" });
  }
  const { roll_number, address, full_address, phone, name } = req.body;
  if (!roll_number) {
    return res.status(400).json({ error: " roll_number is required" });
  }
  if (!address) {
    return res.status(400).json({ error: " address is required" });
  }
  if (!phone) {
    return res.status(400).json({ error: " phone is required" });
  }
  if (!name) {
    return res.status(400).json({ error: " name is required" });
  }

  next();
};

module.exports = {
  validateData,
};
