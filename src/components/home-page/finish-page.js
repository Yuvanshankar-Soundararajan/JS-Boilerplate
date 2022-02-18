import React from 'react'
import { BsBell } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { CgOrganisation } from 'react-icons/cg';
import { GoPrimitiveDot } from 'react-icons/go';
import { Navbar,Container,Nav,NavDropdown,Form,FormControl,Button,Card,Row,Col,Badge } from "react-bootstrap"

const Finishpage = () => {
  return (
      <>
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search Employee"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
            </Form>
            <Nav className="justify-content-end" activeKey="/home">
                <Card.Text className="pt-2">Your trial expires in 30day(s).</Card.Text>
                {/* <Card.Body> */}
                <Card.Link href="#" className="pt-2 ps-1">Upgrade</Card.Link>
                {/* </Card.Body> */}
                <NavDropdown title="Zylker Designs Chennai" id="basic-nav-dropdown" className="ps-3">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <BsBell className='mt-2 ms-3'/>
                <AiOutlineSetting className='mt-2 ms-3'/>
                <AiOutlineQuestionCircle className='mt-2 ms-3'/>
                <CgProfile className='mt-2 ms-2'/>
            </Nav>
        </Container>
    </Navbar>
    
    <div className='text-center'>
        <h4>Welcome Jasmine Frank!</h4>
        <p className="mb-2 text-muted">All it takes is three simple steps to get your employees paid on time</p>
    </div>

    <Row className="my-3 text-center d-flex justify-content-between">
        <Col md={{ span: 2, offset: 1 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Asset/addpayroll.jpg" style={{height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Add Payroll Inputs</Card.Title>
                        <Card.Text>Add Payroll Inputs</Card.Text>
                    </Card.Body>
                </Card>
        </Col>

        <Col md={{ span: 2 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Asset/approvepayroll.jpg" style={{height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Approve Payroll</Card.Title>
                        <Card.Text>Approve Payroll</Card.Text>
                    </Card.Body>
            </Card>
        </Col>

        <Col md={{ span: 4 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Asset/makepayments.jpg" style={{height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Make Payments</Card.Title>
                        <Card.Text>Make Payments</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

    </Row>

    <div className="mt-4">    
        <h4 className="text-center">Set up your organisation before you run your first payroll.</h4>
        <div className='text-center'>
            <AiOutlineExclamationCircle style={{color:"orange"}}/>
            <span style={{color:"orange"}}>You still have 1 step(s) pending.</span><Card.Link href="#" className="pt-2 ps-1">Complete it now.</Card.Link>
        </div>
    </div>

    <Row className="mt-4">
        <Col md={{ span: 2, offset: 2 }} className="mt-3" >
            <CgOrganisation style={{color:"red"}} size = '25px'/>
        </Col>
        <Col md={{ span: 4 }} >
            <h4>Organisation Details</h4>
            <p>Tell us bit about your organisation.</p>
        </Col>
        <Col md={{ span: 2 }}>
            <Button variant="light" style={{color:"green"}}>
            <Badge bg="light" text="success"><GoPrimitiveDot /></Badge>Completed
            <span className="visually-hidden">unread messages</span>
            </Button>
        </Col>
    </Row>
    </>
  )
}

export default Finishpage