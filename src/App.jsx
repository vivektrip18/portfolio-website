
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { About } from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='scroll-container'>
          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<About />} path='/about' />

          </Routes>

        </div>

      </BrowserRouter>
    </>
  )
}

export default App
