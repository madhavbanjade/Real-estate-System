//this error handler is used when those kinds of condition occurs when we need to pass the error..
export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
