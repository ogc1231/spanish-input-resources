import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

        <Form>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label className='d-none'>Username</Form.Label>
                <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label className='d-none'>Password</Form.Label>
                <Form.Control className={styles.Input} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordcon">
                <Form.Label className='d-none'>Confirm Password</Form.Label>
                <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="passwordcon" />
            </Form.Group>

            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
                Sign Up
            </Button>
        </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;