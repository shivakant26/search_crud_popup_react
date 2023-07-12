import { Col, Row } from "react-bootstrap";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import CategoryModel from "./CategoryModel";
import { useDispatch } from "react-redux";
import { newPost } from "../../Redux/PostSlice";

const Post = () => {
  const [publishShow, setPublishShow] = useState(true);
  const [formatShow, setFormatShow] = useState(true);
  const [show, setShow] = useState(true);
  const [showCatModel, setShowCatModel] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    postTitle: "",
    discription: "",
    image: "",
    authorName: "",
    date: "",
    format: "",
    categories: [],
  });

  const publishData = () => {
    dispatch(newPost(state))
    console.log(123, state);

  };

  const handleChange = (e, value) => {
    if (e.target.value === 'on') {
      state.categories?.push(value);
    } else {
      return false;
    }
  };

  const handleFormat = (e, values) => {
    if (e) {
      state.format = values;
    } else {
      return false;
    }
  };
  const handleImageChange = (e) => {
    setState({...state, image: e.target.files[0] });
  };

  const addNewCategory = () =>{
    setShowCatModel(true)
  }
  return (
    <>
      {showCatModel && (
        <CategoryModel
          showCatModel={showCatModel}
          setShowCatModel={setShowCatModel}
        />
      )}
      <div className="post_page">
        <Row>
          <Col sm={12} sx={12} md={8}>
            <h2>Create Post</h2>
            <input
              type="text"
              placeholder="Enter title here"
              onChange={(e) => {
                setState({ ...state, postTitle: e.target.value });
              }}
            />
            <div className="post_details">
              <textarea
                placeholder="Enter Discription"
                onChange={(e) => {
                  setState({ ...state, discription: e.target.value });
                }}
              ></textarea>
              <input
                type="file"
                placeholder="add media"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
            <div className="author">
              <input
                type="text"
                placeholder="author Name"
                onChange={(e) => {
                  setState({ ...state, authorName: e.target.value });
                }}
              />
              <input
                type="date"
                onChange={(e) => {
                  setState({ ...state, date: e.target.value });
                }}
              />
            </div>
          </Col>
          <Col sm={12} sx={12} md={4}>
            <div className="plugin">
              <div
                className="publish_header"
                onClick={() => setPublishShow(!publishShow)}
              >
                <span>publish</span>
                <span>
                  {publishShow ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                </span>
              </div>
              {publishShow && (
                <div className="publish_sec">
                  <div className="publish_body">
                    <div className="button_group">
                      <button>Save Draft</button>
                      <button>Preview</button>
                    </div>
                    <p>
                      Status :{" "}
                      <span>
                        Draft <a href="#javascript">Edit</a>
                      </span>
                    </p>
                    <p>
                      Visibility :{" "}
                      <span>
                        Public <a href="#javascript">Edit</a>
                      </span>
                    </p>
                  </div>
                  <div className="publish_footer">
                    <span>
                      <a href="#javascript">Move to Trash</a>
                    </span>
                    <span>
                      <button onClick={publishData}>Publish</button>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="plugin format">
              <div
                className="publish_header"
                onClick={() => setFormatShow(!formatShow)}
              >
                <span>Format</span>
                <span>
                  {formatShow ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                </span>
              </div>
              {formatShow && (
                <div className="publish_sec">
                  <div className="publish_body">
                    <div className="formats">
                      <input
                        type="radio"
                        name="format"
                        onChange={(e) => handleFormat(e, "standard")}
                      />
                      <span className="mr_lf">Standard</span>
                      <br />
                      <input
                        type="radio"
                        name="format"
                        onChange={(e) => handleFormat(e, "aside")}
                      />
                      <span className="mr_lf">Aside</span>
                      <br />
                      <input
                        type="radio"
                        name="format"
                        onChange={(e) => handleFormat(e, "image")}
                      />
                      <span className="mr_lf">Image</span>
                      <br />
                      <input
                        type="radio"
                        name="format"
                        onChange={(e) => handleFormat(e, "vedio")}
                      />
                      <span className="mr_lf">Vedio</span>
                      <br />
                      <input
                        type="radio"
                        name="format"
                        onChange={(e) => handleFormat(e, "quote")}
                      />
                      <span className="mr_lf">Quote</span>
                      <br />
                      <input
                        type="radio"
                        name="format"
                        onChange={(e) => handleFormat(e, "link")}
                      />
                      <span className="mr_lf">Link</span>
                      <br />
                      <input
                        type="radio"
                        name="format"
                        onChange={(e) => handleFormat(e, "gallery")}
                      />
                      <span className="mr_lf">Gallery</span>
                      <br />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* end format section */}
            <div className="plugin categories">
              <div className="publish_header" onClick={() => setShow(!show)}>
                <span>Categories</span>
                <span>{show ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</span>
              </div>
              {show && (
                <div className="publish_sec">
                  <div className="publish_body">
                    <div className="category_tabs"></div>
                    <div className="formats">
                      <input
                        type="checkbox"
                        name="category"
                        onChange={(e) => {
                          handleChange(e, "fashion");
                        }}
                      />
                      <span className="mr_lf">Fashion</span>
                      <br />
                      <input
                        type="checkbox"
                        name="category"
                        onChange={(e) => {
                          handleChange(e, "style");
                        }}
                      />
                      <span className="mr_lf">Style</span>
                      <br />
                      <input
                        type="checkbox"
                        name="category"
                        onChange={(e) => {
                          handleChange(e, "health");
                        }}
                      />
                      <span className="mr_lf">Health</span>
                      <br />
                    </div>
                    <div className="new_category">
                      <p onClick={addNewCategory}><BsPlus /> add new Category</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Post;
