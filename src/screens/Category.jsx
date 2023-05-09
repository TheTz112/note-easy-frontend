import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get('/category');
    setCategories(response.data);
  };
  return (
    <div>
      <Container>
        <h1 style={{ margin: 10, fontSize: 60 }}>Category</h1>
        {categories.map((category) => (
          <Card style={{ margin: 10, fontSize: 30 }} key={category._id}>
            {category.name}
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Category;
