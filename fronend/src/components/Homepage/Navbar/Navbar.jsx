import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavbarMenu() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between" bg="dark" data-bs-theme="dark">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">Notes App</InputGroup.Text>
          <Form.Control
            placeholder=" search in Noteapp"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    
  );
}

export default NavbarMenu;