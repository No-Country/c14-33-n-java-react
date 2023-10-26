import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Profile } from './pages/Perfil/Profile';
import { WorkPlace } from './pages/LugarDeTrabajo/WorkPlace';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Profile/> */}
    {/* <WorkPlace/> */}
  </React.StrictMode>,
)
