const express = require('express');
const router = express.Router();
const Code = require('../Models/code');
const mongoose = require('mongoose');

router.get('/submission/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    const codeDoc = await Code.findById(id);
    if (!codeDoc) {
      return res.status(404).json({ error: 'Code not found' });
    }

    console.log(codeDoc);
    res.json({
      code: codeDoc.code,
      language: codeDoc.language || 'cpp', // fallback if old data
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
