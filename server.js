const express = require('express');


const app = express();

const appName = 'movus-app';

const outputPath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputPath));

app.get('/*', (req, res) => {
    res.sendFile(`${outputPath}`);
});


const PORT = process.env.PORT || 3000; // Use a porta fornecida pelo Heroku ou a porta 3000 por padrão
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
