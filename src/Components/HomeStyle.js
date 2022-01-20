import styled from "styled-components";
 const SearchStyled = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    margin-top: 150px;

    img {
      height: 400px;
      border-radius:10px;
      object-fit: cover;
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    width: 40%;
    .info{
      
      line-height: 1.5;
    }
    
  }
`;

export default  SearchStyled;
