import React from "react";
import { Helmet } from "react-helmet";
import Stepper from "../component/Stepper";

const LifeStyle = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stepper Page</title>
        <meta name="description" content="This is the stepper page" />
      </Helmet>
      <Stepper />
    </>
  );
};

export default LifeStyle;
