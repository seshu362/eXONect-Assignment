# Country, State, and City Management Application


This is a **React JS** application that allows users to manage a hierarchical structure of **countries, states, and cities**. Users can add, edit, and delete countries, states, and cities with a simple and intuitive user interface. The application is built without using any external libraries or npm packages, making it lightweight and easy to understand.

---

## Features

1. **Country Management**:
   - Add a new country.
   - Edit an existing country's name.
   - Delete a country (including all associated states and cities).

2. **State Management**:
   - Add a new state to a specific country.
   - Edit an existing state's name.
   - Delete a state (including all associated cities).

3. **City Management**:
   - Add a new city to a specific state.
   - Delete a city.

4. **Confirmation Dialogs**:
   - Confirmation alerts are shown before deleting or updating any entity.

5. **Modern UI**:
   - Clean and responsive design with hover effects, gradients, and smooth animations.

---

## Technologies Used

- **React JS**: For building the component-based user interface.
- **JavaScript (ES6)**: For handling state management, event handling, and data manipulation.
- **CSS**: For styling the application with modern and responsive designs.

---

## Folder Structure
```
  src/
  ├── components/
  │   ├── CountryList/
  │   │   ├── index.js
  │   │   ├── index.css
  │   ├── StateList/
  │   │   ├── index.js
  │   │   ├── index.css
  │   ├── CityList/
  │   │   ├── index.js
  │   │   ├── index.css
  ├── App.js
  ├── App.css
  ├── index.js
  ├── index.css
```

---

## Setup and Installation

1. **Install Dependencies**:
```
  npm install
```
2. **Install Dependencies**:
```
  npm start
```
3. **Open in Browser**:
```
  The application will open automatically in your default browser at http://localhost:3000.
```

---

## How to Use

### Add a Country:
1. Click the **"Add Country"** button.
2. Enter the name of the country in the prompt.

### Add a State:
1. Click the **"Add State"** button under a specific country.
2. Enter the name of the state in the prompt.

### Add a City:
1. Click the **"Add City"** button under a specific state.
2. Enter the name of the city in the prompt.

### Edit or Delete:
- Use the **Edit** or **Delete** buttons next to each country, state, or city to modify or remove them.

---
