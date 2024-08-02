module.exports = (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Contact Us</title>
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
              <h1>Contact Us</h1>
              <p>If you have any questions, feel free to reach out to us!</p>
              <form>
                  <label for="name">Name:</label><br>
                  <input type="text" id="name" name="name"><br><br>
                  <label for="email">Email:</label><br>
                  <input type="email" id="email" name="email"><br><br>
                  <label for="message">Message:</label><br>
                  <textarea id="message" name="message"></textarea><br><br>
                  <input type="submit" value="Submit">
              </form>
          </div>
      </body>
      </html>
    `);
};
