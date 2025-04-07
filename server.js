const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://pbs.twimg.com/media/Gn5h0zgXMAAeEsd?format=jpg&name=medium" />
        <meta property="fc:frame:button:1" content="Join the Crash!" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://t.co/XI5fuvvOWJ" />
      </head>
      <body>
        <p>Crashito Frame</p>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});