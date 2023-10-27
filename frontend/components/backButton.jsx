import styled from "styled-components";
const Back = styled.button `
display: inline-block;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #00008B;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  &:hover{
    background-color: #fff;
    color: #00008B;
    border: 2px solid #000;
    box-shadow: 5px 5px 0px #00008B;
  }
  &:active{
    background-color: #ddd;
    box-shadow: none;
    transform: translateY(4px);
  }
`
export default Back;