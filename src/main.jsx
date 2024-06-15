import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Router> */}
  </React.StrictMode>
)


// Log environment info
console.log('Environment Mode:', import.meta.env.MODE);

// Root element check
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}