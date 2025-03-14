// Routes pour tester les fonctionnalités de sécurité
const express = require('express');
const router = express.Router();
const { unauthorizedAccess, insufficientPrivileges, adminAccess, expiredSession } = require('../security-stubs/backend/authStub');
const { validInput, detectInjection } = require('../security-stubs/backend/validationStub');

// Route pour tester l'accès non autorisé
router.get('/test/unauthorized', unauthorizedAccess, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
  res.json({ message: 'You have access to this resource', user: req.user });
});

// Route pour tester les privilèges insuffisants
router.get('/test/insufficient-privileges', insufficientPrivileges, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Insufficient privileges' });
  }
  res.json({ message: 'You have admin access', user: req.user });
});

// Route pour tester la validation des entrées
router.post('/test/input-validation', detectInjection, (req, res) => {
  // Cette route est protégée par le middleware detectInjection
  res.json({ message: 'Input validated successfully', data: req.body });
});

// Route pour tester l'expiration de session
router.get('/test/expired-session', expiredSession, (req, res) => {
  // Cette route ne sera jamais atteinte car le middleware expiredSession répond toujours
  res.json({ message: 'This should never be reached' });
});

module.exports = router;