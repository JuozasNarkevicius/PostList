import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Navigation = () => {

    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Nav.Link onClick={()=>history.push('/')}>List of Posts</Nav.Link>
                <Nav.Link onClick={()=>history.push('/create')}>New Post</Nav.Link>
            </Nav>
        </Navbar>
    )

}

export default Navigation;