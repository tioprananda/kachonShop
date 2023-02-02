// FOLDER MIDLEWARE BERFUNGSI SEBAGAI JEMBATAN UNTUK MENYIMPAN DATA LOGS PROGRAM YG TERJADI

// 15. buat function logrequest yang berisi informasi peristiwa apa saja yang berjalan di program
const logRequest = ((req, res, next) => {
    console.log(`terjadi request ke path :`, req.path)
    // 15.1 next berfungsi apabila proses midleware selesai maka akan lanjut ke proses yang lain
    next();
})

// 16. export logrequest
module.exports = logRequest;