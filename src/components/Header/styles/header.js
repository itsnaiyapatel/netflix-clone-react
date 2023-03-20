import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 5% 5%  10%;
  border-bottom: 8px solid #222;  
  overflow: hidden;  
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('images/header/header-background.jpg');
  background-size: cover;
  height: 60vh;
`
export const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;
export const Section = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubSection = styled.div`
  display: flex;
  gap: 10px;
`;
export const Logo = styled.img`
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
export const SubTitle = styled.div`
`;