
// import peter from '../Body/peter.jpg' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item=({title,desc,image,imageHeight,price}) =>{
  return (
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={image} style={{height:'230px'}}/>
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Text>
         <p className='down'>Description: {desc}</p>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content.  */}
        <p className='up'>Price: {price}</p>
        </Card.Text>
        <Button  className='ok' variant="primary">ORDER</Button> 
      </Card.Body>
    </Card>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
  );
}

export default Item;

// import React from 'react'

// import React from'react'
// import {product} from './product'

// const item=()=>{
//     return (
//       <select className='py-4 container'>
//         <div className='row justify-content-center'>
           

//            {product.product.map((item,index)=>{
//             return(
//               <div className='col-11 col-md col-lg-3 mx-0 mb-4'>
//              <div className='card p-0 overflow-hidden h-100 shadow'>
//                 <img src={item.img}className="card-img-top"alt=''/>
//                   <div className='card-body'>
//                      <h5 className='card-title'>{item.title}</h5>
//                      <p className='card-text'>{item.desc}</p>
//                   </div>
//              </div>
//           </div>
//             )
//            })}

//         </div>
//       </select>
//     )
  
// }

// export default item
