import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import address from '../BackendApi';

const Details = () => {

    const { id } = useParams();
    
    const [data, setData] = useState([]);

    const history = useHistory();

    useEffect(() => {
        (async () => {
          axios.get(`${address}/${id}`)
               .then((result) => setData(result.data))
               .catch(() => history.push('/'));
        })();
      }, [id, history]);

    return (
      <Container>
        <Card className="mt-5">
          <Card.Header className="fw-bold fs-4">
            {data.title}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {data.body}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
}

export default Details;