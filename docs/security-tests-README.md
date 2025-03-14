# Scénarios de Tests de Sécurité

Ce document décrit les scénarios de test de sécurité pour l'application "The Count of Money".

## Authentification

### Scénario 1: Tentative de connexion avec identifiants valides
**Objectif**: Vérifier que les utilisateurs légitimes peuvent se connecter.
**Étapes**:
1. Envoyer une requête POST à /login avec email et mot de passe valides
2. Vérifier le code de statut 200
3. Vérifier que la réponse contient un token JWT valide

### Scénario 2: Tentative de connexion avec identifiants invalides
**Objectif**: Vérifier que l'application rejette les identifiants incorrects.
**Étapes**:
1. Envoyer une requête POST à /login avec email ou mot de passe invalide
2. Vérifier le code de statut 401
3. Vérifier que la réponse contient un message d'erreur

## Gestion des Sessions

### Scénario 3: Accès à une ressource protégée avec token valide
**Objectif**: Vérifier que les utilisateurs authentifiés peuvent accéder aux ressources protégées.
**Étapes**:
1. Se connecter pour obtenir un token valide
2. Envoyer une requête GET à /api/profile avec le token dans l'en-tête Authorization
3. Vérifier le code de statut 200

### Scénario 4: Tentative d'accès avec token expiré
**Objectif**: Vérifier que les tokens expirés sont rejetés.
**Étapes**:
1. Envoyer une requête GET à /api/security-tests/test/expired-session
2. Vérifier le code de statut 401
3. Vérifier que la réponse indique une expiration de token

## Validation des Entrées

### Scénario 5: Tentative d'injection XSS
**Objectif**: Vérifier que l'application détecte et rejette les tentatives d'injection XSS.
**Étapes**:
1. Envoyer une requête POST à /api/security-tests/test/input-validation avec une charge utile contenant du code JavaScript malveillant
2. Vérifier le code de statut 400
3. Vérifier que la réponse indique une détection d'injection

## Comment exécuter les tests

1. Importez la collection Postman `security-tests.postman_collection.json`
2. Importez l'environnement Postman `test-environment.postman_environment.json`
3. Exécutez la collection complète ou des scénarios individuels