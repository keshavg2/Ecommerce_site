import React,{useState} from 'react';
import data from '../data.json';
import './Home.css';


function Home(){
    const [person,setPerson]=useState(data);
    //const [value,setValue]=useState();
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
      const newPerson=person.filter(people=>people.ideal===e.target.value);
      setPerson(newPerson);
    }

    const clearFilter=()=>{
      setPerson(data);
    }


    return(
        <div className="container">
        <div className="filter">
          <div classNmae="sort">
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
            <label>Ideal for:</label>
          <select onChange={handleIdeal}>
          <option value="ideal" name="Ideal">Ideal for</option>
           <option value="Men" name="Men">Men</option>
           <option value="Women" name="Men">Women</option>
          </select>
          </div>
          <button onClick={clearFilter}>clear all filters</button>
        </div>
        <div className="home">
         {
             person.map((people)=>(
                 <div className="home_product">
                     <img src={people.image} alt={people.title}/>
                     <p>{people.Brand}</p>
                     <p>{people.title}</p>
                     <p>{people.price}</p>
                     <p></p>
                  </div>
             ))
         }
         
        </div>
        {console.log(person)}
        </div>
    );
}

export default Home;