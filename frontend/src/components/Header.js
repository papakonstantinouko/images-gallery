import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
