module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc40a80d5d03cad3caafcf07cc112fb3'),
  },
});
