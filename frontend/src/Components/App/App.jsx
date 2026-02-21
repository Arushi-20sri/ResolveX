import { useState } from 'react'
import './App.css'
import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
