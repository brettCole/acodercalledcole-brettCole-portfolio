import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const TitleandIntro = () => {
  return <Container fluid>
    <Row>
      <Col xs={1}><p>placeholder</p></Col>
      <Col xs={8}></Col>
      <Col xs={1}><p>placeholder</p></Col>
    </Row>
    <Row className='mt-5'>
      <Col xs={2} sm={4} lg={5} xl={6} xxl={7} />
      <Col className='bg-success bg-gradient' xs={9} sm={7} lg={6} xl={5} xxl={5}><p className='fullstack-title text-end text-white'>Fullstack</p></Col>
      <Col />
    </Row>
    <Row>
      <Col xs={5} sm={6} md={7} lg={8}></Col>
      <Col xs={'auto'}><p className='fw-bold fullstack-subTitle text-start'>developer</p></Col>
      <Col xs={2}></Col>
    </Row>
    <Row className='mt-5'>
      <Col xs={9} className='bg-info bg-gradient'><p className='introduce text-start fs-4'>Building unique experiences one line of code at a time. I live for the excitement of new project ideas. I highly value the efficiency and quality of each individual project I get to be a part of.</p></Col>
      <Col className='col-auto' />
    </Row>
  </Container>;
}

export default TitleandIntro;