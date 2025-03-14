FROM node:16

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port utilisé par votre application
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]