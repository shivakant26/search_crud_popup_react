import SubContent from "./SubContent";

const Content = ({data,setState}) => {
  return (
    <>
      <h1>Child :  {data}</h1>
      <SubContent data={data} setState={setState}/>
    </>
  );
};
export default Content;
