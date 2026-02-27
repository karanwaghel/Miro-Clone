import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './ComponentProject/AuthContext/Auth'

createRoot(document.getElementById('root')).render(
<AuthProvider>
    <App />
</AuthProvider>

)
