
import './App.css'

import Index from './pages/Index'
import Home from "./pages/Home"
import ContextProvider from './context/PresContext'


function App() {
  return (
    <ContextProvider>
   


      <Index />
      <Home />
    </ContextProvider>
  )
}

export default App
