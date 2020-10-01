exports.notFound = (request, response, next) => {
  response.status(404);
  response.render('not-found');
};

exports.serverError = (error, request, response, next) => {
  response.status(500);
  response.render('server-error', { error })
}