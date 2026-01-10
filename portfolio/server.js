const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static('./dist/portfolio'));

// Send all requests to index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/portfolio/index.html'));
});

// Start the app by listening on the default port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
