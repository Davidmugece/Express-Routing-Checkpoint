module.exports = (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Our Services</title>
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
              <h1>Our Services</h1>
              <p>We provide a wide range of services to meet your needs.</p>
              <ul>
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
              </ul>
          </div>
      </body>
      </html>
    `);
};
