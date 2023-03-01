const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Express is working',
  });
});

module.exports = { route: router, name: 'user' };
