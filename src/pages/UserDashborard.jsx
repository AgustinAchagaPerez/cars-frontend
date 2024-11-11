// src/pages/UserDashboard.jsx
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const UserDashboard = () => {
  const history = useHistory();

  const handleRentClick = () => {
    history.push("/rent-cars");
  };

  const handleBuyClick = () => {
    history.push("/buy-cars");
  };

  return (
    <Container>
      <h2>Welcome to Your Dashboard</h2>
      <Button onClick={handleRentClick}>Rent Cars</Button>
      <Button onClick={handleBuyClick}>Buy Cars</Button>
    </Container>
  );
};

export default UserDashboard;
