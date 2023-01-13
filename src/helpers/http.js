const HttpHelper = module.exports

HttpHelper.response = (data, status, message) => {
  return {
    data,
    status,
    message
  }
}
