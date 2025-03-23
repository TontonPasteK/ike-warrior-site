// server.js
const express = require('express');
const cors = require('cors'); // <-- Import du package cors
const app = express();
const port = process.env.PORT || 3000;

// Active le middleware cors pour toutes les requêtes
// Par défaut, cors() autorise toutes les origines (Access-Control-Allow-Origin: *)
app.use(cors());

// Middleware pour parser le JSON (utile si vous traitez des requêtes POST)
app.use(express.json());

// Route d’accueil
app.get('/', (req, res) => {
  res.send('Hello from Ike Warrior Backend!');
});

// Exemple d'endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Bonjour depuis le backend Ike Warrior!' });
});

// Autre exemple : /api/register
app.get('/api/register', (req, res) => {
  const ref = req.query.ref;
  if (!ref) {
    return res.status(400).json({ error: 'Paramètre ?ref= requis' });
  }
  // Logique d’affiliation, etc.
  return res.json({ message: `Référence ${ref} enregistrée` });
});

// Écoute du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
