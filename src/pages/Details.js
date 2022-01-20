import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchStyled from "../Components/HomeStyle";



function Details() {
  let { eventid } = useParams();
  const location = useLocation();
  

  const [details, setDetails] = useState([
    {properties: {place: "6 km S of P?hala, Hawaii", time: "3452233"}}

  ]);
  const updateDetails = async () => {
    const result = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=nc73677646"
    );
    const data = await result.json();
    console.log(data);
  
    setDetails(data.features.details);
  };

  useEffect(updateDetails, []);


  return(
   <>
   <SearchStyled>
        <div className="container">
          <div className="left">
            <h1> Single Earth Quakes</h1>

            {
              details.map((item,index) =>(
                <div key={index} className="info">
                  <h2>Place: {item.properties.place}</h2> 
                   <h2>Time: {item.properties.time}</h2>
                   <br />

                </div>

                ))
            }
    
            

          </div>
          <div className="right">
            <img
              src="https://c.tenor.com/X9WgjOy3AZQAAAAM/earthquake-shaking.gif"
              alt="earthquake"
            />
          </div>
        </div>
      </SearchStyled>
    </>
   
  

  
  );
}

export default Details;
