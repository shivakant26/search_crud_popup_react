const SubContent = ({data , setState}) => {

const changedata = () =>{
    setState({title:"ommiq"})        
}

  return (
    <>
      <h1>Grand Child : {data}</h1>
      <button onClick={changedata}>update Data</button>
    </>
  );
};

export default SubContent;
