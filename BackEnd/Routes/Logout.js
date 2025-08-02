const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'Lax', 
    secure: process.env.NODE_ENV === 'production', 
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
