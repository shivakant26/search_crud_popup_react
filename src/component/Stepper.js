import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Stepper = () => {
  const [step , setStep] = useState(1);
  const stepData = [
    {
      id: 1,
      data: "lorem ipsum is good paragraph task. lorem ipsum is good paragraph task. lorem ipsum is good paragraph task .lorem ipsum is good paragraph task",
    },
    {
      id: 2,
      data: "lorem ipsum is good paragraph task. lorem ipsum is good paragraph task. lorem ipsum is good paragraph task .lorem ipsum is good paragraph task",
    },
    {
      id: 3,
      data: "lorem ipsum is good paragraph task. lorem ipsum is good paragraph task. lorem ipsum is good paragraph task .lorem ipsum is good paragraph task",
    },
    {
      id: 4,
      data: "lorem ipsum is good paragraph task. lorem ipsum is good paragraph task. lorem ipsum is good paragraph task .lorem ipsum is good paragraph task",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 4) {
        setStep(1);
      } else {
        setStep(step + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [step]);
  
  return (
    <>
    <Container>
      <h4>Stepper From</h4>
      <div className="step_form">
        <div className="stepper_count">
          {stepData?.map((item, index) => {
            return <span key={index} className={step === item.id ? "r-active" : ""}>{item.id}</span>;
          })}
        </div>
        <ul>
          {stepData?.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.data}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
    </>
  );
};

export default Stepper;
