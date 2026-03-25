import{Routes,Route} from 'react-router-dom'
import Footer from "./Component/Footer/Footer";
import Navbars from "./Component/Header/Header";
import Home from "./Component/Homemenu/Home";
import Contactpage from "./Component/Contactmenu/Contact";
import Feature from './Component/Featuremenu/Feature';
import Pricingsec from './Component/Homemenu/Pricingsec';




function App() {
  return (
    <>
    <Navbars/>
       <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/Contactpage" element={ <Contactpage/>}/>
          <Route path="/Feature" element={<Feature/>}/>
         <Route path="/Pricing" element={<Pricingsec/>}/>
          <Route path="/Footer" element={<Footer/>}/>
       </Routes>
    <i class="bi bi-yin-yang"></i>
    <Footer/>
    </>
  );
}

export default App;
