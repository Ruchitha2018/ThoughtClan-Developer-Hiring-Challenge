import React, { useState, useEffect } from "react";
import { listHotels } from "./apiCore";
import Menu from "./Menu";

const Home = (props) => {
    const [hotels, setHotels] = useState([]);
    const [check, setChecked] = useState("Unchecked");
    const [updateHotels, setUpdateHotels] = useState([]);
    const [run, setRun] = useState(false);
    useEffect(() => {
        loadHotels();
    }, []);
    
     useEffect(() => {
         updateHotels.length === 0 ? displayHotel() : updateDisplayHotel() ;
    }, [run]);
    
    const loadHotels = () => {
            listHotels().then(data => {
            if(data.error){
                console.log(data.error);
            }else{
                setHotels(data);
            }
        }); 
     };
    
    const displayHotel = () => (
      <div className = "row">
        <div className = "card-deck">
        {hotels.map((hotel, index) => (
           <div className = "col-md-4">
             <div className = "hotelCard shadow-sm">
               <h5>{hotel.name}</h5>
               <h6>{hotel.neighbourhood}, {hotel.neighbourhood_group}</h6>
               <h4><b>S$ {hotel.price}</b></h4>
             </div>
           </div>
        ))}
        </div>
      </div>    
    );

   const updateDisplayHotel = () => (
      <div className = "row">
        {updateHotels.map((hotel, index) => (
           <div className = "col-md-4">
             <div className = "hotelCard shadow-sm p-3 mb-5">
               <h5>{hotel.name}</h5>
               <h6>{hotel.neighbourhood}, {hotel.neighbourhood_group}</h6>
               <h4><b>S$ {hotel.price}</b></h4>
             </div>
           </div>
        ))}
      </div>    
    );

   const displayFilter = () => (
      <div onChange={handleCheck} className = "hotelFilters shadow-sm p-3 mb-5 rounded" >
        <label>
        <input value="East Region" type="radio" checked = {check === "East Region"}/> East Region
        </label>
        <label>
        <input value="North Region" type="radio" checked = {check === "North Region"}  /> North Region
        </label>
        <label>
        <input value="Central Region" type="radio" checked = {check === "Central Region"}  /> Central Region
        </label>
        <label>
        <input value="North-East Region" type="radio" checked = {check === "North-East Region"}  /> North-East Region
        </label>
        <label>
        <input value="West Region" type="radio" checked = {check === "West Region"}  /> West Region
        </label>
        </div>
   );
 
   const handleCheck = (event) => {
         setChecked(event.target.value);
         var updateHotel = [];
         var i = 0;
         hotels.map((hotel, index) => {
         if(hotel.neighbourhood_group === event.target.value)
           updateHotel[index] = hotel;
       });
       setUpdateHotels(updateHotel);
       setRun(!run);
   }
   
    const AscHotelPrice = () => {
            hotels.sort((a,b) => a.price - b.price); 
            updateHotels.sort((a,b) => a.price - b.price);
            setHotels(hotels);
            setRun(!run);
    } 
   
   const DscHotelPrice = () => {
            hotels.sort((a,b) => b.price - a.price); 
            updateHotels.sort((a,b) => b.price - a.price);
            setHotels(hotels);
            setRun(!run);
    } 
   
   const searchName = (event) => {
       let hotelsName;
       updateHotels.length == 0 ? hotelsName = hotels : hotelsName = updateHotels ;
       console.log(updateHotels);
       hotelsName = hotelsName.filter((hotel) => {
           return hotel.name.toUpperCase().search(event.target.value.toUpperCase()) !== -1;
       });
       setUpdateHotels(hotelsName);
       setRun(!run);
   }
   
    return (
        <div>
        <Menu />
        <div className = "container">
        <div className = "row">
         <div className = "col-md-6">
           <div className = "hotelSearch">
            <input type = "text" placeholder="Search" onChange={searchName}  />
          </div>
         </div>
        <div className = "col-md-6">
          <div className = "hotelSort">
          <button onClick = {AscHotelPrice} className = "btn btn-default">Low to High</button>
          <button onClick = {DscHotelPrice} className = "btn btn-default">High to Low</button>
         </div>
        </div>
        </div>
        {displayFilter()}
        {updateHotels.length == 0 ? displayHotel(): updateDisplayHotel()}
        </div>
        </div>       
    );
};

export default Home;
