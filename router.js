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
    var map = {};
    files.forEach((file, index) => {

        var first = file.indexOf('/');
        var last = file.lastIndexOf('.');
        var key = file.substring(first, last);
        var tmp = key.substring(key.length - 5);
        if (tmp === 'index') {
            key = key.substring(0, key.length - 6);
        }
        map[key] = './' + file;
        router.use(key, require(map[key]));
    });
    console.log(map);
});

module.exports = router;