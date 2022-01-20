import styled from "styled-components";
import SearchStyled from "../Components/HomeStyle";
import { useEffect, useState } from "react";


function Home() {
  const [earthQuake, setEarthQuake] = useState([
    {properties:
       {
        place: "10km WNW of The Geysers, CA",
        time: "1642025636650",

      
      
      }}

  ]);
  const updateEarthQuake = async () => {
    const result = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=10"
    );
    const data = await result.json();
    
  
    setEarthQuake(data.features);
  };
  

  useEffect(updateEarthQuake, []);
  

  return (
    <>
      <SearchStyled>
        <div className="container">
          <div className="left">
            <h1> Recent Earth Quakes</h1>

            {
              earthQuake.map((item) =>(
                <div key={item.id} className="info">
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

export default Home;
