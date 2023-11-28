import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App text="سبحان الله" limit={33} />
    <App text="الحمد لله" limit={33} />
    <App text="الله أكبر" limit={34} />
  </React.StrictMode>,
)
