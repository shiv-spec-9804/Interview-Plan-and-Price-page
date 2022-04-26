
import {Card,Row,Col,Button} from 'react-bootstrap';
import '../App.css';

import CountdownTimer from './CountdownTimer';
function Cardletter(props){
    
  const {product,offcolor,backcolor} = props;
  
    return(
        <div>
          <Card border="success" className="rounded" style={{ maxWidth: '22rem' }}>
                 <Card.Header>
                 <Row >
                 <h2>FLAT 30% OFF</h2>
                     <Col md={8}>
                     <p>Offer ends in </p>
                     {/* <h6><small>Weekend Plan Booked Within 20 Minutes</small></h6> */}
                     <CountdownTimer/>
                     </Col>
                     <Col md={4}>
                       <div style={{backgroundColor:`${offcolor}`}} className="rounded-circle">
                         {/* <p>100% Booked</p> */}
                         {/* <Progressbar/> */}
                         
                         </div>
                     </Col>
                 </Row>
                 
                 </Card.Header>
                 
               <Card.Body style={{backgroundColor:`${backcolor}`}} >

                   <Card.Title>{product.saver} </Card.Title>
                        <Card.Text>
                            <p><b>{product.heading}</b></p>
                            {
                              product.content.map((cont)=>
                              {
                                return(
                                  <p>&#10004;{cont}</p> 
                                )
                              })
                            }
                            
                           

                           <p class="text-center"><small>{product.suit}</small></p>
                           <p class="text-center" style={{color:"blue"}} >Flat 30% OFF for being referred by Saurabh</p>
                            </Card.Text>
               </Card.Body>
                  <Card.Footer>
                     <Row >
                         
                            <p><b>&#8377;{product.originalPrice} </b>&ensp; <span style={{color:"red"}}><small>Save {product.save}</small>&emsp; &emsp; &emsp;  </span> <span><del><b>&#8377;{product.price}</b></del></span></p>
                            
                         
                         </Row>
                       
                         <Row className="d-grid gap-2">
                        
                         <Button variant="primary" size="lg">Buy Now </Button>
                        
                         </Row>
                  </Card.Footer>
          </Card>
        </div>
    );
}

export default Cardletter;