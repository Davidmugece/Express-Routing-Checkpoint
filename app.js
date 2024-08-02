const express = require('express');
const path = require('path');
const app = express();

// Middleware to check working hours
const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
};

// Apply the middleware
app.use(checkWorkingHours);

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Import view functions
const home = require('./views/home');
const services = require('./views/services');
const contact = require('./views/contact');

// Routes
app.get('/', home);
app.get('/services', services);
app.get('/contact', contact);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
