import {product} from './product';
import Item from './item';
export default function Content() {
  return (
    
    <nav className='first'>
        <h1>DESIGN SHOWCASE</h1>
        <p className='first-first'>
        Discover our design showcase, where real-life projects come alive with<br/> heartwarming creativity and real marketing strategy, propelling our clients' brands<br/> to new heights!
        </p>
    
        {/* <div className='d-flex justify-content-between flex-wrap row gap-5 p-2 mb-3'> */}
        
          <div className='dont'> 
            
          { product.map((value)=>{
           return <Item title ={value.name} image={value.image} desc={value.desc} imageHeight={value.imageH} price={value.price}/>
            
})  
          }
            
          </div>
           
         
      </nav> 
    

  )
}
  
  



