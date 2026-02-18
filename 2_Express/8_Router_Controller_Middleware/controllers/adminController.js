export const getDashboard = (req, res) => {
  res.send("Admin Dashboard");
};

export const deleteUser = (req, res) => {
  res.send(`User ${req.params.id} deleted`);
};
