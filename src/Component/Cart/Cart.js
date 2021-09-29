import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {delete_Cart} from '../../reducer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Cart.css';

export default function Cart(){
    const basket = useSelector((state)=>state.basket);
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        dispatch(delete_Cart(id));
    }
    const handleIncrease=()=>{

    }
    return(
      <>
          <Header/>
          <div>
            {
                basket.length===0?<h1>Your Cart is Empty</h1>:             
                basket.map((item)=>(
                    <div key={item.people.uniqueID} className="Cart_Item">
                     {console.log(basket)} 
                    <img src={item.people.image} alt={item.people.title}/>
                    <div>
                    <p>{item.people.category}</p>
                    <p>{item.people.title}</p>
                    <p>{item.people.price}</p>
                    <button onClick={()=>handleDelete(item.people.id)}><DeleteIcon/></button>
                    <button onClick={handleIncrease}><AddIcon/></button>
                    </div>
            </div>
                ))
            }
          </div>
          <div>
        </div>
          <Footer/>
      </>
    );
}