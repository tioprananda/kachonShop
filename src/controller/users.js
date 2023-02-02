// FOLDER CONTROLLER BERFUNGSI UNTUK MENYIMPAN METHOD POST/GET/DLL UNTUK DIKIRIM KE FOLDER ROUTESS

// 9. buat function panggil method get yang akan dipanggil diusers.js
const getAllUsers = ((req,res) => {
     res.json({
        message : `get all users success`,
     });
});

// 10. buat function create method post yang akan dipanggil diusers.js
const createNewUsers = ((req, res) => {
    res.json({
        message : `create new users success`
    })
});

// 11 export data keluar
module.exports = {
    getAllUsers,
    createNewUsers
}

