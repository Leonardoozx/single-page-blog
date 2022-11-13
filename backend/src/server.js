require('dotenv').config();
const app = require('./app');

const PORT = process.env.PGPORT || 3001;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
