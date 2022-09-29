const emailRoutes = require('express').Router();
const res = require('express/lib/response');
const emailModel = require('../models/emailModel');
const EmailModel = require('../models/emailModel');


emailRoutes.post('/', async (req, res) => {
    const email = req.body;
    const newEmail = await emailModel.create(email);
    if (newEmail) {
        res.status(201).json({ status: true, newEmail });
    } else {
        res.status(204).json({ status: false, email: null });
    }
});


emailRoutes.get('/', async (req, res) => {
    const email = req.body;
    const emails = await emailModel.find(email);
    if (emails) {
        res.status(200).json({ status: true, emails });
    } else {
        res.status(404).json({ status: false, emails: null });
    }
});

emailRoutes.get('/:id', async (req, res) => {
    const emailId = req.params.id;
    const emails = await emailModel.findById(emailId);
    if (emails) {
        res.status(200).json({ status: true, emails });
    } else {
        res.status(404).json({ status: false, emails: null });
    }
});

emailRoutes.patch('/:id', async (req, res) => {
    const emailId = req.params.id;
    const newEmail = req.body;
    const email = await emailModel.findByIdAndUpdate(emailId, newEmail, { new: true, runValidators: true });
    if (email) {
        res.status(200).json({ status: true, email });
    } else {
        res.status(400).json({ status: false, email: null });
    }
});

emailRoutes.delete('/:id', async (req, res) => {
    const emailId = req.params.id;
    const email = await emailModel.findByIdAndDelete(emailId);
    if (email) {
        res.status(200).json({ staus: true, email });
    } else {
        res.status(400).json({ status: false, email: null });
    }
});

module.exports = emailRoutes;
