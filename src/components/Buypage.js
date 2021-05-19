import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import{random,commerce} from 'faker';
import{Container,Col,Row} from 'reactstrap';
import CardItem from './CardItem';


const apiKey="INSET_YOUR_KEY_HERE";
const localUrl="http://myjson.dit.upm.es/api/bins/14sh";

const Buypage=({addInCart})=>{
   const [product,setProduct]=useState([])
   const [loading,setLoading]=useState(true);

   const fetchPhotos=async()=>{
       const {data}=await Axios.get(localUrl);
       setLoading(false);
   const {photos}=data;
   const allProducts=photos.map(photo=>({
       smallImage:photo.src.medium,
       tinyImage:photo.src.tiny,
       productName:random.word(),
       productPrice:commerce.price(),
       id:random.uuid()
   }))
   setProduct(allProducts);
};
   useEffect(()=>{
       fetchPhotos();
   },[])
   return(
       <Container fluid>
           <h1 className="text-success text-center">Buy Page</h1>
           {loading ?(
               <h1>loading...</h1>
           ):(
           <Row>
               {product.map(product=>(
                  <Col md={4} key={product.id}>
                      <CardItem product={product} addInCart={addInCart}/>
                  </Col>
               ))}
           </Row>)}
       </Container>
   )
}

export default Buypage;