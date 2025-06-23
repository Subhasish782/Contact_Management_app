const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');
const Contact = require('../models/Contact');

// GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.session.userId });
    res.render('dashboard', { contacts });
  } catch (err) {
    console.error(err);
    res.redirect('/login');
  }
});

module.exports = router;
