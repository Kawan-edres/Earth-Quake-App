import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  let { eventid } = useParams();
  const location = useLocation();

  return(
   <>
   
   <h1>location?.state?.place</h1>

  </>
  );
}

export default Details;
