import Response from '../helpers/response';

const response = new Response();

const permit = (...permitted) => (req, res, next) => {
  const { user } = req;
  if (permitted.indexOf(user.role) !== -1) {
    return next();
  }
  response.setError(403, 'Access denied!');
  return response.send(res);
};

export default permit;
