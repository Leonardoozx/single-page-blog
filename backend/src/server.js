require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 7248;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
