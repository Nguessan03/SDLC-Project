// +++++++++++++++++++  validationStub.js - Stub pour simuler la validation des entrées ++++++++++++++++++++++++++++

// Stub pour simuler une validation réussie
function validInput(req, res, next) {
    req.body = {
      ...req.body,
      validated: true
    };
    next();
  }
  
  // Stub pour simuler l'échec de validation avec injection
  function detectInjection(req, res, next) {
    // Détecter des motifs d'injection
    const input = JSON.stringify(req.body);
    if (input.includes('<script>') || input.includes('$where') || input.includes('--')) {
      return res.status(400).json({
        error: 'Potential injection detected',
        code: 'INVALID_INPUT'
      });
    }
    next();
  }
  
  module.exports = {
    validInput,
    detectInjection
  };