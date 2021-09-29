import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {delete_Wish} from '../../reducer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './WishList.css';
export default function WishList(){
    const WishList = useSelector((state)=>state.WishList);
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        dispatch(delete_Wish(id));
    }
    const handleIncrease=()=>{

    }
    return(
      <>
          <Header/>
          <div>
            {
                WishList.length===0?<h1>Your WishList is Empty</h1>:             
                WishList.map((item)=>(
                    <div key={item.WishList.uniqueID} className="Cart_Item">
                     {console.log(WishList)} 
                    <img src={item.WishList.image} alt={item.WishList.title}/>
                    <div>
                    <p>{item.WishList.category}</p>
                    <p>{item.WishList.title}</p>
                    <p>{item.WishList.price}</p>
                    <button onClick={()=>handleDelete(item.WishList.id)}><DeleteIcon/></button>
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