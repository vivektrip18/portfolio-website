
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Projects } from './pages/Projects'
import { About } from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path='/'/>
          <Route element={<Projects/>} path='/projects'/>
          <Route element={<About/>} path='/about'/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
