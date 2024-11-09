const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router({
   penawaran: require("./datas/penawaran.json"),
   paket_harian: require("./datas/paket_harian.json"),
   users: require('./datas/users.json'),
   paket_harian_telponan: require('./datas/paket_harian_telponan.json'),
   paket_bulanan: require('./datas/paket_bulanan.json'),
   paket_mingguan: require('./datas/paket_mingguan.json')
});
const middlewares = jsonServer.defaults();

server.use(middlewares);


server.use(jsonServer.rewriter({
   "/penawaran": "/penawaran",
   "/paket_harian": "/paket_harian",
   "/users": "/users",
   "/paket_harian_telponan": "/paket_harian_telponan",
   "/paket_bulanan": "/paket_bulanan",
   "/paket_mingguan": "/paket_mingguan"
}));

server.use(router);


const PORT = 8888;
server.listen(PORT, () => {
   console.log(`JSON Server is running on port ${PORT}`);
});
