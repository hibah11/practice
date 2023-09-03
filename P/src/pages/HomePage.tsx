import Navbar from "../component/Navbar";
// import axios from "../../node_modules/axios/index";
import { useState, useEffect} from "react";



export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState ([]);

const fetchData = () =>{

    fetch("https://fakestoreapi.com/products")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setProducts(data)
    })
}

useEffect(() => {
  fetchData()
}, [])


    

return (
    <div className = 'bg-gray-200'>
     <Navbar/>

     <button className = 'bg-gray-300 border-2 mt-2 mx-2 p-1'>Sort items by category</button>
     
     
     
     {products.length > 0 && (
        
        <ul className = 'lg:grid lg:grid-cols-3 gap-3 p-5 sm:grid sm:grid-cols-2 '>

          {products.map(product => (
            <li className = 'border-2 p-3 text-left flex flex-col justify-around bg-white' key={product.id}>
                
            <img className = 'h-44 self-center' src= {product.image}></img>
            <p className = 'font-light'>{product.title}</p>
            <p className = 'font-light'>${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

    };
    
            




