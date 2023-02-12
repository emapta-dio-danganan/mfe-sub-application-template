// Imports
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const AccessValidation = require('./middleware/AccessValidation');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

// Declaration
const app = express();
const PORT = process.env.PORT || 3002;

// Initialization of middleware
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '50mb' })); // support json encoded bodies and limit file size
app.use(express.urlencoded({ extended: true })); // support encoded bodies


// Routes Groupings
app.use('/node/request', require('./routes/Request'));
app.use('/node/auth', require('./routes/Auth'));
app.use('/node/user', AccessValidation, require('./routes/User'));
app.use('/node/utils', require('./routes/Utils'));
app.use('/node/client-management', require('./routes/ClientManagement'));


app.use('/webpack', express.static(path.join(__dirname, '../dist')));


// Start node port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

