# 🧮 Ma Calculatrice

Ce projet consiste en le développement d’une **calculatrice graphique** capable d’effectuer des opérations de base (addition, soustraction, multiplication), avec une fonctionnalité d’historique et une couverture complète en tests unitaires et E2E.
Il a été entièrement développé en **TDD (Test Driven Development)**.

## 💡 Fonctionnalités
- ✅ Addition, soustraction, multiplication
- ✅ Interface graphique interactive
- ✅ Historique des calculs
- ✅ Réutilisation d’un résultat précédent
- ✅ Suppression de l’historique

## 🧱 Architecture

| Composant               | Description                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| **Logique métier**      | Gestion des calculs et de l’historique. Entièrement testée unitairement.                              |
| **Interface graphique** | Permet à l’utilisateur d’entrer les valeurs, d’afficher les résultats et l’historique. Testée en E2E. |


## 🧪 Méthodologie de développement
Le développement a été mené **entièrement en TDD** (Test Driven Development), selon la séquence :

1. Écriture d’un test (unitaire ou e2e)
2. Implémentation du code minimal pour le faire passer
3. Refactoring si nécessaire

## 🔬 Tests

| Type de test  | Outil utilisé         | Cible                                |
| ------------- | --------------------- | ------------------------------------ |
| **Unitaires** | Jest / Vitest         | Logique métier (calculs, historique) |
| **E2E**       | Playwright            | Interface utilisateur (UI complète)  |

## 🧹 Qualité du code
Le projet intègre un **linter** (ESLint) afin de garantir une base de code propre et homogène.
`npm run lint`

## 🚀 Lancement du projet
**1. Installation des dépendances**
`npm install`

**2. Lancement de l'application**
`npm run dev`

## 📦 Stack utilisée
- **Framework UI** : React
- **Tests unitaires** : Jest / Vitest
- **Tests E2E** : Playwright
- **Linting** : ESLint






