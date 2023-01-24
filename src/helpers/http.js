const HttpHelper = module.exports

HttpHelper.response = (data, status, message) => {
  return {
    data,
    status,
    message
  }
}

HttpHelper.successResponse = (res, status, message, data) => {
  return res.status(status).json(HttpHelper.response(data, status, message))
}

HttpHelper.errorResponse = (res, status, message, error) => {
  return res.status(status).json(HttpHelper.response(error, status, message))
}
