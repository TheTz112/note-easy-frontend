import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import { Accordion, Button, Card } from 'react-bootstrap';
import axios from 'axios';
const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('/notes');
    setNotes(response.data);
  };

  // const deleteHandler = (id) => {
  //   if (window.confirm('Are you sure you want to delete')) {
  //   }
  // };

  return (
    <MainScreen title="NOTE EASY ">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: 'flex' }}>
                <span
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    cursor: 'pointer',
                    alignSelf: 'center',
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button
                    variant="link"
                    as={Card.Text}
                    style={{ border: 'none' }}
                  >
                    {note.title}
                  </Accordion.Button>
                </span>
              </Card.Header>
              <Accordion.Body>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on {note.created_date}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
