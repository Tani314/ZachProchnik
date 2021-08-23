import styled from "styled-components"

export const ExhibitionWrapper= styled.div`
display: inline-block;
position: absolute;
align-content: center;
text-align: center;
margin-top: 2%;
`
export const Heading = styled.h2`
font-family: 'Lobster', cursive;
color: #484848;
`
export const Image= styled.img`
height : 40%;
width: 40%;
margin-bottom: 3%;
`
export const Para= styled.p`
font-family: 'Abel', sans-serif;
margin-left: 5%;
`
export const GroupE = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
  margin-left: 15%;
  max-width:50%;
  padding-left:100px;
  padding-bottom: 60px;
  color: #484848;
  @media (max-width: 1200px) {
    max-width:100%;
    padding-bottom: 5px;
  }
`;