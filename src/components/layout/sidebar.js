import React from "react";

import { Button, Nav, Container, Row, Col, Navbar } from "react-bootstrap";

import { Link, BrowserRouter as Router } from "react-router-dom";
import Logo from "../../assets/payroll.png";
import "../../style/sidebar.css";
import { FaPowerOff } from "react-icons/fa";

function Sidebar(props) {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src={Logo} className="png" />
        </div>
        <div className="welcome">
          <div
            style={{
              position: "relative",
              left: "44px",
              fill: "#333",
            }}
          >
            Welcome User
          </div>
          &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <FaPowerOff
              style={{
                color: "grey",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="link_container">
          <Nav className="flex-column nav">
            <div>
              <Nav.Link className="nav-link">
                <Link to="/organisation-setup" className="link">
                  Organisation Setup
                </Link>
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className="nav-link">
                <Link className="link" to="/tax-information">
                  Tax Information
                </Link>
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className="nav-link">
                <Link className="link" to="/pay-schedule">
                  Pay Schedule
                </Link>
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className="nav-link">
                <Link className="link" to="/statutory-components">
                  Statutory Components
                </Link>
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className="nav-link">
                <Link className="link" to="/salary-components">
                  Salary Components
                </Link>
              </Nav.Link>
            </div>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
