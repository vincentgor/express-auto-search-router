/**
 * Created by duoyi on 2016/5/24.
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        msg: '66666'
    })
});

module.exports = router;