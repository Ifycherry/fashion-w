
import React from 'react'
import fashion1 from '../Picture/fashion1.jpg'

export default function Conset() {
  return (
    <div className='sure'>
      <div className='sure1'>
    <h2>Ten years of fashion design<br/> expertise with over 500+<br/> happy clients served</h2>
    <p>Mark Brand Boutique is a trusted design and marketing agency<br/> by over 500 small businesses and entrepreneurs in the last 10 years.<br/>

Our website design and branding portfolio is diverse, but we<br/> frequently serve small businesses in the following industries:
</p>
<div className='sure2'>
<li>Women's dress retail</li>
<li id='cen'>Beauty show</li>
<li id='cen1'>Foreign dress</li>
<li id='cen2'>Wedding vendors</li>
<li id='cen3'>Photographers</li>
<li id='cen4'>Realtors</li>
<li id='cen5'>Coaches</li>
<li id='cen6'>Mentor</li>
</div>
</div>
<div className='sure3'>
<img src={fashion1} alt="fashion1" width={400} height={420} />
</div>
    </div>
  )
}
