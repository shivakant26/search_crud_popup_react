import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

const TableData = () => {
  const [status, setStatus] = useState(0);
  const [list, setList] = useState([
    { title: "Adobe", status: status },
    { title: "Bdobe", status: status },
    { title: "Adobe_one", status: status },
    { title: "Adobe_go", status: status },
  ]);

  const [searchText, setSearchText] = useState();
  const [title, setTitle] = useState();
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const [uid, setUid] = useState(null);
  const [error, setError] = useState(false);

  const filterData = searchText
    ? list.filter((el) =>
        el.title?.toLowerCase().includes(searchText.toLowerCase())
      )
    : list;

  const addTitle = () => {
    if (title === undefined || title === "") {
      setError(true);
      return false;
    } else {
      if (uid) {
        list.splice(uid - 1, 1, { title: title, status: status });
        setUid("");
      } else {
        setList([...list, { title: title, status: status }]);
        setTitle("");
      }
    }
    setTitle("");
    setError(false);
  };

  const openPopUp = (id) => {
    setActiveIndex(id);
    setShow(!show);
  };

  const popupRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        tableRef.current !== e.target
      ) {
        setShow(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const edit = (id) => {
    setUid(id);
    let obj = list[id - 1];
    setTitle(obj.title);
    setShow(false);
  };

  const deleteTitle = (id) => {
    list.splice(id - 1, 1);
    setList([...list]);
  };

  const handleAction = (evt, id) => {
    switch (evt) {
      case "edit":
        edit(id);
        break;
      case "delete":
        deleteTitle(id);
        break;
      case "active":
        setList((prevList) => {
          const updatedList = prevList.map((item, index) => {
            if (index === id - 1) {
              return { ...item, status: 1 };
            }
            return item;
          });
          return updatedList;
        });
        setShow(false);
        break;
      case "inactive":
        setList((prevList) => {
          const updatedList = prevList.map((item, index) => {
            if (index === id - 1) {
              return { ...item, status: 0 };
            }
            return item;
          });
          return updatedList;
        });
        setShow(false);
        break;
      default:
        return false;
    }
  };

  return (
    <>
    <Row>
    <Col className="mt-5 mb-5">
      <div className="form-row">
        <div className="form_section">
          <input
            type="text"
            placeholder="New Title"
            value={title ? title : ""}
            className={error ? "error" : ""}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className={uid ? "up_btn" : "sub_btn"} onClick={addTitle}>
            {uid ? "Update" : "Add New"}
          </button>
        </div>
        <div className="search_section">
          <input
            type="search"
            placeholder="Search Title..."
            className="search_box"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </Col>
    </Row>
    <Row>
      <div className="table">
        <table ref={tableRef}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {filterData?.length > 0 ? (
              <>
                {filterData?.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td style={{ textTransform: "capitalize" }}>
                      {item.title}
                    </td>
                    <td className={item.status === 0 ? "inAct" : "act"}>
                      {item.status === 0 ? "InActive" : "Active"}
                    </td>
                    <td className="action">
                      <span
                        className="test"
                        onClick={() => openPopUp(index)}
                      ></span>
                      {show && activeIndex === index && (
                        <div className="popup" ref={popupRef}>
                          <p onClick={() => handleAction("edit", index + 1)}>
                            Edit
                          </p>
                          <p onClick={() => handleAction("delete", index + 1)}>
                            Delete
                          </p>
                          <p onClick={() => handleAction("active", index + 1)}>
                            Active
                          </p>
                          <p
                            onClick={() => handleAction("inactive", index + 1)}
                          >
                            InActive
                          </p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td colSpan={4} style={{ color: "red" }}>
                  Data Not Founded
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Row>
     
    </>
  );
};

export default TableData;
