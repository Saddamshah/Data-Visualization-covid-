const  connect = require('connect');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 3030
connect()
    .use(serveStatic(__dirname))
    .listen(PORT, () => console.log(`Server running on ${PORT}...`));
