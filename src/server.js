require('dotenv').config();

require('./db/mongoose');

const app = require('./app');

const port = 3333;

app.listen(port, () => {
  console.log(`Server running and listen on port ${port}...`);
});

