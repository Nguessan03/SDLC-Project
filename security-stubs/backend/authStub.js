// ======================= authStub.js - Stub pour simuler différents comportements d'authentification ====================

// Stub pour simuler un utilisateur non authentifié
function unauthorizedAccess(req, res, next) {
    req.user = null; // Aucun utilisateur authentifié
    next();
  }
  
  // Stub pour simuler un utilisateur authentifié mais sans privilèges suffisants
  function insufficientPrivileges(req, res, next) {
    req.user = {
      id: 'test-user-id',
      role: 'user',
      email: 'test@example.com'
    };
    next();
  }
  
  // Stub pour simuler un utilisateur administrateur
  function adminAccess(req, res, next) {
    req.user = {
      id: 'admin-id',
      role: 'admin',
      email: 'admin@example.com'
    };
    next();
  }
  
  // Stub pour simuler une session expirée
  function expiredSession(req, res, next) {
    return res.status(401).json({
      error: 'Token expired',
      code: 'SESSION_EXPIRED'
    });
  }
  
  module.exports = {
    unauthorizedAccess,
    insufficientPrivileges,
    adminAccess,
    expiredSession
  };