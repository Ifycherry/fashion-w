
import 'bootstrap/dist/css/bootstrap.min.css';
// import Narbar from './Component/Narbar';
import  './App.css';
import { Routes, Route} from "react-router-dom";
import Service from './Component/Service'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'

export default function App () {
  
  return (
     
    
    
      <>
      {/* <Narbar /> */}
         <Routes>
          
           <Route path="/" element={<Home />} />
           <Route path="/service" element={<Service />} />
           <Route path="/contactus" element={<Contact />} />
           <Route path="/aboutus"  element={<About />} /> 
        </Routes>
    
  
        
        
        {/* <Center /> 
      
        
        <Content />
        
      
        
          <Conset />
        
      
        <Context />
        
        
          <Footer /> */}
        

  
    
  </>

  )
}



