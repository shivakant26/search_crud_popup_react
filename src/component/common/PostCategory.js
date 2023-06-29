import { Link } from "react-router-dom";

const PostCategory = ({SiteMenu}) =>{
    return(
        <>
            <div className="categories_list">
                <ul>
                  {SiteMenu?.filter((el) => {
                    if (el.category) {
                      return el;
                    }
                  })?.map((item, index) => {
                    return (
                      <li key={index}>
                        <span>
                          <Link to={item.endPoint}>{item.label}</Link>
                        </span>
                        <span>{item.category}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
        </>
    )
}

export default PostCategory;