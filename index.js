require('dotenv').config()

const server = require('./api/server.js');

const port = process.env.PORT || 4000

// console.log(process.env)

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
