// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import PopUp from "../components/PopUp";

const AdminDashboard = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const response = await axios.get("http://localhost:3000/cars");
    setCars(response.data);
  };

  const handleAddCar = () => {
    // Lógica para agregar un auto
  };

  const handleDeleteCar = async (carId) => {
    await axios.delete(`http://localhost:3000/cars/${carId}`);
    fetchCars();
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container>
      <h2>Admin Dashboard</h2>
      <Button onClick={handleAddCar}>Add Car</Button>
      {cars.map((car) => (
        <div key={car._id}>
          <h4>{car.name}</h4>
          <Button onClick={() => handleDeleteCar(car._id)}>Delete</Button>
        </div>
      ))}
      <PopUp />
    </Container>
  );
};

export default AdminDashboard;
