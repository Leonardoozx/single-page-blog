require('dotenv').config();
const app = require('./app');


const PORT = process.env.PGPORT;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
