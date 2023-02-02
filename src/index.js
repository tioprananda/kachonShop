// INDEX.JS BERFUNGSI SEBAGAI INDEX UTAMA UNTUK MEMANGGIL SELURUH KOMPONEN

// 1. variabel module express
const express = require("express");

// 7. buat variabel user.js yang berisi data routes
const usersRoutes = require("./routes/users.js");

// 13. buat variabel middlewareLogRquest yang berisi data logs
const middlewareLogRquest = require("../src/middleware/logs")

// 2. panggil express
const app = express();

// 14. panggil middlewareLogRequst
app.use(middlewareLogRquest);

// 8. panggil useRoutes
app.use("/users", usersRoutes);

// // rumus :  app.method(path. handler)
// app.use('/', (req, res, next)=> {
//  res.send(`hello world`);
// });

// 3. server berjalan di port 4000
app.listen(4000, () => {
  console.log(`server berjalan`);
});
