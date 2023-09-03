import { Route, Routes } from '../node_modules/react-router-dom/dist/index'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'


function App() {
 

  return (
    <>
<Routes>
  <Route path = '/' element = {<SignupPage/>}></Route>
  <Route path = '/LoginPage' element = {<LoginPage/>}></Route>
  <Route path = '/Home' element = {<HomePage/>}></Route>
</Routes>
    </>
  )
}

export default App
