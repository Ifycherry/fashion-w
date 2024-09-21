
import React from 'react'
import image1 from '../Picture/image1.jpg'
import facebook from '../Picture/facebook.png'
import whatsapp from '../Picture/whatsapp.png'
import instagram from '../Picture/instagram.png'

export default function Footer() {
  return (
     <div>
    <div className='snow'>
    <div className='snow1'>
    <div>
      <img src={image1} alt="image1" width={180} />  
    </div> 
    <div className='snow2'> 
      <a href="https://www.facebook.com" target = "_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
      <a href="https://whatsapp"><img src={whatsapp} width={20} alt="whatsapp" /></a>
      <a href="https://instagram"><img src={instagram} alt="instagram" /></a>
    </div>
    </div>
    <div className='snow3'>
      <h2>Services</h2>
      <li>S.E.O. COPYWRITING</li>
      <li id='dep'>CREATIVE SERVICE</li>
      <li id='dep1'>MORABLE DESIGN</li>
      <li id='dep2'>SKILL ORIENTED</li>
    </div>
    <div className='snow4'>
      <h2>Info</h2>
      <li>ABOUT US</li>
      <li id='dep3'>SERVICE</li>
      <li id='dep4'>CONTACT US</li>
      <li id='dep5'>HOME</li>
    </div>
    <div className='snow5'>
      <h2>Free Download</h2>
      <p>Growing your business into a strong brand doesn't have<br/> to be complicated. We make implementing a real<br/> marketing strategy into your website and business easy!</p>
      <h5>Download our Free Brand Board</h5>
      </div>
      </div>
    <nav className= 'snow6'>
      <p>© 2023 Mark Brand Boutique</p>
    </nav>
    </div>
    
  )
}
