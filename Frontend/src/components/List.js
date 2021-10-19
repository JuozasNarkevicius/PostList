import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import address from "../BackendApi";

const List = () => {

    const [data, setData] = useState([]);
    const history = useHistory();

  useEffect(() => {
    (async () => {
      axios.get(address)
          .then((result) => setData(result.data));
    })();
  }, []);

    return (
        <Container>
            <Table striped bordered hover className="mt-5">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((data) => (
                    <tr key={data.id} onClick={()=>history.push(`/posts/${data.id}`)}>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.body}</td>
                    </tr>
                  ))
                }
              </tbody>
          </Table>
        </Container>
    );
    
}

export default List;