import{Route,Routes} from "react-router-dom"
//pages
import Home from "./pages/Home"
import Details from "./pages/Details";
import Nav from "./Components/Nav";

//global style
import GlobalStyle from "./Components/GlobalStyle"

function App() {
  return (
   <div className="App">

   <GlobalStyle />
   <Nav />

   <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/details/:eventid" element={<Details/>} />
   </Routes>
   
   </div>
  );
}

export default App;
