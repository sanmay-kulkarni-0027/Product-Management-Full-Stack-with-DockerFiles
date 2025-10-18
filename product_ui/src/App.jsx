import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Routes ,Route} from 'react-router-dom'
import AddProduct from './component/AddProduct'
import Home from './component/Home'
import EditProduct from './component/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addProduct" element={<AddProduct/>}></Route>
        <Route path="/editProduct/:id" element={<EditProduct />} />
      </Routes>
    </div>
    
  )
}

export default App
