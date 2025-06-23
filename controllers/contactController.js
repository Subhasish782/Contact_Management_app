const Contact = require('../models/Contact');

exports.getDashboard = async (req, res) => {
  const contacts = await Contact.find({ user: req.session.userId });
  res.render('dashboard', { contacts });
};

exports.getAddContact = (req, res) => {
  res.render('contacts/add');
};

exports.postAddContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const contact = new Contact({ name, email, phone, user: req.session.userId });
  await contact.save();
  res.redirect('/dashboard');
};

exports.getEditContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render('contacts/edit', { contact });
};

exports.postEditContact = async (req, res) => {
  const { name, email, phone } = req.body;
  await Contact.findByIdAndUpdate(req.params.id, { name, email, phone });
  res.redirect('/dashboard');
};

exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect('/dashboard');
};