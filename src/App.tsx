import './App.css'
import Auth from './pages/auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  // 2:47
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Auth />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
