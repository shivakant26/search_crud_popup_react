import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { collectionData } from "../utils/collectionData";

const Travel = () => {
    const [category , setCategory] = useState(collectionData)
    const [id , setId] = useState(0);
    const handleBtns = (e) =>{
        let word = e.target.value;
        if(word === 'All'){
            setCategory(collectionData)
            setId(1)
        }else if(word === 'Cars'){
            const filterd = collectionData.filter((item)=>item.kind === 'Cars');
            setCategory(filterd)
            setId(2)
        }else if(word === "Views") {
            const filtered = collectionData.filter(item=>item.kind === "Views");
            setCategory(filtered)
            setId(3)
          }
    }

    console.log(123456,category)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Travel Page</title>
        <meta name="description" content="This is the Travel page" />
      </Helmet>
      <div className="travels_section">
      <Container>
        <Row>
            <Col xm={12} md={12}>
                <div className="filter_button_group">
                    <button className={id === 1 ? "gactive" : ""} value="All" onClick={handleBtns}>All</button>
                    <button className={id === 2 ? "gactive" : ""} value="Cars" onClick={handleBtns}>Cars</button>
                    <button className={id === 3 ? "gactive" : ""} value="Views" onClick={handleBtns}>Views</button>
                </div>
            </Col>
        </Row>
      </Container>
      </div>
      <div className="card_section">
        <Container>
            <div className="card_wr">
                {
                    category?.map((item,index)=>{
                        return(
                            <div className="card_g6">
                                <img src={item.linkImg} />
                            </div>
                        )
                    })
                }
            </div>
        </Container>
      </div>
    </>
  );
};

export default Travel;
