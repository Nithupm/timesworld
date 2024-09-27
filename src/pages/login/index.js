import React from "react";
import styles from "./login.module.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Google, Facebook, Linkedin, Twitter } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
  };

  const usernameValidation = {
    required: "Username is required",
  };

  const passwordValidation = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/,
      message:
        "Password must include at least 1 uppercase letter, 1 number, and 1 symbol",
    },
  };

  return (
    <div>
      <div
        className={`d-flex align-items-center ${styles.containerFullHeight}`}
      >
        <Row className={`w-100 ${styles.loginRow} ${styles.loginGrid}`}>
          <Col className={styles.loginForm}>
            <h1 className="text-center lg:text-start mb-4">Sign In</h1>

            <div className="text-center lg:text-start mb-4">
              <p>
                New user? <a href="#">Create an account</a>
              </p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Usermame or Email"
                  {...register("username", usernameValidation)}
                />
                {errors.username && (
                  <p className="text-danger">{errors.username.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", passwordValidation)}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  label="Keep me signed in"
                  {...register("keepMeSignedIn")}
                  className={styles.customCheckbox}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Sign In
              </Button>

              <p className="text-center mb-5 mt-4">Or Sign In With</p>

              <Row className="d-flex justify-content-around mt-4">
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Google />
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Facebook />
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Linkedin />
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Twitter />
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col className={styles.loginImage} />
        </Row>
      </div>
    </div>
  );
};

export default LoginPage;
