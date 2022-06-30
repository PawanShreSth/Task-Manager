const notFound = (req, res) =>
  res.status(404).send(`" ${req.url} " Route doesnot exist `);

module.exports = notFound;
