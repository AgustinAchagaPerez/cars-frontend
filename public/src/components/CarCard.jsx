 src/components/CarCard.jsx
 
import React from "react";

const CarCard = ({ car }) => {
  return (
    <div>
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.description}</p>
      <p>Price: {car.price}</p>
      <button>Buy</button>
      <button>Rent</button>
    </div>
  );
};

export default CarCard;
