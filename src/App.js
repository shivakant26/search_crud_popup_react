import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoute from "./routes";
import Dropdowns from "./component/Dropdowns";
import { aboutData, wordpressData } from "./utils/data";
const App = () => {
  return (
    <>
      <MainRoute />
      {/* <div style={{display:"flex"}}>
      <Dropdowns data={aboutData}/>
      <Dropdowns data={wordpressData}/>
      <Dropdowns data={aboutData}/>
      </div> */}
    </>
  );
};

export default App;
