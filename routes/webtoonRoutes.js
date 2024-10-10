const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { getAllWebtoons, addWebtoon, getWebtoonById, deleteWebtoonById } = require('../controllers/webtoonController');
const { validateWebtoon } = require('../middleware/validateInput');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/webtoons', getAllWebtoons);
router.post('/webtoons', authenticateToken, validateWebtoon, addWebtoon);
router.get('/webtoons/:id', getWebtoonById);
router.delete('/webtoons/:id', authenticateToken, deleteWebtoonById);

router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // You would typically validate username and password against a database
    if (username === 'testuser' && password === 'password123') {
      // Payload data to include in JWT
      const payload = {
        id: '1234567890', // mock user ID
        username: 'testuser',
        role: 'admin'
      };
  
      // Generate a JWT token
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });

module.exports = router;
