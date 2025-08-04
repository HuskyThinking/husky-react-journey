import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App_01 from './App_01.jsx'
import App_02 from './App_02.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_01/>
  </StrictMode>,
)
