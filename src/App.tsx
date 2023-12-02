
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
// import Home from './Pages/Home1'
// import Blogs from './Pages/Homecomponents/Blogs1'
//import { MantineProvider  } from '@mantine/core';
import Home from "./Pages/Home"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';




function App() {
  return (
   <MantineProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>} />
    {/* <Route path='/' element = {<Home/>} />
    <Route path="/blog/:id" element={<Blogs/>} />
    */}
   </Routes>
   </BrowserRouter>
    </MantineProvider>
   
    
  )
}

export default App
