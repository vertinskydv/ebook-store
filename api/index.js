const router = require('express').Router();

router.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from express!' });
});

module.exports = router;
