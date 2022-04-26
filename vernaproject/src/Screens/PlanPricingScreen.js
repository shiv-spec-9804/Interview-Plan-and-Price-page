
import Cardletter from '../Component/Cardletter';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {Row,Col} from 'react-bootstrap';
function PlanPricingScreen(){
    
    const url ="http://demo3755793.mockable.io/plans";
    const [products,setProduct] = useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
             try{
                const result =await Axios.get(url);
                setProduct(result.data);
             }
             catch(err)
             {
                 alert(`Oops problem with fetching the data ${err.message}`);
             }
        }

        fetchData();
    },[]);

    return(
        <div>
            <h4 class="text-center mb-5 mt-5"><b>Buy a plan and be interview ready!</b></h4>
             <div className="products">
                 <Row>
                     {
                        products.map((product)=>
                        (

                            <Col key={product.planId} sm={8} md={4} lg={3} className="mb-3">
                                 <Cardletter product={product} offcolor={product.offerColor} backcolor={product.backgroundColor} />
                            </Col>
                        ))
                     }
                 </Row>
                
             </div>
        </div>
    );

}
export default PlanPricingScreen;