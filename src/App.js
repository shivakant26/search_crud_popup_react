import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoute from "./routes";
// import Dropdowns from "./component/Dropdowns";
// import data, { LoanData, aboutData, serviceData, wordpressData } from "./component/data";
const App = () => {
  return (
    <div className="App">
      <MainRoute />
      {/* <div style={{display:"flex"}}>
        <Dropdowns data={aboutData}/>
        <Dropdowns data={LoanData}/>
        <Dropdowns data={wordpressData}/>
        <Dropdowns data={serviceData}/> 
      </div> */} 
    </div>
  );
};

export default App;
