import React,{useState,useEffect} from 'react';
import './Home.css';
//import SearchIcon from '@material-ui/icons/Search';
import Pagination from '@mui/material/Pagination';
//import Product from './Product';
import {useDispatch,useSelector} from 'react-redux';
import {add_Cart,add_WishList,delete_Wish} from '../reducer';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Home(){
    const [person,setPerson]=useState([]);
    const [product,setProduct]=useState([]);
    const [page,setPage]=useState(1);
    //const [count,setCount]=useState();
    const [fetc,setFetc]=useState(false);
    const dispatch=useDispatch();
    const [searchQuery,setSearchQuery]=useState('');
    const basket=useSelector((state)=>state.basket); 
    const [fill,setFill]=useState(true);

    const lowSort=()=>{
      person.sort((a,b)=>a.price-b.price);
      //console.log(person);
      setPerson([...person]);
    }

    const highSort=()=>{
      person.sort((a,b)=>b.price-a.price);
      //console.log(person);
      setPerson([...person]);
    }

    const handleFilter=(e)=>{
      const newPerson=person.filter(people=>people.size===e.target.value);
      //console.log(e.target.value);
      //console.log(newPerson);
      setPerson(newPerson);
    }

    const handleBrand=(e)=>{
      const newPerson = person.filter(people=>people.Brand===e.target.value);
      setPerson(newPerson);
    }

    const handleIdeal=(e)=>{
      const newPerson=person.filter(people=>people.category===e.target.value);
      setPerson(newPerson);
    }

    const clearFilter=()=>{
      setPerson(product);
    }

    const handleSearch=(Query)=>{
      //console.log(Query);
      setSearchQuery(Query);
      //console.log(searchQuery);
      const items=person.filter(item=>item.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setPerson(items);
    }

    const handlePage=(event,value)=>{
      setPage(value);
      //console.log();
      let len = product.length;
      //console.log(len);
      let NoOfItem = len/4;
      NoOfItem=NoOfItem*page;
      let startItem=NoOfItem-5;
      //console.log(NoOfItem,startItem,page);
      let item=product.slice(startItem,NoOfItem);
      //console.log("item",item);
      //console.log(person);
      //setPerson([]);
      //console.log(person);

      setPerson(item);
      //console.log("person",person);
    }

    const handleCart=(people)=>{
      //console.log(people);
      dispatch(add_Cart(people));
    }
    
    useEffect(()=>{
      const fetchData=async()=>await fetch(`https://fakestoreapi.com/products/`)
      .then(response=>response.json())
      .then(data=>{
        setProduct(data);
        //console.log(product);
        setFetc(true);
      });
       fetchData();

    },[])

    if(fetc){
      const item=product.slice(0,5);
      setPerson(item);
      setFetc(false);
    }

    const handleClick=(people)=>{
      fill?setFill(false):setFill(true);
      fill?dispatch(delete_Wish(people.id)):dispatch(add_WishList(people));
  }
 
    return(
       <div>
         <Header onSearch={handleSearch}/>
        <div className="container">
          <div className="filter">
          <div className="sort">
           <label>SortByPrice:</label>
           <label><input type="radio" value="Low" name="Sort" onClick={lowSort}/>From Low to High</label>
           <label><input type="radio" value="High" name="Sort" onClick={highSort}/> From High to Low</label>
          </div>
          <div onChange={handleFilter}>
            <label>Filter By:</label>
            <input type="radio" name="Filter" value="S"/>S
            <input type="radio" name="Filter" value="M"/>M
            <input type="radio" name="Filter" value="L"/>L
            <input type="radio" name="Filter" value="XL"/>XL
          </div>
          <div>
            <label>Brand:</label>
          <select onChange={handleBrand}>
          <option value="Brand">Brand</option>
           <option value="jimDandy">jimDandy</option>          
            
           <option value="EGStore">EGStore</option>
           <option value="Aelomart">Aelomart</option>
           <option value="SevenRocks">SevenRocks</option>
           <option value="EGStore">EGStore</option>
          </select>
          </div>
          <div>
            <label>category:</label>
          <select onChange={handleIdeal}>
          <option value="ideal" name="Ideal">category</option>
           <option value="Men" name="Men">Men</option>
           <option value="Women" name="Women">Women</option>
           <option value="jewelery" name="jewelery">jewelery</option>
           <option value="electronics" name="electronics">electronics</option>
          </select>
          </div>
          <button onClick={clearFilter}>clear all filters</button>
        </div>
              <div className="home">
              {
                  
                  person.map((people)=>(
                    <div className="home_product" key={people.id}>
                    <img src={people.image} alt={people.title}/>
                    <span>{people.category}</span><button className="heart_Icon" onClick={()=>handleClick(people)}>{fill?<FavoriteBorderIcon />:<FavoriteIcon style={{fill:"white"}}/>}</button>
                    <p>{people.title}</p>
                    <p>{people.price}</p> 
                    <button onClick={()=>handleCart(people)}>ADD TO CART</button>
                  </div>
                  ))
              }
               {/* <di{page}</div> */}
            </div>
              {/*   {console.log(person)} */}
          {console.log(basket)}
        </div>
        <Pagination className="page" count={4} page={page} onChange={handlePage} variant="outlined" color="primary" />
        <Footer/>
        </div>

    );
}



export default Home;