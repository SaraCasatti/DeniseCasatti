import { useState } from 'react'
import './App.css'
import AppRoutes from './AppRoutes'
import NavBar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

 return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App
