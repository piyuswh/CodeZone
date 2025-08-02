const mongoose = require('mongoose');
const express=require("express")
const router=express.Router()
const code=require('../Models/code')

router.get('/history/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const code = await Code.findById(id);
        if (!code) {
            return res.status(404).json({ error: 'Code not found' });
        }
        res.json(code);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports=router