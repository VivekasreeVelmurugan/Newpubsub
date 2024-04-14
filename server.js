const express = require('express');
const bodyParser = require('body-parser');
const pubInfoApi = require('./pubInfoApi');
const subInfoApi=require('./subInfoApi');
const app = express();
app.use(bodyParser.json());
app.use('/api/pub', pubInfoApi);
app.use('/api/sub', subInfoApi);
const PORT =2806;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
