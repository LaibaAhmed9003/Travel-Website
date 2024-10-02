import './App.css'
import Header from './Components/Header/Header'
import Memories from './Components/Memories/Memories'
import Nav from './Components/Nav/Nav'
import Search from './Components/Searches/Search'
import Trips from './Components/Trips/Trips'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
      <div className='main'>
        <Nav />
        <Header />
        <Memories />

      </div>
      <Trips />

      <Search />

      <Footer />


    </>
  )


}
export default App
