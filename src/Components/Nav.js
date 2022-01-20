import { NavLink} from "react-router-dom";
import styled from "styled-components";

function Nav() {
    
  return (

    <StyledNav>

      <h1>
        <NavLink id="logo" to="/">
          Earthquake <span>App</span> 
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/details/:eventid">Details</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  overflow: hidden;
  position:fixed;
  width: 100%;
  top: 0;
  a{
    color: white;
    text-decoration: none;
  }
  ul{
      display: flex;
      list-style: none;
  }
  #logo{
      font-size: 2rem;
  }
  li{
    padding-left:10rem;
    font-size: 1.5rem;
  }
  a:hover{
      color: green;
  }

`;

export default Nav;
