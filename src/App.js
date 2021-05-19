import {useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import Buypage from './components/Buypage';
import {Container,Row,Col}  from 'reactstrap';
import{ToastContainer,toast} from 'react-toastify';
import Cart from './components/Cart';

function App() {
  const [cartItem,setCartItems]=useState([]);
  const addInCart=item=>{
    const isAlreadyAdd=cartItem.findIndex(function(array){
      return array.id===item.id;
    })
   if(isAlreadyAdd !==-1){
     toast("already added in cart",{
       type:"error"
     })
     return;
   }
   setCartItems([...cartItem,item])
  }
  const buyNow=()=>{
    setCartItems([]);
    toast("Purchase Complete",{
      type:'success'
    })}
   const removeItem=(item)=>{
     setCartItems(cartItem.filter(singleItem=>singleItem.id !==item.id))
   }
  
  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8"><Buypage addInCart={addInCart}/></Col>
        <Col md="4"><Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/></Col>
      </Row>
    </Container>
  );
}

export default App;
