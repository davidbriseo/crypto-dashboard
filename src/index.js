import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginPage from './LoginPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<App />}/>
        <Route path="/" element={<LoginPage />}/>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
