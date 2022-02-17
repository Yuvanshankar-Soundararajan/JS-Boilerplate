import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap"

const payroll = () => {
  return (
    <div className='w-100 bg-primary' style={{height:"600px"}}>
        <Navbar>
            {/* <Container> */}
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link to="#home" style={{color:"white"}}>Features</Nav.Link>
                        <Nav.Link to="#home" style={{color:"white"}}>Pricing</Nav.Link>
                        <Nav.Link to="#home" style={{color:"white"}}>Help</Nav.Link>
                        <Nav.Link to="#home" style={{color:"white"}}>Support</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
        <div className='my-5'>
            <h1 className='text-center text-white'>Payroll crafted for building a workspace</h1>
            <p className='text-center text-white'>Spend less time running payroll for your employees so you can focus on growing your business</p>
            
            <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-warning btn-lg">START A FREE TRIAL</button>
            <button type="button" className="btn btn-outline-dark btn-lg ms-2">REQUEST A DEMO</button>
            </div>
        </div>
    </div>
  )
}

export default payroll