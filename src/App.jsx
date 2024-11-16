import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dasboard from './pages/Dasboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Dasboard/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>


    </Routes>
    </>
  )
}

export default App