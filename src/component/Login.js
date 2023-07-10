import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { LoginSchema } from "./validation";
import { useNavigate } from "react-router-dom";
import ToastAlert from "./ToastAlert";
import OtpModel from "../modelpopup/OtpModel";

const Login = () => {
  const [showOtpModel, setShowOtpModel] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpdigit, setOtpDigits] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(180); // Timer in seconds
  const [timerId, setTimerId] = useState(null);
  const [otpError , setOtpError] = useState("");
  const navigate = useNavigate();
  const initialState = { email: "", password: "" };

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.email === "admin@gmail.com" && values.password === "123456") {
      var val = Math.floor(1000 + Math.random() * 9000);
      setOtp(val);
      setShowOtpModel(true);
    } else {
      setShowToast(true);
    }
  };

  const verifyOtp = () => {
    const otpValue = otpdigit.join("");
    if (otp === Number(otpValue)) {
      localStorage.setItem("token", "1231213kjioj255115");
      setShowOtpModel(false);
      setOtpError("");
      navigate("/dashboard");
    } else {
      setOtpError("OTP Not Matched!")
      return false;
    }
    setOtp("");
  };

  return (
    <>
      {showOtpModel && (
        <OtpModel
          showOtpModel={showOtpModel}
          setShowOtpModel={setShowOtpModel}
          verifyOtp={verifyOtp}
          otpdigit={otpdigit}
          otp={otp}
          setOtpDigits={setOtpDigits}
          resendTimer={resendTimer}
          timerId={timerId}
          otpError={otpError}
          setResendTimer={setResendTimer}
          setTimerId={setTimerId}
        />
      )}
      <div className="login_form_page">
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={12} md={12}>
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
                      <div className="login_image">
                        <img
                          src={require("../assets/images/logo.jpeg")}
                          alt="login_img"
                        />
                      </div>
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
