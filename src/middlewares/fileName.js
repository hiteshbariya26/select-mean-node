const fileName = (req, res, next) => {
  const url = `${req.protocol}://${req.get('host')}`;
  req.body.documentResume = `${url}/files/resumes/${req.file.filename}`;
  return next();
};

module.exports = {
  fileName,
};
