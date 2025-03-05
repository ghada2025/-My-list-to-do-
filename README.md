# To-Do List App

Cette application est une simple To-Do List développée en React avec TypeScript. Elle permet d'ajouter, modifier, supprimer et cocher des tâches. Les tâches sont également enregistrées dans le `localStorage` pour une persistance des données.

## Prérequis

Avant d'exécuter cette application, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 

## Installation

1. Clonez ce dépôt :
   ```sh
   git clone https://github.com/ghada2025/Checkpoint_Manage_State.git
   ```
2. Accédez au dossier du projet :
   ```sh
   cd To-Do-List
   ```
3. Installez les dépendances :
   ```sh
   npm install
   ```

## Exécution de l'application

Pour exécuter l'application en mode développement, utilisez la commande :
```sh
npm run dev
```

L'application sera disponible à l'adresse `http://localhost:5173/` (ou un autre port si 5173 est occupé).

## Fonctionnalités
- Ajouter une tâche
- Supprimer une tâche
- Modifier une tâche
- Marquer une tâche comme terminée
- Trier les tâches (les tâches terminées sont placées en bas)
- Sauvegarde des tâches dans le `localStorage`

## Structure du projet

```
.
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskList.tsx
│   │   ├── Checkbox.tsx
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css 
├── public/
├── package.json
├── tsconfig.json
├── README.md
```

## Technologies utilisées
- React avec TypeScript
- CSS pour le style
- LocalStorage pour la persistance des tâches

## Auteur
Développé par KHENIENE Ghada.


