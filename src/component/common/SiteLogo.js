import { Link } from "react-router-dom";

const SiteLogo = ({classAttr}) => {
    console.log(classAttr)
  return (
    <>
      <div className={classAttr ? classAttr : "site_logo"}>
        <Link to="/">
          <h2>
            Post<span style={{ color: "tomato" }}>H</span>ub
          </h2>
        </Link>
      </div>
    </>
  );
};

export default SiteLogo;
