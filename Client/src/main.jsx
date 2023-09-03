// This code serves as the entry point of the React application.
import React from 'react'   // Importing the React library
import ReactDOM from 'react-dom/client'   // Importing the ReactDOM library
import App from './App.jsx' // Importing the main App component
import './index.css'   // Importing the associated CSS styles

// Rendering the App component into the root element of the HTML document
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
