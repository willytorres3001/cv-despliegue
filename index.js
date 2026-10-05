const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/perfil', (req, res) => {
  res.json({
    nombre: 'Willy Torres',
    carrera: 'Desarrollo de Software - Tecsup',
    ciclo: 'IV',
    github: 'https://github.com/willytorres3001',
    tecnologias: ['Node.js', 'Spring Boot', 'Django', 'Android', 'Docker']
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});