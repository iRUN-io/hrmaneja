class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
