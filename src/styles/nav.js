import styled from "styled-components";

export const Nav = styled.div`
    background-color: #DCDCDC;
    height: 30px;
    padding: 10px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 999;
    
  `
  export const NavText = styled.div`
  display: inline;
  justify-content: space-between;
  padding-bottom: 10px;
  font-family: 'Lobster', cursive;
  font-size: large;
  `
  export const linkStyle = {
    color: '#484848',
    float:'right',
    padding: '5px 35px 0px 50px'
  };

  export const linkStyl = {
    color: 'black',
    float:'left',
    padding: '5px 0px 0px 50px'
  };