
import './App.css'
import Index from './pages/Index'
import ContextProvider from './context/PresContext'


function App() {
  return (
    <ContextProvider>
      <Index />
    </ContextProvider>
  )
}

export default App
