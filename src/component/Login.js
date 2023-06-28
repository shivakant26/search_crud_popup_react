import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { LoginSchema } from "./validation";
import { useNavigate } from "react-router-dom";
import ToastAlert from "./ToastAlert";

const Login = () => {

  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const initialState = { email: "", password: "" };
  const handleSubmit = (values, { setSubmitting }) => {
    if (values.email === "admin@gmail.com" && values.password === "123456") {
        localStorage.setItem("token","1231213kjioj255115")
      navigate("/dashboard");
    } else {
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="login_form_page">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={12} sm={12} lg={4} md={4}>
              <Formik
                initialValues={initialState}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <div className="login_form">
                    {showToast && (
                      <ToastAlert
                        showToast={showToast}
                        setShowToast={setShowToast}
                      />
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="form_field mb-4">
                        <Form.Control
                          type="text"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="User_id"
                          value={values.email}
                          className={
                            touched.email && errors.email ? "is-invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="errorr"
                        />
                      </div>
                      <div className="form_field mb-4">
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Password"
                          value={values.password}
                          className={
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="errorr"
                        />
                      </div>
                      <div className="form_field mb-4">
                        <Button
                          variant="primary"
                          type="submit"
                          className="login_btn"
                        >
                          Login
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </Formik>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
