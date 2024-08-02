module.exports = (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Home</title>
          <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="/contact">Contact Us</a></li>
              </ul>
          </nav>
          <div class="container">
              <h1>Welcome to Our Home Page</h1>
              <p>Experience the best services we offer, uniquely tailored for you.</p>
          </div>
      </body>
      </html>
    `);
};
