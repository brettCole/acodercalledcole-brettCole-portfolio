import React from 'react';
import './TitleAndIntro.css';
import {Col, Container, Row} from 'react-bootstrap';

const TitleAndIntro = () => {
  return <Container fluid className='vh-100' style={{backgroundImage: "linear-gradient(to right, #0f0c29, #302b63, #24243e"}}>
    <Row className='mb-5'>
      <Col xs={1} className='text-white'><p>placeholder</p></Col>
      <Col xs={8}></Col>
      <Col xs={1} className='text-white'><p>placeholder</p></Col>
    </Row>
    <Row className='mt-5 mb-5' />
    <Row className='mt-5'>
      <Col xs={2} sm={4} lg={6} xl={7} xxl={7} />
      <Col className='bg-success bg-gradient fullstack-title-parent' xs={9} sm={7} lg={6} xl={5} xxl={5}><p className='fullstack-title text-end text-white'>Fullstack</p></Col>
    </Row>
    <Row>
      <Col xs={5} sm={6} md={7} lg={8}></Col>
      <Col xs={'auto'}><p className='fw-bold fullstack-subTitle text-start text-white'>developer</p></Col>
      <Col xs={2}></Col>
    </Row>
    <Row className='mt-5'>
      <Col xs={9} sm={7} md={6} className='bg-info bg-gradient'><p className='introduce text-start fs-4'>Building unique experiences one line of code at a time. I live for the excitement of new project ideas. I highly value the efficiency and quality of each individual project I get to be a part of.</p></Col>
      <Col className='col-auto' />
    </Row>
  </Container>;
}

export default TitleAndIntro;