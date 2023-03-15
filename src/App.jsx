import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <ItemListContainer greeting={'Mesaje de Greetings'} />
    </>
      
  )
}

export default App
