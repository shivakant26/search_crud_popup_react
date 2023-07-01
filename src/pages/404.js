const PageNotFound = () =>{
    return(
        <>
        <div className="page_not_found">
        <div className="page_content">
            <h1>404</h1>
            <h3>Page not found</h3>
            <p>The page you are looking for was moved removed.<br/>
            renamed or might never existed.
            </p>
            <button className="goto_home_btn">go to home</button>
            <button className="contact_btn">Contact us</button>
        </div>
        </div>
        </>
    )
}
export default PageNotFound;