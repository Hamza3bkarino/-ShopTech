import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import NavBar from './Components/Navigation/NavBar'
import Footer from './Components/Footer/Footer'
import Catalogue from './Pages/Catalogue/Catalogue'
import WishList from './Pages/WishList/WishList'
import SideBar from './Components/Sidebar/Sidebar'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <SideBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
          <Route path='/wishlist' element={<WishList/>}/>

        </Routes>
        <Footer/>

      </BrowserRouter>
      
    </>
  )
}

export default App
