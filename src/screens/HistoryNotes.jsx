import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

const HistoryNotes = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    fetchHistories();
  }, []);

  const fetchHistories = async () => {
    const response = await axios.get('/history');
    setHistories(response.data);
  };
  return (
    <div>
      <Container>
        <h1>History Note</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>note id</th>
              <th>content</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {histories.map((history) => (
              <tr key={history._id}>
                <td>{history._id}</td>
                <td>{history.note_id}</td>
                <td>{history.content}</td>
                <td>{history.created_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default HistoryNotes;
