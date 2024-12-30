
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
