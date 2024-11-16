import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dasboard from './pages/Dasboard'
import Taskfrom from './pages/TaskForm'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Dasboard/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/taskform' element={<Taskfrom/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>


    </Routes>
    </>
  )
}

export default App