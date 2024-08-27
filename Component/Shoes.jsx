import React from 'react'
import { Col , Image,Button,Row, Container} from 'react-bootstrap'
import  photo  from '../photo/khuu.png'
import  photo1  from '../photo/khu7.png'
import  photo2  from '../photo/khu8.png'
import  photo3  from '../photo/khu9.png'
const Shoes = () => {
  return (
    <Container>
   
 <Row style={{ marginTop: "10px" }}>
  <Col xs={6} md={3}>
    <div>
      <Image src={photo} thumbnail />
      <p>Price: 1300 RS</p>
      <div style={{ marginTop: '10px' }}>

        <Button variant="primary" style={{ backgroundColor: 'orange' }}>Add to Cart</Button>
      </div>
    </div>
  </Col>

  <Col xs={6} md={3}>
    <div>
      <Image src={photo1} thumbnail />
      <p>Price: 1250 RS</p>
      <div style={{ marginTop: '10px' }}>

        <Button variant="primary" style={{ backgroundColor: 'orange' }}>Add to Cart</Button>
      </div>
    </div>
  </Col>

  <Col xs={6} md={3}>
    <div>
      <Image src={photo2} thumbnail />
      <p>Price: 999 RS</p>
      <div style={{ marginTop: '10px' }}>

        <Button variant="primary" style={{ backgroundColor: 'orange' }}>Add to Cart</Button>
      </div>
    </div>
  </Col>

  <Col xs={6} md={3}>
    <div>
      <Image src={photo3} thumbnail />
      <p>Price: 750 RS</p>
      <div style={{ marginTop: '10px' }}>

        <Button variant="primary" style={{ backgroundColor: 'orange' }}>Add to Cart</Button>
      </div>
    </div>
  </Col>
  </Row> 
  </Container>
   
  )
}

export default Shoes
