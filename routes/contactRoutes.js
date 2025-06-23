const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { ensureAuth } = require('../middleware/auth');

router.get('/dashboard', ensureAuth, contactController.getDashboard);
router.get('/add', ensureAuth, contactController.getAddContact);
router.post('/add', ensureAuth, contactController.postAddContact);
router.get('/edit/:id', ensureAuth, contactController.getEditContact);
router.post('/edit/:id', ensureAuth, contactController.postEditContact);
router.get('/delete/:id', ensureAuth, contactController.deleteContact);

module.exports = router;