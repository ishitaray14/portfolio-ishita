const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
  console.log('Database: db.json');
  console.log('View contacts: http://localhost:' + PORT + '/contacts');
});