import React, { useEffect, useState } from 'react';
import './App.css'; 
import PropertyCard from './PropertyCard';
import './PropertyCard.css';


function App() {
  const [properties,setproperties] = useState([]) 
  const getproperties = () => {
    fetch("http://localhost:3000/properties")
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      setproperties(data)
    } )
  }
useEffect(()=>{
  getproperties()
},[] )

  return (
    <div className="App">
      <div className="property-card-container">
        {/* {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))} */}
      </div>
    </div>
  );
}


export default App;
