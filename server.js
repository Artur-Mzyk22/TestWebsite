const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the base directory for static files
  const staticDir = path.join(__dirname, 'images');

  // If the request is for the root URL, serve the HTML file
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  // If the request is for an image, serve the image file
  else if (req.url.startsWith('/images/')) {
    const imagePath = path.join(staticDir, req.url.split('/images/')[1]);
    
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Image not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'image/jpeg' });  // Assuming it's a JPEG
      res.end(data);
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
