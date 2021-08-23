import styled from "styled-components"

export const AboutWrapper= styled.div`
display: inline-block;
position: absolute;
text-align: center;
margin: 3%;
font-family: 'Lobster', cursive;
color: #484848;
`
export const AbtContent= styled.div`
margin-left: 20%;
`
export const Content= styled.div`
display: flex;
flex-direction: row;
max-width:50%;
padding-bottom: 60px;
@media (max-width: 1000px) {
  flex-direction: column;;
  max-width:100%;
  padding-bottom: 5px;
}
`

export const Image= styled.img`
height : 50%;
width: 50%;
margin: 5%
`
export const GrpOne = styled.div`
margin-left:5%;
`;
export const GrpTwo = styled.div`

margin-right:5%;
`;

export const Para= styled.p`
font-family: 'Abel', sans-serif;
`

