import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 50px 5%;
  border-bottom: 8px solid #222;
  overflow: hidden;
  // position: relative;
  background-image: url('https://netflixjunkie.com/wp-content/uploads/2022/08/netflix-11-1140x600.jpg');
  // background-color: blue;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  width: 100%;
  // max-width: 1000px;
  margin: auto;
  // position: relative;   
  background-color: transparent; 
`;
export const Section = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubSection = styled.div`
  display: flex;
  gap: 10px;
`;
export const Logo = styled.div`
height: 36px;
width: 134px;
margin-right: 40px;
`;
export const Button = styled.div`
display: flex;
cursor: pointer;
background-color: #e50914;
color: white;
align-items: center;
height: 25px;
padding: 6px 20px;
font-size: 1.2rem;
border-radius: 0.25rem;
border: 0; 
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.div``;

// background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 8), url('https://netflixjunkie.com/wp-content/uploads/2022/08/netflix-11-1140x600.jpg'));
