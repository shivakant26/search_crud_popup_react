import { useNavigate } from "react-router-dom";

const PageNotFound = () =>{
    const navigate = useNavigate();

    const gotoHome = () =>{
        navigate("/");
    }
    
    return(
        <>
        <div className="page_not_found">
        <div className="page_content">
            <h1>404</h1>
            <h3>Page not found</h3>
            <p>The page you are looking for was moved removed.<br/>
            renamed or might never existed.
            </p>
            <button className="goto_home_btn" onClick={gotoHome}>go to home</button>
            <button className="contact_btn">Contact us</button>
        </div>
        </div>
        </>
    )
}
export default PageNotFound;