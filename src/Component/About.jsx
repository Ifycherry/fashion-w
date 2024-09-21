
// import React from 'react'
import Narbar from './Narbar';
import fashion from '../Picture/fashion.webp'
import aboutimage from '../Picture/aboutimage.png'
import dresses from '../Picture/dresses.jpg'
import icons1 from '../Picture/icons1.png'
import icons2 from '../Picture/icons2.png'
import icons3 from '../Picture/icons3.png'
import icons4 from '../Picture/icons4.png'
import icons5 from '../Picture/icons5.png'
import icons6 from '../Picture/icons6.png'
import Footer from '../Body/Footer'

export default function About() {
  return (
    <>
    <Narbar/>
    <div className='aboutfashion'>
      <img src={fashion} alt="fashion" width={600} height={500} />
         <div className='aboutfashion1'> 
        <h5 id='af'>About Mark Brand Boutique</h5>
        <p id='af1'>Fashion is at the core of who we are and<br /> what we do.</p> 
          
         <p> Rooted in real fashion strategy, so your brand doesn't just<br /> look good, it actually works, like magic.</p>

        <p> If you have ever felt frustrated with your fashion style, you're not<br /> alone. There are a lot of designs out there, to makee<br /> you look good.</p>

         <p>So what makes a designs successful? It's no secret or magic<br /> trick. In fact, it's what all top corporations use to attract and<br /> scale their business...real marketing strategy.</p>

        <p> We use real marketing strategy in all our fashion designs and<br /> branding, so you can feel a successful designs that works.</p>
       </div>   
    </div>
    
    <div className='aboutcenter'>
      <h6>Our talent team</h6>
      <p>
      Meet our powerhouse team at Mark Brand Boutique - talented women, masters in<br /> their craft, dedicated to elevating your brand.
      </p>
    </div>
    <div className='aboutcenter1'>
    <div>
      <img src= {aboutimage} alt="aboutimage" width={200} height={200} />
      <h6>Ngozi</h6>
      <p>Founder of Mark Brand Boutique</p>
    </div>
    <div className='ac'>
      <img src= {aboutimage} alt="aboutimage" width={200} height={200} />
      <h6>Adaora</h6>
      <p>Fashion Designer</p>
    </div>
    <div className='ac1'>
      <img src= {aboutimage} alt="aboutimage" width={200} height={200} />
      <h6>Veronica</h6>
      <p>Fashion Designer</p>
    </div>
    </div>
    <div className='aboutcen'>
    <div className='aboutcenimg'>
      <img src={dresses} alt="dresses" width={530} height={610}/>
    </div>
    <div className='aboutcenhp'>
      <h6>Meet the founder</h6>
      <p id='cen'>
      Elise, founder and designer at Mark Brand<br /> Boutique, is our master small business &<br /> design magician.
      </p>
      <p>
      Elise's journey began in the marketing field. Earning Summa cum<br /> laude with a dual bachelor's degree in Marketing and Business<br /> management, Elise discovered a knack for solving complex<br /> business challenges.
      </p>
      <p>
     Despite early success in marketing, Elise yearned to pursue<br /> something more. Always doodling, creating, and designing; Elise<br /> knew her true passion was waiting outside the<br /> bounds of the corporate mold. In 2016, Elise jumped head first into<br /> entrepreneurship and never looked back.
     </p>
     <p>
    Today, Elise is a master marketing magician, blending the right<br /> amount of business strategy and heart-filled design to create<br /> bold, thriving brands for small businesses.
    </p>
    <p>
    Outside of her business, Elise is a mil-spouse and mom to two<br /> kids. A proud momma to a child with Down Syndrome, Elise is<br ></br> deeply committed to supporting marginalized groups and<br /> building an inclusive world, especially online. Learn more about<br /> our commitment to accessibility.
      </p>
    </div>
    </div>
    <div className='con'>
      <h6>Boutique studio with big impact</h6>
      <p>
      Discover the Mark Brand Boutique difference! We're your one-stop solution for<br /> impactful branding, exceptional design, and personalized marketing strategies<br /> that deliver outstanding results.
      </p>
    </div>
    <div className='Icon'>
      <div className='Icon1'>
        <img src= {icons1}alt="icons1" />
        <h5>Real strategy = real results</h5>
        <p>
        We don't just create pretty designs; we<br /> implement effective marketing strategies<br /> tailored to your needs, delivering tangible<br /> results and boosting your brand's <br />performance.
        </p>
      </div>
      <div className='Icon2'>
        <img src= {icons2}alt="icons2" />
        <h5>Supportive & encouraging</h5>
        <p>
        At Mark Brand Boutique, we genuinely care<br /> about your success. We listen, empathize, and<br /> work with you to create a brand identity that<br /> reflects your vision and values.
        </p>
      </div>
      <div className='Icon3'>
        <img src= {icons3}alt="icons3" />
        <h5>Full-service offering</h5>
        <p>
        Say goodbye to juggling multiple agencies!<br /> Our full-service studio offers you complete<br /> peace of mind as we handle every aspect of <br />the project, from concept to completion,<br /> ensuring a seamless and stress-free<br /> experience.
        </p>
      </div>
    </div>
    <div className='ICON'>
    <div className='ICON4'>
        <img src= {icons4}alt="icons4" />
        <h5>Marketing mentorship</h5>
        <p>
        Your project doesn't end with a great design <br /> we go the extra mile by providing valuable <br />marketing mentorship. Gain insights into<br /> pricing strategies, promotion ideas, and more <br /> all to help your brand shine!
        </p>
      </div>
    <div className='ICON5'>
        <img src= {icons5}alt="icons5" />
        <h5>One-on-one support</h5>
        <p>
        We believe in personalization, and that's why<br /> we offer a one-on-one, hands-on approach.<br /> This allows us to truly understand your vision<br /> and create an enjoyable, comforting<br /> experience that leaves you feeling supported<br /> every step of the way.
        </p>
      </div>
    <div className='ICON6'>
        <img src= {icons6}alt="icons6" />
        <h5>Marketing mentorship</h5>
        <p>
        Your project doesn't end with a great design <br /> we go the extra mile by providing valuable <br />marketing mentorship. Gain insights into<br /> pricing strategies, promotion ideas, and more<br /> all to help your brand shine!
        </p>
      </div>
    </div>
    <div className='IConhp'>
       <h2>Over 1 billion people have difficulty<br /> accessing fashion.
       </h2>
       <p>
       Fashion accessibility and inclusion are not just a matter of compliance, but a matter of<br /> kindness, respect, and human dignity! Mark Brand Boutique is committed to<br /> creating a culture of empathy, understanding, and support.
       </p>
    </div>
    <Footer />
    </>
    
  )
}
