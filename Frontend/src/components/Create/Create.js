import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import './Create.css';
import address from "../../BackendApi";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [validated, setValidated] = useState(false);

    const history = useHistory();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            postMethod();
        }
        setValidated(true);
    };

    const postMethod = async () => {
        const post = { title, body };
        axios.post(address, post);
        history.push('/');
    }

    
    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="form mt-5 m-auto border p-4">
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required type="text" value={title} onChange={event => {setTitle(event.target.value)}} />
                    <Form.Control.Feedback type="invalid">
                        Please enter a title!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control required as="textarea"  rows={3} value={body} onChange={event => {setBody(event.target.value)}} />
                    <Form.Control.Feedback type="invalid">
                        Please enter a body!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Create;