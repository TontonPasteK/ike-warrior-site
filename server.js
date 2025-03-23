// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON (utile si vous faites des requêtes POST/PUT)
app.use(express.json());

// Route d’accueil
app.get('/', (req, res) => {
  res.send('Hello from Ike Warrior Backend!');
});

// Route d’exemple
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Bonjour depuis le backend Ike Warrior!' });
});

// Nouvelle route /api/register
app.get('/api/register', (req, res) => {
  const ref = req.query.ref;
  if (!ref) {
    return res.status(400).json({ error: 'Paramètre ?ref= requis' });
  }
  // Ici, placez la logique d’affiliation, de comptage, etc.
  return res.json({ message: `Référence ${ref} enregistrée` });
});

// Écoute du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
