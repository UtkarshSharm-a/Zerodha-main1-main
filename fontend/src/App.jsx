
import Homepage from "./landing-page/home/HomePage"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./landing-page/sign-up/Signup"
import AboutPage from "./landing-page/about/AboutPage"
import ProductPage from "./landing-page/product/ProductPage"
import SupportPage from "./landing-page/support/SupportPage"
import PricingPage from "./landing-page/pricing/PricingPage"
import Navbar from "./landing-page/Navbar"
import Fotter from "./landing-page/Fotter"
import Notfound from "./landing-page/Notfound"
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/product" element={<ProductPage></ProductPage>}></Route>
      <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
      <Route path="/support" element={<SupportPage></SupportPage>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>


    </Routes>
          <Fotter></Fotter>
    
    </BrowserRouter>
    <Toaster></Toaster>
    </>
  )
}

export default App
