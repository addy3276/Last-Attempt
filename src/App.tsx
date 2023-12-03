
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from "./Pages/Home"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Registratinsuccess from './Pages/Registratinsuccess';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';


function App() {
  return (
   <MantineProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/' element = {<Home/>} />
    <Route path='/registration' element = {<Register/>} />
    <Route path='/registered' element = {<Registratinsuccess/>} />
    <Route path='/dashboard' element = {<Dashboard/>} />
   </Routes>
   </BrowserRouter>
    </MantineProvider>
   
    
  )
}

export default App
