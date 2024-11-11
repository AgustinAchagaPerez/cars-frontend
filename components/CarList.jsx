// src/components/CarList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "./CarCard";

const CarList = ({ type }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get(`http://localhost:3000/cars?type=${type}`);
      setCars(response.data);
    };

    fetchCars();
  }, [type]);

  return (
    <div>
      {cars.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
