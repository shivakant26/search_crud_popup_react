import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateFormInput } from "../Redux/FormSlice";

const Health = () => {
  const dispatch = useDispatch();
  const { companyA , companyB , email ,location , fullName} = useSelector((state) => state.form);
  const [company, setCompnay] = useState("companya");
  // const [company, setCompany] = useState("companya");

  const radioHandle = (val) => {
    if (val === "companya") {
      setCompnay("companya");
    } else if (val === "companyb") {
      setCompnay("companyb");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormInput({ fieldName: name, value }));
  };

  const submitVal = () =>{
    let object = {companyA , companyB , email ,location , fullName}
    console.log(123,object)
  }

  return (
    <>
      <div className="Heath_form" style={{ margin: "60px 0px" }}>
        <Container>
          <div className="radio_btn">
            <input
              type="radio"
              name="company"
              value="companya"
              checked={company === "companya"}
              onChange={(e) => radioHandle("companya")}
            />
            Company A
            <input
              type="radio"
              name="company"
              value="companyb"
              checked={company === "companyb"}
              onChange={(e) => radioHandle("companyb")}
            />
            Company B
          </div>
          {company === "companya" ? (
            <>
              <div className="frm_field" style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  placeholder="Enter Company A"
                  name="companyA"
                  value={companyA}
                  onChange={handleInputChange}
                />
              </div>
            </>
          ) : company === "companyb" ? (
            <>
              <div className="frm_field" style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  placeholder="Enter Compnay B"
                  name="companyB"
                  value={companyB}
                  onChange={handleInputChange}
                />
              </div>
            </>
          ) : (
            <>
              <div className="frm_field" style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  placeholder="Enter fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          <div className="frm_field" style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="frm_field" style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Enter location"
              name="location"
              value={location}
              onChange={handleInputChange}
            />
          </div>
          <Button onClick={submitVal}>Submit</Button>
        </Container>
      </div>
    </>
  );
};

export default Health;
