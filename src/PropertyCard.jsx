import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.images} alt={property.title} />
      <h2>{property.title}</h2>
      <p>Tipo: {property.type}</p>
      <p>Ambientes: {property.rooms}</p>
      <p>Descripción: {property.description}</p>
      <p>Precio: ${property.price}</p>
      <button>Comunicarse con el propietario</button>
    </div>
  );
};

export default PropertyCard;
