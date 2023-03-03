import { useState } from 'react'
import './App.css'
import Cookie from './components/cookie'
import TitlePrincipal from './components/TitlePrincipal'
import phrases from './data/phrases.json'



function App() {

  const bgImage = ["url(/fondos/fond1.jpg)", "url(/fondos/fond2.jpg)", "url(/fondos/fond3.jpg)", "url(/fondos/fond4.jpg)"]
   
  const changeBackground = Math.floor(Math.random()*4)


  const [ index, setIndex ] = useState(0)
  
  const changeFortune = () => {
    setIndex(Math.floor(Math.random()*15))
    }

     return (
     <div className="App" style={{backgroundImage: (bgImage[changeBackground])}}>

     < TitlePrincipal />
     
     <Cookie fortuneData = { phrases[index] } />
     
     <button onClick = {changeFortune}>Test my fortune</button>

    </div>
  )
}

export default App
