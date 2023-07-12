import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const OtpModel = ({
  showOtpModel,
  setShowOtpModel,
  verifyOtp,
  otpdigit,
  otp,
  otpError,
  setOtpDigits,

}) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const inputRefs = useRef([]);
  const handleClose = () =>{
    setShowOtpModel(false);
  } 

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setOtpDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[index] = value;
      return newDigits;
    });
    if (value !== "" && index < otpdigit.length - 1) {
        setActiveIndex(index + 1); // Move to the next input field
        inputRefs.current[index + 1].focus(); // Focus on the next input field
      }
  };

  return (
    <>
      <Modal show={showOtpModel} onHide={handleClose} className="otp-model">
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP </Modal.Title>
        </Modal.Header>
        {otp ? <p style={{padding:"0px 10px"}}>Your otp is : <span style={{fontWeight:"bold"}}>{otp}</span></p> : ""}
        <Modal.Body>
          <div className="input_group">
            {otpdigit?.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="otp_input"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                maxLength="1"
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                autoFocus={index === activeIndex} 
              />
            ))}
          </div>
          <div className="otp_error">{otpError}</div>
        </Modal.Body>
        <Modal.Footer>
          <div className="otp_buttons">
            <div className="resend_message">
              <p style={{ textAlign: "left" }}>Resend otp in 3:00 second</p>
            </div>
            <div className="buttons">
              <Button variant="secondary" >
                Resend
              </Button>
              <Button variant="primary" onClick={verifyOtp}>
                Verify
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OtpModel;
