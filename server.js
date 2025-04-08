const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the base directory for static files
  const staticDir = path.join(__dirname, 'images');
  
  // Serve the main page (index.html)
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
  
  // Serve the price list page (price-list.html)
  else if (req.url === '/prices.html') {
    const filePath = path.join(__dirname, 'prices.html');
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
  // Serve image files
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
    console.log(req.url);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
