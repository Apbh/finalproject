import React from "react";
import Jumbotron from "../../components/Jumbotron";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Col, Row, Container } from "../../components/Grid";
import "./Main.css"

const Main = () => (
    <div>
      <Jumbotron>
        <h1>Welcome to the Wall of Kindness</h1>
        <h2>The average Canadian consumer throws out an estimated 170kg of food a year. Shocking? Let's break that pattern...</h2>
      </Jumbotron>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="sm-6">
           <h3>Search for donated items</h3>
           <p>Search for fresh food, or household items like furniture to complete your living room and connect with donors through email. Here at our Wall, we try to create a safe and judgement free environment to share resources and reduce wastage. </p>
           <a href="/search"><button >Search Page</button></a>
          </Col>
     
          <Col size="sm-6">
          <h3>Donate</h3>
          <p>Sign up to make your 'Wall of Kindness' and become a donor. A donee may contact you via messages for more information.</p>
          <a href="signUp"><button className="registerBtn">Register</button></a>
          <a href="signIn"><button className="signInBtn">Sign-In</button></a>
         
          </Col>
        </Row>
      </Container>
    </div>
  );
  
  export default Main;