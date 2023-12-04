const express = require('express');
const path = require('path');
const app = express();

// Configuração para servir arquivos estáticos do Angular
app.use(express.static(path.join(__dirname, 'dist/movus-app')));

// Rota para lidar com todas as outras solicitações
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/movus-app/index.html'));
});

// Use process.env.PORT ou a porta 3000 por padrão
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
