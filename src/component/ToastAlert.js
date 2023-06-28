import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const ToastAlert = ({showToast , setShowToast}) => {
  const toggleShowA = () => setShowToast(!showToast);
  return (
    <div className='toast-message'>
    <Row>
      <Col md={12} className="mb-2">
        <Toast show={showToast} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Error Message</strong>
          </Toast.Header>
          <Toast.Body style={{color:"red"}}>Email or Password is Wrong</Toast.Body>
        </Toast>
      </Col>
    </Row>
    </div>
  );
}

export default ToastAlert;