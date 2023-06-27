import Content from "./Content";

const Home = ({state , setState}) => {
  return (
    <>
      <h1>Parent {state.title}</h1>
      <Content data={state.title} setState={setState}/>
    </>
  );
};
export default Home;
