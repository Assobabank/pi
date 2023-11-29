import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Image from './image.js';
import Name from './name.js';
import Description from './description.js';
import product from './product.js';

const App = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Image image={product.image} />
      <Card.Body>
        <Name name={product.name} />
        <Description description={product.description} />
        <Card.Text>Prix: {product.prix}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
