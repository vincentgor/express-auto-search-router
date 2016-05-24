/**
 * Created by duoyi on 2016/5/24.
 */

const express = require('express');
const glob = require('glob');

const router = express.Router();

glob("controllers/**/*.js", (err, files) => {
    if (err) {
        console.log(err);
    }
    let map = new Map();
    files.forEach((file, index) => {

        let first = file.indexOf('/');
        let last = file.lastIndexOf('.');
        let key = file.substring(first, last);
        let tmp = key.substring(key.length - 5);
        if (tmp === 'index') {
            key = key.substring(0, key.length - 5);
        }
        map.set(key, './' + file);
        router.use(key, require(map.get(key)));
    });
    console.log(map);
});

module.exports = router;