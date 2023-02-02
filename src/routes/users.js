// FOLDER ROUTES BERFUNGSI UNTUK MENYIMPAN FUNCTION ROUTES HALAMAN

// 6. panggil library routes pada express.js
const express = require('express');
const router = express.Router();

// 12. panggil function users.js di controller
const UsersController = require('../controller/users.js');

// 4. method get
    // 12.1 panggil method getAullUsers di usersCOntroller
router.get('/', UsersController.getAllUsers);

// 5. method post
    // 12.2 panggil method createNewUsers di usersCOntroller
router.post('/', UsersController.createNewUsers);

module.exports = router;