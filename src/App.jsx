
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='scroll-container'>
          <Routes>
            <Route element={<HomePage />} path='/' />
          </Routes>

        </div>

      </BrowserRouter>
    </>
  )
}

export default App
