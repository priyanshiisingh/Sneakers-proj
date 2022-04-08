import styled from "styled-components";

const Div = styled.div`
  display: none;
  @media (max-width: 970px) {
    display: flex;
  }
`;

const Box = styled.div`
  border-bottom: 1px solid #ced4da;
  margin-right: 10%;
  margin-left: 10%;
  padding-top: 20px;
  padding-bottom: 28px;

  @media (max-width: 850px) {
    margin-right: 0;
    margin-left: 0;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (max-width: 450px) {
    padding-right: 8px;
    padding-left: 8px;
  }
`;
export { Div, Box };
