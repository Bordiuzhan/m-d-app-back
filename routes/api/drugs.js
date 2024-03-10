const express = require('express');
const router = express.Router();

const {getAll, getById} = require('../../controllers/drugs');

router.get('/', getAll);

module.exports = router;



