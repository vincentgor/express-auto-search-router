/**
 * Created by duoyi on 2016/5/24.
 */

const express = require('express');

const app = express();

app.use(require('./router'));

app.listen(3000, () => {
    console.log('listening.... 3000');
});