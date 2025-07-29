import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import AllServicePage from './pages/Services/AllServicePage'

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<AllServicePage/>}/>
   </Routes>
    </>
  )
}

export default App
