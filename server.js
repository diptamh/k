const httpServer = require('http-server');
const PORT = process.env.PORT || 8080;

const server = httpServer.createServer({ root: '.' });
server.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
