import styled from "styled-components";

const PrimaryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin: 5% 15% 5% 15%;
  width: 100%;
  @media (max-width: 970px) {
    flex-direction: column;
    margin: 0;
  }
`;

export { PrimaryDiv, SecondaryDiv };
