// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Stockage en mémoire pour les affiliés
const affiliates = {};

// Endpoint pour enregistrer une référence d'affiliation
app.get('/api/register', (req, res) => {
  const ref = req.query.ref;
  if (!ref) {
    return res.status(400).json({ error: 'Le paramètre ref est requis' });
  }
  
  // Incrémente ou initialise le compteur pour cet affilié
  if (!affiliates[ref]) {
    affiliates[ref] = { count: 1, createdAt: new Date() };
  } else {
    affiliates[ref].count += 1;
  }
  console.log(`Référence ${ref} enregistrée, total: ${affiliates[ref].count}`);
  return res.json({ message: `Référence ${ref} enregistrée`, count: affiliates[ref].count });
});

// Endpoint pour récupérer les statistiques globales
app.get('/api/stats', (req, res) => {
  let totalAffiliates = Object.keys(affiliates).length;
  let totalFilleuls = 0;
  Object.values(affiliates).forEach(aff => totalFilleuls += aff.count);

  return res.json({
    totalAffiliates,
    totalFilleuls,
    affiliates
  });
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});

