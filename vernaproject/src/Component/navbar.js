import {Navbar,Container,Nav,Button,Form,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



export function Bar(){

    const logo_Url ="https://mentorplus.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.0db42e3e.svg&w=384&q=75";

    return(
        <div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/"> <img class="img-responsive img-icons" src={logo_Url} alt="logo"/></Navbar.Brand>
        
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link> 
          <Nav.Link  href="/plan">Plans & Pricing</Nav.Link> 
          <Nav.Link href="/faq">FAQ's</Nav.Link> 
          <Nav.Link href="/contact">Contact us </Nav.Link>
         
        </Nav>
        <Form className="d-flex">
         <Button variant="outline-success">Login</Button>
          <Button variant="outline-success">SignUp</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
     );
}

