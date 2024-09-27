import React, { useState } from "react";
import "../../App.css";
import SliderComponent from "../../components/SliderComponent";
import CountryList from "../../components/CountryList";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [showMenu, setShowMenu] = useState(false);

  const options = ["All", "Asia", "Europe"];

  return (
    <div className="homepage p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h5>Countries</h5>
        </div>
        <div className=" d-none d-sm-flex gap-4">
          {options.map((option) => (
            <p
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`cursor-pointer ${
                selectedOption === option
                  ? "fw-bold text-decoration-underline text-dark"
                  : "text-muted"
              }`}
            >
              {option}
            </p>
          ))}
        </div>
        <div className="d-block d-sm-none">
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setShowMenu(!showMenu)}
            />
            <Navbar.Collapse in={showMenu} id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">All</Nav.Link>
                <Nav.Link href="#features">Asia</Nav.Link>
                <Nav.Link href="#pricing">Europe</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <header>
        <h1>WELCOME</h1>
      </header>
      <SliderComponent />
      <CountryList />
    </div>
  );
};

export default HomePage;
