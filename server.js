const http = require('http');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Hello World Website</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    table { border-collapse: collapse; width: 50%; margin-top: 20px; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
    input { padding: 5px; margin-right: 10px; }
    button { padding: 5px 10px; }
    #result { margin-top: 10px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <img src="https://via.placeholder.com/300" alt="Placeholder Image" />

  <h2>Sample Table</h2>
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </table>

  <p>Visit <a href="https://youtube.com" target="_blank">YouTube</a></p>

  <h2>Simple Calculator</h2>
  <input type="number" id="num1" placeholder="Enter number 1" />
  <input type="number" id="num2" placeholder="Enter number 2" />
  <button onclick="calculateSum()">Calculate Sum</button>
  <div id="result"></div>

  <script>
    function calculateSum() {
      const n1 = parseFloat(document.getElementById('num1').value);
      const n2 = parseFloat(document.getElementById('num2').value);
      const result = isNaN(n1) || isNaN(n2) ? 'Please enter valid numbers' : 'Result: ' + (n1 + n2);
      document.getElementById('result').textContent = result;
    }
  </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlContent);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
