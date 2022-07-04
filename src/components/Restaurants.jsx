import React from "react";
import RestaurantsList from "./RestaurantsList";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
const Restaurants = () => {
const [data,setData]=useState([]);

    const getData= async ()=>{
        let res=await axios.get(`/restaurants`)
        // console.log(res.data);
        setData([...data,...res.data]);

    }
    useEffect(() => {
      
      getData();
   
    
    }, [])
    
  return (
    <div>
      <h1 id="heading">Reataurants</h1>
      {data.map(item =>(
        <RestaurantsList key={item.id} item={item} />
      ))}
     
    </div>
  );
};

export default Restaurants;
